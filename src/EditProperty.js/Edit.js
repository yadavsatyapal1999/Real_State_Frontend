import { useEffect, useState } from "react";
import BasicEdit from "./BasicEdit";
import PropertyEdit from "./PropertyEdit";
import GeneralEdit from "./GeneralEdit";
import LocationEdit from "./LocationEdit";

export default function Edit() {

    const [page, SetPage] = useState(1)
    const [newData,SetnewData] = useState()
const formdata = localStorage.getItem("PropertyData");

    useEffect(()=>{
        SetnewData({
            ... formdata
        })
    },[])


    
    let form;

    switch (page) {
        case 1:
            form = <BasicEdit SetPage ={SetPage} newData={newData} SetnewData ={SetnewData} />;
            break;
        case 2:
            form = <PropertyEdit SetPage ={SetPage} newData={newData} SetnewData ={SetnewData}  />;
        case 3:
            form = <GeneralEdit SetPage ={SetPage} newData={newData} SetnewData ={SetnewData} />;
        case 4:
            form = <LocationEdit SetPage ={SetPage}  newData={newData} SetnewData ={SetnewData}/>;

    }


    return <div>
        {form}
    </div>


}