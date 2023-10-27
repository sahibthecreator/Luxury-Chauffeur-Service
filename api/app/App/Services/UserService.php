<?php

namespace App\Services;

use App\Plugins\Http\Response as Status;
use App\Plugins\Http\Exceptions;
use App\Plugins\Di\Factory;
use App\Models\User;
use App\Models\Location;
use App\Models\Tag;
use App\Models\FacilityTag;
use Exception;

class UserService
{
    private $userModel;

    function __construct()
    {
        $this->userModel = new User();
    }

    public function getById($id)
    {
        $user = $this->userModel->getById($id);
        if ($user == null)
            throw new Exception("User not found");

        return $user;
    }

    public function getAll()
    {
        $users = $this->userModel->getAll();
        $usersArray = [];
        foreach ($users as $user) {
            $usersArray[] = $user->toArray();
        }
        return $usersArray;
    }

    public function register($fullName, $email, $phone, $occupation, $password, $city, $country)
    {
        if ($this->userModel->getByEmail($email) != null) {
            throw new Exception("Email already registered");
        }
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $hasshedPassword = password_hash($password, PASSWORD_DEFAULT);
            return $this->userModel->createUser($fullName, $email, $phone, $occupation, $hasshedPassword, $city, $country);
        } else {
            throw new Exception("Email is invalid");
        }
    }

    public function login($email, $password)
    {
        $user = $this->userModel->getByEmail($email);

        if ($user != null && password_verify($password, $user->getPassword())) {
            return $user->getId();
        }

        return null;
    }

    public function update($id, $user)
    {
        $existingUser = $this->userModel->getByEmail($user->email);
        if ($existingUser != null) {
            if ($existingUser->getId() != $id)
                throw new Exception("Email already registered");
        }
        if (filter_var($user->email, FILTER_VALIDATE_EMAIL)) {
            return $this->userModel->updateUser($id, $user->fullName, $user->phone, $user->email, $user->occupation);
        } else {
            throw new Exception("Email is invalid");
        }
    }
}
