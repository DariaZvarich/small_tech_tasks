const direction = require('./minute_walk');

describe('ten minutes walk', () => {
    it('Should return false if length < 10 letters', () => {
        expect(direction(['w', 's'])).toEqual(false);
    });
    it('Should return false if length = 10 letters', () => {
        expect(direction(['w', 's', 'e', 'e', 'n', 'n', 'e', 's', 'w', 'w'])).toEqual(true);
    });
    it('Should return false if the route doesnt return to the starting point', () => {
        expect(direction(['w', 's', 'e', 's', 's', 'e', 's', 'w', 'n', 'n'])).toEqual(false);
    });

    it('Should return true for a valid walk', () => {
        const validWalk = ['n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n', 's'];
        expect(direction(validWalk)).toEqual(true);
    });

    it('Should return true for a valid walk 2', () => {
        const validWalk = ['w', 's', 'e', 'e', 'n', 'n', 'e', 's', 'w', 'w'];
        expect(direction(validWalk)).toEqual(true);
    });

});
