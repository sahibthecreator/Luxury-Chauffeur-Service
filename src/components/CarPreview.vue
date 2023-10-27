<script setup>
import PrimaryButton from './PrimaryButton.vue';
</script>
<template>
    <div class="wrapper">

        <img v-if="!inverted == 1" :src="'/../api/public/car_images/' + car.car_image + '?s'" alt="Airport luxury meet & greet service car">
        <div class="text-wrapper">
            <h1>{{ car.name }}</h1>
            <span class="gold-line"></span>
            <p>
                {{ isEng() ? car?.description : car?.description_az }}
            </p>
            <PrimaryButton text="VIEW THIS CAR" class="btn" @click="navigateToCarPage()" v-if="isEng()"/>
            <PrimaryButton text="DAHA ƏTRAFLI" class="btn" @click="navigateToCarPage()" v-if="!isEng()"/>
        </div>
        <img v-if="inverted == 1" :src="'/../api/public/car_images/' + car.car_image + '?s'" alt="Airport luxury meet & greet">
    </div>
</template>

<script>
export default {
    props: {
        inverted: Number,
        car: Object,
    },
    methods: {
        navigateToCarPage() {
            this.$router.push({ path: `/details/${this.car.name}`, query: { id: this.car.id } })
        },
        isEng() {
            return localStorage.getItem('lang') == 'en';
        },
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    width: 100%;
    display: flex;

    img {
        width: 60%;
        object-fit: cover;
        filter: brightness(0.7);
    }

    .text-wrapper {
        width: 40%;
        background: #ECECEC;
        padding: 25px 40px 25px 25px;
        display: flex;
        flex-direction: column;

        h1 {
            color: #000;
            font-size: 24px;
            font-family: "Cinzel";
            font-weight: 700;
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
            line-height: 145%;
            letter-spacing: 0.6px;
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
            width: 100%;
            order: 2;

            .gold-line {
                margin-bottom: 1rem;
            }

            .btn {
                margin-top: 0;
            }
        }
    }
}
</style>