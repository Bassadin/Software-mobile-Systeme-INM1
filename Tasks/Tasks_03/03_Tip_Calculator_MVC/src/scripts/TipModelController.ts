import Observer from "./Patterns/Observer";

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
