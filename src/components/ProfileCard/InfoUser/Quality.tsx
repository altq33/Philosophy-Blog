import React from "react";
import info_user from "./info_user.module.scss";
import { IQualityUser } from "../../../types/Interfaces";
export const Quality: React.FC<IQualityUser> = ({value}) => {
    return ( 
        <li className={info_user.quality}>
            {value}
        </li> 
    );
}