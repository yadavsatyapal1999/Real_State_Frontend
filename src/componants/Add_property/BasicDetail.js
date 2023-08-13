// This page takes basic detail of property in a form

import { useContext } from "react";
import Button from "./Button";
import { PropertyContext } from "./ContextProvider";


export default function BasicDetail() {

const {BasicDetail,SetBasicDetail} = useContext(PropertyContext);
// Adding property dynamically
const addValue = (property, value) => {
    SetBasicDetail({
        ...BasicDetail,
        [property]: value // updating property dynamically on the basis of id
    });
};

  const handleClick = (event) => {
    const elementId = event.target.id;
    const elementValue = event.target.value; 
    addValue(elementId, elementValue);
};


    return <form action="#" className="outer_form" >
        <div className="form">

            <div className="form_first">
                <label htmlFor="property_type">Property Type</label>
                <br />
                <select id="property_type"  onChange={handleClick} required >
                    <option value="select_property" disabled selected >Select Property Type</option>
                    <option value="Home">Home</option>
                    <option value="Plot">Plot</option>
                    <option value="Apartment">Apartment</option>
                </select>
                <br />
                <label htmlFor="price">Price</label>
                <br />
                <input type="number" id="price" onChange={handleClick}  required  />
                <br />
                <label htmlFor="property_age">Property Age</label>
                <br />
                <select id="property_age" onChange={handleClick} required  >
                    <option disabled selected>Select Property Age</option>
                    <option>20</option>
                    <option>35</option>
                    <option>50</option>
                    <option>70</option>
                    <option>80</option>
                </select>
                <br />
                <label htmlFor="property_description">Property Description</label>
                <br />
                <input type="text" id="property_description" onChange={handleClick}  />
                <br />

            </div>
            <div className="form_Second">
                <label htmlFor="negotiable">Negotiable</label>
                <br />
                <select id="negotiable" onChange={handleClick} >
                    <option disabled selected>Negotiable</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                <br />
                <label htmlFor="ownerShip">Ownership</label>
                <br />
                <select id="ownerShip" onChange={handleClick} required  >
                    <option disabled selected >Select Ownership</option>
                    <option>Indvidual</option>
                    <option>Joint</option>
                </select>
                <br />
                <label htmlFor="property_approved">Property Approved</label>
                <br />
                <select id="property_approved" onChange={handleClick} >
                    <option disabled selected>Property Approved</option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
                <br />
                <label htmlFor="bank_lone">Bank Loan</label>
                <br />
                <select id="bank_loan" onChange={handleClick} required  >
                    <option disabled selected>Select Bank Loan</option>
                    <option>Available</option>
                    <option>Not Available</option>
                </select>
            </div>
        </div>
        <Button
            backWardPath={"/"}
            forWardPath={"/addproperty/property_detail"}
            children1={"Cancel"}
            children2={"Save & Next"} />
    </form>

}