
import axios from 'axios';
import { useContext } from "react"
import { PropertyContext } from "../componants/Add_property/ContextProvider";
import { useNavigate } from 'react-router-dom';


export default function LocationEdit({ SetPage}) {
    const {newData ,SetnewData} = useContext(PropertyContext)
    const Navigate = useNavigate()
    const id = newData._id;
    const handleSubmit = async () => {

        try {
            const resp = await axios.put(`http://localhost:8080/prop/v1/updateproperty/${id}`, newData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (resp.status == 200) {
                alert("Data edited Sucessfully")
                Navigate("/home")
            }
            else {
                alert("unable to save data")
            }
        }
        catch (err) {
            alert("Internal server error");
            console.log(err)
        }

    }


    return <div className="router">

        <form className="outer_form" onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();

        }} >
            <div className="form">

                <div className="form_first">
                    <label htmlFor="email">Email</label>
                    <br />
                    <input type="email" id="email" placeholder="Email"
                        onChange={(e) => {
                            SetnewData({
                                ...newData,
                                email: e.target.value
                            })
                        }}
                        required
                        value={newData.email} />
                    <br />
                    <label htmlFor="addressarea">Area</label>
                    <br />
                    <select id="addressarea" onChange={(e) => {
                        SetnewData({
                            ...newData,
                            addressarea: e.target.value
                        })
                    }}
                        value={newData.addressarea}  >
                        <option value="" disabled >Select Area</option>
                        <option>Urban</option>
                        <option>rural</option>
                    </select>
                    <br />
                    <label htmlFor="address">Address</label>
                    <br />
                    <input type="text" id="address" placeholder="Address"
                        onChange={(e) => {
                            SetnewData({
                                ...newData,
                                address: e.target.value
                            })
                        }}
                        required
                        value={newData.address} />
                    <br />
                    <label htmlFor="latitude">Latitude</label>
                    <br />
                    <input type="text" id="latitude" placeholder="Latitude" onChange={(e) => {
                        SetnewData({
                            ...newData,
                            latitude: e.target.value
                        })
                    }}
                        value={newData.latitude} />
                    <br />
                </div>
                <div className="form_second">
                    <label htmlFor="city">City</label>
                    <br />
                    <select id="city" onChange={(e) => {
                        SetnewData({
                            ...newData,
                            city: e.target.value
                        })
                    }} required
                        value={newData.city} >
                        <option value="" disabled>Select City</option>
                        <option>Gurgaon</option>
                        <option>Delhi</option>
                    </select>
                    <br />

                    <label htmlFor="pincode">Pincode</label>
                    <br />
                    <select id="pincode" onChange={(e) => {
                        SetnewData({
                            ...newData,
                            pincode: e.target.value
                        })
                    }} required
                        value={newData.pincode} >
                        <option value="" disabled >Select Pincode</option>
                        <option>50032</option>
                        <option>785620</option>
                    </select>
                    <br />
                    <label htmlFor="landmark">Landmark</label>
                    <br />
                    <input type="text" id="landmark"
                        placeholder="Landmark" onChange={(e) => {
                            SetnewData({
                                ...newData,
                                landmark: e.target.value
                            })
                        }}
                        value={newData.landmark} />
                    <br />
                    <label htmlFor="longitude">Longitude</label>
                    <br />
                    <input type="text" id="longitude" placeholder="Longitude" onChange={(e) => {
                        SetnewData({
                            ...newData,
                            longitude: e.target.value
                        })
                    }}
                        value={newData.longitude} />
                    <br />
                </div>
            </div>

            <button className="btn1" onClick={() => {
                SetPage(3)
            }}>Previous</button>
            <button className="btn2" type="submit">Add Property</button>
        </form>
    </div>
}