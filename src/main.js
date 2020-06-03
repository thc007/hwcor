// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import 'lib-flexible'
import 'babel-polyfill'
import 'es6-promise/auto'
import cssVars from 'css-vars-ponyfill'

cssVars({})
import { Row, Col, Carousel,CarouselItem,Container,Footer,Header,Aside,Image, Main,Collapse,CollapseItem} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import './assets/style/swiper.css' 
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(Image)
Vue.use(Main)
Vue.use(Container)
Vue.use(Footer)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Row)
Vue.use(Col)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
