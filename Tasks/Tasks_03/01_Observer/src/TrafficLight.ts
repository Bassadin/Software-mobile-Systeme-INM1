import Observable from "./Pattern/Observable";

export enum TrafficLightState {
    GREEN = "green",
    RED = "red",
}

export class TrafficLight extends Observable<String> {
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

    private notifyObserversAboutLightState(): void {
        this.notifyObservers(this.getLightState());
    }
}
