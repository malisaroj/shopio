<template>
  <div class="container">
    <div class="row">
      <div
        v-for="(item, index) in ads"
        :key="index"
        class="col mx-4 py-5 my-5 ad-container"
        :style="{'background-color': item.bgcolor}"
      >
        <div>
          <img class="product-logo" :src="item.logo" :alt="item.title" />
          <div class="product-title">{{ item.title }}</div>
        </div>

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
          logo: require("../assets/images/Xbox-logo.png"),
          image: require("../assets/images/xbox.png"),
          bgcolor: "#ffffff"
        },

        {
          id: 2,
          title: "Running Shoe",
          logo: require("../assets/images/nike.png"),
          image: require("../assets/images/running-shoes.png"),
          bgcolor: "#f1304b"
        },

        {
          id: 3,
          title: "LeEco Le2  32GB",
          logo: require("../assets/images/Leco.png"),
          image: require("../assets/images/Leco-back.png"),
          bgcolor: "#ffffff"
        }
      ]
    };
  }
};
</script>

<style>
.ad-container {
  border-radius: 5px;
  box-shadow: 0px 0px 25px 0px rgba(226, 233, 255, 0.65);
  height: 255px;
}

.product-logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
}

.product-title {
  font-size: 16px;
  font-weight: 300;
  color: rgb(45, 45, 45);
  line-height: 1.125em;
  text-align: center;
  margin-bottom: 40px;
}

.product-img {
  left: 90px;
  top: 2104px;
  height: 107px;
}
</style>


