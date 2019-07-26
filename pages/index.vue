<template>
    <section class="container">
        <div>
            <logo/>
            <product-box :products="products"></product-box>
            <h1 class="title">Awesome</h1>
            <h2 class="subtitle">Nuxt App</h2>
            <div class="links">
                <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
                <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
            </div>
            <div class="alert alert-primary" role="alert">
                This is a primary alert—check it out!
            </div>
            <button
                    type="button"
                    class="btn btn-secondary"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Tooltip on top"
            >Tooltip on top
            </button>
        </div>
    </section>
</template>

<script>
    import Logo from "../components/Logo.vue";
    import ProductBox from "../components/productBox.vue";

    export default {
        components: {
            Logo,
            ProductBox
        },
        data() {
            return {
                products: [
                    {
                        name: 'Apple MacBook Pro',
                        info: `Core i5 - (8 GB/128 GB SSD/OS X Yosemite) MF839...`,
                        price: '₹ 93,990',
                        image: require('../assets/images/mac-1.png')
                    },
                    {
                        name: 'Acer Aspire R3',
                        info: `Pentium Quad Core 4th Gen - (4 GB/500 GB HDD/Windo...`,
                        price: '₹ 24,990',
                        image: require('../assets/images/pro-1.png')
                    },
                    {
                        name: 'Micromax Canvas II',
                        info: `(WIFI) Atom 4th Gen - (2 GB/32 GB EMMC ...`,
                        price: '₹ 9,990',
                        image: require('../assets/images/micro-1.png')
                    },
                    {
                        name: 'Acer One 10 Atom',
                        info: `5th Gen - (2 GB/32 GB EMMC Storage/Windows 10 Ho...`,
                        price: '₹ 13,990',
                        image: require('../assets/images/pro-1.png')
                    },
                    {
                        name: 'BPL 108cm (43)',
                        info: `Ultra HD (4K) Smart LED TV  (BPL108K300S4H, 4 x HDMI, 3 x USB)`,
                        price: '₹ 13,499',
                        image: require('../assets/images/pro-1.png')
                    },
                    {
                        name: 'HP DeskJet',
                        info: ` Ink Tank GT 5810 Multi-function Printer  (Black)`,
                        price: '₹ 12,500',
                        image: require('../assets/images/pro-1.png')
                    }
                ]
            }
        },
        mounted() {
            $(function () {
                $('[data-toggle="tooltip"]').tooltip()
            })
        }

    };
</script>

<style>
    .container {
        margin: 0 auto;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
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
