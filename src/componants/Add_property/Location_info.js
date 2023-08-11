

// This is location information page of Add property

import { useContext } from "react";
import Button from "./Button"
import { PropertyContext } from "./ContextProvider";

export default function Location() {

    const { Location_info, SetLocation_info, SetAddProperty, BasicDetail, PropertyDetail, } = useContext(PropertyContext);
    // Adding property dynamically
    const addValue = (property, value) => {
        SetLocation_info({
            ...Location_info,
            [property]: value // updating property dynamically on the basis of id
        });
    };

    const handleClick = (event) => {
        const elementId = event.target.id;
        const elementValue = event.target.value;
        addValue(elementId, elementValue);
    };

    return <form onSubmit={(e) => {
        e.preventDefault();
        SetAddProperty({  // merging all object into single object
            ...BasicDetail,
            ...PropertyDetail,
            ...Location_info
        })

    }} >
        <div className="form">

            <div className="form_first">
                <label htmlFor="email">Email</label>
                <br />
                <input type="email" id="email" placeholder="Email" onChange={handleClick} />
                <br />
                <label htmlFor="addressarea">Area</label>
                <br />
                <select id="addressarea" onChange={handleClick}  >
                    <option>Select Area</option>
                    <option>?</option>
                    <option>?</option>
                </select>
                <br />
                <label htmlFor="address">Address</label>
                <br />
                <input type="text" id="address" placeholder="Address" onChange={handleClick} />
                <br />
                <label htmlFor="latitude">Latitude</label>
                <br />
                <input type="text" id="latitude" placeholder="Latitude" onChange={handleClick} />
                <br />
            </div>
            <div className="form_second">
                <label htmlFor="city">City</label>
                <br />
                <select id="city" onChange={handleClick} >
                    <option>Select City</option>
                    <option>?</option>
                    <option>?</option>
                </select>
                <br />

                <label htmlFor="pincode">Pincode</label>
                <br />
                <select id="pincode" onChange={handleClick} >
                    <option>Select Pincode</option>
                    <option>?</option>
                    <option>?</option>
                </select>
                <br />
                <label htmlFor="landmark">Landmark</label>
                <br />
                <input type="text" id="landmark" placeholder="Landmark" onChange={handleClick} />
                <br />
                <label htmlFor="longitude">Longitude</label>
                <br />
                <input type="text" id="longitude" placeholder="Longitude" onChange={handleClick} />
                <br />
            </div>
        </div>
        <Button
            backWardPath={"/addproperty/general_info"}
            forWardPath={"/addproperty"}
            children1={"Previous"}
        />
        <button type="submit">Add Property</button>
    </form>
}