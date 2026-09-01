---
title: 'Other publications'
description: 'Overview of other publications'
publishDate: 'Sept 1 2026'
isFeatured: false
seo:
  image:
    src: '../../../public/banner.png'
    alt: Project preview
---

![Project preview](../../../public/banner.png)
*2009-2019: Research at UHasselt*

These are a few other publications done at UHasselt. 

# 2D Convolution using CUDA

[Paper here](https://github.com/pgoorts/Portfolio/raw/refs/heads/main/files/Publications/goorts2009optimal.pdf) and [here](https://github.com/pgoorts/Portfolio/raw/refs/heads/main/files/Publications/goorts2010practical.pdf)

Convolution (finite response filtering) on GPU is a non-trivial problem. We must think about thread and memory layout and access to optimally use the hardware. In this application, we study 3 methods to do filtering (direct, separating using SVD, and Fourier transform), and determine the best method per filter size.

This is applied in the realtime processing pipeline of the [view interpolation](view-interpolation) for debayering the raw camera images. [Paper here](https://github.com/pgoorts/Portfolio/raw/refs/heads/main/files/Publications/goorts2012raw.pdf)

# Automatic removal of dynamic objects

[Paper here](https://github.com/pgoorts/Portfolio/raw/refs/heads/main/files/Publications/goorts2012ardo.pdf)

An automatic method to take a video and remove the dynamic objects from it. Take features to stabilize the video, filter the frames with a mean filter, and reapply the camera movement.

![Automatic removal of dynamic objects](https://github.com/pgoorts/Portfolio/raw/refs/heads/main/files/Publications/goorts2012ardo.png)