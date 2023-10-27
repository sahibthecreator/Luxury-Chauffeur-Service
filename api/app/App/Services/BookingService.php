<?php

namespace App\Services;

require_once __DIR__ . '/../../vendor/autoload.php';

use App\Models\Booking;
use App\Plugins\Http\Exceptions\NotFound;
use Exception;
use App\DTOs\BookingDTO;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;


\Stripe\Stripe::setApiKey("sk_test_51NcRoeKHyUY6eEJlAg24SQriQy4WezGi0l23upB87cx5uPrvp3GjnlvO5vCyEvY6lqQgHZfEmstzQTnK6TqtoKVs00qpLq0DYp");

class BookingService
{
    private $bookingModel;

    public function __construct()
    {
        $this->bookingModel = new Booking();
    }

    public function getAll()
    {
        $bookings = $this->bookingModel->getAll();
        return $bookings;
    }

    public function getByUserId($id)
    {
        $bookings = $this->bookingModel->getByUserId($id);
        if ($bookings == null)
            throw new NotFound("Bookings with following userId not found");

        return $bookings;
    }

    public function getPaymentByCode($code)
    {
        $payment = $this->bookingModel->getPaymentByCode($code);
        if ($payment == null)
            throw new NotFound("Bookings with following userId not found");

        return $payment;
    }

    public function getAwaitingPaymentsByUserId($userId)
    {
        $payments = $this->bookingModel->getAwaitingPaymentsByUserId($userId);
        if ($payments == null)
            throw new NotFound("Bookings with following userId not found");

        return $payments;
    }

    public function createBooking($data)
    {
        $requiredFields = ['date', 'car_id', 'full_name', 'phone', 'email', 'payment_method', 'amount'];
        if ($data->service == 1) {
            $requiredFields = array_merge($requiredFields, ['flight_type', 'pickup_address', 'destination_address', 'passengers', 'suitcases', 'luggages']);
        } else if ($data->service == 3) {
            $requiredFields = array_merge($requiredFields, ['end_date']);
        }
        foreach ($requiredFields as $field) {
            if (!isset($data->$field)) {
                throw new Exception("Required field '{$field}' is missing.");
            }
        }

        $flightType = $data->service == 1 ? filter_var($data->flight_type, FILTER_SANITIZE_SPECIAL_CHARS) : null;
        $pickupAddress = $data->service != 3 ? filter_var($data->pickup_address, FILTER_SANITIZE_SPECIAL_CHARS) : null;
        $destinationAddress = $data->service != 3 ? filter_var($data->destination_address, FILTER_SANITIZE_SPECIAL_CHARS) : null;
        $date = filter_var($data->date, FILTER_SANITIZE_SPECIAL_CHARS);
        $endDate = $data->service == 3 ? filter_var($data->end_date, FILTER_SANITIZE_SPECIAL_CHARS) : null;
        $carId = filter_var($data->car_id, FILTER_SANITIZE_NUMBER_INT);
        $fullName = filter_var($data->full_name, FILTER_SANITIZE_SPECIAL_CHARS);
        $phone = filter_var($data->phone, FILTER_SANITIZE_SPECIAL_CHARS);
        $email = filter_var($data->email, FILTER_SANITIZE_EMAIL);
        $passengers = $data->service == 1 ? filter_var($data->passengers, FILTER_SANITIZE_NUMBER_INT) : null;
        $suitcases = $data->service == 1 ? filter_var($data->suitcases, FILTER_SANITIZE_NUMBER_INT) : null;
        $luggages = $data->service == 1 ? filter_var($data->luggages, FILTER_SANITIZE_NUMBER_INT) : null;
        $terminal = $data->service == 1 ? filter_var($data->terminal, FILTER_SANITIZE_SPECIAL_CHARS) : null;
        $paymentMethod = filter_var($data->payment_method, FILTER_SANITIZE_SPECIAL_CHARS);
        $promoCode = filter_var($data->promo_code, FILTER_SANITIZE_SPECIAL_CHARS);

        $userId = isset($data->user_id) ? $data->user_id : null;
        $amount = $data->amount;

        $orderNumber = rand(100000, 999999);
        $this->bookingModel->createBooking($orderNumber, $userId, $flightType, $pickupAddress, $destinationAddress, $date, $endDate, $carId, $fullName, $phone, $email, $passengers, $suitcases, $luggages, $terminal, $paymentMethod, $promoCode, $amount);
        return $this->NotifyCustomer($orderNumber, $email, $fullName, $date, $terminal, $phone, $data->service, $endDate, $pickupAddress, $destinationAddress, $flightType, $data->car_name);
    }

