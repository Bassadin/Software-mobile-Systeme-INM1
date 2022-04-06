//Styles
import "~src/styles/style.scss";

// Requires
import { TipModel } from "./TipModel";
import { TipModelController } from "./TipModelController";

let tipModel = new TipModel(100, 10, 4);
let tipModelController: TipModelController = new TipModelController();
tipModel.addObserver(tipModelController);
tipModel.notifyObserversWithControllerUpdateData();

const grossAmountInputField = <HTMLInputElement>(
    document.getElementById("gross_amount")!
);
const tipPercentageInputField = <HTMLInputElement>(
    document.getElementById("tip_percentage")!
);
const amountOfPersonsInputField = <HTMLInputElement>(
    document.getElementById("amount_of_persons")!
);

document
    .getElementById("tip-calculation-form")!
    .addEventListener("submit", (event) => {
        event.preventDefault();

        tipModel.setGrossAmount(parseFloat(grossAmountInputField.value));
        tipModel.setTipPercentage(parseFloat(tipPercentageInputField.value));
        tipModel.setPartySize(parseInt(amountOfPersonsInputField.value), true);
    });
