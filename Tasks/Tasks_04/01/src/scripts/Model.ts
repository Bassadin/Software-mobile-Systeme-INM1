import Observable from "./Patterns/Observable";

export default class Model extends Observable<number> {
    private chf: number = 0;

    public async getChfRate() {
        let request = await fetch("rate.json");
        let jsonData = await request.json();
        let exchangeRate = jsonData.chfRate;

        return exchangeRate;
    }

    public getEUR() {
        this.getChfRate().then((exchangeRate: number) => {
            let euro = this.chf * exchangeRate;
            this.notifyObservers(euro);
        });
    }

    public setCHF(amount: number): void {
        this.chf = amount;
        this.getEUR();
    }
}
