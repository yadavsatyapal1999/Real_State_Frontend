

// This is property detail page of add property

import { useContext, useEffect, useState } from "react"
import Button from "./Button"
import { PropertyContext } from "./ContextProvider"
import PageIndicator from "./PageIndicator";

export default function PropertyDetail() {
    /* const [area,SetArea] = useState(0);
     const [length,SetLength] = useState();
     const [breath,SetBreath]=useState();
     function CalculateArea(){
         if(length !== undefined || length!== null){
             if(breath !== undefined || breath !== null){
                 SetArea(Number(length) * Number(breath))
             }
         }
     }
 useEffect(()=>{
     CalculateArea();
 },[length,breath])*/

    const { PropertyDetail, SetPropertyDetail } = useContext(PropertyContext);
    /* Logic to calculate area*/

    // Adding property dynamically
    const addValue = (property, value) => {
        SetPropertyDetail({
            ...PropertyDetail,
            [property]: value // updating property dynamically on the basis of id
        });
    };
    console.log(PropertyDetail)
    const handleClick = (event) => {
        const elementId = event.target.id;
        const elementValue = event.target.value;
        addValue(elementId, elementValue);
    };

    return <div className="router">
        <PageIndicator />
        <form className="outer_form">
            <div className="form">

                <div className="form_first">
                    <label htmlFor="length">Length</label>
                    <br />
                    <input type=" number" id="length" placeholder="Example 1000" onChange={(e) => {
                        handleClick(e);


                    }} required />
                    <br />
                    <label htmlFor="area">Area</label>
                    <br />
                    <input type="number" id="area" onChange={handleClick} />
                    <br />
                    <label htmlFor="bhk">No. of BHK</label>
                    <br />
                    <select id="bhk" onChange={handleClick} required  >
                        <option disabled selected>Select No. of BHK</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <br />
                    <label htmlFor="attached">Attached</label>
                    <br />

                    <select id="attached" onChange={handleClick} multiple >
                        <option disabled selected >Attached</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                    <br />
                    <label htmlFor="furnished">Furnished</label>
                    <br />
                    <select id="furnished" onChange={handleClick} required  >
                        <option disabled selected >Select furnish</option>
                        <option>Fully Furnished</option>
                        <option>Partially Furnished</option>
                        <option>Unfurnished</option>
                    </select>
                    <br />
                    <label htmlFor="lift">Lift</label>
                    <br />
                    <select id="lift" onChange={handleClick} >
                        <option disabled selected>Select Lift</option>
                        <option>Available</option>
                        <option>Not Available</option>
                    </select>
                    <br />
                    <label htmlFor="facing">Facing</label>
                    <br />
                    <select id="facing" onChange={handleClick} required >
                        <option disabled selected >Select Facing</option>
                        <option>East</option>
                        <option>West</option>
                        <option>North</option>
                        <option>South</option>
                    </select>
                    <br />
                </div>
                <div className="form_second">
                    <label htmlFor="breath">Breath</label>
                    <br />
                    <input type="number" id="breath" placeholder="Example 700" onChange={(e) => {
                        handleClick(e);

                    }
                    } required />
                    <br />
                    <label htmlFor="area_unit">Area Unit</label>
                    <br />
                    <select id="area_unit" onChange={handleClick} required >
                        <option disabled selected>Area Unit</option>
                        <option>Sq. Feet</option>
                        <option>Sq. Inch</option>
                        <option>Sq. Meter</option>
                    </select>
                    <br />
                    <label htmlFor="floor" >No. of floor</label>
                    <br />
                    <select id="floor" onChange={handleClick} >
                        <option disabled selected >Select No. of Floor</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <br />
                    <label htmlFor="western">Western Toilet</label>
                    <br />
                    <select id="western" onChange={handleClick}  >
                        <option disabled selected>Select Western Toilet</option>
                        <option>Avaialbe</option>
                        <option>Not Available</option>
                    </select>
                    <br />
                    <label htmlFor="parking">Car Parking</label>
                    <br />
                    <select id="parking" onChange={handleClick} >
                        <option disabled selected >Select Car Parking</option>
                        <option>Avaialbe</option>
                        <option>Not Available</option>
                    </select>
                    <br />
                    <label htmlFor="electricity">Electricity</label>
                    <br />
                    <input type="text" id="electricity" placeholder="Example 3 phase" onChange={handleClick} />
                </div>
            </div>
            <Button
                backWardPath={"/addproperty/basic_detail"}
                forWardPath={"/addproperty/general_info"}
                children1={"Previous"}
                children2={"Save & Next"} />
        </form>
    </div>
}