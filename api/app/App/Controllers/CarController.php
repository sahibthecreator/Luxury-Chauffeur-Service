<?php

namespace App\Controllers;

use App\Plugins\Http\Response as Status;
use App\Services\CarService;
use Exception;

class CarController extends BaseController
{
    private $carService;

    function __construct()
    {
        $this->carService = new CarService();
        parent::__construct();
    }

    public function getCars()
    {
        try {
            $cars = $this->carService->getAllCars();
            (new Status\Ok($cars))->send();
        } catch (Exception $e) {
            (new Status\NotFound($e->getMessage()))->send();
        }
    }

    public function getCarById($id)
    {
        try {
            $car = $this->carService->getById($id);
            (new Status\Ok($car))->send();
        } catch (Exception $e) {
            (new Status\NotFound($e->getMessage()))->send();
        }
    }

    public function addCar()
    {
        try {
            $car = $this->carService->createCar();
            (new Status\Ok("success"))->send();
        } catch (Exception $e) {
            (new Status\NotFound($e->getMessage()))->send();
        }
    }

    public function updateCar($id)
    {
        try {
            $this->carService->updateCar($id);
            (new Status\Ok("success"))->send();
        } catch (Exception $e) {
            (new Status\BadRequest($e->getMessage()))->send();
        }
    }
}
