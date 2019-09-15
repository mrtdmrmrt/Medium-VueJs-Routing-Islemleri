import Vue from "vue"
import VueRouter from "vue-router"


import HomePage from "./components/HomePage"
import About from "./components/About"


Vue.use(VueRouter)
export const router = new VueRouter({
	routes : [
		{path: "/" , name: "/" ,component: HomePage},
		{path: "/about" , name: "about" ,component: About}
		
	],
	mode : "history"
})



