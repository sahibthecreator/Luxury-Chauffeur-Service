<?php

namespace App\Models;


use App\Plugins\Di\Factory;

class BaseModel
{
    protected $db;

    function __construct()
    {
        $di = Factory::getDi();
        $this->db = $di->getShared('db');
    }
}
