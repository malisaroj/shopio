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
          <h5>{{filter.title}}</h5>
          <hr />
          <div v-if="filter.title === 'Brand'">
            <div v-for="(a, b) in filter.options" :key="b">
              <input
                type="checkbox"
                :name="a.name"
                :id="a.name"
                v-model="brandNames"
                :value="a.value"
              />
              <label :for="a.name">{{a.value}}</label>
            </div>
          </div>

          <div v-else-if="filter.title === 'Price'">
            <div v-for="(a, b) in filter.options" :key="b">
              <input type="checkbox" :name="a.name" :id="a.name" v-model="price" :value="a.value" />
              <label :for="a.name">{{a.value}}</label>
            </div>
          </div>

          <div v-else-if="filter.title === 'Size'">
            <div v-for="(a, b) in filter.options" :key="b">
              <input type="checkbox" :name="a.name" :id="a.name" v-model="size" :value="a.value" />
              <label :for="a.name">{{a.value}}</label>
            </div>
          </div>

          <div v-else>
            <div v-for="(a, b) in filter.options" :key="b">
              <input type="checkbox" :name="a.name" :id="a.name" v-model="color" :value="a.value" />
              <label :for="a.name">{{a.value}}</label>
            </div>
          </div>
        </div>
      </div>

      <div class="col-9">
        <div class="row">
          <div v-for="(item, index) in filteredItems" :key="index" class="col-3 category-container">
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

      low: "50",
      high: "100",

      filters: [
        {
          title: "Brand",
          options: [
            {
              name: "acer",
              value: "Acer",
              model: "brandNames"
            },
            {
              name: "dell",
              value: "Dell",
              model: "brandNames"
            },
            {
              name: "hp",
              value: "Hp",
              model: "brandNames"
            }
          ]
        },

        {
          title: "Price",
          options: [
            {
              name: "under25",
              value: "Under $25",
              model: "price"
            },
            {
              name: "25to50",
              value: "$25 to $50",
              model: "price"
            },
            {
              name: "51to100",
              value: "$51 to $100",
              model: "price"
            },
            {
              name: "over100",
              value: "Over $100",
              model: "price"
            }
          ]
        },

        {
          title: "Color",
          options: [
            {
              name: "red",
              value: "Red",
              model: "color"
            },
            {
              name: "white",
              value: "White",
              model: "color"
            }
          ]
        },

        {
          title: "Size",
          options: [
            {
              name: "xl",
              value: "XL",
              model: "size"
            },
            {
              name: "l",
              value: "L",
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
    this.priceFilter()
      return this.categories.filter(item => {
        return (
          (this.brandNames.length === 0 ||
            this.brandNames.some(i => i.includes(item.brand))) &&
          (this.search.length === 0 ||
            item.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1) &&
          (this.color.length === 0 ||
            this.color.some(j => j.includes(item.color))) &&
          (this.size.length === 0 ||
            this.size.some(k => k.includes(item.size))) &&
          /* printing in console works but not updating in view */
          (this.price.length === 0 ||
            (item.price >= this.low && item.price <= this.high))
        );
      });
    }
  },
  methods: {
    priceFilter: function() {
      return this.categories.filter(item => {
        Object.keys(this.filtersAsNumbers)
          .filter(priceRange => this.price.includes(priceRange))
          .filter(priceRangeFiltered => {
            this.low = this.filtersAsNumbers[priceRangeFiltered][0];

            this.high = this.filtersAsNumbers[priceRangeFiltered][1];
           /*  item.price >= low && item.price <= high;
            if (item.price >= low && item.price <= high) {
              console.log(item);
            } */
          });
      }
      )}
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
</style>