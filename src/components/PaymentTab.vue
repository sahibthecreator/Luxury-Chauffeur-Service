<script setup>
import SecondaryButton from "../components/SecondaryButton.vue"
import Loader from "./Loader.vue";
</script>
<template>
    <div class="payment-tab">
        <div class="input-container" v-if="!isPaymentConfirmation">
            <label v-if="isEng()">Invoice code</label>
            <label v-if="!isEng()">Ödəniş kodu</label>
            <input type="text" placeholder="123456789" @input="dataEdited" v-model="paymentCode" id="invoiceInput">
            <p class="m-0" v-if="codeIsNotValid">Not found</p>
        </div>

        <SecondaryButton text="Continue" class="pay-btn disabled" @click="getPaymentByCode"
            v-if="!isPayment && !isPaymentConfirmation && isEng()" />

        <SecondaryButton text="Növbəti" class="pay-btn disabled" @click="getPaymentByCode"
            v-if="!isPayment && !isPaymentConfirmation && !isEng()" />


        <Loader v-if="isLoading" class="loader" />

        <!--Stripe.js injects the Payment Element-->
        <form id="payment-form" v-if="isPayment">
            <div id="payment-element">
            </div>
            <button id="submit">
                <div class="spinner hidden" id="spinner"></div>
                <span id="button-text">Pay now</span>
            </button>
            <div id="payment-message" class="hidden"></div>
        </form>

        <div class="confirmation-container" v-if="isPaymentConfirmation">
            <p>{{ confirmationText }}</p>
        </div>
    </div>
</template>

<script>
import BookingService from '../services/BookingService';
import { StripeElementPayment } from '@vue-stripe/vue-stripe';
export default {
    name: "PaymentTab",
    components: {
        StripeElementPayment
    },
    data() {
        return {
            paymentCode: "",
            isLoading: false,
            isPayment: false,
            isPaymentConfirmation: false,
            currentPayment: null,
            confirmationText: "",
            codeIsNotValid: false,
            paymentHasUpdated: false,
        }
    },
    mounted() {
        this.checkStatus();
        this.autofillAndPay();
    },
    methods: {
        dataEdited() {
            document.getElementsByClassName("pay-btn")[0].classList.remove("disabled");
        },
        getPaymentByCode() {
            this.isLoading = true;
            document.querySelector('.pay-btn').classList.add('disabled');
            document.getElementById("invoiceInput").readOnly = true;
            BookingService.getPaymentByCode(this.paymentCode).then(res => {
                this.isLoading = false;
                if (res.status == 200) {
                    this.currentPayment = res.data;
                    if (this.currentPayment['status'] == 'Awaiting') {
                        this.initStripe();
                    } else {
                        this.codeIsNotValid = true;
                        document.getElementById("invoiceInput").readOnly = false;
                        document.querySelector('.pay-btn').classList.remove('disabled');
                    }
                } else {
                    this.codeIsNotValid = true;
                    document.getElementById("invoiceInput").readOnly = false;
                    document.querySelector('.pay-btn').classList.remove('disabled');
                }
            });
        },
        autofillAndPay() {
            // Check if the 'invoice-code' parameter is present in the URL
            if (this.$route.query.paymentCode) {
                // Autofill the invoice code input
                this.paymentCode = this.$route.query.paymentCode;

                // Trigger the "Pay" button click
                const payButton = document.querySelector('.pay-btn');
                if (payButton) {
                    payButton.classList.remove('disabled');
                    payButton.click();
                }
            }
        },
        async initStripe() {
            this.isLoading = true;
            this.isPayment = true;
            // This is your test publishable API key.
            const stripe = Stripe("pk_test_51NcRoeKHyUY6eEJllPpa7tw98bgjz4cdr01Lt95g8LUk0GUeFPRdcgnqpvKM2z3apZW0XbUaRC4zeIGZyYVU0GGO00LP4mJ4RZ");

            let elements;

            initialize();

            setTimeout(function () {
                document
                    .querySelector("#payment-form")
                    .addEventListener("submit", handleSubmit);
            }, 200);


            let emailAddress = '';
            localStorage.setItem("paymentData", JSON.stringify(this.currentPayment));

            // Fetches a payment intent and captures the client secret
            async function initialize() {
                let payload = {
                    amount: 2000,
                    email: "sahibzed23@gmail.com"
                }
                let { data } = await BookingService.handlePayment(payload);
                console.log(data);
                const appearance = {
                    theme: 'stripe',

                    variables: {
                        colorText: 'white',
                        colorBackground: 'black',
                        fontSizeBase: '0.8rem'
                    }
                };
                data = {
                    clientSecret: data.clientSecret,
                    appearance: appearance
                }
                elements = stripe.elements(data);

                // const linkAuthenticationElement = elements.create("linkAuthentication");
                // linkAuthenticationElement.mount("#link-authentication-element");

                const paymentElementOptions = {
                    layout: "tabs",
                };

                const paymentElement = elements.create("payment");
                paymentElement.mount("#payment-element");
            }
            this.isLoading = false;
            async function handleSubmit(e) {
                e.preventDefault();
                setLoading(true);

                const { error } = await stripe.confirmPayment({
                    elements,
                    confirmParams: {
                        return_url: "http://127.0.0.1:5173/my-account",
                    },
                });

                // This point will only be reached if there is an immediate error when
                // confirming the payment. Otherwise, your customer will be redirected to
                // your `return_url`. For some payment methods like iDEAL, your customer will
                // be redirected to an intermediate site first to authorize the payment, then
                // redirected to the `return_url`.
                if (error.type === "card_error" || error.type === "validation_error") {
                    showMessage(error.message);
                } else {
                    showMessage("An unexpected error occurred.");
                }

                setLoading(false);
            }



            // ------- UI helpers -------

            function showMessage(messageText) {
                const messageContainer = document.querySelector("#payment-message");

                messageContainer.classList.remove("hidden");
                messageContainer.textContent = messageText;

                setTimeout(function () {
                    messageContainer.classList.add("hidden");
                    messageContainer.textContent = "";
                }, 4000);
            }

            // Show a spinner on payment submission
            function setLoading(isLoading) {
                if (isLoading) {
                    // Disable the button and show a spinner
                    document.querySelector("#submit").disabled = true;
                    document.querySelector("#spinner").classList.remove("hidden");
                    document.querySelector("#button-text").classList.add("hidden");
                } else {
                    document.querySelector("#submit").disabled = false;
                    document.querySelector("#spinner").classList.add("hidden");
                    document.querySelector("#button-text").classList.remove("hidden");
                }
            }
        },
        // Fetches the payment intent status after payment submission
        async checkStatus() {
            const stripe = Stripe("pk_test_51NcRoeKHyUY6eEJllPpa7tw98bgjz4cdr01Lt95g8LUk0GUeFPRdcgnqpvKM2z3apZW0XbUaRC4zeIGZyYVU0GGO00LP4mJ4RZ");

            const clientSecret = new URLSearchParams(window.location.search).get(
                "payment_intent_client_secret"
            );

            if (!clientSecret) {
                return;
            }

            const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);
            console.log(paymentIntent.status);
            this.isPaymentConfirmation = true;
            switch (paymentIntent.status) {
                case "succeeded":
                    this.updatePayment();
                    this.confirmationText = this.isEng() ? 'Payment was successful. You will receive an email shortly.' : "Ödəniş uğurlu oldu. Tezliklə e-poçt alacaqsınız.";
                    break;
                case "processing":
                    this.confirmationText = 'Your payment is processing.';
                    break;
                case "requires_payment_method":
                    this.confirmationText = 'Your payment was not successful, please try again.';
                    break;
                default:
                    this.confirmationText = 'Something went wrong.';
                    break;
            }
        },
        updatePayment() {
            if (localStorage.getItem("paymentUpdated") == null) {
                localStorage.setItem("paymentUpdated", false);
            }
            if (localStorage.getItem("paymentUpdated") == false) {
                let paymentData = JSON.parse(localStorage.getItem("paymentData"));
                paymentData.status = "Paid";
                BookingService.updatePayment(paymentData.payment_id, paymentData);
                localStorage.setItem("paymentUpdated", true);
            }
        },
        isEng() {
            return localStorage.getItem('lang') == 'en';
        },
    }

}
</script>

