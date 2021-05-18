import Vue from 'vue';
import VueRouter from 'vue-router';
import Page from '../views/Page/Page.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'page',
		component: Page,
	},
	{
		path: '/home',
		name: 'Home',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "home" */ '../views/Home/Home.vue'),
	},
];

const router = new VueRouter({
	routes,
});

export default router;
