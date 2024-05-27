import {useEffect, useState} from 'react';
 import './App.css';
import {useNavigate} from "react-router-dom";
const NUM_ROWS = 6;
const NUM_COLS = 7;

const createEmptyBoard = () => {
    const board = [];
    for (let i = 0; i < NUM_ROWS; i++) {
        board.push(Array(NUM_COLS).fill(null));
    }
    return board;
};
const getInitialMode = () => {
    const savedMode = localStorage.getItem("mode");
    return savedMode ? savedMode : '4';
};

const App = () => {
    const [board, setBoard] = useState(createEmptyBoard());
    const [currentPlayer, setCurrentPlayer] = useState('Red');
    const [winner, setWinner] = useState(null);
    const [mode, setMode] = useState(getInitialMode);
    const navigate = useNavigate();




    useEffect(() => {
        localStorage.setItem("mode", mode);
    }, [mode]);



    const handleClick = (col) => {
        if (winner) return;
        const newBoard = board.map(row => [...row]);
        for (let row = NUM_ROWS - 1; row >= 0; row--) {
            if (!newBoard[row][col]) {
                newBoard[row][col] = currentPlayer;
                break;
            }
        }
        setBoard(newBoard);
        setCurrentPlayer(currentPlayer === 'Red' ? 'Yellow' : 'Red');
        const currentWinner = checkWinner(newBoard);
        setWinner(currentWinner);
        if (isBoardFull(newBoard) && !currentWinner) {
            document.getElementById("restart").style.display = "flex";
        }
    };

    const isBoardFull = (board) => {
        for (let row = 0; row < NUM_ROWS; row++) {
            for (let col = 0; col < NUM_COLS; col++) {
                if (!board[row][col]) {
                    return false;
                }
            }
        }
        return true;
    };

    const renderCell = (cell, rowIdx, colIdx) => {
        const cellClass = cell ? cell.toLowerCase() : '';
        return (
            <div
                key={`${rowIdx}-${colIdx}`}
                style={{ backgroundColor: "white" }}
                className={`cell ${cellClass}${mode}`}
                onClick={() => handleClick(colIdx)}
                data-testid={`column-${colIdx}`}
            ></div>
        );
    };

    const renderRow = (row, rowIdx) => {
        return (
            <div key={rowIdx} className="row">
                {row.map((cell, colIdx) => renderCell(cell, rowIdx, colIdx))}
            </div>
        );
    };

    const restartGame = () => {
        setBoard(createEmptyBoard());
        document.getElementById("restart").style.display="none";
        winner2 = null;
        document.getElementById("board").style.pointerEvents="auto";
        setCurrentPlayer('Red');
        setWinner(null);
    };

    const checkWinner = () => {
        // Horizontal, vertical and diagonal checks
        const directions = [
            { x: 1, y: 0 }, // Horizontal
            { x: 0, y: 1 }, // Vertical
            { x: 1, y: 1 }, // Diagonal down-right
            { x: 1, y: -1 } // Diagonal up-right
        ];

        for (let row = 0; row < NUM_ROWS; row++) {
            for (let col = 0; col < NUM_COLS; col++) {
                const player = board[row][col];
                if (player) {
                    for (let { x, y } of directions) {
                        let count = 0;
                        for (let i = 0; i < 4; i++) {
                            const newRow = row + y * i;
                            const newCol = col + x * i;
                            if (
                                newRow >= 0 &&
                                newRow < NUM_ROWS &&
                                newCol >= 0 &&
                                newCol < NUM_COLS &&
                                board[newRow][newCol] === player
                            ) {
                                count++;
                            }
                        }
                        if (count === 4) {
                            document.getElementById("board").style.pointerEvents="none";
                            document.getElementById("restart").style.display="flex";
                            return player;
                        }
                    }
                }
            }
        }
        return null;
    };


    let winner2 = checkWinner();
    return (
        <>
            <button className="navButton" onClick={() => navigate("/settings")}>Settings</button>
            <div className="AppContainer">
                <div className="App">
                    <h1>Connect 4</h1>
                    <div id="board" className="board">
                        {board.map((row, rowIdx) => renderRow(row, rowIdx))}
                    </div>
                    {winner2 && <h2>{winner2} wins!</h2>}
                    <div id="restart" className="restart">
                        <button onClick={restartGame} className="restart-btn">Restart Game</button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default App;
