import Observer from "./Observer";

export default abstract class Subject {
    private observers: Observer[] = [];

    addObserver(observer: Observer) {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer) {
        this.observers.push(observer);
    }

    notifyObservers(data: any) {
        this.observers.forEach((eachObserver) => eachObserver.update(data));
    }
}
