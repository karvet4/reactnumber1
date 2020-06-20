import React from 'react';
import './App.css';
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App() {
    const appVersion = '2.3.4';
    const menu = ['About', 'Contacs', 'Tel number'];
    const footerMenuItems = ['bla' , 'blabal2', 'balabal'];
    const fisher = (fish) => {console.log('Pull ' + fish)}
    const click = (click) => {console.log('click' + click)}

  return (
      <div className="App">


          <Header version={appVersion} menuItems={menu} attempt={fisher}/>
          <Content/>
          <h1>Hello</h1>
          <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          <Footer appVersion={appVersion} footerMenuItems={footerMenuItems} attempt={fisher} click={click} />
      </div>
  );
}

export default App;
