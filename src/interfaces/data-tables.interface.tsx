export interface IHeader {
    columns: string;
    key: string;
    editable?: boolean
}
export interface IData {
    firstName: string;
    lastName: string;
    age: string | number;
    sex: string;
    tall: string | number
}

export type IDataType = { [x: string]: string }

export interface IDataTableProps {
    headers: IHeader[];
    data: IData[]
}