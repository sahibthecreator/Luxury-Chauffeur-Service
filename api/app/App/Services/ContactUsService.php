<?php

namespace App\Services;

use App\Models\ContactUsMessage;

class ContactUsService
{
    private $contactModel;

    public function __construct()
    {
        $this->contactModel = new ContactUsMessage();
    }

    public function saveMessage($fullName, $email, $phone, $message)
    {
        $fullName = filter_var($fullName, FILTER_SANITIZE_SPECIAL_CHARS);
        $email = filter_var($email, FILTER_SANITIZE_SPECIAL_CHARS);
        $phone = filter_var($phone, FILTER_SANITIZE_SPECIAL_CHARS);
        $message = filter_var($message, FILTER_SANITIZE_SPECIAL_CHARS);

        return $this->contactModel->createMessage($fullName, $email, $phone, $message);
    }

    public function getAll()
    {
        $messages = $this->contactModel->getAll();
        return $messages;
    }
}
