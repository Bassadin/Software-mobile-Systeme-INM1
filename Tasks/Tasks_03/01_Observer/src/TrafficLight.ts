import Observable from "./Pattern/Observable";
import Observer from "./Pattern/Observer";

export enum TrafficLightState {
    GREEN = "green",
    RED = "red",
}

export class TrafficLight extends Observable {
    private lightState: TrafficLightState = TrafficLightState.RED;

    public getLightState(): String {
        return this.lightState;
    }

    public switchLateState(): void {
        switch (this.lightState) {
            case TrafficLightState.RED:
                TrafficLightState.GREEN;
                this.notifyObserversAboutLightState();
                break;
            case TrafficLightState.GREEN:
                TrafficLightState.RED;
                this.notifyObserversAboutLightState();
                break;
        }
        console.log(
            `The traffic light has switched to ${this.getLightState()}.`
        );
    }

    public notifyObserversAboutLightState(): void {
        this.notifyObservers(this.getLightState());
    }
}
