
import CustomerModel  from "../model/CustomerModel.js";

// customer array

import {customer_array,item_array,order_array} from "../db/database.js";

// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//
// const sriLankanMobileRegex = /^(?:\+94|0)?7[0-9]{8}$/;


const loadCustomerTable = () => {
    $("#customerTableBody").empty();
    customer_array.map((item, index) => {
        console.log(item);
        let data = `<tr><td>${item.first_name}</td><td>${item.last_name}</td><td>${item.mobile}</td><td>${item.email}</td><td>${item.address}</td></tr>`
        // console.log("data",data)
        $("#customerTableBody").append(data);
        $("#customerSelect").append(`<option value="${index}">${item.first_name}</option>`);
    })
}


// Add Customer Button
$("#customer_add_btn").on("click", function () {
    let first_name = $('#firstName').val(); //empty
    let last_name = $('#lastName').val();  //empty
    let mobile = $('#mobile').val();     //empty/format
    let email = $('#email').val();     //empty/format
    let address = $('#address').val();  //empty


    const validEmail = (email) =>{
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }
    const validMobile = (mobile) =>{
        const sriLankanMobileRegex = /^(?:\+94|0)?7[0-9]{8}$/;
        return sriLankanMobileRegex.test(mobile);
    }


    console.log("first_name: ", first_name);
    console.log("last_name: ", last_name);
    console.log("mobile: ", mobile);
    console.log("email: ", email);
    console.log("address: ", address);

    if (first_name.length ===0) {
        Swal.fire("Empty firstname !");
    }else if(last_name.length===0){
        alert("invalid last name!");
    }else if(!validEmail(email)){
        alert("Invalid email!");
    }else if(!validMobile(mobile)){
        alert("Invalid mobile!");
    }else if(address.length===0){
        alert("Invalid address!");
    }else {

        let customer = new CustomerModel(
            customer_array.length+1,
            first_name,
            last_name,
            mobile,
            email,
            address
        )

        customer_array.push(customer);

        // clean customer form
        clean_form();


        loadCustomerTable();


    }

});


let customer_select;
$('tbody').on('click', 'tr', function () {
    let index = $(this).index();
    console.log(index);
    customer_select = index;


    let customer_obj = customer_array[index];
    console.log('clicked');
    console.log(customer_obj)

    let first_name = customer_obj.first_name;
    let last_name = customer_obj.last_name;
    let email = customer_obj.email;
    let mobile = customer_obj.mobile;
    let address = customer_obj.address;


    console.log(first_name);
    console.log(last_name);
    console.log(email);

    $('#firstName').val(first_name);
    $('#lastName').val(last_name);
    $('#email').val(email);
    $('#mobile').val(mobile);
    $('#address').val(address);


})


$('#customerTableBody').on('click', 'tr', function () {
    // get tr index
    let index = $(this).index();
    // customer_select= index();

    // get customer object by index
    let customer_obj = customer_array[index];

    // get customer's data
    let first_name = customer_obj.first_name;
    let last_name = customer_obj.last_name;
    let email = customer_obj.email;
    let mobile = customer_obj.mobile;
    let address = customer_obj.address;

    // fill data into the form
    $('#firstName').val(first_name);
    $('#lastName').val(last_name);
    $('#email').val(email);
    $('#mobile').val(mobile);
    $('#address').val(address);
});
// updat

$("#customer_update_btn").on('click', function () {
    let first_name = $('#firstName').val();
    let last_name = $('#lastName').val();
    let mobile = $('#mobile').val();
    let email = $('#email').val();
    let address = $('#address').val();


    let customer = {
        id: customer_select,
        first_name: first_name,
        last_name: last_name,
        mobile: mobile,
        email: email,
        address: address
    };

    customer_array[customer_select] = customer;

    loadCustomerTable();
    customer_array.push(customer);
    clean_form();


});


// delete
$("#customer_delete_btn").on('click', function () {



    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {

            let index = customer_select;


            customer_array.splice(index, 1);
            loadCustomerTable();
            clean_form();

            Swal.fire({


                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });

        }
    });



});

const clean_form = () => {
    $("#firstName").val("");
    $("#lastName").val("");
    $("#email").val("");
    $("#mobile").val("");
    $("#address").val("")
}

