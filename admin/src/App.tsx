import React from 'react';
import NavBar from './components/NavBar/Navbar';
import SideBar from './components/Sidebar/Sidebar';
import { Routes,Route } from 'react-router-dom';
import Add from './pages/Add/Add';
import List from './pages/List/List';
import Order from './pages/Order/Order';

const App = ()=>{
    return (
      <div>
        <NavBar/>
        <div className="app-content">
          <SideBar/>
          <Routes>
            <Route path="/add" element={<Add/>}/>
            <Route path="/list" element={<List/>}/>
            <Route path="/orders" element={<Order/>}/>
          </Routes>
        </div>
      </div>
    )
}

export default App;