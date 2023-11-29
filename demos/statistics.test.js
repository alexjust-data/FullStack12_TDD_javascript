import { avg, stDev } from './statistics';

describe("Testing function AVG", () => {

    // [1, 1]
    it("Should return 1 to input array [1, 1]", () => {
        expect(avg([1,1])).toEqual(1);
        expect(avg([1,1])).toBeInteger();
    });
    
    it("Should return an integer to input of equal numbers", () => {
        expect(avg([2,2])).toBeInteger();
        expect(avg([10,10, 10])).toBeInteger();

    });

    // [];
    it("Should return NaN to input array []", () => {
        // Ambas comprovaciones son iguales.
        expect(avg([])).toBe(NaN);
        expect(avg([])).toBeNaN();
    });

    // Positive numbers
    it("Should return a positive number from any imput array with positive values", () => {
        expect(avg([1,2,3])).toBePositive();
        expect(avg([1,2,3])).toBeWithin(1,3);
        expect(avg([1,2,2,4])).toBePositive();
        expect(avg([1,2,2,4, 0.1])).toBePositive();
        expect(avg([0.1, 0.000001, 0.3])).toBePositive();
    });
    
    it("Should return a negative number from any input array with negative values", () => {
        expect(avg([-1,-2,-3])).toBeNegative();
        expect(avg([-1,-2,-2,-4])).toBeNegative();
    })
    
})

describe("Testing function stDev", () => {

    it("Should return 0 to input array [1, 1]", () => {
        expect(stDev([1, 1])).toEqual(0);
    });

    // stDev 1, 2, 3 -> 0.81649658092773
    it("Should return 0.816496 to input [1, 2, 3]", () => {
        expect(stDev([1, 2, 3])).toBeCloseTo(0.816496);
    })

});