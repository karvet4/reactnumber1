import React from 'react';
import Logo from "./Logo";
import TopMenu from "./TopMenu";


function Header(props) {

    return (
        <div>
            Header
        <button onClick={() => props.attempt('shark')}>Shark</button>
        <Logo/>
            This is Header {props.version}

            {props.menuItems.map(el => <TopMenu key={el} item={el}/>)}

            </div>
    );
}

export default Header;
