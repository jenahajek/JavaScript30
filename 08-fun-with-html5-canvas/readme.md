# Practice 8 - Fun with HTML5 Canvas

## Objective


## Procedure

### Markup
Just
``` html
<canvas id="draw" width="800" height="800"></canvas>
```

### CSS
All CSS is extra and not crucial.

### JavaScript
1. set context for canvas
2. set basic variables
3. set flag to know, when user wants to actually draw
4. set start and end point for give stroke
5. add event listeners
6. make a draw function

7. extras

Documented in the source code.

#### Important syntaxes
- basic condition
``` js
if (!isDrawing) return; // 4

canvas.addEventListener('mouseout', () => isDrawing = false);
```

Switch
``` js
if (a >= b || c <= d) {
    direction = !direction;
}
```

Reset canvas
``` js
ctx.clearRect(0, 0, canvas.width, canvas.height);
```

Event listeners for multiple elements
``` js
inputs.forEach(input => input.addEventListener('change', update));
```

## TIL
- `document.querySelectorAll` returns array (or node list) and width and height methods are not available
- first encounter with `canvas`
- `parseInt`
- practiced selecting, functions, syntax, procedures &hellip;
- `nextElementSibling`
- destructuring an array - `[lastX, lastY] = [e.offsetX, e.offsetY];`

## Extras
- Used knowledge from day 3 - CSS variables and added controls

## Unsolved issues
- hue jitter doesn't start on selected colour but always on hue 0 (red)
- hue jitter doesn't work fully when stroke jitter in on