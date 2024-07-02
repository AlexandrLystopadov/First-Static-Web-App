const { incrementCount } = require('scripts');

describe('incrementCount', () => {
    test('should increment count by 1', () => {
        let initialCount = 0;
        let result = incrementCount();
        expect(result).toBe(initialCount + 1);
    });
});
