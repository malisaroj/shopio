<template>
  <div class="container">
    <h4>Categories</h4>

    <div class="row">
      <div v-for="(item, index) in categories" :key="index" class="col-2 category-container">
        <nuxt-link to>
          <div class="category-link">
            <div class="image-container">
              <img class="img" :src="item.image" :alt="item.title" />
            </div>
            <div class="category-name">
              <span>{{item.title}}</span>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          title: "Business",
          image: require("../../assets/images/leca.png")
        },
        {
          title: "Tshirts",
          image: require("../../assets/images/leca.png")
        },
        {
          title: "Shipping Bags",
          image: require("../../assets/images/leca.png")
        },
        {
          title: "Traditional Laptops",
          image: require("../../assets/images/leca.png")
        },
        {
          title: "Cable Converters",
          image: require("../../assets/images/leca.png")
        },
        {
          title: "Hammers",
          image: require("../../assets/images/leca.png")
        },
        {
          title: "Fashion backpacks",
          image: require("../../assets/images/leca.png")
        },
        {
          title: "Wall Stickers & Decals",
          image: require("../../assets/images/leca.png")
        },
        {
          title: "Cooling Pads/Cooling",
          image: require("../../assets/images/leca.png")
        },
        {
          title: "Smartwatches",
          image: require("../../assets/images/mac-1.png")
        }
      ]
    };
  }
};
</script>

<style>
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category-name {
  font-size: 15px;
  font-weight: 400;
  text-align: center;
  color: #000;
}

.image-container {
  margin: 0 auto;
  width: 100px;
  height: 100px;
}

.category-container {
  background-color: #fff;
  height: 148.5px;
  border-right: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
}

.category-container:hover {
  box-shadow: 0 2px 4px 0 rgba(39, 23, 23, 0.25);
  position: relative;
  -webkit-transform: all 0.3s ease-in-out;
  -ms-transform: all 0.3s ease-in-out;
  transform: all 0.3s ease-in-out;
}

a:link, a:visited {
    text-decoration: none;
}

.category-link {
  padding-top: 10px;
}
</style>