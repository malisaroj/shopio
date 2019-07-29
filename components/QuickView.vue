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
                    <div class="item-price">{{item.price}}</div>
                    <div class="starRatings">
                        <star-rating :show-rating="false" :rating="item.ratings"
                                     :star-size="16" :read-only="true"
                                     :increment="0.01"></star-rating>
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
        props: ['item']
    }
</script>

<style scoped>
.contentContainer{
    padding: 40px;
}
</style>