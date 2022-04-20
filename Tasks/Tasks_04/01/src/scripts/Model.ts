import Observable from "./Patterns/Observable";

export default class Model extends Observable<number> {
    public async getChfRateFromJsonFile(): Promise<number> {
        let request = await fetch("rate.json");
        let jsonData: any = await request.json();
        let exchangeRate = jsonData.chfRate;

        return exchangeRate;
    }

    public updateEurPriceWithChfAmount(chfAmount: number) {
        this.getChfRateFromJsonFile().then((exchangeRate: number) => {
            let euroValue = chfAmount * exchangeRate;
            this.notifyObservers(euroValue);
        });
    }
}
