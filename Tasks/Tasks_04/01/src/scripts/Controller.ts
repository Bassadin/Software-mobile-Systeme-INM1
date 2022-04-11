"use strict";

import Model from "./model";
import Observable from "./Patterns/Observable";
import Observer from "./Patterns/Observer";

export default class Controller implements Observer<number> {
    private model: Model;

    constructor(model: Model) {
        this.model = model;
    }

    public getCHF(): string {
        return (<HTMLInputElement>window.document.getElementById("chfIN")!)
            .value;
    }

    public processCHF() {
        var chfText = this.getCHF(),
            chf = parseInt(chfText, 10);
        if (isNaN(chf)) {
            this.update(0);
        } else {
            this.model.setCHF(chf);
        }
    }

    public onLoaded() {
        window.document
            .getElementById("convertBN")!
            .addEventListener("click", this.processCHF, false);
    }

    public update(euro: number) {
        (<HTMLInputElement>window.document.getElementById("euroIN")!).value =
            euro.toString();
    }
}
