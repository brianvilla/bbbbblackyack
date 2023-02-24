/**
 * Gives us the last card of the deck
 * @param {Array<String>} deck Example: ['2c', '8d', '9t', '4p']
 * @returns {String} Returns the last card of the deck
 */
export const takeCard = ( deck ) => {
      
    if ( !deck || deck.length === 0 ) throw new Error('deck is required as an Array<String>');
    
    return deck.pop();

};