Write a single, self‑contained `index.html` file that implements a playable game of classic Tetris.

The game must run in any modern web browser without using external libraries, frameworks, or additional files.

**Core requirements**

1. **Grid** – 10 columns × 20 rows.
2. **Tetrominoes** – include the seven standard pieces (I, O, T, S, Z, J, L) with clockwise rotation.
3. **Gravity** – pieces fall automatically at a fixed interval.
4. **Line clearing** – when a row is fully occupied, clear it and shift all rows above down.
5. **Controls** – map the following keys to the described actions:
   - Left Arrow: move left
   - Right Arrow: move right
   - Down Arrow: soft drop
   - Up Arrow: rotate clockwise
   - Space Bar: hard drop (instantly place the piece)

**Output**

- Return exactly one file named `index.html`.
- All HTML, CSS, and JavaScript must be embedded in that file.
