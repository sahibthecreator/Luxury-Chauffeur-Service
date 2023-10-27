<?php

namespace App\Controllers;

use App\Plugins\Http\Response as Status;
use App\Plugins\Di\Factory;
use App\Services\UserService;
use App\Models\Location;
use App\Models\Tag;
use App\Models\FacilityTag;
use Exception;

class UserController extends BaseController
{
    private $userService;

    function __construct()
    {
        $this->userService = new UserService();

        parent::__construct();
    }

    public function register()
    {
        $data = $this->reqBody->data;
        if (!isset($data->fullName) || !isset($data->email) || !isset($data->phone) || !isset($data->occupation) || !isset($data->password)) {
            (new Status\BadRequest("Some data missing"))->send();
            return;
        }

        $fullName = filter_var($data->fullName, FILTER_SANITIZE_SPECIAL_CHARS);
        $email = filter_var($data->email, FILTER_SANITIZE_SPECIAL_CHARS);
        $phone = filter_var($data->phone, FILTER_SANITIZE_SPECIAL_CHARS);
        $occupation = filter_var($data->occupation, FILTER_SANITIZE_SPECIAL_CHARS);
        $password = filter_var($data->password, FILTER_SANITIZE_SPECIAL_CHARS);

        // TODO: Replace with actual country and city
        $city = "Baku";
        $country = "Azerbaijan";
        // -------------------------------------------
        try {
            $this->userService->register($fullName, $email, $phone, $occupation, $password, $city, $country);
            (new Status\Ok("success"))->send();
        } catch (Exception $e) {
            (new Status\BadRequest($e->getMessage()))->send();
        }
    }

    public function login()
    {
        $data = $this->reqBody->data;
        if (!isset($data->email) || !isset($data->password)) {
            (new Status\BadRequest("Some data missing"))->send();
            return;
        }
        $email = filter_var($data->email, FILTER_SANITIZE_SPECIAL_CHARS);
        $password = filter_var($data->password, FILTER_SANITIZE_SPECIAL_CHARS);
        $userId = $this->userService->login($email, $password);

        if ($userId == null) {
            (new Status\Unauthorized("Invalid email or password"))->send();
            return;
        }

        (new Status\Ok($userId))->send();
    }

    public function getAllUsers()
    {
        try {
            $users = $this->userService->getAll();
            (new Status\Ok($users))->send();
        } catch (Exception $e) {
            (new Status\NotFound($e->getMessage()))->send();
        }
    }

    public function getUserById($id)
    {
        try {
            $user = $this->userService->getById($id);
            (new Status\Ok($user->toArray()))->send();
        } catch (Exception $e) {
            (new Status\NotFound($e->getMessage()))->send();
        }
    }

    public function update($id)
    {
        $user = $this->reqBody->user;
        try {
            $this->userService->update($id, $user);
            (new Status\Ok("success"))->send();
        } catch (Exception $e) {
            (new Status\BadRequest($e->getMessage()))->send();
        }
    }
}
