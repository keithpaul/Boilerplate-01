<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Page</router-link> |
			<router-link to="/home">Home</router-link>
		</div>
		<router-view />
	</div>
</template>

<script>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
	name: 'App',
	mounted() {
		ScrollTrigger.create({
			markers: true,
			start: 'top top',
			end: 999,
			onUpdate: (self) => {
				console.log(self);
			},
		});
	},
};
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
