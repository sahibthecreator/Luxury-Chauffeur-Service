<script setup>
import PrimaryButton from '../components/PrimaryButton.vue';
import SecondaryButton from '../components/SecondaryButton.vue';
import SectionHeading from '../components/SectionHeading.vue';
import CarPreview from '../components/CarPreview.vue';
</script>

<template>
    <div class="airport-page">

        <section class="main-image-wrapper">
            <img src="@/assets/img/wedding-main.webp" alt="Airport luxury meet & greet">
            <h1>Wedding Car Hire in Baku</h1>
        </section>

        <section class="introduction">
            <img src="@/assets/img/wedding-1.webp" alt="Luxury driver opens a door">

            <article>
                <h1>Unmatched Luxury and Elegance Wedding Cars</h1>
                <span class="gold-line"></span>
                <p>
                    Lord Concierge is a leading provider of wedding car hire in Baku. With our fleet of beautiful chauffeur
                    driven cars and supercars for hire, there are no other businesses in London who appreciate the
                    importance of your wedding day as passionately as Lord Concierge.
                    <br><br>
                    Our Rolls-Royce Phantom is a very popular choice for chauffeur driven wedding car hire in Baku. As the
                    most luxurious car in our fleet, it will make your wedding day one to remember. With a chauffeur-driven
                    Rolls-Royce, we guarantee that you will arrive at your chosen venue day on-time and in style.
                </p>

                <PrimaryButton text="REQUEST NOW" class="btn" />
            </article>
        </section>

        <SectionHeading text="our luxury wedding car park" />
        <div class="cars-container">
            <CarPreview carName="Mercedes-Benz S Class 2022" image="../src/assets/img/car1.webp"
                description="Introducing the Mercedes-Benz S-Class 2022. As the epitome of executive saloon cars, our fleet proudly showcases this exceptional model, representing the pinnacle of German engineering and design. Immerse yourself in a world of refined elegance as you experience the unrivaled comfort, cutting-edge technology, and effortless performance that define the Mercedes-Benz S-Class. Perfectly tailored to meet the highest standards of the business world, this extraordinary vehicle effortlessly combines sophistication and innovation, ensuring an unparalleled journey that exceeds expectations." />

            <CarPreview :inverted="true" carName="Mercedes-Benz S Class 2022" image="../src/assets/img/car1.webp"
                description="Introducing the Mercedes-Benz S-Class 2022. As the epitome of executive saloon cars, our fleet proudly showcases this exceptional model, representing the pinnacle of German engineering and design. Immerse yourself in a world of refined elegance as you experience the unrivaled comfort, cutting-edge technology, and effortless performance that define the Mercedes-Benz S-Class. Perfectly tailored to meet the highest standards of the business world, this extraordinary vehicle effortlessly combines sophistication and innovation, ensuring an unparalleled journey that exceeds expectations." />

            <CarPreview carName="Mercedes-Benz S Class 2022" image="../src/assets/img/car1.webp"
                description="Introducing the Mercedes-Benz S-Class 2022. As the epitome of executive saloon cars, our fleet proudly showcases this exceptional model, representing the pinnacle of German engineering and design. Immerse yourself in a world of refined elegance as you experience the unrivaled comfort, cutting-edge technology, and effortless performance that define the Mercedes-Benz S-Class. Perfectly tailored to meet the highest standards of the business world, this extraordinary vehicle effortlessly combines sophistication and innovation, ensuring an unparalleled journey that exceeds expectations." />
        </div>


        <div class="contact-panel">
            <h1>Get in touch</h1>
            <section class="details">

                <div class="input-row">
                    <div>
                        <label for="">Full Name*</label>
                        <input type="text" placeholder="Your name">
                    </div>
                    <div>
                        <label for="">Phone*</label>
                        <input type="text" placeholder="Your phone number">
                    </div>
                </div>

                <label for="">Email*</label>
                <input type="email" placeholder="Your email">

                <label for="">Message*</label>
                <input type="text" placeholder="Your message">
                <div class="btn">
                    <p>SEND</p>
                </div>
            </section>
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
}

.introduction {
    padding: 0 45px;
    margin-top: 5rem;
    display: flex;
    justify-content: space-between;

    article {
        width: 65%;
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
            color: #FFF;
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
        width: 30%;
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
    padding: 0 45px;
}

.contact-panel {
    padding: 30px 0;
    background: #fbfbfb;
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        color: #B08500;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 1.2px;
    }

    .details {
        width: 40%;
        display: flex;
        flex-direction: column;
        padding: 20px 45px;

        .input-row {
            display: flex;
            justify-content: space-between;

            div {
                width: 48%;
                display: flex;
                flex-direction: column;
            }

            input {
                width: 100%;
            }
        }

        input {
            background-color: #fbfbfb;
            border: 1px solid #B08500;
            margin-bottom: 1rem;
            font-size: 12px;
            font-family: "Inter";
            padding: 5px;
            outline: none;
        }

        label {
            color: #676767;
            font-family: "Inter";
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 0.24px;
            margin-bottom: 5px;
        }
    }

    .btn {
        background: #B08500;
        padding: 7px 10px;
        height: fit-content;
        width: 60%;
        border-radius: 0;
        margin-top: 1rem;
        text-align: center;
        margin: auto;
        margin-top: 2rem;
        transition: .3s all;

        p {
            color: #FFF;
            font-size: 0.8rem;
            font-family: "Inter";
            font-weight: 600;
            margin: 0;
        }


        &:hover {
            background-color: #fbfbfb;
            border: 1px solid #B08500;

            p {
                color: #B08500;
            }
        }
    }
}
</style>