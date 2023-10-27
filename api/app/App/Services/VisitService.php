<?php

namespace App\Services;

use App\Models\Visit;

class VisitService
{
    private $visitModel;

    function __construct()
    {
        $this->visitModel = new Visit();
    }

    public function getAll()
    {
        return $this->visitModel->getAll();
    }

    public function saveLog($data)
    {
        $page = $data->page;
        $device = $data->device;
        $location = $this->GetLocationData();
        return $this->visitModel->create($page, $device, $location);
    }


    function GetLocationData()
    {
        return array("Country" => 'Azerbaijan', "City" => 'Baku', "IP" => '192.168.12.1');
        $ip = $this->getUserIpAddr();
        $url = 'https://ip-api.io/json/' . $ip;
        $json = file_get_contents($url);
        $obj = json_decode($json);
        $country = $obj->country_name;
        $city = $obj->city;
        $data = array("Country" => $country, "City" => $city, "IP" => $ip);
        return $data;
    }

    function getUserIpAddr()
    {
        if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
            //ip from share internet
            $ip = $_SERVER['HTTP_CLIENT_IP'];
        } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
            //ip pass from proxy
            $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
        } else {
            $ip = $_SERVER['REMOTE_ADDR'];
        }
        return $ip;
    }
}
