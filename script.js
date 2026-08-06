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

const breakfastThu = document.getElementById("breakfast-thu");
const breakfastMenuThu = document.getElementById("breakfast-menu-thu");

const breakfastFri = document.getElementById("breakfast-fri");
const breakfastMenuFri = document.getElementById("breakfast-menu-fri");

const breakfastSat = document.getElementById("breakfast-sat");
const breakfastMenuSat = document.getElementById("breakfast-menu-sat");

const breakfastSun = document.getElementById("breakfast-sun");
const breakfastMenuSun = document.getElementById("breakfast-menu-sun");

let breakfastItems = [];
let breakfastItemsTue = [];
let breakfastItemsWed = [];
let breakfastItemsThu = [];
let breakfastItemsFri = [];
let breakfastItemsSat = [];
let breakfastItemsSun = [];

breakfastMon.addEventListener("click", function () {

    breakfastMenu.style.display = "block";
});

breakfastTue.addEventListener("click", function () {

    breakfastMenuTue.style.display = "block";
});

breakfastWed.addEventListener("click", function () {

    breakfastMenuWed.style.display = "block";
});

breakfastThu.addEventListener("click", function () {

    breakfastMenuThu.style.display = "block";
});

breakfastFri.addEventListener("click", function () {

    breakfastMenuFri.style.display = "block";
});

breakfastSat.addEventListener("click", function () {

    breakfastMenuSat.style.display = "block";
});

breakfastSun.addEventListener("click", function () {

    breakfastMenuSun.style.display = "block";
});


const breadOption = document.getElementById("bread-option");

const breakfastOptions =
    document.querySelectorAll("#breakfast-menu div:not(#back-option):not(#done-option)");  

const breakfastOptionsTue =
    document.querySelectorAll("#breakfast-menu-tue div:not(#back-option-tue):not(#done-option-tue)");

const breakfastOptionsWed =
    document.querySelectorAll("#breakfast-menu-wed div:not(#back-option-wed):not(#done-option-wed)");  

const breakfastOptionsThu =
    document.querySelectorAll("#breakfast-menu-thu div:not(#back-option-thu):not(#done-option-thu)");

const breakfastOptionsFri =
    document.querySelectorAll("#breakfast-menu-fri div:not(#back-option-fri):not(#done-option-fri)");  

const breakfastOptionsSat =
    document.querySelectorAll("#breakfast-menu-sat div:not(#back-option-sat):not(#done-option-sat)");

const breakfastOptionsSun =
    document.querySelectorAll("#breakfast-menu-sun div:not(#back-option-sun):not(#done-option-sun)");  


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


breakfastOptionsThu.forEach(function(option) {

    option.addEventListener("click", function() {

        const emoji = option.textContent.split(" ")[0];

        if (emoji === "✔") {
            breakfastMenuThu.style.display = "none";
            return;
        }

        if (breakfastItemsThu.length < 3) {

            breakfastItemsThu.push(emoji);

            breakfastThu.textContent = breakfastItemsThu.join("");

        }

    });

});


breakfastOptionsFri.forEach(function(option) {

    option.addEventListener("click", function() {

        const emoji = option.textContent.split(" ")[0];

        if (emoji === "✔") {
            breakfastMenuFri.style.display = "none";
            return;
        }

        if (breakfastItemsFri.length < 3) {

            breakfastItemsFri.push(emoji);

            breakfastFri.textContent = breakfastItemsFri.join("");

        }

    });

});


breakfastOptionsSat.forEach(function(option) {

    option.addEventListener("click", function() {

        const emoji = option.textContent.split(" ")[0];

        if (emoji === "✔") {
            breakfastMenuSat.style.display = "none";
            return;
        }

        if (breakfastItemsSat.length < 3) {

            breakfastItemsSat.push(emoji);

            breakfastSat.textContent = breakfastItemsSat.join("");

        }

    });

});


breakfastOptionsSun.forEach(function(option) {

    option.addEventListener("click", function() {

        const emoji = option.textContent.split(" ")[0];

        if (emoji === "✔") {
            breakfastMenuSun.style.display = "none";
            return;
        }

        if (breakfastItemsSun.length < 3) {

            breakfastItemsSun.push(emoji);

            breakfastSun.textContent = breakfastItemsSun.join("");

        }

    });

});


const doneOption = document.getElementById("done-option");
const backOption = document.getElementById("back-option");

const doneOptionTue = document.getElementById("done-option-tue");
const backOptionTue = document.getElementById("back-option-tue");

const doneOptionWed = document.getElementById("done-option-wed");
const backOptionWed = document.getElementById("back-option-wed");

const doneOptionThu = document.getElementById("done-option-thu");
const backOptionThu = document.getElementById("back-option-thu");

const doneOptionFri = document.getElementById("done-option-fri");
const backOptionFri = document.getElementById("back-option-fri");

const doneOptionSat = document.getElementById("done-option-sat");
const backOptionSat = document.getElementById("back-option-sat");

const doneOptionSun = document.getElementById("done-option-sun");
const backOptionSun = document.getElementById("back-option-sun");


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


doneOptionThu.addEventListener("click", function () {

    breakfastItemsThu = [];

    breakfastMenuThu.style.display = "none";

});

backOptionThu.addEventListener("click", function () {

    if (breakfastItemsThu.length > 0) {

        breakfastItemsThu.pop();

        breakfastThu.textContent = breakfastItemsThu.join("");

    }

});


doneOptionFri.addEventListener("click", function () {

    breakfastItemsFri = [];

    breakfastMenuFri.style.display = "none";

});

backOptionFri.addEventListener("click", function () {

    if (breakfastItemsFri.length > 0) {

        breakfastItemsFri.pop();

        breakfastFri.textContent = breakfastItemsFri.join("");

    }

});


doneOptionSat.addEventListener("click", function () {

    breakfastItemsSat = [];

    breakfastMenuSat.style.display = "none";

});

backOptionSat.addEventListener("click", function () {

    if (breakfastItemsSat.length > 0) {

        breakfastItemsSat.pop();

        breakfastSat.textContent = breakfastItemsSat.join("");

    }

});


doneOptionSun.addEventListener("click", function () {

    breakfastItemsSun = [];

    breakfastMenuSun.style.display = "none";

});

backOptionSun.addEventListener("click", function () {

    if (breakfastItemsSun.length > 0) {

        breakfastItemsSun.pop();

        breakfastSun.textContent = breakfastItemsSun.join("");

    }

});
