<script setup>
import SecondaryButton from '../components/SecondaryButton.vue';
import PrimaryButton from '../components/PrimaryButton.vue';
</script>
<template>
    <div class="car-page">

        <section class="main-image-wrapper">
            <img src="@/assets/img/mercedes-main-image.webp" alt="Main Image" v-if="carName.includes('Mercedes')">
            <img src="@/assets/img/bmw-main-image.webp" alt="Main Image" v-if="carName.includes('BMW')">
            <img src="@/assets/img/landrover-main-image.webp" alt="Main Image" v-if="carName.includes('Range')">
            <h1 class="hidden" ref="contactPanel">{{ carName }}</h1>
        </section>
        <section class="details">
            <div class="left-container hidden slideRight">
                <h3 v-if="isEng()">Iconic Executive Saloon Car</h3>
                <h3 v-if="!isEng()">Premium lüks Avtomobil</h3>
                <span class="gold-line"></span>
                <p>
                    {{ isEng() ? car?.description : car?.description_az }}
                </p>
            </div>
            <div class="right-container hidden slideLeft">

                <div class="pricing-container">
                    <div class="pricing">
                        <p>Our rates</p>
                        <div class="pricing-table">
                            <div class="price">
                                <p>Airport transfer &asymp;</p>
                                <p>&#8380;80 - 150</p>
                            </div>
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
                    <div class="gold-seperator"></div>
                    <div class="btn-container">
                        <SecondaryButton text="BOOK NOW" @click="bookNowBtn" v-if="isEng()"/>
                        <SecondaryButton text="REZERV ED" @click="bookNowBtn" v-if="!isEng()"/>
                    </div>
                </div>

            </div>
            <div class="triangle-image">
                <img src="@/assets/img/mercedes-detail1.webp" alt="Luxury car Interior" class="Luxury car Interior"
                    v-if="carName.includes('Mercedes')">
                <img src="@/assets/img/bmw-detail1.webp" alt="Luxury car Interior" class="Luxury car Interior"
                    v-if="carName.includes('BMW')">
                <img src="@/assets/img/landrover-detail1.webp" alt="Luxury car Interior" class="Luxury car Interior"
                    v-if="carName.includes('Range')">

                <img src="@/assets/img/mercedes-detail2.webp" alt="Luxury car Interior" class="Luxury car Interior"
                    v-if="carName.includes('Mercedes')">
                <img src="@/assets/img/bmw-detail2.webp" alt="Luxury car Interior" class="Luxury car Interior"
                    v-if="carName.includes('BMW')">
                <img src="@/assets/img/landrover-detail2.webp" alt="Luxury car Interior" class="Luxury car Interior"
                    v-if="carName.includes('Range')">
            </div>
        </section>

        <section class="info-container">
            <img :src="'/../api/public/car_images/' + car.car_image" alt="Lord Concierge Car Image"
                class="hidden slideRight">
            <div class="text-wrapper hidden">
                <p v-if="isEng()">
                    Here at Lord Concierge we specialise in luxury chauffeured cars in Baku, and our most popular asset is
                    the
                    Mercedes-Benz S-Class. That is why we offer the best executive cars Baku has to offer. Make
                    sure you check out our other vehicles for chauffeur services, such as Mercedes-Benz V-Class, Range Rover
                    Vogue,
                    BMW X5 and more.
                </p>
                <p v-if="!isEng()">
                    Lord Concierge Bakıda premium sürücü ile avtomobilləri üzrə ixtisaslaşmışıq və bizim ən populyar
                    aktivimiz
                    Mercedes-Benz S-Classdir. Buna görə də biz Bakının təklif etdiyi ən yaxşı idarə avtomobillərini təqdim
                    edirik. Mercedes-Benz V-Class, Range Rover Vogue, BMW X5 və s. kimi sürücü xidmətləri üçün digər
                    avtomobillərimizi yoxladığınızdan əmin olun.
                </p>
                <PrimaryButton text="CHECK NOW" class="btn" v-if="isEng()"  @click="bookNowBtn()"/>
                <PrimaryButton text="YOXLAMAQ" class="btn" v-if="!isEng()"  @click="bookNowBtn()"/>
            </div>
        </section>

        <section class="specifications">
            <h2 class="section-heading">{{ car.name }}</h2>
            <span class="gold-line"></span>

            <div class="text-wrapper">
                <p class="hidden slideRight">
                    {{ isEng() ? car.specification_1 : car.specification_1_az }}
                </p>
                <p class="hidden slideLeft">
                    {{ isEng() ? car.specification_2 : car.specification_2_az }}
                </p>
            </div>
        </section>

        <section class="image-gallery">
            <img :src="'/../api/public/car_images/' + car.image_1" alt="Luxury car image" v-if="car.image_1">
            <img :src="'/../api/public/car_images/' + car.image_2" alt="Luxury car image" v-if="car.image_2">
            <img :src="'/../api/public/car_images/' + car.image_3" alt="Luxury car image" v-if="car.image_3">
            <img :src="'/../api/public/car_images/' + car.image_4" alt="Luxury car image" v-if="car.image_4">
            <img :src="'/../api/public/car_images/' + car.image_5" alt="Luxury car image" v-if="car.image_5">
        </section>

    </div>
