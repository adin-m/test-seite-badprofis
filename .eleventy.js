const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

eleventyConfig.setServerPassthroughCopyBehavior("copy");
eleventyConfig.addPassthroughCopy('./src/css');
eleventyConfig.addPassthroughCopy('./src/vendor');
eleventyConfig.addPassthroughCopy('./src/assets');
eleventyConfig.addPassthroughCopy('./src/admin');
eleventyConfig.addPassthroughCopy('./src/img');
eleventyConfig.addPassthroughCopy('./src/js');
eleventyConfig.addPassthroughCopy('./src/php');
eleventyConfig.addPassthroughCopy('./src/projekte');
eleventyConfig.addPassthroughCopy('./src/master');
eleventyConfig.addPassthroughCopy('./src/ajax');

eleventyConfig.addFilter("postDate", (dateObj) => {
	return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
})


return {
	dir: {
		input: "src",
		output: "public"
	}
};
}