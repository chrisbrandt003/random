const {indexOfWeightedValue} = require('./random');

describe('indexOfWeightedValue', () => {
    beforeEach(() => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.4);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('returns the correct index based on weights', () => {
        const valueWeightMap = [
            ['A', 1],
            ['B', 2],
            ['C', 3] 
        ];

        const result = indexOfWeightedValue(valueWeightMap);

        expect(result).toBe(1);
    });

    test('returns index 0 when Math.random is 0', () => {
        Math.random.mockReturnValue(0);

        const valueWeightMap = [
            ['A', 1],
            ['B', 2],
            ['C', 3]
        ];

        const result = indexOfWeightedValue(valueWeightMap);

        expect(result).toBe(0);
    });

    test('returns the last index when Math.random is near 1', () => {
        Math.random.mockReturnValue(0.999);

        const valueWeightMap = [
            ['A', 1],
            ['B', 2],
            ['C', 3]
        ];

        const result = indexOfWeightedValue(valueWeightMap);

        expect(result).toBe(2);
    });

    test('handles single value weight map', () => {
        const valueWeightMap = [['A', 5]];

        const result = indexOfWeightedValue(valueWeightMap);

        expect(result).toBe(0);
    });

    test('returns -1 for an empty weight map', () => {
        const valueWeightMap = [];

        const result = indexOfWeightedValue(valueWeightMap);

        expect(result).toBe(-1);
    });
});