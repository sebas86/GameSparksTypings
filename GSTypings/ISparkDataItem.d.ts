interface ISparkDataItem{
    getTTL() : number;
    getData() : any;
    delete() : ISparkDataResult;
    getId() : string;
    persistor() : ISparkDataItemPersistor;
    setData(data : any) : ISparkDataItem;
    setTTL(ttl : number) : void;
    getType() : string;
    getValidationErrors() : string[];
}