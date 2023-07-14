<script setup>
</script>

<template>
    <div class="wrapper">
        <section class="details">
            <label for="">Full Name*</label>
            <input type="text" placeholder="Your name">

            <label for="">Phone*</label>
            <input type="text" placeholder="Your phone number">

            <label for="">Message*</label>
            <input type="text" placeholder="Your message">
            <div class="btn">
                <p>SEND</p>
            </div>
        </section>

        <img src="@/assets/img/contact-image.webp" alt="Luxury car interior">

    </div>
</template>

<script>
export default {
    name: "ContactPanel",
    setup() {


        return {}
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    margin: 0 45px;

    .details {
        background: #fbfbfb;
        width: 30%;
        display: flex;
        flex-direction: column;
        padding: 20px 45px;

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

    img {
        width: 70%;
    }


    .btn {
        background: #B08500;
        padding: 7px 10px;
        height: fit-content;
        width: 100%;
        border-radius: 0;
        margin-top: 1rem;
        text-align: center;
        transition: .3s all;

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
    }
}
</style>