<template>
  <div class="container">
    <h4>Categories</h4>
    <div class="row">
      <div class="col-3">
        <div class>
          <h5>filter by</h5>
          <!-- <div class="filterTitle">
            <input
              type="text"
              name="search"
              id="search"
              v-model="search"
              placeholder="Enter Keyword Here"
            />
          </div>-->
        </div>

        <div v-for="(filter, index) in filters" :key="index" class>
          <b-button class="facet-title" v-b-toggle="filter.collapse">{{ filter.title }}</b-button>
          <hr />

          <div v-if="filter.title === 'Brand'">
            <b-collapse id="collapse-a" class="mt-2">
              <div v-for="(a, b) in filter.options" :key="b">
                <input
                  type="checkbox"
                  :name="a.name"
                  :id="a.name"
                  v-model="brandNames"
                  :value="a.name | capitalize"
                />
                <label :for="a.name">{{a.name | capitalize}}</label>
              </div>
            </b-collapse>
          </div>

          <div v-else-if="filter.title === 'Price'">
            <b-collapse id="collapse-b" class="mt-2">
              <div v-for="(a, b) in filter.options" :key="b">
                <!--                 <input
                  type="checkbox"
                  :name="a.name"
                  :id="a.name"
                  v-model="price"
                  :value="a.name | capitalize"
                />
                <label :for="a.name">{{a.name | capitalize}}</label>-->

                <label for="range-1">{{a.name | capitalize}}</label>
                <b-form-input id="range-1" v-model="value" type="range" min="0" max="1000"></b-form-input>
                <div class="mt-2">Value: {{ value }}</div>
              </div>
            </b-collapse>
          </div>

          <div v-else-if="filter.title === 'Size'">
            <b-collapse id="collapse-d">
              <div v-for="(a, b) in filter.options" :key="b">
                <input
                  type="checkbox"
                  :name="a.name"
                  :id="a.name"
                  v-model="size"
                  :value="a.name | upperCase"
                />
                <label :for="a.name">{{a.name | upperCase}}</label>
              </div>
            </b-collapse>
          </div>

          <div v-else>
            <b-collapse id="collapse-c">
              <div v-for="(a, b) in filter.options" :key="b">
                <input
                  type="checkbox"
                  :name="a.name"
                  :id="a.name"
                  v-model="color"
                  :value="a.name | capitalize"
                />
                <label :for="a.name">{{a.name | capitalize}}</label>
              </div>
            </b-collapse>
          </div>
        </div>
      </div>

      <div class="col-9">
        <div class="row">
          <div v-for="(item, index) in paginatedData" :key="index" class="col-3 category-container">
            <nuxt-link to>
              <div class="category-link">
                <div class="image-container">
                  <img class="img" :src="item.image" :alt="item.title" />
                </div>
                <div class="category-name">
                  <span>{{ item.title }}</span>
                  <div class="price">
                    <span
                      v-if="item.discount"
                    >Rs. {{calculateDiscount(item.discount, item.price) | comma}}</span>
                    <span v-else>Rs. {{item.price | comma }}</span>
                  </div>
                  <div class="discount">
                    <span v-show="item.discount">
                      <del>Rs. {{item.price | comma}}</del>
                    </span>
                    <span class="discount-rate" v-show="item.discount">-{{item.discount}}%</span>
                  </div>
                </div>
              </div>
            </nuxt-link>
            <div class="cart-button">
              <button class="add-to-cart">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      <b-container>
        <b-row align-h="end">
          <button v-if="pageNumber !== 0" @click="prevPage">Previous</button>
          <button v-if="pageNumber != pageCount-1" @click="nextPage">Next</button>
        </b-row>
      </b-container>
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
      color: [],
      size: [],
      value: "",
      pageNumber: 0,
      items: 8,

      filters: [
        {
          title: "Brand",
          collapse: "collapse-a",
          options: [
            {
              name: "acer"
            },
            {
              name: "dell"
            },
            {
              name: "hp"
            }
          ]
        },

        {
          title: "Price",
          collapse: "collapse-b",
          options: [
            /*             {
              name: "under $25",
            },
            {
              name: "$25 to $50",
            },
            {
              name: "$51 to $100",
            },
            {
              name: "Over $100",
            } */

            {
              name: "price range"
            }
          ]
        },

        {
          title: "Color",
          collapse: "collapse-c",
          options: [
            {
              name: "red",
              model: "color"
            },
            {
              name: "white",
              model: "color"
            }
          ]
        },

        {
          title: "Size",
          collapse: "collapse-d",
          options: [
            {
              name: "xl"
            },
            {
              name: "l"
            }
          ]
        }
      ],

      categories: [
        {
          title: "Business",
          brand: "Dell",
          color: "Red",
          price: 5200,
          discount: 2,
          image: require("../../assets/images/micro-1.png")
        },
        {
          title: "Tshirts",
          brand: "Calvin Klein",
          color: "Red",
          price: 1023,
          size: "XL",
          discount: 10,
          image: require("../../assets/images/pro-1.png")
        },
        {
          title: "Shipping Bags",
          brand: "Gucci",
          color: "Red",
          price: 2515,
          size: "L",
          discount: 5,
          image: require("../../assets/images/micro-1.png")
        },
        {
          title: "Traditional Laptops",
          brand: "Acer",
          color: "White",
          price: 1035,
          discount: 17,
          image: require("../../assets/images/pro-1.png")
        },
        {
          title: "Cable Converters",
          color: "White",
          price: 49,
          image: require("../../assets/images/leca.png")
        },
        {
          title: "Hammers",
          brand: "Calvin Klein",
          color: "Red",
          price: 102,
          size: "XL",
          image: require("../../assets/images/leca.png")
        },
        {
          title: "Fashion backpacks",
          brand: "Calvin Klein",
          color: "Red",
          price: 102,
          size: "XL",
          discount: "7",

          image: require("../../assets/images/leca.png")
        },
        {
          title: "Wall Stickers & Decals",
          brand: "Calvin Klein",
          color: "Red",
          price: 102,
          size: "XL",
          image: require("../../assets/images/leca.png")
        },
        {
          title: "Cooling Pads/Cooling",
          brand: "Calvin Klein",
          color: "Red",
          price: 102,
          size: "XL",
          image: require("../../assets/images/leca.png")
        },
        {
          title: "Smartwatches",
          brand: "Calvin Klein",
          color: "Red",
          price: 102,
          size: "XL",
          image: require("../../assets/images/mac-1.png")
        }
      ]
    };
  },

  computed: {
    filteredItems() {
      return this.categories.filter(item => {
        /* if (this.price.length < 1) {
          return item;
        } else if (this.price.length > 0) {
          var productReturn;
          Object.keys(this.filtersAsNumbers)
            .filter(priceRange => this.price.includes(priceRange))
            .filter(priceRangeFiltered => {
              let low = this.filtersAsNumbers[priceRangeFiltered][0];
              let high = this.filtersAsNumbers[priceRangeFiltered][1];
              if (item.price >= low && item.price <= high) {
                productReturn = item;
              }
            });
          return productReturn;
        } */

        return (
          (this.brandNames.length === 0 ||
            this.brandNames.some(i => i.includes(item.brand))) &&
          (this.search.length === 0 ||
            item.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1) &&
          (this.color.length === 0 ||
            this.color.some(j => j.includes(item.color))) &&
          (this.size.length === 0 ||
            this.size.some(k => k.includes(item.size))) &&
          (this.value.length === 0 ||
            (item.price >= 0 && item.price <= this.value))
        );
      });
    },

    pageCount() {
      let l = this.filteredItems.length;
      let s = this.items;
      return Math.ceil(l / s);
    },

    paginatedData() {
      const start = this.pageNumber * this.items,
        end = start + this.items;

      return this.filteredItems.slice(start, end);
    }
  },
  methods: {
    nextPage() {
      this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    },
    calculateDiscount(rate, price) {
      return Math.ceil(price - (rate / 100) * price);
    }
  },

  filters: {
    /* For Capitalizing the string name */
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },

    /* For Converting String Name to the uppercase */
    upperCase: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.toUpperCase();
    },
    comma: function(value) {
      value = value.toString();
      if (!value) return "";
      else if (value.length > 3) {
        let subStrings = Math.floor(value.length / 3);
        for (let i = 0; i < subStrings; i++) {
          return (
            value.slice(0, value.length - 3) + "," + value.slice(-3 * (i + 1))
          );
        }
      } else {
        return value;
      }
    }
  }
};
</script>

