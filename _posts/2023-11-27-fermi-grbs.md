---
layout: post
title:  'fermi gamma ray bursts: statistical analysis and coverage estimation with GIT'
date:   2023-11-27
description: 'PH303: supervised learning project, under Prof. Varun Bhalerao, IIT Bombay'
tags: grb astronomy project
categories: 
giscus_comments: true
---

Gamma-Ray Bursts are fast decaying transients that are fairly difficult to localize. SWIFT Observatory is one of the few telescopes that provide arcminute and sub-arcminute localizations, making follow-ups much easier. 

The Fermi Gamma-Ray space telescope provides localizations of the typical order of hundreds of square degrees. These large localizations make the follow-up of an optical afterglow difficult, requiring large field-of-view telescopes. 

A typical meter class telescope has a field of view of the order of 1 square degrees. GROWTH-India Telescope (GIT), is a 0.7m telescope with a field of view of 0.7 square degrees, situated at the Indian Astronomical Observatory, Hanle, and will be used for the proposed follow-up observations.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/git_tile_size_comparision.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    <p class="caption-text">Field of view of GIT compared to a typical Fermi GRB localisation</p>
</div>

This causes the majority of afterglows to go undetected, limiting our understanding of some of the brightest explosions in the universe. 

> To what degree can a meter-class telescope, like GIT, be used to follow up Fermi GRB localizations?

This is the question we aim to answer in this project. We'll look at the statistical analysis of Fermi GRB localizations and estimate the coverage capabilities of GIT; based on which we'll propose a strategy for follow-up observations.

The tiling was done for Fermi GRB triggers from the past 6 or so years, by spending various amount of time on each trigger (to see how much time per trigger is required to cover a certain percentage of the probability of each trigger).

The results, for long and short GRBs, are shown below. Typically short GRBs are more difficult to localize due to the lower number of photons detected, and hence have a larger localization area, however they are more interesting to study due to their association with neutron star mergers.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/long_grb_tiling.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    <p class="caption-text">Coverage of Long GRBs (Brackets represent per year values)</p>
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/short_grb_tiling.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    <p class="caption-text">Coverage of Short GRBs (Brackets represent per year values)</p>
</div>

A suitable follow-up strategy was proposed based on the results of the tiling:

* For long GRBs, the trigger will be followed up if the predicted probability coverage within 2 hours of observation is greater than 20%
* For short GRBs, the trigger will be followed up if the predicted probability coverage is greater than 20% if we spend the entire night observing the trigger.


We'll also look at the follow-up results of some actual Fermi gamma-ray burst - GRB 231018A and GRB 231122A. 

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/grb231018a_coverage.jpeg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    <p class="caption-text">GRB 231018A</p>
</div>

Detailed observations and analsyis of the coverage was posted on NASA's Gamma-ray Coordinates Network (GCN) Circulars:

* [GCN Circular 34839](https://gcn.nasa.gov/circulars/34839)


<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/grb231122a_coverage.jpeg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    <p class="caption-text">GRB 231122A</p>
</div>


<div class="row mt-3">
  <div class="repo p-2 text-center">
    <a href="https://github.com/ravioli1369/fermi_grbs">
      <img class="repo-img-light w-100" alt="ravioli1369/fermi_grbs" src="https://github-readme-stats.vercel.app/api/pin/?username=ravioli1369&repo=fermi_grbs&theme={{ site.repo_theme_light }}">
      <img class="repo-img-dark w-100" alt="ravioli1369/fermi_grbs" src="https://github-readme-stats.vercel.app/api/pin/?username=ravioli1369&repo=fermi_grbs&theme={{ site.repo_theme_dark }}">
    </a>
  </div>
  <div class="col-sm mt-3 mt-md-0">
        The code used for analysis can be found in the repository on the left.
    </div>
</div><br>

<div class="post">

  <header class="post-header">
    Here is the report documenting complete results of the project:
 <a href="{{'assets/pdf/grbhunters.pdf' | relative_url}}" target="_blank" rel="noopener noreferrer" class="float-right"><i class="fas fa-file-pdf"></i></a>
  </header><br>
  <embed src="{{'assets/pdf/fermi_grbs.pdf' | relative_url}}" width="100%" height="1000px" type="application/pdf">

</div>