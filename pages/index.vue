<template>
    <div class="content-wrapper">
        <banner></banner>
        <b-container>
            <product-box :products="products" title="Featured Products" shown="5"></product-box>
            <product-box :products="products" title="Latest Product" shown="5"></product-box>
        </b-container>
        <deals-carousel :items="products" name="Deals of the Day"></deals-carousel>
        <ads></ads>
        <cart></cart>
        <toast :show="toast.show" :text="toast.text" @hide-toast="hideToast"></toast>
    </div>
</template>

<script>
    import ProductBox from "../components/productBox.vue";
    import DealsCarousel from "../components/dealsCarousel.vue";
    import Banner from "../components/Banner.vue";
    import Ads from "../components/Ads.vue";
    import Cart from '../components/MiniCart.vue'
    import Toast from '../components/Toast.vue'
    import Products from '~/plugins/products'
    export default {
        components: {
            ProductBox,
            DealsCarousel,
            Banner,
            Cart,
            Ads,
            Toast
        },
        data() {
            return {
                products: Products
            }
        },
        mounted() {
            $(function () {
                $('[data-toggle="tooltip"]').tooltip()
            })
        },
        computed: {
            allProducts(){
                this.products = this.$store.state.products;
                return this.$store.state.products;
            },
            toast() {
                return this.$store.getters.toast;
            }
        },
        methods: {
            hideToast() {
                this.$store.commit("hideToast");
            }
        },
        created(){
            this.$store.dispatch("fetchProducts");
        }

    };
</script>

<style>
.container{
    width: 90%;
    max-width: 90%;
}
    .title {
        font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
        "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        display: block;
        font-weight: 300;
        font-size: 100px;
        color: #35495e;
        letter-spacing: 1px;
    }

    .subtitle {
        font-weight: 300;
        font-size: 42px;
        color: #526488;
        word-spacing: 5px;
        padding-bottom: 15px;
    }

    .links {
        padding-top: 15px;
    }
</style>
