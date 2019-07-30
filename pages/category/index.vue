<template>
  <div class="container">
    <h4>Categories</h4>

    <div class="row">
      <div class="col-4">
        <h5>filter by</h5>
        <div class="filterTitle">
          <input
            type="text"
            name="search"
            id="search"
            v-model="search"
            placeholder="Enter Keyword Here"
          />
        </div>
      </div>

      <div class="filterBrand col-4">
        <h5>Brand</h5>
        <input type="checkbox" name="acer" id="acer" v-model="brandNames" value="Acer" />
        <label for="acer">Acer</label>
        <input type="checkbox" name="dell" id="dell" v-model="brandNames" value="Dell" />
        <label for="dell">Dell</label>
        <input type="checkbox" name="hp" id="hp" v-model="brandNames"  value="Hp"/>
        <label for="hp">HP</label>
      </div>

      <div class="filterPrice col-4">
        <h5>Price</h5>
        <input type="checkbox" name="50to100" id="50to100" v-model="price" />
        <label for="50to100">$50 to $100</label>
        <input type="checkbox" name="100to250" id="100to250" v-model="price" />
        <label for="100to250">$100 to $250</label>
      </div>
    </div>

    <div class="row">
      <div v-for="(item, index) in filteredItems" :key="index" class="col-2 category-container">
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
      search: "",
      brandNames: [],
      price: [],
      categories: [
        {
          title: "Business",
          brand: "Dell",
          image: require("../../assets/images/micro-1.png")
        },
        {
          title: "Tshirts",
          brand: "Calvin Klein",
          image: require("../../assets/images/pro-1.png")
        },
        {
          title: "Shipping Bags",
          brand: "Gucci",
          image: require("../../assets/images/micro-1.png")
        },
        {
          title: "Traditional Laptops",
          brand: "Acer",
          image: require("../../assets/images/pro-1.png")
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
  },

  computed: {
    filteredItems() {
      return this.categories.filter(item => {
        return item.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
      });
    }
  }
};
</script>

<style>
.img {
  width: 100%;
  height: 100%;
  object-fit: contain;
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

a:link,
a:visited {
  text-decoration: none;
}

.category-link {
  padding-top: 10px;
}
</style>