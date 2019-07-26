<template>
  <no-ssr>
    <carousel
      :items="1"
      :nav="true"
      :autoplay="true"
      :loop="true"
      :autoplayTimeout="8000"
      :stagePadding="100"
    >
      <div
        v-for="(item, index) in banner"
        :key="index"
        class="d-flex align-items-center cover"
        :style="{'background-image': 'url(' + item.image + ')'}"
      >
        <div class="container">
          <div class="row justify-content-center justify-content-md-start pl-5">
            <div class="col-10 col-md-6 static">
              <h2 class="banner-title">{{ item.name }}</h2>
              <div class="banner-subtitle">{{ item.info }}</div>
              <button class="btn">
                <a href="#">Buy Now</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </carousel>
  </no-ssr>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      banner: [
        {
          name: "Apple MacBook Pro",
          info:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, neque. Nesciunt distinctio",
          image: require("../assets/images/Rounded-Rectangle-1.png")
        },
        {
          name: "Apple MacBook Pro",
          info:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, neque. Nesciunt distinctio",
          image: require("../assets/images/Rounded-Rectangle-1.png")
        },
        {
          name: "Apple MacBook Pro",
          info:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, neque. Nesciunt distinctio",
          image: require("../assets/images/Rounded-Rectangle-1.png")
        }
      ]
    };
  }
};
</script>

<style scoped>
.cover {
  min-height: 500px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.banner-title {
  font-weight: 300;
  font-size: 36px;
  text-transform: capitalize;
  margin-bottom: 20px;
  color: #fff;
}

.banner-subtitle {
  font-weight: 300;
  font-size: 13px;
  line-height: 1.692em;
  text-transform: capitalize;
  margin-bottom: 35px;
  color: #fff;
}

button {
  background-color: white;
  text-transform: capitalize;
  font-weight: 300;
  font-size: 13px;
  border-radius: 0;
  height: 54px;
  width: 139px;
  line-height: 1.692em;
}

button a {
  color: #000;
  text-align: center;
}

</style>
