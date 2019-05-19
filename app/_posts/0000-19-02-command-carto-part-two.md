---
layout: post
title:  "Command Carto II – Make"
date:   2019-5-3 19:16:49 +0100
categories: wikipedia

song: "Gliss Riffer (Album) – Dan Deacon"
songurl: https://www.youtube.com/embed/utw2oKUpHLs

visible: true

---

{% include postimg.html imgsrc="posts/7-command-two/adventure.png" class="post-image" %}

_Work in progress, tread lightly_

<aside>
  This is the second part of a series for Command Line Cartography. Miss part one? Worry not, you can read part one → <a href="https://moriartynaps.org/command-carto-part-one/" target="_blank">here</a>.
</aside>

Welcome back!

Last time we popped open our terminal and did some quick GIS work. As we saw at the end, the real benefit comes from chaining commands together. However, typing all that out in the terminal is inconvinent, and you don't leave a history of commands for later.

We want to yell "DO THE THING", in so many words, and have it do the thing. 

Good news! This round we're gonna learn how to do that by introducing <i class="collecticon collecticons-star"></i>Makefiles<i class="collecticon collecticons-star"></i>.

{% include chapter1.html %}1.
{% include chapter2.html %}Making Camp
{% include chapter3.html %}

At this point I'd reccomend getting a text editor to help write in. Text editors are fancy notepads that make coding more pleasant.

I personally use <a href="https://www.sublimetext.com/" target="_blank">Sublime</a>, but there are lots of other good options – all free to download and use. If you work on a team, it's best to see what your colleagues are using and start there.

Also:

<ol>
  <li>New blog post, new package of files to help ya along. <a href="">Download this zip file (2mb)</a> s'il vous plaît.</li>
  <li>Throw those files into a folder, and navigate your terminal to it.</li>
  <li>Make sure your terminal can run Make commands. You can test this by typing <code>make</code> into your terminal. If it returns the message: <code>make: *** No targets specificed...</code>, you're good. Otherwise, you may need to install additional <a href="https://stackoverflow.com/questions/1469994/using-make-on-osx" target="_blank">developer tools</a>.</li>
  <li>Mentally picture your favorite meal or snack. Promise yourself that you'll go get said meal or snack after finishing this tutorial. Makefile syntax is frustrating and unforgiving. You'll have earned it.</li>
</ol>

{% include chapter1.html %}2.
{% include chapter2.html %}Make It So
{% include chapter3.html %}

Make was created in 1976 as a means to automate commands for setting up programs. It's still used, albeit mostly in software development. 

Instead of writing commands in the terminal one by one, we're saving them to a file that we can call from instead. That file is a `makefile`.

In our makefile, we write {% include tooltips.html face="**Tasks**" tip="In official documentation, this is called TARGET. I'll explain why in the _next_ installment. For now, don't worry about it." %} 
. Think of each Task as a lil' robot you can call to execute a series of commands. A Make task is formatted like so:

{% include postimg.html imgsrc="posts/7-command-two/makebot.png" class="inline-img__small" %}

To call a task, you first need to save your Makefile to a folder. Next, navigate your terminal to that folder. You can then run in your terminal: <code>make [task name]</code>. When called the commands for that task are run sequentially.

#### Mike... Alfa... Kilo... Echo...

We're going to be alternating between your terminal and the makefile throughout this tutorial. For the sake of clarity, code written in the purple boxes should be added to your makefile. Code in white boxes are meant to be entered into your terminal, just like last time.

The following is a functional make command:

{% include postimg.html imgsrc="posts/7-command-two/echo.png" class="post-image" %}

<div class="code-block-fix">
	<code class="code-block code-makefile">echo-caynon:
	echo "don't have a cow homer!"
	echo "don't have a cow homer!!"
	echo "don't have a cow homer!!!"</code>
</div>

The <code>echo-caynon</code> task is included in the makefile you downloaded. You can run it yourself by typing <code>make echo-caynon</code> in your terminal and hitting enter. Behold! It executes each line.

<code>echo</code> is a new command. It prints out in your console whatever follows the command.

#### Familiar Functions

With this format, we can bake in the commands from our previous work into a task we can both call and edit much easier:

{% include postimg.html imgsrc="posts/7-command-two/panda.png" class="post-image" %}

<div class="code-block-fix">
	<code class="code-block code-makefile">pandaMap:
	mapshaper countries.json \
		-join native-red-pandas.csv keys=NAME,COUNTRY \
		-filter '"yes".indexOf(PANDAS) > -1' \
		-clean \
		-proj +init=EPSG:32645 \
		-o countries-with-pandas.json
	echo "finished"</code>
