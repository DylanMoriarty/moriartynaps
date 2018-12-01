---
layout: post
title:  Command Carto – Part Two
date:   2018-11-2 19:16:49 +0100
categories: wikipedia

visible: hidden

song: "Learning to Relax – Dan Deacon"
songurl: https://www.youtube.com/embed/RtjS3KN162s

visible: false

---

<aside>
  This is the second part of a guide I've put together for command line carto. If you missed the first part, and have never used Mapshaper before, consider checking out part one before this. Cheers!
</aside>

Entering commands one by one can be quicker, but the real benefit of using Command Line operations for GIS work comes in chaining a series of commands together.

{% include chapter1.html %}1.
{% include chapter2.html %}Make It So
{% include chapter3.html %}


{% include chapter1.html %}2.
{% include chapter2.html %}ALL the Buildings
{% include chapter3.html %}

Microsoft's building set has made quite a splash. 

As of writing, they only have it available for download as geojsons. That's a lovely format, but when you start getting into gigabyte size geojsons, QGIS will start hemmoraging. While it makes more files, for quick poking around the dataset, I'll want these in a shapefile.

First thing first, we'll want to make a folder for the data.

```
getFootprints:
  @[ -d data ] || mkdir data
```

Now we want to download the file. Microsoft has them available by state, and otherwise the URL is the same. If we only want the buildings for, say, Wisconsin, we could just use _https://usbuildingdata.blob.core.windows.net/usbuildings-v1-1/Wisconsin.zip_. However, the uniformity presents us a good option to make this makebot a little bit more robust.

#### Variables

In a makefile, you can assign variables values while calling the command. For example, if we write:

```
testbot:
  echo $(VARIABLE)
```

& then run the following command in our terminal:

```
make testbot VARIABLE="hello!"
```

The testbot will echo that value. We can take advantage of this and microsofts fortunate URL structure to make our fetch code:

```
getFootprints:
  @[ -d data ] || mkdir data
  wget https://usbuildingdata.blob.core.windows.net/usbuildings-v1-1/$(STATE).zip -P data
```

Try running that with the state of your choice _that isn't California or Texas_! You should be rewarded with a download. I'll explain about California below.

```
make getFootprints STATE=Wisconsin
```

#### Processing

That grabs the zip file. But we just want the contents of it. To unzip it, we'll add:

```
getFootprints:
  @[ -d data ] || mkdir data
  wget https://usbuildingdata.blob.core.windows.net/usbuildings-v1-1/$(STATE).zip -P data
  unzip data/$(STATE).zip -d data
```

Because we're still in the main folder of this, we need to explicitly tell the terminal that we want the contents of data/$(STATE).zip to be put in the data/ folder.

Now let's convert it a shapefile somewhere that won't crash.

```
getFootprints:
  @[ -d geojson ] || mkdir geojson
  wget https://usbuildingdata.blob.core.windows.net/usbuildings-v1-1/$(STATE).zip -P geojson
  unzip geojson/$(STATE).zip -d geojson
  node --max-old-space-size=8192 `which mapshaper` data/$(STATE).geojson -o data/$(STATE).shp format=shapefile
```

So. As we previously said, these geojsons are **huge.** So much so, that you will almost certainly need to force your computer to assign more memory to this task than it typically allows. For most other cases, we could just do the same conversion formula we did in Part One. Here, we have to get a bit fancy.

If you run this, it may take five to ten minutes, but during that time you can go do other things! Behold, the freedom of a well put together Makebot.

#### Cleaning House

Finally, given that we only wanted the Shapefile, it can be nice to remove some of the other files we gathered on the way. To do that, we'll just tag on a _rm [filename]_ at the end like so:

```
 getFootprints:
  @[ -d geojson ] || mkdir geojson
  wget https://usbuildingdata.blob.core.windows.net/usbuildings-v1-1/$(STATE).zip -P geojson
  unzip geojson/$(STATE).zip -d geojson
  node --max-old-space-size=8192 `which mapshaper` geojson/$(STATE).geojson -o geojson/$(STATE).shp format=shapefile
  rm geojson/$(STATE).geojson
```

#### Texas, California; Taming the Beast

I mentioned above to not download any of the largest State's for this. That is partly because even with the increase in processing power, Mapshaper may not be able to fully convert those files.

This does present a good opportunity to talk about the versalility of Makefiles tho. With CLI GIS, there's almost always three different libraries to do common tasks. In this case, we can use one of the foundational GIS libaries directly, Ogr2Ogr to make the conversion– and this one works.

```
largerFile:
  ogr2ogr -nlt POLYGON -skipfailures california.shp California.geojson OGRGeoJSON
```

<br>

<i>– D.M., somewhere Brooklyn<br>
<span class="post-date">Nov.18th, 2018</span></i>

<div class="notes">
  <p>If you've read this and notice any parts that still seem super confusing, or just have any other questions feel free to reach out to me on Twitter!</p>
  <p>Quick kudos to Matthew Bloch for both creating Mapshaper and sparking a huge interest in it in me during his talk at NACIS in 2017.</p>
  <p>And finally another quick kudos to <a href="https://twitter.com/dereklieu">Derek Lieu</a> for inadvertently introducing me to this approach for GIS work.</p>
</div>
