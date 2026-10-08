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
