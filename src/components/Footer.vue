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
                    <p>info@lordconcierge.az</p>
                </div>

            </section>

            <section class="services">
                <h3>OUR SERVICES</h3>
                <div class="pages">
                    <p>Airport chauffeur transfer</p>
                    <p>Luxury car hire</p>
                    <p>Wedding car hire</p>
                    <p>Property management</p>
                </div>
            </section>

            <section class="social-links">
                <h3>STAY IN TOUCH</h3>
                <div class="social-icons">
                    <img src="@/assets/img/whatsapp-icon.webp" alt="WhatsApp Icon" class="wp-icon">
                    <img src="@/assets/img/instagram-icon.webp" alt="Instagram Icon">
                    <img src="@/assets/img/tiktok-icon.webp" alt="TikTok Icon">
                    <img src="@/assets/img/facebook-icon.webp" alt="Facebook Icon" class="fb-icon">
                </div>
            </section>

            <section class="newsletter">
                <h3>NEWSLETTER</h3>

                <p>Sign up today to receive offers and promotions</p>
                <div class="input-wrapper">
                    <input type="text" class="email-input" placeholder="Your email...">
                    <button class="subscribe">SUBSCRIBE</button>
                </div>
            </section>
        </div>

        <div class="sub-pages-container">
            <p>Home</p>
            <p>Services</p>
            <p>About us</p>
            <p>Contact us</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Become a Chauffeur</p>
        </div>

        <div class="copyright-container">
            <p>&#169; 2023 Lord Concierge. All Rights Reserved</p>
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
</style>