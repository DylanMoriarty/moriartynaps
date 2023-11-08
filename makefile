IMGPATH:= app/assets/graphics/posts/

echo-caynon:
	echo "don't have a cow homer!";
	echo "don't have a cow homer!";
	echo "don't have a cow homer!";

optimizer:
	imageoptim -a $(IMGPATH)/$(POST)/*.png

test:
	echo woo
