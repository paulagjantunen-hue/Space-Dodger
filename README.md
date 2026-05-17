# Space Dodger

A simple browser game where you dodge falling asteroids using the arrow keys.

## How to play

- Open `index.html` in your browser.
- Press `Arrow Left` or `Arrow Right` to move the ship.
- Avoid the gray asteroids.
- Your score increases over time.

## Run locally

### Option 1: Open directly

1. Open the project folder in your code editor or file manager.
2. Open `index.html` in the browser.

### Option 2: Run a local server

From the project folder:

```bash
cd /workspaces/Space-Dodger
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Files

- `index.html` — main game page
- `script.js` — game logic and animation
- `style.css` — page styling
- `space-dodger/` — alternate folder copy of the project files

## Controls

- `Arrow Left` — move left
- `Arrow Right` — move right

## Notes

If the browser fails to load the game, make sure the HTML file is using `script.js` and the canvas has the correct `id`.
