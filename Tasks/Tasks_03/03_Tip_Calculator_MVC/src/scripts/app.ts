//Styles
import "~src/styles/style.scss";

// Requires
import TipModel from "./TipModel";

let calculateTipForm = document.getElementById("tip-calculation-form")!;

let grossAmountInputField = <HTMLInputElement>(
    document.getElementById("gross_amount")!
);
let tipPercentageInputField = <HTMLInputElement>(
    document.getElementById("tip_percentage")!
);
let amountOfPersonsInputField = <HTMLInputElement>(
    document.getElementById("amount_of_persons")!
);

let grossAmountResultItem = document.getElementById("gross-amount-result")!;
let tipPerPersonResultItem = document.getElementById("tip-per-person-result")!;
let entireTipSumResultItem = document.getElementById("entire-tip-sum-result")!;
let grossAmountPerPersonResultItem = document.getElementById(
    "gross-amount-per-person-result"
)!;

calculateTipForm.addEventListener("submit", (event) => {
    // Keep browser from reloading after event submission
    event.preventDefault();
    const tipModel = new TipModel(
        parseInt(amountOfPersonsInputField.value),
        parseFloat(tipPercentageInputField.value),
        parseFloat(grossAmountInputField.value)
    );

    grossAmountResultItem.innerText =
        tipModel.getGrossAmount().toFixed(2) + "€";
    entireTipSumResultItem.innerText =
        tipModel.getEntireTipSum().toFixed(2) + "€";
    grossAmountPerPersonResultItem.innerText =
        tipModel.getGrossAmountPerPerson().toFixed(2) + "€";
    tipPerPersonResultItem.innerText =
        tipModel.getTipPerPerson().toFixed(2) + "€";
});
