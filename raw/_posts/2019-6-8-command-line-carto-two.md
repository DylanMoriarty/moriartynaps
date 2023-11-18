---
layout: post
title:  "Command Carto II – Make"
date:   2019-6-8 06:00:00 +0100
type: maps

twit-title: "Command Carto II – Make"
twit-img: "https://moriartynaps.org/assets/graphics/posts/06-clc2/twit-img.png"

song: "Gliss Riffer (Album) – Dan Deacon"
songurl: https://www.youtube.com/embed/utw2oKUpHLs

visible: true

---

{% include postimg.html imgsrc="posts/06-clc2/adventure.png" class="post-image" %}

<aside>
  This is the second part of a series for Command Line Cartography. Miss part one? Worry not, you can read part one → <a href="https://moriartynaps.org/command-carto-part-one/" target="_blank">here</a>.
</aside>

Welcome back!

Last time we popped open our terminal and did some quick GIS work. As we saw at the end, the real benefit comes from chaining commands together. However, typing all that out in the terminal is inconvenient, and you don't leave a history of commands for later.

We want to yell "DO THE THING", in so many words, and have it do the thing. 

Good news! This round we're gonna learn how to do that by introducing <i class="collecticon collecticons-star"></i>Makefiles<i class="collecticon collecticons-star"></i>.

{% include chapter.html num="1." title="Making Camp" %}

At this point I'd recommend getting a text editor to help write in. Text editors are fancy notepads that make coding more pleasant.

I personally use <a href="https://www.sublimetext.com/" target="_blank">Sublime</a>, but there are lots of other good options – all free to download and use. If you work on a team, it's best to see what your colleagues are using and start there.

Also:

<ol>
  <li>Make sure your terminal can run Make commands. You can test this by typing <code>make</code> into your terminal. If it returns the message: <code>make: *** No targets specificed...</code>, you're good. Otherwise, you may need to install additional <a href="https://stackoverflow.com/questions/1469994/using-make-on-osx" target="_blank">developer tools</a>.</li>
  <li>New blog post, new package of files to help ya along. <a href="{{ site.baseurl }}/assets/files/cli-carto-two-files.zip">Download this zip file (409kb)</a> s'il vous plaît.</li>
  <li>Throw those files into a folder, and navigate your terminal to it.</li>
  <li>Mentally picture your favorite meal or snack. Promise yourself that you'll go get said meal or snack after finishing this tutorial. Makefile syntax is frustrating and unforgiving. You'll have earned it.</li>
</ol>

{% include chapter.html num="2." title="Make It So" %}

Make was created in 1976 as a means to give computer's a task list of commands they can use to install programs and properly setup files. It's still used, albeit mostly in software development. This format is _old_, but tried and true!

Make gives us the ability to save terminal commands to a file we can then call from – as opposed to typing them in manually into the terminal, as we did in part one. That file is a `makefile`.

In our Makefile, we write {% include tooltips.html face="**Tasks**" tip="In official documentation, this is called TARGET. I'll explain why in the _next_ installment. For now, don't worry about that." %} 
. Think of each Task as a lil' robot you can call to execute your series of commands. A Make task is formatted like so:

{% include postimg.html imgsrc="posts/06-clc2/makebot.png" class="inline-img__small" %}

To call a task, you first save your Makefile to a folder. This file should just be called `makefile`, no extension or {% include tooltips.html face="**additional names needed**" tip="Of course, you _can_ give it a name, but then you also have to type more when calling the tasks. For brevities sake, just having it be 'makefile' works well and good." %}.

If your terminal is directed to a folder containing a Makefile, you can call tasks from the terminal with: <code>make [task name]</code>. When called the commands for that task are run sequentially.

#### Mike... Alfa... Kilo... Echo...

We're going to be alternating between your terminal and the Makefile throughout this tutorial. For the sake of clarity, code written in the <span class="code-makefile">purple boxes</span> is meant for a Makefile. Code in <span class="white-bg">white boxes</span> are meant to be entered into your terminal, just like last time.

The following is a functional make command:

{% include postimg.html imgsrc="posts/06-clc2/echo.png" class="post-image" %}

