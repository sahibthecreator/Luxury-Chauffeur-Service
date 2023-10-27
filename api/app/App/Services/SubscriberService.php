<?php

namespace App\Services;

use App\Models\Subscriber;

class SubscriberService
{
    private $subscriberModel;

    public function __construct()
    {
        $this->subscriberModel = new Subscriber();
    }

    public function saveSubscriber($email)
    {
        $email = filter_var($email, FILTER_SANITIZE_EMAIL);
        return $this->subscriberModel->create($email);
    }

    public function getAll()
    {
        $subscribers = $this->subscriberModel->getAll();
        return $subscribers;
    }
}
