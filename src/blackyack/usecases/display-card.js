/**
 * Creates the cards in the DOM
 * @param {String} card Example: '5t'
 * @param {HTMLDivElement} divContainer Example: <div></div>
 */
export const displayCard = ( card, divContainer ) => {

    /** 
     * we need to create the next HTML structure:
     * <div class="card-container">
     *  <img class="card" src="/assets/sprites/black_back.png" alt="card">
     * </div> 
     */

    const divCard = document.createElement('div');
    const imgCard = document.createElement('img');

    imgCard.src = `/assets/sprites/${ card }.png`;
    imgCard.alt = 'card';
    imgCard.classList.add('card');
    divCard.classList.add('card-container');
    divCard.append( imgCard );
    divCard.classList.add('animate__animated');
    divCard.classList.add('animate__jackInTheBox');
    divContainer.append( divCard );

}