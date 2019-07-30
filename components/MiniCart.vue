<template>
    <div class="cartContainer">
    <div class="miniCart" :class="!hideMini ? 'open': ''">
        <span class="close" @click="hideMini = !hideMini"></span>
        <h2 v-if="cartSize">Cart Item(s)</h2>
        <div class="cartOpener" :class="shakeCart ?'shake': ''" @click="hideMini = !hideMini"><img src="~/assets/images/cart.png"> <span
                class="badge badge-secondary">{{cartSize}}</span></div>
        <div class="cartItems">
            <div class="cartItem" v-for="(product, index) in cart" :key="product.id">
                <div class="itemImage">
                    <img :src="product.image" :alt="product.name">
                </div>
                <div class="itemDetail">
                    <h2>{{product.name}}</h2>
                    <p>{{product.quantity}} x {{product.price}}</p>
                </div>
                <div class="removeItem">
                    <span
                            @click="deleteFromCart(product.id)"
                            class="close">
                    </span>
                </div>
            </div>
            <div class="totalAmount" v-if="cartSize">
                Total: ${{cartTotalAmount}}
            </div>
        </div>
        <div v-if="!cartSize" class="alert alert-secondary my-5" role="alert">
            Cart is empty! Please add some products.
        </div>
        <table v-else class="table table-striped mb-5 hide">
            <thead class="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Delete</th>
                <th scope="col">Total</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(product, index) in cart" :key="product.id">
                <th scope="row">{{index + 1}}</th>
                <td>{{product.name}}</td>
                <td>$ {{product.price}}</td>
                <td>
                    <button
                            @click="removeFromCart(product.id)"
                            :disabled="product.quantity === 1"
                            class="btn btn-outline-danger btn-small">
                        -
                    </button>
                    <span class="mx-2">{{product.quantity}}</span>
                    <button
                            @click="addToCart(product.id)"
                            :disabled="product.quantity === product.stock"
                            class="btn btn-outline-success btn-small">
                        +
                    </button>
                </td>
                <td>
                    <button
                            @click="deleteFromCart(product.id)"
                            class="btn btn-danger btn-small">
                        Delete
                    </button>
                </td>
                <td>$ {{product.quantity* product.price}}</td>
            </tr>

            <tr class="table-footer">
                <td colspan="5" class="total">Total:</td>
                <td>$ {{cartTotalAmount}}</td>
            </tr>
            </tbody>
        </table>
    </div>
        <div class="overlay" v-if="!hideMini" @click="hideMini = !hideMini"></div>
    </div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'

    export default {
        data() {
            return {
                hideMini: true,
                shakeCart: false
            };
        },
        computed: {
            ...mapState([
                "cart"
            ]),
            ...mapGetters([
                "cartSize",
                "cartTotalAmount"
            ])
        },
        methods: {
            addToCart(id) {
                this.$store.dispatch("addToCart", id);
            },
            removeFromCart(id) {
                this.$store.dispatch("removeFromCart", id);
            },
            deleteFromCart(id) {
                this.$store.dispatch("deleteFromCart", id);
            }
        },
        watch: {
            cartSize: function() {
                if(this.cartSize < 1){
                    this.hideMini = true
                }
                let $this = this
                $this.shakeCart = true
                setTimeout(function(){
                    $this.shakeCart = false

                },2000)
            }
        }
    }
</script>

<style scoped>
    .table-footer {
        font-size: 1.2em;
        font-weight: bold;
    }

    .total {
        text-align: right;
    }

    .miniCart {
        position: fixed;
        width: 320px;
        height: 100%;
        right: -320px;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        -ms-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;
        background: #fff;
        z-index: 9999;
        top: 0;
        padding: 20px;
        box-shadow: 0 0 50px rgba(0, 0, 0, 0.4)
    }

    .cartItem h2 {
        font-size: 14px;
        margin-bottom: 0;
    }

    .cartItem img {
        max-width: 60px;
        margin-right: 15px;
    }

    .cartItem {
        display: flex;
        padding: 15px 0;
        border-bottom: 1px solid #eee;
        position: relative;
    }

    .totalAmount {
        padding: 20px 15px;
        background: #f5f5f5;
        font-weight: 700;
    }

    .cartOpener img {
        width: 30px;
        filter: invert(1);
    }

    .cartOpener span.badge.badge-secondary {
        height: 25px;
        width: 25px;
        border-radius: 50%;
        text-align: center;
        line-height: 20px;
        position: absolute;
        top: -5px;
        right: 0px;
    }

    .cartOpener.shake {
        animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        perspective: 1000px;

    }
    .cartOpener {
        height: 60px;
        width: 60px;
        position: fixed;
        background: #ed3a4a;
        border-radius: 50%;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
        bottom: 30px;
        right: 15px;
        z-index: 999999;
        text-align: center;
        line-height: 50px;
        cursor: pointer;
    }

    .miniCart.open {
        right: 0;
    }
    .cartItem .close {
        top: 17px;
        border-radius: 50%;
        background: #f00;
        height: 30px;
        width: 30px;
    }
    .cartItem .close:before, .cartItem .close:after {
        background: #fff;
        height: 12px;
        left: 15px;
        top: 9px;
    }
    .overlay{
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 999;
        background: rgba(0,0,0,0.3);
    }
    .miniCart > h2 {
        text-transform: uppercase;
        font-size: 16px;
        font-weight: 700;
        border-bottom: 1px solid #eee;
        padding-bottom: 20px;
    }
    @keyframes shake {
        10%, 90% {
            transform: translate3d(-2px, 0, 0);
        }

        20%, 80% {
            transform: translate3d(2px, 0, 0);
        }

        30%, 50%, 70% {
            transform: translate3d(-4px, 0, 0);
        }

        40%, 60% {
            transform: translate3d(4px, 0, 0);
        }
    }
</style>