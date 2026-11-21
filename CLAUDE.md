@AGENTS.md

# Project rules

- **Mobile-first, phone in landscape only.** Every screen and component is designed for a phone held horizontally first (e.g. 844×390, `max-height: 560px` media queries), and only then scaled up for tablets and desktop. Check each change at a phone landscape size: everything must fit without vertical scrolling where possible, with touch targets large enough for a finger. Portrait is not supported (the app asks to rotate the phone).
