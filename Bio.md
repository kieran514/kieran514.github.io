---
permalink: /Bio/
title: "About Me"
author_profile: true
redirect_from: 
  - /md/
  - /Bio.html
---

## Bio:

Kieran Saunders is a second-year PhD student at Aston University, currently focusing on his thesis titled "Self-supervised Monocular Depth Estimation." With a solid background in mathematics, obtained from his BSc in Mathematics at Aston University, he has been actively engaged in the field of computer vision for the past five years. Notably, he has already published three papers: one at ICARSC'23, another at ICCV'23, and one at BMVC'24. His primary interests revolve around depth estimation from a single camera and exploring the potential applications of this technology in various domains, including self-driving vehicles, virtual reality headsets, and underwater navigation.

## Abstract:

Depth estimation, a fundamental component of computer vision, finds broad applications in self-driving, virtual reality, robotics, and scene reconstruction. While traditional multiple view geometry principles are well-established, the advent of deep learning has facilitated single-view depth prediction. Employing self-supervised methods, which leverage photometric uniformity between reconstructed frames, we train these networks without relying on ground truth data.

However, current self-supervised depth estimation architectures often assume clear and sunny weather scenes for training deep neural networks, which proves problematic in regions with frequent adverse weather conditions. For instance, in the UK alone, a significant number of days consist of rain. To address this limitation, we proposed Robust-Depth, a cutting-edge method that utilizes augmentations to enhance robustness across various weather conditions, times of the day, and image qualities. By exploiting the correspondence between unaugmented and augmented data, we introduce a pseudo-supervised loss for both depth and pose estimation, surpassing the state-of-the-art on challenging datasets.

Furthermore, in the domain of multi-baseline stereo, we observe that increasing baseline separation substantially enhances depth estimation accuracy. Nevertheless, prevailing self-supervised depth estimation architectures often use minimal frame separation and a constrained stereo baseline, limiting their efficacy. To address this, we introduce BaseBoostDepth, integrating a curriculum learning-inspired warm-up and boosting optimization strategy to effectively utilize larger frame separations. Despite challenges such as pose estimation drift associated with larger baselines, we leverage this phenomenon to improve foreground detail in the depth network. Our proposed method significantly enhances accuracy metrics across diverse datasets, achieving state-of-the-art performance on both KITTI and SYNS-patches datasets using image-based, edge-based, and point cloud-based metrics.
