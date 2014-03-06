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
			{'name': 'Specials', 'location': 'special'},
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
			'specials': [
				{
					'name': 'Hummus',
					'imgUrl': 'img/appetizer/Mushrooms.jpg',
					'description': 'Nunc pretium lectus augue, eget tincidunt arcu suscipit et. Donec vitae nisl in ante condimentum sollicitudin vel id elit.',
					'cost': '6.00'
				},
				{
					'name': 'Special2',
					'imgUrl': 'img/appetizer/GarlicBread.jpg',
					'description': 'Nunc pretium lectus augue, eget tincidunt arcu suscipit et. Donec vitae nisl in ante condimentum sollicitudin vel id elit.',
					'cost': '5.50'
				},
				{
					'name': 'Special3',
					'imgUrl': 'img/appetizer/Antipasto.jpg',
					'description': 'Nunc pretium lectus augue, eget tincidunt arcu suscipit et. Donec vitae nisl in ante condimentum sollicitudin vel id elit.',
					'cost': '5.00'
				}
			],
			'appetizers': [
				{
					'name': 'Stuffed Mushrooms',
					'imgUrl': 'img/appetizer/Mushrooms.jpg',
					'description': 'Nunc pretium lectus augue, eget tincidunt arcu suscipit et. Donec vitae nisl in ante condimentum sollicitudin vel id elit.',
					'cost': '6.00'
				},
				{
					'name': 'Garlic Bread',
					'imgUrl': 'img/appetizer/GarlicBread.jpg',
					'description': 'Nunc pretium lectus augue, eget tincidunt arcu suscipit et. Donec vitae nisl in ante condimentum sollicitudin vel id elit.',
					'cost': '5.50'
				},
				{
					'name': 'Antipasto',
					'imgUrl': 'img/appetizer/Antipasto.jpg',
					'description': 'Nunc pretium lectus augue, eget tincidunt arcu suscipit et. Donec vitae nisl in ante condimentum sollicitudin vel id elit.',
					'cost': '5.00'
				}
			],
			'entrees': [
				{
					'name': 'Lasagna Classico',
					'imgUrl': 'img/entree/Lasagna.jpg',
					'description': 'Layers of pasta, meat sauce and mozzarella, ricotta, parmesan and romano cheese.',
					'cost': '15.99'
				},
				{
					'name': 'Eggplant Parmigiana',
					'imgUrl': 'img/entree/Eggplant.jpg',
					'description': 'Lightly breaded eggplant, fried and topped with marinara sauce, mozzarella and parmesan cheese. Served with spaghetti.',
					'cost': '14.49'
				},
				{
					'name': 'Fettuccine Alfredo',
					'imgUrl': 'img/entree/Alfredo.jpg',
					'description': 'Parmesan cream sauce with a hint of garlic, served over fettuccine.',
					'cost': '14.49'
				}
			],
			'desserts': [
				{
					'name': 'Tiramisu',
					'imgUrl': 'img/dessert/Tiramisu.jpg',
					'description': 'The classic Italian dessert. A layer of creamy custard set atop espresso-soaked ladyfingers.',
					'cost': '7.29'
				},
				{
					'name': 'Chocolate Mousse Cake',
					'imgUrl': 'img/dessert/ChocolateCake.jpg',
					'description': 'Rich chocolate brownie topped with a layer of creamy chocolate mousse.',
					'cost': '5.59'
				},
				{
					'name': 'Lemon Cream Cake',
					'imgUrl': 'img/dessert/LemonCake.jpg',
					'description': 'Delicate white cake and lemon cream filling with a vanilla crumb topping.',
					'cost': '7.29'
				}
			],
			'drinks': [
				{
					'name': 'Pomegranate Gimlet',
					'imgUrl': 'img/drink/Pomegranate.jpg',
					'description': 'LetherbeeGin, Pomegranate Maracschino, Lime.',
					'cost': '11.00'
				},
				{
					'name': 'Classic Bellini',
					'imgUrl': 'img/drink/Bellini.png',
					'description': 'White Peach, Prosecco.',
					'cost': '11.00'
				},
				{
					'name': 'Margarita',
					'imgUrl': 'img/drink/Margarita.jpg',
					'description': 'Averna, Cynar, Lemon, Ginger Beer.',
					'cost': '11.00'
				}
			]
		}}
    );
};
