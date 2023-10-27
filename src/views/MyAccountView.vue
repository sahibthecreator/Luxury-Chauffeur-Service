<script setup>
import SectionHeading from "../components/SectionHeading.vue"
import PrimaryButton from "../components/PrimaryButton.vue"
import SecondaryButton from "../components/SecondaryButton.vue"
import OrderHistoryTab from "../components/OrderHistoryTab.vue"
import PaymentTab from "../components/PaymentTab.vue"
</script>

<template>
    <section class="wrapper">
        <SectionHeading :text=sectionHeading class="section-heading" />


        <section class="content">
            <section class="side-nav">
                <div class="nav-item selected" @click="switchTab(0)" id="tab0">
                    <img src="@/assets/img/user-icon.webp" alt="User icon">
                    <p v-if="isEng()">My Account</p>
                    <p v-if="!isEng()">Şəxsi Kabinetim</p>
                </div>
                <div class="nav-item" @click="switchTab(1)" id="tab1">
                    <img src="@/assets/img/order-history-icon.webp" alt="Order history icon">
                    <p v-if="isEng()">Order History</p>
                    <p v-if="!isEng()">Rezervasiyalarım</p>
                </div>
                <div class="nav-item" @click="switchTab(2)" id="tab2">
                    <img src="@/assets/img/payment-icon.webp" alt="Payment icon">
                    <p v-if="isEng()">Payment</p>
                    <p v-if="!isEng()">Ödəniş</p>
                </div>
                <div class="logout-btn" @click="UserService.logout">
                    <p v-if="isEng()">Logout</p>
                    <p v-if="!isEng()">Çıxış</p>
                    <img src="@/assets/img/logout-icon.png" alt="Logout icon">
                </div>

            </section>
            <section class="personal-info-tab" v-if="currentTab == 0">
                <div class="info-preview">
                    <div class="profile-img">
                        <p>{{ user.fullName[0] }}</p>
                    </div>
                    <div class="info">
                        <p class="name">{{ user.fullName }}</p>
                        <p class="email">{{ user.email }}</p>
                    </div>
                </div>



                <h3>Personal</h3>
                <hr>

                <div class="data-input">
                    <label v-if="isEng()">Full name</label>
                    <label v-if="!isEng()">Ad ve Soyad</label>
                    <input type="text" v-model="fullName" @input="dataEdited">
                </div>
                <div class="data-input">
                    <label v-if="isEng()">Email</label>
                    <label v-if="!isEng()">Email ünvanı</label>
                    <input type="email" v-model="email" @input="dataEdited">
                </div>
                <div class="data-input">
                    <label v-if="isEng()">Phone</label>
                    <label v-if="!isEng()">Telefon nömrəniz</label>
                    <input type="text" v-model="phone" @input="dataEdited">
                </div>
                <div class="data-input">
                    <label v-if="isEng()">Occupation</label>
                    <label v-if="!isEng()">Peşə</label>
                    <input type="text" v-model="occupation" @input="dataEdited">
                </div>

                <div id="status-box">
                    <p>{{ statusMsg }}</p>
                </div>

                <SecondaryButton text="Save" class="save-btn disabled" @click="update" v-if="isEng()" />
                <SecondaryButton text="Yadda saxla" class="save-btn disabled" @click="update" v-if="!isEng()" />
            </section>

            <OrderHistoryTab v-if="currentTab == 1" />
            <PaymentTab v-if="currentTab == 2" />

        </section>
    </section>
</template>

<script>
import UserService from '../services/UserService';
import BookingService from '../services/BookingService';

