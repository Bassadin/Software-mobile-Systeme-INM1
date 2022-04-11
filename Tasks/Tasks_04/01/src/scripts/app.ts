import Controller from "./controller";
import Model from "./model";

var model = new Model();
var controller = new Controller(model);
window.addEventListener("DOMContentLoaded", controller.onLoaded, false);

function stringToKeyCode(letter: string) {
    return letter.charCodeAt(0);
}
