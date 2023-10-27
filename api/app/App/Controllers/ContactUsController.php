<?php

namespace App\Controllers;

use App\Plugins\Http\Response as Status;
use App\Services\ContactUsService;
use Exception;

class ContactUsController extends BaseController
{
    private $contactUsService;

    public function __construct()
    {
        $this->contactUsService = new ContactUsService();
        parent::__construct();
    }

    public function getAllMessages()
    {
        try {
            $messages = $this->contactUsService->getAll();
            (new Status\Ok($messages))->send();
        } catch (Exception $e) {
            (new Status\BadRequest($e->getMessage()))->send();
        }
    }

    public function saveMessage()
    {
        $data = $this->reqBody->data;
        if (isset($data->fullName) && (isset($data->email) || !isset($data->phone)) && !isset($data->message)) {
            (new Status\BadRequest("Some data missing"))->send();
            return;
        }
        $email = isset($data->email) ? $data->email : null;
        $phone = isset($data->phone) ? $data->phone : null;


        try {
            $this->contactUsService->saveMessage($data->fullName, $email, $phone, $data->message);
            (new Status\Ok("success"))->send();
        } catch (Exception $e) {
            (new Status\BadRequest($e->getMessage()))->send();
        }
    }
}
