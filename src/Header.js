import React from 'react';
import Logo from "./Logo";
import TopMenu from "./TopMenu";


function Header(props) {
    const add = () => {console.log ('ADD')
    props.attempt('shark') }

    return (
        <div>
            Header
        <button onClick={add}>add</button>
        <Logo/>
            This is Header {props.version}
            <ul>
            {props.menuItems.map(el => <TopMenu key={el} item={el}/>)}
            </ul>
            </div>
    );
}

export default Header;
