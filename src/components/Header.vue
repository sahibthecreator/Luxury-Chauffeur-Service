<template>
    <div class="header desktop">

        <section class="contact-panel">
            <div class="phone-section">
                <img src="@/assets/img/gold-phone-icon.webp" alt="Phone Icon" class="img-fluid">
                <p>+994 55 777 77 77</p>
            </div>
            <div class="lang">
                <p @click="switchLang('az')" class="lang_selector">AZ</p>
                <span class="gold-line"></span>
                <p @click="switchLang('en')" class="lang_selector">EN</p>
            </div>
            <div class="social-icons">
                <img src="@/assets/img/whatsapp-icon.webp" alt="WhatsApp Icon" class="wp-icon">
                <img src="@/assets/img/instagram-icon.webp" alt="Instagram Icon">
                <img src="@/assets/img/tiktok-icon.webp" alt="TikTok Icon">
                <img src="@/assets/img/facebook-icon.webp" alt="Facebook Icon" class="fb-icon">
            </div>
        </section>

        <section class="nav">
            <p @click="navigate('Home')">{{ isEng() ? "Home" : "Ana səhifə" }}</p>
            <p @click="navigate('About')">{{ isEng() ? "About Us" : "Haqqımızda" }}</p>
            <p @click="navigate('Contact')">{{ isEng() ? "Contact Us" : "Əlaqə" }}</p>
            <p @click="navigate('Airport')">{{ isEng() ? "Airport Transfer" : "Hava Limanı Transferi" }}</p>
            <div class="rectangle-wrapper">
                <svg class="rectangle" width="273" height="49" viewBox="0 0 273 49" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M220.404 49L273 0H0L43.0789 49H220.404Z" fill="#141414" />
                </svg>
                <img src="@/assets/img/logo.webp" alt="Lord Concierge Logo" class="img-fluid" @click="navigate('Home')">
            </div>
            <p @click="navigate('Rent')">{{ isEng() ? "Car Hire" : "Avtomobil Icarəsi" }} </p>
            <p @click="navigate('Wedding')">{{ isEng() ? "Wedding Car" : "Toy Maşınları" }}</p>
            <p @click="navigate('Property')">{{ isEng() ? "Property" : "Əmlak" }}</p>
            <img @click="navigate('Login')" src="@/assets/img/user-icon.webp" alt="User Icon" class="img-fluid user-icon">
        </section>
    </div>

    <div class="navbar mobile">
        <div class="container nav-container">
            <input class="checkbox" type="checkbox" id="hamburger-checkbox" @click="toggleScrolling" />
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <div class="logo">
                <img src="@/assets/img/logo.webp" alt="Lord Concierge Logo" @click="navigate('Home')">
            </div>
            <div class="menu-items nav">
                <p @click="navigate('Home')">{{ isEng() ? "Home" : "Ana səhifə" }}</p>
                <p @click="navigate('About')">{{ isEng() ? "About Us" : "Haqqımızda" }}</p>
                <p @click="navigate('Contact')">{{ isEng() ? "Contact Us" : "Əlaqə" }}</p>
                <p @click="navigate('Airport')">{{ isEng() ? "Airport Transfer" : "Hava Limanı Transferi" }}</p>
                <p @click="navigate('Rent')">{{ isEng() ? "Car Hire" : "Avtomobil Icarəsi" }} </p>
                <p @click="navigate('Wedding')">{{ isEng() ? "Wedding Car" : "Toy Maşınları" }}</p>
                <p @click="navigate('Property')">{{ isEng() ? "Property" : "Əmlak" }}</p>
                <img @click="navigate('Login')" src="@/assets/img/user-icon.webp" alt="User Icon" class="img-fluid">
                <div class="lang">
                    <p @click="switchLang('az')" class="lang_selector">AZ</p>
                    <span class="gold-line"></span>
                    <p @click="switchLang('en')" class="lang_selector">EN</p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import VisitService from '../services/VisitService';

