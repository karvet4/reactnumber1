import React from 'react';
import FooterMenu from "./FooterMenu";



function Footer(props) {
    return (
        <div>
            This is Footer {props.appVersion}
            {props.footerMenuItems.map(el => <FooterMenu key={el} item={el}/>)}
            <button onClick={() => props.attempt('Tilapia')}>Tilapia</button>
            <p><button onClick={() => props.click('ed_1')}>click 1</button></p>
            <p><button onClick={() => props.click('ed_2')}>click 2</button></p>
            <p><button onClick={() => props.click('ed_3')}>click 3</button></p>
        </div>
    );
}

export default Footer;
