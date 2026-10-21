---
layout: post
title:  Here Be Pocket Monsters

date:   2026-10-21 04:0:01 +0100

type: maps

twit-img: "https://moriartynaps.org/here-be-pocket-monsters/twit-card.jpg"

soc-descrip: "A guide to capturing springtime bliss and centuries old design in map form"
soc-url: "https://moriartynaps.org/here-be-pocket-monsters/"
soc-type: "article"
soc-img: "https://moriartynaps.org/here-be-pocket-monsters/soc-card.jpg"

visible: true
centerAlign: false

scripts: MapLibre

scrolly_slides:
  - image: /assets/graphics/posts/22-monsters/end.png
    alt: Kanto map overview
    text: |
      So, you won! Congratulations! You're the new POKEMON LEAGE champion!
  - image: /assets/graphics/posts/22-monsters/end.png
    alt: Detail of the map
    text: |
      You've grown up so much since you first left with SQUIRTLE! You have come of age!
  - image: /assets/graphics/posts/22-monsters/end.png
    alt: Kanto map overview
    text: |
      You understand that your victory was not just your own doing!
  - image: /assets/graphics/posts/22-monsters/end.png
    alt: Kanto map overview
    text: |
      The bond you share with your POKEMON is marvelous!
            
            
            



---

<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">

{% include postimg.html imgsrc="posts/22-monsters/kiddo.png" %}

Video games give you something the real world refuses: _a fathomable map_. Every corner can be explored, every secret discovered. A linear story that matches the geography perfectly. It's no surprise fantasy mapping is so dang popular, it's all gas no filler.

<!-- Earlier this year, I had a problem. I wanted to experiment with making a FREAKIN' HUGE painting, but wasn't sure what project warranted it. -->

<!-- I spent a month making a huge freakin' painting of the world of the first Pokemon games - for charity! Desert Bus For Hope will be auctioning it off **at some point**, and it can be yours! -->

Despite being a Cartographer with a knack for illustration and a recovering Gameboy addict, I haven't made many fantasy maps. There's so many real-world stories to tell! 

Alas, the stars aligned, and so I spent a month painting a freakin' huge painting, (for charity!) of the world of Pokemon Red & Blue.

The incredible <a href="https://desertbus.org/2026/info/about" target="_blank">Desert Bus For Hope</a> will be <a href="https://desertbus.org/2026/prize/1cjJnLAHy2d3T7pJE1YjF" target="_blank">live auctioning</a> it off around *Monday, Oct 26, 12p EDT*.

Check out the map below, and read on for the story of it. But, beware dear reader... 

{% include article-break.html %}
<div id="map"></div>

<style>
    #map {
        width: 100%;
        max-width: 1200px;
        margin: -8rem auto 0;
        height: 700px;
    }
</style>

<script>
    const protocol = new pmtiles.Protocol();
    maplibregl.addProtocol('pmtiles', protocol.tile);
    
    const map = new maplibregl.Map({
      container: 'map',
      style: {
        version: 8,
        sources: {
          kanto: {
            type: 'raster',
            url: 'pmtiles://https://the-world-inferno-507689989688-us-east-2-an.s3.us-east-2.amazonaws.com/kanto.pmtiles',
            tileSize: 256
          }
        },
        layers: [
          { id: 'background', type: 'background', paint: { 'background-color': 'rgba(0,0,0,0)' } },
          { id: 'kanto', type: 'raster', source: 'kanto' }
        ]
      },
      center: [0, 0],
      zoom: 1,
      minZoom: 0.5,
      maxZoom: 2.75,
      renderWorldCopies: false,
      cooperativeGestures: true
    });

    map.fitBounds([[-180, -76.318675], [180, 76.318675]]);
    map.addControl(new maplibregl.NavigationControl());
</script>
{% include article-resume.html %}

...here be Pocket Monsters.

{% include chapter.html num="1." title='"How the hell did you get into that?"' %}

Not gonna lie, it's satisfying as hell to respond to:

"So, what do you do?" 

{% include postimg.html imgsrc="posts/22-monsters/teach.png" %}

with "Cartography". Few know that's still a thing you can do, fewer yet understand it, and _no one_ anticipates it. Inevitably, the revelation is followed by a "how the hell did you get into _that_?"

The shortest answer is ~ <i class="collecticon collecticons-star"></i>_Serendipity!_<i class="collecticon collecticons-star"></i>

The short answer is that I took a class that <a href="https://somethingaboutmaps.wordpress.com/2011/03/02/on-salvation/" target="_blank">Daniel Huffman</a> was teaching, and found a vibrant community fostered by the mighty Tanya Buckingham.

A lifetime doodler, I had dabbled in art classes at UW-Madison, but each had a fatal flaw. A photography class taught by someone absent one half and noticeably high the other. A typography class taught by a guy passionate about it in the best ways, but so strict any creative deviation was destroyed and discouraged.

