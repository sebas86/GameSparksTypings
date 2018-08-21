///<reference path="IRTDataBuilder.d.ts"/>

interface IRTPacketBuilder {
    send(): void;
    setData(value: IRTDataBuilder): IRTPacketBuilder;
    setOpCode(value: number): IRTPacketBuilder;
    setReliable(value: boolean): IRTPacketBuilder;
    setSender(peerId: number): IRTPacketBuilder;
    setTargetPeers(peerIds: number[]): IRTPacketBuilder;
}