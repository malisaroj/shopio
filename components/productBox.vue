<template>
    <div class="container">
        <b-row class="no-gutters">
            <b-col lg="12 featured-product">
                <carousel :nav="false" :margin="20" :responsive="{0:{items:1,nav:false},600:{items:4,nav:true}}"
                          :dots="false">
                    <div class="product-box" v-for="(p,i) in products" :key="i">
                        <nuxt-link class="nav-link" to="/"><img :src="p.image" :alt="p.name"></nuxt-link>
                        <nuxt-link class="nav-link" to="/"><h2>{{p.name}}</h2></nuxt-link>
                        <p>{{p.info}}</p>
                        <div class="price-row">
                            <span class="stars">0 0 0 0 0</span>
                            <span class="price">{{p.price}}</span>
                        </div>
                    </div>
                </carousel>
            </b-col>
        </b-row>

    </div>
</template>

<script>
    export default {
        components: {},
        props: ['products'],
        name: "productBox"
    }
</script>

<style>
    .row {
        max-width: calc(100% - 30px);
    }

    .product-box p {
        font-size: 13px;
        color: #989898;
    }

    .product-box h2 {
        color: #4c4c4c;
        font-size: 16px;
    }

    .featured-product .product-box img {
        margin-bottom: 20px;
        width: auto;
        max-width: 100%;
        margin: 0 auto;

    }
    .product-box {
        background-color: rgb(255, 255, 255);
        box-shadow: 0px 0px 25px 0px rgba(226, 233, 255, 0.65);
        min-height: 310px;
        padding: 10px;
        margin-bottom: 30px;
        border-radius: 6px;
    }

    .price-row {
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
    }

    .featured-product .owl-nav button.owl-next,
    .featured-product .owl-nav button.owl-prev {
        border-radius: 50%;
        background-color: rgb(255, 255, 255);
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.07);
        width: 36px;
        height: 36px;
        border-radius: 50%;
    }
    .featured-product{
        margin-top: 120px;

    }
    .featured-product .owl-nav{
        position: absolute;
        top: -70px;
        right: 0;
    }

</style>