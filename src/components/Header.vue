<template>
    <div class="header">

        <section class="contact-panel">
            <div class="phone-section">
                <img src="@/assets/img/gold-phone-icon.webp" alt="Phone Icon" class="img-fluid">
                <p>+994 55 777 77 77</p>
            </div>
            <div class="social-icons">
                <img src="@/assets/img/whatsapp-icon.webp" alt="WhatsApp Icon" class="wp-icon">
                <img src="@/assets/img/instagram-icon.webp" alt="Instagram Icon">
                <img src="@/assets/img/tiktok-icon.webp" alt="TikTok Icon">
                <img src="@/assets/img/facebook-icon.webp" alt="Facebook Icon" class="fb-icon">
            </div>
        </section>

        <section class="nav">
            <p @click="navigate('Home')">Home</p>
            <p @click="navigate('About')">About Us</p>
            <p @click="navigate('Contact')"> Contact Us</p>
            <p @click="navigate('Airport')">Airport Transfer</p>
            <div class="rectangle-wrapper">
                <svg class="rectangle" width="273" height="49" viewBox="0 0 273 49" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M220.404 49L273 0H0L43.0789 49H220.404Z" fill="#141414" />
                </svg>
                <img src="@/assets/img/logo.webp" alt="Lord Concierge Logo" class="img-fluid">
            </div>
            <p @click="navigate('Rent')">Rent Car</p>
            <p @click="navigate('Wedding')">Wedding Car</p>
            <p @click="navigate('Property')">Property</p>
            <img src="@/assets/img/user-icon.webp" alt="User Icon" class="img-fluid">
        </section>



    </div>
</template>
  
<script>
export default {
    name: "Header",
    data() {
        return {
        }
    },
    mounted() {
        var url = window.location.href;
        var page = url.substring(url.lastIndexOf("/") + 1, url.length);
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
            case "car-rent":
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
    methods: {
        navigate(page) {
            //console.log(this.$route.name);

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
                    this.$router.push('/car-rent');
                    break;
                case "Wedding":
                    this.$router.push('/wedding-car-hire');
                    break;
                case "Property":
                    this.$router.push('/property-management');
                    break;
            }
            document.querySelectorAll(".nav p").forEach(e => {
                e.classList.remove("selected");
                if (e.innerText.startsWith(page)) {
                    e.classList.add("selected");
                }
            });
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
    justify-content: space-between;

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
        margin-top: 0.5rem;
        height: 1.2rem;
        width: auto;
        cursor: pointer;
    }

    .rectangle-wrapper {
        margin-left: auto;
        margin-right: auto;
        position: relative;
        display: flex;
        justify-content: center;

        img {
            position: absolute;
            top: -1rem;
            width: 12rem;
            height: auto;
            cursor: pointer;
        }
    }
}
</style>
