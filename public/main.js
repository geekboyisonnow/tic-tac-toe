// Tic Tac Toe

// -Create board, made up of a 3 x 3 grid of equally sized squares (three rows of three squares)
// -Classify each square 1 through 9 from top left to bottom right
// -Create player 1
// 	-assign player one to ‘X’
// 	-player one goes first
// -Create player 2
// 	-assign player 2 to ‘O’
// 	-player 2 goes second
// -Player 1 takes a turn and selects one of the empty squares 1-9
//         - if the square the user chose already has an X or an O, reject the choice
// 	-screen displays ‘X’ in selected square
// 	-remember which square has been selected
// -Player 2 takes a turn and selects one of any other open squares
// 	-screen displays ‘O’ in selected square
// 	-remember which square has been selected
// -the players alternate turns until a player has 3 squares selected in a row -
// -If Player 1 has three in a row selected…
//         -square 1 and the square 2 and the square 3 are all X, Display Player 1 Wins!
//         - square 4 and the square 5 and the square 6 are all X, Display Player 1 Wins!
// 	- square 7 and the square 8 and the square 9 are all X, Display Player 1 Wins!

// 	-square 1 and the square 4 and the square 7 are all X, Display Player 1 Wins!
//         - square 2 and the square 5 and the square 8 are all X, Display Player 1 Wins!
// 	- square 3 and the square 6 and the square 9 are all X, Display Player 1 Wins!

//         - square 1 and the square 5 and the square 9 are all X, Display Player 1 Wins!
// 	- square 3 and the square 5 and the square 7 are all X, Display Player 1 Wins!

// -If Player 2 has three in a row selected…
// 	- square 1 and the square 2 and the square 3 are all O, Display Player 2 Wins!
//         - square 4 and the square 5 and the square 6 are all O, Display Player 2 Wins!
// 	- square 7 and the square 8 and the square 9 are all O, Display Player 2 Wins!

// 	-square 1 and the square 4 and the square 7 are all O, Display Player 2 Wins!
//         - square 2 and the square 5 and the square 8 are all O, Display Player 2 Wins!
// 	- square 3 and the square 6 and the square 9 are all O, Display Player 2 Wins!

//         - square 1 and the square 5 and the square 9 are all O, Display Player 2 Wins!
// 	- square 3 and the square 5 and the square 7 are all O, Display Player 2 Wins!

// -If every square has been selected and no player has 3 in a row, then display its a tie!
// - Restart Game button at the bottom

const main = () => {
  //document.querySelector('h1').textContent += '?'
}

document.addEventListener('DOMContentLoaded', main)
