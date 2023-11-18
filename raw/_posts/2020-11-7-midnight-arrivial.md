---
layout: post
title:  Midnight Arrival

date:   2020-11-7 00:0:01 +0100
categories: wikipedia

type: maps
scripts: Mapbox Waypoints

twit-img: "https://moriartynaps.org/assets/graphics/posts/10-midnight/twi-img.jpg"

soc-descrip: "A calm descent over the flickering night lights of Washington D.C."
soc-url: "https://moriartynaps.org/maps-of-home/"
soc-type: "article"
soc-img: "https://moriartynaps.org/assets/graphics/posts/10-midnight/soc-img.jpg"

song: ""
songurl: https://www.youtube.com/embed/videoseries?list=PL1KbmvLItolR5ECJKKSHAWymes57Ry4n5
songi: true

visible: true
---

{% include blog-bits/midnight-arrival/style.html %}

{% include postimg.html imgsrc="posts/10-midnight/burningmatch.gif" class="inline-img black-border lit-match" %}

There's nothing quite as enchanting as an open flame. The wispy spontaneity, the collapsing kindling, & the warmth of a good fire is inescapably captivating.

I think it's recollection of fire that makes flying at night such a treat. Streetlights flicker & glow like embers. Shooting star car lights slide down invisible roads until they burn out.

When I'm lucky enough to catch the midnight view of a city from on high, I'm usually half soaking the gorgeous view in, and half working on how I could possibly replicate it. This is my attempt to do so.

You can find some tunes to drown out the sound of the engines (or in this case, your computer's fan) at the top right corner of this page. 

Please enjoy this endless descent over Washington D.C.

{::nomarkdown}
  </article>
</section>

<div class="post-image post-image__full">
  <div class= "full-bleed">
    <div class="innershadow"></div>
    <div id="nightMap" class="mapstyle"></div>
  </div>
  <div class="map-controller">
    <div class="happy-auto-pilot">
      <img src="../assets/graphics/posts/10-midnight//airplane_autopilot.png">
    </div>
    <button class="autopilot-toggle autopilot-off">Manual Control</button>
  </div>
</div>

<section class="article-container article-cotainer__within">
  <div class="article-gutter {% if page.centerAlign %}article-gutter_middle{% endif %}"></div>
  <article class="article-content {% if page.centerAlign %}article-content_middle{% endif %}">
{:/}

{% include blog-bits/midnight-arrival/flight-path.html %}
{% include blog-bits/midnight-arrival/map.html %}

{::nomarkdown}
<p class="beneathMap">
  <i>-Dylan, in the clouds<br>
  <span class="post-date">November, 7th 2020</span></i>
</p>

<div class="notes">
  <p><a href="https://dylanmoriarty.github.io/blog/midnight-arrival.html" target="_blank">The first iteration of this project</a> was first published Oct.27, 2017. I decided to revisit it partly as an effort to transition my old blog to this one but mostly due to seeing the wonders <a href="https://twitter.com/jonni_walker" target="_blank">Jonni Walker</a> has been doing w/ firefly styling. Good lord does the 'blur' option help with luminescence! 

  <p>Why D.C.? Well, when I wrote this, I lived there. But it's also a damn well documented city. Most cities don't a readily available shapefile for the cities streetlights. <a href="https://opendata.dc.gov/datasets/6cb6520725b0489d9a209a337818fad1_90" target="_blank">D.C. sure does!</a></p>

  <p>The building data here is from <a href="opendata.dc.gov" target="_blank">opendata.dc.gov</a>, and is wildly more detailed than I had use for. 3D modelers rejoyce. That data was simplified via <a href="https://github.com/mbloch/mapshaper/wiki/Command-Reference" target="_blank">Mapshaper</a> and worked into mbtiles with <a href="https://github.com/mapbox/tippecanoe" target="_blank">Tippecanoe</a>. The later allows more custom control with how tiles are rendered from geojson's.</p>

  <p>The match GIF came from Giphy, no idea where they got it from unfortunately.</p>

  <p>I'd pondered for awhile how I could generate streetlight-esque patterns through manipulating road layers:</p>

  <p>In one iteration I was going to make 'fake' streetlights by using road lines but making them 'dotted'; 1 pixel dashes with 10 pixel gaps between them or so. This would allow us to get lights for the whole world, but is terribly unruly and turns into a disaster when there are nearby roads. It also adds a uniformity that no human urban planner could dream to achieve.</p>

  <p>Another was to generate millions of random points in QGIS, & then clip it to buffered roads. Never tried this because I thought, again, a random distribution would look unrealistic. Streetlights do have SOME regions of uniformity. Also, too much work. This is play, dammit.</p>

  <p>Finally, I apologize to your eyeballs for making an incredibly dark webpage on a site where otherwise every page is a very light grey. Sorry eyeballs!</p>
</div>
{:/}

