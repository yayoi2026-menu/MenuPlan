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

let breakfastCount = 0;

breakfastMon.addEventListener("click", function () {

    breakfastMenu.style.display = "block";
});

const breadOption = document.getElementById("bread-option");

const breakfastOptions = document.querySelectorAll("#breakfast-menu div");

breakfastOptions.forEach(function(option) {

    option.addEventListener("click", function() {

        const emoji = option.textContent.split(" ")[0];

        if (emoji === "✔") {
            breakfastMenu.style.display = "none";
            return;
        }

        if (breakfastCount < 3) {

            if (breakfastCount === 0) {
                breakfastMon.textContent = "";
            }

            breakfastMon.textContent += emoji;
            breakfastCount++;

        }

    });

});

const doneOption = document.getElementById("done-option");
const backOption = document.getElementById("back-option");

doneOption.addEventListener("click", function () {

    breakfastCount = 0;

    breakfastMenu.style.display = "none";

});

backOption.addEventListener("click", function () {

    if (breakfastCount > 0) {

        const emojis = Array.from(breakfastMon.textContent);

        emojis.pop();

        breakfastMon.textContent = emojis.join("");

        breakfastCount--;

    }

});