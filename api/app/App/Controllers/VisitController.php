<?php

namespace App\Controllers;

use App\Plugins\Http\Response as Status;
use App\Services\VisitService;
use Exception;

class VisitController extends BaseController
{
    private $visitService;

    function __construct()
    {
        $this->visitService = new VisitService();
        parent::__construct();
    }

    public function getAllLogs()
    {
        try {
            $visits = $this->visitService->getAll();
            (new Status\Ok($visits))->send();
        } catch (Exception $e) {
            (new Status\BadRequest($e->getMessage()))->send();
        }
    }

    public function saveLog()
    {
        $data = $this->reqBody->data;

        try {
            $this->visitService->saveLog($data);
            (new Status\Ok("success"))->send();
        } catch (Exception $e) {
            (new Status\BadRequest($e->getMessage()))->send();
        }
    }
}
