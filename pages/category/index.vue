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
                <input
                  type="checkbox"
                  :name="a.name"
                  :id="a.name"
                  v-model="price"
                  :value="a.name | capitalize"
                />
                <label :for="a.name">{{a.name | capitalize}}</label>
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
                  <span>{{item.title}}</span>
                </div>
              </div>
            </nuxt-link>
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
      filtersAsNumbers: {
        "Under $25": [0, 25],
        "$25 to $50": [25, 50],
        "$51 to $100": [51, 100],
        "Over $100": [100, 1000000]
      },
      low: [],
      high: [],
      pageNumber: 0,
      items: 6,

      filters: [
        {
          title: "Brand",
          collapse: "collapse-a",
          options: [
            {
              name: "acer",
              model: "brandNames"
            },
            {
              name: "dell",
              model: "brandNames"
            },
            {
              name: "hp",
              model: "brandNames"
            }
          ]
        },

        {
          title: "Price",
          collapse: "collapse-b",
          options: [
            {
              name: "under $25",
              model: "price"
            },
            {
              name: "$25 to $50",
              model: "price"
            },
            {
              name: "$51 to $100",
              model: "price"
            },
            {
              name: "Over $100",
              model: "price"
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
              name: "xl",
              model: "size"
            },
            {
              name: "l",
              model: "size"
            }
          ]
        }
      ],

      categories: [
        {
          title: "Business",
          brand: "Dell",
          color: "Red",
          price: 52,
          image: require("../../assets/images/micro-1.png")
        },
        {
          title: "Tshirts",
          brand: "Calvin Klein",
          color: "Red",
          price: 102,
          size: "XL",
          image: require("../../assets/images/pro-1.png")
        },
        {
          title: "Shipping Bags",
          brand: "Gucci",
          color: "Red",
          price: 251,
          size: "L",
          image: require("../../assets/images/micro-1.png")
        },
        {
          title: "Traditional Laptops",
          brand: "Acer",
          color: "White",
          price: 103,

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
          (this.price.length === 0 ||
            (Object.keys(this.filtersAsNumbers)
              .filter(priceRange => this.price.includes(priceRange))
              .filter(priceRangeFiltered => {
                this.low = this.filtersAsNumbers[priceRangeFiltered][0];
                this.high = this.filtersAsNumbers[priceRangeFiltered][1];

                let low = this.filtersAsNumbers[priceRangeFiltered][0];
                let high = this.filtersAsNumbers[priceRangeFiltered][1];

                console.log(item.price >= low && item.price <= high);
              }) &&
              (item.price >= this.low && item.price <= this.high)))
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

.category-link {
  padding-top: 10px;
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
</style>