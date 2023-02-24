import swal from 'sweetalert';

import { createDeck, takeCard, controlScores, displayCard, dealersTurn } from './usecases';

/**
 * auto-invocated anonym fuction
 * this is for Module Pattern
 */
const module = (() => {

  'use strict' // with this isntruction we ask to JS to evaluate on strict way the code
  
  /**
   * c: corazones/hearts
   * d: diamantes/diamonds
   * t: treboles/clubs
   * p: picas/spades
   * a: as/ace
   * j: jota/jack
   * q: reina/queen
   * k: rey/king
   */

  // variables
  let deck = [];
  
  const types = ['c', 'd', 't', 'p'],
        specialCards = ['a', 'j', 'q', 'k'];
  
  let scorePlayer = 0,
      scoreDealer = 0;

  // DOM references
  const aHowToPlay = document.querySelector('a'),
        btnNewGame = document.querySelector('#new-game'),
        btnHit = document.querySelector('#hit'),
        btnStay = document.querySelector('#stay'),
        pNamePlayers = document.querySelectorAll('p'),
        spansScores = document.querySelectorAll('span'),
        divDealerCards = document.querySelector('#dealer-cards'),
        divPlayerCards = document.querySelector('#player-cards');

  deck = createDeck( types, specialCards );

  // aLink click: displays a modal with the instructions about how to play the game 
  aHowToPlay.addEventListener('click', () => {
      swal({
          title: 'How to play?',
          text: "The objective of the game is to get a set of cards in which the sum must be 21 points. You can get as close as possible without bursting. If you get over 21 points the dealer's turn gonna start automatically.\n\n\rIf the dealer has 21 points or less but you have less points than the dealer, you lose.\n\n\rThe numbered cards correspond to their respective value. For the cards with letters, the situation changes a little, J, Q and K cards are worth 10 points and A card has a value of 11.\n\n\rWhen you start a new game, you will could take cards clicking in 'Hit' and decide if you want to keep the amount of points that you received clicking in 'Stay'.",
          button: false
      });
  })

  // btnHit click: take cards until hit the 21, loses the game or do click on stay button
  btnHit.addEventListener('click', () => {
      
      const card = takeCard( deck );
      scorePlayer = controlScores( card, scorePlayer, spansScores[1] );
      displayCard( card, divPlayerCards );

      if ( scorePlayer > 21 ){
          // player loses
          spansScores[1].style.color = 'red';
          spansScores[1].style.textDecoration = 'line-through';
          pNamePlayers[1].style.color = 'red';
          pNamePlayers[1].style.textDecoration = 'line-through';
          btnHit.style.display = 'none';
          btnStay.style.display = 'none';
          btnNewGame.style.display = 'block';
          dealersTurn( scoreDealer, scorePlayer, deck, spansScores, divDealerCards, pNamePlayers ); // its dealer turn
      } else if ( scorePlayer === 21 ) {
          // the player almost win
          btnHit.style.display = 'none';
          btnStay.style.display = 'none';
          btnNewGame.style.display = 'block';
          dealersTurn( scoreDealer, scorePlayer, deck, spansScores, divDealerCards, pNamePlayers ); // its dealer turn
      }

  });

  // btnStay click: ends the player turn and start the dealer turn
  btnStay.addEventListener('click', () => {

      btnHit.style.display = 'none';
      btnStay.style.display = 'none';
      btnNewGame.style.display = 'block';

      dealersTurn( scoreDealer, scorePlayer, deck, spansScores, divDealerCards, pNamePlayers ); // its dealers turn

  });

  // btnNewGame click: reset the game and start a new one
  btnNewGame.addEventListener('click', () => {

      // reset values
      scorePlayer = 0, scoreDealer = 0;
      deck = [];
      deck = createDeck( types, specialCards );

      // reset DOM
      spansScores.forEach( span => {
          span.innerText = '00';
          span.style.color = '#ffffff';
          span.style.textDecoration = 'none';
      });

      pNamePlayers.forEach( p => {
          p.style.color = '#ffffff';
          p.style.textDecoration = 'none';
      });

      divDealerCards.innerHTML = '';
      divPlayerCards.innerHTML = '';

      btnHit.style.display = 'block';
      btnStay.style.display = 'block';
      btnNewGame.style.display = 'none';

  });

  /**
   * we use the return at the end of the module to export functions or variables
   * that we want to make global or public
   */
  return {};

})();