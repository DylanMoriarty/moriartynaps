---
layout: post
title:  Command Carto – Part One
date:   2018-11-2 19:16:49 +0100
categories: wikipedia

visible: hidden

song: "Pocket Calculator – Kraftwerk"
songurl: https://www.youtube.com/embed/WvIRsDHFiis

visible: false

---

Cartography work can be super messy. For every operation done, whether it's projecting, buffering, clipping, merging, etc. either a new file is created, _or_ you risk having to spend hours repeating your process when you realize an early join didn't work.

Even when everything does work out perfectly, when new data comes along re-doing all that work can feel like a chore.

Where we're going, we don't need visual interfaces.

{% include chapter1.html %}1.
{% include chapter2.html %}Command Line Interface
{% include chapter3.html %}

When we talk about Command Line Interfaces (CLI), we're referring to text-based commands for our computer. 

Think of it like playing one of those early {% include tooltips.html face="90's text adventure games" tip="If you want to try it out yourself, the spirit of the 90's lives on in <a href='https://eblong.com/zarf/zweb/dreamhold' target='_blank'>corners of the web.</a>" %} where you have to enter "Move North" to explore. If instead you type "Prance Left", nothing will happen because the syntax is very, _very_ specific.

Which is a pain. But! it can be incredibly useful;

#### Repeatability & Documentation

Once you have it working, _it works_. If you know you'll need to clip data by the state of California many times over, executing a pre-written command can be much quicker than getting things straight in QGIS.

If you notice that you forgot to change a attribute at an earlier step, you won't have to reopen QGIS and start saving new layers. You can simply make the fix & re-run the prewritten commands. 

#### Batch Processing

Instead of working on individual layers or files, we can iterate commands over a folder of files. So, if we have multiple shapefiles, we can easily execute GIS operations over each of them.

#### Mix & Match

Want to automate more than just GIS operations? Perfect. Most of my scripts combine Mapshaper with additional CLI such as wget to also pull down data from websites.

We can also reference javascript, python, or whatever have you. The world is your oyster.

#### You become Neo

Not as important as the above things, but you will _literally_ become Neo from the Matrix when you run a command that makes your computer screen flood with fast moving text.

{% include chapter1.html id="basic" %}2.
{% include chapter2.html %}Get Moving
{% include chapter3.html %}

<aside>
  If you're already familiar with terminal navigation, feel free to skip <a href="#shop">to the next section</a>.
</aside>

When you start up your terminal, you'll see a scary, empty, black box. Much like your computer's finder, it is actually open to a specific folder. At most times, you'll terminal will be looking at a specific folder, also known as a directory.

#### Where Am I?

`pwd` : _Print working directory_: 

This will reply with _where_ your terminal is currently looking at. When used, you'll see something along the lines of: "/Users/yourUsernameHere"

`ls` : _List_

This will list off all the files & folders that are where your terminal is currently looking. This is useful for determing what a filename is named, and confirmation that you're in the right place.

`mkdir newfolder` : _Make Directory_

This will create a folder named newfolder. You can actually change 'newfolder' with whatever you want the folder to be named. _This will only create that folder. It will not move you into it._

#### Moving Left

Files on your computer are tucked away into folders, and the route to them is usually refereed to as a 'path'.

You're likely already familiar with file paths from web urls. On your computer they work much the same way. Here's how to navigate around your computer.

`cd` : _Change Directory_

This will take you to your home directory regardless of where you are.

`cd newfolder` : _Change Directory_ to 'newfolder'

This will move you into your newly created folder. Like mkdir, you can replace 'newfolder' with any folder name you want to navigate to. 

`cd ..` : _Change Directory_ up one level.

This will take you to your current folders parent.

#### Let the Adventure Begin!

OK. Now that we can navigate around, we can get started.

{% include chapter1.html id="shop"%}3.
{% include chapter2.html %}Setting up Shop
{% include chapter3.html %}

All of the above commands are built into modern operating systems. Commands to do GIS operations however, do not. We'll need to set up shop a bit for those.

1. [Node.js](https://nodejs.org/en/)

2. `npm install -g mapshaper`

{% include chapter1.html id="shape"%}4.
{% include chapter2.html %}Shape Up a Map
{% include chapter3.html %}


Mapshaper is a phenominal one-stop-shop for CLI carto commands. Here's the user guide: https://github.com/mbloch/mapshaper/wiki/Command-Reference

For our first command, download this file of the united states from Natural Earth. Now let's do some common commands.

# Change file formats

mapshaper countries.shp -o countries.geojson format=geojson

# Filter to just USA

mapshaper countries.geojson -filter '"USA".indexOf(NAME) > -1' -o usa.geojson

# Projection to Albers

mapshaper clipped.shp -proj +init=EPSG:2831 -o projected.shp
 

& Now let's join up some data w/ 


{% include chapter1.html %}4.
{% include chapter2.html %}To Be Continued...
{% include chapter3.html %}

It takes some getting used to, but hopefully if you did the above steps you may have noticed how much faster these operations can be than opening files up in QGIS or Arc.

In the next part I'll talk about how we can chain together multiple commands to make our own CLI robots. Til then,

<br>

<i>– D.M., somewhere Brooklyn<br>
<span class="post-date">Nov.18th, 2018</span></i>

<div class="notes">
  <p>If you've read this and notice any parts that still seem super confusing, or just have any other questions feel free to reach out to me on Twitter!</p>
  <p>Quick kudos to Matthew Bloch for both creating Mapshaper and sparking a huge interest in it in me during his talk at NACIS in 2017.</p>
  <p>And finally another quick kudos to <a href="https://twitter.com/dereklieu">Derek Lieu</a> for inadvertently introducing me to this approach for GIS work.</p>
</div>