</div>

Run <code>make pandaMap</code> and sit back and enjoy watching your Makebot do all the work for you. 

The <code>\</code> become more important here. Without it each new line is interpreted as a new command, as you saw in echo-caynon. <code>\</code> tells the Makebot that the next line isn't new, but rather a continuation of the previous lines command. You could type everything out in one line, _but_ this makes our code more readable. Your future self will thank present you.

#### Formatting

Finally, before we get to the meat of this post – a few formatting quirks. 

You can have as many tasks as ya wish in one Makefile. They just need to have unique names.

{% include postimg.html imgsrc="posts/7-command-two/spacebug.png" class="post-image" %}

When Make fails, it is very bad about explaining what went wrong. If you get the vague error message: <code>makefile:25: *** missing separator.  Stop.</code>, you should check to make sure you used tab indentions instead of spaces. 

If that's not the issue (it will be 90% of the time), I've found the fastest way to debug is to: 

- Temporarily undo the latest work to determine which new code is introducing the errors.
- Test out new commands in one-off tasks before baking them in with other commands.
- Make sure you saved! If you haven't saved your changes, the file won't have your updates in it.


K. Let's GO!

{% include chapter1.html %}3.
{% include chapter2.html %}Make a Map
{% include chapter3.html %}

We're going to make a map of all the burn footprints from California wildfires in 2019.

We could do this manually, but instead we're going to write a Makefile that will handle:

- Downloading the fire perimeter data
- Filtering the features
- Dissolving the features
- Clipping the data to California

If you haven't already, open "Makefile" from the downloaded resources in your text editor. 

From this point on, none of the following Makebot tasks are in the included Makefile. You will need to add them to the provided Makefile.

The commands should work as written. _But_ if you need to double check against one that's pre-written in full, you can find that [here](https://gist.github.com/DylanMoriarty/d419d57b03f326d8dd4dd81c27ae3763).

#### Fetching the Data

{% include postimg.html imgsrc="posts/7-command-two/fetch.png" class="post-image" %}

The USGS does a great job providing up-to-date shapefiles for each and every wildfire perimeter as it develops. They also have a file that includes every perimeter shape for the year to date, which we could go get ourselves...

...but we're being lazy. Let's tell our bot to go fetch it instead!

<div>
  <code class="code-block">curl -O URL</code> 
  <dd class="code-def"><span class="code-def-intro">stands for &#8594;</span> Client URL</dd>
</div>

