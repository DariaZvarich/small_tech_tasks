const get_middle = require('./middle');

describe ('Middle letter', () => {
    it('should return a 1 middle letters for odd number', () => {
        const word = get_middle('hello');
        expect(word).toBe('l');
    });

    it('should return a 2 middle letters for even number', () => {
        const word = get_middle('Lola');
        expect(word).toBe('ol');
    });
});