export default {
    data() {
        return {
            userId: null,
            user: {
                fullName: 'loading',
                email: 'loading',
            },
            currentTab: 0,
            sectionHeading: this.isEng() ? "My Account" : "Şəxsi Kabinetim",
            fullName: "loading",
            email: "loading",
            phone: "loading",
            occupation: "loading",
            statusMsg: "",
            bookings: null,
            paymentCode: "",
        }
    },
    mounted() {
        if (localStorage.getItem('id') == null) {
            this.$router.push('/authentication');
        } else {
            this.userId = localStorage.getItem('id')
        }
        this.getUser();
        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );
        if (this.$route.query.paymentCode || clientSecret) {
            this.switchTab(2)
        }
    },
    methods: {
        dataEdited() {
            document.getElementsByClassName("save-btn")[0].classList.remove("disabled");
        },
        switchTab(page) {
            document.getElementById("tab0").classList.remove("selected");
            document.getElementById("tab1").classList.remove("selected");
            document.getElementById("tab2").classList.remove("selected");

            switch (page) {
                case 0:
                    this.currentTab = 0;
                    this.sectionHeading = this.isEng() ? "My Account" : "Şəxsi Kabinetim";
                    document.getElementById("tab0").classList.add("selected");
                    break;
                case 1:
                    if (this.bookings == null) {
                        //this.getBookings();
                    }
                    this.currentTab = 1;
                    this.sectionHeading = this.isEng() ? "Order History" : "Rezervasiyalarım";
                    document.getElementById("tab1").classList.add("selected");
                    break;
                case 2:
                    this.currentTab = 2;
                    this.sectionHeading = this.isEng() ? "Payment" : "Ödəniş";
                    document.getElementById("tab2").classList.add("selected");
                    break;
            }
        },
        getUser() {
            UserService.getById(this.userId).then(res => {
                if (res.status == 200) {
                    console.log(res.data);
                    this.user = res.data;
                    this.fullName = this.user.fullName;
                    this.email = this.user.email;
                    this.phone = this.user.phone;
                    this.occupation = this.user.occupation;
                } else {
                    //TODO: ERROR message
                }
            })
        },
        update() {
            if (document.getElementsByClassName("save-btn")[0].classList.contains("disabled"))
                return;

            let statusBox = document.getElementById("status-box");
            if (!this.fullName.length > 0 || !this.email.length > 0 || !this.phone.length > 0 || !this.occupation.length > 0) {
                statusBox.style.opacity = 1;
                statusBox.classList.remove("success");
                this.statusMsg = "Fields cannot be empty";
                return;
            }

            let user = {
                "fullName": this.fullName,
                "email": this.email,
                "phone": this.phone,
                "occupation": this.occupation,
            }

            UserService.update(this.userId, user).then(res => {
                statusBox.style.opacity = 1;
                if (res.status == 200) {
                    statusBox.classList.add("success");
                    this.statusMsg = "Details updated successfully";
                } else {
                    statusBox.classList.remove("success");
                    this.statusMsg = res.data;
                }
            })
        },
        getBookings() {
            BookingService.getBookingByUserId(this.userId).then(res => {
                if (res.status == 200) {
                    this.bookings = res.data;
                } else {
                    this.bookings = "";
                }
            });
        },
        isEng() {
            return localStorage.getItem('lang') == 'en';
        },
    },

}
</script>

<style lang="scss" scoped>
.wrapper {
    padding: 3rem 45px;

}

.content {
    display: flex;
    gap: 5%;
    margin-top: 3%;
}

.side-nav {
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    gap: 1rem;

    .nav-item {
        display: flex;
        gap: 0.8rem;
        cursor: pointer;
        border-bottom: 1px solid transparent;
        border-radius: 4px;

        img {
            width: 18px;
            height: fit-content;
        }

        p {
            color: #FFF;
            font-family: "Inter";
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            letter-spacing: 0.28px;
            margin-bottom: 5px;
        }

        &.selected {
            border-bottom: 1px solid #B08500;
        }
    }
}

.personal-info-tab {
    width: 70%;

    .info-preview {
        display: flex;
        gap: 1rem;
        align-items: center;

        .profile-img {
            display: flex;
            background-color: aqua;
            border-radius: 50%;
            height: 60px;
            width: 60px;

            p {
                margin: auto;
                color: black;
                font-size: 1.6rem;
                font-weight: 600;
                font-family: "Inter", sans-serif;
            }
        }

        .info {
            display: flex;
            flex-direction: column;
            gap: 5%;

            p {
                margin: 0;
                font-family: "Inter", sans-serif;
                color: white;
                white-space: nowrap;
            }

            .name {
                font-size: 1.3rem;
                font-weight: 500;
                text-transform: capitalize;
            }

            .email {
                opacity: 0.7;
                font-size: 0.8rem;
            }
        }
    }

    h3 {
        margin-top: 2rem;
        font-size: 1.2rem;
    }

    hr {
        margin-top: 0;
    }

    .data-input {
        display: flex;
        flex-direction: column;
        gap: 5px;

        label {
            font-family: "Inter", sans-serif;
            font-size: 0.8rem;
        }

        input {
            outline: none;
            font-family: "Inter", sans-serif;
            border-radius: 0;
            background-color: transparent;
            border: 1px solid #B08500;
            color: white;
            padding: 5px;
            font-size: 0.8rem;
            border-radius: 5px;

            &:focus {
                outline: 1px solid #B08500;
            }
        }

        margin-bottom: 1rem;
    }

    .save-btn {
        margin-top: 2rem;
        border-radius: 5px;
    }
}

.logout-btn {
    margin-top: 1rem;
    padding: 5px 20px;
    border-radius: 5px;
    background-color: transparent;
    border: 1px solid #b00000;
    font-family: "Inter", sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    img {
        width: 1rem;
    }

    p {
        color: white;
        margin: 0;
    }

    &:hover {
        background-color: #b00000 !important;
    }
}

#status-box {
    display: flex;
    justify-content: center;
    background: #a00b0b;
    border-radius: 0;
    width: 40%;
    padding: 10px;
    margin-top: 1rem;
    opacity: 0;

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

@media only screen and (max-width: 1024px) {
    .wrapper {
        padding: 1rem 15px;
    }

    .section-heading {
        margin-top: 1rem;
    }

    .side-nav {
        width: 10%;
        align-items: center;

        .nav-item {
            border-radius: 1px;
            padding-bottom: 0.2rem;
            width: min-content;

            p {
                display: none;
            }
        }

        .logout-btn {
            padding: 5px 0;
            justify-content: center;
            width: 100%;

            img {
                width: 16px;
            }

            p {
                display: none;
            }
        }
    }

    .personal-info-tab {
        width: 100%;
    }

    .payment-tab {
        width: 100%;
    }

    
}
</style>