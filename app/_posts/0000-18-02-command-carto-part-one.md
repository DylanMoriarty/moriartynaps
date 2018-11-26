---
layout: post
title:  Commanding Carto - Part One
date:   2018-12-2 19:16:49 +0100
categories: wikipedia

visible: hidden

song: "Pocket Calculator – Kraftwerk"
songurl: https://www.youtube.com/embed/WvIRsDHFiis

visible: true

---

Cartography work can be super messy. For every operation done, whether it's projecting, buffering, clipping, merging, etc. either a new file is created, _or_ you risk having to spend hours repeating your process when you realize an early join didn't work.

Even when everything does work out perfectly, when new data comes along re-doing all that work can feel like a chore.

Might there be a better way?

Where we're going, we don't need visual interfaces.

{% include chapter1.html %}1.
{% include chapter2.html %}Command Line Interface
{% include chapter3.html %}

The terminal is like directly talking to your computer.

Think of it like playing one of those early 90's text adventure games where you have to enter "Go Left" to move. If you typed "Prance Left", nothing would because the syntax is very, _very_ specific. You either have a cheatsheet/guide that tells you what that syntax is, or you spend ten minutes typing in synomyms for 'go' all while fearing that it's not actually possible to move to the left.

This tutorial will work well enough for you as a cheatsheet/guide to get started.

{% include chapter1.html %}2.
{% include chapter2.html %}Basic Commands
{% include chapter3.html %}

When you start up your terminal, you'll see a scary, empty, black box. Much like your computer's finder, it is actually open to a specific folder. At most times, you'll terminal will be looking at a specific folder, also known as a directory.

`pwd` : _Print working directory_: 

This will reply with _where_ your terminal is currently looking at. When used, you'll see something along the lines of: "/Users/moriartyd"

`ls` : _List_

This will list off all the files & folders that are where your terminal is currently looking. This can be super useful for determing what a filename is named, and confirmation that you're in the right place.

`mkdir newfolder` : _Make Directory_

This will create a folder named newfolder. You can actually change 'newfolder' with whatever you want the folder to be named. This will just create that folder, and will not move you into it.

## Moving Left

First we should know what a path is.

#### File Paths

You're likely already familiar with file paths because of web urls. They're much the same! Basically, the path from the root to the 


`cd newfolder` : _Change Directory_

This will move you into your newly created folder. Like mkdir, you can replace 'newfolder' with any folder name you want to navigate to. However it must be 

{% include chapter1.html %}3.
{% include chapter2.html %}Shape up a Map
{% include chapter3.html %}

All of the above commands are built into modern operating systems. Commands to do GIS operations however, do not. We'll need to set up shop a bit for those.

1. [Node.js](https://nodejs.org/en/)

2. `npm install -g mapshaper`

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

In the next part I'll talk about how we can chain together multiple commands to effectively make our own CLI robots. Til then,

<br>

<i>– D.M., somewhere Brooklyn<br>
<span class="post-date">Nov.18th, 2018</span></i>

<div class="notes">
  <p>This post was updated on December 2nd because blah blah.</p>
</div>
