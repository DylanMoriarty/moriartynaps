document.addEventListener("DOMContentLoaded", function(e) {
	const postsParent = document.querySelector('.post-list')
	const chapters = document.querySelectorAll('.Chapterbox')
	const isArticle = document.querySelector('.article-content')

	// if(postsParent) {
	// 	Array.prototype.forEach.call(postsParent.children, child => {
	// 		let serendipity = Math.random() * 120 + 'px'

	// 		console.log(serendipity)

	// 		child.style.marginRight = serendipity
	// 		child.style.marginLeft = serendipity
	// 	});
	// }

	if(chapters) {
		document.addEventListener('scroll', function(e) {
			for (var i = chapters.length - 1; i >= 0; i--) {
				let chapter = chapters[i]
				let chapterOffset = chapter.offsetTop - (window.innerHeight / 2)

				if (window.scrollY > chapterOffset) {
					chapter.style.opacity = 1
				} else {
					chapter.style.opacity = 0.2
				}
			}
		})
	}
})

var prevScrollpos = window.pageYOffset;



