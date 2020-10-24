---
layout: post
title:  Maps of Home
date:   2020-10-23 00:0:01 +0100
categories: wikipedia

type: maps
scripts: Mapbox Waypoints

twit-img: "https://moriartynaps.org/assets/graphics/posts/13-home/twi-img.jpg"

soc-descrip: "Maps and doodles of a place called Home"
soc-url: "https://moriartynaps.org/maps-of-home/"
soc-type: "article"
soc-img: "https://moriartynaps.org/assets/graphics/posts/13-home/soc-img.jpg"

song: "Home again – Michael Kiwanuka"
songurl: https://www.youtube.com/embed/videoseries?list=PL1KbmvLItolQlZ2TMezLG9_FngQVkz7Ee

centerAlign: true
visible: true
---

<div class="Maps-from-home"></div>

This is Janesville, Wisconsin

{::nomarkdown}

  <style>
    body {
      background: #f0f0f0;
    }

    .new-gradient {
      position: relative;
    }

    .new-gradient:before {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      content: "";
      background: #f0f0f0;
      background: -moz-linear-gradient(top, $bodyColor 0%, $bodyToFade 100%);
      background: -webkit-linear-gradient(top, $bodyColor 0%, site-title$bodyToFade 100%);
      background: linear-gradient(to bottom, #f0f0f0 0%, #cee6e5 100%);
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$bodyColor', endColorstr='$bodyToFade',GradientType=0 ); /* IE6-9 */
    }

    .map-container {
      top: 0;
      position: sticky;
      position: -webkit-sticky;
      max-width: 1000px;
      width: 100%;
      height: 100vh;
      margin: -8rem auto 0 auto;
      background-color: rgba(0,0,0,0) !important;
    }

    #map {
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0) !important;
    }

    #map-second {
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0) !important;
    }

    .map-cover {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      z-index: 9;
      background-image: radial-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0) 40%, #f0f0f0 60%);
    }

    .mapboxgl-canvas-container {
      background-color: rgba(0,0,0,0) !important;
    }

    .scroll-list {
    }

    .scroll-list li {
      list-style: none;
      margin: 0 auto 90vh;
      width: fit-content;
      max-width: 400px;
      background-color: rgba(240, 240, 240, 0.95);
      box-shadow: 0px 0px 8px rgba(240, 240, 240, 0.85);
      padding: 0.75rem 0.5rem 0.5rem 0.5rem;
      border-radius: 10px;
    }

    .scroll-list li p {
      font-size: 20px;
      line-height: 28px;
      margin-bottom: 0.5rem;
    }

    .scroll-list li::before {
      content: '';
    }

    .intro-viz { width: 100%; }

    .article-map-cont { padding-bottom: 0; }

    footer { background-color: #b6d3cf; }
  </style>

  </article>
</section>

  <section class="article-container article-cotainer__within article-map-cont">
    <article class="intro-viz">
      <div class="map-container">
        <div class="map-cover"></div>
        <div id="map"></div>
      </div>
      <ol class="scroll-list">
        <li class="slide-1">
          <p>...as it shows up on most maps.</p>
      </li>
      <li class="slide-2">
        <p>Founded in 1835 by a woodsman and city planner, most people know it as the hometown of Paul Ryan and a General Motors plant that shut down years ago.</p>
      </li>
      <li class="slide-3">
        <p><i>This</i> is Janesville, Wisconsin, to me.</p>
        <p>Between 1990 and 2009, this was home.</p>
        </li>
      <li class="slide-4">
        <p>Hopping through a shortcut hole in a fence walking to school,</p>
      </li>
      <li class="slide-5">
        <p>Struggling to move a solid wood piano replica across an alleyway in midst a snowstorm...</p>
      </li>
      <li class="slide-6">
        <p>Finding sanctuary from the night-time monsters...</p>
      </li>
      <li class="slide-7">
        <p>Looking forward to the mornings that my crush <i>might</i> sit next to me...</p></li>
      <li class="slide-8">
        <p>Shoveling freshly fallen snow.</p></li>
    </ol>
    <div class="fin"></div>

  </article>
</section>
  <section class="article-container article-cotainer__within">
      <div class="article-gutter {% if page.centerAlign %}article-gutter_middle{% endif %}"></div>
      <article class="article-content {% if page.centerAlign %}article-content_middle{% endif %}">
{:/}


{% include chapter1.html %}1.
{% include chapter2.html %}Home, Again
{% include chapter3.html %}

After six months on an island in New York City, I moved back to Wisconsin. Initially planned as a long trip, a family member’s “_not-the-plague-but-still-serious_” illness spurred a more temporarily permanent relocation.

Like most folks who move away, I've returned a good deal for quick holiday pop-ins. Sticking around, however, really floods ya with recollections. Lots of: “_Oh, that’s right, Wisconsin is like this_”. Absence makes the heart grow fonder, and the brain forget how many spiders live in Midwestern homes.

{% include postimg.html imgsrc="posts/13-home/midwest.png" class="inline-img" %}

For those who read <a href="https://moriartynaps.org/maps-from-isolation/" target="_blank">Maps from Isolation</a>, I went with driving to make the trip. As much fun as walking halfway across the country could have been...

{% include chapter1.html %}2.
{% include chapter2.html %}Islands in the Stream 
{% include chapter3.html %}

Of course, the specter of Covid-19 looms large over this homecoming. In lieu of “_welcome back drinks_, there’s instead “_friendly hand waves from porches_.” It continues to be a weird pseudo-presence. Despite being more physically nearby to folks, quarantining makes it hard to feel that much actually closer.

For the most part, conversations follow a similar trajectory – covid sucks, isolation is a bummer, but we're persevering. Without the opportunity to do things with others, or share experiences that aren't plague related, conversations can feel surface level.

{::nomarkdown}
  </article>
</section>

  <section class="article-container article-cotainer__within article-map-cont">
    <article class="intro-viz">
      <div class="map-container map-container__second">
        <div class="map-cover"></div>
        <div id="map-second"></div>
      </div>
      <ol class="scroll-list">
        <li class="slide-21">
          <p>That said, every rendezvous carries a weight with it.</p>
        </li>
        <li class="slide-22">
          <p>That you're taking a risk, however mitigated or small,</p>
        </li>
        <li class="slide-23">
          <p>just to sit and chat for a bit.</p>
        </li>
        <li class="slide-25">
          <p>I've never missed Janesville, and don't feel an urge to end up here. Instead, I appreciate that for nineteen years, it was a good place to grow up with a lot of wonderful folks running around.</p>
      </li>
      <li class="slide-26">
        <p>It is enthralling realizing that for each of those folk, this lil' dot blows out to a whole other story.</p>
      </li>
      <li class="slide-27">
        <p>Heck, anyone whose ever slept in the bounds of <code>[-126.6,49.6], [-65,24.2]</code></p>
      </li>
      <li class="slide-28">
        <p>or anywhere, <i>ever</i></p>
      </li>
      <li class="slide-29">
        <p>will draw their own dreams of what a place it was.</p>
      </li>
    </ol>
    <div class="fin"></div>
{:/}

{::nomarkdown}
  </article>
</section>
  <div class="new-gradient">
  <section class="article-container article-cotainer__within">
      <div class="article-gutter {% if page.centerAlign %}article-gutter_middle{% endif %}"></div>
      <article class="article-content {% if page.centerAlign %}article-content_middle{% endif %}">
{:/}

{% include chapter1.html %}3.
{% include chapter2.html %}Dancing With a Memory
{% include chapter3.html %}

The Janesville I grew up in is gone forever, and that’s ok! You can't visit it really, but I’m content that at least this familiar space retains some echoes. Small confirmations of that time and place.

That hole in the fence was never repaired. The steel wire remains bashed down for easy passage, though without Moriarty's trampling it daily, fauna has overtaken the gap. A small tree is growing right through it. 

Traces linger of a kid trotting off to school.

{% include postimg.html imgsrc="posts/13-home/hole-in-the-fence.jpg" full="true" class="black-border" %}


<i>-Dylan<br>
<span class="post-date">October, 22nd 2020</span></i>

<script>
  const MapsFromHome = document.querySelector('.Maps-from-home')

  let usAnimation = false
  let worldAnimation = false
  let animationRadiusVar = 0.035
  let countryAnimation = false
  let wisconAnimation = false

  mapboxgl.accessToken = 'pk.eyJ1IjoiZG1vcmlhcnR5IiwiYSI6Ikd3T29EOWMifQ.-DKJ4ernht84AZmc6Bk51Q'

  // Intro Map
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/dmoriarty/ckfxb2lit031w19sxw3sauitl',
    center: [-89.0187,42.6828],
    zoom: 5 
  })

  // Followup Map
  const secondMap = new mapboxgl.Map({
    container: 'map-second',
    style: 'mapbox://styles/dmoriarty/ckfxb2lit031w19sxw3sauitl',
    center: [-89.0088435,42.6845751],
    zoom: 13.5
  })

  map.on('load', function() {
      map.boxZoom.disable();
      map.scrollZoom.disable();
      map.dragPan.disable();
      map.dragRotate.disable();
      map.keyboard.disable();
      map.doubleClickZoom.disable();
      map.touchZoomRotate.disable();

      map.addSource('overlay', {
        'type': 'image',
        'url': '{{site.baseurl}}/assets/graphics/posts/13-home/home-2.png',
        'coordinates': [
            [-89.05998229980469,42.715488939866084],
            [-88.97415161132812,42.715488939866084],
            [-88.97415161132812,42.65087935554455],
            [-89.05998229980469,42.65087935554455]
        ]
      })

      map.addSource('janesville-label', {
        'type': 'image',
        'url': '{{site.baseurl}}/assets/graphics/posts/13-home/janesville-label.png',
        'coordinates': [
            [-88.96728515624999,42.956422511073335],
            [-87.176513671875,42.956422511073335],
            [-87.176513671875,42.68243539838623],
            [-88.96728515624999,42.68243539838623]
        ]
      })

      map.addLayer({
        'id': 'overlay',
        'source': 'overlay',
        'type': 'raster',
        'paint': {'raster-opacity': 1}
      })
      map.addLayer({
        'id': 'janesville-label',
        'source': 'janesville-label',
        'type': 'raster',
        'paint': {'raster-opacity': 1}
      })
  })

  // -- = -- MAP ONE WAYPOINTS -- = --
  const waypoint = wafflecone(
    '.slide-2',
    [-89.0187,42.6828],
    5,
    '60%',
    map,
    false
  )

  const waypoint2 = wafflecone(
    '.slide-3',
    [-89.0188435,42.6845751],
    12.35,
    '90%',
    map,
    false
  )

  const way_fence = wafflecone(
    '.slide-4',
    [-89.0108871459961,42.678270918427195],
    14,
    '75%',
    map,
    false
  )
       
  const way_piano = wafflecone(
    '.slide-5',
    [-89.04092788696289,42.67397995016923],
    14,
    '75%',
    map,
    false
  )

  const way_creepiess = wafflecone(
    '.slide-6',
    [-89.01720864868164,42.69905333013366],
    14,
    '75%',
    map,
    false
  )

  const way_school = wafflecone(
    '.slide-7',
    [-88.9881420135498,42.67719820414012],
    14,
    '75%',
    map,
    false
  )

  const way_madison = wafflecone(
    '.slide-8',
    [-89.0188435,42.6845751],
    14,
    '75%',
    map,
    false
  )

  const animateMap = function() {
    requestAnimationFrame(animateMarker)
  }

  function animateMarker(timestamp) {
    const radOne = (Math.random() * 100) * animationRadiusVar
    const radTwo = (Math.random() * 100) * animationRadiusVar
    const radThree = (Math.random() * 100) * animationRadiusVar
    const radFour = (Math.random() * 100) * animationRadiusVar

    secondMap.setPaintProperty('world-bord-one', 'circle-radius', radOne)
    secondMap.setPaintProperty('world-bord-two', 'circle-radius', radTwo)
    secondMap.setPaintProperty('world-bord-three', 'circle-radius', radThree)
    secondMap.setPaintProperty('world-bord-four', 'circle-radius', radFour)

    if(worldAnimation) {
      requestAnimationFrame(animateMarker);
    } else {
      'END IT END IT'
    }
  }

  secondMap.on('load', function() {
    secondMap.addSource('today-parents', {
      'type': 'image',
      'url': '{{site.baseurl}}/assets/graphics/posts/13-home/today-parents.png',
      'coordinates': [
        [-89.03715133666992,42.70073056317599],
        [-88.97998809814453,42.70073056317599],
        [-88.97998809814453,42.66905759231552],
        [-89.03715133666992,42.66905759231552]
      ]
    })

    secondMap.addSource('today-other', {
      'type': 'image',
      'url': '{{site.baseurl}}/assets/graphics/posts/13-home/today-other.png',
      'coordinates': [
        [-89.03715133666992,42.70073056317599],
        [-88.97998809814453,42.70073056317599],
        [-88.97998809814453,42.66905759231552],
        [-89.03715133666992,42.66905759231552]
      ]
    })

    secondMap.addSource('today-mad', {
      'type': 'image',
      'url': '{{site.baseurl}}/assets/graphics/posts/13-home/today-madison.png',
      'coordinates': [
        [-89.03715133666992,42.70073056317599],
        [-88.97998809814453,42.70073056317599],
        [-88.97998809814453,42.66905759231552],
        [-89.03715133666992,42.66905759231552]
      ]
    })

    secondMap.addSource('janesville-label', {
      'type': 'image',
      'url': '{{site.baseurl}}/assets/graphics/posts/13-home/janesville-label.png',
      'coordinates': [
          [-88.96728515624999,42.956422511073335],
          [-87.176513671875,42.956422511073335],
          [-87.176513671875,42.68243539838623],
          [-88.96728515624999,42.68243539838623]
      ]
    })

    secondMap.addLayer({
      'id': 'janesville-label',
      'source': 'janesville-label',
      'type': 'raster',
      'paint': {'raster-opacity': 1}
    })

    secondMap.addLayer({
      'id': 'today-parents',
      'source': 'today-parents',
      'type': 'raster',
      'paint': {'raster-opacity': 1}
    })
    secondMap.addLayer({
      'id': 'today-other',
      'source': 'today-other',
      'type': 'raster',
      'paint': {'raster-opacity': 0}
    })
    secondMap.addLayer({
      'id': 'today-mad',
      'source': 'today-mad',
      'type': 'raster',
      'paint': {'raster-opacity': 0}
    })

    secondMap.setLayoutProperty('bg-hidden', 'visibility', 'visible');

    // -- = -- MAP TWO WAYPOINTS -- = --
    const map2_illoFadeOne = wafflecone(
      '.slide-21',
      [-89.0088435,42.6845751],
      13.5,
      '80%',
      secondMap,
      false,
      'today-parents'
    )

    const map2_illoFadeTwo = wafflecone(
      '.slide-22',
      [-89.0088435,42.6845751],
      13,
      '80%',
      secondMap,
      false,
      'today-other'
    )

    const map2_illoFadeThree = wafflecone(
      '.slide-23',
      [-89.0088435,42.6845751],
      12.85,
      '80%',
      secondMap,
      false,
      'today-mad'
    )

    // turn Map on
    const map2_illoFadeBg = wafflecone(
      '.slide-25',
      [-89.0088435,42.6845751],
      6,
      '80%',
      secondMap,
      false,
      null,
      1
    )

    // zoom to Wisc
    const map2_zoomToJanesville = wafflecone(
      '.slide-26',
      [-89.0088435,42.6845751],
      6,
      '80%',
      secondMap,
      true,
      null
    )

    // zoom to U.S.
    const map2_zoomToUS = wafflecone(
      '.slide-27',
      [-98.5794797,39.8283459],
      3,
      '80%',
      secondMap,
      true,
      null,
      2
    )

    const map2_zoomToGlobal = wafflecone(
      '.slide-28',
      [0,0],
      0.5,
      '80%',
      secondMap,
      true,
      null,
      3
    )
  })

  function fadeLayer(image, fade) {
    secondMap.setPaintProperty(image, 'raster-opacity', fade)
  }

  function wafflecone(elem, center, zoom, offset, mapElm, animate, layer, endChange) {
        return new Waypoint({
          element: document.querySelector(elem),
          handler: function(direction) {
            mapElm.flyTo({
              'center': center,
              'zoom': zoom,
              'speed': 0.2
            })

            if (animate) {
              worldAnimation = true
              animateMap()
            } else {
              worldAnimation = false
            }

            if (layer) { fadeLayer(layer, 1) }
            if (endChange === 1) {
              secondMap.setLayoutProperty('bg-hidden', 'visibility', 'none');
            } else if (endChange === 2) {
              secondMap.setPaintProperty('janesville-label', 'raster-opacity', 0)
              secondMap.setLayoutProperty('us-cities-one', 'visibility', 'visible');
              secondMap.setLayoutProperty('us-cities-two', 'visibility', 'visible');
              secondMap.setLayoutProperty('us-cities-three', 'visibility', 'visible');
              secondMap.setLayoutProperty('global-cities-one', 'visibility', 'visible');
              secondMap.setLayoutProperty('global-cities-two', 'visibility', 'visible');
              secondMap.setLayoutProperty('global-cities-three', 'visibility', 'visible');
            } else if (endChange === 3) {
            } else {
            }
          },
          offset: offset
        })
  }
