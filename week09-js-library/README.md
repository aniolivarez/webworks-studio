# WebWorks Studio — Module 9 Student Starter

## Mission City Makers Market

You are the **Junior Front-End Developer** assigned to improve a fictional client page using two different professional tools:

1. **Alpine.js** — create one lightweight custom interaction.
2. **Preline UI** — choose and adapt one reusable component.

The goal is not to add as many effects as possible. The goal is to choose the right tool for the right job.

# Required README Documentation

Replace each TODO before submitting.

## Project Summary

In this project I added filtering functionality to the makers cards using Alpine.js, and changed the visitor questions cards to a simple accordion using Preline UI.

## Alpine Decision

**User/client need:**  
The user needs the ability to easily search for cards containing information they are looking for

**Alpine directives used:**  
x-data, x-on (@click), x-bind (:class), x-show

**Why Alpine was appropriate:**  
Alpine.js was appropriate as the solution used requires simple state based behavior, which can be easily implemented with a lightweight library such as Alpine

## Preline Decision

**Preline component selected:**  
The chosen Preline UI is an accordion.

**Problem it solves:**  
It allows the user to easily find the answer to a question they are looking for without being distracted by unrelated information.

**How you adapted it:**  
I added Tailwind classes to the elements to keep the appearance similar to the original question and answer cards, such as having the same background and borders as before.

## Accessibility Notes

1. Category filters can be tabbed through and selected with keyboard controls, and styling clearly shows which elements are being focused on.
2. Cards are correctly given the display:none property when they are not visible on the page.
3. Accordion items can be focused on with keyboard controls, and opened and closed with keyboard.
4. Aria-expanded attribute correctly changes to true or false based on the expanded or collapsed state of the accordion item.

## Testing Notes

**Narrow viewport:** Category filters wrap to the next line when the viewport is narrowed, accordion shrinks in size and text wraps as viewport narrows
**Medium viewport:** Filters and accordion work as expected with no visual layout problems
**Wide viewport:** Filters and accordion work as expected with no visual layout problems
**Keyboard testing:** Filters and accordion can be focused on and interacted with completely with keyboard
**Browser console:** No console errors appear

## Dependencies

**Alpine.js — how used:** Alpine.js is used to create category filters for cards, aiding users searching for specific cards. X-data sets the default filter value to all, @click changes the filter to the chosen category value when the corresponding button is clicked, :class changes the button styling if the equality operator is true or false, and x-show displays the cards only if the filter has certain values.
**Preline UI — how used:** Preline UI is used to turn the questions and answers cards into a single accordion that lets the user select which answers they want to see. This is done using the classes from Preline's bordered accordion component, such as hs-accordion-group, hs-accordion, hs-accordion-toggle, hs-accordion-content, hs-accordion-active, hs-bordered-heading-[number], and hs-basic-bordered-collapse-[number]
**Tailwind CSS — how used:** Besides the default Tailwind in this project, I used similar classes to existing elements to make my additions fit in with the page. Selected filter buttons use the same yellow bg as one of the header buttons, and I also added classes for styling unselected buttons and button appearance on focus and hover. The accordion uses the same Tailwind styling as the previous questions and answers cards.

## Official Documentation Used

- Alpine.js: https://alpinejs.dev/directives/data, https://alpinejs.dev/directives/show, https://alpinejs.dev/directives/bind, https://alpinejs.dev/directives/on
- Preline UI: https://preline.co/docs/components/accordion.html

# Official References

- https://alpinejs.dev/start-here
- https://alpinejs.dev/directives/
- https://preline.co/docs/
- https://preline.co/docs/components.html
- https://preline.co/docs/accessibility.html

# Final Check

- [x] `npm run build` completes.
- [x] Tailwind styles load.
- [x] Alpine interaction works.
- [x] Preline component works.
- [x] They solve different needs.
- [x] Keyboard testing works.
- [x] Responsive testing is complete.
- [x] Console has no unresolved errors.
- [x] README is complete.
- [x] `css/output.css` is committed.
- [x] `js/vendor/preline.js` is committed.
- [x] `node_modules` is not committed.
- [x] Work is pushed to GitHub.

## Live Site

[Github Pages URL](https://aniolivarez.github.io/webworks-studio/week09-js-library/index.html)

## Last Update

Last updated 10/13/2026 by Ani Olivarez from Webworks Studio.
