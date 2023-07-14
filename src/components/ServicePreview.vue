<script setup>
import PrimaryButton from './PrimaryButton.vue';
</script>
<template>
    <div class="wrapper">

        <img v-if="!inverted" :src="image" alt="Lord Concierge services">
        <div class="text-wrapper">
            <h1>{{ serviceName }}</h1>
            <span class="gold-line"></span>
            <p>
                {{ description }}
            </p>
            <PrimaryButton text="BOOK NOW" class="btn" />
        </div>
        <img v-if="inverted" :src="image" alt="Lord Concierge services">
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
    setup() {


        return {}
    }
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
            font-family: "Cinzel";
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
</style>