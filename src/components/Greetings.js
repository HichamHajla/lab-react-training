import React from "react";

const Greetings = ({lang, children}) => {
    return(
        <>
            {lang === "de" ? <h1>Hallo {children}</h1> :
             lang === "fr" ? <h1>Bonjour {children}</h1> :
             lang === "es" ? <h1>Ola {children}</h1> : 
             lang === "en" ? <h1>Hello {children}</h1> : ""} 
        </>
    )

}

export default Greetings