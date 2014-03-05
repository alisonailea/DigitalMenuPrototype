/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
	'use strict';
	function supportsProperty(p) {
		var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
			i,
			div = document.createElement('div'),
			ret = p in div.style;
		if (!ret) {
			p = p.charAt(0).toUpperCase() + p.substr(1);
			for (i = 0; i < prefixes.length; i += 1) {
				ret = prefixes[i] + p in div.style;
				if (ret) {
					break;
				}
			}
		}
		return ret;
	}
	var icons;
	if (!supportsProperty('fontFeatureSettings')) {
		icons = {
			'mobile': '&#xe601;',
			'email': '&#xe603;',
			'phone': '&#xe600;',
			'mouse': '&#xe602;',
			'pencil': '&#xe604;',
			'paperclip': '&#xe605;',
			'reply': '&#xe606;',
			'replyAll': '&#xe607;',
			'forward': '&#xe608;',
			'user': '&#xe609;',
			'users': '&#xe60a;',
			'userAdd': '&#xe60b;',
			'house': '&#xe60c;',
			'popup': '&#xe60d;',
			'quote': '&#xe60e;',
			'comment': '&#xe60f;',
			'chat': '&#xe610;',
			'thumbsDown': '&#xe611;',
			'thumbsUp': '&#xe612;',
			'star': '&#xe613;',
			'starTwo': '&#xe614;',
			'heart': '&#xe615;',
			'heartTwo': '&#xe616;',
			'location': '&#xe617;',
			'map': '&#xe618;',
			'compass': '&#xe619;',
			'locationTwo': '&#xe61a;',
			'search': '&#xe61b;',
			'flashlight': '&#xe61c;',
			'arrowLeft': '&#xe61d;',
			'arrowDown': '&#xe61e;',
			'arrowUp': '&#xe61f;',
			'arrowRight': '&#xe620;',
			'arrowLeftTwo': '&#xe621;',
			'arrowDownTwo': '&#xe622;',
			'arrowUpTwo': '&#xe623;',
			'arrowRightTwo': '&#xe624;',
			'arrowLeftThree': '&#xe625;',
			'arrowDownThree': '&#xe626;',
			'arrowUpThree': '&#xe627;',
			'arrowRightThree': '&#xe628;',
			'menu': '&#xe629;',
			'ellipsis': '&#xe62a;',
			'dots': '&#xe62b;',
			'dot': '&#xe62c;',
			'resizeEnlarge': '&#xe62d;',
			'book': '&#xe62e;',
			'bookmark': '&#xe62f;',
			'document': '&#xe630;',
			'text': '&#xe631;',
			'docs': '&#xe632;',
			'textTwo': '&#xe633;',
			'list': '&#xe634;',
			'layout': '&#xe635;',
			'addToList': '&#xe636;',
			'listTwo': '&#xe637;',
			'minus': '&#xe638;',
			'plus': '&#xe639;',
			'info': '&#xe63a;',
			'infoTwo': '&#xe63b;',
			'question': '&#xe63c;',
			'help': '&#xe63d;',
			'warning': '&#xe63e;',
			'cross': '&#xe63f;',
			'checkmark': '&#xe640;',
			'grid': '&#xe641;',
			'cart': '&#xe642;',
			'newspaper': '&#xe643;',
			'lifebuoy': '&#xe644;',
			'briefcase': '&#xe645;',
			'air': '&#xe646;',
			'new': '&#xe647;',
			'tools': '&#xe648;',
			'cog': '&#xe649;',
			'bell': '&#xe64a;',
			'linkedin': '&#xe64b;',
			'googleplus': '&#xe64c;',
			'pinterest': '&#xe64d;',
			'facebook': '&#xe64e;',
			'twitter': '&#xe64f;',
			'arrowDownFour': '&#xe650;',
			'arrowUpFour': '&#xe651;',
			'0': 0
		};
		delete icons['0'];
		window.icomoonLiga = function (els) {
			var classes,
				el,
				i,
				innerHTML,
				key;
			els = els || document.getElementsByTagName('*');
			if (!els.length) {
				els = [els];
			}
			for (i = 0; ; i += 1) {
				el = els[i];
				if (!el) {
					break;
				}
				classes = el.className;
				if (/icon-/.test(classes)) {
					innerHTML = el.innerHTML;
					if (innerHTML && innerHTML.length > 1) {
						for (key in icons) {
							if (icons.hasOwnProperty(key)) {
								innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
							}
						}
						el.innerHTML = innerHTML;
					}
				}
			}
		};
		window.icomoonLiga();
	}
}());