---
layout: post
title:  Command Line Carto III – Loops

date:   2021-4-20 00:0:01 +0100

type: code

twit-img: "https://moriartynaps.org/assets/graphics/posts/19-album/twi-img.jpg"

soc-descrip: "The search for the next great album-inspired map pastiche"
soc-url: "https://moriartynaps.org/covers/"
soc-type: "article"
soc-img: "https://moriartynaps.org/assets/graphics/posts/19-album/soc-img.jpg"

visible: true
centerAlign: false

song: ""
songurl: https://www.youtube.com/embed/videoseries?list=PL1KbmvLItolRmdKx3C1Fe5rulq7rW5JWH

---

{% include postimg.html imgsrc="posts/23-command-three/intro.png" class="post-image__first" %}

<aside>This is the third part of a series for Command Line Cartography. Miss the previous ones? Worry not. <a href="https://moriartynaps.org/command-carto-part-one/#shop" target="_blank">Part one</a> will introduce you to the terminal and what the command line is. In <a href="http://localhost:3000/command-carto-part-two/" target="_blank">Part two</a> you'll be meet makefiles.</aside>

So far, we've just worked explicitly – telling our makefile what our input is, and what the output should be. For all the reasons aforementioned, this can be plenty handy in of itself. However, the real ✨ shine ✨ behind programmatic carto work is being able to run your workflow over any amount of files in one go.

Instead of working on a single file, looping allows us to iterate over any number of em', all with the same commands.

Some use cases:
- Project, style, and crop multiple raster images
- Work with datasets (such as state data) consistently without the need to merge them together or repeat workflows manually
- Splitting a stupidly large shapefile by attributes and work with the output

...and that's just focusing on GIS-specific tasks. All of the stuff covered in this tutorial will be applicable for _any_ CLI tool. If you wanted to, say:

- Download fifty files from an FTP site without manually clicking on each link
- Run <a href="https://imagemagick.org/script/index.php" target="_blank">ImageMagick</a> over a folder of images 
- Convert a folder of static images to a video or using <a href="https://www.ffmpeg.org/" target="_blank">ffmpeg</a> or a gif

...you'll learn all the tools here to do so.

OK - enough salesmanship. Let's get loopy.

{% include chapter1.html %}1.
{% include chapter2.html %}The Tools
{% include chapter3.html %}

{% include postimg.html imgsrc="posts/23-command-three/for-loop-build.png" class="post-image__first" %}

If you've followed along with <a href="https://moriartynaps.org/command-carto-part-one/" target="_blank">part one</a> and <a href="https://moriartynaps.org/command-carto-part-two/" target="_blank">two</a>, you already have most of the tools we'll use this round.

The new kid on the block is going to be **GDAL**. If you've used QGIS, chance is good you've used GDAL incidentally. In fact, if you have QGIS installed, you already have it installed as well. To test:

- Open your terminal
- Type `gdalwarp --h` and hit enter.
- If your terminal responds with ```Usage: gdalwarp [--help-general] [--formats]...```, you're good to go! Otherwise, you can <a href="https://gdal.org/download.html" target="_blank">install it from here.</a>

Finally, here's some files you'll need for the rest of the tutorial. Letsago!

{% include chapter1.html %}2.
{% include chapter2.html %}Loops!
{% include chapter3.html %}

{% include postimg.html imgsrc="posts/23-command-three/for-loop.png" class="post-image__first" %}

Loops are code that run X times. Where X can be any number greater than one - and hopefully smaller than infinity. Giving a computer a task that goes on indefinitely won't fry it, but it will stall the poor thing out. We can manually tell our makebot to do a command five times, 

<div class="code-block-fix">
  <code class="code-block code-makefile">manualrun:
  echo run
  echo run
  echo run
  echo run
  echo run</code>
  <div class="code-ref">1.1</div>
</div>

_or_ we could create a loop that runs five times.

<div class="code-block-fix">
  <code class="code-block code-makefile">looprun:
  for num in 1 2 3 4 5; do \
    echo run; \
  done</code>
  <div class="code-ref">1.2</div>
</div>

```for``` is the magic command we'll get to know. The basic setup is:

<div class="code-block-fix">
  <code class="code-block code-makefile">for X in Y; do \
  COMMANDS; \
done</code>
</div>

