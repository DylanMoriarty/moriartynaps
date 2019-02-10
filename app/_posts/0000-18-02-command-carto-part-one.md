---
layout: post
title:  Command Carto – Part One
date:   2019-1-26 19:16:49 +0100
categories: wikipedia

type: code

twit-title: "Command Carto – Part One"
twit-img: "https://moriartynaps.org/assets/graphics/posts/1-dreams/twi-img.png"

song: "Pocket Calculator – Kraftwerk"
songurl: https://www.youtube.com/embed/oAmxGglMXYg

visible: true
---

{% include postimg.html imgsrc="posts/4-command-one/pile.png" class="inline-img__small" %}

Cartography work can be pretty messy. For every operation done, whether it's projecting, buffering, clipping, merging, etc. either a new file is created, or you risk having to repeating your process when later you notice an early data join didn't work.

Even when everything does work out perfectly, new data will inevitably come along. 

Where we're going, we don't need visual interfaces.

#### What we're covering here

- What is a command line interface (CLI)?
- How do you navigate around a CLI?
- Some basic CLI carto commands

{% include postimg.html imgsrc="posts/4-command-one/pile-2.png" class="inline-img__small" %}

{% include chapter1.html %}1.
{% include chapter2.html %}Command Line Interface
{% include chapter3.html %}

{% include postimg.html imgsrc="posts/4-command-one/secrets.png" class="post-image__first" %}

When we talk about Command Line Interfaces (CLI), we're referring to text-based commands for our computer. 

Think of it like playing one of those early {% include tooltips.html face="90's text adventure games" tip="If you want to try it out yourself, the spirit of the 90's lives on in <a href='https://eblong.com/zarf/zweb/dreamhold' target='_blank'>corners of the web.</a>" %} where you have to enter "Move North" to explore. If instead you type "Prance Left", nothing will happen because the syntax is very, _very_ specific.

Which is a pain. But! it can be incredibly useful for a bunch of reasons:

#### Repeatability & Documentation

Once you have it working, _it works_.

If you notice that you forgot to change a attribute at an earlier step, you won't have to reopen QGIS and run through your whole process manually again. You can simply make the fix & re-run the prewritten commands. 

#### Batch Processing

If you want to operate over 100 or so files we can iterate commands over a folder of files. So, if we have multiple shapefiles, we can easily execute GIS operations over each of them.

#### Mix & Match

Want to automate more than just GIS operations? Perfect. We can bring in additional CLI to also fetch data from websites, or text operators to tweak csv's. We can also run scripts written in javascript, python, or whatever have you. The world's your oyster!

#### You become Neo

Not as important as the above things, but you will _literally_ become Neo from the Matrix when you run a command that makes your computer screen flood with fast moving text.

{% include chapter1.html id="basic" %}2.
{% include chapter2.html %}Get Moving
{% include chapter3.html %}

{% include postimg.html imgsrc="posts/4-command-one/terminal.png" class="post-image__first" %}

<aside>
  If you're already familiar with navigating a computer terminal, feel free to skip <a href="#shop">to the next section</a>.
</aside>

If you're on a Mac, you can open up your Terminal by searching for an application called "Terminal". If you're on Windows, it's called the "Command Prompt". You can also download 

#### Where Am I?

When you start up your terminal, you'll see a scary, empty, text box. Much like your computer's finder, it is actually usually looking at a specific folder on your computer. When you open a brand new terminal, it will be looking at a folder that's called your 'home'.

That's cool, but unlike the finder we don't have anything to click on! Instead, we have to tell the computer in text how to move around. Here's how.

<code class="code-block">pwd</code> 
_Print working directory_

This will reply with _where_ your terminal is currently looking at. When used, you should see something along the lines of "/Users/yourUsernameHere".

<code class="code-block">ls</code> 
_List_

This will list off all the files & folders that are where your terminal is currently looking. Basically a text version of what you usually see what you look at folders in finder.

This is useful for determing what a filename is named, and confirmation that you're in the right place.

<code class="code-block">mkdir newfolder</code> 
_Make Directory_

This will create a folder named newfolder. You can actually change 'newfolder' with whatever you want the folder to be named. _This will only create that folder. It will not move you into it._

Unlike our previous commands, mkdir will not cause your terminal to reply with a message, unless it fails. It can be a bit hard to get used to at first, but many commands don't automatically say "hey, I did the job and it worked". Just to be safe that the folder you just made exists, you can run the `ls` command again and see if it is now listed.


{% include postimg.html imgsrc="posts/4-command-one/moving-left.png" class="post-image__first" %}

#### Moving Left

Files on your computer are tucked away into folders, and the route to them is refereed to as the file's 'path'.

You're likely already familiar with file paths from website URLs. On your computer they work much the same way.

<code class="code-block">cd</code> 
_Change Directory_

This will take you to your home directory regardless of where you are.

<code class="code-block">cd newfolder</code> 
_Change Directory_ to 'newfolder'

This will move you into your newly created folder. Like mkdir, you can replace 'newfolder' with any folder name you want to navigate to. 

<code class="code-block">cd ..</code> 
_Change Directory_ up one level.

This will take you to your current folders parent.

#### Let the Adventure Begin!

OK. Now that we can navigate around, we can get started.

{% include postimg.html imgsrc="posts/4-command-one/champ.png" class="inline-img__small" %}

{% include chapter1.html id="shop"%}3.
{% include chapter2.html %}Setting up Shop
{% include chapter3.html %}

