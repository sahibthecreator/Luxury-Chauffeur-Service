<script setup>
import BookingCarPreview from '../components/BookingCarPreview.vue';
import Loader from '../components/Loader.vue';
</script>
<template>
    <div class="booking-page">
        <section class="main-image-wrapper">
            <img src="@/assets/img/book-main.webp" alt="Airport luxury meet & greet">
            <h1 class="hidden" v-if="isEng()">Book Now</h1>
            <h1 class="hidden" v-if="!isEng()">Rezervasiya</h1>
        </section>

        <section class="breadcrumbs hidden delay-1" v-if="!isConfirmation">
            <div class="step" :class="{ active: step >= 1 }">
                1
                <p @click="changeStep(1)" v-if="isEng()">Journey</p>
                <p @click="changeStep(1)" v-if="!isEng()">İstiqamət</p>
            </div>
            <div class="line" :class="{ active: step > 1 }"></div>
            <div class="step" :class="{ active: step > 1 }">
                2
                <p @click="changeStep(2)" v-if="isEng()">Car</p>
                <p @click="changeStep(2)" v-if="!isEng()">Avtomobil</p>
            </div>
            <div class="line" :class="{ active: step > 2 }"></div>
            <div class="step" :class="{ active: step > 2 }">
                3
                <p @click="changeStep(3)" v-if="isEng()">Passenger</p>
                <p @click="changeStep(3)" v-if="!isEng()">Sərnişin</p>
            </div>
            <div class="line" :class="{ active: step > 3 }"></div>
            <div class="step" :class="{ active: step > 3 }">
                4
                <p v-if="isEng()">Confirm</p>
                <p v-if="!isEng()">Təsdiqləmək</p>
            </div>
        </section>

        <section class="main-wrapper" v-if="!isConfirmation">
            <section class="details hidden slideRight">
                <h1>{{ stepCaption }}</h1>

                <div class="details-container">
                    <section class="tabs">
                        <p :class="{ selected: service == 1 }" @click="changeService(1)" v-if="isEng()">Airport Transfer</p>
                        <p :class="{ selected: service == 1 }" @click="changeService(1)" v-if="!isEng()">Hava Limanı
                            Transferi</p>

                        <p :class="{ selected: service == 2 }" @click="changeService(2)" v-if="isEng()">One Way</p>
                        <p :class="{ selected: service == 2 }" @click="changeService(2)" v-if="!isEng()">Sürücü Rezervasiya
                        </p>

                        <p :class="{ selected: service == 3 }" @click="changeService(3)" v-if="isEng()">Car Hire</p>
                        <p :class="{ selected: service == 3 }" @click="changeService(3)" v-if="!isEng()">Avtomobil Icarəsi
                        </p>
                    </section>
                    <section class="content">
                        <div class="step1-content" v-if="step == 1">
                            <div class="input-row" v-if="service == 1">
                                <p v-if="isEng()">Flight Type</p>
                                <p v-if="!isEng()">Servis növü</p>
                                <div class="checkboxes">
                                    <input type="checkbox" class="ui-checkbox" :checked="isPickup"
                                        @change="isPickup = !isPickup">
                                    <label v-if="isEng()">Pickup</label>
                                    <label v-if="!isEng()">Qarşılama</label>
                                    <input type="checkbox" class="ui-checkbox" :checked="!isPickup"
                                        @change="isPickup = !isPickup">
                                    <label v-if="isEng()">Destination</label>
                                    <label v-if="!isEng()">Uçuş</label>
                                </div>
                            </div>
                            <div class="input-row" v-if="service == 2">
                                <p v-if="isEng()">Pickup Address*</p>
                                <p v-if="!isEng()">Pickup Ünvanı*</p>
                                <div class="autocomplete-container" id="autocomplete-container">
                                    <input type="text" id="pickupAddress" placeholder="Enter pickup address"
                                        v-model="pickup" @input="addressAutocomplete($event)" autocomplete="off" />
                                </div>
                            </div>
                            <div class="input-row" v-if="service == 2">
                                <p v-if="isEng()">Destination Address*</p>
                                <p v-if="!isEng()">Təyinat Ünvanı*</p>
                                <div class="autocomplete-container" id="autocomplete-container">
                                    <input type="text" id="destinationInput" placeholder="Enter destination address"
                                        v-model="destination" @input="addressAutocomplete($event)" autocomplete="off" />
                                </div>
                            </div>
                            <div class="input-row" v-if="!isPickup && service == 1">
                                <p v-if="isEng()">Pickup Address*</p>
                                <p v-if="!isEng()">Pickup Ünvanı*</p>
                                <div class="autocomplete-container" id="autocomplete-container">
                                    <input type="text" id="pickupAddress" placeholder="Enter pickup address"
                                        v-model="pickup" @input="addressAutocomplete" autocomplete="off" />
                                </div>
                            </div>
                            <div class="input-row" v-if="isPickup && service == 1">
                                <p v-if="isEng()">Pickup Airport</p>
                                <p v-if="!isEng()">Hava Limanı</p>
                                <input type="text" readonly value="Heydar Aliyev Airport" />
                            </div>
                            <div class="input-row" v-if="!isPickup && service == 1">
                                <p v-if="isEng()">Destination Airport</p>
                                <p v-if="!isEng()">Hava Limanı</p>
                                <input type="text" readonly value="Heydar Aliyev Airport" />
                            </div>
                            <div class="input-row" v-if="isPickup && service == 1">
                                <p v-if="isEng()">Destination Address*</p>
                                <p v-if="!isEng()">Təyinat Ünvanı*</p>
                                <div class="autocomplete-container" id="autocomplete-container">
                                    <input type="text" id="destinationInput" placeholder="Enter destination address"
                                        v-model="destination" @input="addressAutocomplete" autocomplete="off" />
                                </div>
                            </div>
                            <div class="input-row" v-if="service != 3">
                                <p v-if="isEng()">Pickup Date*</p>
                                <p v-if="!isEng()">Pickup tarixi və vaxtı*</p>
                                <input type="datetime-local" placeholder="dd/mm/yyyy" v-model="date">
                            </div>
                            <div class="input-row" v-if="service == 3">
                                <p v-if="isEng()">Start Date*</p>
                                <p v-if="!isEng()">Başlama tarixi*</p>
                                <input type="date" placeholder="dd/mm/yyyy" v-model="date">
                            </div>
                            <div class="input-row" v-if="service == 3">
                                <p v-if="isEng()">End Date*</p>
                                <p v-if="!isEng()">Bitmə tarixi*</p>
                                <input type="date" placeholder="dd/mm/yyyy" v-model="endDate">
                            </div>
                        </div>
                        <div class="step2-content" v-if="step == 2">
                            <BookingCarPreview v-for="(car, index) in cars.filter(car => car.type === 'Airport')"
                                :key="index" @click="selectCar(index)" :class="{ 'selected': selectedCar === index }"
                                :carName=car.name :image=car.car_image :maxPassengers=car.max_passengers
                                :maxHoldLuggage=car.max_luggages :maxSuitcases=car.max_suitcases :rentCar="false"
                                v-if="service != 3" />

                            <BookingCarPreview v-for="(car, index) in cars" :key="index" @click="selectCar(index)"
                                :class="{ 'selected': selectedCar === index }" :carName=car.name :image=car.car_image
                                :maxPassengers=car.max_passengers :maxHoldLuggage=car.max_luggages
                                :maxSuitcases=car.max_suitcases :rentCar="true" v-if="service == 3" />
                        </div>
                        <div class="step1-content" v-if="step == 3">
                            <div class="input-row">
                                <p v-if="isEng()">Your Name*</p>
                                <p v-if="!isEng()">Adınız ve Soyadınız*</p>
                                <input type="text" placeholder="Enter full name" v-model="fullName" />
                            </div>
                            <div class="input-row">
                                <p v-if="isEng()">Phone number*</p>
                                <p v-if="!isEng()">Telefon Nömrəsi*</p>
                                <input type="text" placeholder="Enter phone number" v-model="phone" />
                            </div>
                            <div class="input-row">
                                <p v-if="isEng()">Email*</p>
                                <p v-if="!isEng()">Email ünvanı*</p>
                                <input type="text" placeholder="Enter email address" v-model="email" />
                            </div>
                            <div class="input-row" v-if="service == 1">
                                <p v-if="isEng()">Number of passengers*</p>
                                <p v-if="!isEng()">Sərnişinlərin sayı*</p>
                                <input type="number" v-model="numberOfPassengers" min="0" />
                            </div>
                            <div class="input-row" v-if="service == 1">
                                <p v-if="isEng()">Number of suitcases*</p>
                                <p v-if="!isEng()">Çamadanların sayı*</p>
                                <input type="number" v-model="numberOfSuitcases" min="0" />
                            </div>
                            <div class="input-row" v-if="service == 1">
                                <p v-if="isEng()">Number of luggages*</p>
                                <p v-if="!isEng()">Baqajların sayı*</p>
                                <input type="number" v-model="numberOfLuggages" min="0" />
                            </div>
                            <div class="input-row" v-if="service == 1">
                                <p>Terminal</p>
                                <input type="text" v-model="terminal" placeholder="Enter airport termnial" />
                            </div>
                            <div class="input-row payment-method">
                                <div>
                                    <p v-if="isEng()">Payment method*</p>
                                    <p v-if="!isEng()">Ödəniş üsulu*</p>
                                    <p class="subheading">Please note, that payment is only after confirmation</p>
                                </div>
                                <select v-model="paymentMethod">
                                    <option disabled value="">Please select</option>
                                    <option value="Cash">Cash</option>
                                    <option value="Online">Credit/Debit Card afterby</option>
                                </select>
                            </div>
                            <div class="input-row">
                                <p v-if="isEng()">Promo code</p>
                                <p v-if="!isEng()">Promo kodu</p>
                                <input type="text" v-model="promoCode" placeholder="Enter promo code" />
                            </div>
                        </div>
                        <div class="step4-content" v-if="step == 4">
                            <div class="confirmation-details">
                                <div class="heading">
                                    <p v-if="isEng()">Journey Details</p>
                                    <p v-if="!isEng()">İstiqamət Məlumatı</p>
                                </div>
                                <div class="body">
                                    <div class="input-row" v-if="service == 1">
                                        <p v-if="isEng()">Flight Type</p>
                                        <p v-if="!isEng()">Servis növü</p>
                                        <p class="detail-data">{{ this.isPickup ? "Pickup" : "Destination" }}</p>
                                    </div>
                                    <div class="input-row">
                                        <p v-if="isEng()">Pickup</p>
                                        <p v-if="!isEng()">Görüş Yeri</p>
                                        <p class="detail-data">{{ pickup }}</p>
                                    </div>
                                    <div class="input-row">
                                        <p v-if="isEng()">Destination</p>
                                        <p v-if="!isEng()">Təyinat Ünvanı</p>
                                        <p class="detail-data">{{ destination }}</p>
                                    </div>
                                    <div class="input-row">
                                        <p v-if="isEng()">Date</p>
                                        <p v-if="!isEng()">Pickup tarixi və vaxtı</p>
                                        <p class="detail-data">{{ date }}</p>
                                    </div>
                                    <div class="input-row" v-if="service == 1">
                                        <p>Terminal</p>
                                        <p class="detail-data">{{ terminal }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="confirmation-details">
                                <div class="heading">
                                    <p v-if="isEng()">Vehicle</p>
                                    <p v-if="!isEng()">Avtomobil</p>
                                </div>
                                <div class="body">
                                    <img :src=cars[selectedCar].car_image alt="Lord Concierge car">
                                    <p>{{ cars[selectedCar].name }}</p>
                                </div>
                            </div>
                            <div class="confirmation-details">
                                <div class="heading">
                                    <p v-if="isEng()">Passenger Details</p>
                                    <p v-if="!isEng()">Şəxsi Məlumatı</p>
                                </div>
                                <div class="body">
                                    <div class="input-row">
                                        <p v-if="isEng()">Full name</p>
                                        <p v-if="!isEng()">Adınız ve Soyadınız*</p>
                                        <p class="detail-data">{{ fullName }}</p>
                                    </div>
                                    <div class="input-row">
                                        <p v-if="isEng()">Phone</p>
                                        <p v-if="!isEng()">Telefon Nömrəsi*</p>
                                        <p class="detail-data">{{ phone }}</p>
                                    </div>
                                    <div class="input-row">
                                        <p v-if="isEng()">Email</p>
                                        <p v-if="!isEng()">Email ünvanı*</p>
                                        <p class="detail-data">{{ email }}</p>
                                    </div>
                                    <div class="input-row" v-if="service == 1">
                                        <p v-if="isEng()">Number of passengers</p>
                                        <p v-if="!isEng()">Sərnişinlərin sayı*</p>
                                        <p class="detail-data">{{ numberOfPassengers }}</p>
                                    </div>
                                    <div class="input-row" v-if="service == 1">
                                        <p v-if="isEng()">Number of suitcases</p>
                                        <p v-if="!isEng()">Çamadanların sayı*</p>
                                        <p class="detail-data">{{ numberOfSuitcases }}</p>
                                    </div>
                                    <div class="input-row" v-if="service == 1">
                                        <p v-if="isEng()">Number of luggages</p>
                                        <p v-if="!isEng()">Baqajların sayı*</p>
                                        <p class="detail-data">{{ numberOfLuggages }}</p>
                                    </div>
                                    <div class="input-row">
                                        <p v-if="isEng()">Payment method</p>
                                        <p v-if="!isEng()">Ödəniş üsulu*</p>
                                        <p class="detail-data">{{ paymentMethod }}</p>
                                    </div>
                                    <div class="input-row">
                                        <p v-if="isEng()">Promo code</p>
                                        <p v-if="!isEng()">Promo kodu</p>
                                        <p class="detail-data">{{ promoCode }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="button-row">
                            <p v-if="step == 4 && service != 3"
                                style="margin-right: auto; margin-top: auto; margin-bottom: 0; color: white; font-family: 'Inter', sans-serif;">
                                {{ isEng() ? "Approximately" : "Təxminən" }} &asymp; 80&#8380; - 150&#8380;</p>
                            <p v-if="step >= 3 && service == 3"
                                style="margin-right: auto; margin-top: auto; margin-bottom: 0; color: white; font-family: 'Inter', sans-serif;">
                                {{ getAmountOfDays() }} {{ isEng() ? " days rent = " : " günlük icarəsi = " }} {{
                                    calculateRentAmount() + "&#8380;" }}
                            </p>
                            <div class="btn" @click="nextStep()">
                                <p id="btn-content" v-if="isEng()">{{ step == 4 ? "CONFIRM" : "NEXT" }}</p>
                                <p id="btn-content" v-if="!isEng()">{{ step == 4 ? "TƏSDİQLƏMƏK" : "NÖVBƏTİ" }}</p>
                                <img src="@/assets/img/right-arrow.webp" alt="arrow right">
                            </div>
                        </div>
                    </section>
                    <p class="errorMsg">{{ errorMsg }}</p>
                </div>
            </section>

            <section class="map-wrapper hidden slideLeft">
                <iframe src="https://embed.waze.com/iframe?zoom=12&lat=40.42584518512522&lon=49.86661803269843"></iframe>
            </section>
        </section>

        <section class="confirmation-wrapper" v-if="isConfirmation">
            <h1>Confirmation</h1>
            <Loader class="loader" v-if="isLoading" />
            <div class="text-wrapper" v-if="!isLoading">
                <p v-if="isEng()">Dear {{ fullName }}, <br>
                    We appreciate your choice and are looking forward to providing you with a seamless and personalized
                    experience!<br><br>
                    You will receive a confirmation email shortly. <br>
                    We might get in touch with you to discuss and confirm in details.<br>
                    Meantime, if you will have any inquires or requests regarding your booking please <span class="link"
                        @click="openContactPage()">contact us</span>.<br>
                    Thank you for choosing Lord Concierge. We look forward to serving you.
                    <br><br>
                    Best regards,<br>
                    Lord Concierge.
                </p>
                <p v-if="!isEng()">Əziz {{ fullName }}, <br>
                    Lord Concierge-i seçdiyiniz üçün təşəkkür edirik. Sizə xidmət etməyi səbirsizliklə gözləyirik!<br><br>
                    Tezliklə təsdiq e-poçtu alacaqsınız. <br>
                    Təfərrüatları müzakirə etmək və təsdiqləmək üçün sizinlə əlaqə saxlaya bilərik.<br>
                    Bu arada, sifarişinizlə bağlı hər hansı sorğunuz və ya sorğunuz olarsa, xahiş edirik <span class="link"
                        @click="openContactPage()">bizimlə əlaqə saxlayın</span>.<br>
                    <br><br>
                    Hörmətlə,<br>
                    Lord Concierge.
                </p>
            </div>
        </section>
    </div>
</template>

<script>
import BookingService from '../services/BookingService';
import CarService from '../services/CarService';
import axios from 'axios';

export default {
    data() {
        return {
            isConfirmation: false,
            isLoading: false,
            service: 1,
            cars: null,
            step: 1,
            stepCaption: "Journey Details",
            routeKm: 0,
            approxAzn: 0,
            isPickup: true,
            pickup: '',
            destination: '',
            pickupCoordinates: {
                lon: "",
                lat: "",
            },
            destinationCoordinates: {
                lon: "",
                lat: "",
            },
            date: '',
            endDate: '',
            errorMsg: "",
            selectedCar: null,
            fullName: "",
            phone: "",
            email: "",
            numberOfPassengers: 0,
            numberOfSuitcases: 0,
            numberOfLuggages: 0,
            terminal: "",
            paymentMethod: "",
            promoCode: "",
            amount: "",
        };
    },
    mounted() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        });

        const hidenElements = document.querySelectorAll(".hidden");
        hidenElements.forEach((el) => observer.observe(el));

        this.getCars();
        this.stepCaption = this.isEng() ? this.stepCaption : "İstiqamət Məlumatı"
    },
    methods: {
        nextStep() {
            switch (this.step) {
                case 1:
                    if (this.service == 1) {
                        this.pickup = this.isPickup ? "Heydar Aliyev Airport" : this.pickup;
                        this.destination = this.isPickup ? this.destination : "Heydar Aliyev Airport";
                    }
                    if (this.date != '') {
                        if (this.service != 3 && (this.pickup == '' || this.destination == '')) {
                            this.errorMsg = "Please fill all the fields";
                            return;
                        }
                        if (this.service == 3 && this.endDate == '') {
                            this.errorMsg = "Please fill all the fields";
                            return;
                        }
                        this.step++;
                        this.stepCaption = this.isEng() ? "Car Selection" : "Avtomobil Seçimi";
                        this.errorMsg = "";
                    } else {
                        this.errorMsg = "Please fill all the fields";
                    }
                    break;
                case 2:
                    if (this.selectedCar != null) {
                        this.step++;
                        this.stepCaption = this.isEng() ? "Passenger Details" : "Şəxsi Məlumatı";
                        this.errorMsg = "";
                    }
                    else {
                        this.errorMsg = "Please select a car";
                    }
                    break;
                case 3:
                    if (this.fullName.length > 0 && this.email.length > 0 && this.phone.length > 0 && this.paymentMethod.length > 0) {
                        if (this.service == 1 && (this.numberOfLuggages == 0 || this.numberOfPassengers == 0 || this.numberOfSuitcases == 0)) {
                            this.errorMsg = "Please fill all the fields";
                            return;
                        }
                        this.step++;
                        this.stepCaption = this.isEng() ? "Review Details" : "Detaları Təsdiqləməy";
                        this.errorMsg = "";
                    }
                    else {
                        this.errorMsg = "Please fill all the fields";
                    }
                    break;
                case 4:
                    this.errorMsg = "";
                    this.createBooking();
            }

        },
        changeStep(step) {
            switch (step) {
                case 1:
                    this.stepCaption = this.isEng() ? "Journey Details" : "İstiqamət Məlumatı";
                    this.step = step;
                    break;
                case 2:
                    if (this.step > 2) {
                        this.step = step;
                        this.stepCaption = this.isEng() ? "Car Selection" : "Avtomobil Seçimi";
                    }
                    break;
                case 3:
                    if (this.step > 3) {
                        this.step = step;
                        this.stepCaption = this.isEng() ? "Passenger Details" : "Şəxsi Məlumatı";
                    }
                    break;
            }
        },
        selectCar(index) {
            this.selectedCar = index;
        },
        async addressAutocomplete(event) {
            this.closeDropDownList(event.target);

            /*create a DIV element that will contain the items (values):*/
            let autocompleteItemsElement = document.createElement("div");
            autocompleteItemsElement.setAttribute("class", "autocomplete-items");

            let containerElement = event.target.parentElement;
            containerElement.appendChild(autocompleteItemsElement);

             let data = { "type": "FeatureCollection", "features": [{ "type": "Feature", "properties": { "datasource": { "sourcename": "openstreetmap", "attribution": "© OpenStreetMap contributors", "license": "Open Database License", "url": "https://www.openstreetmap.org/copyright" }, "name": "Center of Heydar Aliev", "country": "Azerbaijan", "country_code": "az", "state": "Baku Ekonomic Zone", "city": "Baku City", "postcode": "1033", "district": "Narimanov Raion", "street": "Heydar Aliyev Avenue", "lon": 49.86764370374844, "lat": 40.39610005, "formatted": "Center of Heydar Aliev, Heydar Aliyev Avenue, 1033 Baku City, Azerbaijan", "address_line1": "Center of Heydar Aliev", "address_line2": "Heydar Aliyev Avenue, 1033 Baku City, Azerbaijan", "category": "activity.community_center", "timezone": { "name": "Asia/Baku", "offset_STD": "+04:00", "offset_STD_seconds": 14400, "offset_DST": "+04:00", "offset_DST_seconds": 14400 }, "plus_code": "8HGF9VW9+C3", "result_type": "amenity", "rank": { "importance": 0.3139400466797944, "confidence": 1, "match_type": "full_match" }, "place_id": "510617eaf20eef484059d4580c68b3324440f00102f901868d8b1100000000c0020192031643656e746572206f662048657964617220416c696576" }, "geometry": { "type": "Point", "coordinates": [49.86764370374844, 40.39610005] }, "bbox": [49.8662163, 40.3953269, 49.8687683, 40.3969753] }, { "type": "Feature", "properties": { "datasource": { "sourcename": "openstreetmap", "attribution": "© OpenStreetMap contributors", "license": "Open Database License", "url": "https://www.openstreetmap.org/copyright" }, "name": "Heydar Aliyev", "country": "Azerbaijan", "country_code": "az", "state": "Absheron-Khizi", "city": "Sumgayit", "postcode": "5006", "street": "Nizami", "lon": 49.6676839, "lat": 40.5964479, "formatted": "Heydar Aliyev, Nizami, 5006 Sumgayit, Azerbaijan", "address_line1": "Heydar Aliyev", "address_line2": "Nizami, 5006 Sumgayit, Azerbaijan", "category": "tourism.sights.memorial", "timezone": { "name": "Asia/Baku", "offset_STD": "+04:00", "offset_STD_seconds": 14400, "offset_DST": "+04:00", "offset_DST_seconds": 14400 }, "plus_code": "8HGFHMW9+H3", "result_type": "amenity", "rank": { "importance": 0.20000999999999997, "confidence": 1, "match_type": "full_match" }, "place_id": "516a4881aa76d54840594a22a067584c4440f00103f90183f9fea200000000c0020192030d48657964617220416c69796576e203236f70656e7374726565746d61703a76656e75653a6e6f64652f32373334363139303131" }, "geometry": { "type": "Point", "coordinates": [49.6676839, 40.5964479] }, "bbox": [49.6676339, 40.5963979, 49.6677339, 40.5964979] }, { "type": "Feature", "properties": { "datasource": { "sourcename": "openstreetmap", "attribution": "© OpenStreetMap contributors", "license": "Open Database License", "url": "https://www.openstreetmap.org/copyright" }, "name": "Heydər Əliyev", "country": "Azerbaijan", "country_code": "az", "state": "Lankaran-Astara", "county": "Jalilabad District", "city": "Cəlilabad", "postcode": "1500", "street": "Heydər Əliyev", "lon": 48.5106094, "lat": 39.211662, "formatted": "Heydər Əliyev, 1500 Cəlilabad, Azerbaijan", "address_line1": "Heydər Əliyev", "address_line2": "1500 Cəlilabad, Azerbaijan", "timezone": { "name": "Asia/Baku", "offset_STD": "+04:00", "offset_STD_seconds": 14400, "offset_DST": "+04:00", "offset_DST_seconds": 14400 }, "plus_code": "8HFC6G66+M6", "result_type": "street", "rank": { "importance": 0.10000999999999993, "confidence": 1, "match_type": "full_match" }, "place_id": "51dd0319a65b4148405929e78bbd179b4340f00102f9011475da1000000000c0020492030f48657964c9997220c68f6c69796576" }, "geometry": { "type": "Point", "coordinates": [48.5106094, 39.211662] }, "bbox": [48.4931766, 39.2081162, 48.5237735, 39.2151485] }, { "type": "Feature", "properties": { "datasource": { "sourcename": "openstreetmap", "attribution": "© OpenStreetMap contributors", "license": "Open Database License", "url": "https://www.openstreetmap.org/copyright" }, "name": "Heydər Əliyev", "country": "Azerbaijan", "country_code": "az", "state": "Mil-Mughan", "county": "Sabirabad District", "city": "Sabirabad", "street": "Heydər Əliyev", "lon": 48.4633352, "lat": 39.9906923, "formatted": "Heydər Əliyev, Sabirabad, Azerbaijan", "address_line1": "Heydər Əliyev", "address_line2": "Sabirabad, Azerbaijan", "timezone": { "name": "Asia/Baku", "offset_STD": "+04:00", "offset_STD_seconds": 14400, "offset_DST": "+04:00", "offset_DST_seconds": 14400 }, "plus_code": "8HFCXFR7+78", "plus_code_short": "XFR7+78 Sabirabad, Sabirabad District, Azerbaijan", "result_type": "street", "rank": { "importance": 0.10000999999999993, "confidence": 1, "match_type": "full_match" }, "place_id": "51f68a5d914e3b48405913735a01cffe4340f00102f901c114c70a00000000c0020492030f48657964c9997220c68f6c69796576" }, "geometry": { "type": "Point", "coordinates": [48.4633352, 39.9906923] }, "bbox": [48.4631588, 39.9905009, 48.4634036, 39.9907665] }], "query": { "text": "heydar aliyev", "parsed": { "street": "heydar aliyev", "expected_type": "unknown" } } }
            var apiKey = "9454e6cbe74044dfbebc333a5ba27d2d";
            // var url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(event.target.value) + ' Azerbaijan'}&limit=5&apiKey=${apiKey}`;
            // let promise = await axios.get(url);
            // let currentItems = promise.data.features;

            let currentItems = data.features;
            currentItems.forEach((feature, index) => {
                // if (feature.properties.country == "Azerbaijan") {
                var itemElement = document.createElement("div");
                /* Set formatted address as item value */
                itemElement.innerHTML = feature.properties.formatted;
                /* Set on click event listeners on items */
                itemElement.addEventListener("click", (e) => {
                    if (this.service == 1) {
                        if (this.isPickup) {
                            this.destination = feature.properties.formatted;
                            this.destinationCoordinates.lat = feature.properties.lat;
                            this.destinationCoordinates.lon = feature.properties.lon;
                        } else {
                            this.pickup = feature.properties.formatted;
                            this.pickupCoordinates.lat = feature.properties.lat;
                            this.pickupCoordinates.lon = feature.properties.lon;
                        }
                    } else {
                        if (event.target.id == "pickupAddress") {
                            this.pickup = feature.properties.formatted;
                        } else {
                            this.destination = feature.properties.formatted;
                        }
                    }
                    this.closeDropDownList(event.target);
                });
                autocompleteItemsElement.appendChild(itemElement);
                // }
            });
            // }, (err) => {
            // if (!err.canceled) {
            //     console.log(err);
            // }
            // });


            return;





            /* Active request promise reject function. To be able to cancel the promise when a new request comes */
            var currentPromiseReject;

            /* Execute a function when someone writes in the text field: */
            this.closeDropDownList();
            var currentValue = inputElement.value;

            // Cancel previous request promise
            if (currentPromiseReject) {
                currentPromiseReject({
                    canceled: true
                });
            }
            if (!currentValue) {
                console.log("geocoding");
                return false;
            }



        },
        closeDropDownList(element) {
            let containerElement = element.parentElement;
            var autocompleteItemsElement = containerElement.querySelector(".autocomplete-items");
            if (autocompleteItemsElement) {
                containerElement.removeChild(autocompleteItemsElement);
            }
        },
        getAmountOfDays() {
            const oneDay = 24 * 60 * 60 * 1000; // Milliseconds in a day
            const date = new Date(this.date);
            const endDate = new Date(this.endDate);
            const daysDifference = Math.ceil((endDate - date) / oneDay);
            return daysDifference;
        },
        calculateRentAmount() {
            const oneDay = 24 * 60 * 60 * 1000; // Milliseconds in a day
            const date = new Date(this.date);
            const endDate = new Date(this.endDate);
            const daysDifference = Math.ceil((endDate - date) / oneDay);
            if (daysDifference === 1) {
                this.amount = this.cars[this.selectedCar]['1_day_rate'];
            } else if (daysDifference >= 3 && daysDifference < 5) {
                this.amount = this.cars[this.selectedCar]['3_days_rate'];
            } else if (daysDifference >= 5 && daysDifference < 7) {
                this.amount = this.cars[this.selectedCar]['5_days_rate'];
            } else {
                const oneDayCost = daysDifference * this.cars[this.selectedCar]['1_day_rate'];
                const threeDaysCost = Math.ceil(daysDifference / 3) * this.cars[this.selectedCar]['3_days_rate'];
                const fiveDaysCost = Math.ceil(daysDifference / 5) * this.cars[this.selectedCar]['5_days_rate'];
                const oneWeekCost = Math.ceil(daysDifference / 7) * this.cars[this.selectedCar]['1_week_rate'];
                this.amount = Math.min(oneDayCost, threeDaysCost, fiveDaysCost, oneWeekCost);
            }
            return this.amount;
        },
        createBooking() {
            this.isConfirmation = true;
            this.isLoading = true;
            let flightType = this.isPickup ? "Pickup" : "Destination";
            flightType = this.service == 1 ? flightType : null;
            let pickup = this.pickup;
            let destination = this.destination;
            if (this.service == 1) {
                pickup = this.isPickup ? "Heydar Aliyev Airport" : pickup;
                destination = this.isPickup ? destination : "Heydar Aliyev Airport";
            }
            if (this.service == 3) {
                pickup = null;
                destination = null;
                const oneDay = 24 * 60 * 60 * 1000; // Milliseconds in a day
                const date = new Date(this.date);
                const endDate = new Date(this.endDate);
                const daysDifference = Math.ceil((endDate - date) / oneDay);
                console.log(daysDifference);
                if (daysDifference === 1) {
                    this.amount = this.cars[this.selectedCar]['1_day_rate'];
                } else if (daysDifference >= 3 && daysDifference < 5) {
                    this.amount = this.cars[this.selectedCar]['3_days_rate'];
                } else if (daysDifference >= 5 && daysDifference < 7) {
                    this.amount = this.cars[this.selectedCar]['5_days_rate'];
                } else {
                    const oneDayCost = daysDifference * this.cars[this.selectedCar]['1_day_rate'];
                    const threeDaysCost = Math.ceil(daysDifference / 3) * this.cars[this.selectedCar]['3_days_rate'];
                    const fiveDaysCost = Math.ceil(daysDifference / 5) * this.cars[this.selectedCar]['5_days_rate'];
                    const oneWeekCost = Math.ceil(daysDifference / 7) * this.cars[this.selectedCar]['1_week_rate'];
                    this.amount = Math.min(oneDayCost, threeDaysCost, fiveDaysCost, oneWeekCost);
                }
            } else {
                this.amount = "150";
            }
            let userId = (localStorage.getItem('id') != null) ? localStorage.getItem('id') : null;
            let data = {
                'service': this.service,
                'user_id': userId,
                'flight_type': flightType,
                'pickup_address': pickup,
                'destination_address': destination,
                'date': this.date,
                'end_date': this.service == 3 ? this.endDate : null,
                'car_id': this.cars[this.selectedCar].id,
                'car_name': this.cars[this.selectedCar].name,
                'full_name': this.fullName,
                'phone': this.phone,
                'email': this.email,
                'passengers': this.service == 1 ? this.numberOfPassengers : null,
                'suitcases': this.service == 1 ? this.numberOfSuitcases : null,
                'luggages': this.service == 1 ? this.numberOfLuggages : null,
                'terminal': this.service == 1 ? this.terminal : null,
                'payment_method': this.paymentMethod,
                'promo_code': this.promoCode,
                'amount': this.amount,
            }
            try {
                BookingService.createBooking(data).then(res => {
                    if (res.status == 200) {
                        this.isLoading = false;
                    } else {
                        this.isConfirmation = false;
                    }
                })
            } catch (error) {
                this.isConfirmation = false;
            }

        },
        changeService(service) {
            this.service = service;
            this.stepCaption = this.isEng() ? "Journey Details" : "İstiqamət Məlumatı";
            this.step = 1;
            this.pickup = "";
            this.destination = "";
            this.selectedCar = null;
            this.fullName = "";
            this.phone = "";
            this.email = "";
            this.numberOfPassengers = 0;
            this.numberOfSuitcases = 0;
            this.numberOfLuggages = 0;
            this.flightNumber = "";
            this.paymentMethod = "";
            this.promoCode = "";
            this.amount = "";
        },
        openContactPage() {
            this.$router.push('/contact-us');
        },
        getCars() {
            CarService.getAll().then(res => {
                if (res.status == 200) {
                    this.cars = res.data;
                    console.log(this.cars[0]);
                } else {
                }
            })
        },
        isEng() {
            return localStorage.getItem('lang') == 'en';
        },
    }
}
</script>


