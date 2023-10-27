<script setup>
import Loader from "./Loader.vue";
</script>
<template>
    <div class="order-history-tab table-responsive">
        <div class="bookings_container">
            <Loader v-if="isLoading" class="loader" />
            <div class="booking" v-for="(booking, i) in bookings" :id="i">
                <img src="@/assets/img/expand_icon.png" alt="Expand icon" class="expand_icon" @click="expandBooking(i)" />
                <div class="preview_data">
                    <p v-if="booking.flight_type && isEng()"><b>Service: </b>Airport Transfer</p>
                    <p v-if="booking.flight_type && !isEng()"><b>Servis: </b>Hava Limanı Transferi</p>
                    <p v-if="!booking.flight_type && isEng()"><b>Service: </b>{{ booking.end_date ? "Car Hire" : "One Way"
                    }}</p>
                    <p v-if="!booking.flight_type && !isEng()"><b>Servis: </b>{{ booking.end_date ? "Avtomobil Icarəsi" :
                        "Sürücü Rezervasiya" }}</p>

                    <p v-if="isEng()"><b>Order Number:</b> {{ booking.order_number }}</p>
                    <p v-if="!isEng()"><b>Rezervasiya nömrəsi:</b> {{ booking.order_number }}</p>

                    <p v-if="isEng()"><b>Amount: </b>{{ booking.amount }}</p>
                    <p v-if="!isEng()"><b>Məbləğ: </b>&#8380;{{ booking.amount }}</p>

                    <p v-if="isEng()"><b>Status: </b>{{ booking.status }}</p>
                    <p class="date">{{ booking.created_date }}</p>
                </div>
                <div class="content">
                    <div class="group">
                        <label v-if="isEng()">Order number</label>
                        <label v-if="!isEng()">Rezervasiya nömrəsi</label>
                        <p>{{ booking.order_number }}</p>
                    </div>

                    <div class="group" v-if="booking.flight_type">
                        <label v-if="isEng()">Flight Type</label>
                        <label v-if="!isEng()">Servis növü</label>
                        <p>{{ booking.flight_type || "N/A" }}</p>
                    </div>

                    <div class="group" v-if="booking.pickup_address">
                        <label v-if="isEng()">Pickup Address</label>
                        <label v-if="!isEng()">Görüş Yeri</label>
                        <p>{{ booking.pickup_address || "N/A" }}</p>
                    </div>

                    <div class="group" v-if="booking.destination_address">
                        <label v-if="isEng()">Destination Address</label>
                        <label v-if="!isEng()">Təyinat Ünvanı</label>
                        <p>{{ booking.destination_address || "N/A" }}</p>
                    </div>

                    <div class="group" v-if="booking.date">
                        <label v-if="isEng()">Date</label>
                        <label v-if="!isEng()">Pickup tarixi və vaxtı</label>
                        <p>{{ booking.date || "N/A" }}</p>
                    </div>

                    <div class="group" v-if="booking.end_date">
                        <label v-if="isEng()">End Date</label>
                        <label v-if="!isEng()">Bitmə tarixi</label>
                        <p>{{ booking.end_date || "N/A" }}</p>
                    </div>

                    <div class="group">
                        <label v-if="isEng()">Car</label>
                        <label v-if="!isEng()">Avtomobil</label>
                        <p>{{ booking.car_name || "s" }}</p>
                    </div>

                    <div class="group">
                        <label v-if="isEng()">Full Name</label>
                        <label v-if="!isEng()">Adınız ve Soyadınız</label>
                        <p>{{ booking.full_name || "N/A" }}</p>
                    </div>

                    <div class="group">
                        <label v-if="isEng()">Email</label>
                        <label v-if="!isEng()">Email ünvanı</label>
                        <p>{{ booking.email || "N/A" }}</p>
                    </div>

                    <div class="group">
                        <label v-if="isEng()">Phone</label>
                        <label v-if="!isEng()">Telefon Nömrəsi</label>
                        <p>{{ booking.phone || "N/A" }}</p>
                    </div>

                    <div class="group" v-if="booking.passengers">
                        <label v-if="isEng()">Passengers</label>
                        <label v-if="!isEng()">Sərnişinlərin sayı</label>
                        <p>{{ booking.passengers || "N/A" }}</p>
                    </div>

                    <div class="group" v-if="booking.suitcases">
                        <label v-if="isEng()">Suitcases</label>
                        <label v-if="!isEng()">Çamadanların sayı</label>
                        <p>{{ booking.suitcases || "N/A" }}</p>
                    </div>

                    <div class="group" v-if="booking.luggages">
                        <label v-if="isEng()">Luggages</label>
                        <label v-if="!isEng()">Baqajların sayı</label>
                        <p>{{ booking.luggages || "N/A" }}</p>
                    </div>

                    <div class="group" v-if="booking.flight_number">
                        <label>Terminal</label>
                        <p>{{ booking.terminal || "N/A" }}</p>
                    </div>

                    <div class="group">
                        <label v-if="isEng()">Amount</label>
                        <label v-if="!isEng()">Məbləğ</label>
                        <p>{{ booking.amount }}</p>
                    </div>

                    <div class="group">
                        <label v-if="isEng()">Payment Method</label>
                        <label v-if="!isEng()">Ödəniş üsulu</label>
                        <p>{{ booking.method }}</p>
                    </div>

                    <div class="group">
                        <label>Status</label>
                        <p>{{ booking.status }}</p>
                    </div>

                    <div class="group">
                        <label>Promo Code</label>
                        <p>{{ booking.promo_code || "N/A" }}</p>
                    </div>

                    <div class="group">
                        <label v-if="isEng()">Created Date</label>
                        <label v-if="!isEng()">Rezervasiya tarixi</label>
                        <p>{{ booking.created_date }}</p>
                    </div>
                </div>
            </div>
            <h3 v-if="bookings == '' && isEng()" class="no-bookings-msg">No bookings yet</h3>
            <h3 v-if="bookings == '' && !isEng()" class="no-bookings-msg">Rezervasiyalar yoxdur</h3>
        </div>

    </div>