</template>

<script>
import CarService from '../services/CarService';

export default {
    data() {
        return {
            carName: "",
            car: "",
        }
    },
    mounted() {
        this.init();

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
        init() {
            const stringWithSpaces = this.$route.params.carName.replace(/-/g, ' ');

            // Split the stringWithSpaces by spaces and capitalize each word
            const wordsArray = stringWithSpaces.split(' ').map(word => {
                // Capitalize the first letter of each word
                return word.charAt(0).toUpperCase() + word.slice(1);
            });

            // Join the wordsArray back into a single string with spaces
            const finalString = wordsArray.join(' ');

            this.carName = finalString;
            this.getCarById(this.$route.query.id);
        },
        getCarById(id) {
            CarService.getById(id).then(res => {
                if (res.status == 200) {
                    this.car = res.data;
                } else {
                    //TODO: ERROR message
                }
            })
        },
        bookNowBtn() {
            this.$router.push("/book-now");
        },
        isEng() {
            return localStorage.getItem('lang') == 'en';
        },
    }

}
</script>

<style lang="scss" scoped>
.main-image-wrapper {
    width: 100%;
    position: relative;

    img {
        width: 100%;
        height: 380px;
        filter: brightness(0.5);
        object-fit: cover;
        object-position: center center;
    }

    h1 {
        position: absolute;
        top: 60%;
        transform: translate(-50%, -50%);
        left: 50%;
        color: #FFF;
    }

}

.details {
    display: flex;
    position: relative;

    .left-container {
        border: 1px solid #B08500;
        width: 50%;
        background-color: rgb(50, 50, 50);
        padding: 5%;
        padding-bottom: 25%;
        color: white;

        .gold-line {
            display: block;
            background: #B08500;
            width: 8rem;
            height: 2px;
            margin-bottom: 1rem;
        }

        p {
            font-family: "Inter", sans-serif;
            letter-spacing: 0.7px;
            font-size: 0.8rem;
        }
    }

    .right-container {
        width: 50%;
        background-color: rgb(27, 27, 27);
        border: 1px solid #B08500;
        padding-bottom: 25%;
        display: flex;
        justify-content: center;
        align-items: center;

        .pricing-container {
            display: flex;
            justify-content: space-between;
            gap: 1rem;
            background-color: rgb(42, 43, 56);
            padding: 15px;
            border: 1px solid #B08500;


            .pricing {
                p {
                    margin-bottom: 0.2rem;
                    color: white;
                }

                .pricing-table {
                    border: 1px solid #B08500;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    padding: 5px;

                    .price {
                        display: flex;
                        justify-content: space-between;
                        gap: 1rem;

                        p {
                            margin-bottom: 0;
                            font-family: "Inter", sans-serif;
                            font-size: 0.8rem;
                        }
                    }
                }
            }

            .gold-seperator {
                display: block;
                background: #B08500;
                width: 2px;
            }

            .btn-container {
                display: flex;
                justify-content: center;
                align-items: center;
            }


        }
    }

    .triangle-image {
        width: 100vw;
        height: 400px;
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        background-color: #B08500;
        position: absolute;
        bottom: 0%;
        left: 50%;
        transform: translate(-50%, 0);
        display: flex;

        img {
            width: 50%;
            object-fit: cover;
            object-position: center 40%;
        }
    }
}

.info-container {
    display: flex;
    gap: 2rem;
    width: 100%;
    padding: 2rem;

    img {
        width: 40%;
        object-fit: cover;

    }

    .text-wrapper {
        display: flex;
        flex-direction: column;

        p {
            font-family: "Inter", sans-serif;
            line-height: 180.5%;
            letter-spacing: 0.7px;
            font-size: 0.8rem;
            font-weight: 400;
            color: white;
        }

        .btn {
            margin-top: auto;
        }
    }
}

.specifications {
    padding: 4rem;
    background-color: #FFF;

    .section-heading {
        color: black;
        text-align: center;
    }

    .gold-line {
        display: block;
        margin: auto;
        background: #B08500;
        width: 10rem;
        height: 2px;
        margin-bottom: 3rem;
    }


    .text-wrapper {
        display: flex;
        justify-content: space-between;

        p {
            width: 45%;
            font-family: "Inter", sans-serif;
            line-height: 200.5%;
            letter-spacing: 0.7px;
            font-size: 0.8rem;
            font-weight: 400;
            color: rgb(0, 0, 0);
        }
    }
}

.image-gallery {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    overflow: hidden;

    img {
        height: 40vh;
        object-fit: cover;
        object-position: center center;
        flex: 1;
    }
}

@media only screen and (max-width: 1300px) {
    .details {

        .right-container,
        .left-container {
            padding-bottom: 33%;
        }
    }


}

@media only screen and (max-width: 1024px) {
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

    .details {
        flex-direction: column;

        .right-container,
        .left-container {
            width: 100%;
            padding: 5%;
        }

        .right-container {
            padding-bottom: 30%;
        }

        .triangle-image {
            height: 30vw;
        }
    }

    .info-container {
        flex-direction: column;

        img {
            width: 100%;
            object-fit: cover;

            &:nth-last-child(1) {
                display: none;
            }
        }

        .text-wrapper {
            width: 100%;
        }
    }

}
</style>