<div class="code-block-fix">
	<code class="code-block code-makefile">echo-caynon:
	echo "don't have a cow homer!"
	echo "don't have a cow homer!!"
	echo "don't have a cow homer!!!"</code>
</div>

The <code>echo-caynon</code> task is included in the Makefile you downloaded. You can run it yourself by typing <code>make echo-caynon</code> in your terminal and hitting enter. Behold! It executes each line.

<code>echo</code> is a new command. You'll see the terminal respond with whatever follows the command. If you open the makefile in your text editor, you should see exactly what gets echo'd!

#### Familiar Functions

With this format, we can bake in the commands from our previous work into a task we can call in three words:

{% include postimg.html imgsrc="posts/06-clc2/panda.png" class="post-image" %}

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

This is also included, so run <code>make pandaMap</code> and sit back and enjoy watching your Makebot do all the work for you. _And so fast!_

The <code>\</code> become more important here. Without it each new line is interpreted as a new command, as you saw in echo-caynon. <code>\</code> tells the Makebot that the next line isn't a new command, but rather a continuation of the previous line's command. Everything will work if you typed it out one uninterrupted line, _but_ that would make it rather hard to read. Your future self will thank present you for keeping things readable.

#### Formatting

Before we get to the meat of this post – a few formatting quirks. 

You can have as many tasks as ya wish in one Makefile. They just need to have unique names.

{% include postimg.html imgsrc="posts/06-clc2/spacebug.png" class="post-image" %}

When Make fails, it is very bad about explaining what went wrong. If you get the vague error message: <code>makefile:25: *** missing separator.  Stop.</code>, you should check to make sure you used **tab** indentions instead of spaces. 

If that's not the issue (_it will be 90% of the time_), I've found the fastest way to debug is to: 

- Temporarily undo the latest work to determine what new code is introducing the errors.
- Test out new commands in one-off tasks before baking them in with other commands.
- Make sure you saved! If you haven't saved your changes, the file won't have your updates in it.


K. _Let's GO_!

{% include chapter.html num="3." title="Make a Map" %}

Let's make a map of all the burn footprints from California wildfires for 2018. Our makefile will handle:
 
- Downloading the fire perimeter data
- Filtering the features
- Dissolving the features
- & Clipping the data to California

If you haven't already, open "makefile" from the downloaded resources in your text editor. 

From this point on, none of the following tasks are in the included Makefile. You will need to add them to the provided Makefile.

The commands should work as written. _But_ if you need to double check against one that's pre-written (_and works!_), you can find that <a href="https://gist.github.com/DylanMoriarty/d419d57b03f326d8dd4dd81c27ae3763" target="_blank">here</a>.

#### Fetching the Data

{% include postimg.html imgsrc="posts/06-clc2/fetch.png" class="post-image" %}

The USGS does a great job providing up-to-date shapefiles for each and every wildfire perimeter as it develops. They also have a file that includes every perimeter shape for the year to date, which we could go get ourselves...

...but we're being lazy. Let's tell our bot to go fetch it instead!

<div>
  <code class="code-block">curl -O URL</code> 
  <dd class="code-def"><span class="code-def-intro">stands for &#8594;</span> Client URL</dd>
</div>

USGS hosts their data on a server called <a href="https://rmgsc.cr.usgs.gov/outgoing/GeoMAC/" target="_blank">GeoMAC</a>. <code>curl</code> will look at whatever URL you put after the <code>-O</code>, and download it.

<aside>
	The file we're downloading from GeoMAC is hefty: <b>174MB</b> zipped and nearly <b>270MB</b> unzipped. If that's an issue for you, instead of curling from GeoMAC replace the URL with: <i>https://moriartynaps.org/assets/files/2018_perimeters_dd83.zip.</i> This will download a reduced version of the file (9.6MB).
</aside>

<div class="code-block-fix">
<code class="code-block code-makefile">fetch:
	curl -O "https://rmgsc.cr.usgs.gov/outgoing/GeoMAC/historic_fire_data/2018_perimeters_dd83.zip"</code> 
</div>

Curl-ing has the nice feature of displaying how the download is going in the terminal. A lot of commands don't give an indication of how long they're taking to complete. In general, you'll know a command is done when your cursor returns in the terminal. You can always exit a command in progress with `cntrl + c`.

