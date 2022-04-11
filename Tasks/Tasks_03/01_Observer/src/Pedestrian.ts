import Observer from "./Pattern/Observer";

export default class Pedestrian implements Observer<String> {
    private name: String;

    constructor(name: String) {
        this.name = name;
    }

    update(data: String): void {
        console.log(`${this.name}: Oh! The traffic light is now ${data}!`);
    }
}
