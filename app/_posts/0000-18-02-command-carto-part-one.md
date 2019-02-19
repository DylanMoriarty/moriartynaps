---
layout: post
title:  Command Carto – Part One
date:   2019-2-17 19:16:49 +0100
categories: wikipedia

type: code

twit-title: "Command Carto – Part One"
twit-img: "https://moriartynaps.org/assets/graphics/posts/4-command-one/twi-img.png"

song: "Pocket Calculator – Kraftwerk"
songurl: https://www.youtube.com/embed/oAmxGglMXYg

visible: true
---

{% include postimg.html imgsrc="posts/4-command-one/secrets-min.png" class="post-image__first" %}

When we talk about Command Line Interfaces (CLI), we're referring to text-based commands for our computer. 

Think of it like playing one of those {% include tooltips.html face="80's text adventure games" tip="If you want to try it out yourself, the spirit of the 80's lives on in <a href='https://eblong.com/zarf/zweb/dreamhold' target='_blank'>corners of the web.</a>" %} where you have to enter "Move North" to explore. If instead you type "Prance Left", nothing will happen because the computer only understands very, _very_ specific inputs.

Which is a pain. But! for GIS work it can be a godsend.

It's not a cure-all for all GIS woes, but you can save yourself a lot of future headaches by having them now learning the magic of <i class="collecticon collecticons-star"></i>_Command Line Cartography_<i class="collecticon collecticons-star"></i>

#### What we're covering here

- What is a command line interface (CLI)?
- When is this a useful approach?
- An introduction to CLI navigation
- How to get setup to run GIS commands
- Some basic CLI carto commands via Mapshaper

{% include chapter1.html id="basic" %}1.
{% include chapter2.html %}Why CLI?
{% include chapter3.html %}

{% include postimg.html imgsrc="posts/4-command-one/pile-min.png" class="post-image" %}

#### Repeatability

A staple of GIS work is that almost every action either permanently changes the original shapefile, or you save another one. This adds up fast between projections, clipping, buffers, data joins, etc. If you realize you need to fix or update something from early on in the process, this can be a huge time drain redoing in QGIS or Arc.

CLI's biggest advantage is that each step is written out and repeatable. You can make the needed tweaks to early work, re-run it and be on your merry way. 

#### Documentation

Hand in hand with repeatability is that you're incidentally creating perfect documentation for your GIS process. If you need to come back to a subject six months later you'll know exactly what you did and how you did it.

#### Batch Processing

If you want to operate over 100 or so files we can iterate commands over a folder of files. So, if we have multiple shapefiles, we can easily execute GIS operations over each of them.

{% include postimg.html imgsrc="posts/4-command-one/pile-2-min.png" class="post-image" %}

#### Mix & Match

Want to automate more than just GIS operations? Perfect. We can bring in additional CLI to also fetch data from websites, or text operators to tweak csv's. We can also run scripts written in Javascript, python, or whatever have you. The world's your oyster!

#### You become Neo

Not as important as the above things, but you will _literally_ become Neo from the Matrix when you run a command that makes your computer screen flood with fast moving text.

{% include chapter1.html id="basic" %}2.
{% include chapter2.html %}Get Moving
{% include chapter3.html %}

{% include postimg.html imgsrc="posts/4-command-one/terminal-min.png" class="post-image" %}

<aside>
  If you're already familiar with navigating a computer terminal, feel free to skip <a href="#shop">to the next section</a>.
</aside>

To start yelling orders at your computer, you'll need to open up it's **Terminal**. If you're on a Mac, you can do so by searching for an application called "Terminal". If you're on Windows, it's called the "Command Prompt".

#### Where Am I?

When you start up your terminal, you'll see a guide-less void of a text box. First let's figure out where we are:

<div>
	<code class="code-block">pwd</code> 
	<span class="code-def-intro">stands for &#8594;</span> <dd class="code-def">Print working directory</dd>
</div>

Type `pwd` and hit enter. You'll see the terminal reply with _where_ it's is currently looking at. Should be something along the lines of "/Users/yourUsernameHere".

Just like when you navigate folders and files on your desktop, this terminal is open to a specific folder on your computer. Unlike your desktop, however, we don't have any folder graphics to click on.

<div>
	<code class="code-block">ls</code> 
	<dd class="code-def">List</dd>
</div>

Entering `ls` will list off all the files & folders that are inside wherever your terminal is currently looking. Basically a text version of what you usually see what you look at folders in finder.

<div>
	<code class="code-block">mkdir newfolder</code> 
	<dd class="code-def">Make Directory</dd>
</div>

This will create a folder named newfolder. `mkdir` will create a folder with whatever name you enter after the initial command. Quite a few commands work this way – the first word evokes a command and the words that follow help define it.

_This will only create that folder. It will not move you into it._

Unlike our previous commands, `mkdir` will not cause your terminal to reply with a message. It can be a bit hard to get used to at first, but many commands don't automatically say "hey, I did the thing and it worked, hooray!". 

