<?php

namespace App\Models;

use App\DTOs\UserDTO;
use App\Plugins\Di\Factory;

class User
{
    private $db;

    function __construct()
    {
        $di = Factory::getDi();
        $this->db = $di->getShared('db');
    }

    public function createUser($fullName, $email, $phone, $occupation, $password, $city, $country)
    {
        $query = "INSERT INTO `users`(`fullName`, `email`, `phone`, `occupation`, `password`, `city`, `country`) VALUES (?, ?, ?, ?, ?, ?, ?)";

        return $this->db->executeQuery($query, [$fullName, $email, $phone, $occupation, $password, $city, $country]);
    }

    public function updateUser($id, $fullName, $phone, $email, $occupation)
    {
        $query = "UPDATE `users` SET `fullName` = ?, `phone` = ?, `email` = ?, `occupation` = ? WHERE `id` = ?";
        $params = [$fullName, $phone, $email, $occupation, $id];

        return $this->db->executeQuery($query, $params);
    }

    public function getAll()
    {
        $query = "SELECT * FROM `users`";
        $usersData = $this->db->fetchData($query);
        if ($usersData === null)
            return null;

        $usersDTO = [];
        foreach ($usersData as $data) {
            $usersDTO[] = UserDTO::fromArray($data);
        }
        return $usersDTO;
    }

    public function getById($id)
    {
        $query = "SELECT * FROM `users` WHERE `id` = ?";
        $data = $this->db->fetchData($query, [$id]);
        if ($data === null)
            return null;
        $user = $data[0];
        $userData = new UserDTO();
        $userData->setId($user['id']);
        $userData->setFullName($user['fullName']);
        $userData->setEmail($user['email']);
        $userData->setPhone($user['phone']);
        $userData->setOccupation($user['occupation']);
        $userData->setPassword($user['password']);
        $userData->setCity($user['city']);
        $userData->setCountry($user['country']);
        return $userData;
    }

    public function getByEmail($email)
    {
        $query = "SELECT * FROM `users` WHERE `email` = ?";
        $data = $this->db->fetchData($query, [$email]);
        if ($data == null)
            return null;

        $user = $data[0];
        $userData = new UserDTO();
        $userData->setId($user['id']);
        $userData->setFullName($user['fullName']);
        $userData->setEmail($user['email']);
        $userData->setPhone($user['phone']);
        $userData->setOccupation($user['occupation']);
        $userData->setPassword($user['password']);
        $userData->setCity($user['city']);
        $userData->setCountry($user['country']);

        return $userData;
    }

    public function getLastInsertedId()
    {
        return $this->db->getLastInsertedId();
    }
}
