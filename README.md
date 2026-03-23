# Tetris

Tetris benchmark for various LLMs, local and remote.

## Hardware

The benchmarks are made on two (or three) rigs:

1. RTX 5060 Ti, AMD Ryzen 5 5500, 32Gb of RAM.

2. RTX 4060, Intel i5-13400F, 32Gb of RAM.

3. Cloud models. Who knows.

## The Prompt

### Old Prompt

```text
Write a fully functional game of Tetris that can be played in any web browser. Contain everything within a single index.html file.
```

### New Prompt

```text
Create a complete, playable implementation of the classic Tetris game that runs in any modern web browser.

Output requirements:
- Return exactly one complete file named `index.html`.
- The entire game must be self-contained in this file with embedded HTML, CSS, and JavaScript.
- Do not use external libraries, frameworks, CDNs, or additional files.

Game rules:
- Playfield size: 10 columns × 20 rows.
- Implement the seven standard tetrominoes: I, O, T, S, Z, J, L.
- Pieces must support clockwise rotation and proper collision detection with walls, the floor, and other placed blocks.
- Pieces fall automatically at a fixed interval (gravity).
- When a horizontal line is completely filled it clears and all rows above move down.

Controls:
- Left Arrow: move piece left
- Right Arrow: move piece right
- Down Arrow: soft drop
- Up Arrow: rotate piece clockwise
- Space Bar: hard drop (instantly place the piece)

Game features:
- Score counter that increases when lines are cleared.
- Display the next tetromino.
- Detect game over when new pieces cannot spawn.
- Provide a restart button after game over.

UI:
- Render the board visually using HTML + CSS.
- Clean, readable styling.
- Layout should scale to different screen sizes.

Code expectations:
- The output must be a fully runnable file with no missing parts.
- Organize code clearly with comments explaining the main logic (grid, piece rotation, collision, line clearing).
- The code must be readable.
```

## Results

