import React from "react";
import info_user from "./info_user.module.scss";
import { IQualityUser } from "../../../types/Interfaces";
export const Quality: React.FC<IQualityUser> = ({quality_user}) => {
    return ( 
        <li className={info_user.quality}>
            {quality_user}
        </li> 
    );
}