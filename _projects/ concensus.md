---
layout: page
title: Distributed Consensus Control
description:
img: assets/video/Triangle_formation.gif
importance: 1
category: fun
---

This was a learning project I did when I started with robotics. I implemented multi-agent consensus for various robot dynamics and connectivity between them. 

The project take initial conditions like their locations through GUI in MATLAB.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/video/Triangle_formation.gif" title="Trianlge Formation" width=1920 height=1080 class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/video/Triangle_formation_bi.gif" title="Bipartite Triangle Formation" width=1920 height=1080 class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/video/containment.gif" title="Containment" width=1920 height=1080 class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Formation (Left) |  Formation on Bipartite Graph(Center) | Containment(Right).
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/video/mas.gif" title="First order intergrator Dynamics with positional consensus" width=1920 height=1080 class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/video/mas_second_order.gif" title="Second order intergrator Dynamics with positional consensus" width=1920 height=1080 class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/video/mas_2order_velocity.gif" title="Second order intergrator Dynamics position and velocity consensus" width=1920 height=1080 class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="caption">
    First order intergrator Dynamics with positional consensus (Left) |  Second order intergrator Dynamics with positional consensus (Center) | Second order intergrator Dynamics position and velocity consensus (Right).
</div>