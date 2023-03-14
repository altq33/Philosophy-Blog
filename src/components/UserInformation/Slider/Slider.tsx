import React from "react";
import slider from "./slider.module.scss";
import { ISlider } from "../../../types/Interfaces";
export const Slider: React.FC<ISlider> = ({left_value, right_value, style}) => {
    return ( 
        <div className={slider.parent}>
            <div className={slider.titles}>
                <span>{left_value}</span>
                <span>{right_value}</span>
            </div>
            <div className={slider.slider}>
                <div className={slider.square} style={style}></div>
            </div>
        </div> 
    );
}