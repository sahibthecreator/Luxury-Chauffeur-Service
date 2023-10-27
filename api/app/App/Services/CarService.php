<?php

namespace App\Services;

use App\Models\Car;
use Exception;

class CarService
{
    private $carModel;

    function __construct()
    {
        $this->carModel = new Car();
    }

    public function getAllCars()
    {
        $cars = $this->carModel->getAllCars();
        return $cars;
    }

    public function getById($id)
    {
        $car = $this->carModel->getById($id);
        if ($car == null)
            throw new Exception("Car not found");

        return $car;
    }

    public function createCar()
    {
        try {
            $carName = filter_var($_POST['carName'], FILTER_SANITIZE_SPECIAL_CHARS);
            $type = filter_var($_POST['type'], FILTER_SANITIZE_SPECIAL_CHARS);
            $description = filter_var($_POST['description'] ?? null, FILTER_SANITIZE_SPECIAL_CHARS);
            $specification1 = filter_var($_POST['specification1'] ?? null, FILTER_SANITIZE_SPECIAL_CHARS);
            $specification2 = filter_var($_POST['specification2'] ?? null, FILTER_SANITIZE_SPECIAL_CHARS);
            $rate_1_day = filter_var($_POST['day1Rate'], FILTER_SANITIZE_NUMBER_INT);
            $rate_3_days = filter_var($_POST['days3Rate'], FILTER_SANITIZE_NUMBER_INT);
            $rate_5_days = filter_var($_POST['days5Rate'], FILTER_SANITIZE_NUMBER_INT);
            $rate_1_week = filter_var($_POST['week1Rate'], FILTER_SANITIZE_NUMBER_INT);
            if ($_POST['type'] == "Airport") {
                $maxPassengers = filter_var($_POST['maxPassengers'] ?? null, FILTER_SANITIZE_NUMBER_INT);
                $maxSuitcases = filter_var($_POST['maxSuitcases'] ?? null, FILTER_SANITIZE_NUMBER_INT);
                $maxLuggages = filter_var($_POST['maxLuggages'] ?? null, FILTER_SANITIZE_NUMBER_INT);
            }
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }

        $carImageFileName = $this->saveImage("carImage");
        $image1FileName = $this->saveImage("image1");
        $image2FileName = $this->saveImage("image2");
        $image3FileName = $this->saveImage("image3");
        $image4FileName = $this->saveImage("image4");
        $image5FileName = $this->saveImage("image5");

        // Create an array with the sanitized data and image file paths
        $carData = [
            'carName' => $carName,
            'type' => $type,
            'description' => $description,
            'specification1' => $specification1,
            'specification2' => $specification2,
            '1dayRate' => $rate_1_day,
            '3daysRate' => $rate_3_days,
            '5daysRate' => $rate_5_days,
            '1weekRate' => $rate_1_week,
            'maxPassengers' => $maxPassengers ?? null,
            'maxSuitcases' => $maxSuitcases ?? null,
            'maxLuggages' => $maxLuggages ?? null,
            'carImage' =>  $carImageFileName,
            'image1' => $image1FileName,
            'image2' => $image2FileName,
            'image3' => $image3FileName,
            'image4' => $image4FileName,
            'image5' => $image5FileName,
        ];

        return $this->carModel->createCar($carData);
    }