    public function createPayment($data)
    {
        if (!isset($data->amount)) {
            throw new Exception("Required field Amount is missing.");
        }

        $amount = $data->amount;
        $userId = isset($data->user_id) ? $data->user_id : null;
        $description = isset($data->description) ? filter_var($data->description, FILTER_SANITIZE_SPECIAL_CHARS) : null;

        return $this->bookingModel->createPayment($amount, $userId, $description);
        // return $this->NotifyCustomer($orderNumber, $email, $fullName);
    }

    public function updatePayment($id, $data)
    {
        if (!(isset($data->amount) || isset($data->description))) {
            throw new Exception("Required field Amount is missing.");
        }

        $amount = $data->amount;
        $status = $data->status;
        $description = filter_var($data->description, FILTER_SANITIZE_SPECIAL_CHARS);

        $this->bookingModel->updatePayment($id, $amount, $description, $status);
        return $this->SendPaymentConfirmationEmail($data->email, $data->full_name, $data->order_number);
    }

    public function handlePayment($data)
    {
        // Create a PaymentIntent with amount and currency
        $paymentIntent = \Stripe\PaymentIntent::create([
            'amount' => $data->amount,
            'currency' => 'usd',
            'automatic_payment_methods' => [
                'enabled' => true,
            ],
            'metadata' => [
                'email' => $data->email,
            ],
        ]);

        $output = [
            'clientSecret' => $paymentIntent->client_secret
        ];
        return $output;
    }

