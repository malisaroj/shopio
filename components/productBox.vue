<template>
    <div>
        <b-row class="no-gutters">
            <b-col lg="12" class="featured-product">
                <h2 class="section-title" v-if="title">{{title}}</h2>
                <no-ssr>
                <carousel :nav="false" :margin="20" :responsive="{0:{items:1,nav:false},600:{items:shown,nav:true}}"
                          :dots="false">
                    <div class="product-box" v-for="(p,i) in products" :key="i">
                        <nuxt-link class="nav-link" to="/"><img :src="p.image" :alt="p.name"></nuxt-link>
                        <h2>{{p.name}}</h2>
                        <p>{{p.info}}</p>
                        <div class="price-row">
                            <span class="stars"><star-rating :show-rating="false" :rating="p.ratings" :star-size="16" :read-only="true" :increment="0.01"></star-rating></span>
                            <span class="price">{{p.price}}</span>
                        </div>
                    </div>
                </carousel>
                </no-ssr>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import StarRating from 'vue-star-rating'
    export default {
        components: {StarRating},
        props: ['products', 'title', 'shown'],
        name: "productBox"
    }
</script>

<style>

    .product-box p {
        font-size: 13px;
        color: #989898;
    }

    .product-box h2 {
        color: #4c4c4c;
        font-size: 16px;
    }

    .featured-product .product-box img {
        margin-bottom: 20px !important;
        width: auto;
        max-width: 100%;
        margin: 0 auto;
        height: 120px;

    }
    .product-box {
        background-color: rgb(255, 255, 255);
        box-shadow: 0px 0px 25px 0px rgba(226, 233, 255, 0.65);
        min-height: 310px;
        padding: 10px;
        margin-bottom: 30px;
        border-radius: 6px;
        text-align: center;
    }

    .price-row {
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
    }

    .featured-product .owl-nav button.owl-next,
    .banner-slider .owl-nav button.owl-next,
    .banner-slider .owl-nav button.owl-prev,
    .featured-product .owl-nav button.owl-prev {
        border-radius: 50%;
        background-color: rgb(255, 255, 255);
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.07);
        width: 36px;
        height: 36px;
        border-radius: 50%;
    }
    .featured-product{
        margin-top: 30px;

    }
    .featured-product .owl-nav{
        position: absolute;
        top: -70px;
        right: 0;
    }
    .banner-slider .owl-nav button.owl-next,
    .banner-slider .owl-nav button.owl-prev {
        right: 150px !important;
        position: absolute;
        width: 50px;
        height: 50px;
        top: calc(50% - 50px);
        left: initial;
    }
    .banner-slider .owl-nav button.owl-prev{
        right: initial;
        left: 150px;
    }
.section-title{
    color: #6a6a6a;
    font-size: 22px;
    margin-bottom: 30px;
    font-weight: 300;
}
</style>