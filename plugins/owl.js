import Vue from 'vue'
import OwlCarousel from 'v-owl-carousel'
Vue.filter('two_digits', function (value) {
    if(value.toString().length <= 1)
    {
        return "0"+value.toString();
    }
    return value.toString();
});

Vue.component('carousel', OwlCarousel)