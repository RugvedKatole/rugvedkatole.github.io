---
layout: page
title: Multi-agent Reinforcement Learning
# description: 
img: assets/img/publication_preview/MARL_swarm.png
importance: 2
category: work
related_publications: Katole2023
---

The escalating global population and the surging demand for food necessitate a significant 70% increase in agricultural yields by 2050. This challenge is compounded by climate change-induced stressors on crop health, projecting an 11% reduction in yields by 2050. Precision agriculture, leveraging technology for optimized resource utilization, emerges as a crucial solution. Digital agriculture, employing remote and in-field sensors along with data processing techniques like machine learning, is at the forefront of this transformation.

Digital agriculture aims to provide geospatial insights into crop health through frequent sensing, aiding in the identification of stress factors, diseases, pests, and guiding effective crop treatment strategies. However, traditional methods of data acquisition, either through human-piloted UAVs or autonomously scouting UAVs, pose challenges such as high operating costs, redundant data, and limited flight times. This work proposes a novel approach using a swarm of heterogeneous UAVs with distinct imaging sensors, guided by multi-agent reinforcement learning, to efficiently analyze entire fields.

Our method employs multi-agent reinforcement learning to strategically scout crucial areas and predict the health of remaning areas through convolution neural networks. This approach minimizes battery replacements and optimizes flight trajectory, addressing limitations associated with traditional scouting methods. The collected data, encompassing RGB, multi-spectral, hyper-spectral, and thermal imaging, is then combined and extrapolated to provide in-depth insights into crop health. This eliminates the need for exhaustive scouting of the entire field, offering a more cost-effective and efficient solution for precision agriculture.

The utilization of various imaging sensors, each excelling in specific tasks, enhances the comprehensiveness of the analysis. RGB cameras are suitable for growth prediction and biomass estimation, while multi-spectral cameras excel in early detection of stress and pest identification. Hyper-spectral sensors prove effective in early disease detection, and thermal cameras aid in identifying drought stress. Despite the constraints of limited payload capacity, our method leverages the strengths of each sensor type, ensuring a comprehensive analysis without the need for multiple drones.

<div class="row">
    <div class="col-sm mt-3 mt-md-3 mx-auto" >
        <center>
        {% include figure.html width=360 height=240 path="assets/img/publication_preview/MARL_swarm.png" title="MARL" class="img-fluid rounded z-depth-1" %}
        </center>
    </div>
</div>

By harnessing the power of a swarm of heterogeneous UAVs guided by multi-agent reinforcement learning, we address the challenges associated with traditional scouting methods. This approach not only optimizes resource utilization but also provides a cost-effective and efficient solution to meet the increasing demands of global food production. The integration of diverse imaging sensors ensures a thorough analysis of crop health, paving the way for sustainable and informed agricultural practices in the face of a growing population and the challenges posed by climate change.

Check out our [poster](../../assets/pdf/poster.pdf) presented at IROS workshop on [Agricultural Robotics for a Sustainable Future](https://sites.google.com/illinois.edu/iros2023-agrobotics)