module.exports = function(context, inject) {

	inject('base_url', function(url){
		const base_url = process.env.base_url;
		const site_url = base_url.toString().replace(/^\/+|\/+$/g, '');
		const url_to = url.replace(/^\/+|\/+$/g, '');
		return `${site_url}/${url_to}`
	});

}