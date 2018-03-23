interface ISparkDataStringOperand{
    between(string: JSON, string: JSON) : ISparkDataCondition
    eq(string: any) : ISparkDataCondition
    gt(string: any) : ISparkDataCondition
    in(string: Number[]) : ISparkDataCondition
    lt(string: any) : ISparkDataCondition
    ne(string: any) : ISparkDataCondition
    startsWith(string: string) : ISparkDataCondition
}