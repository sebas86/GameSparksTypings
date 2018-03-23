interface ISparkDataNumberOperand{
    between(low : number, high : number) : ISparkDataCondition
    eq(value : number) : ISparkDataCondition
    ne(value: number) : ISparkDataCondition
    gt(value : number) : ISparkDataCondition
    in(values : number[]) : ISparkDataCondition
    lt(value : number) : ISparkDataCondition
}