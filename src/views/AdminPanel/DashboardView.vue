<script setup>
import Loader from '../../components/Loader.vue';
</script>

<template>
    <div class="wrapper">
        <div class="side_nav">
            <img src="@/assets/img/logo.webp" alt="Lord Concierge Logo" class="logo">

            <div class="page selected" @click="switchTab('dashboard')">
                <p>Dashboard</p>
            </div>
            <div class="page" @click="switchTab('users')">
                <p>Users</p>
            </div>
            <div class="page" @click="switchTab('orders')">
                <p>Bookings</p>
            </div>
            <div class="page" @click="switchTab('messages')">
                <p>Messages</p>
            </div>
            <div class="page" @click="switchTab('newsletter subscribers')">
                <p>Newsletter Subscribers</p>
            </div>
            <div class="page" @click="switchTab('car park')">
                <p>Car park</p>
            </div>
            <div class="page" @click="switchTab('add car')">
                <p>Add car</p>
            </div>
            <!-- <div class="page" @click="switchTab('create payment')">
                <p>Create payment</p>
            </div> -->
            <div class="page" @click="switchTab('website visits')">
                <p>Website Visits</p>
            </div>
            <div class="page logout" @click="logout()">
                <p>Log out</p>
            </div>
        </div>

        <div class="main" v-if="currentTab == 'Dashboard'">
            <div class="quick_action">
                <p>Quick Actions</p>
                <div class="btns">
                    <div class="btn btn-danger" @click="switchTab('add car')">Add new Car</div>
                </div>
            </div>

            <div class="card-container">
                <div class="card">
                    <div class="data-container">
                        <div class="data">
                            <p>Total Visits</p>
                            <p>{{ visits?.length || 0 }}</p>
                        </div>
                        <div class="icon">
                            <img src="@/assets/img/click_icon.webp" alt="Click icon">
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="data-container">
                        <div class="data">
                            <p>Total Users</p>
                            <p>{{ users?.length || 0 }}</p>
                        </div>
                        <div class="icon">
                            <img src="@/assets/img/users_icon.webp" alt="Users icon">
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="data-container">
                        <div class="data">
                            <p>Total Bookings</p>
                            <p>{{ bookings?.length || 0 }}</p>
                        </div>
                        <div class="icon">
                            <img src="@/assets/img/cart_icon.webp" alt="Cart icon">
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="data-container">
                        <div class="data">
                            <p>Total Revenue</p>
                            <p>{{ totalRevenue }}</p>
                        </div>
                        <div class="icon">
                            <img src="@/assets/img/coin_icon.webp" alt="Coin icon">
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="data-container">
                        <div class="data">
                            <p>Projected Revenue</p>
                            <p>{{ estimatedRevenue }}</p>
                        </div>
                        <div class="icon">
                            <img src="@/assets/img/coin_icon.webp" alt="Coin icon">
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="data-container">
                        <div class="data">
                            <p>Newsletter Subscribers</p>
                            <p>{{ subscribers?.length || 0 }}</p>
                        </div>
                        <div class="icon">
                            <img src="@/assets/img/newsletter_icon.png" alt="Cart icon">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main new_car" v-if="currentTab == 'Add Car'">
            <h1>Add New Car</h1>
            <section class="inputs">
                <div class="input_group">
                    <label>Service Type*</label>
                    <select v-model="car.type">
                        <option value="" disabled selected>Please select</option>
                        <option value="Airport">Airport Transfer</option>
                        <option value="Rent">Car Rent</option>
                        <option value="Wedding">Wedding Cars</option>
                    </select>
                </div>
                <div class="input_group">
                    <label>Car name*</label>
                    <input type="text" placeholder="Mercedes Benz" v-model="car.carName" />
                </div>
                <div class="input_group" v-if="car.type != 'Rent'">
                    <label>Description*</label>
                    <textarea placeholder="General description" v-model="car.description"></textarea>
                </div>
                <div class="input_group" v-if="car.type != 'Rent'">
                    <label>Specification description 1*</label>
                    <textarea placeholder="Specification description for first column in detail page"
                        v-model="car.specification1"></textarea>
                </div>
                <div class="input_group" v-if="car.type != 'Rent'">
                    <label>Specification description 2*</label>
                    <textarea placeholder="Specification description for second column in detail page"
                        v-model="car.specification2"></textarea>
                </div>
                <div class="input_group">
                    <label>1 Day Rate*</label>
                    <input type="number" placeholder="&#8380; per day" min="0" v-model="car.day1Rate" />
                </div>
                <div class="input_group">
                    <label>3 Days Rate*</label>
                    <input type="number" placeholder="&#8380; per day" min="0" v-model="car.days3Rate" />
                </div>
                <div class="input_group">
                    <label>5 Days Rate*</label>
                    <input type="number" placeholder="&#8380; per day" min="0" v-model="car.days5Rate" />
                </div>
                <div class="input_group">
                    <label>1 Week Rate*</label>
                    <input type="number" placeholder="&#8380; per day" min="0" v-model="car.week1Rate" />
                </div>
                <div class="input_group" v-if="car.type != 'Rent'">
                    <label>Maximum passengers*</label>
                    <input type="number" placeholder="Amount of passengers max" min="0" v-model="car.maxPassengers" />
                </div>
                <div class="input_group" v-if="car.type != 'Rent'">
                    <label>Maximum suitcases*</label>
                    <input type="number" placeholder="Amount of passengers max" min="0" v-model="car.maxSuitcases" />
                </div>
                <div class="input_group" v-if="car.type != 'Rent'">
                    <label>Maximum luggages*</label>
                    <input type="number" placeholder="Amount of passengers max" min="0" v-model="car.maxLuggages" />
                </div>
                <div class="input_group">
                    <label>Car image*</label>
                    <input type="file" id="carImageFile" />
                </div>
                <div class="input_group" v-if="car.type != 'Rent'">
                    <label>Image Gallery 1*</label>
                    <input type="file" id="image1File" />
                </div>
                <div class="input_group" v-if="car.type != 'Rent'">
                    <label>Image Gallery 2</label>
                    <input type="file" id="image2File" />
                </div>
                <div class="input_group" v-if="car.type != 'Rent'">
                    <label>Image Gallery 3</label>
                    <input type="file" id="image3File" />
                </div>
                <div class="input_group" v-if="car.type != 'Rent'">
                    <label>Image Gallery 4</label>
                    <input type="file" id="image4File" />
                </div>
                <div class="input_group" v-if="car.type != 'Rent'">
                    <label>Image Gallery 5</label>
                    <input type="file" id="image5File" />
                </div>
            </section>
            <div id="status-box">
                <p>{{ statusMsg }}</p>
            </div>
            <section class="submit_btn_wrapper">
                <div class="btn btn-primary" @click="addCar($event)">Add car</div>
            </section>

        </div>
        <div class="main messages" v-if="currentTab == 'Messages'">
            <h1>Incoming messages</h1>
            <div class="messages_container">
                <Loader v-if="isLoading" class="loader" />
                <div class="message" v-for="(message, i) in messages" @click="expandMessage(i)" :id="i">
                    <div>
                        <p class="name">{{ message.fullName }}</p>
                        <p class="email">{{ message.email }}</p>
                        <p class="email">{{ message.phone }}</p>
                    </div>
                    <p class="content"><b>Message:</b> {{ message.message }}</p>
                    <p class="date">{{ message.created_date }}</p>
                </div>
                <h5 v-if="messages == null || messages == ''" style="text-align: center; color: black;">No incoming messages
                </h5>
            </div>
        </div>

        <div class="main users" v-if="currentTab == 'Newsletter Subscribers'">
            <h1>Newsletter Subscribers</h1>
            <div class="users_container subscribers">
                <Loader v-if="isLoading" class="loader" />
                <div class="user" v-for="(user, i) in subscribers" :id="user.id">
                    <p class="data">{{ i+1 }}</p>
                    <p class="data">{{ user.email }}</p>
                </div>
                <h5 v-if="users == null || users == ''" style="text-align: center; color: black;">No subscribers yet</h5>
            </div>

        </div>
        <div class="main cars" v-if="currentTab == 'Cars'">
            <h1>Car park</h1>
            <div class="cars_container">
                <Loader v-if="isLoading" class="loader" />
                <div class="car_container" v-for="(car, i) in cars" :id="i">
                    <img :src="'@/../../api/public/car_images/' + car.car_image" alt="Car image" class="preview_data">
                    <p class="preview_data">{{ car.name }}</p>
                    <img src="@/assets/img/expand_icon.png" alt="Expand icon" class="expand_icon"
                        @click="expandCarContainer(i)">


                    <div class="edit_data">
                        <section class="inputs">
                            <div class="input_group">
                                <label>Car name*</label>
                                <input type="text" placeholder="Mercedes Benz" v-model="car.name" />
                            </div>
                            <div class="input_group">
                                <label>Description*</label>
                                <textarea placeholder="General description" v-model="car.description"></textarea>
                            </div>
                            <div class="input_group">
                                <label>Specification description 1*</label>
                                <textarea placeholder="Specification description for first column in detail page"
                                    v-model="car.specification_1"></textarea>
                            </div>
                            <div class="input_group">
                                <label>Specification description 2*</label>
                                <textarea placeholder="Specification description for second column in detail page"
                                    v-model="car.specification_2"></textarea>
                            </div>
                            <div class="input_group">
                                <label>1 Day Rate*</label>
                                <input type="number" placeholder="&#8380; per day" min="0" v-model="car['1_day_rate']" />
                            </div>
                            <div class="input_group">
                                <label>3 Days Rate*</label>
                                <input type="number" placeholder="&#8380; per day" min="0" v-model="car['3_days_rate']" />
                            </div>
                            <div class="input_group">
                                <label>5 Days Rate*</label>
                                <input type="number" placeholder="&#8380; per day" min="0" v-model="car['5_days_rate']" />
                            </div>
                            <div class="input_group">
                                <label>1 Week Rate*</label>
                                <input type="number" placeholder="&#8380; per day" min="0" v-model="car['1_week_rate']" />
                            </div>
                            <div class="input_group">
                                <label>Maximum passengers*</label>
                                <input type="number" placeholder="Amount of passengers max" min="0"
                                    v-model="car.max_passengers" />
                            </div>
                            <div class="input_group">
                                <label>Maximum suitcases*</label>
                                <input type="number" placeholder="Amount of passengers max" min="0"
                                    v-model="car.max_suitcases" />
                            </div>
                            <div class="input_group">
                                <label>Maximum luggages*</label>
                                <input type="number" placeholder="Amount of passengers max" min="0"
                                    v-model="car.max_luggages" />
                            </div>
                            <div class="input_group">
                                <img :src="'@/../../api/public/car_images/' + car.car_image" alt="Car image"
                                    class="preview_image">
                                <label>Car image*</label>
                                <input type="file" id="carImageFile" />
                            </div>
                            <div class="input_group">
                                <img :src="'@/../../api/public/car_images/' + car.image_1" alt="Car image"
                                    class="preview_image" v-if="car.image_1 != null">
                                <label>Image Gallery 1*</label>
                                <input type="file" id="image1File" />
                            </div>
                            <div class="input_group">
                                <img :src="'@/../../api/public/car_images/' + car.image_2" alt="Car image"
                                    class="preview_image" v-if="car.image_2 != null">
                                <label>Image Gallery 2</label>
                                <input type="file" id="image2File" />
                            </div>
                            <div class="input_group">
                                <img :src="'@/../../api/public/car_images/' + car.image_3" alt="Car image"
                                    class="preview_image" v-if="car.image_3 != null">
                                <label>Image Gallery 3</label>
                                <input type="file" id="image3File" />
                            </div>
                            <div class="input_group">
                                <img :src="'@/../../api/public/car_images/' + car.image_4" alt="Car image"
                                    class="preview_image" v-if="car.image_4 != null">
                                <label>Image Gallery 4</label>
                                <input type="file" id="image4File" />
                            </div>
                            <div class="input_group">
                                <img :src="'@/../../api/public/car_images/' + car.image_5" alt="Car image"
                                    class="preview_image" v-if="car.image_5 != null">
                                <label>Image Gallery 5</label>
                                <input type="file" id="image5File" />
                            </div>
                        </section>
                        <div id="status-box">
                            <p>{{ statusMsg }}</p>
                        </div>
                        <section class="submit_btn_wrapper">
                            <div class="btn btn-warning" @click="updateCar(i, car.id)">Save</div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
        <div class="main orders" v-if="currentTab == 'Orders'">
            <h1>Bookings</h1>

            <div class="bookings_container">
                <Loader v-if="isLoading" class="loader" />
                <div class="booking" v-for="(booking, i) in bookings" :id="i">
                    <img src="@/assets/img/expand_icon.png" alt="Expand icon" class="expand_icon"
                        @click="expandBooking(i)" />
                    <div class="preview_data">
                        <p v-if="booking.flight_type"><b>Service: </b>Airport Transfer</p>
                        <p v-if="!booking.flight_type"><b>Service: </b>{{ booking.end_date ? "Car Hire" : "One Way" }}</p>
                        <p><b>Customer: </b>{{ booking.full_name }}</p>
                        <p><b>Order Number:</b> {{ booking.order_number }}</p>
                        <p><b>Status:</b> {{ booking.status }}</p>
                        <p class="date">{{ formatCreatedDate(booking.created_date) }}</p>
                    </div>
                    <div class="content">
                        <div class="group">
                            <label>Order number</label>
                            <p>{{ booking.order_number }}</p>
                        </div>

                        <div class="group">
                            <label>User Id</label>
                            <p>{{ booking.user_id || "N/A" }}</p>
                        </div>

                        <div class="group" v-if="booking.flight_type">
                            <label>Flight Type</label>
                            <p>{{ booking.flight_type || "N/A" }}</p>
                        </div>

                        <div class="group" v-if="booking.pickup_address">
                            <label>Pickup Address</label>
                            <p>{{ booking.pickup_address || "N/A" }}</p>
                        </div>

                        <div class="group" v-if="booking.destination_address">
                            <label>Destination Address</label>
                            <p>{{ booking.destination_address || "N/A" }}</p>
                        </div>

                        <div class="group" v-if="booking.date">
                            <label>Date</label>
                            <p>{{ booking.date || "N/A" }}</p>
                        </div>

                        <div class="group" v-if="booking.end_date">
                            <label>End Date</label>
                            <p>{{ booking.end_date || "N/A" }}</p>
                        </div>

                        <div class="group">
                            <label>Car</label>
                            <p>{{ cars.find(car => car.id === 9).name }}</p>
                        </div>

                        <div class="group">
                            <label>Full Name</label>
                            <p>{{ booking.full_name || "N/A" }}</p>
                        </div>

                        <div class="group">
                            <label>Email</label>
                            <p>{{ booking.email || "N/A" }}</p>
                        </div>

                        <div class="group">
                            <label>Phone</label>
                            <p>{{ booking.phone || "N/A" }}</p>
                        </div>

                        <div class="group" v-if="booking.passengers">
                            <label>Passengers</label>
                            <p>{{ booking.passengers || "N/A" }}</p>
                        </div>

                        <div class="group" v-if="booking.suitcases">
                            <label>Suitcases</label>
                            <p>{{ booking.suitcases || "N/A" }}</p>
                        </div>

                        <div class="group" v-if="booking.luggages">
                            <label>Luggages</label>
                            <p>{{ booking.luggages || "N/A" }}</p>
                        </div>

                        <div class="group" v-if="booking.flight_number">
                            <label>Terminal</label>
                            <p>{{ booking.terminal || "N/A" }}</p>
                        </div>

                        <div class="group">
                            <label>Payment Code</label>
                            <p>{{ booking.code }}</p>
                        </div>

                        <div class="group">
                            <label>Amount</label>
                            <p>{{ booking.amount }}</p>
                        </div>

                        <div class="group">
                            <label>Payment Method</label>
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
                            <label>Created Date</label>
                            <p>{{ booking.created_date }}</p>
                        </div>

                        <div class="group" v-if="booking.status == 'Not Paid'">
                            <button class="btn btn-danger"
                                @click="autofillBookingId(booking.payment_id, booking.order_number, booking.amount)">Create
                                Payment</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>

        <div class="main users" v-if="currentTab == 'Users'">
            <h1>User Base</h1>
            <div class="users_container">
                <Loader v-if="isLoading" class="loader" />
                <div class="user" v-for="(user, i) in users" :id="user.id">
                    <p class="data">{{ i + 1 }}</p>
                    <p class="data">{{ user.fullName }}</p>
                    <p class="data">{{ user.email }}</p>
                    <p class="data">{{ user.phone }}</p>
                    <p class="data">{{ user.occupation }}</p>
                    <p class="data">{{ user.city }}, {{ user.country }}</p>
                    <!-- <div class="btn btn-warning" @click="autofillUserId(user.id)">
                        Charge
                    </div> -->
                </div>
                <h5 v-if="users == null || users == ''" style="text-align: center; color: black;">No users</h5>
            </div>
        </div>

        <div class="main payment" v-if="currentTab == 'Create payment'">
            <h1>Create Payment</h1>
            <div class="input_group">
                <div v-if="isUpdatingPayment">
                    <label>Booking Number</label>
                    <input type="text" readonly id="payment_tab_booking_number">
                </div>
                <div>
                    <label>Amount &#8380;</label>
                    <input type="text" placeholder="Amount" v-model="paymentTab.amount">
                </div>
                <div>
                    <div>
                        <label>Description</label>
                        <div class="null_btn" @click="paymentTab.description = 'N/A'">
                            <p>N/A</p>
                        </div>
                    </div>
                    <input type="text" placeholder="Description" v-model="paymentTab.description">
                </div>
            </div>
            <div id="status_box" v-if="statusMsg.length > 0">
                <p>{{ statusMsg }}</p>
            </div>
            <div class="link_box" v-if="paymentLink.length > 0">
                <img src="@/assets/img/copy_icon.png" alt="Copy icon">
                <p>{{ paymentLink }}</p>
            </div>
            <div class="btn btn-warning" @click="createPayment()">
                Create
            </div>

        </div>
        <div class="main users visits" v-if="currentTab == 'Website Visits'">
            <h1>Website Visits</h1>
            <div class="users_container">
                <Loader v-if="isLoading" class="loader" />
                <div class="user" v-for="(visit, i) in visits" :id="visit.id">
                    <p class="data">{{ formatCreatedDate(visit.created_date) }}</p>
                    <p class="data">{{ transformToTitleCase(visit.page) }}</p>
                    <p class="data">{{ visit.device }}</p>
                    <p class="data">{{ visit.city }}, {{ visit.country }}</p>
                    <p class="data">{{ visit.ip }}</p>
                </div>
                <h5 v-if="users == null || users == ''" style="text-align: center; color: black;">No Visits</h5>
            </div>

        </div>
    </div>
