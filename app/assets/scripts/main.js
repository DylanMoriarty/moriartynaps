document.addEventListener("DOMContentLoaded", function(e) {
	const postsParent = document.querySelector('.post-list')
	const chapters = document.querySelectorAll('.Chapterbox')

	if(postsParent) {
		Array.prototype.forEach.call(postsParent.children, child => {
			let serendipity = Math.random() * 120 + 'px'

			console.log(serendipity)

			child.style.marginRight = serendipity
			child.style.marginLeft = serendipity
		});
	}

	if(chapters) {
		document.addEventListener('scroll', function(e) {
			for (var i = chapters.length - 1; i >= 0; i--) {
				let chapter = chapters[i]
				let chapterOffset = chapter.offsetTop - (window.innerHeight / 3)

				if (window.scrollY > chapterOffset) {
					chapter.style.opacity = 1
				} else {
					chapter.style.opacity = 0.2
				}
			}

		})

	 //    const fadeStart=100,
	 //    			fadeUntil=200,
	 //    			fading = $('#fading');

	 //    var offset = $(document).scrollTop()
	 //        ,opacity=0
	 //    ;
	 //    if( offset<=fadeStart ){
	 //        opacity=1;
	 //    }else if( offset<=fadeUntil ){
	 //        opacity=1-offset/fadeUntil;
	 //    }
	 //    fading.css('opacity',opacity).html(opacity);
		// })

	}
})

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".nav-down").style.top = "0";
  } else {
    document.querySelector(".nav-down").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}



