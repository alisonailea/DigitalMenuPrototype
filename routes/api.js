/*
 * Serve JSON to our AngularJS client
 */

exports.name = function (req, res) {
	res.json({
		name: 'Our Resturant',
	});
};

exports.navigation = function (req, res) {
	res.json({
		navigation: [
			{'name': 'Appetizers', 'location': 'appetizer'},
			{'name': 'Entrees', 'location': 'entrees'},
			{'name': 'Dessert', 'location': 'dessert'},
			{'name': 'Drink', 'location': 'drink'}
		]
	});
};

exports.menu = function (req, res) {
	res.json(
		{ 'menu': {
			'appetizers': [
				{
					'name': 'Stuffed Mushrooms',
					'imgUrl': 'img/appetizer/Mushrooms.png',
					'description': 'Nunc pretium lectus augue, eget tincidunt arcu suscipit et. Donec vitae nisl in ante condimentum sollicitudin vel id elit.',
					'cost': '6.00'
				},
				{
					'name': 'Garlic Bread',
					'imgUrl': 'img/appetizer/Bread.png',
					'description': 'Nunc pretium lectus augue, eget tincidunt arcu suscipit et. Donec vitae nisl in ante condimentum sollicitudin vel id elit.',
					'cost': '5.50'
				},
				{
					'name': 'Antipasto',
					'imgUrl': 'img/appetizer/Antipasto.png',
					'description': 'Nunc pretium lectus augue, eget tincidunt arcu suscipit et. Donec vitae nisl in ante condimentum sollicitudin vel id elit.',
					'cost': '5.00'
				}
			],
			'entrees': [
				{
					'name': 'Entree 1',
					'imgUrl': 'img/appetizer/Mushrooms.png',
					'description': 'Nunc pretium lectus augue, eget tincidunt arcu suscipit et. Donec vitae nisl in ante condimentum sollicitudin vel id elit.',
					'cost': '6.00'
				},
				{
					'name': 'Entree 2',
					'imgUrl': 'img/appetizer/Bread.png',
					'description': 'Nunc pretium lectus augue, eget tincidunt arcu suscipit et. Donec vitae nisl in ante condimentum sollicitudin vel id elit.',
					'cost': '5.50'
				},
				{
					'name': 'Entree 3',
					'imgUrl': 'img/appetizer/Antipasto.png',
					'description': 'Nunc pretium lectus augue, eget tincidunt arcu suscipit et. Donec vitae nisl in ante condimentum sollicitudin vel id elit.',
					'cost': '5.00'
				}
			]
		}}
    );
};