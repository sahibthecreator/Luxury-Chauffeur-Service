<script setup>
</script>

<template>
    <div class="about-page">
        <section class="main-image-wrapper">
            <img src="@/assets/img/about-us-main.webp" alt="Airport luxury meet & greet">
            <h1 class="hidden slideRight" v-if="isEng()">About Us</h1>
            <h1 class="hidden slideRight" v-if="!isEng()">Haqqımızda</h1>
        </section>

        <section class="introduction">
            <img class="hidden slideRight" src="@/assets/img/about-us-1.webp" alt="Luxury driver image from rear seats">

            <article class="hidden slideLeft">
                <h1 v-if="isEng()">YOUR ELEGANT CONCIERGE IN AZERBAIJAN</h1>
                <h1 v-if="!isEng()">SİZİN BAKIDA ELEQANT KONSİERJİNİZ</h1>
                <span class="gold-line"></span>
                <p v-if="isEng()">
                    Lord Concierge was established in 2023. In order to accommodate the increasing demand in the luxury
                    chauffeur and self-drive market, Lord Concierge currently owns a magnificent collection of vehicles,
                    including prestigious brands like Rolls
                    Royce, Lamborghini, Mercedes-Benz, and more.
                    <br><br>
                    Our pride comes from providing the best driving experience possible in Baku's most luxurious cars while
                    outstripping many of our rivals' pricing. We guarantee complete quality control because we totally own
                    our fleet of vehicles. Our carefully chosen chauffeurs are highly knowledgeable and skilled, ensuring
                    your safety and enjoyment the entire time.
                </p>
                <p v-if="!isEng()">
                    Lord Concierge 2023-cü ildə təsis edilib. Lux təchizatlı şofyor və özünü sürüş bazarındakı artan
                    tələbatı qarşılamak məqsədilə, Lord Concierge hazırda Rolls Royce, Lamborghini, Mercedes-Benz kimi
                    məşhur markalar daxil olmaqla gözəl nümunələrdən ibarət bir kolleksiya avtomobilə sahibdir.
                    <br><br>
                    Bizim gururumuz, Baku'nun ən lüks maşınlarında ən yaxşı sürüş təcrübəsini təmin etmək və bir çox
                    rəqiblərimizin qiymətlərini üstələməkdir. Biz tamamilə öz maşın flotunu sahibik və buna görə tam
                    keyfiyyət nəzarəti təmin edirik. Təyin olunmuş şoförümüz çox bilikli və bacarıqlıdır, buna görə də
                    təhlükəsizliyinizi və maraqlarınızı başa düşür və təmin edir.
                </p>
            </article>
        </section>

        <section class="introduction">
            <article class="hidden slideRight">
                <h1 v-if="isEng()">Unforgettable Experiences Await</h1>
                <h1 v-if="!isEng()">Unudulmaz Təcrübələr Gözləyir</h1>
                <span class="gold-line"></span>
                <p v-if="isEng()">
                    Our main goal is to provide our customers with a flawless, luxurious transportation experience that
                    makes us stand out from other businesses. This differentiation makes it necessary for our clients to
                    keep coming back to us. We are committed to offering exceptional services to all travelers to our
                    prestigious city of Baku in order to earn their continued business as well as to generate life-changing
                    experiences. We are dedicated to making every journey, whether it be for a job or a pleasure, a
                    treasured memory.
                    <br><br>
                    We have the knowledge and experience to recommend and prioritize bookings for only the most
                    extraordinary venues, events, and places that our city has to offer, from securing the best hotels in
                    town to directing you to the trendiest clubs in Baku
                </p>
                <p v-if="!isEng()">

                    Əsas məqsədimiz müştərilərimizə digər işlərdən fərqli bir şəkildə, pürüzsüz və lüks nəqliyyat təcrübəsi
                    yaşatmaqdır. Bu fərqlilik müştərilərimizin bizə geri qayıtmağa davam etmələrini tələb edir. Biz Baku
                    şəhərimizin məşhur şəhəri olan bütün səyahətçilərə istisna edilmiş xidmət göstərməyə söz veririk,
                    onların davam edən işini əldə etmək və həyatı dəyişdirən təcrübələr yaratmaq üçün. Hər bir səyahəti, iş
                    olsun, zövq olsun, qıymətli xatirə etmək üçün təkidliyik.
                    <br><br>
                    Bakımızın təklif etdiyi ən maraqlı məkanları, tədbirləri və yerləri təklif etmək və sifarişləri tərtib
                    etmək üçün bilgi və təcrübəmiz var, ən yaxşı otelləri təmin edərkən Bakıda ən moda klublarına
                    yönəldirik.
                </p>
            </article>

            <img class="hidden slideLeft" src="@/assets/img/about-us-2.webp" alt="Luxury driver image from rear seats">
        </section>

        <div class="contact-line hidden">
            <div>
                <span class="gold-line"></span>

                <h4 v-if="isEng()">Call us on +994 50 777 77 77 or email us on info@lordconcierge.com</h4>
                <h4 v-if="!isEng()">Bizə +994 50 777 77 77 nömrəsində zəng edə bilərsiniz və ya info@lordconcierge.com email göndərə bilərsiniz.</h4>
            </div>

            <div class="btn" @click="openContactPage">
                <p v-if="isEng()">GET IN TOUCH</p>
                <p v-if="!isEng()">ƏLAQƏ SAXLA</p>
            </div>
        </div>


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
        openContactPage() {
            this.$router.push('/contact-us');
        },
        isEng() {
            return localStorage.getItem('lang') == 'en';
        },
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
            margin-right: 1rem;
        }

        h4 {
            color: #000;
            font-family: Cinzel;
            font-size: 1.1rem;
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

        &:hover {
            background-color: transparent;
            border: 1px solid #B08500;

            p {
                color: #B08500;
            }
        }
    }
}

@media only screen and (max-width: 1024px) {
    .about-page {
        padding-top: 1rem;

        .main-image-wrapper {
            text-align: center;

            img {
                object-fit: cover;
            }

            h1 {
                font-size: 1.8rem;
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

        .contact-line {
            padding: 15px;
            flex-direction: column;
            height: fit-content;
            text-align: center;

            div h4 {

                font-size: 1rem;
            }

            .btn {
                margin-top: 1.5rem;
            }
        }

    }
}</style>