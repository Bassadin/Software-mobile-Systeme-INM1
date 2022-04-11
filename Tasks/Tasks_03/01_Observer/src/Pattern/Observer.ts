export default abstract class Observer<MessageType> {
    abstract update(data: MessageType): void;
}
