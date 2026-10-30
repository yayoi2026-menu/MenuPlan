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

       // 同じ絵文字があれば消す
       if (selectedLunchDay.textContent.includes(emoji)) {

           selectedLunchDay.textContent =
               selectedLunchDay.textContent.replace(emoji, "");

       } else if (Array.from(selectedLunchDay.textContent).length < 3) {

           // まだ選んでいなければ追加
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

        if (breakfastItemsByDay[dayId].includes(emoji)) {

        // 同じ絵文字があれば消す
        breakfastItemsByDay[dayId] =
            breakfastItemsByDay[dayId].filter(function(item) {
                return item !== emoji;
            });

} else if (breakfastItemsByDay[dayId].length < 3) {

    // まだ選んでいなければ追加
    breakfastItemsByDay[dayId].push(emoji);

}

selectedBreakfastDay.textContent =
    breakfastItemsByDay[dayId].join("");
        
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
const dinnerMenu = document.getElementById("dinner-menu");

// 夕食メニューの「完了」ボタン
const doneOptionDinner = document.getElementById("done-option-dinner");

doneOptionDinner.addEventListener("click", function (event) {
    event.stopPropagation();
    dinnerMenu.style.display = "none";
});

// 🍚 ご飯を選ぶ
const riceOptionDinner = document.getElementById("rice-option-dinner");

riceOptionDinner.addEventListener("click", function (event) {
    event.stopPropagation();

    if (selectedDinnerDay.textContent.includes("🍚")) {
        selectedDinnerDay.textContent =
            selectedDinnerDay.textContent.replace("🍚", "");
    } else {
        selectedDinnerDay.textContent += "🍚";
    }

});

// 🍲 汁物を選ぶ
const soupOptionDinner = document.getElementById("soup-option-dinner");

soupOptionDinner.addEventListener("click", function (event) {
    event.stopPropagation();

    if (selectedDinnerDay.textContent.includes("🍲")) {
        selectedDinnerDay.textContent =
            selectedDinnerDay.textContent.replace("🍲", "");
    } else {
        selectedDinnerDay.textContent += "🍲";
    }
    
});

// 現在選択している夕食の曜日
const dinnerMainEmoji = document.getElementById("dinner-main-emoji");
let selectedDinnerDay = dinnerMainEmoji;
let dinnerBeforeEdit = "";


// 豚肉料理を選択
const porkOptionDinner = document.getElementById("pork-option-dinner");

porkOptionDinner.addEventListener("click", function (event) {
    event.stopPropagation();

    if (selectedDinnerDay.textContent.includes("🐷")) {
        selectedDinnerDay.textContent =
            selectedDinnerDay.textContent.replace("🐷", "");
    } else {
        selectedDinnerDay.textContent += "🐷";
    }
    
});

// 鶏肉料理を選択
const chickenOptionDinner = document.getElementById("chicken-option-dinner");

chickenOptionDinner.addEventListener("click", function (event) {
    event.stopPropagation();

    if (selectedDinnerDay.textContent.includes("🐔")) {
        selectedDinnerDay.textContent =
            selectedDinnerDay.textContent.replace("🐔", "");
    } else {
        selectedDinnerDay.textContent += "🐔";
    }
    
});

// 卵料理を選択
const eggOptionDinner = document.getElementById("egg-option-dinner");

eggOptionDinner.addEventListener("click", function (event) {
    event.stopPropagation();

    if (selectedDinnerDay.textContent.includes("🥚")) {
        selectedDinnerDay.textContent =
            selectedDinnerDay.textContent.replace("🥚", "");
    } else {
        selectedDinnerDay.textContent += "🥚";
    }
    
});

// 野菜を選択
const vegetableOptionDinner = document.getElementById("vegetable-option-dinner");

vegetableOptionDinner.addEventListener("click", function (event) {
    event.stopPropagation();

    if (selectedDinnerDay.textContent.includes("🥦")) {
        selectedDinnerDay.textContent =
            selectedDinnerDay.textContent.replace("🥦", "");
    } else {
        selectedDinnerDay.textContent += "🥦";
    }
    
});


// 夕食メニューの「戻る」ボタン
const backOptionDinner = document.getElementById("back-option-dinner");

backOptionDinner.addEventListener("click", function (event) {
    event.stopPropagation();

    // 選んだ絵文字を最後から1つ消す
    let emojis = Array.from(selectedDinnerDay.textContent);

    if (emojis.length > 0) {
        emojis.pop();
        selectedDinnerDay.textContent = emojis.join("");
    }

});


// ======================
// 火曜日〜日曜日の夕食メニューを開く
// ======================

const dinnerDays = [
    "mon", "tue", "wed", "thu", "fri", "sat", "sun"
];

dinnerDays.forEach(function(dayName) {

    const dinnerCell = document.getElementById("dinner-" + dayName);

    const emojiId = dayName === "mon"
    ? "dinner-main-emoji"
    : "dinner-main-emoji-" + dayName;

    const dinnerEmoji = document.getElementById(emojiId);

    dinnerCell.addEventListener("click", function() {

        selectedDinnerDay = dinnerEmoji;

        const rect = dinnerCell.getBoundingClientRect();

        dinnerMenu.style.left = rect.left + "px";
        dinnerMenu.style.display = "block";

        const menuHeight = dinnerMenu.offsetHeight;

        // 下に入りきらなければ、上に表示する
        if (rect.bottom + menuHeight > window.innerHeight) {
            dinnerMenu.style.top = (rect.top - menuHeight) + "px";
        } else {
            dinnerMenu.style.top = rect.bottom + "px";
        }

    });

});


// ======================
// 献立の保存
// ======================

// ======================
// 朝ごはん7日分の保存・読み込み
// ======================

breakfastDays.forEach(function(day) {

    const storageKey = day.id;

    // 保存してある朝ごはんを読み込む
    const savedBreakfast = localStorage.getItem(storageKey);

    if (savedBreakfast !== null) {
        day.textContent = savedBreakfast;

        // 選択した絵文字も復元する
        breakfastItemsByDay[storageKey] =
            Array.from(savedBreakfast);
    }

    // 朝ごはんが変更されたら自動保存
    const observer = new MutationObserver(function() {
        localStorage.setItem(storageKey, day.textContent);
    });

    observer.observe(day, {
        childList: true,
        characterData: true,
        subtree: true
    });

});


// ======================
// 昼ごはん7日分の保存・読み込み
// ======================

lunchDays.forEach(function(day) {

    const storageKey = day.id;

    // 保存してある昼ごはんを読み込む
    const savedLunch = localStorage.getItem(storageKey);

    if (savedLunch !== null) {
        day.textContent = savedLunch;

        // 選択済みの印を復元する
        day.dataset.selected = "true";
    }

    // 昼ごはんが変更されたら自動保存
    const observer = new MutationObserver(function() {
        localStorage.setItem(storageKey, day.textContent);
    });

    observer.observe(day, {
        childList: true,
        characterData: true,
        subtree: true
    });

});


// ======================
// 夜ごはん7日分の保存・読み込み
// ======================

const dinnerSaveDays = [
    "dinner-main-emoji",
    "dinner-main-emoji-tue",
    "dinner-main-emoji-wed",
    "dinner-main-emoji-thu",
    "dinner-main-emoji-fri",
    "dinner-main-emoji-sat",
    "dinner-main-emoji-sun"
];

dinnerSaveDays.forEach(function(dayId) {

    const day = document.getElementById(dayId);

    // 保存してある夜ごはんを読み込む
    const savedDinner = localStorage.getItem(dayId);

    if (savedDinner !== null) {
        day.textContent = savedDinner;
    }

    // 夜ごはんが変更されたら自動保存
    const observer = new MutationObserver(function() {
        localStorage.setItem(dayId, day.textContent);
    });

    observer.observe(day, {
        childList: true,
        characterData: true,
        subtree: true
    });

});


// ======================
// お弁当7日分の個数
// ======================

const bentoDays = [
    "mon", "tue", "wed", "thu",
    "fri", "sat", "sun"
];

bentoDays.forEach(function(dayName) {

    const bento = document.getElementById("bento-" + dayName);

    bento.addEventListener("click", function() {

        const count = (bento.textContent.match(/🍱/g) || []).length;

        const nextCount = (count + 1) % 4;

        bento.textContent = "🍱".repeat(nextCount);

    });

});


// ======================
// お弁当7日分の保存・読み込み
// ======================

bentoDays.forEach(function(dayName) {

    const bento = document.getElementById("bento-" + dayName);
    const storageKey = "bento-" + dayName;

    // 保存したお弁当の個数を読み込む
    const savedBento = localStorage.getItem(storageKey);

    if (savedBento !== null) {
        bento.textContent = savedBento;
    }

    // 個数が変わったら自動保存
    const observer = new MutationObserver(function() {
        localStorage.setItem(storageKey, bento.textContent);
    });

    observer.observe(bento, {
        childList: true,
        characterData: true,
        subtree: true
    });

});


// ======================
// 今週の日付を自動表示
// ======================

// ======================
// 前の週・今週・次の週
// ======================

// 今週から何週間ずれているか
let weekOffset = 0;

// 表示中の週の月曜日を保存用の名前にする
function getWeekKey() {

    const today = new Date();

    const monday = new Date(today);

    monday.setDate(
        today.getDate() - (today.getDay() + 6) % 7 + weekOffset * 7
    );

    const year = monday.getFullYear();
    const month = String(monday.getMonth() + 1).padStart(2, "0");
    const day = String(monday.getDate()).padStart(2, "0");

    return year + "-" + month + "-" + day;
}



// ======================
// 今までの献立を今週のデータとして保存
// ======================

function backupCurrentWeekMeals() {

    const weekKey = getWeekKey();

    const mealIds = [
        ...breakfastDays.map(day => day.id),
        ...lunchDays.map(day => day.id),
        ...dinnerSaveDays,
        ...bentoDays.map(day => "bento-" + day)
    ];

    mealIds.forEach(function(id) {

        const oldData = localStorage.getItem(id);
        const newKey = "week-" + weekKey + "-" + id;

        // まだ週別データがない場合だけコピーする
        if (oldData !== null && localStorage.getItem(newKey) === null) {
            localStorage.setItem(newKey, oldData);
        }

    });
}

// 今週のデータを週別の名前でも保存
backupCurrentWeekMeals();


// 日付を表示する曜日
const weekIds = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// 指定した週の日付を表示
function showWeekDates() {

    const today = new Date();

    // 今週の月曜日を求める
    const monday = new Date(today);
    monday.setDate(today.getDate() - (today.getDay() + 6) % 7);

    // 前後の週に移動
    monday.setDate(monday.getDate() + weekOffset * 7);

    weekIds.forEach(function(day, index) {

        const date = new Date(monday);
        date.setDate(monday.getDate() + index);

        const dateCell = document.getElementById("date-" + day);

        dateCell.textContent =
            (date.getMonth() + 1) + "/" + date.getDate();

    });
}

// 最初は今週を表示
showWeekDates();

// 前の週
document.getElementById("prev-week").addEventListener("click", function() {
    weekOffset--;
    showWeekDates();
});

// 今週に戻る
document.getElementById("current-week").addEventListener("click", function() {
    weekOffset = 0;
    showWeekDates();
});

// 次の週
document.getElementById("next-week").addEventListener("click", function() {
    weekOffset++;
    showWeekDates();
});


// ======================
// 今日の列を色付け
// ======================

// 月曜日を0、日曜日を6にする
const todayIndex = (new Date().getDay() + 6) % 7;

// 最初の列は「朝・昼」などの見出しなので +2
const todayColumn = todayIndex + 2;

// ======================
// 今日の曜日と日付を色付け
// ======================

document.querySelectorAll(".date-row").forEach(function(row) {

    const cell = row.children[todayIndex + 1];

    if (cell) {
        cell.classList.add("today-column");
    }

});

// 今日の献立のマスに色を付ける
document.querySelectorAll(".meal-row").forEach(function(row) {

    const cell = row.children[todayIndex + 1];

    if (cell) {
        cell.classList.add("today-column");
    }

});


// ======================
// 夕食7日分・絵文字3個×2段
// ======================

const dinnerEmojiIds = [
    "dinner-main-emoji",
    "dinner-main-emoji-tue",
    "dinner-main-emoji-wed",
    "dinner-main-emoji-thu",
    "dinner-main-emoji-fri",
    "dinner-main-emoji-sat",
    "dinner-main-emoji-sun"
];

dinnerEmojiIds.forEach(function(emojiId) {

    const emojiArea = document.getElementById(emojiId);

    function arrangeDinnerEmoji() {

        const emojiText = emojiArea.textContent;
        const emojis = Array.from(emojiText);

        emojiArea.innerHTML = "";

        emojis.forEach(function(emoji) {

            const emojiBox = document.createElement("span");
            emojiBox.textContent = emoji;

            emojiArea.appendChild(emojiBox);

        });
    }

    const emojiObserver = new MutationObserver(function() {

        emojiObserver.disconnect();

        arrangeDinnerEmoji();

        emojiObserver.observe(emojiArea, {
            childList: true,
            characterData: true,
            subtree: true
        });
    });

    arrangeDinnerEmoji();

    emojiObserver.observe(emojiArea, {
        childList: true,
        characterData: true,
        subtree: true
    });

});
