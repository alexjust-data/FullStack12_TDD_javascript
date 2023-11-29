module.exports = class Carrito {

    items = [];

    getTotalItems() {
        return this.items.length;
    }

    checkItem(item) {
        if (typeof item !== 'object') {
            throw new Error("Item must be an object");
        }
        if (!item.price || !item.name) {
            throw new Error("Item must have price and name");
        }
    }

    addItem(item) {
        this.checkItem(item);
        const id = Math.max(this.items.map(item => item.id)) + 1;
        const newItem = {
            ...item,
            id
        }
        this.items.push(newItem);
        return newItem;
    }

    getTotalCheckout() {
        return this.items.reduce((pre, cur) => pre += cur.price, 0);
    }

    removeItem(item) {
        this.items = this.items.filter(element => element.id !== item.id);
    }
};