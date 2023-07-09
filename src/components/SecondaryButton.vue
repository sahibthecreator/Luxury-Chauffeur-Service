<template>
    <div class="btn">
        <p>{{ text }}</p>
    </div>
</template>

<script>
export default {
    name: 'PrimaryButton',
    props: {
        text: String
    },
    setup() {


        return {}
    }
}
</script>

<style lang="scss" scoped>
.btn {
    border: 1px solid #B08500;
    padding: 10px 50px;
    height: fit-content;
    width: fit-content;
    border-radius: 0;
    p {
        color: #FFF;
        font-size: 1rem;
        font-family: "Inter";
        font-weight: 600;
        margin: 0;
    }
}
</style>