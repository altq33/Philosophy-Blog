export interface IBtn {
    className: string;
    text: string;
    type?: string;
    onClick?: () => void;
}
export interface IInput {
    className: string;
    classNameLabel: string;
    type?: string;
    label: string;
    name: string;
    value?: string;
    onChange?: (e: any) => void;
}