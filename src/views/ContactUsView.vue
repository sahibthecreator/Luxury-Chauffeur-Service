<script setup>
import SecondaryButton from '../components/SecondaryButton.vue';
import PrimaryButton from '../components/PrimaryButton.vue';
import SectionHeading from '../components/SectionHeading.vue';
import ServicePreview from '../components/ServicePreview.vue';
import ContactPanel from '../components/ContactPanel.vue';
</script>

<template>
    <div class="about-page">
        <section class="main-image-wrapper">
            <img src="@/assets/img/about-us-main.webp" alt="Airport luxury meet & greet">
            <h1>Contact Us</h1>
        </section>

        <SectionHeading text="get in touch" />

        <section class="contact-form">

            <div class="contact-selection">
                <div class="option">
                    <p>email</p>
                    <span></span>
                </div>
                <div class="option">
                    <p>phone</p>
                    <span class="selected"></span>
                </div>
            </div>
            <label for="">Full Name*</label>
            <input type="text">

            <label for="">Phone*</label>
            <input type="text">

            <label for="">Message*</label>
            <textarea></textarea>

            <div class="btn">
                <p>SEND</p>
            </div>

        </section>



        <div class="contact-line">
            <div>
                <span class="gold-line"></span>

                <h4>Call us on +994 50 777 77 77 or email us on info@lordconcierge.com</h4>
            </div>


            <div class="btn">
                <p>GET IN TOUCH</p>
            </div>
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
            font-size: 2rem;
        }

        p {
            font-family: "Inter", sans-serif;
            line-height: 180.5%;
            letter-spacing: 0.7px;
            font-size: 14px;
            font-weight: 400;
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
    height: 68px;
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
            height: 100%;
            margin-right: 1rem;
        }

        h4 {
            color: #000;
            font-family: Cinzel;
            font-size: 20px;
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
            opacity: 0.9;
        }
    }
}

.contact-form {
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: auto;

    .contact-selection {
        display: flex;
        justify-content: center;
        .option {
            cursor: pointer;
            p {
                color: #FFF;
                font-family: "Cinzel";
                font-size: 10px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                text-align: center;
                margin-bottom: 0.3rem;
            }

            span {
                display: block;
                width: 3.3rem;
                height: 1px;
                opacity: 0.3799999952316284;
                background: #FFF;
                &.selected{
                    opacity: 1;
                }
            }
        }
    }

    label {
        color: #676767;
        font-family: "Inter";
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.24px;
        margin-bottom: 0.5rem;
    }

    input,
    textarea {
        width: 100%;
        background: #ECECEC;
        border: 0;
        resize: none;
        margin-bottom: 2rem;
        outline: none;
        font-size: 12px;
        font-family: "Inter";
        padding: 5px;
    }

    textarea {
        height: 6rem;
    }

    .btn {
        background: #B08500;
        padding: 7px 10px;
        height: fit-content;
        width: 70%;
        margin: auto;
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
            background-color: transparent;
            border: 1px solid #B08500;

            p {
                color: #B08500;
            }
        }
    }
}
</style>