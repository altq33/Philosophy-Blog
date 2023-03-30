import React from "react";
import user_list from "./user_list.module.scss";
import { IUserList } from "../../types/Interfaces";

export const UserList: React.FC<IUserList> = ({value}) => {
    return ( 
        <li>{value}</li>
    );
}