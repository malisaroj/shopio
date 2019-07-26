<template>
  <carousel>
    <template slot="prev">
      <span class="prev">prev</span>
    </template>
    <div
      v-for="(item, index) in images"
      :key="index"
      class="d-flex align-items-center cover"
      :style="{'background-image': 'url(' + item.link + ')'}"
    >
      <div class="container">
        <div class="row justify-content-center justify-content-md-start">
          <div class="col-10 col-md-6 static">
            <h2 class="banner-title">Surface Studio</h2>
            <div class="banner-subtitle">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, neque. Nesciunt distinctio
              expedita voluptas?
            </div>
            <button>
              <a href="#">Buy Now</a>
            </button>
          </div>
        </div>
      </div>
    </div>
    <template slot="next">
      <span class="next">next</span>
    </template>
  </carousel>
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  components: {
    carousel
  },
  data() {
    return {

      images: [
        { link: '~/assets/img/Rounded Rectangle 1.png' },
        { link: '~/assets/img/Rounded Rectangle 1.png' },
        { link: '~/assets/img/Rounded Rectangle 1.png' }
      ]
    };
  }
};
</script>

<style>
</style>
