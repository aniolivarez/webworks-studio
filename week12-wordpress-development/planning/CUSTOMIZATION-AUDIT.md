# Week 12 Customization Audit

## Planning Aid — Complete Before Production

This is a short planning aid, not a separate major deliverable.

### 1. What is already working from Week 11?

List the content and CMS structure you intend to preserve.

- Page content
- Basic website theme
- Existing site structure

### 2. Which requirements are global?

Examples: palette, typography, buttons, content width, spacing rhythm.

- Palette
- Typography

### 3. Which requirement belongs in a reusable pattern?

What repeated structure will carry the Southtown brand?

- Program cards pattern

### 4. Which requirement belongs in shared site structure?

What should change once and affect multiple pages?

- Header appearance

### 5. What is your one development-level modification?

Choose **one**:

- [x] small `theme.json` adjustment
- [ ] small targeted CSS rule

Why is this modification necessary instead of another editor/global setting?

- Keeping Southtown approved palette on all elements, including buttons when hovered over. The palette a button has when hovered does not have an editor setting, so it must be changed with theme.json

### 6. What will you test?

Visitor:

- Page responsiveness, keyboard controls, link and button clarity

Editor:

- Consistency across pages, easy ability to change content while keeping appearance
