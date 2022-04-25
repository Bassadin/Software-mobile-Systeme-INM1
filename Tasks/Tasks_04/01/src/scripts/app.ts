import Controller from "./Controller";
import Model from "./Model";

var model = new Model();
var controller = new Controller(model);

model.addObserver(controller);

document.getElementById("conversionForm")!.addEventListener("submit", (event) => {
    event.preventDefault();
    controller.processCHF();
});
