/*
 * Serve JSON to our AngularJS client
 */

exports.name = function (req, res) {
  	res.json({
  		name: 'Our Resturant'
  	});
};