_The syntax is very important here._ Like with mapshaper, a for loop needs to technically be delivered in one line. The ```\```'s allow us to break the line for our human eyeball's sake, but computer's won't register them.

The ```;``` desiginate a break in the code without it being a new line. This lets us write multiple commands that the computer can correctly interpret as:

<div class="code-block-fix">
  <code class="code-block code-makefile">for X in Y; do \
  RUN COMMAND ONE; \
  THEN RUN COMMAND TWO; \
  THEN RUN COMMAND THREE; \
done</code>
</div>

Most importantly is the very first line, ```for X in Y```. In our first example, this was written as for `num` in `1 2 3 4 5`. Y can be any set of strings seperated by spaces. The length of this list is how many times our loop will run, once for each item in it.

X is the variable name we can use to call those strings in the looped commands. So long as it isn't already defined, you can name it whatever you'd like. Inside the loop we can then refer to whichever item from Y we're on by calling ```$$X```, which is whatever you declared X as. Try running:

{% include postimg.html imgsrc="posts/23-command-three/fruit.png" class="post-image__first" %}

<div class="code-block-fix">
  <code class="code-block code-makefile">fruitloop:
  for fruit in banana apple pear; do \
    echo $$fruit; \
  done</code>
</div>

This should spit back the list of fruits. Let's try a more practical application, using filenames instead of good food.

<div class="code-block-fix">
  <code class="code-block code-makefile">shpToJson:
  for file in colorado newyork wisconsin; do \
    mapshaper example-one/$$file.shp \
      -format geojson \
      -o example-one/$$file.json; \
  done</code>
</div>

Makefiles demand a strict syntax, but thankfully they're smart enough to deliniate our variable ```file``` from the rest of the words it's surrounded by. This means instead it will correctly parse our file locations as ```example-one/newyork.shp``` and ```example-one/wisconsin.shp```.

As shown above, we can also use that variable as many times as we want within the loop. And it can be part of the path name, instead of the full path. With a minor tweak to the above script, we can create an output folder for the processed json's to be saved into, then save em' there. All while keeping the input safe and unchanged.

<div class="code-block-fix">
  <code class="code-block code-makefile">shpToJson_Cleaner:
  mkdir -p example-one-output
  for file in colorado newyork wisconsin; do \
    mapshaper example-one/$$file.shp \
      -format geojson \
      -o example-one-output/$$file.json; \
  done</code>
</div>

You may be saying "Boy howdy, writing out each filename in the `for` line seems annoying." And you'd be right. Next up, how simplify that.

{% include chapter1.html %}3.
{% include chapter2.html %}Writing a List
{% include chapter3.html %}

{% include postimg.html imgsrc="posts/23-command-three/boy-howdy.png" class="post-image__first" %}

In part two we learned how to declare variables and use them in later commands. Following suit, we could rewrite our last command with a variable:

<div class="code-block-fix">
  <code class="code-block code-makefile">FILES=colorado newyork wisconsin

listStateData_Variable:
  for file in $(FILES); do \
    echo $$file; \
  done</code>
</div>

This is mildly better, but still not very viable for folders with oodles of files. Make has some in-built functions that can help.

<div class="code-block-fix">
  <code class="code-block code-makefile">FILES_WILDCARD=$(wildcard example-one/*)

listStateData_Wildcard:
  for file in $(FILES_WILDCARD); do \
    echo $$file; \
  done</code>
</div>

Much like how we call variables, you can call functions with `$(FUNCTION arguments)`. In this case `$(wildcard pattern)` is a function built into Make that returns a space seperated list of files that match the pattern we give it. Convinent!

That should return a list for files in the folder _example-one_. You could work with that, but because the variable is the whole path, we won't be able to save our output to a different file. Not to mention this lists out _every_ file in the folder, so ack, it's also returning the jsons we made earlier.

This also butts heads with shapefiles, given each one shapefile comes in packs of 4-6 separate files with differing extensions. More functions to the rescue;

<div class="code-block-fix">
  <code class="code-block code-makefile">FILES=$(wildcard example-one/*.shp)</code>
</div>

Will return just files that end in ```.shp```. So, ```example-one/colorado.shp example-one/newyork.shp example-one/wisconsin.shp```

While,

<div class="code-block-fix">
  <code class="code-block code-makefile">FILES=$(notdir $(wildcard example-one/*.shp))</code>
</div>


```notdir```, i.e. '_Not Directory_', will ensure the output is _just_ the filename: ```colorado.shp newyork.shp wisconsin.shp```.

Finally,

{% include postimg.html imgsrc="posts/23-command-three/files.png" class="post-image__first" %}

<div class="code-block-fix">
  <code class="code-block code-makefile">FILES=$(basename $(notdir $(wildcard example-one/*.shp)))</code>
</div>

```basename``` will drop any extensions, giving us a clean ```colorado newyork wisconsin``` list. We can always write out folders and extensions in the loop, so this way we free ourselves up to find our input and put our output anywhere, and as anything! 

Putting it altogether we have:

<div class="code-block-fix">
  <code class="code-block code-makefile">FILES_BASE=$(basename $(notdir $(wildcard example-one/*.shp)))

shpToJsonVariable:
	mkdir -p example-one-output
		for file in $(FILES_BASE); do \
			mapshaper example-one/$$file.shp \
			-format geojson \
			-o example-one-output/$$file.json; \
	done</code>
</div>

Worth noting, if you chain multiple commands together Make won't check the variable until it's called in a command. This means you can set this variable to check a folder that doesn't exisit yet. So long as the folder you're searching contains files by the time you call it, you're good.

---------------------

That works well and good for a list of files. Sometimes we want to loop over a specified list of text instead though. For example, looping over a series of URL's for downloading files.

The first step for that would be to generate a list of the strings you want as a CSV. There's a million ways to do that, but most straightforward might be to write them out in Excel or Google Sheets, then download them.

Whichever way you get your file of strings, we can assign it's contents to a variable like so:

{% include postimg.html imgsrc="posts/23-command-three/cat.png" class="post-image__first" %}

<div class="code-block-fix">
  <code class="code-block code-makefile">LIST=example-one/list.csv
CONTENT=`cat $(LIST)`</code>
</div>

```cat``` is short for concatenate. If used on any file, it'll return the contents of the file. The ``` ` ``` tell Make that it should understand the inside text as a command and not as a string.

