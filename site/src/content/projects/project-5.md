---
title: 'Tripplanner, a case study of (not) vibe-coding'
description: 'Tripplanner, a case study of (not) vibe-coding'
publishDate: 'Sept 1 2026'
isFeatured: true
seo:
  image:
    src: '../../../public/Projects/placeholder.jpeg'
    alt: Project preview
---

![Project preview](../../../public/Projects/placeholder.jpeg)

With the introduction of LLMs and coding agents in our profession, it's no doubt that our way of working is changing. As a case study, I have a few projects which I never got to, but seem more feasible now. One of these is tripplanner, an Android app to organize and plan a trip (itinerary overview, document management, lists and reminders, etc).

These are my observations: 

* A single prompt to create an app, and then a conversation to fix bugs does not work well. It works better to divide the work in phases, where each phase is a finished app with defined features, where each bug is handled already. Defining a phase from a simple description is sufficient, but letting the agent work out a detailed description and an implementation plan before any coding removes a lot of ambiguity and significantly increases code quality. Reviewing these docs is also easier and faster than reviewing code, and it stays necessary.

* Separating in distinct phases also helps to focus on specific tasks, instead of merging them all together. It helps to have a phase for code review, security review, documenting, refactoring without feature changes, and so on. 

* Dividing implementation in separate blocks reduces required context. Each new block is a new context, with the design docs and the existing code as reference where needed. No need to add the context of unrelated features, this only costs tokens.

* Coding agents tend to go on wild goose chases. It's important to keep being familiar with the code to some extent, and interfere when things go sideways. I also let the agent stop after each feature, to do a quick manual check, and to commit the code to git.

* And certainly run everything in a docker container, so the amount of possible damage is limited and repaired easily when things go wrong. 

I do not believe that coding agents will replace software engineers any time soon, but I do believe the job changes, and we're better off by using them.

These are the instructions I currently use

	We are going to build software. The execution will go in phases, where each phase is divided in steps. The user (me) will have to confirm each step before moving on. Each step (and phase) must document the result, because each step is executed by a different agent. There will be no LLM context shared, except this documentation and the code thus far. This are the steps per phase: 

	* Phase description review: Read the description of the phase, ask questions when things are unclear or ambiguous. Write a new document description_detail.txt where you will write a very detailed description of the phase, as you understand it. This includes the purpose, features, and so on. This does not include technological information (this will be done later). Wait for confirmation before moving on.
	* Technology stack proposals. Propose what libraries and services we will use. This includes services to gather data, and machine learning models to use. Document this in techstack.txt. Wait for confirmation before moving on.
	* Data structure design. Think about the database, what data goes where, and how the syncing will work. Document in datastructure.txt. Wait for confirmation before moving on.
	* Mockup images. Generate images of the app to show how it will look like (more or less, this doesn't need to be pixel perfect). This will help to design user flow and layout. Drop everything in the folder designmockups. Wait for confirmation before moving on
	* Generate an implementation plan, divided in blocks, and each block divided in items. Block 1 is always setting up and verifying the build environment. Each block must end with a verification step (possibly by me). Each step should be independent from others, and everything should be detailed enough such that the implementation can be interrupted after any block or item and continued later on with only the design documents and code as context. Wait for confirmation before moving on. 
	* Do the implementation based on the plan. Do block by block, and stop after each block.
	* Extensions: See extensions.txt and bugs.txt. If there are extensions (features that were not in the plan), implement them one by one. Stop after each extension. If there are bugs (unintended behaviour), implement them one by one. Stop after each bug. Mark finished bugs and extensions with [COMPLETED] in the list. Always check first extensions, then bugs. The list might change after you implemented something. 

	You will find, and will write, all design documents in the DesignDocs folder, which contains subfolders per phase. Write all your current design docs in the current phase folder. Other phases can be used as reference, but can not be written to. You can find the project description in description.txt

	In the file in root called progress.txt, you can find the current phase and step. It it's not there, we did nothing yet. Keep this file updated with what you did

	Building the app is with ./gradlew assembleDebug in the App directory

All the code is here: [https://github.com/pgoorts/tripplanner](https://github.com/pgoorts/tripplanner)
