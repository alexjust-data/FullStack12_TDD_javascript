import sumAge from './sumAge';

describe("Suma age a objeto", () => {

    const demoUser = { age: 2 };

    it("sumamos 1 a la edad de un objeto con age 2", () => {
        expect(sumAge(demoUser, 1)).toEqual({age:3});
    });

    // Restamos un año
    it("restamos un año a un objeto con age 2", () => {
        expect(sumAge(demoUser, -1)).toEqual({age: 1});
    })

    // Sumamos 0
    it("sumamos 0 a un objeto con age 2", () => {
        expect(sumAge(demoUser, 0)).toEqual({age: 2});
    })

    // Sumamos una letra a age
    it("sumamos 'a' a un objeto con age 2", () => {
        expect(sumAge(demoUser, 'a')).toEqual({age: 2});
    });

});