import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

/**
 * ref() are state properties
 * computed() are getters
 * functions are actions()
 */

export const useGameStore = defineStore('game',() => {
  const playerName = ref("Player");
  const playerScore = ref(0);
  const computerScore = ref(0);
  const moveOptions = ref(["rock", "paper", "scissor"]);
  const playerMove = ref("");
  const computerMove = ref("");
  const winner = ref("");

  const playerWon = () => {
    winner.value = `${playerName.value} won!`;
    playerScore.value += 1;
  }
  
  const computerWon = () => {
    winner.value = `Computer won!`;
    computerScore.value += 1;
  };

  // set player's name 
  const setPlayerName = (e) => {
    playerName.value = e.target.value;
  }

  const playGame = () => {
    if(playerMove.value === 'rock'){
      if(computerMove.value === 'scissor') playerWon();
      else if(computerMove.value === 'rock') winner.value = `It's a tie!`;
      else computerWon();
    }
    if(playerMove.value === 'scissor'){
      if(computerMove.value === 'paper') playerWon()
      else if(computerMove.value === 'scissor') winner.value = "It's a tie!"
      else computerWon();
    }
    if(playerMove.value === 'paper'){
      if(computerMove.value === 'rock') playerWon();
      else if(computerMove.value === 'paper') winner.value = "It's a tie!"
      else computerWon();
    }
  }

  // set player's move; "rock", "paper", "scissors"
  const playerChosenMove = (e) => {
    playerMove.value = e.target.value;
  }

  // randomly sets computer move given an arr of "rock", "paper", "scissors"
  const randomComputerMove = () => {
    // **TODO: Research Fisher-Yates shuffle
    // let shuffledArr = moveOptions.value.reduce(([a,b])=>
    //   (b.push(...a.splice(Math.random()*a.length|0, 1)), [a,b]),[[...moveOptions.value],[]])[1];

    const randomIndex = Math.floor(Math.random() * 3);
    computerMove.value = moveOptions.value[randomIndex];
  }

  // reset game by clearing players name, players score and name, computers score and name
  const resetGame = () => {
    playerName.value = "Player";
    playerScore.value = 0;
    computerScore.value = 0;
    playerMove.value = "";
    computerMove.value = "";
    winner.value = "";
  }

  return {
     playerScore,
     computerScore, 
     playerWon, 
     computerWon,
     computerMove,
     playerMove,
     moveOptions,
     playerName,
     setPlayerName,
     playerChosenMove,
     randomComputerMove,
     playGame,
     resetGame,
     winner
     }
})
