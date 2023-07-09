<template>
    <div>
        <h1>{{ text }}</h1>
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

div{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 4rem 0 2rem 0;
    h1{
        margin: 0;
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