USGS hosts their data on a server called [GeoMAC](https://rmgsc.cr.usgs.gov/outgoing/GeoMAC/). <code>curl</code> will look at whatever URL you put after the <code>-O</code>, and if it's a file download it.

<aside>
	The file we're downloading from GeoMAC is hefty: <b>174MB</b> zipped and nearly <b>270MB</b> unzipped. If that's an issue for you, instead of curling from GeoMAC replace the URL with: <i>https://moriartynaps.org/assets/files/cli-two-reduced-perimeters.zip.</i> This will download a reduced version of the file (9.6MB), straight from here.
</aside>

<div class="code-block-fix">
<code class="code-block code-makefile">fetch:
	curl -O "https://rmgsc.cr.usgs.gov/outgoing/GeoMAC/2018_fire_data/current_year_all_states/2018_perimeters_dd83.zip"</code> 
</div>

Curl-ing has the nice feature of displaying how the download is going in text. A lot of commands don't give an indication of how long they're taking to complete. In general, you'll know a command is done when your cursor returns in the terminal.

#### Unzipping the .zip file

If you run <code>ls</code> in your terminal, you should now see the zip file. Let's get those files out. But, one brief detour first,

{% include postimg.html imgsrc="posts/7-command-two/unzip.png" class="post-image" %}

<div>
	<code class="code-block">@[ -d FOLDERNAME ] || mkdir FOLDERNAME</code> 
	<dd class="code-def">Is the first statement true? If not than do second part.</dd>
</div>

Unzipping this file is going to spit out a pile of shapefile files. Let's keep things tidy by putting them into their own folder. This command tests if a folder exists, and if it doesn't, it executes the <code>mkdir</code> command on the rightside of the \|\|.

"\|\|" is a logic operator, but don't fret. We'll only be using it to using it to test and create folders.

<div><code class="code-block">unzip -o "FILE" -d DESTINATION</code></div>

This will unzip the file. The text following <code>-d</code> will tell it where to save the file. 

You'll often see dash & letters following commands. They are shorthand for longer words, cut down for brevity. For _most_ CLI libaries you can type <code>-h</code> to get a list of what those commands do. Try it with <code>unzip</code>.

<div><code class="code-block">unzip -h</code></div>

{% include postimg.html imgsrc="posts/7-command-two/cleaning.png" class="post-image" %}

Finally, let's keep things tidy by removing the zip file.

<div>
  <code class="code-block">rm FILENAME</code> 
  <dd class="code-def">Remove FILENAME</dd>
</div>

Anyhoo let's put together those commands into a Makebot:

<div class="code-block-fix">
<code class="code-block code-makefile">unzip:
	@[ -d data ] || mkdir data
	unzip -o "2018_perimeters_dd83.zip" -d data/
	rm 2018_perimeters_dd83.zip</code>
</div>

To review, our first command checks to see if a folder named 'data' exists and if not makes one. Our second command unzips the zip file, and puts it in our 'data' folder. Spiffy.

We have our ingredients out, time to turn em' into a map stew. 

{% include postimg.html imgsrc="posts/7-command-two/mb-filter.png" class="post-image" %}

#### Filtering

First let's filter the wildfire data down to only the California fires. We learned how to filter out features in part one.

Here's a filter task:

<div class="code-block-fix">
<code class="code-block code-makefile">filter:
	Mapshaper data/2018_perimeters_dd83.shp \
		-filter '"CA".indexOf(state) > -1' \
		-o data/perimeters_filtered.shp</code>
</div>

It may take a second or a minute, but you should see a message "[filter] Retained 992 of 6,046 features" return.

Filtering helps cut down the filesize considerably, but the output still contains multiple perimeters for each fire. For our purposes we only want the whole burn area for each fire, so let's dissolve the features.

{% include postimg.html imgsrc="posts/7-command-two/mb-dissolve.png" class="post-image" %}

#### Dissolve

<div>
	<code class="code-block">Mapshaper INPUT -dissolve2 FIELD -o OUTPUT</code>
</div>

The 'FIELD' is what we're choosing to dissolve the features by. In this case the field "incidentna" (incident name) should do the trick.

Translated into a Makebot task:

<div class="code-block-fix">
<code class="code-block code-makefile">dissolve:
	Mapshaper data/perimeters_filtered.shp \
		-dissolve2 incidentna \
		-o data/perimeters_dissolved.shp</code>
</div>

Now we have a series of shapes of the fires entire burn area. 

We're still not done, however, as some of these fire perimeters cross state borders. We're only looking at California, so let's clip away that excess.

{% include postimg.html imgsrc="posts/7-command-two/mb-clipping.png" class="post-image" %}

#### Clipping

<div>
	<code class="code-block">Mapshaper INPUT -clip CLIPBY -o OUTPUT</code>
</div>

This will clip your INPUT file by the CLIPBY file and save it as OUTPUT. 

I provided a clipped version of California in the download package, so we can use that as our CLIPBY file.

<div class="code-block-fix">
<code class="code-block code-makefile">clip:
	mapshaper data/perimeters_dissolved.shp \
		-clip California.geojson \
		-o perimeters_clipped.shp </code>
</div>

It's worth noting that you could overwrite the original file for these if you output to the same file you do the operations on. In practice, it's much better to make a new file for every operation. This will help you debug if there's an issue, and allows you to _always_ be able to run your tasks and get the same results.

{% include chapter1.html %}4.
{% include chapter2.html %}Bringing it altogether
{% include chapter3.html %}

{% include postimg.html imgsrc="posts/7-command-two/factory.png" class="post-image" %}

You can call Make tasks from other tasks in your Makefile! This lets us keep our tasks piecemeal, as we've been doing, while still letting everything get called from a sole call.

Once everything's working we can call them all through a {% include tooltips.html face="\"factory\"" tip="This is not official terminology. Just how I refer to these sorts of tasks." %} task.

<div class="code-block-fix">
<code class="code-block code-makefile">wildfire-factory:
	make clean
	make fetch
	make unzip
	make filter
	make dissolve
	make clip</code>
</div>

Alas, I did sneak _one more task_ into that. 

<div class="code-block-fix">
<code class="code-block code-makefile">clean:
	rm -rf data/</code>
</div>

This deletes our data folder, which can be helpful for a few reasons: you save some space on your computer, and none of the following commands will get interuptted if a file already exists.

Add the above tasks to your file and run the <code>make wildfire-factory</code> task. Viola!

If something goes awry with one of the tasks, you can always troubleshoot it by calling the problem issue on it's own. Heck, you don't have to pile everything together either. If you don't want to fetch every time, for example, just keep that task separate.

Do we _need_ to write each mapshaper command in it's own task? Nope. These could also be written in one straight command:

<div class="code-block-fix">
<code class="code-block code-makefile">wildfire-factory:
	curl -O "https://rmgsc.cr.usgs.gov/outgoing/GeoMAC/2018_fire_data/current_year_all_states/2018_perimeters_dd83.zip"
	@[ -d data ] || mkdir data
	unzip -o "2018_perimeters_dd83.zip" -d data/
	Mapshaper data/2018_perimeters_dd83.shp \
		-filter '"CA".indexOf(state) > -1' \
		-clip California.geojson \
		-dissolve2 incidentna \
		-o format=geojson data/perimeters_filtered.json</code>
</div>

That said, splitting the tasks up makes for easier testing while working things out. It's also more human readable. When you write these yourself, it's entirely your call on how you organize things.

#### The Real Magic

Let's say you're so excited by this newfound power that you want to see what the 2017 wildfire situation looked like.

All you have to do is replace every instance of 2018 with 2017 in your makefile, then run your factory command. Try it out! Be amazed.

This format can take awhile to get used to – I still troubleshoot Google frequently. The good news is that you now have working commands for doing basic GIS operations. If you come across a job later that you need a CLIP task for, you already have a working blueprint.

The world is yours to takeover with robots.

{% include postimg.html imgsrc="posts/7-command-two/magic.png" class="inline-img__small" %}

{% include chapter1.html %}5.
{% include chapter2.html %}ALL the Buildings
{% include chapter3.html %}

Before we go, let's build one more bot.

{% include postimg.html imgsrc="posts/7-command-two/buildings.png" class="inline-img__small" %}

In 2017, <a href="https://github.com/Microsoft/USBuildingFootprints" target="_blank">Microsoft released a dataset</a> with all of the buildings in the United States. They have it free for you to download (nice!), but only as geojsons. That's a lovely format but when you're working with 2gb geojsons QGIS will start hemmoraging. Let's make a bot that downloads the file for us and makes a quick conversion to the easier-to-parse shapefile.

First thing first, we'll want to make sure there's a folder for the data.

<div class="code-block-fix">
<code class="code-block code-makefile">getFootprints:
	@[ -d data ] || mkdir data</code>
</div>

The URL we target for downloading is _https://usbuildingdata.blob.core.windows.net/usbuildings-v1-1/Wisconsin.zip_. 

This is perfect for us, because the URL is based on the state we want. If you change Wisconsin there to Idaho you'll hit a file for Idaho instead. This consistency is great.

#### Variables

In a makefile, there are two places you can create variables. The first place is typed in the document itself, along the lines of:

<div class="code-block-fix">
<code class="code-block code-makefile">VARIABLE="value"</code>
</div>

Where VARIABLE can be any ol' declarative you want to use. For Makefiles, I tend you write my variables in UPPERCASE to help keep them visually distinct. When it comes time to write a bot, you can now reference that variable via:

<div class="code-block-fix">
<code class="code-block code-makefile">testbot:
	echo $(VARIABLE)</code>
</div>

The $() bit tells Make that the name inside is a variable it should be looking for, and not just text (or a command) that reads VARIABLE.

The second place to assign a value to a variable is when we call the command. Delete the line in your Makefile that assigned "value" to VARIABLE. 

Now run the following command in your terminal...

<div>
<code class="code-block">make testbot VARIABLE="different value"</code>
</div>

...and our testbot task will echo that value! 

We can take advantage of this and Microsoft's fortunate URL structure to make our fetch code grab a STATE we choose when we call the task. In this case, we'll curl: _https://usbuildingdata.blob.core.windows.net/usbuildings-v1-1/$(STATE).zip_.

<div class="code-block-fix">
<code class="code-block code-makefile">getFootprints:
	@[ -d data ] || mkdir data
	curl -O https://usbuildingdata.blob.core.windows.net/usbuildings-v1-1/$(STATE).zip data</code>
</div>

Try running that with the state of your choice _that isn't California, Florida, Ohio or Texas_! You should be rewarded with a downloaded file. I'll explain about California below.

<div>
<code class="code-block">make getFootprints STATE=Wisconsin</code>
</div>

#### Processing

That grabs the zip file. Now let's add an unzip command to the task:

<div class="code-block-fix">
<code class="code-block code-makefile">getFootprints:
	@[ -d data ] || mkdir data
	curl -O https://usbuildingdata.blob.core.windows.net/usbuildings-v1-1/$(STATE).zip data
	unzip data/$(STATE).zip -d data</code>
</div>

Because we're still in the same task, $(STATE) will still be understood as whichever value you called with. 

{% include postimg.html imgsrc="posts/7-command-two/ohno.png" class="post-image" %}

Let's convert it a shapefile. If you run mapshaper on it's lone self, you may get an error: "_FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed — process out of memory_".

These files are **huge**, which means that we need to allocate more computin' power to Mapshaper to finish the task. <code>--max-old-space-size=8192 `which mapshaper`</code> will do this. 

<div class="code-block-fix">
<code class="code-block code-makefile">getFootprints:
	@[ -d data ] || mkdir data
	curl -O https://usbuildingdata.blob.core.windows.net/usbuildings-v1-1/$(STATE).zip data
	unzip data/$(STATE).zip -d data
	node --max-old-space-size=8192 `which mapshaper` data/$(STATE).geojson -o format=shapefile data/$(STATE).shp</code>
</div>

If you run this, it may take five to ten minutes, but during that time you can go do other things. Make breakfast. Do some jumping jacks. <a href="https://www.youtube.com/watch?v=BxRzzm-mjCE" target="_blank">Make yourself a fancy cocktail.</a>

#### Cleaning House

Finally, given that we only wanted the Shapefile, it can be nice to remove some of the other files we gathered on the way. 

<div class="code-block-fix">
<code class="code-block code-makefile">getFootprints:
	@[ -d data ] || mkdir data
	curl -O https://usbuildingdata.blob.core.windows.net/usbuildings-v1-1/$(STATE).zip data
	unzip data/$(STATE).zip -d data
	node --max-old-space-size=8192 `which mapshaper` data/$(STATE).geojson -o format=shapefile data/$(STATE).shp
	rm data/$(STATE).geojson</code>
</div>

Try that out with a different state! Should work well. Now you can quickly pull down that building data and have it in an already accessible format to clip from.

{% include postimg.html imgsrc="posts/7-command-two/ogr.png" class="post-image" %}

#### Texas, California; Taming the Beast

Finally, I mentioned above to not download some of the largest states. That's because even with the increase in processing power, Mapshaper may not be able to fully convert those files.

Luckily, with CLI GIS, there's always at least three different libraries to do common operations. In this case, we can use Ogr2Ogr to make the conversion instead– and this one works.

If you have QGIS installed, you already have Ogr2Ogr. However, if you haven't and just want it you can download it along with the rest of GDAL [here](https://www.kyngchaos.com/software/archive/#gdal). 

<div class="code-block-fix">
<code class="code-block code-makefile">largerFile:
	ogr2ogr -nlt POLYGON -skipfailures $(STATE).shp $(STATE).geojson OGRGeoJSON</code>
</div>



{% include chapter1.html %}6.
{% include chapter2.html %}That's All For Now
{% include chapter3.html %}

{% include postimg.html imgsrc="posts/7-command-two/do-the-thing.png" class="post-image" %}

Way to go! Writing terminal commands this way can be a real struggle bus. I hope you got some good stuff out of this, and have some ideas for processes ya want to codify in a makebot.

This is just scratching the surface on what makefiles can do! In the next chapter, I'll go over how to write more generalized tasks and loops. _Stay tuned._

<br>

<i>– D.M., <code>make bed LOCATION="brooklyn"</code><br>
<span class="post-date">May 12th, 2019</span></i>

<div class="notes">
  <p>If any parts of this seem super confusing, or you just have any other questions feel free to send a bird my way on <a href="https://twitter.com/DylanMoriarty" target="_blank">Twitter</a>.</p>

  <p>Once again, all the kudos to Matthew Bloch for his continued work on Mapshaper.</p>

  <p>Also to <a href="https://twitter.com/mojodna" target="_blank">Seth Fitzsimmons</a> and <a href="https://twitter.com/jscarto" target="_blank">Joshua Stevens</a> who both gave talks on Make during PCD over the past two years. <a href="https://www.youtube.com/watch?v=Ubefm4qUT7g" target="_blank">Joshua's talk</a> does a great job of highlighting the potential strength of working directly with CLI libaries. Meanwhile <a href="https://www.youtube.com/watch?v=qq7iVStVjPU">Seth's talk</a> is a blitz of shell commands that'll make your head spin. After working with make for a bit, you'll undoubtedly pick up some terribly useful code.</p>

  <p>And finally a quick kudos to <a href="https://twitter.com/dereklieu" target="_blank">Derek Lieu</a> for introducing me to this approach for GIS work back in 2016.</p>
</div>
