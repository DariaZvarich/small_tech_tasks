const direction = require('./minute_walk');

describe('ten minutes walk', () => {
    it('Should return false if length < 10 letters', () => {
        expect(direction(['w', 's'])).toEqual(false);
    });
    it('Should return false if length = 10 letters', () => {
        expect(direction(['w', 's', 'e', 'e', 'n', 'n', 'e', 's', 'w', 'w'])).toEqual(true);
    });
});