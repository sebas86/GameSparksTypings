///<reference path="IRequest.d.ts"/>

interface IEventRequest extends IRequest {
    setEventKey(value: string): void;
}