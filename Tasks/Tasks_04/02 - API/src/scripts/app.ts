import Controller from "./Controller";
import Model from "./Model";

var model = new Model();
var controller = new Controller(model);

model.addObserver(controller);

let sourceCurrencyElement = document.getElementById("sourceCurrency");
let targetCurrencyElement = document.getElementById("targetCurrency");

document
    .getElementById("conversionForm")!
    .addEventListener("submit", (event) => {
        event.preventDefault();
        controller.processCHF();

        
    });


fetch("https://openexchangerates.org/api/currencies.json").then((response) => {
    response.json().then((json) => {
        Object.keys(json).forEach((eachCurrencyKey: string) => {
            let newOptionElement: HTMLOptionElement =
                document.createElement("option");
            newOptionElement.setAttribute("value", eachCurrencyKey);
            newOptionElement.innerText = json[eachCurrencyKey];

            sourceCurrencyElement?.appendChild(newOptionElement.cloneNode(true));
            targetCurrencyElement?.appendChild(newOptionElement.cloneNode(true));
        });
    });
});
