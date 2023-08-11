
// This file have all path of react routing for Add property page

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Addproperty.css'
import BasicDetail from './BasicDetail'
import General_info from './General_info'
import Location from "./Location_info";
import PropertyDetail from "./PropertyDetail";



export default function AddpropertyRouter() {



    return <div>

        <BrowserRouter>
            <h2 className="prop_heading">Add New Property</h2>
            <div className="page_indicator" >
                <div className="indi">Basic Detail</div>
                <div className="indi">Property Detail</div>
                <div className="indi">General Info</div>
                <div className="indi">Location Info</div>
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