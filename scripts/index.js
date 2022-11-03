"use strict";

//one object with three properties, each containing an array with different 
//# of elements and just strings
let menu = {
    drinks: [
        "Water", "Tea", "Sweet Tea",
        "Coke", "Dr. Pepper", "Sprite"
    ],
    entrees: [
        "Hamburger w/ Fries",
        "Grilled Cheese w/ Tater Tots",
        "Grilled Chicken w/ Veggies",
        "Chicken Fried Steak w/ Mashed Potatoes",
        "Fried Shrimp w/ Coleslaw",
        "Veggie Plate"
    ],
    desserts: [
        "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
    ]
};
let menuItems = [ "Drinks", "Entrees", "Desserts"];
//anonymous way; when window loads execute the code block/function
window.onload = function () {
 
    createCategories();
    //get the dropdown, have an event handler for when it's changed
    const getCategories = document.getElementById("categories");
    getCategories.onchange = displayOptions;
}

function createCategories() {
    const getCategories = document.getElementById("categories");
    let length = menuItems.length;

    for (let i = 0; i < length; i++) {
        let item = menuItems[i];
        let createOption = new Option(item, item.toLowerCase());
        getCategories.appendChild(createOption);
    }
}

//based on the value of the dropdown, it'll tell us which propert to go to
//once we test for property == value, then we create the options of the listbox
function displayOptions() {
    const itemSelected = document.getElementById("categories").value;
    const getListbox = document.getElementById("displayOptions");
    const test = document.getElementById("test");
    if (itemSelected == "drinks"){
        let drinks = menu.drinks;
        let length = drinks.length;
        getListbox.length = 0;
        for(let i = 0; i < length; i++){
            let createOption = new Option(drinks[i], drinks[i].toLowerCase());
            getListbox.appendChild(createOption);
        }
    }
    else if(itemSelected == "entrees"){
        let entrees = menu.entrees;
        let length = entrees.length;
        getListbox.length = 0;
        for(let i = 0; i < length; i++){
            let createOption = new Option(entrees[i], entrees[i].toLowerCase());
            getListbox.appendChild(createOption);
        }
    }
    else if(itemSelected == "desserts"){
        let desserts = menu.desserts;
        let length = desserts.length;
        getListbox.length = 0;
        for(let i = 0; i < length; i++){
            let createOption = new Option(desserts[i], desserts[i].toLowerCase());
            getListbox.appendChild(createOption);
        }
    }
    
}