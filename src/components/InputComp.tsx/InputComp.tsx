import React from "react";
import { IInput } from "../../types/Interfaces";

export const Input: React.FC<IInput> = ({
    className,
    classNameLabel,
    type,
    label,
    name,
    value,
    onChange
}) => {
    return (
        <label className={classNameLabel}>
            {label}
            <input onChange={onChange} name={name}className={className} type={type} value={value}/>
        </label>
        
    );
}