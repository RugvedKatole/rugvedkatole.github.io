---
layout: page
title: Autonomous Overtaking
# description: # a project with a background image
img: assets/img/publication_preview/overtaking.png
importance: 1
category: work
---
The project is dedicated to formulating a sophisticated motion planner tailored for autonomous vehicles (AVs) navigating dynamic environments, encompassing dynamic obstacles and nuanced human behavior. A primary objective of this research is the development of safety-assuring planners, controllers, and monitors, crucial components in fortifying the decision-making processes of AVs amidst evolving scenarios.

Despite comprehensive studies on collision avoidance in both dynamic and static contexts, the persisting challenge pertains to effectively predicting uncertainties inherent in human-driven environments. The project, therefore, delves into diverse models, ranging from probabilistic and data-driven to game-theoretic approaches. Special attention is accorded to forward and backward reachability analyses, pivotal in enabling AVs to anticipate and plan paths efficiently.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/video/Overtaking.gif" title="Overtaking" width=1920 height=1080 class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Overtaking a lead vehicle using model predictive control
</div>

The overarching goal is the meticulous design of a motion planner engineered for overtaking lead vehicles, complemented by the integration of safety monitors. Diverse overtaking strategies, encompassing artificial potential fields, graph-based planners, optimal control, and Model Predictive Control (MPC), undergo meticulous consideration. Notably, the project discerns that while safety considerations are often incentivized, they are not consistently enforced, rendering MPC particularly appealing for its systematic handling of constraints.

A notable facet of innovation within the project lies in the strategic infusion of safety monitors into the MPC planner. This strategic integration aims to address abrupt alterations in the behavior of surrounding vehicles, consequently enhancing path optimization in intricate scenarios. The accompanying figure illustrates scenarios where the AV undertakes overtaking maneuvers, considering the potential behaviors of surrounding vehicles.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/video/Abort_Overtaking.gif" title="Overtaking" width=1920 height=1080 class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Aborting Overtaking maneuver on realising a potential danger(virtual as of now) and merging back into lane.
</div>

Within this project, specific overtaking and aborting scenarios are meticulously outlined. The utilization of backward reachability sets and the adaptation of general sum Stackelberg games for modeling interactions between vehicles are highlighted. Furthermore, an extension to encompass multiple scenarios generalization is proposed, catering to maneuvers involving multiple surrounding vehicles and acknowledging the inherent uncertainties linked to human drivers.

In essence, this project endeavors to make a substantial contribution to the refinement of AV decision-making within dynamic environments. The emphasis lies in the practical implementation of safety-infused motion planning strategies for overtaking scenarios, adapted to diverse and challenging driving situations.