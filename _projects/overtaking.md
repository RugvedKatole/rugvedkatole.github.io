---
layout: page
title: Autonomous Overtaking
# description: # a project with a background image
img: assets/img/publication_preview/overtaking.png
importance: 1
category: work
---

Autonomous vehicles (AVs) operating in dynamic environments must accommodate dynamic obstacles and human behavior(pedestrians, human-driven vehicles, etc.) and constantly need to make decisions concerning safety. This motivates the research in safety assuring planners, controllers, and safety monitors. Dynamic and static collision avoidance is very well studied in the literature, but the effort to predict uncertainties in a human-driven environment continues. 

Predicting human behavior is a crucial step that allows AVs to plan more efficient and safe paths. Human behaviors can be estimated using probabilistic, data-driven, and game-theoretic models. A common approach is to use forward reachability analysis or backward reachability analysis. Forward reachability analysis computes a set of unsafe states over a time horizon, and the planner must avoid them. This indeed guarantees safety, but its over-conservative nature limits complex maneuvers such as lane changing, overtaking, and merging. In contrast, backward reachability analysis generates a set of states that lead to unsafe states. i.e., a set of states from which no controller can avoid getting into an unsafe set. Backward reachability is less conservative because it assumes closed-loop disturbances during computation, i.e., the robot can always react to a human. Recent works further reduce this conservatism by introducing confidence awareness. Conservatism increases as humans deviate from behavior estimated through the general sum interaction model these predictive models are usually used with switching control which drives the robot toward safety whenever it is near the safety violation boundary. A recent work infuses the safety monitor into a model predictive control (MPC) planner for lane change and merging.

**The aim** is to design a motion planner to overtake a lead vehicle by infusing safety monitors. Common overtaking approaches include artificial potential fields, graph-based planners, optimal control, and MPC. Safety is often incentivized through objective functions but not enforced as a hard constraint. MPC approaches are favored because of their ability to handle constraints systematically. Non-linear MPC can successfully overtake the lead vehicle and accommodate the constraints of the surrounding and oncoming vehicles given the leading or surrounding vehicle doesn't execute "extreme" maneuvers. In the event of sudden changes in the behavior of surrounding vehicles, MPC might not guarantee a safe path or could even fail to optimize as the optimization in MPC is very sensitive to initial conditions. But an MPC with a safety monitor infused might be able to tackle it.

<iframe width="720" height="480" src="https://www.youtube.com/embed/Z6wKYn-ia1k" title="Overtaking" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<div class="caption">
    Overtaking a lead vehicle using model predictive control
</div>

In case of an unsafe overtaking maneuver, the ego vehicle needs to decide to abort the maneuver and return to safety or continue. An overtaking maneuver can only be aborted once started, as the ego vehicle starts overtaking it acquires new information about incoming vehicles and lead vehicles. Based on the newly acquired information and the associated behavior (speeding up, slowing down) the ego vehicle can make more firm decisions. 

<iframe width="720" height="480" src="https://www.youtube.com/embed/ymxnOam2KLc" title="Abort Overtaking" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<div class="caption">
    Aborting Overtaking maneuver on realizing a potential danger(virtual as of now) and merging back into lane.
</div>

**Current Status**

We have completed the implementation of the Motion planning stack and MPC for planning. 
The future steps are as follows
- Real-time optimization of MPC
- Integration of safety monitor into MPC
- Assessing the risk with newly acquired information for aborting overtaking.
