//Styles
import "~src/styles/style.scss";

// Requires
import { TipModel } from "./TipModel";
import { TipModelController } from "./TipModelController";

let tipModel = new TipModel(100, 10, 4);
let tipModelController: TipModelController = new TipModelController();
tipModel.addObserver(tipModelController);
tipModel.notifyObserversWithControllerUpdateData();

tipModelController.setEvent(tipModel);
