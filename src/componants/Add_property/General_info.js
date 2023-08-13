
import { useContext } from "react";
import Button from "./Button";
import { PropertyContext } from "./ContextProvider";
import PageIndicator from "./PageIndicator";

export default function General_info() {

    const { General_info, SetGeneral_info,SetAddProperty,BasicDetail, PropertyDetail } = useContext(PropertyContext);
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

    const mergeProperty = ()=>{
  SetAddProperty({
    ...BasicDetail,
    ...PropertyDetail,
    ...General_info
  })
    }
    return <div className="router">
    <PageIndicator/>
    <form className="outer_form" >
        <div className="form">

            <div className="form_first">
                <label htmlFor="owner_name">Name</label>
                <br />
                <input type="text" id="owner_name" placeholder="Owner Name" onChange={handleClick}  required/>
                <br />
                <label htmlFor="postedby">Posted By</label>
                <br />
                <select id="postedby" onChange={handleClick} >
                    <option disabled selected >Posted By</option>
                    <option>Owner</option>
                    <option>Sales Agent</option>
                    <option>Dealer</option>
                </select>
                <br />
                <label htmlFor="featuerd">Featured Package</label>
                <br />
                <select id="featured" onChange={handleClick}  >
                    <option disabled selected >Please Select</option>
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
                    onChange={handleClick}
                    required  minLength={10} maxLength={10} />
                <br />
                <label htmlFor="saletype">Sale Type</label>
                <br />
                <select id="saletype" onChange={handleClick} >
                    <option disabled selected >Please Select</option>
                    <option>?</option>
                    <option>?</option>
                </select>
                <br />
                <label htmlFor="ppdpackage">PPD Package</label>
                <br />
                <select id="ppdpackage" onChange={handleClick} >
                    <option disabled selected>Please Select</option>
                    <option>?</option>
                    <option>?</option>
                </select>
            </div>
        </div>
        <Button
            backWardPath={"/addproperty/property_detail"}
            forWardPath={"/addproperty/location_info"}
            children1={"Previous"}
            children2={"Save & Next"}
            forward_action={mergeProperty} />
    </form>
    </div>
}