
import { useContext } from "react";
import Button from "./Button";
import { PropertyContext } from "./ContextProvider";

export default function General_info() {

    const { General_info, SetGeneral_info } = useContext(PropertyContext);
    // Adding property dynamically
    const addValue = (property, value) => {
        SetGeneral_info({
            ...General_info,
            [property]: value // updating property dynamically on the basis of id
        });
    };

    const handleClick = (event) => {
        const elementId = event.target.id;
        const elementValue = event.target.value;
        addValue(elementId, elementValue);
    };
    return <form>
        <div className="form">

            <div className="form_first">
                <label htmlFor="owner_name">Name</label>
                <br />
                <input type="text" id="owner_name" placeholder="Owner Name" onChange={handleClick} />
                <br />
                <label htmlFor="postedby">Posted By</label>
                <br />
                <select id="postedby" onChange={handleClick} >
                    <option>Posted By</option>
                    <option>?</option>
                    <option>?</option>
                </select>
                <br />
                <label htmlFor="featuerd">Featured Package</label>
                <br />
                <select id="featured" onChange={handleClick}  >
                    <option>Please Select</option>
                    <option>?</option>
                    <option>?</option>
                    <option>?</option>
                </select>
                <br />
                {/* This function to be handled by multer no addin 
                now will do it later*/}
                <input type="file" id="image" />
                <label htmlFor="image" >Add Photo</label>
                <br />
            </div>
            <div className="form_second" >
                <label htmlFor="mobile">Mobile</label>
                <br />
                <input type="number" id="mobile"
                    placeholder="Enter Mobile Number"
                    onChange={handleClick} />
                <br />
                <label htmlFor="saletype">Sale Type</label>
                <br />
                <select id="saletype" onChange={handleClick} >
                    <option>Please Select</option>
                    <option>?</option>
                    <option>?</option>
                </select>
                <br />
                <label htmlFor="ppdpackage">PPD Package</label>
                <br />
                <select id="ppdpackage" onChange={handleClick} >
                    <option>Please Select</option>
                    <option>?</option>
                    <option>?</option>
                </select>
            </div>
        </div>
        <Button
            backWardPath={"/addproperty/property_detail"}
            forWardPath={"/addproperty/location_info"}
            children1={"Previous"}
            children2={"Save & Next"} />
    </form>

}