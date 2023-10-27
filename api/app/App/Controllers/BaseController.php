<?php


namespace App\Controllers;

use App\Plugins\Di\Injectable;

class BaseController extends Injectable
{
    protected $reqBody;

    function __construct()
    {
        $json = file_get_contents('php://input');
        $this->reqBody = json_decode($json);
    }
}
