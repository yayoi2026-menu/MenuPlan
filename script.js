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

breakfastMon.addEventListener("click", function () {

    breakfastMenu.style.display = "block";
});

const breadOption = document.getElementById("bread-option");

breadOption.addEventListener("click", function () {

    breakfastMon.textContent = "🍞";
    breakfastMenu.style.display = "none";

});