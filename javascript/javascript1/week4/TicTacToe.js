function getRenderedGame(position) {
  let renderedGame = "*******\n";
  for (let row of position) {
    renderedGame += "*";
    for (let cell of row) {
      renderedGame += cell === " " ? " " : cell;
      renderedGame += "*";
    }
    renderedGame += "\n";
  }
  renderedGame += "*******";
  return renderedGame;
}

function getGameInfo(position) {
  const rows = position;
  const cols = [[], [], []];
  const diags = [[], []];

  // Extract columns and diagonals
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      cols[i].push(position[j][i]);
      if (i === j) diags[0].push(position[i][j]);
      if (i + j === 2) diags[1].push(position[i][j]);
    }
  }

  const lines = [...rows, ...cols, ...diags];

  // Check for a winner
  for (let line of lines) {
    if (line.every((cell) => cell === "x"))
      return { winner: "x", loser: "o", hasEnded: true };
    if (line.every((cell) => cell === "o"))
      return { winner: "o", loser: "x", hasEnded: true };
  }

  // Check if the game has ended
  const flattenedPosition = position.flat();
  const hasEnded = !flattenedPosition.includes(" ");

  return { winner: undefined, loser: undefined, hasEnded };
}

// Test getRenderedGame function
const position = [
  ["x", "o", " "],
  [" ", "o", " "],
  [" ", "o", "x"],
];

const renderedGame = getRenderedGame(position);
console.log(renderedGame);

// Test getGameInfo function
const gameInfo = getGameInfo(position);
console.log(gameInfo);
