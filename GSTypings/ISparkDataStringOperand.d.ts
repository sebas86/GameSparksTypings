interface ISparkDataStringOperand{
    between(low: string, high: string) : ISparkDataCondition
    eq(value: string) : ISparkDataCondition
    gt(value: string) : ISparkDataCondition
    in(value: string[]) : ISparkDataCondition
    lt(value: string) : ISparkDataCondition
    ne(value: string) : ISparkDataCondition
    startsWith(value: string) : ISparkDataCondition
}