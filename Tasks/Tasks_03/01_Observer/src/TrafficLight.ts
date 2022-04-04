export enum TrafficLightState {
    GREEN = "green",
    RED = "red",
}

export class TrafficLight {
    private lightState: TrafficLightState = TrafficLightState.RED;

    public getLightState(): TrafficLightState {
        return this.lightState;
    }

    public switchLateState() {
        switch (this.lightState) {
            case TrafficLightState.RED:
                TrafficLightState.GREEN;
                break;
            case TrafficLightState.GREEN:
                TrafficLightState.RED;
                break;
        }
    }
}
