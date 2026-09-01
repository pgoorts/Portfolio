---
title: '3D with 2D images'
description: '3D with 2D images'
publishDate: 'Sept 1 2026'
isFeatured: true
seo:
  image:
    src: '../../../public/Projects/Lightfield/IMG_4485.jpg'
    alt: Project preview
---

![Project preview](../../../public/Projects/Lightfield/IMG_4485.jpg)

Creating a 3D effect can be done with 2D screens only (and a tracker). By following the head of the viewer and adapting the image based on the viewpoint, we create a "window" effect, where it seems the viewer is looking through the screen to a 3D scene. The adapted images are either rendered as a 3D model, or recreated real images using view interpolation.

# Setups

Virtual twin of a 3D scanned object in VR (no 3D model, we show the correct image per viewpoint)

(Video starts at the virtual twin, check out the rest before the video for the scanner)
<iframe width="560" height="315" src="https://www.youtube.com/embed/-USIgAw_oH8?si=xrwMoXuXQk8dKRmP&amp;start=88" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Single screen
<iframe width="560" height="315" src="https://www.youtube.com/embed/-GaVHwheuew?si=ccF0-AmQiweZWke3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

3 sides (2 walls and the floor)
![Example](../../../public/Projects/Lightfield/20161018_195036.jpg)

<iframe width="560" height="315" src="https://www.youtube.com/embed/QRZuBx4Q4c0?si=6zPxvi8L8fHcbBVG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

We also realized this in WebGL, for a realtime 3D rendering
![Example](../../../public/Projects/Lightfield/result1.jpg)
![Example](../../../public/Projects/Lightfield/result3.jpg)

