---
layout: post
title:  'faintest of the brightest: grb hunters'
date:   2023-07-01
description: a blog post detailing the grb hunters project - a project to detect gamma ray bursts in the data from the czti instrument onboard astrosat. <i>Krittika Summer Projects 2023</i>
tags: grb astronomy project
categories: 
---

[Gamma-Ray Bursts](https://imagine.gsfc.nasa.gov/science/objects/bursts1.html) (GRBs) are fascinating astronomical phenomena that have
captured the attention of scientists and researchers around the world. These
powerful bursts of gamma-ray radiation, lasting from a fraction of a second to a
few minutes, provide valuable insights into the universe’s workings.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/grbalgo.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    <p class="caption-text">The implemented algorithm</p>
</div>

The GRB Hunters project aims to create a method to detect grbs based on their signal-to-noise ratio 
in the data from the Cadmium Zinc Telluride Imager (CZTI) onboard ISRO's AstroSat. By statistically analysing the noise in the data, a quantitative measure of the signal-to-noise ratio was obtained. This was then used to distinguish particle/noise data from real sources of gamma rays.



<div class="row mt-3">
  <div class="repo p-2 text-center">
    <a href="https://github.com/ravioli1369/grbhunters">
      <img class="repo-img-light w-100" alt="ravioli1369/grbhunters" src="https://github-readme-stats.vercel.app/api/pin/?username=ravioli1369&repo=grbhunters&theme={{ site.repo_theme_light }}&show_owner=true">
      <img class="repo-img-dark w-100" alt="ravioli1369/grbhunters" src="https://github-readme-stats.vercel.app/api/pin/?username=ravioli1369&repo=grbhunters&theme={{ site.repo_theme_dark }}&show_owner=true">
    </a>
  </div>
  <div class="col-sm mt-3 mt-md-0">
        The logic was implemented in a python script that can be used to analyse the data from CZTI.
    </div>
</div><br>


