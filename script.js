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

let breakfastItems = [];

breakfastMon.addEventListener("click", function () {

    breakfastMenu.style.display = "block";
});

const breadOption = document.getElementById("bread-option");

const breakfastOptions =
    document.querySelectorAll("#breakfast-menu div:not(#back-option):not(#done-option)");

breakfastOptions.forEach(function(option) {

    option.addEventListener("click", function() {

        const emoji = option.textContent.split(" ")[0];

        if (emoji === "✔" || emoji === "❌") {
            breakfastMenu.style.display = "none";
            return;
        }

        if (breakfastItems.length < 3) {

            breakfastItems.push(emoji);

            breakfastMon.textContent = breakfastItems.join("");

        }

    });

});

const doneOption = document.getElementById("done-option");
const backOption = document.getElementById("back-option");

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