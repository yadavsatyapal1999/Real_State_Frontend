
// This page is providing data to every component using Context

import { createContext } from "react";
import { useState } from "react";


export const PropertyContext = createContext(""); // Creating context to pass data


export function ContextFunction({ children }) {

    const [BasicDetail, SetBasicDetail] = useState({   // This function store all the
        // information of Basic Detail

    })
    const [PropertyDetail, SetPropertyDetail] = useState({
        // This function will store data for  PropertyDetail page
    })
    const [General_info, SetGeneral_info] = useState({
        // This state will temporary store page General_info Data
    })


    const [AddProperty, SetAddProperty] = useState({
        // It will store all detail od property and this data will be saved into data base
    })


    return <PropertyContext.Provider
        value={{
            BasicDetail,
            SetBasicDetail
            , PropertyDetail,
            SetPropertyDetail,
            General_info,
            SetGeneral_info,
            
            AddProperty,
            SetAddProperty
        }}>
        {children}
    </PropertyContext.Provider>
}
