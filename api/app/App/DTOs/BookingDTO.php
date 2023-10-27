<?php

namespace App\DTOs;

class BookingDTO
{
    private $id;
    private $orderNumber;
    private $userId;
    private $flightType;
    private $pickupAddress;
    private $destinationAddress;
    private $date;
    private $endDate;
    private $carId;
    private $fullName;
    private $phone;
    private $email;
    private $passengers;
    private $suitcases;
    private $luggages;
    private $flightNumber;
    private $paymentId;
    private $paymentCode;
    private $amount;
    private $paymentMethod;
    private $status;
    private $promoCode;
    private $createdDate;

    public function fromArray($data)
    {
        $bookingDTO = new BookingDTO();
        $bookingDTO->setId($data['id']);
        $bookingDTO->setOrderNumber($data['order_number']);
        $bookingDTO->setUserId($data['user_id']);
        $bookingDTO->setFlightType($data['flight_type']);
        $bookingDTO->setPickupAddress($data['pickup_address']);
        $bookingDTO->setDestinationAddress($data['destination_address']);
        $bookingDTO->setDate($data['date']);
        $bookingDTO->setEndDate($data['end_date']);
        $bookingDTO->setCarId($data['car_id']);
        $bookingDTO->setFullName($data['full_name']);
        $bookingDTO->setPhone($data['phone']);
        $bookingDTO->setEmail($data['email']);
        $bookingDTO->setPassengers($data['passengers']);
        $bookingDTO->setSuitcases($data['suitcases']);
        $bookingDTO->setLuggages($data['luggages']);
        $bookingDTO->setFlightNumber($data['flight_number']);
        $bookingDTO->setPaymentId($data['payment_id']);
        $bookingDTO->setPaymentCode($data['code']);
        $bookingDTO->setAmount($data['amount']);
        $bookingDTO->setPaymentMethod($data['method']);
        $bookingDTO->setStatus($data['status']);
        $bookingDTO->setPromoCode($data['promo_code']);
        $bookingDTO->setCreatedDate($data['created_date']);
        return $bookingDTO;
    }

    // Getter and setter methods for each property

    public function getId()
    {
        return $this->id;
    }

    public function setId($id)
    {
        $this->id = $id;
    }

    public function getOrderNumber()
    {
        return $this->orderNumber;
    }

    public function setOrderNumber($orderNumber)
    {
        $this->orderNumber = $orderNumber;
    }

    public function getUserId()
    {
        return $this->userId;
    }

    public function setUserId($userId)
    {
        $this->userId = $userId;
    }

    public function getFlightType()
    {
        return $this->flightType;
    }

    public function setFlightType($flightType)
    {
        $this->flightType = $flightType;
    }

    public function getPickupAddress()
    {
        return $this->pickupAddress;
    }

    public function setPickupAddress($pickupAddress)
    {
        $this->pickupAddress = $pickupAddress;
    }

    public function getDestinationAddress()
    {
        return $this->destinationAddress;
    }

    public function setDestinationAddress($destinationAddress)
    {
        $this->destinationAddress = $destinationAddress;
    }

    public function getDate()
    {
        return $this->date;
    }

    public function setDate($date)
    {
        $this->date = $date;
    }

    public function getEndDate()
    {
        return $this->endDate;
    }

    public function setEndDate($endDate)
    {
        $this->endDate = $endDate;
    }

    public function getCarId()
    {
        return $this->carId;
    }

    public function setCarId($carId)
    {
        $this->carId = $carId;
    }

    public function getFullName()
    {
        return $this->fullName;
    }

    public function setFullName($fullName)
    {
        $this->fullName = $fullName;
    }

    public function getPhone()
    {
        return $this->phone;
    }

    public function setPhone($phone)
    {
        $this->phone = $phone;
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function setEmail($email)
    {
        $this->email = $email;
    }

    public function getPassengers()
    {
        return $this->passengers;
    }

    public function setPassengers($passengers)
    {
        $this->passengers = $passengers;
    }

    public function getSuitcases()
    {
        return $this->suitcases;
    }

    public function setSuitcases($suitcases)
    {
        $this->suitcases = $suitcases;
    }

    public function getLuggages()
    {
        return $this->luggages;
    }

    public function setLuggages($luggages)
    {
        $this->luggages = $luggages;
    }

    public function getFlightNumber()
    {
        return $this->flightNumber;
    }

    public function setFlightNumber($flightNumber)
    {
        $this->flightNumber = $flightNumber;
    }

    public function getPaymentId()
    {
        return $this->paymentId;
    }

    public function setPaymentId($paymentId)
    {
        $this->paymentId = $paymentId;
    }

    public function getPaymentCode()
    {
        return $this->paymentCode;
    }

    public function setPaymentCode($paymentCode)
    {
        $this->paymentCode = $paymentCode;
    }

    public function getAmount()
    {
        return $this->amount;
    }

    public function setAmount($amount)
    {
        $this->amount = $amount;
    }

    public function getPaymentMethod()
    {
        return $this->paymentMethod;
    }

    public function setPaymentMethod($paymentMethod)
    {
        $this->paymentMethod = $paymentMethod;
    }

    public function getStatus()
    {
        return $this->status;
    }

    public function setStatus($status)
    {
        $this->status = $status;
    }

    public function getPromoCode()
    {
        return $this->promoCode;
    }

    public function setPromoCode($promoCode)
    {
        $this->promoCode = $promoCode;
    }

    public function getCreatedDate()
    {
        return $this->createdDate;
    }

    public function setCreatedDate($createdDate)
    {
        $this->createdDate = $createdDate;
    }

    public function toArray()
    {
        return [
            'id' => $this->id,
            'order_number' => $this->orderNumber,
            'user_id' => $this->userId,
            'flight_type' => $this->flightType,
            'pickup_address' => $this->pickupAddress,
            'destination_address' => $this->destinationAddress,
            'date' => $this->date,
            'end_date' => $this->endDate,
            'car_id' => $this->carId,
            'full_name' => $this->fullName,
            'phone' => $this->phone,
            'email' => $this->email,
            'passengers' => $this->passengers,
            'suitcases' => $this->suitcases,
            'luggages' => $this->luggages,
            'flight_number' => $this->flightNumber,
            'payment_id' => $this->paymentId,
            'payment_code' => $this->paymentCode,
            'amount' => $this->amount,
            'payment_method' => $this->paymentMethod,
            'status' => $this->status,
            'promo_code' => $this->promoCode,
            'created_date' => $this->createdDate,
        ];
    }
}
