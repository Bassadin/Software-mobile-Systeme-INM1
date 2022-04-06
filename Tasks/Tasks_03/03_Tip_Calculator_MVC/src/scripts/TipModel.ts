import Observable from "./Patterns/Observable";
import { TipModelControllerInterface } from "./TipModelController";

export default class TipModel extends Observable<TipModelControllerInterface> {
    private partySize: number = 4;
    private tipPercentage: number = 10.0;
    private grossAmount: number = 100.0;

    constructor(partySize: number, tipPercentage: number, grossAmount: number) {
        super();
        this.setPartySize(partySize);
        this.setTipPercentage(tipPercentage);
        this.setGrossAmount(grossAmount);
    }

    public setPartySize(
        newPartySize: number,
        notifyObservers: boolean = false
    ) {
        if (!Number.isInteger(newPartySize)) {
            throw new Error("Party size is not an integer");
        }
        if (newPartySize < 1) {
            throw new Error("Party size is smaller than 1");
        }
        this.partySize = newPartySize;
        if (notifyObservers) this.notifyObserversWithControllerUpdateData();
    }

    public setTipPercentage(
        newTipPercentage: number,
        notifyObservers: boolean = false
    ) {
        if (newTipPercentage < 0) {
            throw new Error("Tip percentage is smaller than 0");
        }
        this.tipPercentage = newTipPercentage;
        if (notifyObservers) this.notifyObserversWithControllerUpdateData();
    }

    public setGrossAmount(
        newGrossAmount: number,
        notifyObservers: boolean = false
    ) {
        if (newGrossAmount < 0) {
            throw new Error("Gross amount is smaller than 0");
        }
        this.grossAmount = newGrossAmount;
        if (notifyObservers) this.notifyObserversWithControllerUpdateData();
    }

    public getGrossAmount(): number {
        return this.grossAmount + this.getEntireTipSum();
    }

    public getGrossAmountPerPerson(): number {
        return this.grossAmount / this.partySize + this.getTipPerPerson();
    }

    public getTipPerPerson(): number {
        return this.getEntireTipSum() / this.partySize;
    }

    public getEntireTipSum(): number {
        return this.grossAmount * (this.tipPercentage / 100.0);
    }

    public notifyObserversWithControllerUpdateData(): void {
        this.notifyObservers({
            grossAmountResult: this.getGrossAmount(),
            tipPerPersonResult: this.getTipPerPerson(),
            entireTipSumResult: this.getEntireTipSum(),
            grossAmountPerPersonResult: this.getGrossAmountPerPerson(),
        });
    }
}
