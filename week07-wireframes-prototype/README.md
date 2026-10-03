# Week 7 — Wireframes & Prototype Handoff

## Hill Country Trail Guide

**Primary User:** Maya Torres  
**Primary Task:** Choose a beginner-appropriate Saturday hike that can be completed in about three hours or less.

---

## 1. Project Overview

Briefly summarize the Week 6 problem you are carrying forward.

The website has missing or inexact information in multiple areas that may negatively impact the user's ability to carry out the primary task. Parts of the website also do not work as expected, primarily the navbar and the ability to pick categories.

---

## 2. Three Design Requirements

Translate your **top three Week 6 priorities** into exactly three interface requirements.

### Requirement 1

**Week 6 problem:** Lack of instruction or action in the hero section.
**Design requirement:** A clear next step must be specified in the hero section.
**How this helps Maya:** It informs her on how to continue with the primary task.

### Requirement 2

**Week 6 problem:** Missing information on trail cards.
**Design requirement:** Add important details, such as estimated completion time.
**How this helps Maya:** It gives her the information she needs to choose an appropriate trail.

### Requirement 3

**Week 6 problem:** Lack of information about the park.
**Design requirement:** Add necessary park information such as rules, fees, and parking.
**How this helps Maya:** This will allow Maya to know important details about visiting the park before she goes to it.

---

## 3. Figma Prototype Link

[Viewable prototype link](https://www.figma.com/proto/WDLBUp3fQYoDrHewHcDFUB/Week-7-Wireframe?node-id=5-354&p=f&viewport=-794%2C94%2C0.29&t=ALOqxomO4xHLmiV3-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=5%3A354&page-id=0%3A1)

---

## 4. Required Wireframe Exports

1. `wireframes/desktop-primary.png`
2. `wireframes/mobile-primary.png`
3. `wireframes/task-state-01.png`
4. `wireframes/task-state-02.png`

---

## 5. Prototype Flow

Describe the user task your prototype demonstrates.

**Starting point:** Focusing/hovering on beginner friendly category, indicated as selectable by the change in appearance
**User action:** Selecting beginner friendly category
**System/interface response:** Reordering category buttons to indicate which one is being used, and hiding trail cards that are not labeled with the chosen category
**End state:** Showing only the trail card that is labeled as beginner friendly

---

## 6. Design Rationale

Document approximately three important decisions.

### Decision 1

**Problem:** Lack of instruction in hero section
**Design response:** Added a "Browse Trails" button
**Why:** This lets the user know that their next expected step is browsing the trails, and when coded this button would bring the user to the appropriate part of the page

### Decision 2

**Problem:** Insufficient information on trail cards
**Design response:** Added estimated completion time, clarified distance and elevation numbers, and added a section for what supplies to bring
**Why:** This information is the most important to a user when it comes to choosing a trail, so having it easily accessible is necessary to prevent user error

### Decision 3

**Problem:** Lack of important park information
**Design response:** Added a section for park information, including general information, policies, fees, and parking
**Why:** This informs the user ahead of time of any significant park rules or circumstances

---

## 7. Accessibility Notes

Document at least two accessibility decisions you planned before development.

### Accessibility Decision 1

Changing category labels to clearer language, such as changing easy to beginner friendly

### Accessibility Decision 2

Increase the size of buttons on the mobile layout so that people on phones do not struggle to click on items

---

## Week 8 Handoff

In Week 8, the client moves into a common production starter. You will implement two JavaScript behaviors connected to Maya's needs:

1. an accessible explanation/disclosure for trail difficulty; and
2. form validation and user feedback for a hike-planning form.

Your Week 7 prototype may explore these or another related solution. The important continuity is the user need and interaction reasoning.
