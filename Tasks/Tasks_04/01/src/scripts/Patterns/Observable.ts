import Observer from "./Observer";

export default abstract class Observable<T> {
    private observers: Observer<T>[] = [];

    addObserver(observer: Observer<T>) {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer<T>) {
        this.observers.push(observer);
    }

    notifyObservers(data: T) {
        this.observers.forEach((eachObserver) => eachObserver.update(data));
    }
}
