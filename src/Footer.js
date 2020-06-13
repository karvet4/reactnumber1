import React from 'react';
import FooterMenu from "./FooterMenu";



function Footer(props) {
    return (
        <div>
            This is Footer {props.appVersion}
            {props.footerMenuItems.map(el => <FooterMenu key={el} item={el}/>)}
            <button onClick={() => props.attempt('Tilapia')}>Tilapia</button>
            <p><input type= "text"/></p>
        </div>
    );
}

export default Footer;
