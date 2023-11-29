import Carrito from './Carrito';

describe("Testing class Carrito", () => {

    const sushiItem = {
        name: 'Sushi',
        price: 10,
    }
    const waterItem = {
        name: 'Water',
        price: 1.5,
    }
    let carrito;
    
    beforeEach(() => {
        carrito = new Carrito();
    });

    afterEach(() => {
        carrito = undefined;
    })

    describe("Testing getTotalItems()", () => {

        // Carrito without elements at init.
        it("Should return 0 at initialization", () => {
            expect(carrito.getTotalItems()).toEqual(0);
        });
    
        // After adding an element return 1.
        it("Should return 1 after adding 1 product", () => {
            carrito.addItem(sushiItem);
            expect(carrito.getTotalItems()).toEqual(1);
        });
    
        it("Should return 2 after adding 2 items", () => {
            carrito.addItem(sushiItem);
            carrito.addItem(sushiItem);
            expect(carrito.getTotalItems()).toEqual(2);
        });
    
        it("Should return 4 after adding 4 items", () => {
            carrito.addItem(sushiItem);
            carrito.addItem(sushiItem);
            carrito.addItem(sushiItem);
            carrito.addItem(sushiItem);
            expect(carrito.getTotalItems()).toEqual(4);
        });

        it("Should throw an error if an item whithout price is added", () => {
            expect(() => carrito.addItem({name: 'Null Price Item'})).toThrow();
            // Sin el callback no le mola, nos escupe el error directamente.
            // expect(carrito.addItem({name: 'Null Price Item'})).toThrow();
            expect(() => carrito.addItem('Item')).toThrow(); 
        });
        
        it("Should throw an error if the item is not an object", () => {
            expect(() => carrito.addItem('Item')).toThrow();
            expect(() => carrito.addItem('Item')).toThrow();
            expect(() => carrito.addItem(1)).toThrow();
            expect(() => carrito.addItem(true)).toThrow();
            expect(() => carrito.addItem(null)).toThrow();
            expect(() => carrito.addItem()).toThrow();
        });
        
        it("Should throw an error if item not contain name and price", () => {
            expect(() => carrito.addItem({price: 10})).toThrow();
            expect(() => carrito.addItem({name: 'No price'})).toThrow();
            expect(() => carrito.addItem({names: 'No price'})).toThrow();
            expect(() => carrito.addItem({names: 'Error name', price: 10})).toThrow();
            expect(() => carrito.addItem({name: 'Error name', price: 10})).not.toThrow();
        });

        it("Should throw an error saying 'Item must be an object' if item is not an object", () => {
            expect(() => carrito.addItem('Item')).toThrow("Item must be an object");
            expect(() => carrito.addItem(1)).toThrow("Item must be an object");
            expect(() => carrito.addItem(true)).toThrow("Item must be an object");
            expect(() => carrito.addItem(NaN)).toThrow("Item must be an object");
        });

        it("Should throw an error saying 'Item must have price and name' when item not contain name or price", () => {
            expect(() => carrito.addItem({price: 10})).toThrow("Item must have price and name");
            expect(() => carrito.addItem({name: 'No price'})).toThrow("Item must have price and name");
            expect(() => carrito.addItem({names: 'No price'})).toThrow("Item must have price and name");
        });

    });

    describe("Testing getTotalCheckout", () => {
        it("Should return 10 after adding 1 sushiItem", () => {
            carrito.addItem(sushiItem);
            expect(carrito.getTotalCheckout()).toEqual(10);
        });

        it("Should return 20 after adding 2 sushiItem", () => {
            carrito.addItem(sushiItem);
            carrito.addItem(sushiItem);
            expect(carrito.getTotalCheckout()).toEqual(20);
        });

        it("Shoud return 11,5 after adding 1 sushiItem and 1 waterItem", () => {
            carrito.addItem(sushiItem);
            carrito.addItem(waterItem);
            expect(carrito.getTotalCheckout()).toBe(11.5);
        });

        it("Should return 0 if carrito is empty", () => {
            expect(carrito.items.length).toBe(0);
            expect(carrito.getTotalCheckout()).toBe(0);
        })
    });

    describe("Testing addItem", () => {

        it("Should contain the added item in carrito.items array", () => {
            const itemAdded = carrito.addItem(sushiItem);
            expect(carrito.items).toContainEqual(itemAdded);
        })

        it("Should have an empty array in .items when no adding and item", () => {
            expect(carrito.items).toBeEmpty();
            expect(carrito.items).not.toContainEqual(sushiItem);
        });

    });

    describe("Testing removeItem", () => {
        it("Should return an empty array after adding 1 item and removing 1 item", () => {
            const itemAdded = carrito.addItem(sushiItem);
            // Podria haber un error con elementos del mismo nombres
            carrito.removeItem(itemAdded);
            // Son la misma cosa.
            expect(carrito.items.length).toBe(0);
            expect(carrito.items).toHaveLength(0);
        });

        it("Should return an array with one element when adding 2 and removing 1", () => {
            const itemAdded = carrito.addItem(sushiItem);
            const itemAdded2 = carrito.addItem(sushiItem);
            // Podria haber un error con elementos del mismo nombres
            carrito.removeItem(itemAdded);
            // Son la misma cosa.
            expect(carrito.items.length).toBe(1);
            expect(carrito.items).toHaveLength(1);
        });
    });

    describe("Testing elements qt", () => {
        it.todo("Should return one sushiItem with qt property when adding more than one sushiItem");
    });

});