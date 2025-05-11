start:
	bundle exec jekyll serve --livereload --open-url

all-optim:
	imageoptim 'raw/assets/graphics'

optim:
	imageoptim 'raw/assets/graphics/posts/optim'

# imageoptim 'raw/assets/graphics/posts/$(POST)'
