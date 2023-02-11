---
layout: post
title:  Moriarty Hands

date:   2021-4-20 00:0:01 +0100

type: maps
scripts: Mapbox

twit-img: "https://moriartynaps.org/assets/graphics/posts/19-album/twi-img.jpg"

soc-descrip: "The search for the next great album-inspired map pastiche"
soc-url: "https://moriartynaps.org/covers/"
soc-type: "article"
soc-img: "https://moriartynaps.org/assets/graphics/posts/19-album/soc-img.jpg"

visible: false
centerAlign: false

---

<a href="https://www.projectlinework.org/#pl-liana" target="_blank">Download Linework</a>   \|   <a href="{{ site.baseurl }}/assets/files/MoriartyFont.zip">Download font (39kb)</a>

Cartographers like their data percise and accurate. We're living in a golden age for that, with sources like Natural Earth Data and Open Street Map making that data accessible

That said, not all maps need such percision! To err is human and nothing feels more human than an attempt to sketch geography on a napkin. That's where Moriarty Hand comes in:

{% include layout-bits/article-break.html %}
<div id="hand-map"></div>
{% include layout-bits/article-resume.html %}




<!-- 
Still, not all maps need such percision! As {% include tooltips.html face="Daniel Huffman" tip="Daniel is a freelance Cartographer, and one of the best out there. He runs the blog <a href='https://somethingaboutmaps.wordpress.com/' target='_blank'>somethingaboutmaps</a>. Check it out!" %}

> "[Project Linework is a] library of handcrafted vector linework for cartography, each designed in a unique aesthetic style. They are meant to break us away from default line paths that we so often rely on by providing more visually-interesting alternatives."
 -->
A great comparison are fonts. Root goals for any font are that it 1) has legible, distinct letters, & 2) that it's got some consistenty in design. We could well use Arial for everything. But we don't as we know there may be typefaces that better evoke the mission; whether that be selling milk, promoting art, or just letting folks know casual Friday is coming up.

In occasional cases, even geographic ones, precision can take a back seat to evoking a feeling.

This pre-dates the linework, but is exactly the kind of map that benefits from the looser style.

{% include chapter1.html %}1.
{% include chapter2.html %}The Linework
{% include chapter3.html %}


We wanted to make a linework that looked hand drawn, but not inaccurate to the point of it being useless. I first tried to eyeball it... which went disastrously. Next I tried tracing a print out of an accurate base but that proved too close. It just resembled shaky-cam NaturalEarthData.

We determined the best way to get a nice balance was to use our print out of NaturalEarthData as a base and make markers around the boundaries- at tips of coasts or where country borders split. Then I'd eyeball the spaces in between doing it freehand.

We determined the best way to get a nice balance was to use our print out of NaturalEarthData as a base and make markers around the boundaries- at tips of coasts or where country borders split. Then I'd eyeball the spaces in between doing it freehand.

The red outlines in this image are the accurate source, NaturalEarthData. The black is Moriarty Hand. With the overlap it's clear where I traced vs. where it was free-handed.

For example, for Florida I marked where the south-most tip was, where it bent to, and then drew in the rest. This put things in roughly the right place with enough flourishes and errors for it to truly look manmade.

As for converting the sketch I did into a Shapefile, well, that's something you would need to bug Daniel about. After we both cleaned up the scanned drawing, he took to actually georeferencing it in ArcGIS. As I understand it, it was very tedious and I can't thank him enough for taking it on. Thanks Daniel!

{% include chapter1.html %}2.
{% include chapter2.html %}A Handwritten Font
{% include chapter3.html %}

It always feels great when you want to do something and the first Google result provides a super easy method.

In this case, I used http://www.myscriptfont.com/{:target="_blank"} to generate a font out of my handwriting. You just download their template, draw on it, re-upload it, and bang. You've got yourself a font.

Having a drawing tablet lowers the barrier on this even further.
It took a few tries to get something that looked fairly consistent in it's weight & heights. It could certainly use some further tweaking, but the unevenness is much more true to my actual handwriting. Here's an example:

> Ghost Rider
> When the motorcyclist Johnny Blaze finds that his father Barton Blaze has a terminal cancer, he accepts a pact with the Mephistopheles, giving his soul for the health of his beloved father. But the devil deceives him, and Barton dies in a motorcycle accident during an exhibition. Johnny leaves the carnival, his town, his friends and his girlfriend Roxanne. Years later Johnny Blaze becomes a famous motorcyclist, who risks his life in his shows, and he meets Roxanne again, now a TV reporter. However, Mephistopheles proposes Johnny to release his contract if he become the "Ghost Rider" and defeat his evil son Blackheart, who wants to possess one thousand evil souls and transform hell on earth.

The immediate reason of making this font was to help launch a part of this website that I could use to write letters to folks and still make them feel more endearing than a regular old email would. After making it though, it's been fun to break out for miscellanious side projects.

And with that, we have a sketchy georeferenced artwork that folks can use for their maps. We can project it, as well as layer other georeferenced data on top of it. I also have a font that's unique to myself to boot.

Feel free to use either of these for your projects. I'd love to see them in the wild.

<a href="https://www.projectlinework.org/#pl-liana" target="_blank">Download Linework</a>   |   <a href="{{ site.baseurl }}/assets/files/MoriartyFont.zip">Download font (39kb)</a>

Enjoy!

{% include blog-bits/moriarty-hand/style.html %}
{% include blog-bits/moriarty-hand/script.html %}

<i>-Handyman Dylan,<br>
<span class="post-date">Originally published May 30, 2016</span></i>

<!-- <div class="notes">
  <p>The map concept at the top of this piece has been kicking in my head for a long while. Came from a dream: Meandering in a museum space, from far, far away you see a map introducing a new exhibit on New York City. Walking closer, the standard .NEW YORK CITY dot became more detailed until you'd get to up close and discovered that each inch had a drawing detailing that block's history. A historical illustration with the energy and detail of a <a href="https://www.google.com/search?q=where%27s+waldo+page&tbm=isch&ved=2ahUKEwiuxtTT1qLsAhVoja0KHTkeCZsQ2-cCegQIABAA&oq=where%27s+waldo+page&gs_lcp=CgNpbWcQAzICCAAyAggAMgIIADICCAAyBggAEAgQHjIGCAAQCBAeMgYIABAIEB4yBggAEAgQHjIGCAAQCBAeMgYIABAIEB46BwgAELEDEEM6BAgAEEM6BQgAELEDUOoDWLcVYNAWaAFwAHgAgAHqAYgBwwWSAQUzLjIuMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=ps59X67bAuiatgW5vKTYCQ&bih=978&biw=1920" target="_blank">Where's Waldo page</a>. No doubt inspired by the wonderful <a href="https://www.davidrumsey.com/luna/servlet/detail/RUMSEY~8~1~272381~90046245:Chicago-Gangland-from-Authentic-Sou" target="_blank">1981 illustrated map of Chicago gangs.</a></p>

  <p>This is a more modest implementation of that concept. Don't quite feel like I could do that map justice without significant study. Making it more introspective saves a lot of time on research! Moving near Janesville and turning thirty probably helped too.</p>

  <p>Slippy maps made w/ <a href="https://www.mapbox.com/about/maps/" target="_blank">Mapbox</a>, using <a href="http://www.openstreetmap.org/about/" target="_blank">OpenStreetMap</a> data. <a href="https://apps.mapbox.com/feedback/?owner=dmoriarty&id=ckfxb2lit031w19sxw3sauitl&access_token=pk.eyJ1IjoiZG1vcmlhcnR5IiwiYSI6Ikd3T29EOWMifQ.-DKJ4ernht84AZmc6Bk51Q" target="_blank">Improve the map!</a></p>

  <p>U.S. cities dataset from the U.S. Census.</p>
</div> -->