Just like with our previous example, this can be used to pass along a list of items to our for loop.

<div class="code-block-fix">
  <code class="code-block code-makefile">LIST=example-one/list.csv
CONTENT=`cat $(LIST)`

shpToJson_List:
  mkdir -p example-one-output
  for file in $(CONTENT); do \
    mapshaper example-one/$$file.shp \
      -format geojson \
      -o example-one-output/$$file.json; \
  done</code>
</div>

Now let's see some loops in action.

{% include chapter1.html %}4.
{% include chapter2.html %}Weather Animations
{% include chapter3.html %}

<aside><i>Preface</i> | there's 100% better ways to achieve the results of the following tutorial. This is intended to highlight what you can achieve with loops while also introducing command line workflows for raster gis files. For best approaches for making weather animations, look to QGIS's Temporal Controller or Google Earth Engine.</aside>

<aside><i>Second preface</i> | this tutorial is going to download buckets of data onto your computer. Make sure you've got a solid internet connection and a couple gigabytes to spare.</aside>

Strap in, we're going to write commands to:

<ol>
	<li>Download the past 12 hours worth of weather data</li>
	<li>Convert each hour's worth of data into a geotiff</li>
	<li>Style each hour's data according to the temperature</li>
	<li>Merge those images into a single gif</li>
<!-- 	<li>Overlay an image over that</li> -->
</ol>

#### The fetch

The data we're going to use is NOAA's Real-Time Mesoscale Analysis. This file is a wealth of weather data.

Of ways to access it, we're going to use NOAA's FTP site where they post it each day. Now _you could_ manually click on each file to download. No one's got that kinda time tho.

<div class="code-block-fix">
<code class="code-block code-makefile">URLS=`cat second-example/links.txt`

  fetcher:
	mkdir -p data
	cd data
	for url in $(URLS); do \
		curl -O $$url; \
	done</code>
</div>

Hopefully you recognize the bits and pieces there. We're:
- Parsing a list of links, saved as a TXT file
- Creating a folder for the data, 
- Entering the folder
- For each URL in that txt file, downloading it

Worth noting you can do variations of this for batch downloading anything hittable with a web URL. If you wanted to download that Microsoft building dataset for the entire U.S., you could write a txt file with all 50 states in it and loop on that. Lots of possibilities here!

#### Extracting the Data

So now we have a folder full of mystery .grib2 files. Grib stands for 'GRIdded Binary' and is something you'll encounter with weather datasets fairly often. Think of it as a brief case full of raster images. Each image is given a number, or a band, of which we can pull it out with.

You're already familiar with bands if you've done anything with RGB images. In that color space, every color is three plates of red, green, and blue values smashed together. Here, instead of being smashed together, each band is it's own layer.

RTMA has a bucket-load of layers, each a different weather phenomena. We only need one layer, so like a jenga block we want to pull just one out and save it as something more manageable; a good ol' geotiff. It's worth checking out what the other layers contain as well though! RTMA is a wealth of weather data.

