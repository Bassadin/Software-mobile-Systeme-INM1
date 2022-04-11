
import Observable from "./Patterns/Observable";
import Observer from "./Patterns/Observer";

export default class Model extends Observable<number> {
	
	private rate: number = 0.95;
	private chf: number = 0;

	public getEUR() {
		let euro = this.chf * this.rate;
		this.notifyObservers(euro);
	}

	public setCHF(amount: number): void {
		this.chf = amount;
		this.getEUR();
	};

}
