---
layout: post
title:  Command Carto – Part Three
date:   2018-11-2 19:16:49 +0100
categories: wikipedia

visible: hidden

song: "Pocket Calculator – Kraftwerk"
songurl: https://www.youtube.com/embed/WvIRsDHFiis

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


{% include chapter1.html %}3.
{% include chapter2.html %}Fetching Data
{% include chapter3.html %}

One of the most frequent ones I use is for fetching active wildfire data. There are three primary sources we use for doing quick looks at wildfire perimeters:

- A National shapefile of all current fires perimeters.
- VIIRS 35m data for the past 72 hours.
- VIIRS 35m data for the past 24 hours.

It's not hard to go to the websites and download them, but it's easier to have a one line command to run vs. going the site itself. Additionally, adding in a little file management can do wonders for your future self when you return back in two months.

First thing, how do we get the data.

```
DATE:= `date +'%y.%m.%d'`

active:
  @[ -d data ] || mkdir data
  @[ -d data/active ] || mkdir data/active
  @[ -d data/active/$(DATE) ] || mkdir data/active/$(DATE)
  wget "https://firms.modaps.eosdis.nasa.gov/active_fire/viirs/shapes/zips/VNP14IMGTDL_NRT_USA_contiguous_and_Hawaii_24h.zip" -P data/active/$(DATE)
  wget "https://firms.modaps.eosdis.nasa.gov/active_fire/viirs/shapes/zips/VNP14IMGTDL_NRT_USA_contiguous_and_Hawaii_7d.zip" -P data/active/$(DATE)
  unzip -o "data/active/$(DATE)/VNP14IMGTDL_NRT_USA_contiguous_and_Hawaii_24h.zip" -d data/active/$(DATE)/
  unzip -o "data/active/$(DATE)/VNP14IMGTDL_NRT_USA_contiguous_and_Hawaii_7d.zip" -d data/active/$(DATE)/
  rm data/active/$(DATE)/VNP14IMGTDL_NRT_USA_contiguous_and_Hawaii_24h.zip
  rm data/active/$(DATE)/VNP14IMGTDL_NRT_USA_contiguous_and_Hawaii_7d.zip
  wget "https://rmgsc.cr.usgs.gov/outgoing/GeoMAC/ActiveFirePerimeters.kml" -P data/active/$(DATE)
```

