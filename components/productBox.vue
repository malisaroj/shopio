<template>
    <div class="container">
        <b-row>
            <b-col lg="12" md="12" >
                <no-ssr> <!-- important to add no-ssr-->
                    <carousel :nav="false">
                        <div class="product-box" v-for="(p,i) in products" :key="i">
                            <nuxt-link class="nav-link" to="/"><img :src="p.image" :alt="p.name"></nuxt-link>
                            <nuxt-link class="nav-link" to="/"><h2>{{p.name}}</h2></nuxt-link>
                            <p>{{p.info}}</p>
                            <div class="price-row">
                                <div class="stars">0 0 0 0 0</div>
                                <div class="price">{{p.price}}</div>
                            </div>
                        </div>
                    </carousel>
                </no-ssr>

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

<style scoped>
    .product-box p{
font-size: 13px;
        color: #989898;
    }
    .product-box h2{
        color: #4c4c4c;
        font-size: 16px;
    }
    .product-box img{
        margin-bottom: 20px;

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
</style>