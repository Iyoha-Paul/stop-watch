# stop-watch

a basic stopwatch using HTML, SASS and JAVASCRIPT

# Frontend Mentor - Huddle landing page with curved sections solution

This is a basic stopwatch designed using HTML, SASSand Javascript.

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

## Overview

### The challenge

This challenge was to design a basic stop watch using HTML, SASS and Javascript.

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: (https://iyoha-paul.github.io/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow
- javascript

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```

```SASS
{@function set-test-color($color) {
  @if (lightness($color) > 40%) {
    @return #000;
  } @else {
    @return white;
  }
}}
```

```js
const proudOfThisFunc = function startTimercode() {
  sec++;
  // console.log('working');
  if (min > 59) {
    hr++;
    min = 0;
  }

  min = sec > 59 ? min + 1 : min;

  sec = sec > 59 ? 0 : sec;
  let hrTag = hr > 9 ? "" : 0;
  let minTag = min > 9 ? "" : 0;
  let secTag = sec > 9 ? "" : 0;
  stopWatchScreen.textContent = `${hrTag}${hr}:${minTag}${min}:${secTag}${sec}`;
  timerIsCounting = true;
};
```

### Continued development

more lessons on Javascript!

### Useful resources

- [W3schools](https://www.w3schools.com/) - This helped me so learn about SetInterval() function reason. I really liked this pattern and will use it going forward.

## Author

- Website - [IYOHA PAUL](https://www.your-site.com)

## Acknowledgments

ME 😊
