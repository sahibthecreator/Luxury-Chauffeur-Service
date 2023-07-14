<script setup>
import SecondaryButton from '../components/SecondaryButton.vue';
import PrimaryButton from '../components/PrimaryButton.vue';
import SectionHeading from '../components/SectionHeading.vue';
import ServicePreview from '../components/ServicePreview.vue';
import ContactPanel from '../components/ContactPanel.vue';
</script>

<template>
    <div class="about-page">
        <section class="main-image-wrapper">
            <img src="@/assets/img/about-us-main.webp" alt="Airport luxury meet & greet">
            <h1>About Us</h1>
        </section>

        <section class="introduction">
            <img src="@/assets/img/about-us-1.webp" alt="Luxury driver image from rear seats">

            <article>
                <h1>YOUR ELEGANT CONCIERGE IN AZERBAIJAN</h1>
                <span class="gold-line"></span>
                <p>
                    In 2023, Lord Concierge emerged under the guidance of its Founder and Owner, Mirkazim Seyidzade. Since
                    then, Mr. Seyidzade has acquired a remarkable collection of vehicles, including prestigious brands like
                    BMW, Mercedes-Benz, and Land Rover, to meet the soaring demand in the Luxury Chauffeur and Self-Drive
                    industry.
                    <br><br>
                    Our pride stems from delivering an unparalleled driving experience in Baku’s most esteemed vehicles,
                    surpassing the price points of many competitors. With our vehicle fleet fully owned, we ensure absolute
                    control over quality.
                    Our hand-picked chauffeurs possess extensive knowledge and expertise, guaranteeing both safety and
                    pleasure throughout any journey.
                </p>

            </article>
        </section>

        <section class="introduction">
            <article>
                <h1>Unforgettable Experiences Await</h1>
                <span class="gold-line"></span>
                <p>
                    Our primary objective is to offer our clients the seamless luxury transportation experience that sets us
                    apart from any other company. It is this distinction that compels our clients to return to us time and
                    time again. For all visitors to our esteemed city of Baku, we are dedicated to providing unparalleled
                    services, not only to ensure their continued patronage but also to create unforgettable experiences.
                    Whether it's for business or pleasure, we are committed to ensuring that every trip becomes a cherished
                    memory.
                    <br><br>
                    From securing the finest hotels in town to guiding you to the hottest clubs in Baku, we possess the
                    expertise to advise and prioritize bookings for only the most exceptional venues, events, and places
                    that our city has to offer.
                </p>

            </article>

            <img src="@/assets/img/about-us-2.webp" alt="Luxury driver image from rear seats">
        </section>

        <div class="contact-line">
            <div>
                <span class="gold-line"></span>

                <h4>Call us on +994 50 777 77 77 or email us on info@lordconcierge.com</h4>
            </div>


            <div class="btn">
                <p>GET IN TOUCH</p>
            </div>
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
.about-page {
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
        top: 50%;
        transform: translate(-50%, -50%);
        left: 50%;
        color: #FFF;
    }
    
}

.introduction {
    padding: 0 45px;
    margin-top: 5rem;
    display: flex;
    justify-content: space-between;


    article {
        width: 57%;
        color: #FFF;

        h1 {
            margin-bottom: 6px;
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

.contact-line {
    margin: 10rem 0;
    width: 100%;
    height: 68px;
    background: #ECECEC;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 45px;

    div {
        display: flex;
        height: 100%;
        .gold-line {
            background: #B08500;
            width: 2px;
            height: 100%;
            margin-right: 1rem;
        }

        h4 {
            color: #000;
            font-family: Cinzel;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 180.5%;
            letter-spacing: 1px;
            margin: 0;
        }
    }

    .btn {
        background: #B08500;
        padding: 5px 30px;
        height: fit-content;
        width: fit-content;
        border-radius: 0;

        p {
            color: #FFF;
            font-size: 16px;
            font-family: "Inter";
            font-weight: 600;
            margin: 0;
        }

        &:hover{
            opacity: 0.9;
        }
    }
}
</style>