---
title: 'Other publications'
description: 'Overview of other publications, including smaller CUDA projects, stereo matching, and innovative UI design.'
publishDate: 'Aug 30 2013'
isFeatured: false
seo:
  image:
    src: '../../../public/banner.png'
    alt: Project preview
---

*2009-2019: Research at UHasselt*
![Project preview](../../../public/banner.png)

These are a few other publications done at UHasselt. 

## 2D Convolution using CUDA

[Paper here](https://github.com/pgoorts/Portfolio/raw/refs/heads/main/files/Publications/goorts2009optimal.pdf) and [here](https://github.com/pgoorts/Portfolio/raw/refs/heads/main/files/Publications/goorts2010practical.pdf)

Convolution (finite response filtering) on GPU is a non-trivial problem. We must think about thread and memory layout and access to optimally use the hardware. In this application, we study 3 methods to do filtering (direct, separating using SVD, and Fourier transform), and determine the best method per filter size.

This is applied in the realtime processing pipeline of the [view interpolation](../view-interpolation) for debayering the raw camera images. [Paper here](https://github.com/pgoorts/Portfolio/raw/refs/heads/main/files/Publications/goorts2012raw.pdf)

## Automatic removal of dynamic objects

[Paper here](https://github.com/pgoorts/Portfolio/raw/refs/heads/main/files/Publications/goorts2012ardo.pdf)

An automatic method to take a video and remove the dynamic objects from it. Take features to stabilize the video, filter the frames with a mean filter, and reapply the camera movement.

![Automatic removal of dynamic objects](https://github.com/pgoorts/Portfolio/raw/refs/heads/main/files/Publications/goorts2012ardo.png)

## Depth estimation for teleconferencing

*I was not the main contributor on this project. Some methods mentioned were developed together and applied to multiple projects, including [view interpolation for sport scenes](../view-interpolation).*

[Paper here,](https://github.com/pgoorts/Portfolio/raw/refs/heads/main/files/Publications/dumont2014realtime.pdf)
[and here,](https://github.com/pgoorts/Portfolio/raw/refs/heads/main/files/Publications/dumont2014plane.pdf)
[and here](https://github.com/pgoorts/Portfolio/raw/refs/heads/main/files/Publications/dumont2014iterative.pdf)

We used improved stereo reconstruction and depth-aware plane sweeping for a better depth estimation used in teleconferencing with eye gaze correction.

## Participation in the 3DUI contest

We participated in the 3DUI contest in 2011 and 2012, where we were challenged to create a UI for a specified application.

In 2011, we created a see-through AR setup to instruct players to solve a physical puzzle. This involved AR tracking and camera-projector alignment. [Paper here](https://github.com/pgoorts/Portfolio/raw/refs/heads/main/files/Publications/maesen2011look.pdf)

![Player playing the AR puzzle](https://github.com/pgoorts/Portfolio/raw/refs/heads/main/files/Publications/maesen2011look-1.jpg)
![See through of the AR puzzle](https://github.com/pgoorts/Portfolio/raw/refs/heads/main/files/Publications/maesen2011look-2.jpg)

In 2012, we created a navigation method for first responders, where speech was not allowed. For this, we used a touch screen and communication using the lights in the building for the commander. We simulated the environment of the first responder using heat lamps. [Paper here](https://github.com/pgoorts/Portfolio/raw/refs/heads/main/files/Publications/notelaers2012heat.pdf)

![Setup of heatmeup](https://github.com/pgoorts/Portfolio/raw/refs/heads/main/files/Publications/notelaers2012heat.jpg)