To confirm that the folder you just made exists, you can run the `ls` command again. You should see your newly created folder listed now. You did the thing and it worked, hooray!


{% include postimg.html imgsrc="posts/4-command-one/moving-left-min.png" class="post-image" %}

#### Moving Left

Files on your computer are tucked away into folders, and the route to them is refereed to as the file's 'path'.

You're already familiar with how file paths work from navigating website URLs. On your computer they work much the same way.

<div>
	<code class="code-block">cd</code> 
	<dd class="code-def">Change Directory</dd>
</div>

This will take you to your home directory, aka your computer's home folder regardless of where you are.

<div>
	<code class="code-block">cd newfolder</code> 
	<dd class="code-def">Change Directory to 'new folder'</dd>
</div>

This will move you into your newly created folder. Like `mkdir`, you can enter any text after cd and it will take you to that folder, if it exists.

<div>
	<code class="code-block">cd ..</code> 
	<dd class="code-def">Change Directory up one level.</dd>
</div>

This will take you to your current folders parent. So, if you're currently at "home/code/disco-party" and run `cd ..` you'll move to "home/code/". Think of this as your 'back' command.

#### Let the Adventure Begin!

OK. Now that we can navigate around, we can get started.

{% include postimg.html imgsrc="posts/4-command-one/champ-min.png" class="inline-img__small" %}

{% include chapter1.html id="shop"%}3.
{% include chapter2.html %}Setting up Shop
{% include chapter3.html %}

Or well, sorry, one more step. Then we can get to the GIS.

{% include postimg.html imgsrc="posts/4-command-one/notyet-min.png" class="inline-img__small" %}

All of the above commands from the previous section are built into modern operating systems. Commands to do GIS operations however, are not. We'll need to install some libraries to help out with that work. 

There are a {% include tooltips.html face="lot of options" tip="QGIS is built with and upon many of em'!" %} for GIS work but for the purposes of this tutorial we'll rely on the workhorse library <a href="https://github.com/mbloch/mapshaper" target="_blank">Mapshaper</a>.

To get it installed, we'll want to do the following:

<ol>
	<li>Install <a href="https://nodejs.org/en/download/" target="_blank">Node.js</a></li>
	<li>Type the command <code>npm</code>. If it returns a block of text starting with "Usage: npm &lt;command&gt;", we know we're good. If you get an error, copy and paste that error into Google. Someone else has likely had the same issue!</li>
	<li>Run the command <code>npm install -g mapshaper</code>. This will install mapshaper on your computer globally so it can be accessed anywhere! Neat.</li>
	<li>If you get an error message that talks about denied access or permissions, you may need to run it as <code>sudo install -g mapshaper</code>. Sudo is a prefix you can add to commands that tells your terminal you're an administrator of the computer, so it'll ask for your admin password. In general, only run sudo if you need to. No other commands in this tutorial should require it.</li>
</ol>

Finally, you need a geographic file to work with. You can use anything you'd like for the following examples, but I'll leave one here for consistencies sake.

<ol>
	<li><a href="{{ site.baseurl }}/assets/files/cli-tutorial-one-files.zip" download>Download this file. (4.9 MB)</a>. This is Natural Earth Data's 10m country geography, renamed 'countries.shp' to save us time typing out the file name. Also included is a csv of countries that red panda's call home.</li>
	<li>Locate your home folder (the one <code>cd</code> navigates to by default) and create a folder there called Carto.</li>
	<li>Put the contents in that new Carto folder. I'd recommend just doing this via finder. This will just help us stay on the same page for where our working files are located.</li>
	<li>Finally, cd via your terminal into your newly created Carto folder.</li>
</ol>

{% include chapter1.html id="shape"%}4.
{% include chapter2.html %}Shape Up a Map
{% include chapter3.html %}

Let's go! 

{% include postimg.html imgsrc="posts/4-command-one/mapshaper-min.png" class="post-image" %}

#### Change file formats

First, let's change the file format. Shapefiles are fine, but given that they require four to six different files for one database things get messy fast. Let's convert to a {% include tooltips.html face="topojson" tip="Added bonus: topojson is a wonderfully small format, so you'll save disk space working it." %} for the time being.

<code class="code-block">mapshaper countries.shp -o countries.json format=topojson</code>

All commands will roughly follow this form: The first word <code>mapshaper</code> tells our Terminal to use the mapshaper library of commands. Next we type in the name of the file we want to operate on. <code>-o</code> is shorthand for "output", which we follow by stating what the output file should be called. Finally, we tell it what format we want it to kick out as.

If you type <code>ls</code> now, you should see the new file created! Neat, eh?

Mapshaper can translate between the following formats:

+ _shapefile, geojson, topojson, json, dbf, csv, tsv, svg_

<br>

#### Projections

Next let's project our countries. With <code>mapshaper -projections</code> you can see a full list of projections Mapshaper does by default. Let's do a quick projection to Robinson:

