# Tetris

Tetris benchmark for various LLMs, local and remote.

## The Benchmark

### Hardware

The benchmarks are made on two rigs:

1. RTX 5060 Ti,AMD Ryzen 5 5500, 32Gb of RAM.

2. RTX 4060, Intel i5-13400F, 32Gb of RAM.

### The Prompt

```text
Write a fully functional game of Tetris that can be played in any web browser. Contain everything within a single index.html file.
```

### Results

#### Criteria

<!--

    Yeah turn offwrapped lines for this section 💀
    micro/nano/vim ~/.config/VSCodium/User/settings.json
    Add:
    "[markdown]": {
        "editor.wordWrap": "off"
    }
    ^ Indent once, inside the closing bracket.

-->

|   Score   |   Meaning                                                                                                                                 |
|-----------|-------------------------------------------------------------------------------------------------------------------------------------------|
|   10/10   |   Perfect: Fully functional Tetris with polished UI, smooth controls, proper scoring, and no bugs.                                        |
|   9/10    |   Almost perfect: Minor issues, but gameplay is fully solid.                                                                              |
|   8/10    |   Works well: Game is fully playable, controls are responsive, small bugs may exist, but overall solid.                                   |
|   7/10    |   Functional with issues: Core gameplay works, but noticeable bugs, missing features or minor visual inconsistencies.                     |
|   6/10    |   Mostly functional: Game can be played, but missing multiple features, controls or scoring may be awkward, or moderate bugs present.     |
|   5/10    |   Partially functional: Can move pieces, but game often breaks, lacks scoring, rotation, or proper collision detection.                   |
|   4/10    |   Barely functional: Some pieces appear or move, but game is frustrating or incomplete, major mechanics missing.                          |
|   3/10    |   Very limited functionality: Pieces render incorrectly, fall erratically, or game loop barely works.                                     |
|   2/10    |   Non-functional but looks right: UI renders or pieces appear, but no playable mechanics.                                                 |
|   1/10    |   Non-functional: Code runs, but nothing works (no pieces, no movement, no collisions).                                                   |
|   0/10    |   Disqualified/Error: Code does not run at all, crashes immediately, or is empty.                                                         |

#### Cloud Models