<style lang="scss" scoped>
.booking-page {
    padding-top: 7rem;
}

.main-image-wrapper {
    width: 100%;
    position: relative;

    img {
        width: 100%;
        height: 380px;
        filter: brightness(0.3);
        object-fit: cover;
    }

    h1 {
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        left: 50%;
        color: #FFF;
        text-transform: uppercase;
    }

}

.breadcrumbs {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3rem 0;

    .step {
        width: 25px;
        height: 25px;
        border-radius: 100%;
        background-color: #7c7c7c;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        color: #FFF;
        font-family: "Cinzel";
        font-size: 16px;
        font-style: normal;
        font-weight: 700;

        &.active {
            background-color: #B08500;

            p {
                color: #FFF;
                cursor: pointer;

                &:hover {
                    color: #B08500;
                }
            }
        }

        p {
            position: absolute;
            top: 40px;
            color: #868686;
            font-family: "Inter";
            font-size: 14px;
            font-weight: 400;
            letter-spacing: 0.5px;
        }
    }

    .line {
        background-color: #f3f3f3;
        opacity: 0.3;
        width: 100px;
        height: 2px;

        &.active {
            background-color: #B08500;
            opacity: 1;
        }
    }
}

.details {
    padding: 0 45px;
    width: 55%;

    h1 {
        color: #FFF;
        font-size: 2rem;
        font-weight: 700;
        letter-spacing: 1.2px;
    }

    .details-container {
        border: 1px solid #B08500;
        background-color: transparent;

        .tabs {
            display: flex;
            border-bottom: 1px solid #ffffff80;

            p {
                color: #FFF;
                font-family: "Inter";
                font-size: 13px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                letter-spacing: 0.55px;
                cursor: pointer;
                padding: 6px 2rem;
                margin: 0;

                &.selected {
                    background-color: #B08500;
                }

                &:hover {
                    background-color: #b084009c;

                    &.selected {
                        background-color: #B08500;
                    }
                }
            }

        }

        .content {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            padding: 30px 25px;


            .step1-content {
                display: flex;
                flex-direction: column;
                gap: 2rem;
            }

            div.input-row {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 2rem;
                width: 100%;

                select {
                    cursor: pointer;
                }

                &.payment-method {
                    div {
                        width: 40%;
                    }

                    .subheading {
                        font-size: 0.7rem;
                        opacity: 0.8;
                    }
                }

                p {
                    color: #FFF;
                    font-family: "Inter";
                    font-size: 0.9rem;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                    letter-spacing: 0.5px;
                    margin: 0;
                }

                .checkboxes {
                    display: flex;
                    align-items: center;
                    width: fit-content;
                    margin-left: auto;

                    label {
                        font-family: "Inter", sans-serif;
                        color: #FFF;
                        font-size: 13px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: normal;
                        letter-spacing: 0.5px;

                        &:nth-child(1n) {
                            margin-right: 1rem;
                        }
                    }

                    /* checkbox settings 👇 */

                    .ui-checkbox {
                        --primary-color: #B08500;
                        --secondary-color: #fff;
                        --primary-hover-color: #4096ff;
                        /* checkbox */
                        --checkbox-diameter: 15px;
                        --checkbox-border-radius: 5px;
                        --checkbox-border-color: #d9d9d9;
                        --checkbox-border-width: 1px;
                        --checkbox-border-style: solid;
                        /* checkmark */
                        --checkmark-size: 1.2;
                        margin-right: 5px;
                    }

                    .ui-checkbox,
                    .ui-checkbox *,
                    .ui-checkbox *::before,
                    .ui-checkbox *::after {
                        -webkit-box-sizing: border-box;
                        box-sizing: border-box;
                    }

                    .ui-checkbox {
                        -webkit-appearance: none;
                        -moz-appearance: none;
                        appearance: none;
                        width: var(--checkbox-diameter);
                        height: var(--checkbox-diameter);
                        border-radius: var(--checkbox-border-radius);
                        background: var(--secondary-color);
                        border: var(--checkbox-border-width) var(--checkbox-border-style) var(--checkbox-border-color);
                        -webkit-transition: all 0.3s;
                        -o-transition: all 0.3s;
                        transition: all 0.3s;
                        cursor: pointer;
                        position: relative;
                    }

                    .ui-checkbox::after {
                        content: "";
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        -webkit-box-shadow: 0 0 0 calc(var(--checkbox-diameter) / 2.5) var(--primary-color);
                        box-shadow: 0 0 0 calc(var(--checkbox-diameter) / 2.5) var(--primary-color);
                        border-radius: inherit;
                        opacity: 0;
                        -webkit-transition: all 0.5s cubic-bezier(0.12, 0.4, 0.29, 1.46);
                        -o-transition: all 0.5s cubic-bezier(0.12, 0.4, 0.29, 1.46);
                        transition: all 0.5s cubic-bezier(0.12, 0.4, 0.29, 1.46);
                    }

                    .ui-checkbox::before {
                        top: 40%;
                        left: 50%;
                        content: "";
                        position: absolute;
                        width: 4px;
                        height: 7px;
                        border-right: 2px solid var(--secondary-color);
                        border-bottom: 2px solid var(--secondary-color);
                        -webkit-transform: translate(-50%, -50%) rotate(45deg) scale(0);
                        -ms-transform: translate(-50%, -50%) rotate(45deg) scale(0);
                        transform: translate(-50%, -50%) rotate(45deg) scale(0);
                        opacity: 0;
                        -webkit-transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
                        -o-transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
                        transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
                    }

                    /* actions */

                    .ui-checkbox:hover {
                        border-color: var(--primary-color);
                    }

                    .ui-checkbox:checked {
                        background: var(--primary-color);
                        border-color: transparent;
                    }

                    .ui-checkbox:checked::before {
                        opacity: 1;
                        -webkit-transform: translate(-50%, -50%) rotate(45deg) scale(var(--checkmark-size));
                        -ms-transform: translate(-50%, -50%) rotate(45deg) scale(var(--checkmark-size));
                        transform: translate(-50%, -50%) rotate(45deg) scale(var(--checkmark-size));
                        -webkit-transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
                        -o-transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
                        transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
                    }

                    .ui-checkbox:active:not(:checked)::after {
                        -webkit-transition: none;
                        -o-transition: none;
                        -webkit-box-shadow: none;
                        box-shadow: none;
                        transition: none;
                        opacity: 1;
                    }
                }

                input,
                select {
                    color: #000000;
                    font-family: "Inter";
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                    letter-spacing: 0.4px;
                    outline: none;
                    width: 60%;
                    padding: 5px;
                    margin-left: auto;
                    border: 2px solid transparent;
                    border-radius: 0;

                    &:focus {
                        border: 2px solid #B08500;
                    }
                }

            }

            .button-row {
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                align-items: center;

                .btn {
                    display: flex;
                    //align-items: center;
                    justify-content: center;
                    background: #B08500;
                    border-radius: 0;
                    width: 30%;
                    padding: 10px;
                    margin-top: 1rem;
                    transition: 0.3s background-color;

                    p {
                        color: #FFF;
                        font-family: "Inter";
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: normal;
                        margin: 0;
                        margin-left: auto;
                        margin-right: auto;

                    }

                    img {
                        width: 1rem;
                    }

                    &:hover {
                        background-color: transparent;
                        border: 1px solid #B08500;
                    }

                    &:active {
                        transition: 0s;
                        border: 1px solid transparent;
                    }

                    &.disabled {
                        &:hover {
                            background: #B08500;
                            border: 1px solid transparent;
                        }


                    }


                }
            }
        }


    }
}