<style lang="scss" scoped>
.payment-tab {
    width: 70%;
    min-height: 40vh;
}

.input-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-family: "Inter", sans-serif;

    input {
        outline: none;
        outline: none;
        border: 0;
        background-color: transparent;
        border: 1px solid #B08500;
        color: white;
        padding: 5px;
        font-size: 0.8rem;
        border-radius: 5px;

        &:focus {
            outline: 1px solid #B08500;
        }

        &:read-only {
            opacity: 0.6;

            &:focus {
                outline: none;
            }
        }
    }
}

.btn {
    margin-top: 2rem;
}

#card-element {
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 4px;
    margin: 2rem 0;
}

#card-errors {
    color: #e74c3c;
    margin-top: 10px;
}

button {
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    font-family: "Inter", sans-serif;
}

//Stripe element
form {
    width: 100%;
    min-width: 500px;
    align-self: center;
    box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
        0px 2px 5px 0px rgba(50, 50, 93, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
    padding: 40px 0;
}

.hidden {
    display: none;
}

#payment-message {
    color: rgb(105, 115, 134);
    font-size: 16px;
    line-height: 20px;
    padding-top: 12px;
    text-align: center;
}

#payment-element {
    margin-bottom: 24px;
}

/* Buttons and links */
button {
    background: #5469d4;
    font-family: Arial, sans-serif;
    color: #ffffff;
    border-radius: 4px;
    border: 0;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: block;
    transition: all 0.2s ease;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
    width: 100%;
}

button:hover {
    filter: contrast(115%);
}

button:disabled {
    opacity: 0.5;
    cursor: default;
}

/* spinner/processing state, errors */
.spinner,
.spinner:before,
.spinner:after {
    border-radius: 50%;
}

.spinner {
    color: #ffffff;
    font-size: 22px;
    text-indent: -99999px;
    margin: 0px auto;
    position: relative;
    width: 20px;
    height: 20px;
    box-shadow: inset 0 0 0 2px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
}

.spinner:before,
.spinner:after {
    position: absolute;
    content: "";
}

.spinner:before {
    width: 10.4px;
    height: 20.4px;
    background: #5469d4;
    border-radius: 20.4px 0 0 20.4px;
    top: -0.2px;
    left: -0.2px;
    -webkit-transform-origin: 10.4px 10.2px;
    transform-origin: 10.4px 10.2px;
    -webkit-animation: loading 2s infinite ease 1.5s;
    animation: loading 2s infinite ease 1.5s;
}

.spinner:after {
    width: 10.4px;
    height: 10.2px;
    background: #5469d4;
    border-radius: 0 10.2px 10.2px 0;
    top: -0.1px;
    left: 10.2px;
    -webkit-transform-origin: 0px 10.2px;
    transform-origin: 0px 10.2px;
    -webkit-animation: loading 2s infinite ease;
    animation: loading 2s infinite ease;
}

@-webkit-keyframes loading {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@keyframes loading {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@media only screen and (max-width: 600px) {
    form {
        width: 80vw;
        min-width: initial;
    }
}

.pay-btn {
    border-radius: 5px;
}

.loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 30;
}

.confirmation-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>