|   Model                                                                                                               |   Code                                                                                |   Result                                                                                          |   Score       |
|-----------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|---------------|
|   [chatgpt.com](https://chatgpt.com/)                                                                                 |   [index.html](/chatgpt.com/index.html)                                               |   [Website](https://tetris.nikoboi.dev/chatgpt.com/)                                              |   Okay        |
|   [gemini-cli](https://geminicli.com/) (Gemini 2.5)                                                                   |   [index.html](/gemini-cli/Gemini2.5/index.html)                                      |   [Website](https://tetris.nikoboi.dev/gemini-cli/Gemini2.5/)                                     |   "Works"     |

#### RTX 5060 Ti (16Gb)

Each model is run using [Continue](https://open-vsx.org/extension/Continue/continue) the VSCodium extension.

|   Model                                                                                                               |   Code                                                                                |   Result                                                                                          |   Score       |
|-----------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|---------------|
|   [codellama:7b](https://ollama.com/library/codellama:7b)                                                             |   [index.html](/RTX5060Ti/codellama:7b/index.html)                                    |   [Website](https://tetris.nikoboi.dev/RTX5060Ti/codellama:7b/)                                   |   Error       |
|   [codestral:latest](https://ollama.com/library/codestral:latest)                                                     |   [index.html](/RTX5060Ti/codestral/index.html)                                       |   [Website](https://tetris.nikoboi.dev/RTX5060Ti/codestral/)                                      |   Failed      |
|   [deepseek-coder-v2:16b-lite-instruct-q6_K](https://ollama.com/library/deepseek-coder-v2:16b-lite-instruct-q6_K)     |   [index.html](/RTX5060Ti/deepseek-coder-v2:16b-lite-instruct-q6_K/index.html)        |   [Website](https://tetris.nikoboi.dev/RTX5060Ti/deepseek-coder-v2:16b-lite-instruct-q6_K/)       |   Failed      |
|   [gemma3:12b](https://ollama.com/library/gemma3:12b)                                                                 |   [index.html](/RTX5060Ti/gemma3:12b/index.html)                                      |   [Website](https://tetris.nikoboi.dev/RTX5060Ti/gemma3:12b/)                                     |   Error       |
|   [gpt-oss:20b](https://ollama.com/library/gpt-oss:20b)                                                               |   [index.html](/RTX5060Ti/gpt-oss:20b/index.html)                                     |   [Website](https://tetris.nikoboi.dev/RTX5060Ti/gpt-oss:20b/)                                    |   Best        |
|   [gpt-oss:20b-32k/rev1](https://ollama.com/library/gpt-oss:20b-32k/rev1)                                             |   [index.html](/RTX5060Ti/gpt-oss:20b-32k/rev1/index.html)                            |   [Website](https://tetris.nikoboi.dev/RTX5060Ti/gpt-oss:20b-32k/rev1/)                           |   Okay        |
|   [gpt-oss:20b-32k/rev2](https://ollama.com/library/gpt-oss:20b-32k/rev2)                                             |   [index.html](/RTX5060Ti/gpt-oss:20b-32k/rev2/index.html)                            |   [Website](https://tetris.nikoboi.dev/RTX5060Ti/gpt-oss:20b-32k/rev2/)                           |   Bad         |
|   [gpt-oss:20b-48k](https://ollama.com/library/gpt-oss:20b-48k)                                                       |   [index.html](/RTX5060Ti/gpt-oss:20b-48k/index.html)                                 |   [Website](https://tetris.nikoboi.dev/RTX5060Ti/gpt-oss:20b-48k/)                                |   Error       |
|   [gpt-oss:20b-64k/rev1](https://ollama.com/library/gpt-oss:20b-64k/rev1)                                             |   [index.html](/RTX5060Ti/gpt-oss:20b-64k/rev1/index.html)                            |   [Website](https://tetris.nikoboi.dev/RTX5060Ti/gpt-oss:20b-64k/rev1/)                           |   Bad         |
|   [gpt-oss:20b-64k/rev2](https://ollama.com/library/gpt-oss:20b-64k/rev2)                                             |   [index.html](/RTX5060Ti/gpt-oss:20b-64k/rev2/index.html)                            |   [Website](https://tetris.nikoboi.dev/RTX5060Ti/gpt-oss:20b-64k/rev2/)                           |   Failed      |
|   [gpt-oss:20b-64k/rev3](https://ollama.com/library/gpt-oss:20b-64k/rev3)                                             |   [index.html](/RTX5060Ti/gpt-oss:20b-64k/rev3/index.html)                            |   [Website](https://tetris.nikoboi.dev/RTX5060Ti/gpt-oss:20b-64k/rev3/)                           |   Failed      |
|   [mistral-nemo:latest](https://ollama.com/library/mistral-nemo:latest)                                               |   [index.html](/RTX5060Ti/mistral-nemo/index.html)                                    |   [Website](https://tetris.nikoboi.dev/RTX5060Ti/mistral-nemo/)                                   |   Failed      |
|   [mistral:7b](https://ollama.com/library/mistral:7b)                                                                 |   [index.html](/RTX5060Ti/mistral:7b/index.html)                                      |   [Website](https://tetris.nikoboi.dev/RTX5060Ti/mistral:7b/)                                     |   Error       |
|   [codellama:7b](https://ollama.com/library/codellama:7b)                                                             |   [index.html](/RTX5060Ti/codellama:7b/index.html)                                    |   [Website](https://tetris.nikoboi.dev/RTX5060Ti/codellama:7b/)                                   |   Failed      |
|   [qwen2.5-coder:7b-instruct](https://ollama.com/library/qwen2.5-coder:7b-instruct)                                   |   [index.html](/RTX5060Ti/qwen2.5-coder:7b-instruct/index.html)                       |   [Website](https://tetris.nikoboi.dev/RTX5060Ti/qwen2.5-coder:7b-instruct/)                      |   Error       |
|   [starcoder2:15b](https://ollama.com/library/starcoder2:15b)                                                         |   [index.html](/RTX5060Ti/starcoder2:15b/index.html)                                  |   [Website](https://tetris.nikoboi.dev/RTX5060Ti/starcoder2:15b/index.html)                       |   Failed      |
|   [starcoder2:15b-instruct](https://ollama.com/library/starcoder2:15b-instruct)                                       |   [index.html](/RTX5060Ti/starcoder2:15b-instruct/index.html)                         |   [Website](https://tetris.nikoboi.dev/RTX5060Ti/starcoder2:15b-instruct/index.html)              |   Error       |

#### RTX 4060 (8Gb)

Each model is run using [Continue](https://open-vsx.org/extension/Continue/continue) the VSCodium extension.

|   Model                                                                                                               |   Code                                                                                |   Result                                                                                          |   Score       |
|-----------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|---------------|
|   [codegemma:2b](https://ollama.com/library/codegemma:2b)                                                             |   [index.html](/RTX4060/codegemma:2b/index.html)                                      |   [Website](https://tetris.nikoboi.dev/RTX4060/codegemma:2b/)                                     |   Failed      |
|   [codegemma:7b](https://ollama.com/library/codegemma:7b)                                                             |   [index.html](/RTX4060/codegemma:7b/index.html)                                      |   [Website](https://tetris.nikoboi.dev/RTX4060/codegemma:7b/)                                     |   Failed      |
|   [codellama:7b](https://ollama.com/library/codellama:7b)                                                             |   [index.html](/RTX4060/codellama:7b/index.html)                                      |   [Website](https://tetris.nikoboi.dev/RTX4060/codellama:7b/)                                     |   Error       |
|   [deepseek-coder-v2:16b](https://ollama.com/library/deepseek-coder-v2:16b)                                           |   [index.html](/RTX4060/deepseek-coder-v2:16b/index.html)                             |   [Website](https://tetris.nikoboi.dev/RTX4060/deepseek-coder-v2:16b/)                            |   Error       |
|   [gemma3:4b](https://ollama.com/library/gemma3:4b)                                                                   |   [index.html](/RTX4060/gemma3:4b/index.html)                                         |   [Website](https://tetris.nikoboi.dev/RTX4060/gemma3:4b/)                                        |   Error       |
|   [gemma3:12b](https://ollama.com/library/gemma3:12b)                                                                 |   [index.html](/RTX4060/gemma3:12b/index.html)                                        |   [Website](https://tetris.nikoboi.dev/RTX4060/gemma3:12b/)                                       |   Error       |
|   [gpt-oss:20b](https://ollama.com/library/gpt-oss:20b)                                                               |   [index.html](/RTX4060/gpt-oss:20b/index.html)                                       |   [Website](https://tetris.nikoboi.dev/RTX4060/gpt-oss:20b/)                                      |   Error       |
|   [qwen2.5-coder:7b](https://ollama.com/library/qwen2.5-coder:7b)                                                     |   [index.html](/RTX4060/qwen2.5-coder:7b/index.html)                                  |   [Website](https://tetris.nikoboi.dev/RTX4060/qwen2.5-coder:7b/)                                 |   Error       |

## Contributing

Feel free to fork this repository and submit issues or pull requests if you have any suggestions or improvements. If you encounter any bugs or have feature requests, please open an issue.

## Credits

Created by **[Nikoboi](https://github.com/NikoboiNFTB/)**

## License

This project is licenced under the GNU General Public License V3. See [LICENSE](LICENSE) for details.
