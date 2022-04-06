import { TipModel } from "../src/scripts/TipModel";
import { expect } from "chai";
import "mocha";

describe("Tip Model tests", () => {
    it("valid tip model calculations", () => {
        const tipModel = new TipModel(2, 5, 200);

        expect(tipModel.getEntireTipSum()).to.equal(10);
        expect(tipModel.getGrossAmount()).to.equal(210);
        expect(tipModel.getGrossAmountPerPerson()).to.equal(105);
        expect(tipModel.getTipPerPerson()).to.equal(5);
    });
    it("negative party size", () => {
        expect(() => new TipModel(-2, 5, 200)).to.throw(Error);
    });
    it("zero party size", () => {
        expect(() => new TipModel(0, 5, 200)).to.throw();
    });
    it("negative tip percentage", () => {
        expect(() => new TipModel(2, -10, 200)).to.throw();
    });
    it("negative gross amount", () => {
        expect(() => new TipModel(2, 10, -200)).to.throw();
    });
});
