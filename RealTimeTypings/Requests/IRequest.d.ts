interface IRequest {
    send(callback: (response: any) => void): void;
    setPlayerId(playerId: string): void;
    setScriptData(data: any): void;
}