<script setup>
import PrimaryButton from '../components/PrimaryButton.vue';
</script>

<template>
    <div class="airport-page">

        <section class="main-image-wrapper">
            <img src="@/assets/img/property-main.webp" alt="Airport luxury meet & greet">
            <h1 class="hidden" v-if="isEng()">Estate Elegance</h1>
            <h1 class="hidden" v-if="!isEng()">Əmlak idarə edilməsi</h1>
        </section>

        <section class="introduction">
            <img class="hidden slideRight" src="@/assets/img/property-1.webp" alt="Luxury driver opens a door">

            <article class="hidden slideLeft">
                <h1 v-if="isEng()">Real Estate Management</h1>
                <h1 v-if="!isEng()">Daşınmaz əmlakın idarə edilməsi</h1>
                <span class="gold-line"></span>
                <p v-if="isEng()">
                    When it comes to finding your dream luxury property, look no further than Lord Concierge, the epitome
                    of opulence and sophistication in real estate services. Imagine stepping into a world where
                    architectural marvels meet unparalleled comfort, where your preferences and aspirations shape the search
                    for your ideal home. "Estate Elegance" is more than just a service; it's an experience that brings you
                    closer to your vision of the perfect abode.
                    <br><br><br>
                    Lord Concierge goes beyond the ordinary to redefine luxury living. With our unwavering dedication and
                    deep expertise, we set the stage for a new chapter of your life—one where every day is a celebration of
                    opulence, comfort, and sophistication. Your journey towards owning the epitome of luxury properties
                    begins with Lord Concierge.
                </p>
                <p v-if="!isEng()">
                    Xəyal etdiyiniz dəbdəbəli əmlakı tapmağa gəldikdə, təcəssüm edən Lord Konsyerjdən başqa yerə baxmayın
                    daşınmaz əmlak xidmətlərində zənginlik və mürəkkəblik. Bir dünyaya qədəm qoyduğunuzu düşünün
                    memarlıq möcüzələri sizin üstünlükləriniz və istəklərinizin axtarışı formalaşdırdığı misilsiz rahatlığa
                    cavab verir
                    ideal eviniz üçün. “Estate Elegance” sadəcə bir xidmət deyil; sizə gətirən bir təcrübədir
                    mükəmməl məskən haqqında təsəvvürünüzə daha yaxındır.
                    <br><br><br>
                    Lord Konsyerj dəbdəbəli həyatı yenidən müəyyən etmək üçün adidən kənara çıxır. Bizim sarsılmaz
                    fədakarlığımızla və
                    dərin təcrübə ilə biz sizin həyatınızın yeni bir fəslinə zəmin qoyuruq – burada hər gün bayramdır.
                    zənginlik, rahatlıq və incəlik. Lüks mülklərin təcəssümünə sahib olmaq üçün səyahətiniz
                    Lord Concierge ilə başlayır.
                </p>
                <PrimaryButton text="REQUEST NOW" class="btn" @click="scrollToContact" v-if="isEng()" />
                <PrimaryButton text="ƏLAQƏ SAXLA" class="btn" @click="scrollToContact" v-if="!isEng()" />
            </article>
        </section>
        <section class="introduction">
            <article class="hidden slideLeft">
                <h1 v-if="isEng()">Tailored to Perfection</h1>
                <h1 v-if="!isEng()">Mükəmməlliyə Uyğunlaşdırılmışdır</h1>
                <span class="gold-line"></span>
                <p v-if="isEng()">
                    The cornerstone of "Estate Elegance" lies in customization. We believe that your aspirations deserve
                    individualized attention. Our personalized approach means that every step of the journey is tailored to
                    meet your exact needs. Whether you seek an architectural masterpiece, a serene waterfront retreat, or a
                    modern oasis, we take the time to understand your preferences and meticulously curate a collection of
                    properties that resonate with your desires.
                    <br><br><br>
                    The search for a luxury property is a voyage of passion and refinement. At Lord Concierge we are
                    driven by a commitment to turning your vision into reality. We navigate the intricate landscape of
                    luxury real estate with finesse, ensuring that every aspect of your property search aligns with your
                    discerning taste. Our mission is to transform your aspirations into an address that epitomizes elegance.
                </p>
                <p v-if="!isEng()">
                    İnanırıq ki, sizin arzularınız layiqdir
                    fərdi diqqət. Fərdi yanaşmamız o deməkdir ki, səyahətin hər bir addımı ona uyğunlaşdırılıb
                    tam ehtiyaclarınızı ödəyin. İstər memarlıq şah əsəri, istərsə də sahildə sakit istirahət və ya a
                    müasir oazis, biz sizin seçimlərinizi başa düşmək üçün vaxt ayırırıq və kolleksiyanı diqqətlə tərtib
                    edirik
                    istəklərinizlə səsləşən xüsusiyyətlər.
                    <br><br><br>
                    Lüks mülk axtarışı ehtiras və incəlik səyahətidir. Lord Concierge-dəyik
                    vizyonunuzu reallığa çevirmək öhdəliyi ilə idarə olunur. Biz mürəkkəb mənzərəni seyr edirik
                    lüks daşınmaz əmlak, əmlak axtarışınızın hər tərəfinin sizinlə uyğun olmasını təmin edir
                    seçilən dad. Bizim missiyamız istəklərinizi zərifliyi təcəssüm etdirən ünvana çevirməkdir.
                </p>
            </article>
            <img class="hidden slideRight" src="@/assets/img/sea-breeze.webp" alt="Luxury driver opens a door">

        </section>

        <div class="contact-panel hidden" ref="contactPanel">
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

export default {
    data() {
        return {
            statusMsg: "",
            fullName: "",
            email: "",
            phone: "",
            message: "",
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
        scrollToContact() {
            this.$refs.contactPanel.scrollIntoView({ behavior: 'smooth' });
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
        object-fit: cover;
    }

    .gold-line {
        display: block;
        background: #B08500;
        width: 8rem;
        height: 2px;
        margin-bottom: 2rem;
    }
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