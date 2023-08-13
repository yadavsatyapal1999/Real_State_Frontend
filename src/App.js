

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from "./DesktopPages/Home";
import SideBar from "./componants/Sidebar";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LogIn/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/propertyView' element={<PropertyView/>}/>
      {/* <Route path='/editproperty' element={<Editproperty/>}/> */}
    </Routes>
  </BrowserRouter>
 
  );
}

export default App;
