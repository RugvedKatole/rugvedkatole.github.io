---
layout: page
title: Autonomous Intersection Management
description: # Autonomous intersection management for non-communicative autonomous vehicles at low traffic junctions
img: assets/img/publication_preview/cross_roads.png
importance: 3
category: work
related_publications: AIM2023
---
According to the Ministry of Road Transport and Highways (MORTH) in India, there were 150,785 road traffic fatalities in 2019, with an average of 413 deaths per day. Autonomous Intersection Management (AIM) is an innovative concept in transportation engineering that aims to improve traffic flow and safety at intersections by using connected autonomous vehicles and communication technologies.

In many towns and cities, uncontrolled intersections lacking proper infrastructure are common, particularly in areas with low traffic density. The absence of infrastructure can cause traffic flow disruptions, leading to safety issues. To mitigate these problems, the installation of the required infrastructure is imperative. As autonomous vehicles become more accessible, it is possible that intersections will be managed autonomously through a command center in the near future. Nevertheless, even with technological advancements, some infrastructure, such as a traditional traffic signal or a command center, will still be necessary for uncontrolled intersections. However, from an economic standpoint, building such infrastructure may come with exorbitant costs that may not justify its utility.  

In this project, we work on frameworks and algorithms specifically tailored for intersections where installing traffic signals or any other infrastructure is redundant due to low traffic density ($$\leq$$ 500 PCUs/hr/lane). The idea is to enable fully autonomous vehicles to navigate through intersections without relying on any infrastructure or communication protocols.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/video/three_way_AIM.gif" title="Three Way Junction" width=1920 height=1080 class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/video/four_way_AIM.gif" title="Four Way Junction" width=1920 height=1080 class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/video/five_way_AIM.gif" title="Five Way Junction" width=1920 height=1080 class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A demonstration of autonomous intersection management algorithm for low density traffic junction. The algorithm is scalable to intersection with n-incoming roads.
</div>

Currently, this is achieved by building a graph using a harmony matrix (a matrix of non-conflicting maneuvers), and the maximal clique of the graph provides the best combination of vehicles to enter the intersection. We have proposed a framework to aid the unanimous decision making for vehicles at intersection.

<div class="row">
    <div class="col-sm mt-3 mt-md-0 mx-auto" style="text-align:center">
        {% include figure.html width=360 height=240 path="assets/img/publication_preview/cross_roads.png" title="Four junction Framework" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A low cost framework for unanimous decision making on unsignalized intersection.
</div>

The current work supports fully autonomous environments. We are exploring future directions to include the human driven vehicles as well as pedestrians. One way to approach this is through [topological braids](https://arxiv.org/abs/2004.05205) another one is through non-cooperative game theory. The core idea is to interpret the vehicle or driver intention through direction indicators or vehicle trajectory. This inference from sensors aids in decision making for safely navigating the intersection.  

Check out our paper on [Arxiv](https://arxiv.org/abs/2311.17681)