<?php

namespace App\Models;

class Subscriber extends BaseModel
{

    function __construct()
    {
        parent::__construct();
    }

    public function create($email)
    {
        $query = "INSERT INTO `subscribers`(`email`) VALUES (?)";
        return $this->db->executeQuery($query, [$email]);
    }

    public function getAll()
    {
        $query = "SELECT * FROM subscribers";
        return $this->db->fetchData($query);
    }
}