Models with no link are customized models. Models are a mixed bag of being run using [Continue](https://open-vsx.org/extension/Continue/continue) the VSCodium extension and directly through the terminal. Continue seems to severely cripple performance.

## Criteria

<!--

Yeah turn off wrapped lines for this section 💀
nano ~/.config/VSCodium/User/settings.json
Add:

    "[markdown]": {
        "editor.wordWrap": "off"
    }

^ One indendation, right before the closing bracket.

-->

| Score | Meaning                                                                                                             |
| ----- | ------------------------------------------------------------------------------------------------------------------- |
| 10/10 | Perfect: Fully functional Tetris with polished UI, smooth controls, proper scoring, and no bugs. Clankers dream.    |
| 9/10  | Almost perfect: Minor issues, but gameplay is fully solid.                                                          |
| 8/10  | Works well: Game is fully playable, controls are responsive, small bugs may exist, but overall solid.               |
| 7/10  | Functional with issues: Core gameplay works, but noticeable bugs, missing features or minor visual inconsistencies. |
| 6/10  | Mostly functional: Game can be played, but missing multiple core features                                           |
| 5/10  | Partially functional: Can move pieces, but non-playable.                                                            |
| 4/10  | Barely functional: Some pieces appear or move, but game is frustrating or incomplete, major mechanics missing.      |
| 3/10  | Very limited functionality: Barely anything works. Things move but don't work.                                      |
| 2/10  | Non-functional but looks right: The generated site _looks_ like a game of Tetris but nothing happens.               |
| 1/10  | Non-functional: Generated code but fully non-functional                                                             |
| 0/10  | Disqualified/Error: No code generated at all.                                                                       |

## Old Prompt

### Cloud Models

| Model                                             | Code                                             | Result                                                        | Score | Comment(s)                                                                                           |
| ------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------- | ----- | ---------------------------------------------------------------------------------------------------- |
| [chatgpt.com](https://chatgpt.com/)               | [index.html](/chatgpt.com/old-prompt/index.html) | [Website](https://tetris.nikoboi.dev/chatgpt.com/old-prompt/) | 7/10  | Blocks can get stuck in walls. / No space to drop down. / Rotating near other blocks will fuse them. |
| [gemini-cli](https://geminicli.com/) (Gemini 2.5) | [index.html](/gemini-cli/Gemini2.5/index.html)   | [Website](https://tetris.nikoboi.dev/gemini-cli/Gemini2.5/)   | 5/10  | Can't rotate pieces. / No space to drop down. / Fucking massive. / Scrolls up and down.              |

### RTX 5060 Ti (16Gb)

| Model                                                                                                           | Code                                                                                 | Result                                                                                            | Score  | Comment(s)                                                                                                   |
| --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------ |
| [codellama:7b](https://ollama.com/library/codellama:7b)                                                         | [index.html](/5060Ti/old-prompt/codellama:7b/index.html)                             | [Website](https://tetris.nikoboi.dev/5060Ti/old-prompt/codellama:7b/)                             | 0/10   |                                                                                                              |
| [codestral:latest](https://ollama.com/library/codestral:latest)                                                 | [index.html](/5060Ti/old-prompt/codestral:latest/index.html)                         | [Website](https://tetris.nikoboi.dev/5060Ti/old-prompt/codestral:latest/)                         | 1/10   | Automatic instant wins.                                                                                      |
| [deepseek-coder-v2:16b-lite-instruct-q6_K](https://ollama.com/library/deepseek-coder-v2:16b-lite-instruct-q6_K) | [index.html](/5060Ti/old-prompt/deepseek-coder-v2:16b-lite-instruct-q6_K/index.html) | [Website](https://tetris.nikoboi.dev/5060Ti/old-prompt/deepseek-coder-v2:16b-lite-instruct-q6_K/) | 2/10   |                                                                                                              |
| [gemma3:12b](https://ollama.com/library/gemma3:12b)                                                             | [index.html](/5060Ti/old-prompt/gemma3:12b/index.html)                               | [Website](https://tetris.nikoboi.dev/5060Ti/old-prompt/gemma3:12b/)                               | 0/10   |                                                                                                              |
| [gpt-oss:20b](https://ollama.com/library/gpt-oss:20b)                                                           | [index.html](/5060Ti/old-prompt/gpt-oss:20b/index.html)                              | [Website](https://tetris.nikoboi.dev/5060Ti/old-prompt/gpt-oss:20b/)                              | 9/10   | Best one yet. / Blocks never fuse when rotated. / Next block doesn't work. / Can't restart without reload.   |
| gpt-oss:20b-32k/rev1                                                                                            | [index.html](/5060Ti/old-prompt/gpt-oss:20b-32k/rev1/index.html)                     | [Website](https://tetris.nikoboi.dev/5060Ti/old-prompt/gpt-oss:20b-32k/rev1/)                     | 8/10   | Feels sluggish. / Doesn't speed up.                                                                          |
| gpt-oss:20b-32k/rev2                                                                                            | [index.html](/5060Ti/old-prompt/gpt-oss:20b-32k/rev2/index.html)                     | [Website](https://tetris.nikoboi.dev/5060Ti/old-prompt/gpt-oss:20b-32k/rev2/)                     | 4/10   | Block appear wrong.                                                                                          |
| gpt-oss:20b-48k                                                                                                 | [index.html](/5060Ti/old-prompt/gpt-oss:20b-48k/index.html)                          | [Website](https://tetris.nikoboi.dev/5060Ti/old-prompt/gpt-oss:20b-48k/)                          | 0/10   |                                                                                                              |
| gpt-oss:20b-64k/gpt-oss:20b-prompt-2                                                                            | [index.html](/5060Ti/old-prompt/gpt-oss:20b-64k/gpt-oss:20b-prompt-2/index.html)     | [Website](https://tetris.nikoboi.dev/5060Ti/old-prompt/gpt-oss:20b-64k/gpt-oss:20b-prompt-2/)     | 8/10   | Dowgrade. No longer auto-starts.                                                                             |
| gpt-oss:20b-64k/gpt-oss:20b-prompt-3                                                                            | [index.html](/5060Ti/old-prompt/gpt-oss:20b-64k/gpt-oss:20b-prompt-3/index.html)     | [Website](https://tetris.nikoboi.dev/5060Ti/old-prompt/gpt-oss:20b-64k/gpt-oss:20b-prompt-3/)     | 9/10   | Very close to perfect. / The whole site scrolls up and down on arrow up and down presses.                    |
| gpt-oss:20b-64k/gpt-oss:20b-prompt-4                                                                            | [index.html](/5060Ti/old-prompt/gpt-oss:20b-64k/gpt-oss:20b-prompt-4/index.html)     | [Website](https://tetris.nikoboi.dev/5060Ti/old-prompt/gpt-oss:20b-64k/gpt-oss:20b-prompt-4/)     | 9.5/10 | Very near perfect. Restarting doesn't work.                                                                  |
| gpt-oss:20b-64k/gpt-oss:20b-prompt-5                                                                            | [index.html](/5060Ti/old-prompt/gpt-oss:20b-64k/gpt-oss:20b-prompt-5/index.html)     | [Website](https://tetris.nikoboi.dev/5060Ti/old-prompt/gpt-oss:20b-64k/gpt-oss:20b-prompt-5/)     | 8/10   | The next piece display no longer works / It had some errors in the style that needed to be removed manually. |
| gpt-oss:20b-64k/gpt-oss:20b-prompt-6                                                                            | [index.html](/5060Ti/old-prompt/gpt-oss:20b-64k/gpt-oss:20b-prompt-6/index.html)     | [Website](https://tetris.nikoboi.dev/5060Ti/old-prompt/gpt-oss:20b-64k/gpt-oss:20b-prompt-6/)     | 10/10  | Perfect.                                                                                                     |
| gpt-oss:20b-64k/rev1                                                                                            | [index.html](/5060Ti/old-prompt/gpt-oss:20b-64k/rev1/index.html)                     | [Website](https://tetris.nikoboi.dev/5060Ti/old-prompt/gpt-oss:20b-64k/rev1/)                     | 4/10   | Invisible area.                                                                                              |
| gpt-oss:20b-64k/rev2                                                                                            | [index.html](/5060Ti/old-prompt/gpt-oss:20b-64k/rev2/index.html)                     | [Website](https://tetris.nikoboi.dev/5060Ti/old-prompt/gpt-oss:20b-64k/rev2/)                     | 2/10   |                                                                                                              |
| gpt-oss:20b-64k/rev3                                                                                            | [index.html](/5060Ti/old-prompt/gpt-oss:20b-64k/rev3/index.html)                     | [Website](https://tetris.nikoboi.dev/5060Ti/old-prompt/gpt-oss:20b-64k/rev3/)                     | 2/10   |                                                                                                              |
| gpt-oss:20b-64k/rev4                                                                                            | [index.html](/5060Ti/old-prompt/gpt-oss:20b-64k/rev4/index.html)                     | [Website](https://tetris.nikoboi.dev/5060Ti/old-prompt/gpt-oss:20b-64k/rev4/)                     | 5/10   | Z-piece is broken. / The whole playing field changes colors. / Next piece thing is just random.              |
| [mistral-nemo:latest](https://ollama.com/library/mistral-nemo:latest)                                           | [index.html](/5060Ti/old-prompt/mistral-nemo/index.html)                             | [Website](https://tetris.nikoboi.dev/5060Ti/old-prompt/mistral-nemo/)                             | 1/10   |                                                                                                              |
| [mistral:7b](https://ollama.com/library/mistral:7b)                                                             | [index.html](/5060Ti/old-prompt/mistral:7b/index.html)                               | [Website](https://tetris.nikoboi.dev/5060Ti/old-prompt/mistral:7b/)                               | 0/10   |                                                                                                              |
| [qwen2.5-coder:7b-instruct](https://ollama.com/library/qwen2.5-coder:7b-instruct)                               | [index.html](/5060Ti/old-prompt/qwen2.5-coder:7b-instruct/index.html)                | [Website](https://tetris.nikoboi.dev/5060Ti/old-prompt/qwen2.5-coder:7b-instruct/)                | 0/10   |                                                                                                              |
| [starcoder2:15b](https://ollama.com/library/starcoder2:15b)                                                     | [index.html](/5060Ti/old-prompt/starcoder2:15b/index.html)                           | [Website](https://tetris.nikoboi.dev/5060Ti/old-prompt/starcoder2:15b/)                           | 1/10   | Bro made a Logout button...                                                                                  |
| [starcoder2:15b-instruct](https://ollama.com/library/starcoder2:15b-instruct)                                   | [index.html](/5060Ti/old-prompt/starcoder2:15b-instruct/index.html)                  | [Website](https://tetris.nikoboi.dev/5060Ti/old-prompt/starcoder2:15b-instruct/)                  | 0/10   |                                                                                                              |

### RTX 4060 (8Gb)

| Model                                                                     | Code                                                            | Result                                                                       | Score  | Comment(s) |
| ------------------------------------------------------------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------ | ---------- |
| [codegemma:2b](https://ollama.com/library/codegemma:2b)                   | [index.html](/4060/old-prompt/codegemma:2b/index.html)          | [Website](https://tetris.nikoboi.dev/4060/old-prompt/codegemma:2b/)          | 1/10   |            |
| [codegemma:7b](https://ollama.com/library/codegemma:7b)                   | [index.html](/4060/old-prompt/codegemma:7b/index.html)          | [Website](https://tetris.nikoboi.dev/4060/old-prompt/codegemma:7b/)          | 1,5/10 |            |
| [codellama:7b](https://ollama.com/library/codellama:7b)                   | [index.html](/4060/old-prompt/codellama:7b/index.html)          | [Website](https://tetris.nikoboi.dev/4060/old-prompt/codellama:7b/)          | 0/10   |            |
| [deepseek-coder-v2:16b](https://ollama.com/library/deepseek-coder-v2:16b) | [index.html](/4060/old-prompt/deepseek-coder-v2:16b/index.html) | [Website](https://tetris.nikoboi.dev/4060/old-prompt/deepseek-coder-v2:16b/) | 0/10   |            |
| gemma3:4b-64k                                                             | [index.html](/4060/old-prompt/gemma3:4b-64k/index.html)         | [Website](https://tetris.nikoboi.dev/4060/old-prompt/gemma3:4b-64k/)         | 2/10   |            |
| [gemma3:4b](https://ollama.com/library/gemma3:4b)                         | [index.html](/4060/old-prompt/gemma3:4b/index.html)             | [Website](https://tetris.nikoboi.dev/4060/old-prompt/gemma3:4b/)             | 0/10   |            |
| [gemma3:12b](https://ollama.com/library/gemma3:12b)                       | [index.html](/4060/old-prompt/gemma3:12b/index.html)            | [Website](https://tetris.nikoboi.dev/4060/old-prompt/gemma3:12b/)            | 0/10   |            |
| [gpt-oss:20b](https://ollama.com/library/gpt-oss:20b)                     | [index.html](/4060/old-prompt/gpt-oss:20b/index.html)           | [Website](https://tetris.nikoboi.dev/4060/old-prompt/gpt-oss:20b/)           | 0/10   |            |
| [qwen2.5-coder:7b](https://ollama.com/library/qwen2.5-coder:7b)           | [index.html](/4060/old-prompt/qwen2.5-coder:7b/index.html)      | [Website](https://tetris.nikoboi.dev/4060/old-prompt/qwen2.5-coder:7b/)      | 0/10   |            |

## New Prompt

### Cloud Models

| Model                               | Code                                             | Result                                                        | Score | Comment(s)   |
| ----------------------------------- | ------------------------------------------------ | ------------------------------------------------------------- | ----- | ------------ |
| [chatgpt.com](https://chatgpt.com/) | [index.html](/chatgpt.com/new-prompt/index.html) | [Website](https://tetris.nikoboi.dev/chatgpt.com/new-prompt/) | 9/10  | Pretty good. |

### RTX 5060 Ti (16Gb)

| Model           | Code                                                        | Result                                                                   | Score | Comment(s)                                 |
| --------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------ | ----- | ------------------------------------------ |
| gpt-oss:20b-64k | [index.html](/5060Ti/new-prompt/gpt-oss:20b-64k/index.html) | [website](https://tetris.nikoboi.dev/5060Ti/new-prompt/gpt-oss:20b-64k/) | 8/10  | The "Next" display seems to only do color. |

## Contributing

Feel free to fork this repository and submit issues or pull requests if you have any suggestions or improvements. If you encounter any bugs or have feature requests, please open an issue.

## Credits

Created by [**Nikoboi**](https://github.com/NikoboiNFTB/)

## License

This project is licenced under the GNU General Public License V3. See [LICENSE](/LICENSE) for details.