Here's how we dig *just* the raster we want from the pile.

<div class="code-block-fix">
<code class="code-block code-makefile">FILES=$(basename $(notdir $(wildcard data/*)))

exportBand:
	mkdir -p band
	for f in $(FILES); do \
		gdal_translate -b 9 data/$$f -of Gtiff band/$$f.tiff; \
	done</code>
</div>

The new command up there is `gdal_translate`. Unlike Mapshaper, gdal comes in bits and pieces. Translate is the goto for converting rasters between formats, and resampling/resizing. You can read all about what this and all other <a href="https://gdal.org/programs/gdal_translate.html" target="_blank">gdal commands can do here</a>.

Our command we're running on each file here reads:

```Call gdal_translate, pick band 3, open [INPUT], save it as a Geotiff, and save it to [OUTPUT]```

This will work for any grib file, but **be warned**! There is no consistency between different grib sources. RTMA will be consistent, but if you try this out on a different NOAA dataset, the bands may represent different things. Some may have two bands, others dozens. Windspeed may be located on band 8 in some, and 3 in others. It's imperative you find an explainer file for the dataset you're using to ensure you're using the right image!

For RTMA, we can see what the bands translate on [Google Earth Engine here](https://developers.google.com/earth-engine/datasets/catalog/NOAA_NWS_RTMA). We're going to make a temperature map, so we want the third band.

This is also where our pickiness with the file names pays off. By only using the file name and no extension or directory, we can use it for both the input and output. Running the above command, you should now have a data folder that's sitting pretty and a shiny new band folder with the same amount of files, but in geotiff. Non-destructive repeatable GIS hoorah!

#### (Optional) Projections

RTMA by default comes down in a variation on Albers U.S. making this step optional. Projections will come up a lot tho! So it'll probably be worth seeing that quick.

<div class="code-block-fix">
<code class="code-block code-makefile">
exportBand:
  mkdir -p proj
  for f in $(FILES); do \
    gdal_warp -s_srs "+" -t_srs "+" band/$$f.tiff proj/$$f.tiff; \
  done</code>
</div>

`gdal_warp` is the library that handles taking an image that's in one projection and warp it into another.

`s_srs` is the source, or the original files projection. `t_srs` is the target, or desired 



#### Color by the Numbers

The final flavor of gdal we'll encounter today is `gdaldem`, which let's us apply a color gradient to a geotiff based on it's values. The command name hints this functionality was meant for coloring elevation models, but it works fine for this too!

You will need another external file, a guide for gdaldem to color-by-the-numbers by. I've prepped one for you already, but if you're curious welcome ya 

<div class="code-block-fix">
  <code class="code-block code-makefile">colorize:
	mkdir -p colorize
	for f in $(FILES); do \
		gdaldem color-relief  band/$$f.tiff color.txt colorize/$$f.tif; \
	done
  </code>
</div>

#### Animating

With that, we've got our frames for the animation. We just need to put it all together. Once you can stop caring about the georeference, you can leave gdal behind and kick open `ImageMagick`. This is a library that handles

<div class="code-block-fix">
  <code class="code-block code-makefile">gif:
	convert -delay 15 -loop 0 $(DATS2) gif.gif
</code>
</div>

#### Overlay geographic data

<div class="code-block-fix">
  <code class="code-block code-makefile">composite:
	convert gif.gif \
		-coalesce \
		null: overlay/overlay.png \
		-gravity center \
		-layers composite \
		result.gif</code>
</div>



{% include chapter1.html %}5.
{% include chapter2.html %}Final Notes
{% include chapter3.html %}

As I've tried to stress throughout these tutorials, Make is an old language. But a lot of the concepts covered here are universal to programming languages. Python and Node are fantastic alternatives to using this antiquated language - but the general workflow and way of thinking about CLI Carto should translate well.




<br>

<i>– D.M., live from Bryant Park<br>
<span class="post-date">April 26th, 2022</span></i>

<div class="notes">
  <p>If you've read this and notice any parts that still seem super confusing, or just have any other questions feel free to reach out to me on Twitter!</p>
  <p>Quick kudos to Matthew Bloch for both creating Mapshaper and sparking a huge interest in it in me during his talk at NACIS in 2017.</p>
  <p>And finally another quick kudos to <a href="https://twitter.com/dereklieu">Derek Lieu</a> for inadvertently introducing me to this approach for GIS work.</p>
</div>
