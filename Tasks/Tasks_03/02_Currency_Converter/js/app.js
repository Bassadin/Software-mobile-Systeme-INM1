"use strict";
var model = new Model();
var controller = new Controller(model);
window.addEventListener("DOMContentLoaded", controller.onLoaded, false);

function stringToKeyCode(letter) {
    return letter.charCodeAt(0);
}

function numberKeyValidation(txt, charCode) {
    if (charCode == stringToKeyCode("\b")) {
        return true;
    }

    let dotIndex = txt.indexOf(".");

    if (charCode == 190) {
        return dotIndex === -1;
    } else {
        return (
            charCode >= stringToKeyCode("0") &&
            charCode <= stringToKeyCode("9") &&
            (dotIndex < 0 || txt.length - dotIndex <= 2)
        );
    }
}

let currencyField = document.getElementById("chfIN");
currencyField.addEventListener(
    "keydown",
    (event) => {
        if (!numberKeyValidation(currencyField.value, event.keyCode)) {
            event.preventDefault();
        }
    },
    false
);
