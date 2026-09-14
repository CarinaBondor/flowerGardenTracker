export interface Bouquet {
    id: string;
    title: string;
    done: boolean;
}

export type BouquetFilter = "all" | "todo" | "done";