</template>

<script>
import BookingService from '../services/BookingService';
import CarService from '../services/CarService';

export default {
    name: "OrderHistoryTab",
    data() {
        return {
            bookings: null,
            isLoading: false,
        }
    },
    mounted() {
        this.getBookings();
    },
    methods: {
        getBookings() {
            BookingService.getBookingByUserId(localStorage.getItem('id')).then(res => {
                if (res.status == 200) {
                    this.bookings = res.data;
                    this.bookings.forEach(b => {
                        this.getCarById(b.car_id);
                    });
                } else {
                    this.bookings = "";
                }
            });
        },
        async getCarById(id) {
            CarService.getById(id).then(res => {
                if (res.status == 200) {
                    this.bookings.find((b) => b.car_id == id).car_name = res.data.name;
                } else {
                    return "Something went wrong"
                }
            });
        },
        expandBooking(el) {
            let orderContainer = document.getElementById(el);
            if (orderContainer.classList.contains("expanded")) {
                orderContainer.classList.remove("expanded");
            } else {
                orderContainer.classList.add("expanded");
            }
        },
        isEng() {
            return localStorage.getItem('lang') == 'en';
        },
    }
}
</script>

<style lang="scss" scoped>
.order-history-tab {
    width: 100%;
    min-height: 40vh;
}



tr {
    color: white;
    font-family: "Inter", sans-serif;
    white-space: nowrap;
}


.bookings_container {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
    padding: 1rem;

    .booking {
        width: 100%;
        display: flex;
        padding: 1rem;
        border-radius: 8px;
        -webkit-box-shadow: 3px 0px 11px -3px rgba(148, 148, 148, 0.743);
        -moz-box-shadow: 3px 0px 11px -3px rgba(148, 148, 148, 0.743);
        box-shadow: 3px 0px 11px -3px rgba(148, 148, 148, 0.743);
        position: relative;
        background-color: white;

        .expand_icon {
            position: absolute;
            top: 5px;
            right: 5px;
            width: 1.2rem;
            z-index: 100;
            height: auto;
            transition: 0.3s;
            cursor: pointer;

            &:hover {
                transform: scale(1.2);
            }
        }

        p {
            margin: 0;
            color: black;
            font-family: "Inter", sans-serif;
        }

        .preview_data {
            width: 100%;
            display: flex;
            gap: 2rem;

            .date {
                margin-left: auto;
                margin-right: 1rem;
            }
        }

        .content {
            display: none;
        }

        &.expanded {
            .preview_data {
                display: none;
            }

            .content {
                display: flex;
                flex-wrap: wrap;
                gap: 2rem;

                .group {
                    width: 30%;
                    font-family: "Inter", sans-serif;
                    color: black;

                    label {
                        font-weight: 600;
                    }

                    p {
                        padding: 5px;
                        border-radius: 5px;
                        -webkit-box-shadow: 3px 0px 11px -3px rgba(148, 148, 148, 0.743);
                        -moz-box-shadow: 3px 0px 11px -3px rgba(148, 148, 148, 0.743);
                        box-shadow: 3px 0px 11px -3px rgba(148, 148, 148, 0.743);
                        cursor: text;
                    }
                }
            }
        }
    }
}

.loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 30;
}

.no-bookings-msg {
    margin-left: auto;
    margin-right: auto;
    padding-right: 13rem;
}

@media only screen and (max-width: 1024px) {

    .booking.expanded {
        .content {
            .group {
                width: 100% !important;
            }
        }
    }

}
</style>