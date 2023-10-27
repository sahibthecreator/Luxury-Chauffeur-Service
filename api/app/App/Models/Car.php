<?php

namespace App\Models;

use App\DTOs\CarDTO;
use App\Plugins\Di\Factory;
use Exception;

class Car
{
    private $db;

    function __construct()
    {
        $di = Factory::getDi();
        $this->db = $di->getShared('db');
    }

    public function getAllCars()
    {
        $query = "SELECT * FROM `cars`";
        $carsData = $this->db->fetchData($query);
        return $carsData;
    }

    public function getById($id)
    {
        $query = "SELECT * FROM `cars` WHERE `id` = ?";
        $data = $this->db->fetchData($query, [$id]);
        if (sizeof($data) <= 0)
            throw new Exception("Car with ID '{$id}' not found.");

        return $data[0];
    }

    public function createCar($carData)
    {
        $query = "INSERT INTO `cars` 
              (`name`, `type`, `description`, `specification_1`, `specification_2`, `1_day_rate`, `3_days_rate`, `5_days_rate`, `1_week_rate`, 
              `max_passengers`, `max_suitcases`, `max_luggages`, `car_image`, `image_1`, `image_2`, `image_3`, 
              `image_4`, `image_5`) 
              VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        return $this->db->executeQuery($query, [
            $carData['carName'],
            $carData['type'],
            $carData['description'],
            $carData['specification1'],
            $carData['specification2'],
            $carData['1dayRate'],
            $carData['3daysRate'],
            $carData['5daysRate'],
            $carData['1weekRate'],
            $carData['maxPassengers'],
            $carData['maxSuitcases'],
            $carData['maxLuggages'],
            $carData['carImage'],
            $carData['image1'] ?? null,
            $carData['image2'] ?? null,
            $carData['image3'] ?? null,
            $carData['image4'] ?? null,
            $carData['image5'] ?? null,
        ]);
    }

    public function updateCar($carId, $carData)
    {
        $query = "UPDATE `cars` SET 
              `name` = ?,
              `type` = ?,
              `description` = ?,
              `specification_1` = ?,
              `specification_2` = ?,
              `1_day_rate` = ?,
              `3_days_rate` = ?,
              `5_days_rate` = ?,
              `1_week_rate` = ?,
              `max_passengers` = ?,
              `max_suitcases` = ?,
              `max_luggages` = ?,
              `car_image` = ?,
              `image_1` = ?,
              `image_2` = ?,
              `image_3` = ?,
              `image_4` = ?,
              `image_5` = ?
              WHERE `id` = ?";


        return $this->db->executeQuery($query, [
            $carData['carName'],
            $carData['type'],
            $carData['description'],
            $carData['specification1'],
            $carData['specification2'],
            $carData['1dayRate'],
            $carData['3daysRate'],
            $carData['5daysRate'],
            $carData['1weekRate'],
            $carData['maxPassengers'],
            $carData['maxSuitcases'],
            $carData['maxLuggages'],
            $carData['carImage'],
            $carData['image1'] ?? null,
            $carData['image2'] ?? null,
            $carData['image3'] ?? null,
            $carData['image4'] ?? null,
            $carData['image5'] ?? null,
            $carId
        ]);
    }

    public function getLastInsertedId()
    {
        return $this->db->getLastInsertedId();
    }
}
