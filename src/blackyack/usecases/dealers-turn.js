import { takeCard, controlScores, displayCard, decideWinner } from './index';

/**
 * Executes the logic for the dealer turn
 * @param {Number} scoreDealer Example: 21
 * @param {Number} minScore Example: 20
 * @param {Array<String>} deck Example: ['2c', '8d', 'at', 'kp']
 * @param {Array<HTMLSpanElement>} spansScores Example: [HTMLSpanElement,...]
 * @param {HTMLDivElement} divDealerCards Example: HTMLDivElement
 * @param {Array<HTMLParagraphElement>} pNamePlayers Example: [HTMLParagrapghElement,...]
 */
export const dealersTurn = ( scoreDealer, minScore, deck, spansScores, divDealerCards, pNamePlayers ) => {

    do {

        const card = takeCard( deck );
        scoreDealer = controlScores( card, scoreDealer, spansScores[0] );
        displayCard( card, divDealerCards );

        if ( minScore > 21 ){
            break;
        }

    } while ( (scoreDealer <= minScore) && ( minScore <= 21 ) );

    decideWinner( scoreDealer, minScore, spansScores, pNamePlayers );

};