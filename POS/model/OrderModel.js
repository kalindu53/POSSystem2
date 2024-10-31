export default class OrderModel{
    constructor(id,item,qty,unitprice,price,date) {
        this._id = id;
        this._item = item;
        this._qty = qty;
        this._unitprice = unitprice;
        this._price = price;
        this._date = date;


    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get item() {
        return this._item;
    }

    set item(value) {
        this._item = value;
    }

    get qty() {
        return this._qty;
    }

    set qty(value) {
        this._qty = value;
    }

    get unitprice() {
        return this._unitprice;
    }

    set unitprice(value) {
        this._unitprice = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get date() {
        return this._date;
    }

    set date(value) {
        this._date = value;
    }
}