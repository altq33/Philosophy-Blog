import React from "react";
import user_information from "./user_information.module.scss";
import { IUserInfo } from "../../types/Interfaces";
export const UserInformation: React.FC<IUserInfo> = ({title, children}) => {
    return (
        <div className={user_information.info_card}>
            <h2 className={user_information.title_block}>{title}</h2>
            <div className={user_information.content_block}>{children}</div>
        </div>
    );
}