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
            <h1 class="hidden"> {{ isEng() ? "Journey in Luxury, Depart with Prestige" :
                "Luksda səyahət, prestij ilə ayrılın." }}</h1>
            <h5 class="hidden delay-1">{{ isEng() ? "Book a luxury transfer with chauffeur from plane to door" :
                "Təyyarədən qapınıza sürücü ilə luks transfer sifariş edin" }}</h5>
            <SecondaryButton text="BOOK NOW" class="btn hidden slideRight delay-1" @click="navigateToBooking" v-if="isEng()"/>
            <SecondaryButton text="REZERV ED" class="btn hidden slideRight delay-1" @click="navigateToBooking" v-if="!isEng()"/>
        </section>

        <section class="introduction">
            <img src="@/assets/img/driver-image.webp" alt="Luxury driver image from rear seats">

            <article>
                <h1>{{ isEng() ? "Baku Chauffeurs & Luxury Car Rent" : "PREMIUM sürücü & AVTOMOBİL Icarəsi" }} </h1>
                <span class="gold-line"></span>
                <p v-if="isEng()">
                    The most luxurious car rental and chauffeur service in Baku can be found at Lord Concierge, along with
                    the most renowned and elegant concierge services. We own our fleet of cars, each of which provides
                    luxury chauffeuring and luxury super car hiring services, giving our customers the chance to operate and
                    be seen in the greatest cars in the world.
                    <br><br>
                    We also pride ourselves in understanding the needs of our clients and over-delivering on their
                    expectations. With a great reputation for providing exceptional customer service, you can be assured of
                    complete peace of mind regardless of which of our services you require.
                </p>
                <p v-if="!isEng()">
                    Bakıdakı ən premium avtomobil icarəsi və sürücü xidmətləri "Lord Concierge" tərəfindən təqdim edilir, həm də
                    ən məşhur və şənəli konserj xidmətləri ilə birgə. Biz öz avtomobil filosuna sahibik, hər biri luks
                    şofyorluq və lüks super avtomobil icarəsi xidmətləri təqdim edir, müştərilərimizə dünyanın ən böyük
                    avtomobillərində sürmə və görünmə imkanı verir.
                    <br><br>
                    Biz də müştərilərimizin tələblərini anlamağa və onların gözləntilərinin üstünə çıxmağa fəxr edirik.
                    Aşkar müştəri xidməti təmin etmə üçün böyük şöhrətimizlə, hansı xidmətimizə ehtiyacınız olsa belə, tam
                    sərtlikdə xoşbəxtliyinizə əmin ola bilərsiniz.
                </p>


                <sectition class="btns">
                    <PrimaryButton text="BOOK NOW" @click="navigateToBooking" v-if="isEng()"/>
                    <PrimaryButton text="REZERV ED" @click="navigateToBooking" v-if="!isEng()"/>
                </sectition>
            </article>
        </section>

        <SectionHeading text="our services" class="hidden slideRight" v-if="isEng()"/>
        <SectionHeading text="xidmətlərimiz" class="hidden slideRight" v-if="!isEng()"/>

        <div class="services-container hidden slideRight">
            <ServicePreview serviceName="Airport chauffeur transfer" image="1"
                description="Lord Concierge is the leading chauffeur hire company in Baku, with an enviable fleet of executive chauffeured cars available to suit all needs." />

            <ServicePreview :inverted="true" serviceName="Luxury car hire" image="2"
                description="Lord Concierge strives to make every client experience extra special. With our supercar hire you can be assured of the highest levels of client care along with the finest vehicles." />

            <ServicePreview serviceName="Wedding car hire" image="3"
                description="Lord Concierge is the leading wedding cars hire company in Baku, with an enviable fleet of executive chauffeured cars available to suit all needs." />

            <ServicePreview :inverted="true" serviceName="Property management" image="4"
                description="Lord Concierge strives to make every client experience extra special. With our property letting and buying you can be assured of the highest levels of convenience." />
        </div>

        <SectionHeading text="travel with unmatched luxury" v-if="isEng()" />
        <SectionHeading text="Qeyri müqayisəli rahatlıqla səyahət edin" v-if="!isEng()" />

        <div class="values-container hidden slideLeft">
            <div class="value-container">
                <img src="@/assets/img/value-1.webp" alt="Luxury car interior">
                <h4 v-if="isEng()">Unmatched Convenience</h4>
                <h4 v-if="!isEng()">Qeyri müqayisəli rahatlıq</h4>
            </div>

            <div class="value-container">
                <img src="@/assets/img/value-2.webp" alt="Luxury car interior">
                <h4 v-if="isEng()">24/7 Assistance</h4>
                <h4 v-if="!isEng()">24/7 Əlaqə</h4>
            </div>

            <div class="value-container">
                <img src="@/assets/img/value-3.webp" alt="Luxury car interior">
                <h4 v-if="isEng()">Exclusively Connected</h4>
                <h4 v-if="!isEng()">Premium Keyfiyyət</h4>
            </div>

        </div>

        <SectionHeading text="get in touch" v-if="isEng()"/>
        <SectionHeading text="Əlaqə saxlayın" v-if="!isEng()"/>

        <ContactPanel class="hidden slideRight" />

        <!-- <SectionHeading text="our partners" v-if="isEng()"/>
        <SectionHeading text="Tərəfdaşlarımız" v-if="!isEng()"/> -->

        <!-- TODO: REMOVE-->
        <div style="margin-bottom: 5rem;"></div>

    </div>
</template>

<script>
export default {
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
    },
    methods: {
        navigateToBooking() {
            this.$router.push('/book-now');
        },
        isEng() {
            return localStorage.getItem('lang') == 'en';
        },
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
        object-fit: cover;
        object-position: center center;
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

@media only screen and (max-width: 1024px) {
    .home-page {
        padding-top: 1rem;

        .main-image-wrapper {
            text-align: center;

            img {
                object-fit: cover;
            }

            h1 {
                font-size: 1.8rem;
                left: 0;
            }

            h5 {
                margin-top: 1rem;
                font-size: 0.8rem;
                left: 0;
                width: 100%;
            }

            .btn {
                left: 50%;
                transform: translate(-50%, 0);
            }
        }


        .introduction {
            flex-direction: column;
            padding: 0 15px;
            gap: 1rem;
            margin-top: 2rem;

            img {
                width: 100%;
            }

            article {
                width: 100%;
            }
        }

        .services-container {
            padding: 0 15px;
        }

        .values-container {
            padding: 0;
            flex-direction: column;
            gap: 3rem;
            align-items: center;

            .value-container {
                width: 100%;
                height: 10rem;

                img {
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
    }

}
</style>