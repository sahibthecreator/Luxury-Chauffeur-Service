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
            <h1 class="hidden" v-if="isEng()">VIP AIRPORT MEET & GREET</h1>
            <h1 class="hidden" v-if="!isEng()">VIP AIRPORT MEET & GREET XİDMƏTI</h1>
            <h2 class="hidden delay-1" v-if="isEng()">Luxury vehicles</h2>
            <h2 class="hidden delay-1" v-if="!isEng()">Lüks avtomobillər</h2>


        </section>

        <section class="introduction">
            <article class="hidden slideRight">
                <h1 v-if="isEng()">Meet and Greet Service</h1>
                <h1 v-if="!isEng()">Hava Limanı Transferi</h1>
                <span class="gold-line"></span>
                <p v-if="isEng()">
                    We at Lord Concierge are aware that the beginning of your adventure is determined when you arrive at the
                    airport. In order to give you an unmatched experience of luxury, convenience, and individualized
                    attention the moment you step off the airport, we have devised our VIP Airport Meet & Greet service.
                    <br><br>
                    You can rely on our drivers to ensure a comfortable and secure travel as well as act as your personal
                    ambassadors, ready to help with any unique requirements or local recommendations.
                </p>
                <p v-if="!isEng()">
                    Biz Lord Concierge olaraq bilirik ki, macəranızın başlanğıcı siz hava limanına çatdığınız zaman
                    müəyyənləşir. Sizə hava limanından enərkən misilsiz lüks, rahatlıq və fərdi diqqət təcrübəsi təqdim
                    etmək üçün biz VIP Hava Limanında Qarşılaşma və Hava Limanınina müşayidə xidmətimizi hazırlamışıq.
                    <br><br>
                    Siz rahat və təhlükəsiz səyahəti təmin etmək, eləcə də istənilən unikal tələblər və ya yerli tövsiyələr
                    üzrə kömək etməyə hazır olan şəxsi səfirləriniz kimi çıxış etmək üçün sürücülərimizə etibar edə
                    bilərsiniz.
                </p>

                <sectition class="btns">
                    <PrimaryButton text="BOOK NOW" @click="navigateToBooking" v-if="isEng()"/>
                    <PrimaryButton text="REZERV ED" @click="navigateToBooking" v-if="!isEng()"/>

                    <SecondaryButton text="VIEW CARS" @click="scrollToCars" v-if="isEng()"/>
                    <SecondaryButton text="MAŞINLAR" @click="scrollToCars" v-if="!isEng()"/>
                </sectition>
            </article>
            <img class="hidden slideLeft" src="@/assets/img/driver-open-door.webp" alt="Luxury driver opens a door">
        </section>

        <SectionHeading text="our luxury car park" v-if="isEng()"/>
        <SectionHeading text="lüks avtomobil parkımız" v-if="!isEng()"/>

        <div class="cars-container hidden slideRight" ref="cars">
            <CarPreview v-for="(car, i) in cars" :car="car" :inverted="i % 2" />
        </div>


    </div>
</template>

<script>
import CarService from '../services/CarService';
export default {
    data() {
        return {
            cars: [],
        }
    },
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

        this.getCars();
    },
    methods: {
        getCars() {
            CarService.getAll().then(res => {
                if (res.status == 200) {
                    res.data.forEach(car => {
                        if (car.type == "Airport") {
                            this.cars.push(car)
                            console.log(car.name);
                        }
                    });
                } else {
                }
            })
        },
        navigateToBooking() {
            this.$router.push('/book-now');
        },
        scrollToCars() {
            this.$refs.cars.scrollIntoView({ behavior: 'smooth' });
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
        object-fit: cover;
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

@media only screen and (max-width: 1024px) {
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
            padding: 0 15px;
        }


    }

}</style>