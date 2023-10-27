<?php

namespace App\Controllers;

use App\Plugins\Http\Response as Status;
use App\Services\BookingService;
use App\Plugins\Http\Exceptions\NotFound;
use Exception;

class BookingController extends BaseController
{
    private $bookingService;

    public function __construct()
    {
        $this->bookingService = new BookingService();
        parent::__construct();
    }

    public function createBooking()
    {
        $data = $this->reqBody->data;
        try {
            $this->bookingService->createBooking($data);
            (new Status\Ok("success"))->send();
        } catch (Exception $e) {
            (new Status\BadRequest($e->getMessage()))->send();
        }
    }

    public function createPayment()
    {
        $data = $this->reqBody->data;
        try {
            $res = $this->bookingService->createPayment($data);
            (new Status\Ok($res))->send();
        } catch (Exception $e) {
            (new Status\BadRequest($e->getMessage()))->send();
        }
    }

    public function updatePayment($id)
    {
        $data = $this->reqBody->data;
        try {
            $res = $this->bookingService->updatePayment($id, $data);
            (new Status\Ok($res))->send();
        } catch (Exception $e) {
            (new Status\BadRequest($e->getMessage()))->send();
        }
    }

    public function handlePayment()
    {
        $data = $this->reqBody->data;
        try {
            $paymentIntent = $this->bookingService->handlePayment($data);
            (new Status\Ok($paymentIntent))->send();
        } catch (Exception $e) {
            (new Status\BadRequest($e->getMessage()))->send();
        }
    }

    public function getPaymentByCode($code)
    {
        try {
            $payment = $this->bookingService->getPaymentByCode($code);
            (new Status\Ok($payment))->send();
        } catch (Exception $e) {
            (new Status\BadRequest($e->getMessage()))->send();
        }
    }

    public function getAwaitingPaymentsByUserId($userId)
    {
        try {
            $payments = $this->bookingService->getAwaitingPaymentsByUserId($userId);
            (new Status\Ok($payments))->send();
        } catch (Exception $e) {
            (new Status\BadRequest($e->getMessage()))->send();
        }
    }

    public function getAllBookings()
    {
        try {
            $bookings = $this->bookingService->getAll();
            (new Status\Ok($bookings))->send();
        } catch (Exception $e) {
            (new Status\BadRequest($e->getMessage()))->send();
        }
    }

    public function getBookingByUserId($id)
    {
        try {
            $bookings = $this->bookingService->getByUserId($id);
            (new Status\Ok($bookings))->send();
        } catch (Exception $e) {
            if ($e instanceof NotFound) {
                (new Status\NotFound($e->getMessage()))->send();
            } else {
                (new Status\BadRequest($e->getMessage()))->send();
            }
        }
    }
}
