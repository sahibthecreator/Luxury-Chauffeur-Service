<script setup>
import PrimaryButton from '../components/PrimaryButton.vue';
import SectionHeading from '../components/SectionHeading.vue';
</script>

<template>
    <div class="airport-page">

        <section class="main-image-wrapper">
            <img src="@/assets/img/car-rent-main.webp" alt="Airport luxury meet & greet">
            <h1 class="hidden" v-if="isEng()">ELITE CAR HIRE</h1>
            <h1 class="hidden" v-if="!isEng()">ELİT MAŞIN İCARƏSİ</h1>
            <h2 class="hidden delay-1" v-if="isEng()">Luxury vehicles hire in Baku</h2>
            <h2 class="hidden delay-1" v-if="!isEng()">Bakıda lüks avtomobillərin icarəsi</h2>
        </section>

        <section class="introduction">
            <img class="hidden slideRight" src="@/assets/img/car-rent-1.webp" alt="Luxury driver opens a door">

            <article class="hidden slideLeft">
                <h1 v-if="isEng()">Hire a luxury car</h1>
                <h1 v-if="!isEng()">Lüks avtomobil icarəyə götürün</h1>
                <span class="gold-line"></span>
                <p v-if="isEng()">
                    Hire your dream car from Lord Concierge.. We provide the most premium and upscale chauffeur and luxury
                    car hire services in all of Baku. You will only receive the best when you choose to rent a car from Lord
                    Concierge because of our range of supercars and unmatched customer service.
                    <br><br>
                    With the most potent and cutting-edge cars available to you at affordable prices and a fleet of
                    privately owned cars that is always expanding, you will enjoy a luxury vehicle experience unlike any
                    other.
                </p>
                <p v-if="!isEng()">
                    Xəyal etdiyiniz avtomobili Lord Concierge-dən icarəyə götürün. Biz ən premium və yüksək səviyyəli sürücü
                    və lüks təqdim edirik.
                    bütün Bakı üzrə avtomobil kirayəsi xidmətləri. Siz yalnız Lorddan bir avtomobil icarəyə götürməyi
                    seçdiyiniz zaman ən yaxşısını alacaqsınız
                    Superkarlarımız və bənzərsiz müştəri xidməti sayəsində konsyerj.
                    <br><br>
                    Sizə sərfəli qiymətlərlə ən güclü və qabaqcıl avtomobillər və avtomobil parkı ilə
                    Daim genişlənən özəl avtomobillər, heç birindən fərqli olaraq lüks bir avtomobil təcrübəsindən zövq
                    alacaqsınız
                    başqa.
                </p>
                <PrimaryButton text="BOOK NOW" class="btn" @click="bookNow()" v-if="isEng()" />
                <PrimaryButton text="REZERV ED" class="btn" @click="bookNow()" v-if="!isEng()" />

            </article>
        </section>

        <SectionHeading text="our luxury car park" v-if="isEng()" />
        <SectionHeading text="premium avtoparkımız" v-if="!isEng()" />
        <section class="cars-container ">
            <div class="row">
                <div class="car" v-for="(car, i) in cars">
                    <div class="image-wrapper">
                        <img :src="'/../api/public/car_images/' + car.car_image + '?s'" :alt="car.name">
                        <h3>{{ car.name }}</h3>
                        <div class="details">
                            <div class="price">
                                <p v-if="isEng()">Daily rent</p>
                                <p v-if="!isEng()">Gündəlik icarə</p>
                                <p v-if="car">&#8380;{{ car['1_day_rate'] }}</p>
                            </div>
                            <div class="price">
                                <p v-if="isEng()">3 Days rent</p>
                                <p v-if="!isEng()">3 Günlük icarə</p>
                                <p v-if="car">&#8380;{{ car['3_days_rate'] }}</p>
                            </div>
                            <div class="price">
                                <p v-if="isEng()">5 Days rent</p>
                                <p v-if="!isEng()">5 Günlük icarə</p>
                                <p v-if="car">&#8380;{{ car['5_days_rate'] }}</p>
                            </div>
                            <div class="price">
                                <p v-if="isEng()">1 Week rent</p>
                                <p v-if="!isEng()">1 həftəlik icarə</p>
                                <p v-if="car">&#8380;{{ car['1_week_rate'] }}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>


    </div>
