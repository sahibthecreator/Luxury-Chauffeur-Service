<?php

/** @var Bramus\Router\Router $router */

// Define routes here
$router->post('/register', App\Controllers\UserController::class . '@register');
$router->post('/login', App\Controllers\UserController::class . '@login');
$router->get('/users', App\Controllers\UserController::class . '@getAllUsers');
$router->get('/users/{id}', App\Controllers\UserController::class . '@getUserById');
$router->put('/users/{id}', App\Controllers\UserController::class . '@update');

$router->post('/contact-us', App\Controllers\ContactUsController::class . '@saveMessage');
$router->get('/contact-us', App\Controllers\ContactUsController::class . '@getAllMessages');

$router->get('/bookings', App\Controllers\BookingController::class . '@getAllBookings');
$router->post('/bookings', App\Controllers\BookingController::class . '@createBooking');
$router->post('/payments', App\Controllers\BookingController::class . '@createPayment');
$router->put('/payments/{id}', App\Controllers\BookingController::class . '@updatePayment');
$router->get('/payments/{code}', App\Controllers\BookingController::class . '@getPaymentByCode');
$router->get('/payments/awaiting/{userId}', App\Controllers\BookingController::class . '@getAwaitingPaymentsByUserId');
$router->post('/handle-payment', App\Controllers\BookingController::class . '@handlePayment');
$router->get('/bookings/userId/{id}', App\Controllers\BookingController::class . '@getBookingByUserId');

$router->get('/cars', App\Controllers\CarController::class . '@getCars');
$router->get('/cars/{id}', App\Controllers\CarController::class . '@getCarById');
$router->post('/cars', App\Controllers\CarController::class . '@addCar');
$router->post('/cars/{id}', App\Controllers\CarController::class . '@updateCar');

$router->get('/visits', App\Controllers\VisitController::class . '@getAllLogs');
$router->post('/visits', App\Controllers\VisitController::class . '@saveLog');

$router->get('/subscribers', App\Controllers\SubscriberController::class . '@getAllSubscribers');
$router->post('/subscribers', App\Controllers\SubscriberController::class . '@saveSubscriber');

