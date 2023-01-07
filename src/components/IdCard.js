import React from "react";
import './idCard.css'

const IdCard = ({lastName, firstName, gender, height, birth, picture}) => {
    return(
        <div className='user'>
        <div className='pic'>
            <img src={picture} alt="pict"/>
        </div>
        <div className='infos'>
        <p><b>First name:</b> {firstName}</p>
        <p><b>Last name:</b> {lastName}</p>
        <p><b>Gender:</b> {gender}</p>
        <p><b>Height:</b> {height}</p>
        <p><b>Birth:</b> {birth.toDateString()}</p>
        </div>
        </div>
    )
}

export default IdCard