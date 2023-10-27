<template>
    <div class="wrapper">
        <img src="@/assets/img/auth-main.webp" alt="Bentley car image" class="main-image">

        <section class="input-panel">
            <img src="@/assets/img/logo.webp" alt="Bentley car image" class="logo">
            <div class="auth-options">
                <div class="option" @click="switchAuthOptions()">
                    <p v-if="isEng()">Log in</p>
                    <p v-if="!isEng()">Giriş</p>
                    <span id="login-option-span" class="selected"></span>
                </div>
                <div class="option" @click="switchAuthOptions()">
                    <p v-if="isEng()">Register</p>
                    <p v-if="!isEng()">Qeydiyyat</p>
                    <span id="register-option-span"></span>
                </div>
            </div>

            <input type="text" placeholder="Full Name" v-if="!isLogin && isEng()" v-model="fullName" />
            <input type="text" placeholder="Adınız ve Soyadınız" v-if="!isLogin && !isEng()" v-model="fullName" />

            <input type="email" placeholder="Email" v-model="email" v-if="isEng()"/>
            <input type="email" placeholder="Email ünvanı" v-model="email" v-if="!isEng()"/>

            <input type="text" placeholder="Phone" v-if="!isLogin && isEng()" v-model="phone" />
            <input type="text" placeholder="Telefon nömrəniz" v-if="!isLogin && !isEng()" v-model="phone" />

            <input type="text" placeholder="Occupation" v-if="!isLogin && isEng()" v-model="occupation" />
            <input type="text" placeholder="Peşə" v-if="!isLogin && !isEng()" v-model="occupation" />

            <input type="password" placeholder="Password" v-model="password"  v-if="isEng()"/>
            <input type="password" placeholder="Şifrəniz" v-model="password"  v-if="!isEng()"/>


            <div class="btn" @click="register" v-if="!isLogin">
                <p v-if="isEng()">Register</p>
                <p v-if="!isEng()">Qeydiyyatdan keçin</p>
                <img src="@/assets/img/right-arrow.webp" alt="arrow right">
            </div>
            <div class="btn" @click="login" v-if="isLogin">
                <p v-if="isEng()">Log in</p>
                <p v-if="!isEng()">Daxil ol</p>
                <img src="@/assets/img/right-arrow.webp" alt="arrow right">
            </div>

            <div id="status-box">
                <p>{{ statusMsg }}</p>
            </div>


        </section>

    </div>
</template>

<script>
import UserService from '../services/UserService';
export default {
    name: 'Authentication',
    data() {
        return {
            isLogin: true,
            statusMsg: "",
            fullName: "",
            email: "",
            phone: "",
            occupation: "",
            password: "",

        }
    },
    methods: {
        switchAuthOptions() {
            this.statusMsg = "";
            document.getElementById("status-box").style.opacity = 0;
            if (this.isLogin) {
                this.isLogin = false;
                document.getElementById("login-option-span").classList.remove("selected");
                document.getElementById("register-option-span").classList.add("selected");
            } else {
                this.isLogin = true;
                document.getElementById("register-option-span").classList.remove("selected");
                document.getElementById("login-option-span").classList.add("selected");
            }
        },
        register() {
            let statusBox = document.getElementById("status-box");
            if (!this.fullName.length > 0 || !this.email.length > 0 || !this.phone.length > 0 || !this.occupation.length > 0 || !this.password.length > 0) {
                statusBox.style.opacity = 1;
                statusBox.classList.remove("success");
                this.statusMsg = this.isEng() ? "Please fill all the fields" : "Bütün detalari daxil edin";
                return;
            }

            let data = {
                "fullName": this.fullName,
                "email": this.email,
                "phone": this.phone,
                "occupation": this.occupation,
                "password": this.password
            }

            UserService.register(data).then(res => {
                statusBox.style.opacity = 1;
                if (res.status == 200) {
                    statusBox.classList.add("success");
                    this.statusMsg = "Registered successful";
                    this.switchAuthOptions();
                } else {
                    statusBox.classList.remove("success");
                    this.statusMsg = res.data;
                }
            })
        },
        login() {
            let statusBox = document.getElementById("status-box");
            if (!this.email.length > 0 || !this.password.length > 0) {
                statusBox.style.opacity = 1;
                statusBox.classList.remove("success");
                this.statusMsg = this.isEng() ? "Please fill all the fields" : "Bütün detalari daxil edin";
                return;
            }

            let data = {
                "email": this.email,
                "password": this.password
            }

            UserService.login(data).then(res => {
                if (res.status != 200) {
                    statusBox.style.opacity = 1;
                    statusBox.classList.remove("success");
                    this.statusMsg = this.isEng() ? "Invalid email or password" : "Email ve ya Şifrəniz yanlışdir";
                } else {
                    localStorage.setItem('id', res.data)
                    this.$router.push('/my-account');
                }
            })
        },
        isEng() {
            return localStorage.getItem('lang') == 'en';
        },
    },
}
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
}

.main-image {
    width: 50%;
    height: 100vh;
    object-fit: cover;
}

.input-panel {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .logo {
        width: 20%;
        margin-bottom: 4rem;
    }

    .auth-options {
        display: flex;
        justify-content: center;
        width: 100%;

        .option {
            width: 20%;
            cursor: pointer;
            margin-bottom: 2rem;

            p {
                color: #FFF;
                font-family: "Inter";
                font-size: 0.9rem;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                text-align: center;
                margin-bottom: 0.3rem;
            }

            span {
                display: block;
                width: 100%;
                height: 1px;
                opacity: 0.3799999952316284;
                background: #FFF;

                &.selected {
                    opacity: 1;
                }
            }
        }
    }

    input {
        width: 40%;
        border: 1px solid var(--gray, #141414);
        background: var(--white, #F7F7FB);
        font-family: "Inter";
        font-size: 0.8rem;
        padding: 5px;
        margin-bottom: 0.9rem;
        outline: none;
        border-radius: 0;
    }

    .btn {
        display: flex;
        justify-content: center;
        background: #B08500;
        border-radius: 0;
        width: 40%;
        padding: 15px;
        margin-top: 1rem;
        transition: 0.3s background-color;

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

        img {
            width: 1rem;
        }

        &:hover {
            background-color: transparent;
            border: 1px solid #B08500;
        }

        &:active {
            transition: 0s;
            border: 0px;
        }
    }
}

#status-box {
    display: flex;
    justify-content: center;
    background: #a00b0b;
    border-radius: 0;
    width: 40%;
    padding: 10px;
    margin-top: 1rem;
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
    .wrapper {
        height: 80vh;

        .main-image {
            display: none;
        }

        .input-panel {
            width: 100%;
            padding: 0 15px;

            .logo {
                display: none;
            }

            input {
                width: 100%;
            }

            .btn {
                width: 100%;
            }

            #status-box {
                width: 100%;
            }
        }
    }
}
</style>