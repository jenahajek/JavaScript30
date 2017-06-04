# Practice 2 - JS Clock

## Objective
Build a clock which shows current time.

## Procedure

### Markup
All markup we need to is as follows:

```
<div class="clock">
  <div class="clock-face">
    <div class="hand hour-hand"></div>
    <div class="hand minute-hand"></div>
    <div class="hand second-hand"></div>
  </div>
</div>
```

### JavaScript

``` js
<script>
  // find clock hands
  const secondHand = document.querySelector('.second-hand');
  const minuteHand = document.querySelector('.minute-hand');
  const hourHand   = document.querySelector('.hour-hand');

  function setDate() {

    // Date constructor:
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date
    const now = new Date();

    // .getSeconds method returns current second value
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours   = now.getHours();

    // translate time units to degrees
    // seconds: ((seconds / 60) * 360) - first to percentage, then multiply by degrees, 90 to offset start (so it starts at 12 o'clock)
    const secondsDegrees = (seconds * 6) + 90;
    const minutesDegrees = (minutes * 6) + (seconds / 10) + 90;
    const hoursDegrees   = (hours * 30) + (minutes / 10) + 90;

    // set transform rotate property
    // `` is ES6 template literal: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform   = `rotate(${hoursDegrees}deg)`;
  }

  // repeat every 1000ms
  setInterval(setDate, 1000);

  setDate();

</script>
```

## TIL
- `document.querySelector(`.key[data-key="${e.keyCode}"]`)`
  - today I learned this is ES6 template literal, allowing embedded expressions.
- `Date();` constructor and its methods like `.getMinutes();` etc.
- `e.preventDefault()` while listening for `keydown` block keyboard shorcuts

## Extras
- I restyled the clock, practicing transform property

## Unsolved issues
- after full revolution there is weird transition