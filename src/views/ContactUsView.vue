<script setup>
import SectionHeading from '../components/SectionHeading.vue';
</script>

<template>
    <div class="about-page">
        <section class="main-image-wrapper">
            <img src="@/assets/img/about-us-main.webp" alt="Airport luxury meet & greet">
            <h1 class="hidden" ref="contactPanel" v-if="isEng()">Contact Us</h1>
            <h1 class="hidden" ref="contactPanel" v-if="!isEng()">Bizimlə Əlaqə saxlayın</h1>
        </section>

        <SectionHeading text="get in touch" v-if="isEng()" class="hidden delay-1"/>
        <SectionHeading text="Əlaqə saxlayın" v-if="!isEng()" />
        
        <section class="contact-form hidden delay-2">

            <div class="contact-selection">
                <div class="option" @click="switchContactOption">
                    <p>email</p>
                    <span id="email-option-span" class="selected"></span>
                </div>
                <div class="option" @click="switchContactOption">
                    <p>phone</p>
                    <span id="phone-option-span"></span>
                </div>
            </div>
            <label v-if="isEng()">Full Name*</label>
            <label v-if="!isEng()">Ad ve Soyad*</label>
            <input type="text" placeholder="Your full name" v-model="fullName" v-if="isEng()">
            <input type="text" placeholder="Adınız ve Soyadınız" v-model="fullName" v-if="!isEng()">

            <label v-if="isEmailOption">Email*</label>
            <input type="email" placeholder="Your contact email" v-model="email" v-if="isEmailOption && isEng()">
            <input type="email" placeholder="Əlaqə Email ünvanı" v-model="email" v-if="isEmailOption && !isEng()">

            <label for="" v-if="isEng() && !isEmailOption">Phone*</label>
            <label for="" v-if="!isEng() && !isEmailOption">Telefon Nömrəsi*</label>
            <input type="text" placeholder="Your contact phone" v-model="phone" v-if="!isEmailOption && isEng()">
            <input type="text" placeholder="Telefon nömrəniz" v-model="phone" v-if="!isEmailOption && !isEng()">

            <label for="" v-if="isEng()">Message*</label>
            <label for="" v-if="!isEng()">Mesaj*</label>
            <textarea placeholder="How can we help you?" v-model="message" v-if="isEng()"></textarea>
            <textarea placeholder="Sizə necə kömək edə bilərik?" v-model="message" v-if="!isEng()"></textarea>

            <div id="status-box">
                <p>{{ statusMsg }}</p>
            </div>

            <div class="btn" id="send-message-btn" @click="saveMessage">
                <p v-if="isEng()">SEND</p>
                <p v-if="!isEng()">GÖNDERMEK</p>
            </div>

        </section>



        <div class="contact-line hidden">
            <div>
                <span class="gold-line"></span>

                <h4 v-if="isEng()">Call us on +994 50 777 77 77 or email us on info@lordconcierge.com</h4>
                <h4 v-if="!isEng()">Bizə +994 50 777 77 77 nömrəsində zəng edə bilərsiniz və ya info@lordconcierge.com email
                    göndərə bilərsiniz.</h4>
            </div>


            <div class="btn" @click="scrollToContact">
                <p v-if="isEng()">GET IN TOUCH</p>
                <p v-if="!isEng()">ƏLAQƏ SAXLA</p>
            </div>
        </div>


    </div>
</template>

<script>
import ContactUsService from '../services/ContactUsService';

export default {
    data() {
        return {
            isEmailOption: true,
            statusMsg: "",
            fullName: "",
            email: "",
            phone: "",
            message: "",
        }
    },
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
        switchContactOption() {
            if (this.isEmailOption) {
                this.isEmailOption = false;
                document.getElementById("email-option-span").classList.remove("selected");
                document.getElementById("phone-option-span").classList.add("selected");
            } else {
                this.isEmailOption = true;
                document.getElementById("phone-option-span").classList.remove("selected");
                document.getElementById("email-option-span").classList.add("selected");
            }
        },
        scrollToContact() {
            this.$refs.contactPanel.scrollIntoView({ behavior: 'smooth' });
        },
        saveMessage() {
            let statusBox = document.getElementById("status-box");
            if (!(this.fullName.length > 0 && (this.email.length > 0 || this.phone.length > 0) && this.message.length > 0)) {
                statusBox.style.opacity = 1;
                statusBox.classList.remove("success");
                this.statusMsg = "Please fill all the fields";
                return;
            }

            let data = {
                "fullName": this.fullName,
                "email": this.email,
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
        border: 1px solid transparent;

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

                &.selected {
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
        border: 1px solid transparent;

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



        .contact-form {
            padding: 0 15px;
            width: 100%;
            margin-top: -0.5rem;
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
}
</style>