</script>


<div class="notes">
  <p>The map concept at the top of this piece has been kicking in my head for a long while. Came from a dream: Meandering in a museum space, from far, far away you see a map introducing a new exhibit on New York City. Walking closer, the standard .NEW YORK CITY dot became more detailed until you'd get to up close and discovered that each inch had a drawing detailing that block's history. A historical illustration with the energy and detail of a <a href="https://www.google.com/search?q=where%27s+waldo+page&tbm=isch&ved=2ahUKEwiuxtTT1qLsAhVoja0KHTkeCZsQ2-cCegQIABAA&oq=where%27s+waldo+page&gs_lcp=CgNpbWcQAzICCAAyAggAMgIIADICCAAyBggAEAgQHjIGCAAQCBAeMgYIABAIEB4yBggAEAgQHjIGCAAQCBAeMgYIABAIEB46BwgAELEDEEM6BAgAEEM6BQgAELEDUOoDWLcVYNAWaAFwAHgAgAHqAYgBwwWSAQUzLjIuMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=ps59X67bAuiatgW5vKTYCQ&bih=978&biw=1920" target="_blank">Where's Waldo page</a>. No doubt inspired by the wonderful <a href="https://www.davidrumsey.com/luna/servlet/detail/RUMSEY~8~1~272381~90046245:Chicago-Gangland-from-Authentic-Sou" target="_blank">1981 illustrated map of Chicago gangs.</a></p>

  <p>This is a more modest implementation of that concept. Don't quite feel like I could do that map justice without significant study. Making it more introspective saves a lot of time on research! Moving near Janesville and turning thirty probably helped too.</p>

  <p>Slippy maps made w/ <a href="https://www.mapbox.com/about/maps/" target="_blank">Mapbox</a>, using <a href="http://www.openstreetmap.org/about/" target="_blank">OpenStreetMap</a> data. <a href="https://apps.mapbox.com/feedback/?owner=dmoriarty&id=ckfxb2lit031w19sxw3sauitl&access_token=pk.eyJ1IjoiZG1vcmlhcnR5IiwiYSI6Ikd3T29EOWMifQ.-DKJ4ernht84AZmc6Bk51Q" target="_blank">Improve the map!</a></p>

  <p>U.S. cities dataset from the U.S. Census.</p>
</div>

