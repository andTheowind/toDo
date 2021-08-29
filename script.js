let btn = document.querySelector(".add-list-item");
let list = document.querySelector(".list");
let colorPickerSteelblue = document.querySelector("#color-picker-swatch-steelblue");
let colorPickerPurple = document.querySelector("#color-picker-swatch-purple");
let colorPickerCornflowerblue = document.querySelector("#color-picker-swatch-cornflowerblue");
let colorPickerSalmon = document.querySelector("#color-picker-swatch-salmon");
let colorPickerDefault = document.querySelector("#color-picker-swatch-default");
let colorSelection = document.querySelector('.color-picker-swatches');
let colorPickerGroup = document.querySelector('.color-picker-swatch-group');
let highPriority = document.querySelector('input[type=checkbox]');    
let detailsBtn = document.querySelector('#details-btn');
let amountCasesHighPriority = document.querySelector(".amount-cases-high-priority");
let amountAllCases = document.querySelector(".amount-all-cases");


amountCasesHighPriority.textContent = 0;
amountAllCases.textContent = 0;


const addListItem = () => {

    let input = document.querySelector(".form > input").value;
    let listItem = document.createElement("li");

    if (input !== "") {
        ++amountAllCases.textContent;
        listItem.innerHTML = `${input} 
                <button class="button-delete" onclick="new Audio('sound_zynzyn.mp3').play(); return false;">
                    <svg class="icon" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L26 26" stroke="#3596F5" stroke-width="3"></path>
                        <path d="M26 2L2 26" stroke="#3596F5" stroke-width="3"></path>
                    </svg>
                </button>`;
        if (highPriority.checked) {
            ++amountCasesHighPriority.textContent;
            listItem.style.border = "1px solid red";
            listItem.style.backgroundColor = '#ad0000';
        }
        list.insertBefore(listItem, list.firstChild);
    } else {
        alert('Вы не ввели текст');
    }
    document.querySelector(".form > input").value = '';


    let deleteBtns = document.querySelectorAll('.button-delete');

    for (let i = 0; i < deleteBtns.length; i++) {
        deleteBtns[i].addEventListener('click', function (e) {
            e.target.parentNode.remove();
        })
    }


}


detailsBtn.addEventListener('click', function() {
    let affairs = document.querySelector('.affairs');
    affairs.style.height = "100px";
    detailsBtn.style.opacity = "0";
    detailsBtn.style.cursor = "default";
})


const changeBackgroundColor = (e) => {


    console.log(e.target);
    let arr = e.target.id.split('-');
    let lastArrayItem = arr[arr.length - 1];
    let body = document.querySelector("body");
    let card = document.querySelector(".card");

    console.log(lastArrayItem);

    if (lastArrayItem !== 'default') {
        body.style.background = lastArrayItem;
    } else {
        body.style.background = "linear-gradient(72.89deg, #0A0E12 0.63%, #27313A 100%)";
        card.style.backgroundColor = "transparent";
    }

    if (body.style.background === "steelblue") {
        card.style.backgroundColor = "#3c6f99";
    }
    if (body.style.background === "purple") {
        card.style.backgroundColor = "#6b026b";
    }
    if (body.style.background === "salmon") {
        card.style.backgroundColor = "#de6659";
    }
    if (body.style.background === "cornflowerblue") {
        card.style.backgroundColor = "#406cbd";
    }

}

colorPickerSteelblue.addEventListener('click', changeBackgroundColor);
colorPickerPurple.addEventListener('click', changeBackgroundColor);
colorPickerCornflowerblue.addEventListener('click', changeBackgroundColor);
colorPickerSalmon.addEventListener('click', changeBackgroundColor);
colorPickerDefault.addEventListener('click', changeBackgroundColor);


colorSelection.addEventListener('click', function () {

    if (colorPickerGroup.style.height !== '180px') {
        colorPickerGroup.style.height = '180px';
    } else {
        colorPickerGroup.style.height = '0px';
    }

});


btn.addEventListener("click", addListItem);
