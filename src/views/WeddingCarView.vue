<script setup>
import PrimaryButton from '../components/PrimaryButton.vue';
import SectionHeading from '../components/SectionHeading.vue';
import CarPreview from '../components/CarPreview.vue';
</script>

<template>
    <div class="airport-page">

        <section class="main-image-wrapper">
            <img src="@/assets/img/wedding-main.webp" alt="Airport luxury meet & greet">
            <h1 class="hidden" v-if="isEng()">Wedding Car Hire in Baku</h1>
            <h1 class="hidden" v-if="!isEng()">Bakıda Toy Maşının İcarəsi</h1>
        </section>

        <section class="introduction">
            <img class="hidden slideRight" src="@/assets/img/wedding-1.webp" alt="Luxury driver opens a door">

            <article class="hidden slideLeft">
                <h1 v-if="isEng()">Unmatched Luxury and Elegance Wedding Cars</h1>
                <h1 v-if="!isEng()">Premium Klass Toy Maşınları</h1>
                <span class="gold-line"></span>
                <p v-if="isEng()">
                    One of Baku's top wedding car rental companies is called Lord Concierge. There are no other companies in
                    Baku with a fleet of gorgeous chauffeur-driven vehicles and luxury cars for rent that understand the
                    significance of your wedding day like Lord Concierge.
                    <br><br>
                    A highly popular option for chauffeur-driven wedding automobile rental in Baku is our Rolls-Royce
                    Phantom. It will make your wedding day memorable since it is the most magnificent vehicle in our fleet.
                    We promise that a chauffeur-driven Rolls-Royce will get you to your desired place on time and in style.
                </p>
                <p v-if="!isEng()">
                    Bakının məşhur toy avtomobillərinin icarəsi şirkətlərindən biri Lord Concierge adlanır. Başqa şirkətlər
                    yoxdur
                    Bakı gözəl şoferlə idarə olunan avtomobillər parkı və kirayə verilən lüks avtomobillər ...
                    Lord Concierge kimi toy gününüzün əhəmiyyəti.
                    <br><br>
                    Bakıda şoferli toy avtomobilinin kirayəsi üçün çox populyar seçim bizim Rolls-Royce-dur.
                    Fantom. Donanmamızın ən möhtəşəm avtomobili olduğu üçün toy gününüzü yaddaqalan edəcək.
                    Biz söz veririk ki, şoferlə idarə olunan Rolls-Royce sizi istədiyiniz yerə vaxtında və üslubda
                    çatdıracaq.
                </p>

                <PrimaryButton text="REQUEST NOW" class="btn" @click="navigateToContact" v-if="isEng()" />
                <PrimaryButton text="REZERV ED" class="btn" @click="navigateToContact" v-if="!isEng()" />

            </article>
        </section>

        <SectionHeading text="our luxury wedding car park" v-if="isEng()" />
        <SectionHeading text="premium toy avtoparkımız" v-if="!isEng()" />

        <div class="cars-container hidden">
            <CarPreview v-for="(car, i) in cars" :car="car" :inverted="i % 2" />
        </div>


        <div class="contact-panel">
            <h1 v-if="isEng()">Get in touch</h1>
            <h1 v-if="!isEng()">Əlaqə saxlayın</h1>
            <section class="details">
                <div class="input-row">
                    <div>
                        <label v-if="isEng()">Full Name*</label>
                        <label v-if="!isEng()">Ad ve Soyad*</label>
                        <input type="text" placeholder="Your full name" v-model="fullName" v-if="isEng()">
                        <input type="text" placeholder="Adınız ve Soyadınız" v-model="fullName" v-if="!isEng()">
                    </div>
                    <div>
                        <label v-if="isEng()">Phone*</label>
                        <label v-if="!isEng()">Telefon Nömrəsi*</label>
                        <input type="text" placeholder="Your contact phone" v-model="phone" v-if="isEng()">
                        <input type="text" placeholder="Telefon nömrəniz" v-model="phone" v-if="!isEng()">
                    </div>
                </div>

                <label v-if="isEmailOption">Email*</label>
                <input type="email" placeholder="Your contact email" v-model="email" v-if="isEng()">
                <input type="email" placeholder="Əlaqə e-poçtunuz" v-model="email" v-if="!isEng()">

                <label for="" v-if="isEng()">Message*</label>
                <label for="" v-if="!isEng()">Mesaj*</label>
                <input type="text" placeholder="How can we help you?" v-model="message" v-if="isEng()">
                <input type="text" placeholder="Sizə necə kömək edə bilərik?" v-model="message" v-if="!isEng()">
                <div id="status-box">
                    <p>{{ statusMsg }}</p>
                </div>
                <div class="btn" id="send-message-btn" @click="saveMessage">
                    <p v-if="isEng()">SEND</p>
                    <p v-if="!isEng()">GÖNDERMEK</p>
                </div>
            </section>
        </div>


    </div>
</template>

<script>
import ContactUsService from '../services/ContactUsService';
import CarService from '../services/CarService';

export default {
    data() {
        return {
            statusMsg: "",
            fullName: "",
            email: "",
            phone: "",
            message: "",
            cars: [],
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
        saveMessage() {
            let statusBox = document.getElementById("status-box");
            if (!(this.fullName.length > 0 && this.email.length > 0 && this.phone.length > 0 && this.message.length > 0)) {
                statusBox.style.opacity = 1;
                statusBox.classList.remove("success");
                this.statusMsg = "Please fill all the fields";
                return;
            }

            let data = {
                "fullName": this.fullName,
                "email": this.email,
                "phone": this.phone,
                "message": this.message,
            }

            ContactUsService.saveMessage(data).then(res => {
                statusBox.style.opacity = 1;
                if (res.status == 200) {
                    statusBox.classList.add("success");
                    this.statusMsg = "Message was sent successfully";
                    document.getElementById("send-message-btn").classList.add("disabled");

                } else {
                    statusBox.classList.remove("success");
                    this.statusMsg = res.data;
                }
            })
        },
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
        navigateToContact() {
            this.$router.push('/contact-us');
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
        text-transform: uppercase;
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
        border: 1px solid transparent;

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

        &.disabled {
            opacity: 0.5;
            cursor: default;

            &:hover {
                background-color: #B08500;
                border: 1px solid transparent;
            }
        }
    }

    #status-box {
        display: flex;
        justify-content: center;
        background: #a00b0b;
        border-radius: 0;
        width: 100%;
        height: fit-content;
        padding: 10px;
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

        }

        .cars-container {
            padding: 0 15px;
        }

        .contact-panel {
            .details {
                width: 100%;
                padding: 20px 15px;
            }
        }


    }

}
</style>