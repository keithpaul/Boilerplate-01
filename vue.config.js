module.exports = {
	css: {
		loaderOptions: {
			sass: {
				prependData: `@import "@/styles/_colours.scss";@import "@/styles/_fonts.scss";`,
			},
		},
	},
};
