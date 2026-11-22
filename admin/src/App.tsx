import React from 'react';
import NavBar from './components/NavBar/Navbar';
import SideBar from './components/Sidebar/Sidebar';

const App = ()=>{
    return (
      <div>
        <NavBar/>
        <div className="app-content">
          <SideBar/>
        </div>
      </div>
    )
}

export default App;