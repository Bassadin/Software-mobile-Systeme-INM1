import Observer from "./Patterns/Observer";
import { TipModel } from "./TipModel";

export interface TipModelControllerInterface {
    grossAmountResult: number;
    tipPerPersonResult: number;
    entireTipSumResult: number;
    grossAmountPerPersonResult: number;
}

export class TipModelController
    implements Observer<TipModelControllerInterface>
{
    private grossAmountResultItem = document.getElementById(
        "gross-amount-result"
    )!;
    private tipPerPersonResultItem = document.getElementById(
        "tip-per-person-result"
    )!;
    private entireTipSumResultItem = document.getElementById(
        "entire-tip-sum-result"
    )!;
    private grossAmountPerPersonResultItem = document.getElementById(
        "gross-amount-per-person-result"
    )!;

    private grossAmountInputField = <HTMLInputElement>(
        document.getElementById("gross_amount")!
    );
    private tipPercentageInputField = <HTMLInputElement>(
        document.getElementById("tip_percentage")!
    );
    private amountOfPersonsInputField = <HTMLInputElement>(
        document.getElementById("amount_of_persons")!
    );
    
    public setEvent(modelRef: TipModel) {
        document
            .getElementById("tip-calculation-form")!
            .addEventListener("submit", (event) => {
                event.preventDefault();
        
                modelRef.setGrossAmount(parseFloat(this.grossAmountInputField.value));
                modelRef.setTipPercentage(parseFloat(this.tipPercentageInputField.value));
                modelRef.setPartySize(parseInt(this.amountOfPersonsInputField.value), true);
            });

    }    

    update(data: TipModelControllerInterface): void {
        this.grossAmountResultItem.innerText =
            data.grossAmountResult.toFixed(2) + "€";
        this.entireTipSumResultItem.innerText =
            data.entireTipSumResult.toFixed(2) + "€";
        this.grossAmountPerPersonResultItem.innerText =
            data.grossAmountPerPersonResult.toFixed(2) + "€";
        this.tipPerPersonResultItem.innerText =
            data.tipPerPersonResult.toFixed(2) + "€";
    }
}
