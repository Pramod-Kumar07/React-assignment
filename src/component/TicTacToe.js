import React from "react";
import './TicTacToe.css';
import { useState } from 'react';

function TicTacToe(){

    const [chance, setChance] = useState('X');
    const [cell, setCell] =useState(Array(9).fill(''));
    const [winner, setWinner] = useState('');

    function handleChance(cellNum) {
        
        if(cell[cellNum]!==''){
            return;
        }
        if(chance==='X'){
            cell[cellNum]='X';
            setChance('O');
        }else{
            cell[cellNum]='O';
            setChance('X');
        }

        handelWinner(cell);
    }

    function handelWinner(cell) {
        let combination={
            across:[
                [0,1,2],
                [3,4,5],
                [6,7,8]
            ],
            down: [
                [0,3,6],
                [1,4,7],
                [2,5,8]
            ],
            diagonals: [
                [0,4,8],
                [2,4,6]
            ]
        };

        for(let combo in combination){
            combination[combo].forEach((pattern) => {
                if(
                    cell[pattern[0]]===''||
                    cell[pattern[1]]===''||
                    cell[pattern[2]]===''
                ){
                }else if(
                    cell[pattern[0]] === cell[pattern[1]] &&
                    cell[pattern[1]] === cell[pattern[2]]
                ){
                    setWinner(cell[pattern[0]])
                }
                
            });
        }

    }

    function handelReset(){
        setCell(Array(9).fill(''));
        setWinner('');
    }

    function Box({cellNum}){
            return(
                <div onClick={()=>handleChance(cellNum)} className="box">{cell[cellNum]}</div>
            )
        }

    return(
        <div className="game">
            <h1>The Tic-Tac-Toe Game</h1>
        <div className="container">
            <div className="row1">
                <Box cellNum={0}/>
                <Box cellNum={1} />
                <Box cellNum={2}/>
            </div>
            <div className="row2">
                <Box cellNum={3}/>
                <Box cellNum={4}/>
                <Box cellNum={5}/>
            </div>
            <div className="row3">
                <Box cellNum={6}/>
                <Box cellNum={7}/>
                <Box cellNum={8}/>
            </div>
        </div>
        <p>{chance}'s Chance</p>
        <button onClick={handelReset}>Reset </button>
        <h3>Winner is : {winner}</h3>
        </div>

    )
}

export default TicTacToe;