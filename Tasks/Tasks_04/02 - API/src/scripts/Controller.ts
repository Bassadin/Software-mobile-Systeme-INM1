"use strict";

import Model from "./Model";
import Observer from "./Patterns/Observer";

export default class Controller implements Observer<number> {
    private model: Model;
    private chfElement: HTMLInputElement = <HTMLInputElement>(
        document.getElementById("currencyInput")!
    );
    private eurElement: HTMLInputElement = <HTMLInputElement>(
        document.getElementById("euroIN")!
    );

    constructor(model: Model) {
        this.model = model;
    }

    public processCHF() {
        let chfValue: number = parseInt(this.chfElement.value, 10);
        if (isNaN(chfValue)) {
            this.update(0);
        } else {
            this.model.updateEurPriceWithChfAmount(chfValue);
        }
    }

    public update(euro: number) {
        this.eurElement.innerText = euro.toString();
    }
}
