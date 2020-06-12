import React from 'react';
import Logo from "./Logo";
import TopMenu from "./TopMenu";


function Header(props) {
    return (
        <div>

        <Logo/>
            This is Header {props.version}
            <ul>
            {props.menuItems.map(el => <TopMenu key={el} item={el}/>)}
            </ul>
            </div>
    );
}

export default Header;
