<script setup>
import PrimaryButton from '../components/PrimaryButton.vue';
import SecondaryButton from '../components/SecondaryButton.vue';
import SectionHeading from '../components/SectionHeading.vue';
import CarPreview from '../components/CarPreview.vue';
</script>

<template>
    <div class="airport-page">

        <section class="main-image-wrapper">
            <img src="@/assets/img/airport-main-image.webp" alt="Airport luxury meet & greet">
            <h1>VIP AIRPORT MEET & GREET</h1>
            <h2>Luxury vehicles</h2>
        </section>

        <section class="introduction">
            <article>
                <h1>Meet and Greet Service</h1>
                <span class="gold-line"></span>
                <p>
                    At Lord Concierge, we understand that your arrival at the airport sets the tone for your entire journey.
                    That's why we have designed our VIP Airport Meet & Greet service to provide an unparalleled experience
                    of luxury, convenience, and personalized attention from the moment you step off the plane.
                    <br><br>
                    You can trust that our chauffeurs will not only provide a smooth and safe journey but also serve as your
                    personal ambassadors, ready to assist with any special requests or local recommendations.
                </p>

                <sectition class="btns">
                    <PrimaryButton text="BOOK NOW" />
                    <SecondaryButton text="VIEW CARS" />
                </sectition>
            </article>
            <img src="@/assets/img/driver-open-door.webp" alt="Luxury driver opens a door">
        </section>

        <SectionHeading text="our luxury car park" />
        <div class="cars-container">
            <CarPreview carName="Mercedes-Benz S Class 2022" image="../src/assets/img/car1.webp"
                description="Introducing the Mercedes-Benz S-Class 2022. As the epitome of executive saloon cars, our fleet proudly showcases this exceptional model, representing the pinnacle of German engineering and design. Immerse yourself in a world of refined elegance as you experience the unrivaled comfort, cutting-edge technology, and effortless performance that define the Mercedes-Benz S-Class. Perfectly tailored to meet the highest standards of the business world, this extraordinary vehicle effortlessly combines sophistication and innovation, ensuring an unparalleled journey that exceeds expectations." />

            <CarPreview :inverted="true" carName="Mercedes-Benz S Class 2022" image="../src/assets/img/car1.webp"
                description="Introducing the Mercedes-Benz S-Class 2022. As the epitome of executive saloon cars, our fleet proudly showcases this exceptional model, representing the pinnacle of German engineering and design. Immerse yourself in a world of refined elegance as you experience the unrivaled comfort, cutting-edge technology, and effortless performance that define the Mercedes-Benz S-Class. Perfectly tailored to meet the highest standards of the business world, this extraordinary vehicle effortlessly combines sophistication and innovation, ensuring an unparalleled journey that exceeds expectations." />

            <CarPreview carName="Mercedes-Benz S Class 2022" image="../src/assets/img/car1.webp"
                description="Introducing the Mercedes-Benz S-Class 2022. As the epitome of executive saloon cars, our fleet proudly showcases this exceptional model, representing the pinnacle of German engineering and design. Immerse yourself in a world of refined elegance as you experience the unrivaled comfort, cutting-edge technology, and effortless performance that define the Mercedes-Benz S-Class. Perfectly tailored to meet the highest standards of the business world, this extraordinary vehicle effortlessly combines sophistication and innovation, ensuring an unparalleled journey that exceeds expectations." />
        </div>


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
        width: 40%;
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
        width: 40%;
    }

    .gold-line {
        display: block;
        background: #B08500;
        width: 8rem;
        height: 2px;
        margin-bottom: 2rem;
    }

    .btns {
        margin-top: 3rem;
        display: flex;
        gap: 2rem;
    }
}

.cars-container {
    padding: 0 45px;
}
</style>