    public function updateCar($id)
    {
        // Get the existing car data from the database
        $existingCar = $this->carModel->getById($id);

        try {
            $carName = filter_var($_POST['carName'], FILTER_SANITIZE_SPECIAL_CHARS);
            $type = filter_var($_POST['type'], FILTER_SANITIZE_SPECIAL_CHARS);
            $description = filter_var($_POST['description'] ?? null, FILTER_SANITIZE_SPECIAL_CHARS);
            $specification1 = filter_var($_POST['specification1'] ?? null, FILTER_SANITIZE_SPECIAL_CHARS);
            $specification2 = filter_var($_POST['specification2'] ?? null, FILTER_SANITIZE_SPECIAL_CHARS);
            $rate_1_day = filter_var($_POST['1dayRate'], FILTER_SANITIZE_NUMBER_INT);
            $rate_3_days = filter_var($_POST['3daysRate'], FILTER_SANITIZE_NUMBER_INT);
            $rate_5_days = filter_var($_POST['5daysRate'], FILTER_SANITIZE_NUMBER_INT);
            $rate_1_week = filter_var($_POST['1weekRate'], FILTER_SANITIZE_NUMBER_INT);
            $maxPassengers = filter_var($_POST['maxPassengers'] ?? null, FILTER_SANITIZE_NUMBER_INT);
            $maxSuitcases = filter_var($_POST['maxSuitcases'] ?? null, FILTER_SANITIZE_NUMBER_INT);
            $maxLuggages = filter_var($_POST['maxLuggages'] ?? null, FILTER_SANITIZE_NUMBER_INT);
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }

        // Check if the mainImage is being updated
        $carImageFileName = $this->updateImage("carImage", $existingCar['car_image']);
        $image1FileName = $this->updateImage("image1", $existingCar['image_1']);
        $image2FileName = $this->updateImage("image2", $existingCar['image_2']);
        $image3FileName = $this->updateImage("image3", $existingCar['image_3']);
        $image4FileName = $this->updateImage("image4", $existingCar['image_4']);
        $image5FileName = $this->updateImage("image5", $existingCar['image_5']);

        // Create an array with the sanitized data and updated image file paths
        $carData = [
            'carName' => $carName,
            'type' => $type,
            'description' => $description,
            'specification1' => $specification1,
            'specification2' => $specification2,
            '1dayRate' => $rate_1_day,
            '3daysRate' => $rate_3_days,
            '5daysRate' => $rate_5_days,
            '1weekRate' => $rate_1_week,
            'maxPassengers' => $maxPassengers,
            'maxSuitcases' => $maxSuitcases,
            'maxLuggages' => $maxLuggages,
            'carImage' =>  $carImageFileName,
            'image1' => $image1FileName,
            'image2' => $image2FileName,
            'image3' => $image3FileName,
            'image4' => $image4FileName,
            'image5' => $image5FileName,
        ];
        return $this->carModel->updateCar($id, $carData);
    }


    function updateImage($fileName, $existingFileName)
    {
        $mainImageFileName = $existingFileName;

        if (isset($_FILES[$fileName])) {
            $mainImageFile = $_FILES[$fileName];

            if ($mainImageFile['error'] === UPLOAD_ERR_OK) {
                // Main image is being updated
                $mainImageFileName = time() . '_' . $mainImageFile['name'];
                $mainImageFilePath = __DIR__ . '/../../public/car_images/' . $mainImageFileName;
                move_uploaded_file($mainImageFile['tmp_name'], $mainImageFilePath);

                // Delete the existing main image file if it's different from the new one
                if ($existingFileName !== $mainImageFileName && file_exists(__DIR__ . '/../../public/car_images/' . $existingFileName)) {
                    unlink(__DIR__ . '/../../public/car_images/' . $existingFileName);
                }
            } else {
                $mainImageFileName = $existingFileName;
            }
        }
        return $mainImageFileName;
    }

    function saveImage($fileName)
    {
        if (isset($_FILES[$fileName])) {
            $image = $_FILES[$fileName];

            if ($image['error'] === UPLOAD_ERR_OK) {
                // Main image is being updated
                $mainImageFileName = time() . '_' . $image['name'];
                $mainImageFilePath = __DIR__ . '/../../public/car_images/' . $mainImageFileName;
                move_uploaded_file($image['tmp_name'], $mainImageFilePath);
                return $mainImageFileName;
            } else {
                throw new Exception("Something went wrong");
            }
        }
        return null;
    }
}
