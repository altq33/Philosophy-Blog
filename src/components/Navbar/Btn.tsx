import React from "react";
import { IBtn } from "../../types/Interfaces";


export const Btn: React.FC<IBtn> = ({
    className,
    text,
    onClick
}) => {
    return ( 
        <button onClick={onClick} className={className}>{text}</button>
    );
}