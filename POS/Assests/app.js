$(document).ready(function () {
    let customers = [];
    let items = [];
    let orders = [];

    // Navigation
    $(".nav-btn").click(function () {
        $(".content").removeClass("active");
        const target = $(this).data("target");
        $(target).addClass("active");
    });

    // Add Customer
    $("#add-customer").click(function () {
        const name = $("#customer-name").val();
        const contact = $("#customer-contact").val();
        if (name && contact) {
            customers.push({ name, contact });
            updateCustomerList();
            updateDashboard();
            $("#customer-name, #customer-contact").val("");
        } else {
            alert("Please fill all fields!");
        }
    });

    function updateCustomerList() {
        $("#customer-list").empty();
        $("#customer-select").empty();
        customers.forEach((customer, index) => {
            $("#customer-list").append(`<li>${customer.name} - ${customer.contact}</li>`);
            $("#customer-select").append(`<option value="${index}">${customer.name}</option>`);
        });
    }

    // Add Item
    $("#add-item").click(function () {
        const name = $("#item-name").val();
        const price = $("#item-price").val();
        if (name && price) {
            items.push({ name, price });
            updateItemList();
            updateDashboard();
            $("#item-name, #item-price").val("");
        } else {
            alert("Please fill all fields!");
        }
    });

    function updateItemList() {
        $("#item-list").empty();
        $("#item-select").empty();
        items.forEach((item, index) => {
            $("#item-list").append(`<li>${item.name} - $${item.price}</li>`);
            $("#item-select").append(`<option value="${index}">${item.name}</option>`);
        });
    }

    // Place Order
    $("#place-order").click(function () {
        const customerIndex = $("#customer-select").val();
        const itemIndex = $("#item-select").val();
        const quantity = $("#item-quantity").val();

        if (customerIndex !== null && itemIndex !== null && quantity) {
            const customer = customers[customerIndex];
            const item = items[itemIndex];
            orders.push({ customer, item, quantity });
            updateOrderList();
            updateDashboard();
        } else {
            alert("Please select a customer, item, and quantity!");
        }
    });

    function updateOrderList() {
        $("#order-list").empty();
        orders.forEach(order => {
            $("#order-list").append(
                `<li>${order.customer.name} ordered ${order.quantity} of ${order.item.name}</li>`
            );
        });
    }

    // Update Dashboard
    function updateDashboard() {
        $("#customer-count").text(customers.length);
        $("#item-count").text(items.length);
        $("#order-count").text(orders.length);
    }

    // Initial Load
    $("#dashboard").addClass("active");
});
