<?php

namespace App\Models;

use App\Plugins\Di\Factory;

class Visit
{
    private $db;

    function __construct()
    {
        $di = Factory::getDi();
        $this->db = $di->getShared('db');
    }

    public function create($page, $device, $location)
    {
        $query = "INSERT INTO `visits`(`page`, `country`, `city`, `ip`, `device`) VALUES (?, ?, ?, ?, ?)";
        return $this->db->executeQuery($query, [$page, $location["Country"], $location["City"], $location["IP"], $device]);
    }

    public function getAll()
    {
        $query = "SELECT * FROM `visits` ORDER BY `created_date` DESC";
        return $this->db->fetchData($query);
    }

    public function getLastInsertedId()
    {
        return $this->db->getLastInsertedId();
    }
}
