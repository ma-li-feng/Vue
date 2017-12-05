import Vue from 'Vue'

import Router from 'vue-router'
import App from './components/app.vue'
import Home from './components/home/home.vue'
import NewsList from './components/news/newslist.vue';

Vue.use(Router)



let router = new Router

router.addRoutes([
{path:'/',redirect:{ name : 'home'}},{name:'home',path:'/home',component:Home},
	{ name: 'news.list', path: '/news/list', component: NewsList }
	])


import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css';
Vue.use(MintUi)
import './static/css/global.css'


import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://vue.studyit.io/api/';


new Vue({
	el:"#app",
	render:c => c(App),
	router

})
