import _ from 'underscore';

/**
 * Creates a randomized deck
 * @param {Array<String>} types Example: ['c', 'd', 't', 'p']
 * @param {Array<String>} specialCards Example: ['a', 'j', 'q', 'k']
 * @returns {Array<String>} Returns a new randomized deck
 */
export const createDeck = ( types, specialCards ) => {

    if( !types || types.length === 0 )
        throw new Error('types is required as an Array<String>.');

    if( !specialCards || specialCards.length === 0 )
        throw new Error('specialCards is required as an Array<String>.');
      
    let deck = [];

    // push the numeric cards (2-10) to the deck
    for( let i = 2; i <= 10; i++ ){
        for( let type of types ){
            deck.push( i + type );
        }
    }

    // push the special cards (a, j, q, k) to the deck
    for( let special of specialCards ){
        for( let type of types ){
            deck.push( special + type );
        }
    }

    return _.shuffle( deck ); // shuffle from underscore.js randomized our array

};