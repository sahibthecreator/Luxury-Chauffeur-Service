<script setup>
import PrimaryButton from './PrimaryButton.vue';
</script>
<template>
    <div class="wrapper">

        <img v-if="!inverted" :src="image" alt="Airport luxury meet & greet">
        <div class="text-wrapper">
            <h1>{{ carName }}</h1>
            <span class="gold-line"></span>
            <p>
                {{ description }}
            </p>
            <PrimaryButton text="VIEW THIS CAR" />
        </div>
        <img v-if="inverted" :src="image" alt="Airport luxury meet & greet">
    </div>
</template>

<script>
export default {
    props: {
        carName: String,
        description: String,
        image: String,
        inverted: Boolean
    },
    setup() {


        return {}
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    width: 100%;
    display: flex;

    img {
        width: 60%;
        filter: brightness(0.7);
    }

    .text-wrapper {
        width: 40%;
        background: #ECECEC;
        padding: 25px 40px 25px 25px;

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
}
</style>