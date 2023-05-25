const gameboard = (() => {
    const gameArray = ["", "", "", "", "", "", "", "", ""];
    let turn = "X";
    const board = document.querySelector('.board');

    const drawBoard = () => {
        board.addEventListener('click', move);
        let index = 0;

        gameArray.forEach(element => {
            const tile = document.createElement('div');
            tile.classList.add('tile');
            tile.classList.add('no-select');
            tile.innerHTML = element;
            tile.setAttribute("data-index", index);
            index++;
            board.appendChild(tile);
        });
    }

    const move = (event) => {
        // console.log(event.target)
        const tile = event.target;
        if(tile.innerHTML != "") return;

        tile.innerHTML = turn;
        const index = tile.getAttribute('data-index');
        gameArray[index] = turn;
        if(checkGameOver()){
            console.log(`${turn} : wins!`);
            clearBoard();
        }
        turn = turn == "X"?"O":"X";
    }

    const checkGameOver = ()=> {
        if((gameArray[0] == turn) && (gameArray[1] == turn) && (gameArray[2] == turn)){
            return true;
        }
        if((gameArray[3] == turn) && (gameArray[4] == turn) && (gameArray[5] == turn)){
            return true;
        }
        if((gameArray[6] == turn) && (gameArray[7] == turn) && (gameArray[8] == turn)){
            return true;
        }
        if((gameArray[0] == turn) && (gameArray[3] == turn) && (gameArray[6] == turn)){
            return true;
        }
        if((gameArray[1] == turn) && (gameArray[4] == turn) && (gameArray[7] == turn)){
            return true;
        }
        if((gameArray[2] == turn) && (gameArray[5] == turn) && (gameArray[8] == turn)){
            return true;
        }
        if((gameArray[0] == turn) && (gameArray[4] == turn) && (gameArray[8] == turn)){
            return true;
        }
        if((gameArray[2] == turn) && (gameArray[4] == turn) && (gameArray[6] == turn)){
            return true;
        }
        return false;
    }

    const clearBoard = () => {
        gameArray.forEach((element, index) => {
            gameArray[index] = "";
        })
        board.innerHTML = "";
        turn = "X";
        drawBoard();
    }

    return {
        drawBoard,
        clearBoard,
    }
})()

function player (symbol){
    const play = () => {

    }
}

gameboard.drawBoard();
