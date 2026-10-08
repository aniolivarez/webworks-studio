"use strict";

// ======================================================
// PART 1 — DIFFICULTY DISCLOSURE
// ======================================================

const difficultyButton = document.querySelector("#difficulty-toggle");

const difficultyPanel = document.querySelector("#difficulty-panel");

difficultyButton.addEventListener("click", () => {
  const isOpen = difficultyButton.getAttribute("aria-expanded") === "true";

  difficultyPanel.hidden = isOpen;

  difficultyButton.setAttribute("aria-expanded", String(!isOpen));
});

// ======================================================
// PART 2 — HIKE PLANNING FORM
// ======================================================

const trailForm = document.querySelector("#hike-form");

const trailFeedback = document.querySelector("#form-feedback");

trailForm.addEventListener("submit", (event) => {
  if (!trailForm.checkValidity()) {
    return;
  }

  event.preventDefault();

  const trailChoice = document.querySelector("#trail").value;
  const experienceChoice = document.querySelector("#experience").value;
  const hoursChoice = document.querySelector("#hours").value;

  trailFeedback.textContent = `Plan ready for ${trailChoice} trail with ${experienceChoice.toLowerCase()} hiker for ${hoursChoice} hours.`;
});