export default {
    name: "Header",
    data() {
        return {
            isScrollingDisabled: false
        }
    },
    mounted() {
        this.highlightCurrentPage();
        if (!localStorage.getItem('lang'))
            localStorage.setItem('lang', 'az') // set default language to az

        // highlight selected language
        document.querySelectorAll(".lang_selector").forEach(function (p) {
            if (localStorage.getItem('lang') == p.innerText.toLowerCase()) {
                p.classList.add("active");
            }
        })


        if (!this.isEng()) {
            document.querySelectorAll(".nav").forEach(function (nav) {
                nav.classList.add("az");
            })
            document.getElementById("app").style.fontFamily = "Spectral SC, sans-serif";
        } else {
            document.querySelectorAll(".nav").forEach(function (nav) {
                nav.classList.remove("az");
            })
            document.getElementById("app").style.fontFamily = "Cinzel, sans-serif";
        }
    },
    methods: {
        switchLang(lang, event) {
            localStorage.setItem('lang', lang);
            location.reload();
        },
        isEng() {
            return localStorage.getItem('lang') == 'en';
        },
        isMobile() {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true
            } else {
                return false
            }
        },
        navigate(page) {
            if (this.isMobile) {
                document.body.classList.remove('disable-scroll');
                this.isScrollingDisabled = false;
            }
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
                case "Login":
                    if (localStorage.getItem('id') == null)
                        this.$router.push('/authentication');
                    else
                        this.$router.push('/my-account');
                    break;
            }
            document.querySelectorAll(".nav p").forEach(e => {
                e.classList.remove("selected");
                if (e.innerText.startsWith(page)) {
                    e.classList.add("selected");
                }
            });
            document.getElementById("hamburger-checkbox").checked = false;
        },
        highlightCurrentPage() {
            var url = window.location.href;
            var page = url.substring(url.lastIndexOf("/") + 1, url.length);

            document.querySelectorAll(".nav p").forEach(e => {
                e.classList.remove("selected");
            });

            switch (page) {
                case "":
                    document.querySelectorAll(".nav p")[0].classList.add("selected");
                    break;
                case "about-us":
                    document.querySelectorAll(".nav p")[1].classList.add("selected");
                    break;
                case "contact-us":
                    document.querySelectorAll(".nav p")[2].classList.add("selected");
                    break;
                case "airport-transfer":
                    document.querySelectorAll(".nav p")[3].classList.add("selected");
                    break;
                case "luxury-car-hire":
                    document.querySelectorAll(".nav p")[4].classList.add("selected");
                    break;
                case "wedding-car-hire":
                    document.querySelectorAll(".nav p")[5].classList.add("selected");
                    break;
                case "property-management":
                    document.querySelectorAll(".nav p")[6].classList.add("selected");
                    break;
            }
        },
        toggleScrolling() {
            this.isScrollingDisabled = !this.isScrollingDisabled;

            // Add or remove the 'disable-scroll' class based on the 'isScrollingDisabled' flag
            if (this.isScrollingDisabled) {
                document.body.classList.add('disable-scroll');
            } else {
                document.body.classList.remove('disable-scroll');
            }
        },
        saveVisit() {
            var path = window.location.href;
            var page = path.split("/").pop();
            let deviceType = this.isMobile() ? "Mobile" : "Desktop";
            page = page == "" ? "Home" : page;

            const data = {
                page: page,
                device: deviceType,
            };

            VisitService.saveVisit(data).then(res => {
                if (res.status == 200) {
                } else {
                }
            })
        }
    },
    watch: {
        '$route'(to, from) {
            this.highlightCurrentPage();
            this.saveVisit();
        }

    }
}
</script>
<style scoped lang="scss">
.header,
.header * {
    box-sizing: border-box;
}