.main-wrapper {
    display: flex;
    padding-top: 3rem;
    padding-bottom: 4rem;
}

.map-wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    width: 40%;
    max-height: 500px;
    //background-color: #B08500;

    #my-map,
    iframe {
        width: 100%;
        height: 100%;
        position: relative;
    }
}

.errorMsg {
    color: rgb(179, 0, 0);
    margin: 0 25px;
    font-family: "Inter", sans-serif;
    font-size: 0.9rem;
}


.step2-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;

    .wrapper {
        width: 47%;
        cursor: pointer;
        border: 3px solid transparent;

        &.selected {
            border: 3px solid #B08500;
            background-color: #b3b3b3;
        }
    }
}

.step4-content {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;

    .confirmation-details {
        width: 48%;

        .heading {
            background-color: #B08500;
            padding: 4px 10px;

            p {
                font-family: "Inter", sans-serif;
                font-size: 0.8rem;
                margin: 0;
                color: white;
            }
        }

        .body {
            border: 1px solid #B08500;
            display: flex;
            flex-direction: column;
            gap: 1rem;

            .input-row {
                width: 100% !important;
                gap: 0 !important;
                text-align: right;

                p {
                    padding: 4px 10px;
                    font-size: 0.8rem !important;
                    margin: 0;
                    opacity: 0.7;
                }

                .detail-data {
                    margin-left: auto;
                    opacity: 1;
                }

            }


            p {
                font-family: "Inter", sans-serif;
                color: white;
                margin: 0;
                font-size: 0.8rem !important;
                padding: 5px 10px;
                line-height: normal;
            }
        }
    }

}

