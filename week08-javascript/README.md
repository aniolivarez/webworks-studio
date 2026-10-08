# Week 8 — JavaScript Interaction Handoff

## Hill Country Trail Guide

**Primary User:** Maya Torres

## Required Behaviors

1. Accessible trail-difficulty disclosure
2. Hike-planning form validation/submission feedback

---

## JavaScript Decisions

### Decision 1 — DOM Selection

What elements did your script need to select, and why?

For the difficulty panel portion of the assignment, my script just needed to select the panel button and the panel itself. These were selected so that interaction with the button allows the panel to open and close.
For the form portion of the assignment, my script first selected the form and feedback elements, then selected the form dropdown selections. The form was selected to script a validation check for if all required fields were filled out, and the feedback element was selected to display text with the user's filled out form information. The form selections were selected so that their chosen options could be displayed in the feedback section.

### Decision 2 — Event Handling

What events did you listen for? Why were those events appropriate?

The events I listened for were click and submit. Click was appropriate for the difficulty panel, as it allowed the button to toggle the panel open and closed. Submit was appropriate for the form as it allowed the script to run once the submission button was activated.

### Decision 3 — State / DOM Update

How did the interface change after user action?

With the difficulty panel, the interface changes by either showing or hiding the content of the panel. With the form, the interface changes by preventing the default behavior of the browser once the form is fully filled out, and showing feedback text once the form is submitted.

### Decision 4 — Accessibility

How did you preserve or improve keyboard/accessibility behavior?

I preserved accessibility by using event listeners that respond to keyboard input, and testing my entire page after adding scripts to be sure that all actions can be completed with purely keyboard input.

---

## Testing Notes

### Difficulty Disclosure

- Mouse: All actions work as expected.
- Keyboard: Button can be toggled using enter or space key.
- `aria-expanded`: Code changes accordingly to whether panel is open or closed.
- Console errors: None.

### Planning Form

- Empty/invalid submission: Feedback is not given, default browser behavior telling the user to complete the form is preserved.
- Valid submission: Triggers feedback message that shows chosen form options.
- Keyboard: Entire form can be filled out with keyboard: dropdown items can be chosen with arrow keys, checkbox can be filled with space key, and form can be submitted with space or enter key.
- Console errors: Typo caused brief error with showing experience option in feedback, has been resolved. No current console errors.

---

## Live Site

[Live Github URL](https://aniolivarez.github.io/webworks-studio/week08-javascript/index.html)

## Last Update

Last updated 10/8/2026 by Ani Olivarez from Webworks Studio.
