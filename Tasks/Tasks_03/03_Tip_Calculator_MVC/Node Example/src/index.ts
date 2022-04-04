import TipModel from "src/scripts/TipModel";
const tipModel = new TipModel(2, 5, 200);

console.log(tipModel.getEntireTipSum());
console.log(tipModel.getGrossAmount());
console.log(tipModel.getGrossAmountPerPerson());
console.log(tipModel.getTipPerPerson());
