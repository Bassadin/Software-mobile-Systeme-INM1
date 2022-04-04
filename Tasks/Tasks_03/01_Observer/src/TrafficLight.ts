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
                this.lightState = TrafficLightState.GREEN;
                console.log(
                    `The traffic light has switched to ${this.getLightState()}.`
                );
                this.notifyObserversAboutLightState();
                break;
            case TrafficLightState.GREEN:
                this.lightState = TrafficLightState.RED;
                console.log(
                    `The traffic light has switched to ${this.getLightState()}.`
                );
                this.notifyObserversAboutLightState();
                break;
        }
    }

    public notifyObserversAboutLightState(): void {
        this.notifyObservers(this.getLightState());
    }
}
