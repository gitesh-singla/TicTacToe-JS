const gameboard = (() => {
    const gameArray = ["X", "O", "X", "O", "X", "O", "X", "O", "O"];

    const drawBoard = () => {
        const board = document.querySelector('.board');

        gameArray.forEach(element => {
            const tile = document.createElement('div');
            tile.classList.add('tile');
            tile.innerHTML = element;
            board.appendChild(tile);
        });
    }

    return {
        drawBoard
    }
})()

gameboard.drawBoard();