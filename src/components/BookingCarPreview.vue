<template>
    <div class="wrapper">
        <img :src="'/../api/public/car_images/' + image" alt="Airport luxury meet & greet" />
        <h3>{{ carName }}</h3>
        <div class="details" v-if="!rentCar">
            <img src="@/assets/img/passengers-icon.webp" alt="Passengers Icon">
            <p> Max passengers: {{ maxPassengers }}</p>
        </div>
        <div class="details" v-if="!rentCar">
            <img src="@/assets/img/suitcase-icon.webp" alt="Suitcase Icon">
            <p>Max suitcases: {{ maxSuitcases }}</p>
        </div>
        <div class="details" v-if="!rentCar">
            <img src="@/assets/img/luggage-icon.webp" alt="Luggage Icon">
            <p>Max hand luggage: {{ maxHoldLuggage }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "BookingCarPreview",
    props: {
        carName: String,
        image: String,
        maxPassengers: String,
        maxSuitcases: String,
        maxHoldLuggage: String,
        rentCar: Boolean,
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    padding: 5px 10px;
    background-color: rgb(238, 238, 238);
    color: black;
    border-radius: 5px;


    h3 {
        font-size: 1rem;
        margin-top: 0.5rem;
    }

    .details {
        display: flex;
        gap: 5px;

        img {
            width: 20px;
            height: 20px;
        }

        p {
            opacity: 0.8;
            font-family: "Inter",
                sans-serif;
            font-size: 0.9rem;
            margin: 0;
        }
    }

    .proceed-btn {
        margin-top: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #B08500;
        border-radius: 5px;
        cursor: pointer;
        p{
            // font-family: "Inter", sans-serif;
            margin: 0;
        }
    }
}
</style>