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


// ======================
// 夕食
// ======================

const dinnerMon = document.getElementById("dinner-mon");

dinnerMon.addEventListener("click", function () {
   
});


// 夕食メニューを開く
const dinnerMenu = document.getElementById("dinner-menu");

dinnerMon.addEventListener("click", function () {

    const rect = dinnerMon.getBoundingClientRect();

    dinnerMenu.style.left = rect.left + "px";
    dinnerMenu.style.top = rect.bottom + "px";

    dinnerMenu.style.display = "block";
});

// 夕食メニューの「完了」ボタン
const doneOptionDinner = document.getElementById("done-option-dinner");

doneOptionDinner.addEventListener("click", function (event) {
    event.stopPropagation();
    dinnerMenu.style.display = "none";
});

// 豚肉料理を選択
const porkOptionDinner = document.getElementById("pork-option-dinner");
const dinnerMainEmoji = document.getElementById("dinner-main-emoji");

porkOptionDinner.addEventListener("click", function (event) {
    event.stopPropagation();

    selectedDinnerDay.textContent = "🐷";
    dinnerMenu.style.display = "none";
});

// 鶏肉料理を選択
const chickenOptionDinner = document.getElementById("chicken-option-dinner");

chickenOptionDinner.addEventListener("click", function (event) {
    event.stopPropagation();

    selectedDinnerDay.textContent = "🐔";
    dinnerMenu.style.display = "none";
});

// 卵料理を選択
const eggOptionDinner = document.getElementById("egg-option-dinner");

eggOptionDinner.addEventListener("click", function (event) {
    event.stopPropagation();

    selectedDinnerDay.textContent = "🥚";
    dinnerMenu.style.display = "none";
});

// 野菜を選択
const vegetableOptionDinner = document.getElementById("vegetable-option-dinner");

vegetableOptionDinner.addEventListener("click", function (event) {
    event.stopPropagation();

    selectedDinnerDay.textContent = "🥦";
    dinnerMenu.style.display = "none";
});

// 夕食メニューの「戻る」ボタン
const backOptionDinner = document.getElementById("back-option-dinner");

backOptionDinner.addEventListener("click", function (event) {
    event.stopPropagation();

    dinnerMainEmoji.textContent = "🍚🥗";
});

// 火曜日の夕食メニューを開く
const dinnerTue = document.getElementById("dinner-tue");

dinnerTue.addEventListener("click", function () {

    selectedDinnerDay = document.getElementById("dinner-main-emoji-tue");

    const rect = dinnerTue.getBoundingClientRect();

    dinnerMenu.style.left = rect.left + "px";
    dinnerMenu.style.top = rect.bottom + "px";

    dinnerMenu.style.display = "block";
});

// 水曜日の夕食メニューを開く
const dinnerWed = document.getElementById("dinner-wed");

dinnerWed.addEventListener("click", function () {

    const rect = dinnerWed.getBoundingClientRect();

    dinnerMenu.style.left = rect.left + "px";
    dinnerMenu.style.top = rect.bottom + "px";

    dinnerMenu.style.display = "block";
});

// 木曜日の夕食メニューを開く
const dinnerThu = document.getElementById("dinner-thu");

dinnerThu.addEventListener("click", function () {

    const rect = dinnerThu.getBoundingClientRect();

    dinnerMenu.style.left = rect.left + "px";
    dinnerMenu.style.top = rect.bottom + "px";

    dinnerMenu.style.display = "block";
});

// 金曜日の夕食メニューを開く
const dinnerFri = document.getElementById("dinner-fri");

dinnerFri.addEventListener("click", function () {

    const rect = dinnerFri.getBoundingClientRect();

    dinnerMenu.style.left = rect.left + "px";
    dinnerMenu.style.top = rect.bottom + "px";

    dinnerMenu.style.display = "block";
});

// 土曜日の夕食メニューを開く
const dinnerSat = document.getElementById("dinner-sat");

dinnerSat.addEventListener("click", function () {

    const rect = dinnerSat.getBoundingClientRect();

    dinnerMenu.style.left = rect.left + "px";
    dinnerMenu.style.top = rect.bottom + "px";

    dinnerMenu.style.display = "block";
});

// 日曜日の夕食メニューを開く
const dinnerSun = document.getElementById("dinner-sun");

dinnerSun.addEventListener("click", function () {

    const rect = dinnerSun.getBoundingClientRect();

    dinnerMenu.style.left = rect.left + "px";
    dinnerMenu.style.top = rect.bottom + "px";

    dinnerMenu.style.display = "block";
});


// 現在選択している夕食の曜日
let selectedDinnerDay = dinnerMainEmoji;