(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"/home/travis/build/DylanMoriarty/moriartynaps/app/assets/scripts/main.js":[function(require,module,exports){
document.addEventListener("DOMContentLoaded", function (e) {
	const postsParent = document.querySelector('.post-list');
	const chapters = document.querySelectorAll('.Chapterbox');
	const isArticle = document.querySelector('.article-content');

	// if(postsParent) {
	// 	Array.prototype.forEach.call(postsParent.children, child => {
	// 		let serendipity = Math.random() * 120 + 'px'

	// 		console.log(serendipity)

	// 		child.style.marginRight = serendipity
	// 		child.style.marginLeft = serendipity
	// 	});
	// }

	if (chapters) {
		document.addEventListener('scroll', function (e) {
			for (var i = chapters.length - 1; i >= 0; i--) {
				let chapter = chapters[i];
				let chapterOffset = chapter.offsetTop - window.innerHeight / 2;

				if (window.scrollY > chapterOffset) {
					chapter.style.opacity = 1;
				} else {
					chapter.style.opacity = 0.2;
				}
			}
		});
	}
});

var prevScrollpos = window.pageYOffset;

},{}]},{},["/home/travis/build/DylanMoriarty/moriartynaps/app/assets/scripts/main.js"])

//# sourceMappingURL=bundle.js.map
