import { cardValue } from "./card-value";

/**
 * Updates the scores for the players and displays them in the DOM
 * @param {String} card Example: '2c'
 * @param {Number} score Example: 3
 * @param {NodeListOf<HTMLSpanElement>} span Example: <span>00</span>
 * @returns {Number} Returns the updated score
 */
export const controlScores = ( card, score, span ) => {

    score += cardValue( card );
    span.innerText = score;

    return score;

}