#### Unzipping the .zip file

If you run <code>ls</code> in your terminal, you should now see the zip file listed. Let's get those files out. But, one brief detour first –

{% include postimg.html imgsrc="posts/06-clc2/unzip.png" class="post-image" %}

<div>
	<code class="code-block">@[ -d FOLDERNAME ] || mkdir FOLDERNAME</code> 
	<dd class="code-def">Is the first statement true? If not than do second part.</dd>
</div>

Unzipping this file is going to spit out a pile of shapefile files. Let's keep things tidy by putting them into their own folder. This command tests if a folder exists, and if it doesn't, it executes the <code>mkdir</code> command on the rightside of the \|\|.

"\|\|" is a logic operator, but don't fret. We'll only be using it to using it to create folders.

<div><code class="code-block">unzip -o "FILE" -d DESTINATION</code></div>

This will unzip the file. The text following <code>-d</code> will tell it where to save the file. 

You'll often see dash & letters following commands. They are shorthand for longer words, cut down for brevity. For _most_ CLI libaries you can type <code>-h</code> to get a list of what those commands do. That's your Try it with <code>unzip</code>.

<div><code class="code-block">unzip -h</code></div>

Put together those commands into a Makebot:

<div class="code-block-fix">
<code class="code-block code-makefile">unzip:
	@[ -d data ] || mkdir data
	unzip -o "2018_perimeters_dd83.zip" -d data/</code>
</div>

To review, our first command checks to see if a folder named 'data' exists and if not makes one. Our second command unzips the zip file, and puts it in our 'data' folder. Spiffy.

{% include postimg.html imgsrc="posts/06-clc2/mb-filter.png" class="post-image" %}

#### Filtering

The downloaded file has the perimeter from every wildfire in the U.S. for 2018. We don't need info for what was happening on Florida, so we can filter out all states that aren't California.
Here's a filter task:

<div class="code-block-fix">
<code class="code-block code-makefile">filter:
	mapshaper data/2018_perimeters_dd83.shp \
		-filter '"CA".indexOf(state) > -1' \
		-o data/perimeters_filtered.shp</code>
</div>

It may take a second or a minute, but you should see a message "[filter] Retained 992 of 6,046 features" after running `make filter`.

Filtering helps cut down the filesize considerably, but the output still contains multiple perimeters for each fire (they measure it daily). For our purposes we only want the whole burn area for each fire, so let's dissolve the features.

{% include postimg.html imgsrc="posts/06-clc2/mb-dissolve.png" class="post-image" %}

#### Dissolve

<div>
	<code class="code-block">mapshaper INPUT -dissolve2 FIELD -o OUTPUT</code>
</div>

The 'FIELD' is what we're choosing to dissolve the features by. In this case the field "incidentna" (incident name) should do the trick.

Translated into a Makebot task:

<div class="code-block-fix">
<code class="code-block code-makefile">dissolve:
	mapshaper data/perimeters_filtered.shp \
		-dissolve2 incidentna \
		-o data/perimeters_dissolved.shp</code>
</div>

Run `make dissolve` and now we have the overall fire perimeters. This will also take a hot minute to complete!

Now we just need to makes sure none these fire perimeters cross state borders. 

{% include postimg.html imgsrc="posts/06-clc2/mb-clipping.png" class="post-image" %}

#### Clipping

<div>
	<code class="code-block">Mapshaper INPUT -clip CLIPBY -o OUTPUT</code>
</div>

This will clip your INPUT file by the CLIPBY file and save it as OUTPUT. 

I provided a clipped version of California in the download package. We'll use that as our CLIPBY file.

<div class="code-block-fix">
<code class="code-block code-makefile">clip:
	mapshaper data/perimeters_dissolved.shp \
		-clip California.geojson \
		-o perimeters_2018.shp </code>
</div>

Run `make clip` and we're good.

If you open up `perimeters_2018.shp` you should see we now have a shapefile that's just the burn perimeters of California fires. Something like the black bits here:

{% include postimg.html imgsrc="posts/06-clc2/fires-18.png" class="inline-img__small" %}

#### All the files!

