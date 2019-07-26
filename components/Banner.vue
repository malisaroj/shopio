<template>

  <no-ssr>
  <carousel :items=1 :nav="false"  :autoplay="true" :loop="true" :autoplayTimeout="8000" :stagePadding=60>

    <div
      v-for="(item, index) in banner"
      :key="index"
      class="d-flex align-items-center cover"
      :style="{'background-image': 'url(' + item.image + ')'}"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-10 col-md-6 static">
            <h2 class="banner-title">{{ item.name }}</h2>
            <div class="banner-subtitle">
                {{ item.info }}
            </div>
            <button>
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
  components: {
    
  },
  data() {
    return {
                    banner: [
                    {
                        name: 'Apple MacBook Pro',
                        info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, neque. Nesciunt distinctio',
                        image: require('../assets/images/Rounded-Rectangle-1.png')                    
                        },
                    {
                        name: 'Apple MacBook Pro',
                        info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, neque. Nesciunt distinctio',
                        image: require('../assets/images/Rounded-Rectangle-1.png')                    
                        },
                    {
                        name: 'Apple MacBook Pro',
                        info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, neque. Nesciunt distinctio',
                        image: require('../assets/images/Rounded-Rectangle-1.png')                    
                        },


                    ]
        }
  }
};
</script>

<style scoped>
 .cover {
    min-height: 500px;
    background-repeat: no-repeat;
    margin-bottom: 30px;
    max-width: 100%;
 }

</style>
