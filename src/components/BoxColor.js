import React from "react";
import '../App.css';

const BoxColor = ({r, g ,b}) => {
    return(
        <div className="box" style={{backgroundColor: `rgb(${r},${g},${b})`}}>
            <h1>rgb({r},{g},{b})</h1>
        </div>
    )

}

export default BoxColor