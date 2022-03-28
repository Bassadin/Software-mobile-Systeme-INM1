import TipModel from "../src/TipModel";
import { expect } from "chai";

describe("Options tests", () => {
    // the tests container
    it("checking default options", () => {
        // the single test
        const tipModel = new TipModel(2, 5, 200); // this will be your class

        /* fps limit */
        expect(tipModel.getGrossAmount()).to.equal(200); // As I said 3 lines above
    });
});
