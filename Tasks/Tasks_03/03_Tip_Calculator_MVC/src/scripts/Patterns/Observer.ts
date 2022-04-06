export default abstract class Observer<T> {
    abstract update(data: T): void;
}
