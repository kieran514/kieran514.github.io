---
permalink: /
title: "About Me"
author_profile: true
---

## My Journey in Vision

I'm Kieran Saunders, a second-year PhD candidate at <span class="blue">Aston University</span>, fueled by a fascination for how we can infer the 3D structure of our world from images. My academic path began with a BSc in Mathematics, also from Aston, which provided the analytical toolkit I now apply to the dynamic field of computer vision. For the past five years, I've been immersed in this area, specifically focusing on the challenge of estimating depth using only a single camera (monocular depth estimation).

My research delves into **self-supervised learning** – a powerful paradigm that allows neural networks to learn about depth without needing explicit ground truth depth data, cleverly using the geometry and appearance consistency between video frames. This approach unlocks scalability and adaptability, crucial for real-world deployment.

My primary research goal is to develop depth estimation systems that are not only accurate but also **robust** and **reliable** across diverse and challenging conditions. This includes tackling adverse weather, varying times of day, and exploiting geometric cues more effectively. The potential impact spans autonomous navigation (cars, drones, underwater vehicles), realistic virtual and augmented reality experiences, and advanced robotic perception.

<!-- *(Personal Note: Beyond the algorithms, I have a keen interest in Japanese culture and aesthetics, which often inspires a drive for elegance and efficiency in design, even in code!)* -->

---

## Research Focus: Pushing Depth Estimation Frontiers

Depth estimation is fundamental to machine perception. While traditional multi-view stereo techniques are well-understood, deep learning has revolutionized **single-view depth prediction**. My work explores self-supervised methods, training networks by enforcing photometric consistency between synthesized views, eliminating the need for expensive ground truth data.

However, many existing methods falter outside of idealized conditions. My research tackles two key limitations:

1.  **Weather and Lighting Robustness:** Standard models trained on clear-day datasets struggle in rain, fog, or low light – common scenarios, especially in places like the UK! To address this, I developed **Robust-Depth**. This method uses data augmentation strategically, creating a pseudo-supervised signal between augmented and unaugmented views. This forces the network to learn consistent depth and camera pose estimates regardless of visual perturbations, significantly improving performance on weather-degraded and challenging datasets.

2.  **Leveraging Larger Baselines:** Increasing the separation (baseline) between camera views in stereo or video sequences inherently provides stronger geometric cues for depth. Yet, most self-supervised methods use small baselines due to challenges like pose drift and visual dissimilarity. I introduced **BaseBoostDepth**, which employs a curriculum learning-inspired warm-up and boosting strategy. This allows the network to effectively learn from larger frame separations, harnessing the stronger geometric signal while mitigating associated pose estimation issues. This approach has achieved state-of-the-art results on benchmarks like KITTI and SYNS-patches, validated across multiple metrics.
