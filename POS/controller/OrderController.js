import {customer_array, order_array} from "../db/database.js";
import {item_array} from "../db/database.js";
import OrderModel   from "../model/OrderModel.js";
import {cartItems} from "../db/database.js";
//
// const loadOrderTable = () =>{
//     $("#orderTableBody").empty();
//     order_array.map((item, ) =>{
//             let data =  `<tr><td>${item.item}</td><td>${item.qty}</td><td>${item.unitprice}</td><td>${item.price}</td><td>${item.date}</td></tr>`
//
//         $("#orderTableBody").append(data);
//
//         })
// }
//
// // add to cart button
//
//
// $("#addItemtoOrder").on("click",function (){
//     let Item = $("#item-select").val();
//     let qty = $("#Orderquantity").val();
//     let unitprice = 100;
//     let price = 200;
//     let date = $ ("#OrderDate").val();
//
//     let item = item_array[Item];
//
//
//
//     console.log("item",Item);
//     console.log("qty",qty)
//     console.log("date",date);
//
//     let order = new OrderModel(
//         order_array.length+1,
//         item,
//         qty,
//         unitprice,
//         price,
//         date
//     )
//     order_array.push(order);
//     loadOrderTable();
// })

// Assuming customer_array, item_array, order_array, and cartItems are imported from the database.js file
// import { customer_array, item_array, order_array, cartItems } from './database.js';

// DOM Elements
const customerSelect = document.getElementById("customerSelect");
const itemSelect = document.getElementById("ItemSelect");
const quantityInput = document.getElementById("Orderquantity");
const orderDate = document.getElementById("OrderDate");
const addItemToCartButton = document.getElementById("addItemtoOrder");
const placeOrderButton = document.getElementById("PlaceOrder");
const orderTableBody = document.getElementById("orderTableBody");

// Item Form
const itemNameInput = document.getElementById("inputname");
const itemQuantityInput = document.getElementById("inputqty");
const itemUnitPriceInput = document.getElementById("inputUnitprice");
const itemDateInput = document.getElementById("inputdate");
const addItemButton = document.getElementById("item_Add_btn");


function populateSelectors() {
    customerSelect.innerHTML = `<option value="">Select Customer</option>`;
    itemSelect.innerHTML = `<option value="">Select Item</option>`;

    customer_array.forEach(customer => {
        const option = document.createElement("option");
        option.value = customer.id;
        option.textContent = customer.name;
        customerSelect.appendChild(option);
    });

    item_array.forEach(item => {
        const option = document.createElement("option");
        option.value = item.id;
        option.textContent = item.name;
        itemSelect.appendChild(option);
    });
}

function clearItemForm() {
    itemNameInput.value = '';
    itemQuantityInput.value = '';
    itemUnitPriceInput.value = '';
    itemDateInput.value = '';
}

function clearOrderForm() {
    itemSelect.value = '';
    quantityInput.value = '';
    orderDate.value = '';
}

function updateOrderTable() {
    orderTableBody.innerHTML = '';
    cartItems.forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.item}</td>
            <td>${item.qty}</td>
            <td>${item.unitPrice}</td>
            <td>${item.price}</td>
            <td>${item.date}</td>
        `;
        orderTableBody.appendChild(row);
    });
}


itemSelect.addEventListener("change", function () {
    const selectedItem = item_array.find(item => item.id === itemSelect.value);
    if (selectedItem) {
        itemNameInput.value = selectedItem.name;
        itemQuantityInput.value = selectedItem.qty;
        itemUnitPriceInput.value = selectedItem.unitPrice;
        itemDateInput.value = selectedItem.date;
    }
});

addItemButton.addEventListener("click", function () {
    const newItem = {
        id: `item-${item_array.length + 1}`,
        name: itemNameInput.value,
        qty: parseInt(itemQuantityInput.value),
        unitPrice: parseFloat(itemUnitPriceInput.value),
        date: itemDateInput.value,
    };

    if (!newItem.name || !newItem.qty || !newItem.unitPrice || !newItem.date) {
        alert("Please fill out all item fields.");
        return;
    }

    item_array.push(newItem);
    populateSelectors();
    alert("Item added successfully!");
    clearItemForm();
});

addItemToCartButton.addEventListener("click", function () {
    const selectedItem = item_array.find(item => item.id === itemSelect.value);
    const quantity = parseInt(quantityInput.value);
    const date = orderDate.value;

    if (!selectedItem || isNaN(quantity) || quantity <= 0) {
        alert("Please select an item and enter a valid quantity.");
        return;
    }

    const cartItem = {
        item: selectedItem.name,
        qty: quantity,
        unitPrice: selectedItem.unitPrice,
        price: selectedItem.unitPrice * quantity,
        date: date,
    };

    cartItems.push(cartItem);
    updateOrderTable();
    clearOrderForm();
});

placeOrderButton.addEventListener("click", function () {
    if (!customerSelect.value || cartItems.length === 0) {
        alert("Please select a customer and add items to the cart.");
        return;
    }

    const newOrder = {
        id: `order-${order_array.length + 1}`,
        customer: customerSelect.value,
        items: [...cartItems],
        date: new Date().toISOString(),
    };

    order_array.push(newOrder);
    alert("Order placed successfully!");
    cartItems.length = 0;
    updateOrderTable();
});


populateSelectors();
