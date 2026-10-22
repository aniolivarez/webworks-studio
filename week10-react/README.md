# Week 10: Meet React — Component-Based Web Development

## Project Overview

**Role:** Junior Front-End Developer  
**Project:** Community Connect React Service Directory

Briefly describe what you refactored and added.

Services cards were remade with a React component that pulls information from the services array instead of being hardcoded elements. Buttons were given onClick events for category filtering and aria-pressed for accessibility. Added selectedCategory and filteredServices variables with functions for filtering cards based on category.

---

# React Decisions

Document approximately three meaningful React decisions.

## Decision 1

**React Concept:**  
Component

**Used For:**  
Creating reusable elements

**Why It Helps:**  
It allows repeated elements to be made into a single reusable bit of code rather than being hardcoded into the document multiple times, along with having functionality with props that can affect the rendering of componenets where needed

## Decision 2

**React Concept:**  
List rendering

**Used For:**  
Displaying multiple UI elements from an array of objects

**Why It Helps:**  
Allows an array of data to be displayed on an array of components automatically with map()

## Decision 3

**React Concept:**  
State

**Used For:**  
Rendering components with specific information

**Why It Helps:**  
Allows content to be rendered differently when useState changes the state

---

# React Reflection

Write approximately **75–100 words** responding to:

> How is working with React components different from manipulating the DOM directly as you did in Week 8? What seems easier, and what seems more complex?

Direct DOM manipulation involves a lot of code targeting specific elements manually, while React allows for simpler manipulation of elements using things like state to change how the UI is rendered and what attributes get changed. I personally found vanilla javascript easier to understand than React, however the reusability of React components is a lot easier to work with and led to less problems with debugging. Not having to manually target every element I wanted to change also made things easier.

---

# Testing Notes

- [x] `npm install` completed successfully
- [x] `npm run dev` runs the project
- [x] ServiceCard is reusable
- [x] Services render from the supplied array
- [x] Every rendered service uses a stable key
- [x] All filter works
- [x] Health filter works
- [x] Housing filter works
- [x] Community filter works
- [x] Active filter is visually clear
- [x] Active filter uses an accessible programmatic state
- [x] Keyboard interaction works
- [x] Browser console has no unresolved warnings/errors
- [x] `npm run build` completes successfully

---

# Final Handoff Check

- [x] My project folder is named `week10-react`
- [x] I used the supplied React/Vite project
- [x] `ServiceCard.jsx` exists
- [x] I used props
- [x] I used `map()`
- [x] I used stable keys
- [x] I used `useState()`
- [x] I used React event handling
- [x] I used native buttons for filters
- [x] `node_modules` is not committed
- [x] My README is complete
- [x] I committed and pushed the completed project
