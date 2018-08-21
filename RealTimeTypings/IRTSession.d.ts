///<reference path="IRTDataBuilder.d.ts"/>
///<reference path="IRTLogger.d.ts"/>
///<reference path="IRTPacket.d.ts"/>
///<reference path="IRTPlayer.d.ts"/>
///<reference path="RTPacketBuilder.d.ts"/>
///<reference path="RTRequestBuilder.d.ts"/>

interface IRTSession {
    clearInterval(intervalId: number): void;
    clearTimeout(timeoutId: number): void;
    getLogger(): IRTLogger;
    newData(): IRTDataBuilder;
    newPacket(): IRTPacketBuilder;
    newRequest(): IRTRequestBuilder;

    onPacket(opCode: number, handler: (packet: IRTPacket) => void): void;
    onPlayerConnect(handler: (player: IRTPlayer) => void): void;
    onPlayerDisconnect(handler: (player: IRTPlayer) => void): void;

    getPlayer(peerId: number): IRTPlayer;
    getPlayers(): IRTPlayer[];
    getSessionId(): string;

    setInterval(callback: () => void, milliseconds: number): number;
    setTimeout(callback: () => void, milliseconds: number): number;
}