Or well, sorry, one more step. Then we can get to the GIS.

{% include postimg.html imgsrc="posts/4-command-one/notyet.png" class="inline-img__small" %}

All of the above commands from the previous section are built into modern operating systems. Commands to do GIS operations however, are not. We'll need to install some libaries to help out with that work.

There are a lot of options for GIS work – QGIS is built upon many of em' – but for the purposes of this tutorial we'll mostly rely on <a href="https://github.com/mbloch/mapshaper" target="_blank">Mapshaper</a>.

Mapshaper is a phenominal one-stop-shop for commonly used carto operations. To get it installed, we'll want to do the following:

<ol>
	<li>Install <a href="https://nodejs.org/en/download/" target="_blank">Node.js</a></li>
	<li>Type the command <code>npm</code>. If it returns a block of text starting with "Usage: npm &lt;command&gt;", we know we're good.</li>
	<li>Run the command <code>npm install -g mapshaper</code></li>
</ol>

Finally, you need a geographic file to work with. You can use anything you'd like for the following examples, but I'll leave one here for consistencies sake.

<ol>
	<li>Download this shapefile.</li>
	<li>Locate your root folder (the one <code>cd</code> default navigates to). Create a folder there called Carto.</li>
	<li>Put the downloaded file that new Carto folder. This will just help us stay on the same page for where our working files are located.</li>
</ol>

{% include chapter1.html id="shape"%}4.
{% include chapter2.html %}Shape Up a Map
{% include chapter3.html %}

For our first command, download this file of the united states from Natural Earth. Now let's do some common commands.

#### Change file formats

First things first, let's change the format. Shapefiles are fine, but given that they require four to six different files for one database things get messy fast. Let's convert to a Geojson for the time being.

<code class="code-block">mapshaper countries.shp -o countries.geojson format=geojson</code>

All commands will roughly follow this form: The first word <code>mapshaper</code> tells our Terminal to use the mapshaper library of commands. Next we type in the input file. <code>-o</code> is shorthand for "output", and then we explicitly say what we want the output file to be called. Finally, we tell it what format we want it to kick out into.

If you type <code>ls</code> now, you should see the new file created! Neat, eh?

Mapshaper can translate between the following formats:

+ _shapefile, geojson, topojson, json, dbf, csv, tsv, svg_

<br>

#### Projections

{% include postimg.html imgsrc="posts/4-command-one/projections.png" class="post-image__first" %}

For something more commonplace, let's project our countries to Albers.

<code class="code-block">mapshaper countries.geojson -proj albersusa -o countries-projected.geojson</code>

Here we enter the projection code we're interested following the -proj word.

You can see a full list of what projections are available through the command <code>mapshaper -projections</code>. Mapshaper also takes EPSG values, and proj4 strings if you need something more custom. For EPSG values, the command remains mostly the same, albeit with different text following -proj:

<code class="code-block">mapshaper countries.geojson -proj +init=EPSG:2831 -o countries-projected.geojson</code>

<br>

#### Filter Geography

Let's say you only need the geography for Ireland. Let's remove the rest of the polygons with:

<code class="code-block">mapshaper countries.geojson -filter '"USA".indexOf(NAME) > -1' -o usa.geojson</code>
 
The part of the text here between the hyphens is a Javascript true or false test. It looks at the NAME attribute of each feature in our geojson, and if it sees the value "IRELAND" the left side returns a 1. Because 1 > -1, the statement is true and that feature is saved. All other features will return a false.

If you don't know Javascript, don't worry too much! You can do the indexOf for testing string values, or can just do a regular math equation for testing numeric values, such as filtering for populations over a certain size:

<code class="code-block">mapshaper countries.geojson -filter 'POP > 100000' -o usa.geojson</code>

<br>

#### Join CSV Data to Geography

One last example– joins.

<code class="code-block">mapshaper states.shp -join data.csv keys=STATE_FIPS,VALUE:str -o out.shp</code>

Here we need to put the path to the data.csv following -join. <code>keys=</code> tells mapshaper which attributes to join by, the former being the field in the GIS file. The later is what field to join by in the csv.

If you're joining fields that are numbers (such as FIPS codes), you'll need to add a <code>:str</code> to the end to prevent mapshaper from treating them as numbers (i.e. "01" would become "1", ruining the join).

<code class="code-block">mapshaper states.shp -join data.csv keys=STATE_FIPS,VALUE:str -o out.shp</code>

{% include chapter1.html %}4.
{% include chapter2.html %}To Be Continued...
{% include chapter3.html %}

{% include postimg.html imgsrc="posts/4-command-one/makebot.png" class="post-image__first" %}

Thanks for reading!

In the next part I'll talk about how we can chain together multiple commands to make our own CLI robots. Til then,

<br>

<i>– D.M., on a hill, Brookyln<br>
<span class="post-date">Nov.18th, 2018</span></i>

<br>
<br>

<div class="notes">
  <p>If you've read this and notice any parts that still seem super confusing, or just have any other questions feel free to reach out to me on Twitter!</p>
  <p>Quick kudos to Matthew Bloch for both creating Mapshaper and sparking a flame that'd become a fire through his talk at NACIS in 2016. It's been amazing to see this come up time in time again at NACIS, through additional talks from Seth Fitzsimmons in ’17, & Joshua Stevens in ’18 about how amazing CLI carto can be.</p>
  <p>And finally another quick kudos to <a href="https://twitter.com/dereklieu">Derek Lieu</a> for introducing me to this approach for GIS work.</p>
</div>