You might have noticed that at each step we output to a new file. This is preferable to just overwriting the original file for a few reasons. For one, it makes debugging easier – you can always view the input file and see if something looks off.

It's important to never overwrite the original file if you can help it. That way, when you run your tasks the output will _always_ be the same, and you won't have to download new original files every time.

{% include chapter.html num="4." title="Bringing it altogether" %}

{% include postimg.html imgsrc="posts/06-clc2/factory.png" class="post-image" %}

You can call Make tasks from other tasks in your Makefile. This lets us keep our tasks piecemeal, as we've been doing, while still letting everything get called from a sole call.

Once we've run through all the individual tasks and know they're working, we can call them all through a {% include tooltips.html face="\"factory\"" tip="This is not official terminology. Just how I refer to these sorts of tasks." %} task.

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

#### Cleanin' Up

<div class="code-block-fix">
<code class="code-block code-makefile">clean:
	rm -rf data/
	rm -f 2018_perimeters_dd83.zip</code>
</div>

<code>rm</code> is the standard CLI operation to 'remove' a the file that follows. <code>-f</code> and <code>-rf</code> are ways to 'force' it, which will ignore non-existent files.

This deletes the zip file and our data folder. This can be helpful for a few reasons: you save space on your computer, and you'll know that your factory will run under the same conditions next time.

When you're using these commands, _always_ explicitly state what you want deleted. <code>-rf</code> in particular can be dangerous if it's used in a root folder with a catchall `*` or `.`. We can avert that danger by:

{% include postimg.html imgsrc="posts/06-clc2/cleaning.png" class="post-image" %}

- Don't use these commands while you're in your computer's home folder.
- Always following it with exactly what file/folder you want removed, no catchalls.
- Only remove files you've fetched or created through your makefile. Things you can always recreate if need be.

Add the above tasks to your file and run the <code>make wildfire-factory</code> task. Viola!

If something goes awry with one of the tasks, you can always troubleshoot it by calling the problem issue on it's own. Heck, you don't have to pile everything together either. If you don't want to fetch every time, for example, just don't include it in your factory task.

#### All in One

& again, there's a million different ways to do this sort of GIS work. Once again, we could write this factory in one command:

<div class="code-block-fix">
<code class="code-block code-makefile">wildfire-factory:
	rm -rf data/
	rm -r 2018_perimeters-dd83.zip
	rm 2018_perimeters_dd83.zip 
	curl -O "https://rmgsc.cr.usgs.gov/outgoing/GeoMAC/historic_fire_data/2018_perimeters_dd83.zip"
	@[ -d data ] || mkdir data
	unzip -o "2018_perimeters_dd83.zip" -d data/
	Mapshaper data/2018_perimeters_dd83.shp \
		-filter '"CA".indexOf(state) > -1' \
		-clip California.geojson \
		-dissolve2 incidentna \
		-o format=geojson data/perimeters_2018.json</code>
</div>

Like I've said a bunch here tho, splitting it up has the benefit of making it easier to debug & work through when you're starting out. When you write these yourself, it's entirely your call on how you organize things.

#### The Real Magic

Let's say you're so excited by this newfound power that you want to see what the 2017 wildfire situation looked like.

All you have to do is replace every instance of 2018 with 2017 in your Makefile, then run your factory command. Try it out! _Be amazed_.

This format can take awhile to get used to – I still troubleshoot Google frequently. The good news is that you now have working commands for doing basic GIS operations. If you come across a job later that you need a CLIP task for, you already have a working blueprint.

The world is yours to takeover with robots.

{% include postimg.html imgsrc="posts/06-clc2/magic.png" class="inline-img__small" %}

{% include chapter.html num="5." title="ALL the Buildings" %}

Before we go, let's build one more bot.

{% include postimg.html imgsrc="posts/06-clc2/buildings.png" class="inline-img__small" %}

In 2017, <a href="https://github.com/Microsoft/USBuildingFootprints" target="_blank">Microsoft released a dataset</a> with all of the buildings in the United States. They have it free for you to download (nice!), but only as geojsons. That's a lovely format – but when you're working with 2gb geojsons QGIS will start hemorrhaging. Let's make a bot that downloads the file for us and makes a quick conversion to the easier-to-parse shapefile.

