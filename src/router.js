import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
	mode: "history",
	scrollBehavior(to) {
		if (to.hash) {
			return {
				selector: to.hash
			};
		} else {
			return { x: 0, y: 0 };
		}
	},
	routes: [
		{
			path: "/",
			component: () => import("./components/Home.vue")
        },
        {
			path: "/Document",
			component: () => import("./components/Document.vue")
		},
		{
			path: "/Classify",
			component: () => import("./components/Classify.vue")
		},
		{
			path: "/Visualize",
			component: () => import("./components/Visualize.vue")
		},
		{
			path: "/loader",
			component: () => import("./components/Loader.vue")
		},
		{
			path: "/dataSelect",
			component: () => import("./components/DataSelect.vue")
		},
	]
});