.header {
    position: fixed;
    top: 0;
    inset: 0;
    z-index: 100;
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.contact-panel {
    background: #141414;
    width: 100%;
    height: fit-content;
    padding: 6px 45px;
    display: flex;

    .phone-section {
        display: flex;
        align-items: center;
        gap: 8px;

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

    .lang {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        margin-left: auto;
        margin-right: 4rem;

        .gold-line {
            background-color: #B08500;
            width: 1px;
            height: 60%;
        }

        p {
            font-family: "Inter";
            font-size: 0.8rem;
            margin: 0;
            margin-bottom: 1px;
            color: white;
            cursor: pointer;

            &.active {
                color: #B08500;
            }

            &:hover {
                text-decoration: underline;
            }
        }
    }

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

.nav {
    width: 100%;
    padding: 0 45px;
    gap: 3rem;
    background-color: #141414a1;

    &.az {
        p {
            font-family: 'Spectral SC', sans-serif;
        }
    }

    p {
        font-family: "Cinzel";
        font-size: 14px;
        color: #FFF;
        margin-top: 0.5rem;
        cursor: pointer;

        &:hover {
            color: #B08500;
        }

        &.selected {
            color: #B08500;
        }
    }

    img {
        height: 1.2rem;
        width: auto;
        cursor: pointer;
    }

    .user-icon {
        margin-top: 0.5rem;
    }

    .rectangle-wrapper {
        margin-left: auto;
        margin-right: auto;
        position: relative;
        display: flex;
        justify-content: center;

        img {
            position: absolute;
            top: -2rem;
            width: 12rem;
            height: auto;
            cursor: pointer;
        }
    }
}

@media only screen and (max-width: 1330px) {
    .container {
        max-width: 1330px;
        width: 100%;
        padding: 0;
        margin: auto;
    }

    .navbar {
        width: 100%;
        box-shadow: 0 1px 4px rgb(146 161 176 / 15%);
    }

    .nav-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 62px;
    }

    .navbar .menu-items {
        display: flex;
        z-index: 1000;
        margin-top: -8px;

        .lang {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-left: auto;
            margin-right: auto;

            .gold-line {
                background-color: #B08500;
                width: 1px;
                height: 60%;
            }

            p {
                font-family: "Inter";
                font-size: 0.8rem;
                margin: 0;
                margin-bottom: 1px;
                cursor: pointer;
                color: black;

                &.active {
                    color: #B08500;
                }

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }

    .navbar .nav-container li {
        list-style: none;
    }

    .navbar .nav-container a {
        text-decoration: none;
        color: #0e2431;
        font-weight: 500;
        font-size: 1.2rem;
        padding: 0.7rem;
    }

    .navbar .nav-container a:hover {
        font-weight: bolder;
    }

    .nav-container {
        display: block;
        position: relative;
        height: 60px;
    }

    .nav-container .checkbox {
        position: absolute;
        display: block;
        height: 32px;
        width: 32px;
        top: 16px;
        left: 16px;
        z-index: 5;
        opacity: 0;
        cursor: pointer;
        z-index: 2100;
    }

    .nav-container .hamburger-lines {
        display: block;
        height: 26px;
        width: 32px;
        position: absolute;
        top: 17px;
        left: 20px;
        z-index: 2;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        z-index: 2000;
    }

    .nav-container .hamburger-lines .line {
        display: block;
        height: 3px;
        width: 100%;
        border-radius: 10px;
        background: #B08500;
    }

    .nav-container .hamburger-lines .line1 {
        transform-origin: 0% 0%;
        transition: transform 0.4s ease-in-out;
    }

    .nav-container .hamburger-lines .line2 {
        transition: transform 0.2s ease-in-out;
    }

    .nav-container .hamburger-lines .line3 {
        transform-origin: 0% 100%;
        transition: transform 0.4s ease-in-out;
    }

    .navbar .menu-items {
        padding-top: 20%;
        padding-bottom: 20%;
        background-color: rgb(240, 240, 240);
        height: 100vh;
        width: 100%;
        transform: translate(-150%);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 50px;
        transition: transform 0.5s ease-in-out;
        text-align: center;
    }

    .navbar .menu-items {
        p {
            font-size: 1rem;
            font-weight: 500;
            color: black;
            margin: 0;

            &.selected {
                color: #B08500;
            }
        }

        img {
            height: 0.9rem;
            width: 0.9rem;
            margin-left: auto;
            margin-right: auto;
        }
    }

    .logo {
        position: absolute;
        // top: 12px;
        display: flex;
        width: 100%;
        height: 100%;

        img {
            width: auto;
            height: 100%;
            margin: auto;
        }
    }



    .nav-container input[type="checkbox"]:checked~.menu-items {
        transform: translateX(0);
    }

    .nav-container input[type="checkbox"]:checked~.hamburger-lines .line1 {
        transform: rotate(45deg);
    }

    .nav-container input[type="checkbox"]:checked~.hamburger-lines .line2 {
        transform: scaleY(0);
    }

    .nav-container input[type="checkbox"]:checked~.hamburger-lines .line3 {
        transform: rotate(-45deg);
    }

    .nav-container input[type="checkbox"]:checked~.logo {
        display: none;
    }
}

@media only screen and (max-width: 1330px) {
    .navbar.mobile {
        display: block;
    }

    .header.desktop {
        display: none;
    }
}

@media only screen and (min-width: 1330px) {
    .navbar.mobile {
        display: none;
    }

    .header.desktop {
        display: block;
    }
}
</style>
