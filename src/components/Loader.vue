<template>
    <main>
        <svg xmlns="http://www.w3.org/2000/svg" height="128px" width="256px" viewBox="0 0 256 128" class="ip">
            <defs>
                <linearGradient y2="0" x2="1" y1="0" x1="0" id="grad1">
                    <stop stop-color="#5ebd3e" offset="0%"></stop>
                    <stop stop-color="#ffb900" offset="33%"></stop>
                    <stop stop-color="#f78200" offset="67%"></stop>
                    <stop stop-color="#e23838" offset="100%"></stop>
                </linearGradient>
                <linearGradient y2="0" x2="0" y1="0" x1="1" id="grad2">
                    <stop stop-color="#e23838" offset="0%"></stop>
                    <stop stop-color="#973999" offset="33%"></stop>
                    <stop stop-color="#009cdf" offset="67%"></stop>
                    <stop stop-color="#5ebd3e" offset="100%"></stop>
                </linearGradient>
            </defs>
            <g stroke-width="16" stroke-linecap="round" fill="none">
                <g stroke="#ddd" class="ip__track">
                    <path d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56"></path>
                    <path d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64"></path>
                </g>
                <g stroke-dasharray="180 656">
                    <path d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56" stroke-dashoffset="0" stroke="url(#grad1)"
                        class="ip__worm1"></path>
                    <path d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64" stroke-dashoffset="358" stroke="url(#grad2)"
                        class="ip__worm2"></path>
                </g>
            </g>
        </svg>
    </main>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
:root {
    --hue: 223px;
    --bg: hsl(var(--hue), 90%, 95%);
    --fg: hsl(var(--hue), 90%, 5%);
    --trans-dur: 0.3s;
    font-size: calc(16px + (24px - 16px) * (690px - 320px) / (1280px - 320px));
}

main {
    padding: 24px 0;
}

.ip {
    width: 100px;
    height: 50px;
}

.ip__track {
    stroke: hsl(var(--hue), 90%, 90%);
    transition: stroke var(--trans-dur);
}

.ip__worm1,
.ip__worm2 {
    animation: worm1 1.5s linear infinite;
}

.ip__worm2 {
    animation-name: worm2;
}

/* Dark theme */
@media (prefers-color-scheme: dark) {
    :root {
        --bg: hsl(var(--hue), 90%, 5%);
        --fg: hsl(var(--hue), 90%, 95%);
    }

    .ip__track {
        stroke: hsl(var(--hue), 90%, 15%);
    }
}

/* Animation */
@keyframes worm1 {
    from {
        stroke-dashoffset: 0;
    }

    50% {
        animation-timing-function: steps(1);
        stroke-dashoffset: -358;
    }

    50.01% {
        animation-timing-function: linear;
        stroke-dashoffset: 358;
    }

    to {
        stroke-dashoffset: 0;
    }
}

@keyframes worm2 {
    from {
        stroke-dashoffset: 358;
    }

    50% {
        stroke-dashoffset: 0;
    }

    to {
        stroke-dashoffset: -358;
    }
}
</style>