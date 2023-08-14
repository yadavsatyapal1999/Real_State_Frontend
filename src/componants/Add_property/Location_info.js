
// This is location information page of Add property

import { useContext } from "react";
import Button from "./Button"
import { PropertyContext } from "./ContextProvider";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import PageIndicator from "./PageIndicator";

export default function Location() {

    const { SetAddProperty, AddProperty, Loader, SetLoader } = useContext(PropertyContext);
    const navigate = useNavigate();

    // Adding property dynamically
    const addValue = (property, value) => {
        SetAddProperty({
            ...AddProperty,
            [property]: value // updating property dynamically on the basis of id
        });
    };


    const handleClick = (event) => {
        const elementId = event.target.id;
        const elementValue = event.target.value;
        addValue(elementId, elementValue);
    };

    const handleSubmit = async (event) => {
        const token = localStorage.getItem("token");
        console.log("token")
        const data = AddProperty
        try {

            const response = await axios.post("http://localhost:8080/prop/v1/addproperty", data,{
                headers:{
                    "Authorization": token
                }
            });

            if (response.status == 200) {

                alert("Data Saved sucessFully");

            } else {

                alert("unable to save data make sure all required data filled");
            }
        }
        catch (error) {

            alert("Unable to save Please ensure All data Are Filled")
        }

    }

    return <div className="router">
        <PageIndicator />

        <form className="outer_form" onSubmit={(event) => {
event.preventDefault();
            handleSubmit(event);

        }} >
            <div className="form">

                <div className="form_first">
                    <label htmlFor="email">Email</label>
                    <br />
                    <input type="email" id="email" placeholder="Email" onChange={handleClick} required />
                    <br />
                    <label htmlFor="addressarea">Area</label>
                    <br />
                    <select id="addressarea" onChange={handleClick}  >
                        <option disabled selected >Select Area</option>
                        <option>Urban</option>
                        <option>rural</option>
                    </select>
                    <br />
                    <label htmlFor="address">Address</label>
                    <br />
                    <input type="text" id="address" placeholder="Address" onChange={handleClick} required />
                    <br />
                    <label htmlFor="latitude">Latitude</label>
                    <br />
                    <input type="text" id="latitude" placeholder="Latitude" onChange={handleClick} />
                    <br />
                </div>
                <div className="form_second">
                    <label htmlFor="city">City</label>
                    <br />
                    <select id="city" onChange={handleClick} required >
                        <option disabled selected>Select City</option>
                        <option>Gurgaon</option>
                        <option>Delhi</option>
                    </select>
                    <br />

                    <label htmlFor="pincode">Pincode</label>
                    <br />
                    <select id="pincode" onChange={handleClick} required  >
                        <option disabled selected >Select Pincode</option>
                        <option>50032</option>
                        <option>785620</option>
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
                children2={"Add Property"}
            />

        </form>
    </div>
} 