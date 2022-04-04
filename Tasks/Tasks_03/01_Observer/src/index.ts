import Pedestrian from "./Pedestrian";
import { TrafficLight } from "./TrafficLight";

let trafficLight: TrafficLight = new TrafficLight();

let pedestrian1: Pedestrian = new Pedestrian("Peter");
trafficLight.addObserver(pedestrian1);

let pedestrian2: Pedestrian = new Pedestrian("Hilde");
trafficLight.addObserver(pedestrian2);

trafficLight.switchLateState();