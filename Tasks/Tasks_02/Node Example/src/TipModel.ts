export default class TipModel {
    private partySize: number;
    private tipPercentage: number;
    private grossAmount: number;

    constructor(partySize: number, tipPercentage: number, grossAmount: number) {
        if (!Number.isInteger(partySize)) {
            throw new Error("Party size is not an integer");
        }
        if (partySize < 1) {
            throw new Error("Party size is smaller than 1");
        }
        this.partySize = partySize;

        if (tipPercentage < 0) {
            throw new Error("Tip percentage is smaller than 0");
        }
        this.tipPercentage = tipPercentage;

        if (grossAmount < 0) {
            throw new Error("Gross amount is smaller than 0");
        }
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