.autocomplete-container {
    position: relative;
    margin-left: auto;
    width: 60%;

    input {
        width: 100% !important;
    }
}

.autocomplete-container input {
    width: calc(100% - 43px);
    outline: none;

    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 10px;
    padding-right: 31px;
    font-size: 16px;
}

div.autocomplete-items {
    position: absolute;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.1);
    border-top: none;
    background-color: #fff;

    z-index: 99;
    top: calc(100% + 2px);
    left: 0;
    right: 0;
}

.autocomplete-items div {
    padding: 10px;
    cursor: pointer;
}

.autocomplete-items div:hover {
    /*when hovering an item:*/
    background-color: rgba(0, 0, 0, 0.1);
}

@media only screen and (max-width: 1024px) {
    .booking-page {
        padding-top: 1rem;

        .main-image-wrapper {
            text-align: center;

            img {
                object-fit: cover;
                height: 390px;
                width: 100%;
                object-position: center center;
            }

            h1 {
                font-size: 1.8rem;
                width: 60%;
            }

        }
    }

    .breadcrumbs {
        padding: 0 15px;

        .line {
            width: 20%;
        }
    }

    .main-wrapper {
        flex-direction: column;
        padding: 0 15px;
        margin: 5rem 0;

        .details {
            width: 100%;
            padding: 0;
        }

        .map-wrapper {
            width: 100%;
            height: 50vh;
        }
    }

}

.confirmation-wrapper {
    padding: 1rem 45px;
    position: relative;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        text-align: center;
        color: white;
        margin-bottom: 2rem;
    }

    .loader {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .text-wrapper {
        .link {
            text-decoration: underline;
            cursor: pointer;

            &:hover {
                color: white;
            }
        }
    }
}
</style>