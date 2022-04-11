import Observer from "./Observer";

export default abstract class Observable<MessageType> {
    private observers: Observer<MessageType>[] = [];

    addObserver(observer: Observer<MessageType>) {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer<MessageType>) {
        this.observers.push(observer);
    }

    notifyObservers(data: MessageType) {
        this.observers.forEach((eachObserver) => eachObserver.update(data));
    }
}
