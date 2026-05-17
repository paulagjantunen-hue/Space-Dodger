# Space Dodger

Space Dodger is a browser-based arcade game built with HTML, CSS, and JavaScript. The player controls a ship at the bottom of the screen and must dodge falling asteroids for as long as possible. The game is lightweight, easy to run locally, and designed to demonstrate canvas animation, keyboard input, collision detection, and simple game loop logic.

## Overview

In Space Dodger, the game area is rendered in a `<canvas>` element. The ship is controlled with the left and right arrow keys, and asteroids fall from the top of the screen in random positions and sizes. The longer the player survives, the higher the score becomes. When the ship collides with an asteroid, the game ends and the player can refresh the browser to play again.

### Why this project exists

- To practice core web development fundamentals
- To demonstrate how browser games can be built without external libraries
- To provide a fun example of animation and input handling in JavaScript
- To offer a simple starting point for learning game mechanics and incremental feature improvements

## Features

- HTML5 canvas rendering for the game screen
- Keyboard controls for movement
- Real-time asteroid generation and animation
- Score tracking displayed on screen
- Basic collision detection and game over handling
- Difficulty increases as score grows

## Gameplay instructions

1. Open `index.html` in a browser or run the project through a local web server.
2. Use the left and right arrow keys to move the ship horizontally.
3. Avoid the falling asteroids.
4. Keep surviving to raise your score.
5. When you collide with an asteroid, a "GAME OVER" message appears.
6. Refresh the page to restart the game.

## Running the game

### Option 1: Open `index.html` directly

1. In the workspace, locate `index.html`.
2. Open it in a browser.

> Tip: Some browsers may treat local files differently, so using a web server is recommended for the most consistent experience.

### Option 2: Run a local HTTP server

From the project folder:

```bash
cd /workspaces/Space-Dodger
python3 -m http.server 8000
```

Then open the browser and visit:

```text
http://localhost:8000
```

### Option 3: Use VS Code Live Server

1. Install the `Live Server` extension in VS Code.
2. Open `index.html` in the editor.
3. Click `Go Live` from the status bar or right-click and choose `Open with Live Server`.

## Code structure

### `index.html`

- Defines the page layout
- Contains the game canvas with `id="gameCanvas"`
- Includes the `script.js` file
- Displays the score area

### `script.js`

- Initializes the canvas and drawing context
- Handles player movement and input events
- Generates and animates asteroids
- Detects collisions between the player and asteroids
- Updates the score and game state
- Runs the game loop with `requestAnimationFrame`

### `style.css`

- Applies layout and background styling
- Centers the canvas on the page
- Styles the score display and game area

### `space-dodger/`

- Contains a duplicate copy of the project files
- Useful for comparing versions or keeping a separate directory structure

## Controls

- `Arrow Left` — move the ship left
- `Arrow Right` — move the ship right

## Technical details

### Game loop

The game loop performs the following tasks each frame:

- Clear the canvas
- Move the player based on input
- Update asteroid positions
- Create new asteroids randomly
- Check for collisions
- Redraw the player and asteroids
- Update the score display
- Request the next animation frame

### Collision detection

Collision detection is implemented with simple axis-aligned bounding boxes (AABB). The game checks whether the player and an asteroid overlap horizontally and vertically. If both conditions are true, the game ends.

### Difficulty scaling

The asteroid speed increases gradually as the score reaches specific thresholds. This creates a rising difficulty curve so the game becomes more challenging the longer you survive.

## Troubleshooting

- If the canvas is blank, open the browser console and check for JavaScript errors.
- Ensure `index.html` points to the correct `script.js` file.
- Verify the canvas has `id="gameCanvas"`.
- Ensure the `#score` element exists, or the score text will not update.
- If the game freezes, refresh the page to restart.

## Customization ideas

- Add sound effects for movement, collisions, and scoring
- Replace the simple ship and asteroid shapes with sprites
- Add explosions, particle effects, and background stars
- Implement multiple asteroid types and speeds
- Add a high score leaderboard stored in local storage
- Add mobile touch controls and responsive layout
- Add levels, lives, power-ups, or a pause feature

## Frequently asked questions

### Q: Can I play this game on mobile?
A: The current controls use keyboard input, so it is best played on desktop. Touch controls can be added in a future update.

### Q: Why does the score keep increasing even when I am not moving?
A: The score is based on survival time, not movement. It increases every frame while the game is active.

### Q: How do I restart the game?
A: Refresh the browser page to restart after a game over.

### Q: Can I modify asteroid behavior?
A: Yes. Open `script.js` and edit the asteroid creation, speed, and spawn frequency logic.

## Contributing

Contributions are welcome! You can:

- Improve the game graphics and audio
- Add new gameplay mechanics
- Fix bugs and improve performance
- Add documentation or comments to the code

If you want to contribute, fork the repository, make your changes, and submit a pull request.

## License

This project is free to use and modify. There is no official license included by default.
