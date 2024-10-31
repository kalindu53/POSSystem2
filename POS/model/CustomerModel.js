export default class CustomerModel {
    constructor(id, first_name, last_name, mobile, email, address) {
        this._id = id;
        this._first_name = first_name;
        this._last_name = last_name;
        this._mobile = mobile;
        this._email = email;
        this._address = address;
    }

    // Getter and Setter for 'id'
    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    // Getter and Setter for 'first_name'
    get first_name() {
        return this._first_name;
    }

    set first_name(first_name) {
        this._first_name = first_name;
    }

    // Getter and Setter for 'last_name'
    get last_name() {
        return this._last_name;
    }

    set last_name(last_name) {
        this._last_name = last_name;
    }

    // Getter and Setter for 'mobile'
    get mobile() {
        return this._mobile;
    }

    set mobile(mobile) {
        this._mobile = mobile;
    }

    // Getter and Setter for 'email'
    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }

    // Getter and Setter for 'address'
    get address() {
        return this._address;
    }

    set address(address) {
        this._address = address;
    }
}

