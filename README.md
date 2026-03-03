# Tetris

"Make a playable Tetris game" benchmark for various LLMs (local > cloud).

## The Benchmark

Specs

### Hardware

The benchmarks are made on two rigs:

1. RTX 5060 Ti,AMD Ryzen 5 5500, 32Gb of RAM.

2. RTX 4060, Intel i5-13400F, 32Gb of RAM.

### The Prompt

```text
Write a fully functional game of Tetris that can be played in any web browser. Contain everything within a single index.html file.
```

### Results

To see all results, in the Tetris repo folder, run:

```bash
for f in $(find . -name "index.html"); do
    echo
    echo "======== $f ========"
    echo
    cat $f
    echo
    echo "======== $f ========"
    echo
done
```

| GPU        | Model                   | Code                                                    | Result                                                               |
|------------|-------------------------|---------------------------------------------------------|----------------------------------------------------------------------|
| Cloud      | chatgpt.com             | [index.html](/chatgpt.com/index.html)                   | [Website](https://tetris.nikoboi.dev/chatgpt.com/)                   |
| Cloud      | gemini-cli (Gemini 2.5) | [index.html](/gemini-cli/Gemini%202.5/index.html)       | [Website](https://tetris.nikoboi.dev/gemini-cli/Gemini%202.5/)       |
| RTX5060 Ti | gpt-oss:20b             | [index.html](/RTX5060Ti/gpt-oss:20b/index.html)         | [Website](https://tetris.nikoboi.dev/RTX5060Ti/gpt-oss:20b/)         |
| RTX4060    | deepseek-coder-v2:16b   | [index.html](/RTX4060/deepseek-coder-v2:16b/index.html) | [Website](https://tetris.nikoboi.dev/RTX4060/deepseek-coder-v2:16b/) |
| RTX4060    | gemma3:4b               | [index.html](/RTX4060/gemma3:4b/index.html)             | [Website](https://tetris.nikoboi.dev/RTX4060/gemma3:4b/)             |
| RTX4060    | codellama:7b            | [index.html](/RTX4060/codellama:7b/index.html)          | [Website](https://tetris.nikoboi.dev/RTX4060/codellama:7b/)          |
| RTX4060    | qwen2.5-coder:7b        | [index.html](/RTX4060/qwen2.5-coder:7b/index.html)      | [Website](https://tetris.nikoboi.dev/RTX4060/qwen2.5-coder:7b/)      |
| RTX4060    | codegemma:7b            | [index.html](/RTX4060/codegemma:7b/index.html)          | [Website](https://tetris.nikoboi.dev/RTX4060/codegemma:7b/)          |
| RTX4060    | gpt-oss:20b             | [index.html](/RTX4060/gpt-oss:20b/index.html)           | [Website](https://tetris.nikoboi.dev/RTX4060/gpt-oss:20b/)           |
| RTX4060    | codegemma:2b            | [index.html](/RTX4060/codegemma:2b/index.html)          | [Website](https://tetris.nikoboi.dev/RTX4060/codegemma:2b/)          |
| RTX4060    | gemma3:12b              | [index.html](/RTX4060/gemma3:12b/index.html)            | [Website](https://tetris.nikoboi.dev/RTX4060/gemma3:12b/)            |

## Contributing

Feel free to fork this repository and submit issues or pull requests if you have any suggestions or improvements. If you encounter any bugs or have feature requests, please open an issue.

## Credits

Created by **[Nikoboi](https://github.com/NikoboiNFTB/)**

## License

This project is licenced under the GNU General Public License V3. See [LICENSE](LICENSE) for details.
