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
        return this.grossAmount;
    }

    public getGrossAmountPerPerson(): number {
        return this.grossAmount / this.partySize;
    }

    public getTipPerPerson(): number {
        // TODO
        return 0;
    }

    public getEntireTipSum(): number {
        // TODO
        return 0;
    }
}