    public function NotifyCustomer($orderNumber, $email, $name, $date, $terminal, $number, $service, $endDate, $pickup, $destination, $flightType, $carName)
    {
        list($dateOnly, $timeOnly) = explode("T", $date);
        $serviceName = "";
        switch ($service) {
            case 1:
                if ($flightType == 'Pickup') {
                    $serviceName = "Airport Meeting";
                } else {
                    $serviceName = "Airport Transfer";
                }
                break;
            case 2:
                $serviceName = "One Way Transfer";
                break;
            case 3:
                $serviceName = "Luxury Car Hire";
                break;
        }

        $mail = new PHPMailer(false);

        try {
            //Server settings
            $mail->isSMTP();
            $mail->SMTPDebug = 0;
            $mail->Host = 'smtp.hostinger.com';
            $mail->Port = 465;
            $mail->SMTPAuth = true;                                         //Enable SMTP authentication
            $mail->Username   = "info@lordconcierge.com";                     //SMTP username
            $mail->Password   = "LordConcierge777$";                         //SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption

            //Recipients
            $mail->setFrom("info@lordconcierge.com", 'Lord Concierge');

            $mail->addAddress($email, $name);     //Add a recipient

            //Content

            $mail->Subject = 'Confirmation of Your Lord Concierge Booking';
            $mail->Body = "<p>Dear customer,
            <br><br>
            We are pleased to confirm your booking for Lord Concierge services. We appreciate your choice and are looking forward to providing you with a seamless and personalized experience.
            <br><br>
            Booking Details:
            <br>
            Booking reference number: $orderNumber <br>
            Service: Lord Concierge $serviceName <br>";
            if ($service == 3) {
                $mail->Body .= "
                Start Date : $date <br>
                End Date : $endDate <br>";
            } else if ($service == 2) {
                $mail->Body .= "
                Date: $dateOnly <br>
                Time: $timeOnly <br>
                Pickup address: $pickup <br>
                Destination address: $destination <br>";
            } else {
                $mail->Body .= "
                Date: $dateOnly <br>
                Time: $timeOnly <br>";
                if ($flightType == 'Pickup') {
                    $mail->Body .= "
                    Meeting Point: Heydar Aliyev International Airport, Terminal: $terminal <br>
                    Destination Point: $destination <br>";
                } else {
                    $mail->Body .= "
                    Meeting Point: $pickup <br>
                    Destination Point: Heydar Aliyev International Airport, Terminal: $terminal  <br>";
                }
            }
            $mail->Body .= "
            Contact Person: $name <br>
            Contact Number: $number <br>
            Reserved Car: $carName <br>
            <br>";
            if ($service == 1) {
                $mail->Body .= "
                Our team is dedicated to ensuring your journey is comfortable and stress-free. Your Lord Concierge will be at the designated meeting point to greet you upon your arrival. They will assist you with any necessary arrangements, luggage handling, and any special requests you might have.";
            }
            $mail->Body .= "<br><br>
            If you have any changes to your travel plans or need further assistance, please don't hesitate to contact us at info@lordconcierge.com or [phone number].
            <br><br>
            Thank you for choosing Lord Concierge. We look forward to serving you.
            <br><br>";
            if ($service == 1) {
                $mail->Body .= "
                Safe travels!";
            }
            $mail->Body .= "<br><br>
            Best regards,
            <br><br>
            Lord Concierge Team</p>
            <br>
            -------------------------------
            <p>Hörmətli müştəri,
            <br><br>
            Lord Concierge xidmətləri üçün sifarişinizi təsdiqləməkdən məmnunuq. Seçiminizi yüksək qiymətləndiririk və sizə qüsursuz və fərdiləşdirilmiş təcrübə təqdim etməyi səbirsizliklə gözləyirik.
            <br><br>
            Rezervasiya təfərrüatları:
            <br>
            Rezervasiya nömrəsi: $orderNumber <br>
            Servis: Lord Concierge $serviceName <br>";
            if ($service == 3) {
                $mail->Body .= "
                Başlama tarixi: $date <br>
                Bitmə tarixi: $endDate <br>";
            } else if ($service == 2) {
                $mail->Body .= "
                Görüş tarixi: $dateOnly <br>
                Görüş vaxti: $timeOnly <br>
                Görüş Ünvanı: $pickup <br>
                Təyinat Ünvanı: $destination <br>";
            } else {
                $mail->Body .= "
                Görüş tarixi: $dateOnly <br>
                Görüş vaxti: $timeOnly <br>";
                if ($flightType == 'Pickup') {
                    $mail->Body .= "
                    Görüş Ünvanı: Heydar Aliyev International Airport, Terminal: $terminal <br>
                    Təyinat Ünvanı: $destination <br>";
                } else {
                    $mail->Body .= "
                    Görüş Ünvanı: $pickup <br>
                    Təyinat Ünvanı: Heydar Aliyev International Airport, Terminal: $terminal  <br>";
                }
            }
            $mail->Body .= "
            Əlaqədar şəxs: $name <br>
            Əlaqə nömrəsi: $number <br>
            Avtomobil: $carName <br>
            <br>";
            if ($service == 1) {
                $mail->Body .= "
                Komandamız səyahətinizin rahat və stresssiz olmasını təmin etməyə çalışır. Lord Concierge gəlişinizdə sizi qarşılamaq üçün təyin olunmuş görüş nöqtəsində olacaq. Onlar sizə hər hansı zəruri tədbirlər, baqajın idarə edilməsi və ola biləcək hər hansı xüsusi sorğu ilə kömək edəcəklər.";
            }
            $mail->Body .= "<br><br>
            Səyahət planlarınızda hər hansı dəyişiklik olarsa və ya əlavə yardıma ehtiyacınız olarsa, lütfən, info@lordconcierge.com və ya [telefon nömrəsi] vasitəsilə bizimlə əlaqə saxlamaqdan çəkinməyin.
            <br><br>
            Lord Concierge-i seçdiyiniz üçün təşəkkür edirik. Sizə xidmət etməyi səbirsizliklə gözləyirik.
            <br>";
            if ($service == 1) {
                $mail->Body .= "
                Təhlükəsiz səyahətlər!<br>";
            }
            $mail->Body .= "<br>
            Hörmətlə,
            <br><br>
            Lord Concierge Komandasi</p>
            <div style='display:flex; justify-content: center; align-items: center; width: 100%'>
                <img src='https://lordconcierge.com/assets/logo.png' style='width: 50%; height: auto'/>
            </div>
            ";
            $mail->isHTML(true);                                  //Set email format to HTML
            return $mail->send(false);
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    }

    public function SendPaymentConfirmationEmail($email, $name, $bookingNumber)
    {
        $mail = new PHPMailer(false);

        try {
            //Server settings
            $mail->isSMTP();
            $mail->SMTPDebug = 0;
            $mail->Host = 'smtp.hostinger.com';
            $mail->Port = 465;
            $mail->SMTPAuth = true;                                         //Enable SMTP authentication
            $mail->Username   = "info@lordconcierge.com";                     //SMTP username
            $mail->Password   = "LordConcierge777$";                         //SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption

            //Recipients
            $mail->setFrom("info@lordconcierge.com", 'Lord Concierge');

            $mail->addAddress($email, $name);     //Add a recipient

            //Content

            $mail->Subject = "Payment Confirmation - Lord Concierge Booking #$bookingNumber";

            $mail->Body = "<p>Dear $name,
            <br><br>
            We are delighted to confirm the successful payment for your booking #$bookingNumber with Lord Concierge services.<br>Your payment has been received and processed.<br>Thank you for choosing our luxury services for your upcoming travel.
            <br><br>
            If you have any changes to your travel plans or need further assistance, please don't hesitate to contact us at info@lordconcierge.com or [phone number].
            <br><br>
            Thank you for choosing Lord Concierge. We appreciate your trust and look forward to serving you.
            <br><br>
            Best regards,
            <br><br>
            Lord Concierge Team
            <br><br>
            -------------------------------
            <br><br>
            Hörmətli $name,
            <br><br>
            Lord Concierge xidmətləri ilə #$bookingNumber rezervasiya üçün uğurlu ödənişi təsdiqləməkdən məmnunuq.<br>Ödənişiniz qəbul edildi və emal edildi.<br>Gələcək səyahətiniz üçün dəbdəbəli xidmətlərimizi seçdiyiniz üçün təşəkkür edirik.
            <br><br>
            Səyahət planlarınızda hər hansı dəyişiklik olarsa və ya əlavə yardıma ehtiyacınız olarsa, lütfən, info@lordconcierge.com və ya [telefon nömrəsi] vasitəsilə bizimlə əlaqə saxlamaqdan çəkinməyin.
            <br><br>
            Lord Concierge-i seçdiyiniz üçün təşəkkür edirik. Etibarınıza görə təşəkkür edirik və sizə xidmət etməyi səbirsizliklə gözləyirik.
            <br><br>
            Hörmətlə,
            <br><br>
            Lord Konsyerj Komandası
            </p>
            <div style='display:flex; justify-content: center; align-items: center; width: 100%'>
                <img src='https://lordconcierge.com/assets/logo.png' style='width: 50%; height: auto'/>
            </div>";

            $mail->isHTML(true);
            return $mail->send(true);
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    }
}
