<template>
    <div class="wrapper">
        <img src="@/assets/img/logo.webp" alt="Lord Concierge Logo" class="logo">

        <!--Waves Container-->
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g class="parallax">
                <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
        </svg>
        <div class="login_container">
            <h1>Welcome back, Lord</h1>
            <div class="input_panel" :class="{ button: !isLoginPanel, expanded: isLoginPanel }" @click="openLoginPanel">
                <p class="heading">Sign in</p>

                <input type="text" placeholder="username" v-model="username">
                <input type="password" placeholder="password" v-model="password">
                <div class="error_container" v-if="errorMsg.length > 0">
                    <p>{{ errorMsg }}</p>
                </div>
                <div class="btn" @click="signIn">
                    <p>Sign in</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            isLoginPanel: false,
            username: "",
            password: "",
            errorMsg: "",
        }
    },
    mounted() {
        if (localStorage.getItem('adminLoggedIn')) {
            this.$router.push('./dashboard');
        }
    },
    methods: {
        openLoginPanel() {
            this.isLoginPanel = true;

        },
        signIn() {
            if (this.username == "" && this.password == "") {
                this.errorMsg = "Cannot be empty";
                return;
            }
            if (this.username == "admin" && this.password == "lord777") {
                localStorage.setItem('adminLoggedIn', true);
                this.$router.push("./dashboard");
            } else {
                this.errorMsg = "Incorrect";
                return;
            }
        }
    }

}
</script>

<style lang="scss" scoped>
.wrapper {
    height: 100vh;
    background-color: black;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo {
    width: 10vw;
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translate(-50%, 0);
}


.login_container {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);

    .input_panel {
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 10px;

        p {
            text-align: center;
            color: black;
            font-family: "Inter", sans-serif;
            margin: 0;
            font-weight: 600;
            letter-spacing: 2px;
            text-transform: uppercase;
            font-size: 0.8rem;
        }

        input {
            border: 0;
            font-family: "Inter", sans-serif;
            -webkit-box-shadow: 3px 0px 11px -3px rgba(148, 148, 148, 1);
            -moz-box-shadow: 3px 0px 11px -3px rgba(148, 148, 148, 1);
            box-shadow: 3px 0px 11px -3px rgba(148, 148, 148, 1);
            padding: 5px 15px;
            outline: none;
            border-radius: 5px;
            font-size: 0.8rem;
            width: 60%;
        }

        &.button {
            cursor: pointer;

            &:hover {
                background-color: rgba(255, 255, 255, 0.865);
            }

            input {
                display: none;
            }

            .btn {
                display: none;
            }
        }

        &.expanded {
            height: 20%;
            padding: 3rem 10px;
            border-radius: 10px;
            box-shadow: 0px 4px 92px 4px rgba(255, 255, 255, 0.25);
            transition: 0.5s;

            .heading {
                display: none;
            }

            .error_container {
                padding: 5px 30px;
                background-color: rgb(148, 0, 0);
                border-radius: 5px;
                width: 60%;

                p {
                    color: white;
                    font-size: 0.6rem;
                }
            }

            .btn {
                -webkit-box-shadow: 3px 0px 11px -3px rgba(148, 148, 148, 1);
                -moz-box-shadow: 3px 0px 11px -3px rgba(148, 148, 148, 1);
                box-shadow: 3px 0px 11px -3px rgba(148, 148, 148, 1);
                margin-top: 1rem;
                padding: 5px 30px;
                background-color: black;

                p {
                    color: white;
                }

                &:hover {
                    opacity: 0.8;
                }
            }
        }
    }
}

.waves {
    position: absolute;
    width: 100%;
    height: 75vh;
    bottom: -10px;
    left: 0;
    /*Fix for safari gap*/
    min-height: 100px;
    max-height: 150px;
    filter: blur(20px);
}

/* Animation */

.parallax>use {
    animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;
}

.parallax>use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
}

.parallax>use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
}

.parallax>use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
}

.parallax>use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
}

@keyframes move-forever {
    0% {
        transform: translate3d(-90px, 0, 0);
    }

    100% {
        transform: translate3d(85px, 0, 0);
    }
}

/*Shrinking for mobile*/
@media (max-width: 768px) {
    .waves {
        height: 40px;
        min-height: 40px;
    }

    .content {
        height: 30vh;
    }

    h1 {
        font-size: 24px;
    }
}
</style>