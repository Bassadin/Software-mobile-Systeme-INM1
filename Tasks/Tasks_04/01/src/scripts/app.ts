import Controller from "./Controller";
import Model from "./Model";

var model = new Model();
var controller = new Controller(model);

model.addObserver(controller);

document.getElementById("convertBN")!.addEventListener("click", (e) => {
    controller.processCHF();
});
