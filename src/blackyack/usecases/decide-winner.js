import swal from 'sweetalert';

/**
 * Determinates the winner
 * @param {Number} dealer Example: 10
 * @param {Number} player Example: 21
 * @param {Array<HTMLSpanElement>} spansScores Example: [HTMLSpanElement,...]
 * @param {Array<HTMLParagraphElement>} pNamePlayer Example: [HTMLParagraphElement,...]
 */
export const decideWinner = ( dealer, player, spansScores, pNamePlayer ) => {

    // who won?
    setTimeout(() => {
        if ( ((dealer > player) && (dealer <= 21)) || ((dealer < player) && (dealer <= 21))){
            // dealer won
            spansScores[1].style.color = 'red';
            spansScores[1].style.textDecoration = 'line-through';
            pNamePlayer[1].style.color = 'red';
            pNamePlayer[1].style.textDecoration = 'line-through';
            swal({
                text: 'You lose  :[',
                button: false,
            });
        } else if( dealer === player ) {
            // nobody won
            swal({
                text: 'TIE  :o',
                button: false,
            });
        } else {
            // player won
            spansScores[0].style.color = 'red';
            spansScores[0].style.textDecoration = 'line-through';
            pNamePlayer[0].style.color = 'red';
            pNamePlayer[0].style.textDecoration = 'line-through';
            swal({
                text: 'You win  :]',
                button: false,
            });
        }
    }, 1000);

}