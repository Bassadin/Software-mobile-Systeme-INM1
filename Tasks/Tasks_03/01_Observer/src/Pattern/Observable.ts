import Observer from "./Observer";

export default abstract class Observable {
    private observers: Observer[] = [];

    addObserver(observer: Observer) {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer) {
        this.observers.push(observer);
    }

    notifyObservers(data: String) {
        this.observers.forEach((eachObserver) => eachObserver.update(data));
    }
}
