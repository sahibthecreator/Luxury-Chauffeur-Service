<template>
    <div>
        <h2>{{ text }}</h2>
        <span class="gold-line"></span>
    </div>
</template>

<script>
export default {
    props: {
        text: String
    },

}
</script>

<style lang="scss" scoped>
div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 6rem 0 1rem 0;

    h2 {
        color: #FFF;
        margin: 0;
        letter-spacing: 3px;
        font-size: 1.8rem;
        font-weight: 600;
        margin-bottom: 0.3rem;
        text-align: center;
    }
}

.gold-line {
    display: block;
    background: #B08500;
    width: 8rem;
    height: 2px;
    margin-bottom: 2rem;
}
</style>