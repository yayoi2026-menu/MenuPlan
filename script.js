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
const breakfastWed = document.getElementById("breakfast-wed");
const breakfastThu = document.getElementById("breakfast-thu");
const breakfastFri = document.getElementById("breakfast-fri");
const breakfastSat = document.getElementById("breakfast-sat");
const breakfastSun = document.getElementById("breakfast-sun");


// 朝メニューを月〜日で共通にする

let selectedBreakfastDay = null;
const breakfastItemsByDay = {};

const breakfastDays = [
    breakfastMon,
    breakfastTue,
    breakfastWed,
    breakfastThu,
    breakfastFri,
    breakfastSat,
    breakfastSun
];

breakfastDays.forEach(function (day) {
    day.addEventListener("click", function () {

selectedBreakfastDay = day;        

        // 曜日別のメニューを閉じる
        document.querySelectorAll(".meal-row .popup-menu")
            .forEach(function (menu) {
                if (menu.id.startsWith("breakfast-menu")) {
                    menu.style.display = "none";
                }
            });

        // 共通メニューを選んだ曜日へ移動
        day.parentElement.appendChild(breakfastMenu);
        breakfastMenu.style.display = "block";

    });
});


const lunchMenu = document.getElementById("lunch-menu");

let lunchItems = [];

let selectedLunchDay = null;


// 月〜日の昼
const lunchDays = [
    document.getElementById("lunch-mon"),
    document.getElementById("lunch-tue"),
    document.getElementById("lunch-wed"),
    document.getElementById("lunch-thu"),
    document.getElementById("lunch-fri"),
    document.getElementById("lunch-sat"),
    document.getElementById("lunch-sun")
];

// どの曜日の昼をタップしても、同じ昼メニューを開く
lunchDays.forEach(function (day) {

    day.addEventListener("click", function () {

        selectedLunchDay = day;

        day.parentElement.appendChild(lunchMenu);

        lunchMenu.style.display = "block";

    });

});

// 昼メニューの料理をクリックしたら、選んだ曜日に入れる
const lunchFoodOptions = lunchMenu.querySelectorAll("div:not(#back-option-lunch):not(#done-option-lunch)");

lunchFoodOptions.forEach(function (option) {
    option.addEventListener("click", function () {

    if (selectedLunchDay !== null) {

         const emoji = option.textContent.split(" ")[0];

        // まだ料理を選んでいない場合は、仮の絵文字を消す
       if (!selectedLunchDay.dataset.selected) {
           selectedLunchDay.textContent = "";
           selectedLunchDay.dataset.selected = "true";
       }

       // 最大3個まで追加
       if (selectedLunchDay.textContent.length < 6) {
           selectedLunchDay.textContent += emoji;
       }

    }
       

    });
});


// 昼メニューの「戻る」ボタン
const backOptionLunch = document.getElementById("back-option-lunch");

backOptionLunch.addEventListener("click", function () {

    if (selectedLunchDay !== null && selectedLunchDay.dataset.selected) {

        const emojis = Array.from(selectedLunchDay.textContent);

        emojis.pop();

        selectedLunchDay.textContent = emojis.join("");

        
    }

});


// 昼メニューの「完了」ボタン
const doneOptionLunch = document.getElementById("done-option-lunch");

doneOptionLunch.addEventListener("click", function () {

    lunchMenu.style.display = "none";

});



const breadOption = document.getElementById("bread-option");

const breakfastOptions =
    document.querySelectorAll("#breakfast-menu div:not(#back-option):not(#done-option)");  


breakfastOptions.forEach(function(option) {

    option.addEventListener("click", function() {

        const emoji = option.textContent.split(" ")[0];

        if (emoji === "✔") {
            breakfastMenu.style.display = "none";
            return;
        }

    if (selectedBreakfastDay !== null) {

        const dayId = selectedBreakfastDay.id;

        if (!breakfastItemsByDay[dayId]) {
            breakfastItemsByDay[dayId] = [];
        }

        if (breakfastItemsByDay[dayId].length < 3) {

            breakfastItemsByDay[dayId].push(emoji);

            selectedBreakfastDay.textContent =
                breakfastItemsByDay[dayId].join("");

        }
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

    breakfastMenu.style.display = "none";

});


backOption.addEventListener("click", function () {

    if (selectedBreakfastDay !== null) {

        const dayId = selectedBreakfastDay.id;
        const items = breakfastItemsByDay[dayId];

        if (items && items.length > 0) {

            items.pop();

            selectedBreakfastDay.textContent = items.join("");

        }
    }

});