Then I took Cartography, where the final project was "Make a Map about something you love." I'd go on to spend three days in a cage in a library basement pouring over 35 years worth of phonebooks to assemble a dataset to work with.

{% include postimg.html imgsrc="posts/22-monsters/library.png" %}

Moral of the story: _every_ art class should end on that assignment!!

The shoe fit. The community rules. And still to this day, anytime I want to try out something new or scary, I gravitate towards basing it on something near or dear to me.

Related, the LONG answer to "_How the hell did you get into that?_" begins, in part, with Pocket Monsters. 

{% include chapter.html num="2." title="A guide of many things" %}

My first memory of noticing GOOD vs. BAD data visualization came from Pokemon game guide books. In '98 you had limited options for a video game cheat sheet. Haphazard online <a href="https://gamefaqs.gamespot.com/gameboy/367023-pokemon-red-version/faqs/5763" target="_blank">txt file walkthroughs</a> that <a href="https://gamefaqs.gamespot.com/snes/588436-the-legend-of-zelda-a-link-to-the-past/faqs/63303" target="blank">pioneered ASCII art</a>, <a href="https://www.eurogamer.net/searching-for-mew-the-story-of-pokemons-greatest-mystery" target="_blank"> schoolyard rumors</a>, or magazines that only held your hand through the first levels. 

Then there were published book guides purchasable at your local Barnes and Nobles. Unlike the text-only archives of gamefaqs, these had full on art. Screenshots! Could be referenced away from the computer! _Were chock full of maps!_

Pokemon was big enough that it had multiple books on the shelves. Nintendo published their guide in ’98. Also in ’98, Prima, a guidebook publishing firm out of California, put out theirs that would seemingly dominate the shelves.

In ’99, Versus, another California guidebook publishing firm put out their guide. And it incidentally became a introductory course of the powers of good design.

Take all the covers. They each use the same stock illustrations you see _everywhere_, but the official one looks like a sticker sheet. Prima's looks identical to the box the game was sold in... which is about as uninspired as they come. Versus meanwhile has ELECTRICITY! Dozens of stock illo's of Pokemon below the hero, but layered such that they don't compete with it. 

{% include postimg.html imgsrc="posts/22-monsters/covers.png" full="true" caption="Versus invoking the rare wholly appropriate and *good* use of Comic Sans!" %}

A core part of the games is walking through tall grass to find pokemon. Which one shows up is randomized, with some monsters being rarer than others. Among the biggest things a player wants to know is what those rates are – "am I spending two hours walking in grass, or two hours?"

One of these guides gives you a shrug of "common", "rare", the other gives you hard numbers:

{% include postimg.html imgsrc="posts/22-monsters/viridian-forest.jpg" full="true" caption="Prima (left), Versus (right)" %}

The other core to these games is combat. In the Versus guide you get indicators of where enemy trainers are, and what their teams are. Prima leaves it to your imagination.

{% include postimg.html imgsrc="posts/22-monsters/dex.jpg" full="true" caption="Prima (left), Versus (right)"%}

Finally, each guide ends in an encyclopedia of Pokemon. Prima gives you a word document, Versus gives ya structure. Tastefully subtle bar chart in the stats!

I come not to bury Prima. With adult eyes, I all the more appreciate how much personality _all_ these guides have. The text blocks are full of opinions, quirks, and jokes. Versus ends with a few 'suggested teams', giving the reader a roster of Pokemon they could catch to beat the game. The last one, named Casey's Team, is a complete joke, full of the worst Pokemon you could battle with.

It wasn't until this project that I noticed Casey was actually the head designer and editor of the book. There's only three additional credits on the book's content, not counting Cover/Back cover designers. Prima also only credits about five people. The bylines on both books are _tight_.

Couldn't tell you how many hours I spent in the Versus guide book. The mixture of good data viz, good design principals, and practical info was intoxicating, even to a literal child.

{% include chapter.html num="3." title="Notebook Dreams" %}

{% include postimg.html imgsrc="posts/22-monsters/sketchbook.jpg" caption="Get Game Freak on the phone, this 8 year-old has ideas." %}

Strategy guides of video games also provide a blueprint to a kid with an imagination. Even without a game controller, any interaction, music, or story, once you've learned the physics of a platformer, you can look at a static map of Super Mario World level and imagine how it plays.

My first maps were 100% imitations of the worldly screenshots from game guides. Notebooks were filled with Pokemon and Warcraft II maps. No need for a magic spell to turn them into reality – I can play em' out in my head! And good lord, I did.

{% include chapter.html num="5." title="Imperfection" %}

{% include postimg.html imgsrc="posts/22-monsters/watercolor.png" caption='<a href="https://pokemondb.net/artwork/squirtle" target="_blank">Official art by Ken Sugimori</a> over the years. Earliest to most recent from top to bottom.' %}

Pokemon Red and Green debuted in 1996 with 151 monsters to catch and battle with. In the 30 years (eek!) since, they've added another 874. 

