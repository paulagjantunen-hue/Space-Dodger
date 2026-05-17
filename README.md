# Space Dodger

Space Dodger is a browser-based arcade game built with HTML, CSS, and JavaScript. The goal is to dodge falling asteroids and stay alive as long as possible while your score increases over time.

## Features

- Smooth canvas-based animation
- Player movement using keyboard controls
- Randomly generated falling asteroids of varying sizes
- Score tracking and difficulty increase over time
- Basic game over screen when a collision occurs

## Gameplay

1. Open `index.html` in a browser or serve the project from a local web server.
2. Use the left and right arrow keys to move the player ship.
3. Avoid colliding with the gray asteroids.
4. Your score increases while you survive.
5. If you hit an asteroid, the game ends and you can refresh the page to restart.

## How to run the game

### Option 1: Open the file directly

- Open the project folder in your code editor or file manager.
- Open `index.html` with a browser.

> Note: Some browsers may block local JavaScript execution from files, so using a local server is usually more reliable.

### Option 2: Use a local HTTP server

From the project folder in a terminal:

```bash
cd /workspaces/Space-Dodger
python3 -m http.server 8000
```

Then open the game at:

```text
http://localhost:8000
```

### Option 3: Use VS Code Live Server

1. Install the `Live Server` extension in VS Code.
2. Open `index.html`.
3. Click `Go Live` in the status bar or right-click and choose `Open with Live Server`.

## Project structure

- `index.html` — the main HTML page that contains the game canvas and links to the JavaScript file
- `script.js` — game logic, input handling, drawing, and animation
- `style.css` — visual styling for the canvas and page layout
- `README.md` — this file
- `space-dodger/` — duplicate copy of the game files in a subfolder

## Controls

- `Arrow Left` — move the player ship left
- `Arrow Right` — move the player ship right

## Development notes

- The canvas is used to draw the player, asteroids, and game over text.
- Asteroids are created randomly and move downward each frame.
- Collision is detected with bounding box overlap between the player and each asteroid.
- Score is updated every frame and difficulty increases periodically by speeding up asteroids.

## Troubleshooting

- If the game does not start, confirm that `script.js` is loaded by opening the browser console.
- Make sure the canvas element has `id="gameCanvas"` and the script can access it.
- If the score does not update, verify the `#score` element exists in `index.html`.
- Refresh the page after fixing code changes to restart the game.

## Future improvements

- Add sound effects and background music
- Display the highest score or best run
- Add multiple asteroid types and power-ups
- Add touch controls for mobile devices
- Improve the player sprite and game visuals
