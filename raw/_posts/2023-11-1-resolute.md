---
layout: post
title:  ’23.11 - Resolute in a Sea of Bread
date:   2023-11-1

type: art

twit-img: "https://moriartynaps.org/assets/graphics/posts/15-whirling/twit-card.jpg"

visible: true

soc-descrip: "A few ways to spend a January"
soc-url: "https://moriartynaps.org/whirling-in-rags/"
soc-type: "article"
soc-img: "https://moriartynaps.org/assets/graphics/posts/15-whirling/soc-card.jpg"


---

....


logs, shamelessly inspired by other bloggers.

{% include chapter.html num="1." title="Ventures" %}

...

{% include chapter.html num="2." title="Works" %}

Besides the steady stream of hurricane trackers published over autumn, did publish three fun pieces.

{% include post-hed.html hed="How Thanksgiving recipes have changed over time, according to ‘Joy of Cooking’" link="https://www.washingtonpost.com/food/2023/11/09/thanksgiving-recipes-joy-of-cooking/" %}
{% include postimg.html imgsrc="posts/16-resolute/joy.jpg" class="inline-img" %}


{% include post-hed.html hed="How high is the sky?" link="https://www.washingtonpost.com/climate-environment/interactive/2023/cloud-shapes-height-sky-climate/" %}

<div class="cloud-height-marquee">
  <img 
    src="{{site.baseurl}}/assets/graphics/posts/16-resolute/hsits-1.jpg"
    class="cloud-img cloud-img-1"
  />
  <div class="cloud-imgs">
		<img 
      src="{{site.baseurl}}/assets/graphics/posts/16-resolute/hsits-2.jpg"
      class="cloud-img cloud-img-2"
    />
		<img 
      src="{{site.baseurl}}/assets/graphics/posts/16-resolute/hsits-3.jpg"
      class="cloud-img cloud-img-3"
    />
		<img 
      src="{{site.baseurl}}/assets/graphics/posts/16-resolute/hsits-4.jpg"
      class="cloud-img cloud-img-4"
    />
  </div>
</div>

<style>
  .cloud-height-marquee {
    max-width: 100%;
    position: relative;
  }

  .cloud-img {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    max-width: 100%;
    max-height: 350px;
  }

  .cloud-img-2 { position: absolute; opacity: 0%; animation: cloud-shift-2 20s linear infinite; }
  .cloud-img-3 { position: absolute; opacity: 0%; animation: cloud-shift-3 20s linear infinite; }
  .cloud-img-4 { position: absolute; opacity: 0%; animation: cloud-shift-4 20s linear infinite; }

  @keyframes cloud-shift-2 {
    0% { opacity: 0%; }
    15% { opacity: 0%; }
    20% { opacity: 100%; }
    40% { opacity: 100%; }
    60% { opacity: 0%; }
    80% { opacity: 0%; }
    100% { opacity: 0%; }
  }
  @keyframes cloud-shift-3 {
    0% { opacity: 0%; }
    20% { opacity: 0%; }
    35% { opacity: 0%; }
    40% { opacity: 100%; }
    60% { opacity: 100%; }
    80% { opacity: 0%; }
    100% { opacity: 0%; }
  }
  @keyframes cloud-shift-4 {
    0% { opacity: 0%; }
    20% { opacity: 0%; }
    40% { opacity: 0%; }
    55% { opacity: 0%; }
    60% { opacity: 100%; }
    80% { opacity: 100%; }
    95% { opacity: 100%; }
    100% { opacity: 0%; }
  }
</style>



HOW HIGH IS THE SKY? has been kicking around in my head since forever. Stars aligned in both finding the data for this last year (thanks Maria & friends!) and an ally to write the words in Kasha Patel.

Also at long, long last finally got a co-byline with the unshakable Andrew Van Dam with some pizza maps. 



{% include chapter.html num="3." title="Cooking" %}

Into bread now.

{% include article-break.html %}

<div class="bread-marquee">
    <div class="bread-img"></div>
</div>

<style>
  .bread-marquee {
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    max-width: 100%;
    overflow: hidden;
    margin-top: -8rem;
    margin-bottom: 2rem;
  }

  .bread-img {
    height: 400px;
    overflow-x: hidden;

    background-image: url("http://127.0.0.1:4000/assets/graphics/posts/16-resolute/bread-marquee.jpg");
    background-size: cover;
    background-repeat: repeat-x;
    animation: marquee 30s linear infinite;   
  }

    @keyframes marquee {
        from { background-position: 2852px;}
        to { background-position-x: 0;}        
    }
</style>

{% include article-resume.html %}

After many false-starts, two jars of my mother's sourdough starter were successfully trucked across the country and I've been a bread machine ever since. Six loafs in, with two great ones and one bowling ball. Been alternating between [John Kanell's recipe for it that takes two days](https://preppykitchen.com/sourdough-bread/), and [Stuart Thompson's Bread Scheduler](https://www.breadscheduler.com/#/recipe/5e88fb59aa3c8d002393a16b) that takes way less time. 

After spending October largely traveling, there's nothing more cozy than being back in a kitchen of one's own device. Particularly pleased how well a cabinet I've previously used as a dresser and liquor cabinet has become the main pantry for everything. I've got standard apartment kitchen cabinatry I could use, but having everything visible (and accessible!) at all times has such a charm to it. 

[[ cabinet ]]

Likewise, instead of trying to fit pots and pans in said cupboards, it's been nice to return to kitchen island clusterfucks for those.

[[ pans ]]

Been a good month for good home cooked meals. Still loving this Cauliflower Salmon recipe from Carla Lalli Music's book, and also bone-in chicken thighs. Cheaper and a skin to crisp, hard to complain.

[[ fooood ]]

{% include chapter.html num="4." title="Listening" %}

Fantastic autumn for live big name concerts: saw The Music Tapes (Julian Koster), my namesake Bob Dylan, and college superstar Kesha.

<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/2RGvAQoi6q5OSZNBKJk1GO?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

{% include chapter.html num="5." title="Rewiring" %}

This was going to be a year in which I wrote an entry one a month. 

What actually happened was that the poor old, _old_ infastructure that compiles this site finally gave out. The codebase was solid, in 2015, but now trying to install older versions of Ruby, Python, and long abandoned node libraries to get it to work has been a nightmare to resolve.

_Luckily_, the code for the site itself has always been simple Jekyll markdown files. I resisted refactoring what builds the site for years, but it turns out the default Jekyll serve works well enough on it's own.

The post-pandemic web fatigue glazed over myself (& I get the impression others. You?) has been a drain on fixing tackling. What joy that can be found from friends and family posting their own joys is just so drowned in ads and marketing. And particularly _dumb_ ads and marketing, because that's what gets engagement.

...but that also led me to finally fix this thing. I don't want to cede to that despair when the tool still has such potential. And ultimately it's always been therapuetic to look back at the logs here. So we're back to monthly diddies. 

Maybe this time.

Til next month?
<i>– D<br>
<span class="post-date">Nov.15, 2023</span></i>
