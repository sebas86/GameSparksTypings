interface IRTDataBuilder {
    setData(index: number, value: IRTDataBuilder): IRTDataBuilder;
    setDouble(index: number, value: number): IRTDataBuilder;
    setFloat(index: number, value: number): IRTDataBuilder;
    setFloatArray(index: number, value: number[]): IRTDataBuilder;
    setNumber(index: number, value: number): IRTDataBuilder;
    setString(index: number, value: string): IRTDataBuilder;
}