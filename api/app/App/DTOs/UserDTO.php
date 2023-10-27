<?php

namespace App\DTOs;

class UserDTO
{
    // Define private properties to represent user data
    private $id;
    private $fullName;
    private $email;
    private $phone;
    private $occupation;
    private $password;
    private $city;
    private $country;

    // Getter and setter methods for each property

    public function getId()
    {
        return $this->id;
    }

    public function setId($id)
    {
        $this->id = $id;
    }

    public function getFullName()
    {
        return $this->fullName;
    }

    public function setFullName($fullName)
    {
        $this->fullName = $fullName;
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function setEmail($email)
    {
        $this->email = $email;
    }

    public function getPhone()
    {
        return $this->phone;
    }

    public function setPhone($phone)
    {
        $this->phone = $phone;
    }

    public function getOccupation()
    {
        return $this->occupation;
    }

    public function setOccupation($occupation)
    {
        $this->occupation = $occupation;
    }

    public function getPassword()
    {
        return $this->password;
    }

    public function setPassword($password)
    {
        $this->password = $password;
    }

    public function getCity()
    {
        return $this->city;
    }

    public function setCity($city)
    {
        $this->city = $city;
    }

    public function getCountry()
    {
        return $this->country;
    }

    public function setCountry($country)
    {
        $this->country = $country;
    }

    public static function fromArray($data)
    {
        $UserDTO = new UserDTO();
        $UserDTO->setId($data['id']);
        $UserDTO->setFullName($data['fullName']);
        $UserDTO->setEmail($data['email']);
        $UserDTO->setPhone($data['phone']);
        $UserDTO->setOccupation($data['occupation']);
        $UserDTO->setPassword($data['password']);
        $UserDTO->setCity($data['city']);
        $UserDTO->setCountry($data['country']);
        return $UserDTO;
    }

    public function toArray()
    {
        return [
            'id' => $this->id,
            'fullName' => $this->fullName,
            'email' => $this->email,
            'phone' => $this->phone,
            'occupation' => $this->occupation,
            'password' => $this->password,
            'city' => $this->city,
            'country' => $this->country,
        ];
    }
}
