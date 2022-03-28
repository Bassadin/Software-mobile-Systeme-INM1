export default class TipModel {
    private partySize: number;
    private tipPercentage: number;
    private grossAmount: number;

    constructor(partySize: number, tipPercentage: number, grossAmount: number) {
        this.partySize = partySize;
        this.tipPercentage = tipPercentage;
        this.grossAmount = grossAmount;
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
        return this.grossAmount * (this.tipPercentage / 100);
    }
}
