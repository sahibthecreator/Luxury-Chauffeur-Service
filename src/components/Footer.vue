<template>
    <div class="footer">
        <div class="main-container">
            <section class="contact-details">
                <img src="@/assets/img/logo.webp" alt="Lord Concierge Logo" class="logo">

                <div class="contact-info">
                    <img src="@/assets/img/gold-phone-icon.webp" alt="Phone Icon" class="img-fluid">
                    <p>+994 55 777 77 77</p>
                </div>

                <div class="contact-info">
                    <img src="@/assets/img/gold-email-icon.webp" alt="Phone Icon" class="img-fluid">
                    <p>info@lordconcierge.com</p>
                </div>

            </section>

            <section class="services">
                <h3 v-if="isEng()">OUR SERVICES</h3>
                <h3 v-if="!isEng()">XİDMƏTLƏRIMIZ</h3>
                <div class="pages">
                    <p @click="navigate('Airport')">{{ isEng() ? "Airport chauffeur transfer" : "Hava limanı transferi" }}
                    </p>
                    <p @click="navigate('Rent')">{{ isEng() ? "Car Hire" : "Avtomobil Icarəsi" }} </p>
                    <p @click="navigate('Wedding')">{{ isEng() ? "Wedding Car" : "Toy Maşınları" }}</p>
                    <p @click="navigate('Property')">{{ isEng() ? "Property" : "Əmlak" }}</p>
                </div>
            </section>

            <section class="social-links">
                <h3 v-if="isEng()">STAY IN TOUCH</h3>
                <h3 v-if="!isEng()">ƏLAQƏ SAXLA</h3>
                <div class="social-icons">
                    <img src="@/assets/img/whatsapp-icon.webp" alt="WhatsApp Icon" class="wp-icon">
                    <img src="@/assets/img/instagram-icon.webp" alt="Instagram Icon">
                    <img src="@/assets/img/tiktok-icon.webp" alt="TikTok Icon">
                    <img src="@/assets/img/facebook-icon.webp" alt="Facebook Icon" class="fb-icon">
                </div>
            </section>

            <section class="newsletter">
                <h3 v-if="isEng()">NEWSLETTER</h3>
                <h3 v-if="!isEng()">XƏBƏRLƏR</h3>
                <p v-if="isEng()">Sign up today to receive offers and promotions</p>
                <p v-if="!isEng()">Təkliflər və promosyonlar almaq üçün e-poçtunuzu daxil edin</p>
                <div class="input-wrapper">
                    <input type="text" class="email-input" placeholder="Your email..." v-model="email" v-if="isEng()">
                    <input type="email" class="email-input" placeholder="Əlaqə e-poçtunuz" v-model="email" v-if="!isEng()">
                    <button class="subscribe" v-if="isEng()" @click="saveSubscriber()">SUBSCRIBE</button>
                    <button class="subscribe" v-if="!isEng()" @click="saveSubscriber()">ABUNƏ OL</button>
                </div>
                <p id="status-msg">{{ statusMsg }}</p>
            </section>

        </div>

        <div class="sub-pages-container">
            <p @click="navigate('Home')">{{ isEng() ? "Home" : "Ana səhifə" }}</p>
            <p @click="navigate('About')">{{ isEng() ? "About Us" : "Haqqımızda" }}</p>
            <p @click="navigate('Contact')">{{ isEng() ? "Contact Us" : "Əlaqə" }}</p>
            <p @click="navigate('Privacy')">{{ isEng() ? "Privacy Policy" : "Siyasətlərimiz" }}</p>
            <p @click="navigate('Terms')">{{ isEng() ? "Terms & Conditions" : "Şərtlər və qaydalar" }}</p>
            <p @click="navigate('Contact')">{{ isEng() ? "Become a Chauffeur" : "Sürücü ol" }}</p>
        </div>

        <div class="copyright-container">
            <p>&#169; 2023 Lord Concierge. {{ isEng() ? "All Rights Reserved" : "Bütün hüquqlar qorunur" }}</p>
        </div>
    </div>
</template>

<script>
import SubscriberService from '../services/SubscriberService';

