
import "./Addproperty.css";

export default function Location() {


    return <form>
    <div className="form">
        
            <div className="form_first">
                <label htmlFor="email">Email</label>
                <br />
                <input type="text" id="" placeholder="Email" />
                <br />
                <label htmlFor="selcet_area">Area</label>
                <br />
                <select id="selcet_area">
                    <option>Select Area</option>
                    <option>?</option>
                    <option>?</option>
                </select>
                <br />
                <label htmlFor="address">Address</label>
                <br />
                <input type="text" id="address" placeholder="Address" />
                <br />
                <label htmlFor="latitude">Latitude</label>
                <br />
                <input type="text" id="latitude" placeholder="Latitude" />
                <br />
            </div>
            <div className="form_second">
                <label htmlFor="city">City</label>
                <br />
                <select id="city">
                    <option>Select City</option>
                    <option>?</option>
                    <option>?</option>
                </select>
                <br />

                <label htmlFor="code">Pincode</label>
                <br />
                <select id="code">
                    <option>Select Pincode</option>
                    <option>?</option>
                    <option>?</option>
                </select>
                <br />
                <label htmlFor="landmark">Landmark</label>
                <br />
                <input type="text" id="landmark" placeholder="Landmark" />
                <br />
                <label htmlFor="longitude">Longitude</label>
                <br />
                <input type="text" id="longitude" placeholder="Longitude" />
                <br />
            </div>
    </div>
    </form>
}