---
title: About
seo:
  title: About Me
  description: Learn more about the person behind the website.
  image:
    src: '../../assets/images/about.png'
    alt: About
---

![Alt text for image](../../assets/images/about.png)

I'm Patrik Goorts, a computer vision engineer based in Belgium. Give me a problem and I'll figure out how to solve it, solve it, and deploy it. I work independently and take a problem from definition through to deployment.

# Skills and Expertise

* **Classical computer vision:** I understand and use computer vision algorithms, going from preprocessing, over filtering, to the more complex methods such as view interpolation or mesh reconstruction.
* **Camera calibration:** Many of my projects used multiple cameras, and we need to know where the cameras are. I mainly used feature detection, bundle adjustment, and sensor fusion for the extrinsic calibration, and the checkerboard method of Zhang. Either in OpenCV or Colmap. For the realtime calibration for volumetric person reconstruction, I used feature detection with point cloud matching.
* **Make it fast:** I use CUDA and shaders to make the algorithms fast and where possible realtime. Squeezing the last 10% out of performance is nontrivial, and touches calculation, memory access and algorithm choices.
* **Move it around:** For fast processing and direct control, I typically use encoder and decoders directly, instead of relying on GStreamer or ffmpeg. This also helped me understand the specifics of video encoding and decoding.
* **Machine learning in vision:** For the more complex tasks, such as segmentation or image cleanup, I use machine learning networks.
* **Deployment of ML networks:** For machine learning, deployment is non-trivial. I have experience with onnxruntime on PC (C++), Unity Sentis on mobile platforms (C#), and Google Colab for prototypes and experiments (Python). 
* **Training of ML networks:** Some tasks require specific networks and require training. I have experience with training convolutional networks for depth map cleanup, among others. I tend to avoid manual data labeling and seek out ways for automatic training data generation.
* **Field work:** Previous works required data to be captured, or a system to be running, at diverse locations. I have experience in organizing, preparing, planning, setting up, and executing data captures on location. Notable examples are 16 cameras in a soccer stadium in Barcelona, a lightfield recording of a machine in a factory, or a spectator camera setup at a fair.
* **Unity integration:** A few projects I worked on are realized in Unity. I have some experience here in moving images around, writing and connecting C++ and native Android plugins, building 2D interfaces, and applying CV and ML techniques, in real time.
* **Technical writing:** Many of my projects have been reported and documented in conference papers, journal articles, deliverable reports, pull requests, bug reports, and so on. Especially with innovative technologies, clear and useful reporting is as important as deployment to users.
* **Whatever else the project needs:** Projects rarely stay inside one discipline. I've built Bluetooth LE and WiFi direct channels between Android and Unity, and fortified a Linux box against tampering. I hadn't touched any of it before the project that required it. Picking up an unfamiliar technology and getting it working is something I feel comfortable with.

# Techstack

* **Languages:** C++, CUDA, C#, Kotlin, Python
* **Libraries and frameworks:** OpenCV, PyTorch with matplotlib, Unity 3D, ComfyUI
* **Camera hardware:** RealSense and Kinect depth cameras, PTZ over HD-SDI, raw control of mobile cameras, Point Grey cameras
* **Environment:** Terminal with git, CMake and any IDE available, Colab, terminal with python (often in a Docker container)

# Where I've been

* **2019 - present:** Magic Leap, staff software engineer in computer vision
* **2009-2019:** Researcher at Hasselt University
* **2004-2009:** Bachelor and Master in computer science at Hasselt University