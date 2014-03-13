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
			'specials': [
				{
					'id': 001,
					'name': 'Nachos',
					'imgUrl': 'img/specials/Nachos.png',
					'description': 'Tortilla chips topped with melted cheese, sliced chile peppers, sliced black olives, and chili sauce.',
					'cost': '6.00',
					'quantity': 0
				},
				{
					'id': 002,
					'name': 'Chicken Cordon Bleu',
					'imgUrl': 'img/specials/Chicken.png',
					'description': 'Breaded chicken breasts baked with provolone cheese and marinara sauce..',
					'cost': '5.50',
					'quantity': 0
				},
				{
					'id': 003,
					'name': 'Chocolate Martini',
					'imgUrl': 'img/specials/ChocolateMartini.png',
					'description': 'Chocolate syrup and garnished with maraschino cherries..',
					'cost': '5.00',
					'quantity': 0
				}
			],
			'appetizers': [
				{	
					'id': 004,
					'name': 'Stuffed Mushrooms',
					'imgUrl': 'img/appetizer/Mushrooms.jpg',
					'description': 'Mushrooms, stuffed with fresh spinach, romano cheese tooped with lemon creamy sauce .',
					'cost': '6.00',
					'quantity': 0
				},
				{
					'id': 005,
					'name': 'Garlic Bread',
					'imgUrl': 'img/appetizer/GarlicBread.jpg',
					'description': 'Crispy breadsticks with Garlic and parsley leaves.',
					'cost': '5.50',
					'quantity': 0
				},
				{
					'id': 006,
					'name': 'Antipasto',
					'imgUrl': 'img/appetizer/Antipasto.jpg',
					'description': 'Jarred roasted red and yellow peppers, garlic hummus and pita bread.',
					'cost': '5.00',
					'quantity': 0
				}
			],
			'entrees': [
				{
					'id': 007,
					'name': 'Lasagna Classico',
					'imgUrl': 'img/entree/Lasagna.jpg',
					'description': 'Layers of pasta, meat sauce and mozzarella, ricotta, parmesan and romano cheese.',
					'cost': '15.99',
					'quantity': 0
				},
				{
					'id': 008,
					'name': 'Eggplant Parmigiana',
					'imgUrl': 'img/entree/Eggplant.jpg',
					'description': 'Lightly breaded eggplant, fried and topped with marinara sauce, mozzarella and parmesan cheese. Served with spaghetti.',
					'cost': '14.49',
					'quantity': 0
				},
				{
					'id': 009,
					'name': 'Fettuccine Alfredo',
					'imgUrl': 'img/entree/Alfredo.jpg',
					'description': 'Parmesan cream sauce with a hint of garlic, served over fettuccine.',
					'cost': '14.49',
					'quantity': 0
				}
			],
			'desserts': [
				{
					'id': 010,
					'name': 'Tiramisu',
					'imgUrl': 'img/dessert/Tiramisu.jpg',
					'description': 'The classic Italian dessert. A layer of creamy custard set atop espresso-soaked ladyfingers.',
					'cost': '7.29',
					'quantity': 0
				},
				{
					'id': 011,
					'name': 'Chocolate Mousse Cake',
					'imgUrl': 'img/dessert/ChocolateCake.jpg',
					'description': 'Rich chocolate brownie topped with a layer of creamy chocolate mousse.',
					'cost': '5.59',
					'quantity': 0
				},
				{
					'id': 012,
					'name': 'Lemon Cream Cake',
					'imgUrl': 'img/dessert/LemonCake.jpg',
					'description': 'Delicate white cake and lemon cream filling with a vanilla crumb topping.',
					'cost': '7.29',
					'quantity': 0
				}
			],
			'drinks': [
				{
					'id': 013,
					'name': 'Pomegranate Gimlet',
					'imgUrl': 'img/drink/Pomegranate.jpg',
					'description': 'LetherbeeGin, Pomegranate Maracschino, Lime.',
					'cost': '11.00',
					'quantity': 0
				},
				{
					'id': 014,
					'name': 'Classic Bellini',
					'imgUrl': 'img/drink/Bellini.png',
					'description': 'White Peach, Prosecco.',
					'cost': '11.00',
					'quantity': 0
				},
				{
					'id': 015,
					'name': 'Margarita',
					'imgUrl': 'img/drink/Margarita.jpg',
					'description': 'Averna, Cynar, Lemon, Ginger Beer.',
					'cost': '11.00',
					'quantity': 0
				}
			]
		}}
    );
};
