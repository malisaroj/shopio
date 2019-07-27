<template>
    <div class="deals-of-day">
        <b-container>
            <b-row>
                <b-col lg="2" class="d-flex flex-wrap align-items-center">
                    <div class="counterzsection">
                        <h2>{{name}}</h2>
                        <Countdown date="1660999999"></Countdown>
                    </div>
                </b-col>

    <b-col lg="10">
        <product-box :products="items" shown="4"></product-box>
    </b-col>
    </b-row>
    </b-container>

    </div>
</template>

<script>
    import ProductBox from "./productBox.vue";
    import Countdown from "./countdown.vue";

    export default {
        props: ['items', 'name',],
        components: {
            ProductBox,
            Countdown
        },
        name: "dealsCarousel"
    }
</script>

<style>
    .deals-of-day {
        background: #070921;
        padding: 80px 0;
        margin-top: 30px;
    }

    .deals-of-day .product-box {
        box-shadow: 0px 0px 25px 0px rgba(226, 233, 255, 0.15);
    }

    .deals-of-day .featured-product .owl-nav {
        position: absolute;
        left: -20px;
        width: calc(100% + 40px);
        display: flex;
        justify-content: space-between;
        top: calc(50% - 50px);
    }
    .counterzsection{

    }
    .counterzsection h2{
        color: #fff;
        font-weight: 700;

    }
</style>