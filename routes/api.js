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
			{'name': 'Dessert', 'location': 'desserts'},
			{'name': 'Drink', 'location': 'drinks'}
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
					'name': 'Lasagna Classico',
					'imgUrl': 'img/appetizer/Mushrooms.png',
					'description': 'Layers of pasta, meat sauce and mozzarella, ricotta, parmesan and romano cheese.',
					'cost': '15.99'
				},
				{
					'name': 'Eggplant Parmigiana',
					'imgUrl': 'img/appetizer/Bread.png',
					'description': 'Lightly breaded eggplant, fried and topped with marinara sauce, mozzarella and parmesan cheese. Served with spaghetti.',
					'cost': '14.49'
				},
				{
					'name': 'Fettuccine Alfredo',
					'imgUrl': 'img/appetizer/Antipasto.png',
					'description': 'Parmesan cream sauce with a hint of garlic, served over fettuccine.',
					'cost': '14.49'
				}
			],
			'desserts': [
				{
					'name': 'Tiramisu',
					'imgUrl': 'img/appetizer/Mushrooms.png',
					'description': 'The classic Italian dessert. A layer of creamy custard set atop espresso-soaked ladyfingers.',
					'cost': '7.29'
				},
				{
					'name': 'Chocolate Mousse Cake',
					'imgUrl': 'img/appetizer/Bread.png',
					'description': 'Rich chocolate brownie topped with a layer of creamy chocolate mousse.',
					'cost': '5.59'
				},
				{
					'name': 'Lemon Cream Cake',
					'imgUrl': 'img/appetizer/Antipasto.png',
					'description': 'Delicate white cake and lemon cream filling with a vanilla crumb topping.',
					'cost': '7.29'
				}
			],
			'drinks': [
				{
					'name': 'Pomegranate Gimlet',
					'imgUrl': 'img/appetizer/Mushrooms.png',
					'description': 'LetherbeeGin, Pomegranate Maracschino, Lime.',
					'cost': '11.00'
				},
				{
					'name': 'Classic Bellini',
					'imgUrl': 'img/appetizer/Bread.png',
					'description': 'White Peach, Prosecco.',
					'cost': '11.00'
				},
				{
					'name': 'Sicilian Mule',
					'imgUrl': 'img/appetizer/Antipasto.png',
					'description': 'Averna, Cynar, Lemon, Ginger Beer.',
					'cost': '11.00'
				}
			]
		}}
    );
};