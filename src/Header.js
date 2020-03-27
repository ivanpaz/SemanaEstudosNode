import React from 'react';
function Header(props){ //recebe as propriedades 

    return(
        <header><h1>Be The Hero - Header - {props.title}</h1></header>
        //Caso tenha uma propriedade title, usa no HTML. Propriedades entre {}
    );

}

export default Header;