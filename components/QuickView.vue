<template>
    <div class="QuickViewContainer">
        <b-row>
            <b-col lg="5">
                <div class="imageContainer">
                    <img :src="item.image" :alt="item.name">
                </div>
            </b-col>
            <b-col lg="7">
                <div class="contentContainer">
                    <h2>{{item.name}}</h2>
                    <p>{{item.info}}</p>
                    <div class="item-price">${{item.price}}</div>
                    <div class="starRatings">
                        <star-rating :show-rating="false" :rating="item.ratings"
                                     :star-size="16" :read-only="true"
                                     :increment="0.01"></star-rating>
                    </div>
                    <div class="quantity-cart">
                        <div class="quantity">
                            <button class="less" @click.prevent="less">-</button>
                            <input type="text" name="quantity"  v-model="quantity" @keypress="onlyNumber">
                            <button class="add" @click.prevent="add">+</button>
                        </div>
                        <div class="cart-button">
                            <button
                                    class="add-to-cart"
                                    :class="inCartQuantity ? 'btn-success' :  'btn-danger'"
                                    @click="addToCart(item.id)"
                                    :disabled="!inCartQuantity">
                                {{inCartQuantity ? "Add to Cart" : "Out of stock"}}
                            </button>
                        </div>
                    </div>
                </div>

            </b-col>
        </b-row>

    </div>
</template>

<script>
    import StarRating from 'vue-star-rating'

    export default {
        name: "QuickView",
        components: {StarRating},
        props: ['item'],
        data(){
            return{
                quantity: 1
            }
        },
        watch:{
            quantity: function(){
                if(this.quantity < 1){
                    this.quantity = 1
                }
                if(this.quantity > this.item.quantity){
                    this.quantity = this.item.quantity
                }
            }
        },
        methods:{
            onlyNumber ($event) {
                let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
                if ((keyCode < 48 || keyCode > 57)) {
                    $event.preventDefault();
                }
            },
            add: function(){
                this.quantity++
            },
            less: function(){
                this.quantity--
            },
            addToCart(id){
                this.$store.dispatch("addToCart", [id, this.quantity]);
                this.quantity = 1
            }
        },
        computed: {
            inCartQuantity() {
                return this.item.quantity;
            }
        },
    }
</script>

<style scoped>
    .contentContainer {
        padding: 40px;
    }

    .imageContainer {
        background: #F5F5F5;
        padding: 80px;
        height: 100%;
        text-align: center;
    }

    .quantity button {
        background: none;
        border: none;
        color: #333;
    }

    .quantity {
        display: flex;
        box-shadow: 0px 0px 25px 0px rgba(226, 233, 255, 0.65);
        width: 200px;
        border-radius: 50px;
        align-items: center;
        padding: 0 15px;
        background: #fff;

    }
    .quantity input[type="text"] {
        height: 40px;
        width: 120px;
        border: none;
        background: #fff;
        text-align: center;
    }
    .quantity-cart {
        padding: 30px;
        margin-top: 20px;
        background: #f4f5f9;
        display: flex;
        justify-content: flex-start;
    }
    .cart-button button.add-to-cart {
        border-radius: 45px;
        padding: 0 20px;
        min-width: 180px;
        margin-left: 30px;
        max-width: 60%;
        text-transform: uppercase;
        font-size: 14px;
        font-weight: 700;
    }
    .item-price {
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 10px;
    }
</style>