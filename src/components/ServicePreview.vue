<script setup>
import PrimaryButton from './PrimaryButton.vue';
</script>
<template>
    <div class="wrapper">

        <img v-if="!inverted && image == 1" src="@/assets/img/service-1.webp" alt="Lord Concierge services">
        <img v-if="!inverted && image == 2" src="@/assets/img/service-2.webp" alt="Lord Concierge services">
        <img v-if="!inverted && image == 3" src="@/assets/img/service-3.webp" alt="Lord Concierge services">
        <img v-if="!inverted && image == 4" src="@/assets/img/service-4.webp" alt="Lord Concierge services">
        <div class="text-wrapper">
            <h1>{{ title }}</h1>
            <span class="gold-line"></span>
            <p>
                {{ desc }}
            </p>
            <PrimaryButton text="READ MORE" class="btn" @click="openDetailedPage" v-if="isEng()"/>
            <PrimaryButton text="DAHA ƏTRAFLI" class="btn" @click="openDetailedPage" v-if="!isEng()"/>
        </div>
        <img v-if="inverted && image == 1" src="@/assets/img/service-1.webp" alt="Lord Concierge services">
        <img v-if="inverted && image == 2" src="@/assets/img/service-2.webp" alt="Lord Concierge services">
        <img v-if="inverted && image == 3" src="@/assets/img/service-3.webp" alt="Lord Concierge services">
        <img v-if="inverted && image == 4" src="@/assets/img/service-4.webp" alt="Lord Concierge services">
    </div>
</template>

<script>
export default {
    name: "ServicePreview",
    props: {
        serviceName: String,
        description: String,
        image: String,
        inverted: Boolean
    },
    data() {
        return {
            title: "",
            desc: ""
        }
    },
    mounted() {
        if (localStorage.getItem('lang') == 'az') {
            this.translateToAze();
        } else {
            this.title = this.serviceName;
            this.desc = this.description;
        }
    },
    methods: {
        openDetailedPage() {
            switch (this.serviceName) {
                case "Airport chauffeur transfer":
                    this.$router.push('/airport-transfer');
                    break;
                case "Luxury car hire":
                    this.$router.push('/luxury-car-hire');
                    break;
                case "Wedding car hire":
                    this.$router.push('/wedding-car-hire');
                    break;
                case "Property management":
                    this.$router.push('/property-management');
                    break;
            }
        },
        translateToAze() {
            switch (this.serviceName) {
                case "Airport chauffeur transfer":
                    this.title = "Hava Limanı Transferi";
                    this.desc = "Lord Concierge Baku şəhərində öncülük edən bir premium sürücü icarəsi şirkətidir və yüksək keyfiyyətli sürücü müxtəlif tələblərə cavab verən böyük avtomobil parkına malikdir.";
                    break;
                case "Luxury car hire":
                    this.title = "Luks avtomobil icarəsi";
                    this.desc = "Lord Concierge hər müştəri təcrübəsini əlavə xüsusi edir. Premium avtomobil kirayəmizlə ən yüksək səviyyədə müştəri qayğısı və ən yaxşı vasitələr təmin edilir.";
                    break;
                case "Wedding car hire":
                    this.title = "Toy avtomobili icarəsi";
                    this.desc = "Lord Concierge Bakıda toy avtomobillərinin icarəsi üzrə aparıcı şirkətdir və bütün ehtiyaclara cavab verən möhteşem avtomobil parkına malikdir.";
                    break;
                case "Property management":
                    this.title = "Mülkiyyət idarəetməsi";
                    this.desc = "Lord Concierge hər bir müştəri təcrübəsini əlavə xüsusi etməyə çalışır. Bizim əmlakın icarəyə verilməsi və alınması ilə siz ən yüksək səviyyədə rahatlığa əmin ola bilərsiniz.";
                    break;
            }
        },
        isEng() {
            return localStorage.getItem('lang') == 'en';
        },
    },

}
</script>

<style lang="scss" scoped>
.wrapper {
    width: 100%;
    display: flex;
    height: 20rem;

    img {
        width: 65%;
        filter: brightness(0.7);
        object-fit: cover;
    }

    .text-wrapper {
        background: #ECECEC;
        padding: 2rem 4rem 2rem 2rem;
        display: flex;
        flex-direction: column;

        h1 {
            color: #000;
            font-size: 24px;
            font-weight: 500;
            margin: 0;
        }

        .gold-line {
            display: block;
            background: #B08500;
            width: 8rem;
            height: 2px;
            margin-bottom: 2rem;
        }

        p {
            margin: 1rem 0 2rem 0;
            color: #000;
            font-size: 12px;
            font-family: "Inter";
            line-height: 163%;
            letter-spacing: 0.7px;
            margin: 0;
        }
    }

    .btn {
        margin: auto;
        margin-left: 0;
        margin-bottom: 0;
        margin-right: 0;
    }
}

@media only screen and (max-width: 1024px) {

    .wrapper {
        flex-direction: column;
        height: fit-content;

        img {
            width: 100%;
            order: 1;
        }

        .text-wrapper {
            order: 2;

            .gold-line {
                margin-bottom: 1rem;
            }

            .btn {
                margin-top: 2rem;
            }
        }
    }
}
</style>