
export interface Activity {
    id?: number;
    code?: string;
    name?: string;
    values?: Value[];
}

interface Value {
    id: number,
    code: string,
    name: string,
    full_name: string,
    descendants: descendants[]
}

interface descendants {
    id: number,
    code: string,
    name: string,
    full_name: string,
    descendants: descendants[]
}