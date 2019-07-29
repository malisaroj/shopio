<template>
  <div class="container">
    <div class="row">
      <div
        v-for="(item, index) in ads"
        :key="index"
        class="col-3 ad-container"
      >
        <div class="product-img">
          <img :src="item.image" :alt="item.title" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ads: [
        {
          id: 1,
          title: "Gaming Console",
          image: require("../assets/images/xbox.png"),
        },

        {
          id: 2,
          title: "Running Shoe",
          image: require("../assets/images/nike.png"),
        },

        {
          id: 3,
          title: "LeEco Le2  32GB",
          image: require("../assets/images/leca.png"),
        }
      ]
    };
  }
};
</script>

<style>

.ad-container {
    margin: 40px !important;
}

.product-img {
    max-width: 100%;
    height: auto;
}

</style>


