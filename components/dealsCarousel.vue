<template>
    <div class="deals-of-day">
        <b-container>
            <b-row>
                <b-col lg="2"></b-col>
                <b-col lg="10">
                    <product-box :products="items" shown="4"></product-box>
                </b-col>
            </b-row>
        </b-container>

    </div>
</template>

<script>
    import ProductBox from "./productBox.vue";

    export default {
        props: ['items', 'name'],
        components: {
            ProductBox
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
</style>