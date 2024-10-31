export default class ItemModel{
    constructor(id,name,qty,unitprice,date) {
        this._id = id;
        this._name = name;
        this._qty = qty;
        this._unitprice = unitprice;
        this._date = date;


    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
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

    get date() {
        return this._date;
    }

    set date(value) {
        this._date = value;
    }
}