<code class="code-block">mapshaper countries.json -proj robin -o countries-projected.json</code>

{% include postimg.html imgsrc="posts/4-command-one/projections-min.png" class="post-image" %}

If you want to check out these files after they've gone through these commands you can open them in [insert favorite gis software here].

<br>

#### Filter Geography

Let's say you only need to filter your geography by countries with a low population. First let's see what attributes our file has with:

<code class="code-block">mapshaper countries.json -info</code>

Looks like POP_EST is what we'll want to go with. We can filter our features with:

<code class="code-block">mapshaper countries.json -filter 'POP_EST < 250000' -o countries-lowpop.json</code>

The part of the text here between the hyphens is a Javascript boolean test. For each feature it asks "is the POP_EST attribute less than 250000?" and if it doesn't, the feature is excluded from the output. This'll work on for filtering any attribute that is a numeric value.

You can also filter by strings. Let's get just countries in South America:

<code class="code-block">mapshaper countries.json -filter '"South America".indexOf(CONTINENT) > -1' -o south-america.json</code>

This does the same test as before, this time with a bit of Javascript called indexOf. This looks at the value of CONTINENT and if it matches "South America" returns a 1. Because 1 > -1, the statement is true and that feature's saved. This'll also work for any attribute that is a string.

<br>

#### Projections, cont.

In addition to the default projections mapshaper has, you can also use proj4 strings for more specificity. 

<a href="https://epsg.io/" target="_blank">epsg.io</a> is a great resource for getting proj4 string defintions, letting you search either by projection name or country. Once you've selected a projection, just scroll down the page to the Export menu and click Proj.4 to get a defintion.  

Just paste that string after -proj, and you'll be good to go:

<code class="code-block">mapshaper south-america.json -proj +proj=poly +lat_0=0 +lon_0=-54 +x_0=5000000 +y_0=10000000 +ellps=aust_SA +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs -o south-america-projected.json</code>

<br>

{% include postimg.html imgsrc="posts/4-command-one/friends-min.png" class="post-image" %}

#### Join CSV Data to Geography

One last example– joins. Let's join my csv of red panda habitats to the original countries.json dataset. 

<code class="code-block">mapshaper countries.json -join native-red-pandas.csv keys=NAME,COUNTRY -o countries-with-pandas.json</code>

Here we need to put the path to the data.csv following -join. <code>keys=</code> tells mapshaper which attributes to join by, the former being the field in the GIS file. The later is what field to join by in the csv.

#### Chaining it all together

Doing these step by step will work fine, but you may notice a lot of repetition in the commands structure. We can actually run a lot of these commands together likeso:

<code class="code-block">mapshaper countries.json \
	-join native-red-pandas.csv keys=NAME,COUNTRY \
	-filter '"yes".indexOf(PANDAS) > -1' \
	-clean \
	-proj +init=EPSG:32645 \
	-o countries-with-pandas.json
</code>

For terminal commands, if you write a command on a new line, it will understand it as two separate commands. The `\` character tells it to ignore the new line and instead read it as one uninterrupted command.

You might notice that I snuck one more new command in there; `clean`. Sometimes the data we're working with has minor topological errors in it– or we create them along the way. Mapshaper's clean function helps tidy up those stray points and mis-aligned borders.

At the end, you should end up with a json of just the five countries that are the current home of red pandas. Fast, eh? 

If, somehow, they discover Red Panda's also exist natively in Ireland, we only need to update the csv with that information and re-run the final script. It will work the exact same- only this time including Ireland in the final output. For practice, try it out! The projection may be a bit off... but you can also tweak that!

{% include chapter1.html %}4.
{% include chapter2.html %}To Be Continued...
{% include chapter3.html %}

{% include postimg.html imgsrc="posts/4-command-one/makebot-min.png" class="post-image" %}

If you've made it this far, kudos! Hope it's helped demystify CLI ever so slightly.

In the next part, I'll introduce <i class="collecticon collecticons-star"></i> Makefiles <i class="collecticon collecticons-star"></i>
, which are an old school way of running commands from a saved file vs. having to copy and paste into the terminal to run. We're gonna build some CLI robots! 

Til then,

<i>–D.M. `cd ~./ny/new-york/brooklyn/boerum-hill`<br>
<span class="post-date">Feb.18th, 2019</span></i>

<br>
<br>

<div class="notes">
  <p>If any parts of this seem super confusing, or you just have any other questions feel free to send a bird my way on <a href="https://twitter.com/DylanMoriarty" target="_blank">Twitter</a>.</p>
  <p>Quick kudos to Matthew Bloch for both creating Mapshaper and sparking my interest in this approach to GIS work through <a href="https://www.youtube.com/watch?v=X-CGAS4YaPA" target="_blank">his talk at NACIS</a> in 2016.</p>
  <p>Last updated Feb.18th.</p>
</div>
