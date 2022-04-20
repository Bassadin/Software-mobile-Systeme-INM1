"use strict";

import Model from "./model";
import Observable from "./Patterns/Observable"
import Observer from "./Patterns/Observer";

export default class Controller implements Observer<number> {
    private model: Model;

    constructor(model: Model) {
        this.model = model;
    }

    private getCHFElement(): string {
        return (<HTMLInputElement>document.getElementById("chfIN")!)
            .value;
    }

    public processCHF() {
        let chfText: string = this.getCHFElement();
        let chf: number = parseInt(chfText, 10);
        if (isNaN(chf)) {
            this.update(0);
        } else {
            this.model.setCHF(chf);
        }
    }

    public update(euro: number) {
        (<HTMLInputElement>document.getElementById("euroIN")!).value =
            euro.toString();
    }
}