</template>

<script>
import CarService from '../services/CarService';

export default {
    data() {
        return {
            cars: null,
        }
    },
    mounted() {
        this.getCars();

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        });

        const hidenElements = document.querySelectorAll(".hidden");
        hidenElements.forEach((el) => observer.observe(el));
    },
    methods: {
        getCars() {
            CarService.getAll().then(res => {
                if (res.status == 200) {
                    this.cars = res.data;
                } else {
                }
            })
        },
        bookNow() {
            this.$router.push("book-now");
        },
        isEng() {
            return localStorage.getItem('lang') == 'en';
        },
    }
}
</script>

<style lang="scss" scoped>
.airport-page {
    padding-top: 7rem;
}

.main-image-wrapper {
    width: 100%;
    position: relative;

    img {
        width: 100%;
        height: auto;
        filter: brightness(0.4);
    }

    h1 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #FFF;
    }

    h2 {
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #FFF;
    }
}

.introduction {
    padding: 0 45px;
    margin-top: 5rem;
    display: flex;
    justify-content: space-between;

    article {
        width: 45%;
        color: #FFF;
        display: flex;
        flex-direction: column;

        h1 {
            margin-bottom: 0;
            font-size: 1.8rem;
            text-transform: uppercase;
        }

        p {
            font-family: "Inter", sans-serif;
            font-size: 0.9rem;
            font-style: normal;
            font-weight: 400;
            line-height: 180.5%;
            letter-spacing: 0.7px;
        }

        .btn {
            margin-top: auto;
        }
    }

    img {
        width: 50%;
    }

    .gold-line {
        display: block;
        background: #B08500;
        width: 8rem;
        height: 2px;
        margin-bottom: 2rem;
    }
}

.cars-container {
    .row {
        width: 100%;
        background: #141414;
        padding: 0 120px 90px 120px;
        display: flex;
        justify-content: center;
        margin: 0;

        &:nth-child(2n) {
            background: #232323;
        }
    }

    .car {
        cursor: pointer;
        width: 50%;
        padding: 0;
        margin-top: 60px;
        cursor: default;

        .image-wrapper {
            height: 280px;
            position: relative;
            overflow: hidden;

            &:hover {
                img {
                    filter: brightness(0.3);
                }
            }

            img {
                position: relative;
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
                filter: brightness(0.5);
            }

            h3 {
                position: absolute;
                bottom: 0;
                left: 1.4rem;
                color: #FFF;
                font-size: 1.5rem;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }

            .details {
                position: absolute;
                bottom: 0.5rem;
                right: 1rem;

                .price {
                    display: flex;
                    justify-content: space-between;
                    gap: 1rem;

                    p {
                        margin-bottom: 0;
                        font-family: "Inter", sans-serif;
                        font-size: 0.8rem;
                        color: #ffffff;
                    }
                }
            }
        }
    }
}

@media only screen and (max-width: 1124px) {
    .airport-page {
        padding-top: 1rem;

        .main-image-wrapper {
            text-align: center;

            img {
                object-fit: cover;
                height: 390px;
                width: auto;
            }

            h1 {
                font-size: 1.8rem;
                width: 60%;
            }

            h2 {
                margin-top: 1rem;
                font-size: 1.2rem;
            }

        }


        .introduction {
            flex-direction: column;
            padding: 0 15px;
            gap: 1rem;
            margin-top: 2rem;

            img {
                width: 100%;
                order: 1;
            }

            article {
                width: 100%;
                order: 2;
            }

            .btns {
                flex-direction: column;
                gap: 1rem;

                .btn {
                    width: 100%;
                }
            }
        }

        .cars-container {

            .row {
                padding: 0;
                margin: 0;
                flex-direction: column;
                align-items: center;

                .car {
                    width: 90%;
                    margin-bottom: 1rem;

                    .image-wrapper {
                        height: 50vw;
                        position: relative;
                        overflow: hidden;
                    }

                    h3 {
                        font-size: 1.2rem;
                    }
                }
            }
        }


    }

}
</style>