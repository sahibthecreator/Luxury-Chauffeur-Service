<template>
    <div class="btn">
        <p>{{ text }}</p>
    </div>
</template>

<script>
export default {
    name: 'SecondaryButton',
    props: {
        text: String
    },
    setup() {


        return {}
    },
}
</script>

<style lang="scss" scoped>
.btn {
    border: 1px solid #B08500;
    padding: 10px 50px;
    height: fit-content;
    width: fit-content;
    border-radius: 0;
    transition: all 0.5s;
    cursor: pointer;

    p {
        color: #FFF;
        font-size: 0.9rem;
        font-family: "Inter";
        font-weight: 600;
        margin: 0;
    }


    &:hover {
        background-color: #B08500;
    }

    &.disabled {
        opacity: 0.5;
        cursor: default;

        &:hover {
            background-color: transparent;
        }
    }
}
</style>