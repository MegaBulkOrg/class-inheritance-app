class Goods {
    constructor(title, price, shop) {
        this.title = title;
        this.price = price;
        this.shop = shop;
    }
    showInfo() {
        console.log(`${this.title} - ${this.price} - ${this.shop}`)
    }
    showText(txt) {
        return txt
    }
}
class Food extends Goods {
    constructor (bestBefore) {
        super();
        this.bestBefore = bestBefore;
    }
    get asd() {
        return `Всем привет!`
    }
    get qaz() {
        return `Всем пока!`
    }
}
export default class Fish extends Food {
    constructor () {
        super();
    }
}