///<reference path="IRTData.d.ts"/>
///<reference path="IRTPlayer.d.ts"/>

interface IRTPacket {
    getData(): IRTData;
    getSender(): IRTPlayer;
    getTargetPlayers(): number[];
}