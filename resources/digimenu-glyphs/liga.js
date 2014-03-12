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
			'warning': '&#xe600;',
			'user': '&#xe601;',
			'userTwo': '&#xe602;',
			'users': '&#xe603;',
			'userAdd': '&#xe604;',
			'twitter': '&#xe605;',
			'tools': '&#xe606;',
			'thumbsup': '&#xe607;',
			'tthumbsdown': '&#xe608;',
			'text': '&#xe609;',
			'textTwo': '&#xe60a;',
			'star': '&#xe60b;',
			'starTwo': '&#xe60c;',
			'newspaper': '&#xe60d;',
			'paperclip': '&#xe60e;',
			'pencil': '&#xe60f;',
			'phone': '&#xe610;',
			'pinterest': '&#xe611;',
			'plus': '&#xe612;',
			'popup': '&#xe613;',
			'question': '&#xe614;',
			'quote': '&#xe615;',
			'replyAll': '&#xe616;',
			'reply': '&#xe617;',
			'resizeEnlarge': '&#xe618;',
			'search': '&#xe619;',
			'new': '&#xe61a;',
			'mouse': '&#xe61b;',
			'mobile': '&#xe61c;',
			'minus': '&#xe61d;',
			'menu': '&#xe61e;',
			'map': '&#xe61f;',
			'location': '&#xe620;',
			'bulletList': '&#xe622;',
			'list': '&#xe623;',
			'linkedin': '&#xe624;',
			'lifebuoy': '&#xe625;',
			'layout': '&#xe626;',
			'dots': '&#xe627;',
			'ellipsis': '&#xe628;',
			'email': '&#xe629;',
			'facebook': '&#xe62a;',
			'flashlight': '&#xe62b;',
			'forward': '&#xe62c;',
			'googleplus': '&#xe62d;',
			'heart': '&#xe62e;',
			'helpTwo': '&#xe62f;',
			'heartTwo': '&#xe630;',
			'house': '&#xe631;',
			'info': '&#xe632;',
			'infoTwo': '&#xe633;',
			'document': '&#xe634;',
			'dot': '&#xe635;',
			'docs': '&#xe636;',
			'cross': '&#xe637;',
			'comment': '&#xe638;',
			'compass': '&#xe639;',
			'cog': '&#xe63a;',
			'layoutTwo': '&#xe63b;',
			'checkmark': '&#xe63c;',
			'chat': '&#xe63d;',
			'cart': '&#xe63e;',
			'briefcase': '&#xe63f;',
			'bookmark': '&#xe640;',
			'arrowDownSmall': '&#xe641;',
			'arrowLeft': '&#xe642;',
			'arrowUp': '&#xe643;',
			'arrowRight': '&#xe644;',
			'arrowDown': '&#xe645;',
			'arrowUpSmall': '&#xe646;',
			'bell': '&#xe647;',
			'book': '&#xe648;',
			'air': '&#xe649;',
			'addToList': '&#xe64a;',
			'help': '&#xe64b;',
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