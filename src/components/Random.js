import React from "react";

const Random = ({min, max}) => {
    return(
        <>
        <h1>Random value between {min} and {max} ={">"} {Math.floor(Math.random() * (max - min) + min)}</h1>
        </>
    )
}

export default Random