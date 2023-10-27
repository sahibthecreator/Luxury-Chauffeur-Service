<?php

namespace App\Controllers;

use App\Services\SubscriberService;
use App\Plugins\Http\Response as Status;
use Exception;

class SubscriberController extends BaseController
{
    private $subscriberService;

    public function __construct()
    {
        $this->subscriberService = new SubscriberService();
        parent::__construct();
    }

    public function getAllSubscribers()
    {
        try {
            $subscribers = $this->subscriberService->getAll();
            (new Status\Ok($subscribers))->send();
        } catch (Exception $e) {
            (new Status\BadRequest($e->getMessage()))->send();
        }
    }

    public function saveSubscriber()
    {
        $data = $this->reqBody->data;
        if (!isset($data->email)) {
            (new Status\BadRequest("Email is missing"))->send();
            return;
        }
        try {
            $this->subscriberService->saveSubscriber($data->email);
            (new Status\Ok("success"))->send();
        } catch (Exception $e) {
            (new Status\BadRequest($e->getMessage()))->send();
        }
    }
}