<style scoped>
.img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.category-name {
  font-size: 15px;
  font-weight: 400;
  color: #000;
  line-height: 30px;
}

.image-container {
  margin: 0 auto;
  width: 80%;
  height: 233px;
}

.category-container {
  background-color: #fff;
  height: 400px;
  border-right: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
  -webkit-transform: all 0.3s ease-in-out;
  -ms-transform: all 0.3s ease-in-out;
  transform: all 0.3s ease-in-out;
}

.category-container:hover {
  box-shadow: 0 2px 4px 0 rgba(39, 23, 23, 0.25);
  position: relative;
}

a:link,
a:visited {
  text-decoration: none;
}

.btn-secondary {
  width: 100%;
  background-color: #fff;
  color: #000;
  text-align: left;
  border: none;
}

.btn-secondary:hover {
  color: #000;
  background-color: #fff;
  border-color: none;
}

.btn-secondary:focus,
.btn-secondary.focus {
  box-shadow: none;
}

.facet-title::after {
  float: right;
  font-size: 2rem;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  transition: -webkit-transform 0.1s;
  transition: transform 0.1s;
  transition: transform 0.1s, -webkit-transform 0.1s;
}

.facet-title::after {
  content: "›";
}

.discount {
  font-size: 12px;
  text-align: left;
  color: #9e9e9e;
}

.discount-rate {
  font-weight: 700;
  color: #000;
  margin-left: 10px;
}
.price {
  font-size: 18px;
  color: #f57224;
  text-align: left;
  font-weight: 400;
}

.cart-button button.add-to-cart {
  border-radius: 45px;
  padding: 0 20px;
  min-width: 180px;
  margin-left: 0;
  max-width: 60%;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  visibility: hidden;
  bottom: 0;
  transition: 0.1s all;
}

.category-container:hover .cart-button button.add-to-cart {
  visibility: visible;
}

.cart-button {
  position: absolute;
  bottom: 25px;
}
</style>