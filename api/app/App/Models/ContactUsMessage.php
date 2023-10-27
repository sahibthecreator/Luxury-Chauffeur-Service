<?php

namespace App\Models;

use App\DTOs\UserDTO;
use App\Plugins\Di\Factory;

class ContactUsMessage extends BaseModel
{

    function __construct()
    {
        parent::__construct();
    }

    public function createMessage($fullName, $email, $phone, $message)
    {
        $query = "INSERT INTO `messages`(`fullName`, `email`, `phone`, `message`) VALUES (?, ?, ?, ?)";

        return $this->db->executeQuery($query, [$fullName, $email, $phone, $message]);
    }


    public function getAll()
    {
        $query = "SELECT * FROM messages";
        return $this->db->fetchData($query);
    }
}
