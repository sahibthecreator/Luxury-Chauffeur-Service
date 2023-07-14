<script setup>
import PrimaryButton from '../components/PrimaryButton.vue';
import SecondaryButton from '../components/SecondaryButton.vue';
import SectionHeading from '../components/SectionHeading.vue';
import CarPreview from '../components/CarPreview.vue';
</script>

<template>
    <div class="airport-page">

        <section class="main-image-wrapper">
            <img src="@/assets/img/car-rent-main.webp" alt="Airport luxury meet & greet">
            <h1>ELITE CAR HIRE</h1>
            <h2>Luxury vehicles hire in Baku</h2>
        </section>

        <section class="introduction">
            <img src="@/assets/img/car-rent-1.webp" alt="Luxury driver opens a door">

            <article>
                <h1>Hire a luxury car</h1>
                <span class="gold-line"></span>
                <p>
                    Hire your dream supercar from AZ Luxe. We offer the most prestigious and exclusive supercar hire
                    services and chauffeur services in all of London. Our fleet of supercars and customer service is
                    unrivalled – when you choose to hire a car from AZ Luxe, you’ll only have the best.
                    <br><br>
                    Our competitive prices allow you to enjoy the most powerful and technologically advanced vehicles in the
                    world, and with our ever-growing privately-owned fleet, you’ll have a supercar experience like no other.
                </p>
            </article>
        </section>

        <SectionHeading text="our luxury car park" />
        <section class="cars-container">
            <div class="row">
                <div class="car">
                    <img src="@/assets/img/car1.webp" alt="Mercedez Benz">
                    <h3>Mercedes-Benz S Class 2022 </h3>
                </div>
                <div class="car">
                    <img src="@/assets/img/car1.webp" alt="Mercedez Benz">
                    <h3>Mercedes-Benz S Class 2022 </h3>
                </div>
            </div>
            <div class="row">
                <div class="car">
                    <img src="@/assets/img/car1.webp" alt="Mercedez Benz">
                    <h3>Mercedes-Benz S Class 2022 </h3>
                </div>
                <div class="car">
                    <img src="@/assets/img/car1.webp" alt="Mercedez Benz">
                    <h3>Mercedes-Benz S Class 2022 </h3>
                </div>
            </div>
            <div class="row">
                <div class="car">
                    <img src="@/assets/img/car1.webp" alt="Mercedez Benz">
                    <h3>Mercedes-Benz S Class 2022 </h3>
                </div>
                <div class="car">
                    <img src="@/assets/img/car1.webp" alt="Mercedez Benz">
                    <h3>Mercedes-Benz S Class 2022 </h3>
                </div>
            </div>
        </section>


    </div>
</template>

<script>
export default {
    setup() {


        return {}
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

        &:nth-child(2n) {
            background: #232323;
        }
    }

    .car {
        cursor: pointer;
        width: 50%;
        padding: 0;

        img {
            position: relative;
            width: 100%;
            filter: brightness(0.8);

            &:hover {
                filter: brightness(0.5);
            }
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
    }
}
</style>