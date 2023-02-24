/**
 * Gives a value to the different cards of the deck
 * @param {String} card Example: '2c'
 * @returns {Number} Returns the value of the card
 */
export const cardValue = ( card ) => {

    if ( !card ) throw new Error('card is required as a <String>');
      
    const value = card.substring(0, card.length -1);
    return ( isNaN(value) ) ? 
             ( value === 'a' ) ? 11 : 10
           : value * 1;
    
};