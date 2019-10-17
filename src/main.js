// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import { Row, Col, Carousel,CarouselItem,Container,Footer,Header,Aside,Image, Main,Collapse,CollapseItem} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
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
