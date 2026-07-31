const button = document.getElementById("todo-button");
const todoList = document.querySelector(".todo-list");

button.addEventListener("click", function () {

    if (todoList.style.display === "block") {
        todoList.style.display = "none";
    } else {
        todoList.style.display = "block";
    }

});

const breakfastMon = document.getElementById("breakfast-mon");
const breakfastMenu = document.getElementById("breakfast-menu");

const breakfastTue = document.getElementById("breakfast-tue");
const breakfastMenuTue = document.getElementById("breakfast-menu-tue");

const breakfastWed = document.getElementById("breakfast-wed");
const breakfastMenuWed = document.getElementById("breakfast-menu-wed");

let breakfastItems = [];
let breakfastItemsTue = [];
let breakfastItemsWed = [];


breakfastMon.addEventListener("click", function () {

    breakfastMenu.style.display = "block";
});

breakfastTue.addEventListener("click", function () {

    breakfastMenuTue.style.display = "block";
});

breakfastWed.addEventListener("click", function () {

    breakfastMenuWed.style.display = "block";
});


const breadOption = document.getElementById("bread-option");

const breakfastOptions =
    document.querySelectorAll("#breakfast-menu div:not(#back-option):not(#done-option)");  

const breakfastOptionsTue =
    document.querySelectorAll("#breakfast-menu-tue div:not(#back-option-tue):not(#done-option-tue)");

const breakfastOptionsWed =
    document.querySelectorAll("#breakfast-menu-wed div:not(#back-option-wed):not(#done-option-wed)");  


breakfastOptions.forEach(function(option) {

    option.addEventListener("click", function() {

        const emoji = option.textContent.split(" ")[0];

        if (emoji === "✔") {
            breakfastMenu.style.display = "none";
            return;
        }

        if (breakfastItems.length < 3) {

            breakfastItems.push(emoji);

            breakfastMon.textContent = breakfastItems.join("");

        }

    });

});

breakfastOptionsTue.forEach(function(option) {

    option.addEventListener("click", function() {

        const emoji = option.textContent.split(" ")[0];

        if (emoji === "✔") {
            breakfastMenuTue.style.display = "none";
            return;
        }

        if (breakfastItemsTue.length < 3) {

            breakfastItemsTue.push(emoji);

            breakfastTue.textContent = breakfastItemsTue.join("");

        }

    });

});

breakfastOptionsWed.forEach(function(option) {

    option.addEventListener("click", function() {

        const emoji = option.textContent.split(" ")[0];

        if (emoji === "✔") {
            breakfastMenuWed.style.display = "none";
            return;
        }

        if (breakfastItemsWed.length < 3) {

            breakfastItemsWed.push(emoji);

            breakfastWed.textContent = breakfastItemsWed.join("");

        }

    });

});

const doneOption = document.getElementById("done-option");
const backOption = document.getElementById("back-option");

const doneOptionTue = document.getElementById("done-option-tue");
const backOptionTue = document.getElementById("back-option-tue");

const doneOptionWed = document.getElementById("done-option-wed");
const backOptionWed = document.getElementById("back-option-wed");


doneOption.addEventListener("click", function () {

    breakfastItems = [];

    breakfastMenu.style.display = "none";

});

backOption.addEventListener("click", function () {

    if (breakfastItems.length > 0) {

        breakfastItems.pop();

        breakfastMon.textContent = breakfastItems.join("");

    }

});


doneOptionTue.addEventListener("click", function () {

    breakfastItemsTue = [];

    breakfastMenuTue.style.display = "none";

});

backOptionTue.addEventListener("click", function () {

    if (breakfastItemsTue.length > 0) {

        breakfastItemsTue.pop();

        breakfastTue.textContent = breakfastItemsTue.join("");

    }

});


doneOptionWed.addEventListener("click", function () {

    breakfastItemsWed = [];

    breakfastMenuWed.style.display = "none";

});

backOptionWed.addEventListener("click", function () {

    if (breakfastItemsWed.length > 0) {

        breakfastItemsWed.pop();

        breakfastWed.textContent = breakfastItemsWed.join("");

    }

});