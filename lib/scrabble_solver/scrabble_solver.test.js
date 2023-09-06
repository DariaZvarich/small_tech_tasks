const word_checker = require('./scrabble_solver');

describe('Scrabble_solver', () => {
    it('Should return a letter score', () => {
        expect(word_checker('street')).toEqual(6);
    });

    it('If there is no word => return 0', () => {
        expect(word_checker('')).toEqual(0);
    });

    it('if the word contains null => return 0', () => {
        expect(word_checker(null)).toEqual(0);
    });

    it('if there is an other symbols should return 0', () => {
        expect(word_checker('\t\n')).toEqual(0);
    });

    it('should return scores based on the scoreMap', () => {
        expect(word_checker('street')).toEqual(6);
    });

})