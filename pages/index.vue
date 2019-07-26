<template>
    <div class="content-wrapper">
        <b-container>
            <product-box :products="products" title="Featured Products" shown="5"></product-box>
            <product-box :products="products" title="Latest Product" shown="5"></product-box>
        </b-container>

        <deals-carousel :items="products" name="Deals of the Day"></deals-carousel>
    </div>
</template>

<script>
    import Logo from "../components/Logo.vue";
    import ProductBox from "../components/productBox.vue";
    import DealsCarousel from "../components/dealsCarousel.vue";

    export default {
        components: {
            Logo,
            ProductBox,
            DealsCarousel
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
