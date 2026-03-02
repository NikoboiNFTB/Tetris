const gameBoard = document.querySelector(".game-board");
const scoreDisplay = document.querySelector("p");
const width = 10;
const height = 20;
let score = 0;
let currentPosition = 4;
let currentRotation = 0;

const tetrisPieces = [
  [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  [
    [2, 0, 0],
    [2, 2, 2],
    [0, 0, 0],
  ],
  [
    [0, 0, 3],
    [3, 3, 3],
    [0, 0, 0],
  ],
  [
    [4, 4],
    [4, 4],
  ],
];

function createPiece(type) {
  const piece = tetrisPieces[type];
  for (let row = 0; row < piece.length; row++) {
    for (let col = 0; col < piece[row].length; col++) {
      if (piece[row][col] !== 0) {
        const cell = document.createElement("div");
        cell.classList.add("cell", `cell-type-${piece[row][col]}`);
        gameBoard.appendChild(cell);
      }
    }
  }
}
createPiece(1);

function movePieceLeft() {}

function movePieceRight() {}
