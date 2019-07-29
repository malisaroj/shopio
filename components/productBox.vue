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
                                <span class="stars"><star-rating :show-rating="false" :rating="p.ratings"
                                                                 :star-size="16" :read-only="true"
                                                                 :increment="0.01"></star-rating></span>
                                <span class="price">{{p.price}}</span>
                                <button class="quickview" @click.prevent="quickItem(p)">Quick View</button>
                            </div>
                        </div>
                    </carousel>
                </no-ssr>
            </b-col>
        </b-row>
        <div class="quickView" v-if="quickView">
            <span class="close" @click.prevent="hideQuickView"></span>
            <quick-view :item="viewItem"></quick-view>
        </div>
        <div class="quickOverlay" v-if="quickView" @click.prevent="hideQuickView"></div>
    </div>
</template>

<script>
    import StarRating from 'vue-star-rating'
    import QuickView from './QuickView'

    export default {
        components: {StarRating, QuickView},
        props: ['products', 'title', 'shown'],
        name: "productBox",
        data() {
            return {
                viewItem: '',
                quickView: false
            }
        },
        methods: {
            quickItem: function(item){
                this.viewItem = item;
                this.quickView = true
            },
            hideQuickView: function(){
                this.viewItem = '';
                this.quickView = false
            }
        }
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

    .featured-product {
        margin-top: 30px;

    }

    .featured-product .owl-nav {
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

    .banner-slider .owl-nav button.owl-prev {
        right: initial;
        left: 150px;
    }

    .section-title {
        color: #6a6a6a;
        font-size: 22px;
        margin-bottom: 30px;
        font-weight: 300;
    }
    .quickView {
        position: fixed;
        background: #fff;
        width: calc(100% - 80px);
        z-index: 999;
        height: calc(100% - 80px);
        top: 40px;
        left: 40px;
    }
    .quickOverlay {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 99;
        background: rgba(0,0,0,0.1);
    }
    span.close {
        position: absolute;
        background: #f5f5f5;
        height: 40px;
        width: 40px;
        top: 0;
        right: 0;
        cursor: pointer;
        z-index: 9;
    }
    span.close:before,
    span.close:after {
        content: "";
        position: absolute;
        height: 20px;
        width: 1px;
        background: #333;
        left: 19px;
        top: 10px;
        transform: rotate(45deg);
    }
    span.close:before{
        transform: rotate(-45deg);
    }
    .quickView > div, .quickView > div > div {
        height: 100%;
    }
    button.quickview:hover {
        color: #333;
        background: #fff;

    }
    button.quickview {
        position: absolute;
        width: 220px;
        left: calc(50% - 110px);
        top: -60px;
        border: none;
        transition: all 0.4s;
    }
    .product-box:hover button.quickview {
        top: 70px

    }
</style>