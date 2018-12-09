function gameStarter() {
	const playerA = "🌀";
	const playerB = "🌵";
	const gameBoard = document.querySelector('.game-board');
	const makeGameBoard = function() {
		for (let i = 0; i < 9; i++) {
			const box = document.createElement('div');
			box.innerHTML = "&nbsp";
			gameBoard.appendChild(box);
		};
	};
	makeGameBoard();
	const gameBoardBox = document.querySelectorAll('.game-board>div');
	const removeGameBoard = function () {
		for (let i = 0; i < gameBoardBox.length; i++) {
			gameBoard.removeChild(gameBoardBox[i]);
		};
	};
	const referee = function () {
		const RULE = [
			gameBoardBox[0].innerHTML === playerA && gameBoardBox[1].innerHTML === playerA && gameBoardBox[2].innerHTML === playerA,
			gameBoardBox[0].innerHTML === playerA && gameBoardBox[3].innerHTML === playerA && gameBoardBox[6].innerHTML === playerA,
			gameBoardBox[0].innerHTML === playerA && gameBoardBox[4].innerHTML === playerA && gameBoardBox[8].innerHTML === playerA,
			gameBoardBox[1].innerHTML === playerA && gameBoardBox[4].innerHTML === playerA && gameBoardBox[7].innerHTML === playerA,
			gameBoardBox[2].innerHTML === playerA && gameBoardBox[4].innerHTML === playerA && gameBoardBox[8].innerHTML === playerA,
			gameBoardBox[2].innerHTML === playerA && gameBoardBox[4].innerHTML === playerA && gameBoardBox[6].innerHTML === playerA,
			gameBoardBox[3].innerHTML === playerA && gameBoardBox[4].innerHTML === playerA && gameBoardBox[5].innerHTML === playerA,
			gameBoardBox[6].innerHTML === playerA && gameBoardBox[7].innerHTML === playerA && gameBoardBox[8].innerHTML === playerA,
			gameBoardBox[0].innerHTML === playerB && gameBoardBox[1].innerHTML === playerB && gameBoardBox[2].innerHTML === playerB,
			gameBoardBox[0].innerHTML === playerB && gameBoardBox[3].innerHTML === playerB && gameBoardBox[6].innerHTML === playerB,
			gameBoardBox[0].innerHTML === playerB && gameBoardBox[4].innerHTML === playerB && gameBoardBox[8].innerHTML === playerB,
			gameBoardBox[1].innerHTML === playerB && gameBoardBox[4].innerHTML === playerB && gameBoardBox[7].innerHTML === playerB,
			gameBoardBox[2].innerHTML === playerB && gameBoardBox[4].innerHTML === playerB && gameBoardBox[8].innerHTML === playerB,
			gameBoardBox[2].innerHTML === playerB && gameBoardBox[4].innerHTML === playerB && gameBoardBox[6].innerHTML === playerB,
			gameBoardBox[3].innerHTML === playerB && gameBoardBox[4].innerHTML === playerB && gameBoardBox[5].innerHTML === playerB,
			gameBoardBox[6].innerHTML === playerB && gameBoardBox[7].innerHTML === playerB && gameBoardBox[8].innerHTML === playerB,
		];
		for (let i = 0; i < RULE.length; i++) {
			if( RULE[i] ) {
				let winner = playerB;
				if ( i >= 0 && i <= 8 ) {
					winner = playerA;
				}
				alert(`${winner} is Winnnnnnnnner`);
				removeGameBoard();
				gameStarter();
				return true;
			}; 
		};
	};
	let orderCount = 9;
	for (let i = 0; i < gameBoardBox.length; i++) {
		gameBoardBox[i].addEventListener('click',function() {
			if ( orderCount%2 === 0 ) {
				gameBoardBox[i].innerHTML = playerB;
				orderCount--;
			} else {
				gameBoardBox[i].innerHTML = playerA;
				orderCount--;
			};
			const result = referee();
			changePlayer();
			this.removeEventListener('click',arguments.callee);
			if ( orderCount === 0 && result === undefined ) {
				alert('Tieeeeeeeeeeee');
				removeGameBoard();
				gameStarter();
			};
		});
	};
	const playerElement = document.querySelector(".player");
	playerElement.innerHTML = playerA;
	const changePlayer = function () {
		if ( orderCount%2 === 0 ) {
			playerElement.innerHTML = playerB;
		} else {
			playerElement.innerHTML = playerA;
		}
	}
};
gameStarter();