</template>

<script>
import CarService from '../../services/CarService';
import BookingService from '../../services/BookingService';
import ContactUsService from '../../services/ContactUsService';
import UserService from '../../services/UserService';
import VisitService from '../../services/VisitService';
import SubscriberService from '../../services/SubscriberService';


export default {
    data() {
        return {
            currentTab: "Dashboard",
            isLoading: false,
            car: {
                carName: "",
                type: "",
                description: "",
                specification1: "",
                specification2: "",
                day1Rate: "",
                days3Rate: "",
                days5Rate: "",
                week1Rate: "",
                maxPassengers: "",
                maxSuitcases: "",
                maxLuggages: "",
            },
            statusMsg: "",
            cars: null,
            bookings: null,
            messages: null,
            users: null,
            isUpdatingPayment: false,
            paymentTab: {
                amount: 0,
                description: '',
                user_id: '',
                id: '',
                status: 'Awaiting',
            },
            paymentLink: "",
            visits: null,
            totalRevenue: "Loading",
            estimatedRevenue: "Loading",
            subscribers: null,
        }
    },
    mounted() {
        if (!localStorage.getItem('adminLoggedIn')) {
            this.$router.push('./login');
        }

        if (this.bookings == null) {
            this.getBookings();
        }
        if (this.users == null) {
            this.getUsers();
        }
        if (this.cars == null) {
            this.getCars();
        }
        if (this.visits == null) {
            this.getVisits();
        }
        if (this.subscribers == null) {
            this.getSubscribers();
        }

    },
    methods: {
        switchTab(page) {
            if (this.isUpdatingPayment) {
                this.isUpdatingPayment = false;
            }
            document.querySelectorAll("div.page").forEach(e => {
                e.classList.remove("selected");
                if (e.querySelector("p").innerText.toLowerCase() == page.toLowerCase()) {
                    e.classList.add("selected");
                }
            });

            switch (page) {
                case "dashboard":
                    this.currentTab = "Dashboard";
                    break;
                case "add car":
                    this.currentTab = "Add Car";
                    break;
                case "messages":
                    this.currentTab = "Messages";
                    if (this.messages == null) {
                        this.getMessages();
                    }
                    break;
                case "car park":
                    this.currentTab = "Cars";
                    break;
                case "orders":
                    if (this.bookings == null) {
                        this.getBookings();
                    }
                    this.currentTab = "Orders";
                    break;
                case "users":
                    this.currentTab = "Users";
                    break;
                case "create payment":
                    this.currentTab = "Create payment";
                    break;
                case "website visits":
                    this.currentTab = "Website Visits";
                    break;
                case "newsletter subscribers":
                    this.currentTab = "Newsletter Subscribers";
                    break;

            }
        },

        async addCar(event) {
            let statusBox = document.getElementById("status-box");
            let formData = new FormData();

            for (const property in this.car) {
                formData.append(property, this.car[property]);
            }

            const appendImageToFormData = (imageFieldName) => {
                const fileInput = document.getElementById(`${imageFieldName}File`);
                const file = fileInput?.files[0];
                if (file) {
                    formData.append(imageFieldName, file);
                }
            };

            appendImageToFormData("mainImage");
            appendImageToFormData("carImage");
            appendImageToFormData("image1");
            appendImageToFormData("image2");
            appendImageToFormData("image3");
            appendImageToFormData("image4");
            appendImageToFormData("image5");

            CarService.addCar(formData).then(res => {
                if (res.status == 200) {
                    event.target.classList.add("disabled");
                    statusBox.style.opacity = 1;
                    statusBox.classList.add("success");
                    this.statusMsg = this.car.carName + "Car was successfully added";
                } else {
                    statusBox.style.opacity = 1;
                    statusBox.classList.remove("success");
                    this.statusMsg = res.data;
                }
            })
        },
        // 
        async updateCar(id, carId) {
            let carContainer = document.getElementById(id);
            let statusBox = carContainer.querySelector("#status-box");
            let formData = new FormData();

            formData.append("carName", this.cars[id].name);
            formData.append("type", this.cars[id].type);
            formData.append("description", this.cars[id].description);
            formData.append("specification1", this.cars[id].specification_1);
            formData.append("specification2", this.cars[id].specification_2);
            formData.append("hourRate", this.cars[id].hour_rate);
            formData.append("kmRate", this.cars[id].km_rate);
            formData.append("dayRate", this.cars[id].day_rate);
            formData.append("maxPassengers", this.cars[id].max_passengers);
            formData.append("maxSuitcases", this.cars[id].max_suitcases);
            formData.append("maxLuggages", this.cars[id].max_luggages);


            const appendImageToFormData = (imageFieldName) => {
                const fileInput = carContainer.querySelector(`#${imageFieldName}File`);
                const file = fileInput?.files[0];
                if (file) {
                    formData.append(imageFieldName, file);
                }
            };

            appendImageToFormData("carImage");
            appendImageToFormData("image1");
            appendImageToFormData("image2");
            appendImageToFormData("image3");
            appendImageToFormData("image4");
            appendImageToFormData("image5");

            CarService.updateCar(formData, carId).then(res => {
                if (res.status == 200) {
                    document.location.reload();
                } else {
                    statusBox.style.opacity = 1;
                    statusBox.classList.remove("success");
                    this.statusMsg = res.data;
                }
            })
        },
        expandMessage(el) {
            let messageContainer = document.getElementById(el);
            if (messageContainer.classList.contains("expanded")) {
                messageContainer.classList.remove("expanded");
            } else {
                messageContainer.classList.add("expanded");
            }
        },
        expandBooking(el) {
            let orderContainer = document.getElementById(el);
            if (orderContainer.classList.contains("expanded")) {
                orderContainer.classList.remove("expanded");
            } else {
                orderContainer.classList.add("expanded");
            }
        },
        isExpanded(el) {
            let messageContainer = document.getElementById(el);
            console.log(messageContainer);
            // return messageContainer.classList.contains("expanded");
        },
        expandCarContainer(id) {

            let carContainer = document.getElementById(id);
            if (carContainer.classList.contains("expanded")) {
                carContainer.classList.remove("expanded");
            } else {
                carContainer.classList.add("expanded");
            }
        },
        getCars() {
            this.isLoading = true;
            CarService.getAll().then(res => {
                if (res.status == 200) {
                    this.isLoading = false;
                    this.cars = res.data;
                } else {
                }
            })
        },
        getSubscribers() {
            this.isLoading = true;
            SubscriberService.getAllSubscribers().then(res => {
                if (res.status == 200) {
                    this.isLoading = false;
                    this.subscribers = res.data;
                } else {
                }
            })
        },
        getBookings() {
            this.isLoading = true;
            BookingService.getAllBookings().then(res => {
                if (res.status == 200) {
                    this.isLoading = false;
                    this.bookings = res.data;
                    this.calculateTotalRevenue();
                    this.calculateEstimatedRevenue();
                } else {
                    this.bookings = "";
                }
            });
        },
        getUsers() {
            this.isLoading = true;
            UserService.getAll().then(res => {
                if (res.status == 200) {
                    this.isLoading = false;
                    this.users = res.data;
                } else {
                    this.bookings = "";
                }
            });
        },
        getMessages() {
            this.isLoading = true;
            ContactUsService.getAllMessages().then(res => {
                if (res.status == 200) {
                    this.isLoading = false;
                    this.messages = res.data;
                } else {
                    this.messages = "";
                }
            });
        },
        getVisits() {
            this.isLoading = true;
            VisitService.getVisits().then(res => {
                if (res.status == 200) {
                    this.isLoading = false;
                    this.visits = res.data;
                } else {
                    this.visits = "";
                }
            });
        },
        logout() {
            localStorage.removeItem('adminLoggedIn');
            this.$router.push("./login");
        },
        autofillBookingId(paymentId, orderNumber, amount) {
            this.switchTab("create payment");
            this.isUpdatingPayment = true;
            this.paymentTab.id = paymentId;
            this.paymentTab.amount = amount;
            setTimeout(function () {
                document.getElementById("payment_tab_booking_number").value = orderNumber;
            }, 200);
        },
        autofillUserId(id) {
            this.switchTab("create payment");
            this.paymentTab.user_id = id;
        },
        createPayment() {
            if (this.paymentTab.amount <= 0) {
                this.statusMsg = "Amount should be more than zero";
                return;
            }
            if (this.paymentTab.user_id == '' || this.paymentTab.user_id == 'N/A')
                this.paymentTab.user_id = null;
            if (this.paymentTab.description == '' || this.paymentTab.description == 'N/A')
                this.paymentTab.description = null;

            if (this.isUpdatingPayment) {
                BookingService.updatePayment(this.paymentTab.id, this.paymentTab).then(res => {
                    if (res.status == 200) {
                        this.statusMsg = `Payment request for specific booking was created successfully.`;
                        this.paymentLink = `http://127.0.0.1:5173/my-account?paymentCode=${res.data}`;
                        setTimeout(function () {
                            this.statusMsg = '';
                        }, 4000);
                    } else {
                        this.statusMsg = res.data;
                    }
                });
            } else {
                BookingService.createPayment(this.paymentTab).then(res => {
                    if (res.status == 200) {
                        this.statusMsg = `Payment request was created successfully.`;
                        this.paymentLink = `http://127.0.0.1:5173/my-account?paymentCode=${res.data}`;
                        setTimeout(function () {
                            this.statusMsg = '';
                        }, 4000);
                    } else {
                        this.statusMsg = res.data;
                    }
                });
            }
        },
        formatCreatedDate(createdDate) {
            const now = new Date();
            const visitDate = new Date(createdDate);

            // Check if it's today
            if (now.toDateString() === visitDate.toDateString()) {
                return `Today at ${visitDate.toLocaleTimeString()}`;
            }

            // Check if it's yesterday
            const yesterday = new Date(now);
            yesterday.setDate(now.getDate() - 1);
            if (yesterday.toDateString() === visitDate.toDateString()) {
                return `Yesterday at ${visitDate.toLocaleTimeString()}`;
            }

            // If it's not today or yesterday, return the original date
            return createdDate;
        },
        transformToTitleCase(inputString) {
            return inputString
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
        },
        calculateTotalRevenue() {
            let totalPaidAmount = 0;

            this.bookings.forEach(booking => {
                if (booking.status === 'Paid') {
                    totalPaidAmount += booking.amount;
                }
            });

            this.totalRevenue = totalPaidAmount;
        },
        calculateEstimatedRevenue() {
            let estimatedAmount = 0;

            this.bookings.forEach(booking => {
                if (booking.status != 'Paid') {
                    estimatedAmount += booking.amount;
                }
            });

            this.estimatedRevenue = estimatedAmount;
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    min-height: 100vh;
    height: 100%;

    .side_nav {
        width: 20%;
        background-color: white;
        -webkit-box-shadow: 3px 0px 11px -3px rgba(148, 148, 148, 1);
        -moz-box-shadow: 3px 0px 11px -3px rgba(148, 148, 148, 1);
        box-shadow: 3px 0px 11px -3px rgba(148, 148, 148, 1);
        padding: 2rem 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: 100vh;

        .logo {
            width: 80%;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 1rem;
        }

        .page {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            padding: 5px;
            border-radius: 5px;

            &.logout {
                margin-top: auto;

                p {
                    color: rgb(187, 1, 1);
                    font-weight: 600;
                }
            }

            p {
                font-family: "Inter", sans-serif;
                color: rgb(74, 74, 74);
                margin: 0;
            }

            &:hover {
                -webkit-box-shadow: 1px 0px 11px -3px rgba(148, 148, 148, 1);
                -moz-box-shadow: 1px 0px 11px -3px rgba(148, 148, 148, 1);
                box-shadow: 1px 0px 11px -3px rgba(148, 148, 148, 1);
            }

            &.selected {
                background-color: rgba(218, 165, 32, 0.859);
            }
        }
    }

    .main {
        background-color: #f5f5f9;
        width: 80%;
        display: flex;
        flex-direction: column;
        gap: 3rem;
        padding: 2rem;
        overflow-x: scroll;
        height: 100vh;

        h1 {
            color: black;
        }

        &.new_car {
            align-items: center;

            h1 {
                color: black;
            }

            .inputs {
                width: 80%;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                gap: 1rem;

                .input_group {
                    min-width: 49%;
                    display: flex;
                    flex-direction: column;
                    color: black;
                    font-family: "Inter", sans-serif;
                    font-size: 0.9rem;

                    input,
                    select,
                    textarea {
                        padding: 5px 10px;
                        font-size: 0.9rem;
                        border-radius: 5px;
                        border: 1px solid #d6d6d6;
                        outline: none;

                        &:focus {
                            border: 1px solid goldpenrod;
                            box-shadow: 1px 0px 11px -3px goldenrod;
                        }
                    }

                    textarea {
                        resize: none;
                        height: 8rem;
                    }

                    input[type="file"] {
                        cursor: pointer;

                        &:hover {
                            border: 1px solid goldpenrod;
                            box-shadow: 1px 0px 11px -3px goldenrod;
                        }
                    }

                    input[type="file"]::-webkit-file-upload-button {
                        visibility: hidden;
                    }

                    input[type="file"]::before {
                        content: 'Upload image';
                        display: inline-block;
                        background: linear-gradient(top, #f9f9f9, #e3e3e3);
                        outline: none;
                        white-space: nowrap;
                        -webkit-user-select: none;
                        user-select: none;
                        cursor: pointer;
                        text-shadow: 1px 1px #fff;
                        font-weight: 500;
                    }

                    input[type="file"]:hover::before {
                        border-color: black;
                    }

                    input[type="file"]:active {
                        background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
                    }
                }
            }

            .submit_btn_wrapper {
                width: 100%;
                font-family: "Inter", sans-serif;
                display: flex;
                width: 80%;

                .btn {
                    padding: 5px 50px;
                    font-weight: 500;

                    &.disabled {
                        opacity: 0.5;
                        cursor: default;
                    }
                }
            }
        }
    }

    .quick_action {
        width: 100%;
        height: fit-content;
        font-family: "Inter", sans-serif;

        p {
            color: black;
            font-weight: 600;
            margin-bottom: 0.2rem;
        }

        .btns {
            display: flex;
        }
    }

    .card-container {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .card {
        min-width: 25%;
        flex: 1;
        height: fit-content;
        padding: 1rem;
        -webkit-box-shadow: 2px 0px 11px -3px rgba(148, 148, 148, 0.5);
        -moz-box-shadow: 2px 0px 11px -3px rgba(148, 148, 148, 0.5);
        box-shadow: 2px 0px 11px -3px rgba(148, 148, 148, 0.5);

        .data-container {
            width: 100%;
            display: flex;
            align-items: center;

            .data {
                width: 80%;

                p {
                    font-family: "Inter", sans-serif;
                    color: black;
                    margin-bottom: 0;
                    font-weight: 600;
                    font-size: 1rem;
                }

            }

            .icon {
                width: 30px;
                margin-left: auto;

                img {
                    width: 100%;
                }
            }
        }

    }

}

#status-box {
    display: flex;
    justify-content: center;
    background: #a00b0b;
    border-radius: 0;
    width: 80%;
    padding: 10px;
    opacity: 0;
    margin-bottom: -2rem;
    margin-top: -2rem;

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

    &.success {
        background: #097d15;
    }
}

#status_box {
    display: flex;
    justify-content: center;
    background: #000000;
    border-radius: 5px;
    width: 49%;
    padding: 10px;
    margin-bottom: -2rem;
    margin-top: -2rem;

    p {
        color: #ffffff;
        font-family: "Inter";
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin: 0;
        margin-left: auto;
        margin-right: auto;
    }
}

.main.messages {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;

    h1 {
        color: black;
    }

    .messages_container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;

        .message {
            width: 100%;
            display: flex;
            padding: 1rem;
            border-radius: 8px;
            -webkit-box-shadow: 3px 0px 11px -3px rgba(148, 148, 148, 0.743);
            -moz-box-shadow: 3px 0px 11px -3px rgba(148, 148, 148, 0.743);
            box-shadow: 3px 0px 11px -3px rgba(148, 148, 148, 0.743);
            cursor: pointer;
            overflow: hidden;

            &:hover {
                -webkit-box-shadow: 3px 0px 11px -3px rgba(70, 70, 70, 0.743);
                -moz-box-shadow: 3px 0px 11px -3px rgba(70, 70, 70, 0.743);
                box-shadow: 3px 0px 11px -3px rgba(70, 70, 70, 0.743);
            }

            p {
                margin: 0;
                color: black;
                font-family: "Inter", sans-serif;
            }

            .name {
                font-weight: 500;
            }

            .email {
                display: none;
            }


            .date {
                margin-left: auto;
            }

            .content {
                margin-left: 5%;
                max-width: 60%;
                text-overflow: ellipsis;
                /* enables ellipsis */
                white-space: nowrap;
                /* keeps the text in a single line */
                overflow: hidden;
                /* keeps the element from overflowing its parent */
            }

            &.expanded {
                .content {
                    white-space: normal;
                }

                .email {
                    display: block;
                }
            }
        }
    }
}

.main.cars {
    flex-direction: column;
    align-items: center;
    width: 80%;

    .cars_container {
        display: flex;
        gap: 2rem;
        flex-wrap: wrap;
        width: 100%;
    }

    .car_container {
        display: flex;
        align-items: center;
        padding: 1rem;
        border-radius: 8px;
        -webkit-box-shadow: 3px 0px 11px -3px rgba(148, 148, 148, 0.743);
        -moz-box-shadow: 3px 0px 11px -3px rgba(148, 148, 148, 0.743);
        box-shadow: 3px 0px 11px -3px rgba(148, 148, 148, 0.743);
        cursor: pointer;
        width: 40%;
        gap: 1rem;
        position: relative;

        .expand_icon {
            position: absolute;
            top: 5px;
            right: 5px;
            width: 1.5rem;
            z-index: 100;
            height: auto;
            transition: 0.3s;

            &:hover {
                transform: scale(1.2);
            }
        }

        .preview_data {
            display: block;
        }

        img {
            width: 40%;
        }

        p {
            margin: 0;
            color: black;
            font-family: "Inter", sans-serif;
            font-weight: 500;
        }

        .edit_data {
            display: none;
        }

        &.expanded {
            width: 100%;

            .edit_data {
                display: flex;
                flex-direction: column;
                gap: 3rem;
            }

            .preview_data {
                display: none;
            }

            .inputs {
                width: 100%;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                gap: 1rem;

                .input_group {
                    width: 49%;
                    display: flex;
                    flex-direction: column;
                    color: black;
                    font-family: "Inter", sans-serif;
                    font-size: 0.9rem;

                    .preview_image {
                        width: 50%;
                    }

                    input,
                    textarea {
                        padding: 5px 10px;
                        font-size: 0.9rem;
                        border-radius: 5px;
                        border: 1px solid #d6d6d6;
                        outline: none;

                        &:focus {
                            border: 1px solid goldpenrod;
                            box-shadow: 1px 0px 11px -3px goldenrod;
                        }
                    }

                    textarea {
                        resize: none;
                        height: 8rem;
                    }

                    input[type="file"] {
                        cursor: pointer;

                        &:hover {
                            border: 1px solid goldpenrod;
                            box-shadow: 1px 0px 11px -3px goldenrod;
                        }
                    }

                    input[type="file"]::-webkit-file-upload-button {
                        visibility: hidden;
                    }

                    input[type="file"]::before {
                        content: 'Upload image';
                        display: inline-block;
                        background: linear-gradient(top, #f9f9f9, #e3e3e3);
                        outline: none;
                        white-space: nowrap;
                        -webkit-user-select: none;
                        user-select: none;
                        cursor: pointer;
                        text-shadow: 1px 1px #fff;
                        font-weight: 500;
                    }

                    input[type="file"]:hover::before {
                        border-color: black;
                    }

                    input[type="file"]:active {
                        background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
                    }
                }
            }

            .submit_btn_wrapper {
                width: 100%;
                font-family: "Inter", sans-serif;
                display: flex;
                width: 80%;

                .btn {
                    padding: 5px 50px;
                    font-weight: 500;

                    &.disabled {
                        opacity: 0.5;
                        cursor: default;
                    }
                }
            }

            #status-box {
                width: 100%;
            }
        }
    }


}

.main.orders {
    flex-direction: column;
    align-items: center;
    width: 80%;

    .table-responsive {
        width: 100%;
        overflow: scroll;

        tr {
            color: rgb(0, 0, 0);
            font-family: "Inter", sans-serif;
            white-space: nowrap;

            th {
                font-weight: 600;
            }
        }
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

    .messages_container {


        .message {


            p {
                margin: 0;
                color: black;
                font-family: "Inter", sans-serif;
            }

            .name {
                font-weight: 500;
            }

            .email {
                display: none;
            }


            .date {
                margin-left: auto;
            }

            .content {
                margin-left: 5%;
                max-width: 60%;
                text-overflow: ellipsis;
                /* enables ellipsis */
                white-space: nowrap;
                /* keeps the text in a single line */
                overflow: hidden;
                /* keeps the element from overflowing its parent */
            }

            &.expanded {
                .content {
                    white-space: normal;
                }

                .email {
                    display: block;
                }
            }
        }
    }
}

.main.users {
    flex-direction: column;
    align-items: center;
    width: 80%;

    .users_container {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 1rem;

        &.subscribers {
            .user {
                justify-content: flex-start;
                gap: 2rem;
            }
        }

        .user {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            padding: 2rem 1rem;
            border-radius: 8px;
            -webkit-box-shadow: 3px 0px 11px -3px rgba(148, 148, 148, 0.743);
            -moz-box-shadow: 3px 0px 11px -3px rgba(148, 148, 148, 0.743);
            box-shadow: 3px 0px 11px -3px rgba(148, 148, 148, 0.743);
            overflow: hidden;
            transition: all 1.5s;

            .btn {
                font-family: "Inter", sans-serif;
                font-weight: 500;
                text-transform: uppercase;
                font-size: 0.8rem;

                &:hover {
                    filter: contrast(0.8);
                }
            }



            .data {
                font-weight: 500;
                margin: 0;
                color: black;
                font-family: "Inter", sans-serif;
                line-height: 0;
            }

        }
    }
}

.main.payment {
    flex-direction: column;
    align-items: center;
    width: 80%;

    .input_group {
        min-width: 49%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        color: black;
        font-family: "Inter", sans-serif;
        font-size: 0.9rem;

        div {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            label {
                padding-left: 2px;
            }

            div {
                display: flex;
                flex-direction: row;

                .null_btn {
                    background-color: rgb(116, 116, 116);
                    cursor: pointer;
                    padding: 0 5px;
                    border-radius: 5px;

                    p {
                        color: white;
                        margin-bottom: 0;
                    }

                    &:hover {
                        opacity: 0.8;
                    }
                }
            }
        }

        input,
        textarea {
            padding: 5px 10px;
            font-size: 0.9rem;
            border-radius: 5px;
            border: 1px solid #d6d6d6;
            outline: none;

            &:focus {
                border: 1px solid goldpenrod;
                box-shadow: 1px 0px 11px -3px goldenrod;
            }
        }
    }

    .btn {
        font-family: "Inter", sans-serif;
    }

    .link_box {
        padding: 5px 15px;
        border-radius: 5px;
        border: 1px solid #d6d6d6;
        display: flex;
        align-items: center;
        gap: 1rem;

        img {
            height: 1rem;
            width: auto;
        }

        p {
            margin: 0;
            color: black;
            font-size: 0.9rem;
            font-family: "Inter", sans-serif;
        }
    }
}

.loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>