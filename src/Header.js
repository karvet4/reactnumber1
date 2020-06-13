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
            <ul>
            {props.menuItems.map(el => <TopMenu key={el} item={el}/>)}
            </ul>
            </div>
    );
}

export default Header;
