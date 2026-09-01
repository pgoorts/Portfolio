---
title: 'Tripplanner, a case study of (not) vibe-coding'
description: 'Tripplanner, a case study of (not) vibe-coding'
publishDate: 'Sept 1 2026'
isFeatured: true
seo:
  image:
    src: '../../../public/banner.png'
    alt: Project preview
---

![Project preview](../../../public/banner.png)
*2026*

With the introduction of LLMs and coding agents in our profession, it's no doubt that our way of working is changing. As a case study, I have a few projects which I never got to, but seem more feasible now. One of these is tripplanner, an Android app to organize and plan a trip (itinerary overview, document management, lists and reminders, etc).

These are my observations: 

* A single prompt to create an app, and then a conversation to fix bugs does not work well. It works better to divide the work in phases, where each phase is a finished app with defined features, where each bug is handled already. Defining a phase from a simple description is sufficient, but letting the agent work out a detailed description and an implementation plan before any coding removes a lot of ambiguity and significantly increases code quality. Reviewing these docs is also easier and faster than reviewing code, and it stays necessary.

* Separating in distinct phases also helps to focus on specific tasks, instead of merging them all together. It helps to have a phase for code review, security review, documenting, refactoring without feature changes, and so on. 

* Dividing implementation in separate blocks reduces required context. Each new block is a new context, with the design docs and the existing code as reference where needed. No need to add the context of unrelated features, this only costs tokens.

* Coding agents tend to go on wild goose chases. It's important to keep being familiar with the code to some extent, and interfere when things go sideways. I also let the agent stop after each feature, to do a quick manual check, and to commit the code to git.

* And certainly run everything in a docker container, so the amount of possible damage is limited and repaired easily when things go wrong. 

I do not believe that coding agents will replace software engineers any time soon, but I do believe the job changes, and we're better off by using them.

All the code is here: [https://github.com/pgoorts/tripplanner](https://github.com/pgoorts/tripplanner), and the instructions used [here](https://github.com/pgoorts/tripplanner/blob/main/instructions.txt).
