import TipModel from "../src/TipModel";
import { expect } from "chai";

describe("Tip Model tests", () => {
    it("tests valid tip model calculations", () => {
        const tipModel = new TipModel(2, 5, 200);

        expect(tipModel.getEntireTipSum()).to.equal(10);
        expect(tipModel.getGrossAmount()).to.equal(210);
        expect(tipModel.getGrossAmountPerPerson()).to.equal(105);
        expect(tipModel.getTipPerPerson()).to.equal(5);
    });
    it("tests negative party size", () => {
        expect(() => new TipModel(-2, 5, 200)).to.throw(Error);
    });
    it("tests zero party size", () => {
        expect(() => new TipModel(0, 5, 200)).to.throw();
    });
});
