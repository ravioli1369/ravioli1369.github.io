---
layout: post
title: "drawing with fourier transforms"
date: 2023-12-15
description: "visualising the fourier transform by deconstructing and reconstructing an input signal using epicycles."
tags: project
categories:
giscus_comments: true
---

## The Fourier Transform

The Fourier Transform is a mathematical tool that allows us to deconstruct a signal into its constituent frequencies. It is used in a wide range of applications, from signal processing to image compression. In this post, we will use the Fourier Transform to deconstruct a signal into its constituent frequencies, and then reconstruct the signal using epicycles.

$$ F(\omega) = \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt $$

## The Discrete Fourier Transform

The Discrete Fourier Transform (DFT) is a discrete version of the Fourier Transform. It is used to transform a finite sequence of samples of a function into a same-length sequence of samples of the discrete-time Fourier transform (DTFT), which is a complex-valued function of frequency.

$$ X_k = \sum_{n=0}^{N-1} x_n e^{-i2\pi kn/N} $$

<br>
or
<br>

$$ X_k = \sum_{n=0}^{N-1} x_n \left[ \cos \left( \frac{2\pi kn}{N} \right) - i \sin \left( \frac{2\pi kn}{N} \right) \right] $$

<br>

Where $$x_n$$ is the input signal (can be real or imaginary), $$X_k$$ is the output signal, and $$N$$ is the number of samples in the input signal.

## Epicycles

An epicycle is a circle whose centre moves along the circumference of another circle. 

Epicycles can be used to represent the Fourier Transform. The radius of each epicycle is the amplitude $$\left(\vert x_ne^{i2\pi kn/N}\vert\right)$$ of the corresponding frequency, the angular velocity of each epicycle is the frequency $$\left(\dfrac{2\pi kn}{N}\right)$$ of the corresponding frequency, and the phase of each epicycle is the phase (arg$$\left[x_ne^{i2\pi kn/N}\right]$$) of the corresponding frequency.

## Drawing with Epicycles

We can use epicycles to draw a shape. The shape is represented as a series of points, and the points are used to generate the input signal. The input signal is then used to generate the epicycles, and the epicycles are used to draw the shape.

To start off we will generate a sawtooth wave by summing up scaled sine waves as follows:

$$ f(t) = \sum_{n=1}^{N} \frac{1}{n} \sin \left( \frac{2\pi nt}{T} \right) $$

Where $$N$$ is the number of sine waves, $$T$$ is the period of the sawtooth wave, and $$t$$ is the time.

For simplicity, I have taken $$T=2\pi$$. The slider below can be used to change the number of sine waves used.


<div class="col-sm-3" id="sawtooth" style="position: relative; left: -2vw;">
    <p id="slider-value" style="display: inline-block;"></p>
    <p id="slider" style="display: inline-block;"></p>
    <script src="{{ '/assets/js/fourier-transform/p5.js' | relative_url }}"></script>
    <script src="{{ '/assets/js/fourier-transform/discrete-fourier-transform.js' | relative_url }}"></script>
    <script src="{{ '/assets/js/fourier-transform/complex-number.js' | relative_url }}"></script>
    <script src="{{ '/assets/js/fourier-transform/functions.js' | relative_url }}"></script>
    <script src="{{ '/assets/js/fourier-transform/batman.js' | relative_url }}"></script>
    <script src="{{ '/assets/js/fourier-transform/fourier-transform-drawing.js' | relative_url }}"></script>
</div>

<br>

Now that we can see how epicycles and the discrete Fourier transform work, we can use them to draw a shape. The shape is represented as a series of ($$x$$, $$y$$) points. The points are then fed into the discrete Fourier transform, and we get two transforms as output, one for the $$x$$ values and one for the $$y$$ values. We can then use the transforms to generate two sets of epicycles.

<div class="col-sm-3" id="batman" style="position: relative; left: -2vw;"></div>

<br>

We've seen how individual fourier tranforms of $$x$$ and $$y$$ can be used to draw shapes, but since the fourier transform represents a complex number, it is possible to use only one epicycle to draw a shape. The fourier transform of $$x$$ and $$y$$ can be combined into a single fourier transform containing the ($$x$$, $$y$$) information in the real and imaginary parts respectively. This fourier transform can then be used to generate a single set of epicycles.

Here you can give it a try yourself. Draw a shape by clicking on the canvas, and watch the epicycle draw it. Do keep in mind that the shape should be closed, to avoid any discontinuities in the output drawing.

<div class="col-sm-3" id="user" style="position: relative; left: -2vw;"></div>

<br>

## References

* [3Blue1Brown](https://www.youtube.com/watch?v=r6sGWTCMz2k)
* [The Coding Train](https://www.youtube.com/watch?v=Mm2eYfj0SgA)
* [Wikipedia](https://en.wikipedia.org/wiki/Fourier_transform)