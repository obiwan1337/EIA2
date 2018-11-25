declare namespace L05_AssocArraysAndExport {
    interface HeteroPredef {
        text: string;
        value: number;
        truth: boolean;
        words: string[];
    }
    interface HomoVar {
        [key: string]: HeteroPredef[];
    }
    let data: HomoVar;
}
//# sourceMappingURL=Data.d.ts.map