I'm aged out of the games at this point, but I find always find it fun to check out how the new class of critters are being designed. Some I dig, others I find weird. But overall it still bums me out they moved away from <a href="https://imgur.com/gallery/original-151-pok-mon-sugimori-style-7HThc/" target="_blank">Ken Sugimori's watercolor illustrations so quickly</a>.

Watercolor gives a beautiful built-in fluidity and texture. Of the three Squirtles shown here, two are watercolors by Ken, and the last one is the more modern digital drawing. You can tell they're going for the same kind of shading, but the digital one's missing the texture to it. Edges feel sharp, even when they're patted.

I suspect a major reason they moved away from watercolor, is how difficult it clearly was to capture accurately. Only three years ago, someone came across an <a href="https://kotaku.com/pokemon-ken-sugimori-original-art-red-blue-gold-silver-1850352781" target="_blank">archive of high quality scans that weren't _as_ blown out.

Watercolors are gentle, subtle, and get obliterated by the bright light of most scanners. I get the logic behind moving away, but the preference remains.

{% include chapter.html num="4." title="Hit Play" %}

All the way in 2025, I'm watching a pile of goofs drive a bus for a straight week for <a href="https://desertbus.org/2026/info/about" target="_blank">Desert Bus for Hope</a>. 

Desert Bus for Hope is one of the internet's oldest charity streams – going strong 20 years! They raise funds for <a href="https://childsplaycharity.org/" target="_blank">Child's Play</a>, an organization that provides therapeutic games and tech to sick kids.

It's hosted by Loading Ready Run, one of the internet's OG nerd comedy troupes. I've tuned in a bunch over it's 20-year run, but it took til last year for me to finally go "wait, I can actually contribute to this."

I've also been meaning to learn how to do large paintings for awhile. Work on a four foot canvas and you have more space for detail. The kinda work you can really stick your nose in. This seemed like a perfect excuse to figure it out!

{% include postimg.html imgsrc="posts/22-monsters/makingof0.jpg" full="true" caption="Pro tip: rulers at Home Depot cost a fraction of what art supply stores sell them for. And if you have curled paper, get out the cookbooks." %}

After years of yearning for the _big watercolor paper roll_, 44.5 inches x 10 yards of goodness, I finally own one. First challenge... how do you cut that? Bad solution: circular cutter, large cutting board, and a lot of paper weights. I at least had the foresight to give myself some margins to cut off later to make it actually the right size.

Paper cut, pencils ready, I drew up my sleeves and cracked open my trusty Versus guide book for reference. 151 critters later, we have a map.

{% include postimg.html imgsrc="posts/22-monsters/makingof1.jpg" full="true" caption="We begin with a digital rough. Lots of notes left to myself to make sure I had all 151 drawn, as well as spaced out ok." %}

{% include postimg.html imgsrc="posts/22-monsters/makingof2.jpg" full="true" caption="That then gets printed out and put on a light table where the pen ink goes down. Hard to tell from the final, but the first layer painted the regions by their cities. So Celadon green for Celadon, Saffron yellow for Saffron, etc. etc." %}

{% include postimg.html imgsrc="posts/22-monsters/makingof3.jpg" full="true" %}

{% include postimg.html imgsrc="posts/22-monsters/makingof4.jpg" full="true" %}

{% include postimg.html imgsrc="posts/22-monsters/makingof5.jpg" full="true" %}

{% include postimg.html imgsrc="posts/22-monsters/final.jpg" full="true" caption="Burger King pokeball for scale. Cut-out James not included, that was a wonderful thing my mom made for one of my early birthdays." %}


If you'd like to own it, there's one chance to! Desert Bus! Monday! Oct 26! Round noon. Good luck, trainer.

{% include chapter.html num="6." title="So, you won! Congratulations!" %}

...and that's a chunk of the LONG answer to how I got into cartography. Not the whole picture, but a few significant nudges.

I was tepid on Pokemon by '02, and mostly aged out by '06. I've played a few other entries, but the fix isn't the same. Yet, the franchise remains imprinted on me. Lodged squarely next to my mental multiplication tables is a grid of what Pokemon types are super effective against each other.

While part of me would have liked to keep the map, I'm just happy it exists.

A serious kudos to Ken Sugimori's work.

A salute to Casey and the small team that once made up Versus.

A little love letter to the notebook dreams, 

& a detail-rich treat that a kid, desperately positioning his gameboy against the setting sun to get the last few moments of gameplay in, would obsess over.

{% include article-break.html %}

{% include slides.html id="kanto-story" slides=page.scrolly_slides mode="dialog" %}

{% include article-resume.html %}

<i>-D.M., picked Squirtle every time<br>
<span class="post-date">October, 22nd 2026</span></i>

<br />
<br />
<br />

P.S. My biggest regret of the map was that I couldn't justify shoehorning "Casey's Team" anywhere into it. Here they are, in all their glory:

{% include postimg.html imgsrc="posts/22-monsters/caseys-team.jpg" class="inline-img" %}

