
// This page is providing data to every component using Context

import { createContext } from "react";
import { useState } from "react";
import AddpropertyRouter from "./AddpropertyRouter";

export const PropertyContext = createContext(""); // Creating context to pass data


export function ContextFunction() {

    const [BasicDetail, SetBasicDetail] = useState({   // This function store all the
        // information of Basic Detail

    })
    const [PropertyDetail, SetPropertyDetail] = useState({
        // This function will store data for  PropertyDetail page
    })
    const [General_info, SetGeneral_info] = useState({
        // This state will temporary store page General_info Data
    })
    const [Location_info, SetLocation_info] = useState({
        // This state will temporary store page Location_info Data
    })

    const [AddProperty, SetAddProperty] = useState({
        // It will store all detail od property and this data will be saved into data base
    })
   
    console.log(AddProperty);
    
    return <PropertyContext.Provider
        value={{
            BasicDetail,
            SetBasicDetail
            , PropertyDetail,
            SetPropertyDetail,
            General_info,
            SetGeneral_info,
            Location_info,
            SetLocation_info,
            AddProperty,
            SetAddProperty
        }}>
        <AddpropertyRouter/>
    </PropertyContext.Provider>
}