export default {
    data() {
        return {
            email: "",
            statusMsg: "",
        }
    },
    methods: {
        navigate(page) {
            switch (page) {
                case "Home":
                    this.$router.push('/');
                    break;
                case "Airport":
                    this.$router.push('/airport-transfer');
                    break;
                case "About":
                    this.$router.push('/about-us');
                    break;
                case "Contact":
                    this.$router.push('/contact-us');
                    break;
                case "Rent":
                    this.$router.push('/luxury-car-hire');
                    break;
                case "Wedding":
                    this.$router.push('/wedding-car-hire');
                    break;
                case "Property":
                    this.$router.push('/property-management');
                    break;
                case "Privacy":
                    this.$router.push('/privacy-policy');
                    break;
                case "Terms":
                    this.$router.push('/terms-conditions');
                    break;
            }
        },
        isEng() {
            return localStorage.getItem('lang') == 'en';
        },
        saveSubscriber() {
            let statusBox = document.getElementById("status-msg");
            if (this.email.length <= 0) {
                statusBox.classList.remove("success");
                this.statusMsg = this.isEng() ? "Please enter an email" : "Email ünvanını daxil edin";
                return;
            } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(this.email)) {
                statusBox.classList.remove("success");
                this.statusMsg = this.isEng() ? "Please enter a valid email" : "Email ünvanı yanlışdir";
                return;
            }

            const data = {
                email: this.email,
            };

            SubscriberService.saveSubscriber(data).then(res => {
                if (res.status == 200) {
                    document.querySelectorAll('button.subscribe').forEach(btn => {
                        btn.classList.add("disabled");
                    });
                    statusBox.classList.add("success");
                    this.statusMsg = this.isEng() ? "Successfully subscribed" : "Uğurla abunə olundu";
                } else {
                    statusBox.classList.remove("success");
                    this.statusMsg = this.isEng() ? "Something went wrong" : "Nəsə xəta baş verdi";
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.footer {
    background: #141414;
    padding: 55px 0 0.7rem 0;
}

.main-container {
    display: flex;
    justify-content: space-between;
    padding: 0 45px;

    h3 {
        color: #FFF;
        font-size: 1.1rem;
        font-family: "Cinzel";
        margin-bottom: 1rem;
    }

    .contact-details {
        .logo {
            width: 17rem;
            margin-bottom: 1.3rem;
        }

        .contact-info {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 0.3rem;

            img {
                width: 0.9rem;
                height: auto;
            }

            p {
                font-family: "Inter";
                font-size: 0.8rem;
                margin: 0;
                margin-bottom: 1px;
            }
        }
    }

    .services {
        .pages p {
            color: #9F9F9F;
            font-size: 0.8rem;
            font-family: "Inter";
            margin-bottom: 0.5rem;
            cursor: pointer;

            &:hover {
                color: #B08500;
            }
        }
    }

    .social-links {
        .social-icons {
            display: flex;
            align-items: center;
            gap: 1rem;

            img {
                width: auto;
                height: 1rem;
                cursor: pointer;
                filter: brightness(0) invert(1);

                &:hover {
                    filter: brightness(0.7) invert(1) sepia(1) saturate(10) hue-rotate(30deg) brightness(1.4) contrast(1.2);
                }
            }

            .wp-icon,
            .fb-icon {
                height: 1.1rem;
            }
        }
    }

    .newsletter {
        p {
            color: #9F9F9F;
            font-size: 12px;
            font-family: "Inter";
            margin-bottom: 0.6rem;
        }

        .input-wrapper {
            display: flex;
            width: 100%;

            .email-input {
                background: #343434;
                width: 60%;
                height: 27px;
                border: 0;
                font-family: "Inter";
                outline: none;
                color: #B08500;
                padding: 5px;
                font-size: 0.8rem;

                &::placeholder {
                    font-size: 0.8rem;
                }
            }

            .subscribe {
                background: #B08500;
                color: #FFF;
                width: 40%;
                height: 27px;
                font-size: 12px;
                font-family: "Inter";
                font-weight: 500;
                border: 0;

                &:hover {
                    opacity: 0.8;
                }

                &.disabled {
                    opacity: 0.5;
                    cursor: default;
                }
            }
        }



    }
}

.sub-pages-container {
    background: #ECECEC;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 3rem;
    padding: 0.5rem 0;
    margin-top: 3rem;

    p {
        color: #000;
        font-size: 12px;
        font-family: "Inter";
        font-weight: 500;
        margin: 0;
        cursor: pointer;

        &:hover {
            color: #B08500;
        }
    }
}

.copyright-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;

    p {
        color: #9F9F9F;
        font-size: 0.8rem;
        font-family: "Inter";
        margin: 0;

    }
}

@media only screen and (max-width: 1024px) {

    .main-container {
        flex-direction: column;
        padding: 0 15px;
        gap: 2.5rem;

        .contact-details {
            display: flex;
            flex-direction: column;

            .logo {
                margin-left: auto;
                margin-right: auto;
                margin-bottom: 2rem;
            }
        }

        .newsletter {
            .input-wrapper {
                .email-input {
                    height: 2rem;
                }

                .subscribe {
                    height: 2rem;
                }
            }
        }
    }

    .sub-pages-container {
        flex-wrap: wrap;
        justify-content: flex-start;
        padding: 15px;
        gap: 2%;

        p {
            width: 48%;
            margin-bottom: 1rem;
        }
    }

    .copyright-container {
        margin-top: 1rem;
    }
}

#status-msg {
    color: #ac1313;
    font-family: "Inter";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
    margin-left: auto;
    margin-right: auto;

    &.success {
        color: #097d15;
    }
}
</style>