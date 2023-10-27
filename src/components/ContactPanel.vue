<script setup>
</script>

<template>
    <div class="wrapper">
        <section class="details">
            <label for="" v-if="isEng()">Full Name*</label>
            <label for="" v-if="!isEng()">Ad ve Soyad*</label>
            <input type="text" placeholder="Your name" v-model="fullName" v-if="isEng()">
            <input type="text" placeholder="Adınız ve Soyadınız" v-model="fullName" v-if="!isEng()">


            <label for="" v-if="isEng()">Phone*</label>
            <label for="" v-if="!isEng()">Telefon Nömrəsi*</label>
            <input type="text" placeholder="Your phone number" v-model="phone" v-if="isEng()">
            <input type="text" placeholder="Telefon nömrəniz" v-model="phone" v-if="!isEng()">

            <label for="" v-if="isEng()">Message*</label>
            <label for="" v-if="!isEng()">Mesaj*</label>
            <input type="text" placeholder="Your message" v-model="message" v-if="isEng()">
            <input type="text" placeholder="Mesajınız" v-model="message" v-if="!isEng()">
            <div class="btn" id="send-message-btn" @click="saveMessage()">
                <p v-if="isEng()">SEND</p>
                <p v-if="!isEng()">GÖNDERMEK</p>
            </div>
            <div id="status-box">
                <p>{{ statusMsg }}</p>
            </div>
        </section>

        <img src="@/assets/img/contact-image.webp" alt="Luxury car interior">

    </div>
</template>

<script>
import ContactUsService from '../services/ContactUsService';

export default {
    name: "ContactPanel",
    data() {
        return {
            statusMsg: "",
            fullName: "",
            phone: "",
            message: "",
        }
    },
    methods: {
        saveMessage() {
            let statusBox = document.getElementById("status-box");
            if (!(this.fullName.length > 0 && this.phone.length > 0 && this.message.length > 0)) {
                statusBox.style.opacity = 1;
                statusBox.classList.remove("success");
                this.statusMsg = "Please fill all the fields";
                return;
            }

            let data = {
                "fullName": this.fullName,
                "email": null,
                "phone": this.phone,
                "message": this.message,
            }

            ContactUsService.saveMessage(data).then(res => {
                statusBox.style.opacity = 1;
                if (res.status == 200) {
                    statusBox.classList.add("success");
                    this.statusMsg = "Message was sent successfully";
                    document.getElementById("send-message-btn").classList.add("disabled");
                } else {
                    statusBox.classList.remove("success");
                    this.statusMsg = res.data;
                }
            })
        },
        isEng() {
            return localStorage.getItem('lang') == 'en';
        },
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
            border-radius: 0;
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
        border: 1px solid transparent;

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

        &.disabled {
            opacity: 0.5;
            cursor: default;

            &:hover {
                background-color: #B08500;
                border: 1px solid transparent;
            }
        }
    }
}

#status-box {
    display: flex;
    justify-content: center;
    background: #a00b0b;
    border-radius: 0;
    width: 100%;
    height: fit-content;
    padding: 10px;
    opacity: 0;
    margin-top: 1rem;

    p {
        color: #FFF;
        font-family: "Inter";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin: 0;
        margin-left: auto;
        margin-right: auto;
    }

    &.success {
        background: #097d15;
    }
}

@media only screen and (max-width: 1024px) {

    .wrapper {
        flex-direction: column;
        height: fit-content;
        margin: 0 15px;

        .details {
            width: 100%;
            order: 2;
        }

        img {
            width: 100%;
            order: 1;
        }
    }
}
</style>