interface IRTData {
    getData(index: number): IRTData;
    getDouble(index: number): number;
    getFloat(index: number): number;
    getFloatArray(index: number): number[];
    getNumber(index: number): number;
    getString(index: number): string;
}