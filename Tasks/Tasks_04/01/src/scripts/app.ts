import Controller from "./controller";
import Model from "./model";

var model = new Model();
var controller = new Controller(model);

model.addObserver(controller);

document.getElementById("convertBN")!.addEventListener("click", (e) => {
    controller.processCHF();
});
