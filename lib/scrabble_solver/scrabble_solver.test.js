const word_checker = require('./scrabble_solver');

describe('Scrabble_solver', () => {
    it('Should contain one word', () => {
        expect(word_checker('street')).toEqual('street');
    });

    it('If there is no word => return 0', () => {
        expect(word_checker('')).toEqual(0);
    });

    it('if the word contains null => return 0', () => {
        expect(word_checker(null)).toEqual(0);
    });
})