import ItemModel from "../model/ItemModel.js";

import {item_array} from "../db/database.js";

const loadItemTable = () => {
    $("#ItemTablebody").empty();
    item_array.map((item, index ) => {
        console.log(item);
        let data  =`<tr><td>${item.name}</td><td>${item.qty}</td><td>${item.unitprice}</td><td>${item.date}</td></tr>`
        console.log("data" , data)
        $("#ItemTablebody").append(data);
        $("#ItemSelect").append(`<option value="${index}">${item.name}</option>`);
    })

}


// add

$("#item_Add_btn").on("click",function (){
    console.log("itemclick");

    let name = $("#inputname").val();
    let qty = $("#inputqty").val();
    let price = $("#inputUnitprice").val();
    let date = $("#inputdate").val();


    console.log(name);
    console.log(qty);
    console.log(price);
    console.log(date);


    let item= new ItemModel(
        item_array.length+1,
        name,
        qty,
        price,
        date
    )
    item_array.push(item);

    loadItemTable();
});