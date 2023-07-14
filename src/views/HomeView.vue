<script setup>
import SecondaryButton from '../components/SecondaryButton.vue';
import PrimaryButton from '../components/PrimaryButton.vue';
import SectionHeading from '../components/SectionHeading.vue';
import ServicePreview from '../components/ServicePreview.vue';
import ContactPanel from '../components/ContactPanel.vue';
</script>

<template>
    <div class="home-page">
        <section class="main-image-wrapper">
            <img src="@/assets/img/home-main-image.webp" alt="Airport luxury meet & greet">
            <h1>Journey in Luxury, Depart with Prestige</h1>
            <h5>Book a luxury transfer with chauffeur from plane to door</h5>
            <SecondaryButton text="BOOK NOW" class="btn" />
        </section>

        <section class="introduction">
            <img src="@/assets/img/driver-image.webp" alt="Luxury driver image from rear seats">

            <article>
                <h1>Baku Chauffeurs & Luxury Car Rent</h1>
                <span class="gold-line"></span>
                <p>
                    Lord Concierge is home to the most prestigious and luxurious of concierge services and the finest car
                    hire and chauffeur service in Baku. We own our fleet of vehicles, each offering luxury chauffeuring and
                    luxury super car hire services providing our clients with the opportunity to drive, and be seen in, the
                    world’s finest vehicles.
                    <br><br>
                    We also pride ourselves in understanding the needs of our clients and over-delivering on their
                    expectations. With a strong reputation for outstanding customer service, you can be sure of absolute
                    peace of mind, whichever of our services you require.
                </p>

                <sectition class="btns">
                    <PrimaryButton text="BOOK NOW" />
                </sectition>
            </article>
        </section>

        <SectionHeading text="our services" />

        <div class="services-container">
            <ServicePreview serviceName="Airport chauffeur transfer" image="../src/assets/img/service-1.webp"
                description="Lord Concierge is the leading chauffeur hire company in Baku, with an enviable fleet of executive chauffeured cars available to suit all needs." />

            <ServicePreview :inverted="true" serviceName="Luxury car hire" image="../src/assets/img/service-2.webp"
                description="Lord Concierge strives to make every client experience extra special. With our supercar hire you can be assured of the highest levels of client care along with the finest vehicles." />

            <ServicePreview serviceName="wedding car hire" image="../src/assets/img/service-3.webp"
                description="Lord Concierge is the leading wedding cars hire company in Baku, with an enviable fleet of executive chauffeured cars available to suit all needs." />

            <ServicePreview :inverted="true" serviceName="Property management" image="../src/assets/img/service-4.webp"
                description="Lord Concierge strives to make every client experience extra special. With our property letting and buying you can be assured of the highest levels of convenience." />
        </div>

        <SectionHeading text="travel with unmatched luxury" />

        <div class="values-container">
            <div class="value-container">
                <img src="@/assets/img/value-1.webp" alt="Luxury car interior">
                <h4>Unmatched Convenience</h4>
            </div>

            <div class="value-container">
                <img src="@/assets/img/value-2.webp" alt="Luxury car interior">
                <h4>24/7 Assistance</h4>
            </div>

            <div class="value-container">
                <img src="@/assets/img/value-3.webp" alt="Luxury car interior">
                <h4>Exclusively Connected</h4>
            </div>

        </div>

        <SectionHeading text="get in touch" />
        <ContactPanel />

        <SectionHeading text="our partners" />

        <!-- TODO: REMOVE-->
        <div style="margin-bottom: 20rem;"></div>

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
.home-page {
    padding-top: 7rem;
}

.main-image-wrapper {
    width: 100%;
    position: relative;

    img {
        width: 100%;
        height: 380px;
        filter: brightness(0.3);
    }

    h1 {
        position: absolute;
        top: 40%;
        transform: translate(0%, -50%);
        left: 5%;
        color: #FFF;
    }

    h5 {
        position: absolute;
        top: 48%;
        left: 5%;
        color: #FFF;
    }

    .btn {
        position: absolute;
        left: 5%;
        top: 70%;
    }
}

.introduction {
    padding: 0 45px;
    margin-top: 5rem;
    display: flex;
    justify-content: space-between;


    article {
        width: 50%;
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

.services-container {
    padding: 0 45px;
}

.values-container {
    padding: 0 45px;
    display: flex;
    justify-content: space-between;

    .value-container {
        width: 30%;

        img {
            position: relative;
            width: 100%;
            filter: brightness(0.5);
        }

        h4 {
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%);
            left: 50%;
            color: #FFF;
            font-size: 1.2rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: 0.4px;
            width: 100%;
            text-align: center;
        }
    }
}
</style>