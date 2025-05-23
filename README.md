# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](<./screenshot/Screenshot%20(90).png>)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

## 🧠 What I Learned

While building the **Tip Calculator App**, I had the opportunity to deepen my understanding of **responsive design**, **modern layout techniques**, and **JavaScript event handling**.

### 🎨 Layout and Responsiveness

I began by designing the layout for **mobile devices first**, then scaled up using **media queries** for larger screens.

- I used **Flexbox** to handle the mobile layout.
- For the desktop version, I applied **CSS Grid**, which helped me position and space elements with more control.

```css
@media (min-width: 768px) {
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}
```

This gave me hands-on practice switching between Flexbox and Grid, and understanding which is more appropriate in different layout situations.

### 📦 JavaScript Learnings

In JavaScript, I reinforced and gained practical experience with:

- `parseFloat()` — Though I was familiar with it before, I got to **actually use it** to convert string inputs into decimal numbers for calculations.

```js
let value = parseFloat(e.target.value);
```

- `input` event — I used it to listen for **real-time changes** in form fields, allowing for immediate validation and dynamic UI updates.

```js
inputField.addEventListener('input', (e) => {
  // Live updates on user input
});
```

- The importance of **checking that all required values are set before calling a function**. I initially made the mistake of running my calculation before the variables were all defined, which helped me understand the need for input validation and control flow.

```js
function checkAndCalculate() {
  if (billValue && tipValue && numPeopleValue) {
    cal();
  }
}
```

### 🧼 Code Organization

I also improved how I **structured my JS code**, organizing DOM elements at the top, followed by event listeners, then utility and calculation functions. This made my code more readable and maintainable.

### Continued development

🔍 Areas for Continued Focus
As I continue growing in my frontend development journey, I want to deepen my understanding of JavaScript. While building this project, I realized how powerful JavaScript is for making websites interactive, and I’m motivated to get more confident with it.

🛠 Key Areas I Want to Improve
DOM Manipulation: I’ve started getting comfortable selecting elements and handling events, but I want to refine how I update the DOM dynamically and structure cleaner interactions.

Form Validation: I’d like to learn more robust ways to validate user input — including edge cases, using regex, and providing better user feedback.

Modular Code Structure: My JS is currently all in one file. I’d like to explore breaking things into reusable functions and maybe even using ES6 modules.

Error Handling: I want to handle unexpected input or behavior more gracefully and learn when to use try...catch or defensive programming patterns.

Real-time Interactions: I found the input event really useful. I want to continue learning how to build real-time feedback systems and make my apps feel more dynamic and responsive.

### Useful resources

- ChatGPT – This was incredibly helpful for answering questions in real-time, clarifying concepts, and giving me suggestions on how to improve my code. I used it especially for refining my JavaScript logic and structuring my HTML/CSS better. I really liked how it explained things step-by-step, and I’ll continue using it as a learning companion.

- Flexbox Froggy – This interactive game made learning Flexbox fun and easier to remember. It helped me understand how properties like justify-content, align-items, and flex-direction work. I really liked this visual pattern of learning and will definitely use more interactive games or tools like this in the future.

## Author

- Frontend Mentor - [@boyutife](https://www.frontendmentor.io/profile/Boyutife)
- Twitter - [@boluwatife_ven](https://x.com/Boluwatife_Ven)

## Acknowledgments

Thank God for the motivation and inspiration
