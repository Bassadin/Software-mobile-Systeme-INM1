import TipModel from "../src/TipModel";
import { expect } from "chai";

describe("Options tests", () => {
    it("checking default options", () => {
        const tipModel = new TipModel(2, 5, 200);
        
        expect(tipModel.getEntireTipSum()).to.equal(10);
        expect(tipModel.getGrossAmount()).to.equal(210);
        expect(tipModel.getGrossAmountPerPerson()).to.equal(105);
        expect(tipModel.getTipPerPerson()).to.equal(5);
    });
});