First thing first, we'll want to make sure there's a folder for the data.

<div class="code-block-fix">
<code class="code-block code-makefile">getFootprints:
	@[ -d data ] || mkdir data</code>
</div>

The URL we target for downloading is _https://usbuildingdata.blob.core.windows.net/usbuildings-v1-1/Wisconsin.zip_. 

This is perfect for us, because the URL is based on the state we want. If you change Wisconsin there to Idaho you'll hit a file for Idaho instead. This consistency is the best.

#### Variables

In a Makefile, there are two places you can create variables. The first place is typed in the document itself, along the lines of:

<div class="code-block-fix">
<code class="code-block code-makefile">VARIABLE="value"</code>
</div>

Where VARIABLE can be any ol' declarative you want to use. 'CAT', 'GLISSRIFFER', 'OTTOVONSCHWEINSTEIGER', etc. would work just as well. For Makefiles, I tend you write my variables in UPPERCASE to help keep them visually distinct. When it comes time to write a bot, you can now reference that variable via:

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

{% include postimg.html imgsrc="posts/06-clc2/ohno.png" class="post-image" %}

Let's convert it a shapefile. If you run mapshaper on it's lone self, you may get an error: "_FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed — process out of memory_".

These files are stinkin' **huge**, which means that we need to allocate more computin' power to Mapshaper to finish the task. <code>--max-old-space-size=8192 `which mapshaper`</code> will do this. 

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

{% include postimg.html imgsrc="posts/06-clc2/ogr.png" class="post-image" %}

#### Texas, California: Taming the Beast

Finally, I mentioned above to not download the data for the largest states. That's because _even with_ the increase in processing power, Mapshaper may not be able to fully convert those files.

Luckily, with CLI GIS, we can mix and match the libraries we're using to accomplish whatever task we set out for. In this case, we can use **Ogr2Ogr** to make the conversion instead– and this one works.

If you have QGIS installed, you already have Ogr2Ogr. However, if you don't have QGIS and just want it you can download Ogr2Ogr along with the rest of GDAL [here](https://www.kyngchaos.com/software/archive/#gdal). 

<div class="code-block-fix">
<code class="code-block code-makefile">largerFile:
	ogr2ogr -nlt POLYGON -skipfailures $(STATE).shp $(STATE).geojson OGRGeoJSON</code>
</div>

{% include chapter.html num="6." title="That's All For Now" %}

{% include postimg.html imgsrc="posts/06-clc2/do-the-thing.png" class="post-image" %}

_Congrats_! Writing terminal commands this way can be a real struggle bus. I hope you got some good stuff out of this, and have some ideas for processes ya want to codify in a makebot.

This is just scratching the surface on what Makefiles can do! In the next chapter, I'll go over how to write more generalized tasks and loops. _Stay tuned._

<br>

<i>– D.M., <code>make sleepTime LOCATION="brooklyn"</code><br>
<span class="post-date">June 8th, 2019</span></i>

<div class="notes">
  <p>If any parts of this seem super confusing, or you just have any other questions feel free to send a bird my way on <a href="https://twitter.com/DylanMoriarty" target="_blank">Twitter</a>.</p>

  <p>Once again, all the kudos to Matthew Bloch for his continued work on Mapshaper.</p>

  <p>Also to <a href="https://twitter.com/mojodna" target="_blank">Seth Fitzsimmons</a> and <a href="https://twitter.com/jscarto" target="_blank">Joshua Stevens</a> who both gave talks on Make during PCD over the past two years.</p>

  <p><a href="https://www.youtube.com/watch?v=Ubefm4qUT7g" target="_blank">Joshua's talk</a> does a great job of highlighting the potential strength of working directly with CLI libraries. Meanwhile <a href="https://www.youtube.com/watch?v=qq7iVStVjPU" target="_blank">Seth's talk</a> is a blitz of shell commands that'll make your head spin. After working with make for a bit, you'll undoubtedly pick up useful commands from it tho.</p>

  <p>And finally a quick kudos to <a href="https://twitter.com/dereklieu" target="_blank">Derek Lieu</a> for introducing me to this approach for GIS work way back in 2016.</p>
</div>
