<?php

namespace App\Models;

use App\DTOs\BookingDTO;
use App\Plugins\Di\Factory;

class Booking
{
    private $db;

    public function __construct()
    {
        $di = Factory::getDi();
        $this->db = $di->getShared('db');
    }

    public function getAll()
    {
        $query = "SELECT *
        FROM bookings
        INNER JOIN payments ON bookings.payment_id = payments.id  ORDER BY `created_date` DESC";
        $bookingsData = $this->db->fetchData($query);
        return $bookingsData;
    }

    public function getByUserId($id)
    {
        $query = "SELECT * FROM `bookings`, `payments` WHERE bookings.user_id = ? AND bookings.payment_id = payments.id ORDER BY `created_date` DESC";
        return $this->db->fetchData($query, [$id]);
    }



    public function getPaymentByCode($code)
    {
        $query = "SELECT * FROM `payments` p, `bookings` b WHERE p.code = ? AND b.payment_id = p.id";
        $data = $this->db->fetchData($query, [$code]);
        if ($data) return $data[0];
        else return null;
    }

    public function getAwaitingPaymentsByUserId($userId)
    {
        $query = "SELECT * FROM `payments` WHERE `user_id` = ? AND `status` = 'Awaiting'";
        return $this->db->fetchData($query, [$userId]);
    }

    public function createBooking($orderNumber, $userId, $flightType, $pickupAddress, $destinationAddress, $date, $endDate, $carId, $fullName, $phone, $email, $passengers, $suitcases, $luggages, $terminal, $paymentMethod, $promoCode, $amount)
    {
        $query = "INSERT INTO `payments`(`code`, `amount`, `method`, `status`) VALUES (?, ?, ?, ?)";
        $this->db->executeQuery($query, [uniqid(), $amount, $paymentMethod, 'Not Paid']);
        $paymentId = $this->db->getLastInsertedId();

        $query = "INSERT INTO `bookings` 
                  (`order_number`, `user_id`, `flight_type`, `pickup_address`, `destination_address`, `date`, `end_date`, `car_id`, 
                  `full_name`, `phone`, `email`, `passengers`, `suitcases`, `luggages`, 
                  `terminal`, `payment_id`, `promo_code`) 
                  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        return $this->db->executeQuery($query, [
            $orderNumber,
            $userId,
            $flightType,
            $pickupAddress,
            $destinationAddress,
            $date,
            $endDate,
            $carId,
            $fullName,
            $phone,
            $email,
            $passengers,
            $suitcases,
            $luggages,
            $terminal,
            $paymentId,
            $promoCode,
        ]);
    }

    public function createPayment($amount, $userId, $description)
    {
        $query = "INSERT INTO `payments`(`user_id`, `description`, `code`, `amount`, `method`, `status`) VALUES (?, ?, ?, ?, ?, ?)";
        $paymentCode = uniqid();
        $this->db->executeQuery($query, [$userId, $description, $paymentCode, $amount, 'Online', 'Awaiting']);
        return $paymentCode;
    }

    public function updatePayment($id, $amount, $description, $status)
    {
        $query = "UPDATE `payments` SET `description` = ?, `amount` = ?, `status` = ? WHERE `id` = ?";
        return $this->db->executeQuery($query, [$description, $amount, $status, $id]);
    }
}
