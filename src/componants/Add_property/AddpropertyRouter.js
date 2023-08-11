
// This file have all path of react routing for Add property page

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import './Addproperty.css'
import BasicDetail from './BasicDetail'
import General_info from './General_info'
import Location from "./Location_info";
import PropertyDetail from "./PropertyDetail";



export default function AddpropertyRouter() {



    return <div>
        
        <BrowserRouter>
        <h2>Add New Property</h2>
        <div>
            <span>Basic Detail   </span>
            <span>Property Detail   </span>
            <span>General Info   </span>
            <span>Location Info   </span>
        </div>
            <Routes>
                <Route exact path="/addproperty/basic_detail" element={<BasicDetail />} />
                <Route exact path="/addproperty/property_detail" element={<PropertyDetail />} />
                <Route exact path="/addproperty/general_info" element={<General_info />} />
                <Route exact path="/addproperty/location_info" element={<Location />} />
            </Routes>
        </BrowserRouter>
    </div>
}