import sum from './sum';

describe("Fumcoón suma", () => {

    afterAll(() => {
        console.log("TEST INIT");
    })

    beforeAll(() => {
        console.log("TEST FINAL");
    })

    it("suma 1 y 1 es 2", () => {
        expect(sum(1,1,)).toBe(2);
    });

    describe("Suma de numeros enteros", ()=> {
        describe("Suma numeros positivos", () => {
            it('adds 1 + 2 to equal 3', () => {
              expect(sum(1, 2)).toBe(3);
            });
            
            it('suma 3 y 4 es 7', () => {
                expect(sum(3, 4)).toBe(7);
            });
        })
    
        describe("Suma con negativos", () => {
            
            it("suma 2 y -3 es -1", () => {
                expect(sum(2, -3)).toBe(-1);
            });
        });
    })

    describe("Suma de numeros decimales", () => {
        it("Should return 0.3 when add 0.1 and 0.2", () => {
            // Nos sirve para trabajar con numeros flotantes
            expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
        })
        it("Should return 0.3 when add 0.00001 to 0.3", () => {
            expect(sum(0.3, 0.00001)).toBeCloseTo(0.3, 3);
            expect(sum(0.3, 0.00001)).not.toBeCloseTo(0.3, 6);
        })
    })

    
    describe("Operaciones con otros tipos", () => {
        test.todo("Sumar numeros con letras");
    })

})