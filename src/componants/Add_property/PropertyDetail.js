


export default function PropertyDetail() {

    return <div className="form">
        <form>
        <div className="form_first">
            <label htmlFor="length">Length(feet)</label>
            <br />
            <input type=" number" id="length" placeholder="Example 1000" />
            <br />
            <label htmlFor="area">Area</label>
            <br />
            <input type="number" id="area" placeholder="Example 8000" />
            <br />
            <label htmlFor="bhk">No. of BHK</label>
            <br />
            <select id="bhk">
                <option>Select No. of BHK</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <br />
            <label htmlFor="attach">Attached</label>
            <br/>
            
            <select id="attach">
                <option>Attached</option>
                <option>?</option>
                <option>?</option>
            </select>
            <br />
            <label htmlFor="furnish">Furnished</label>
            <br />
            <select id="furnish">
                <option>Select furnish</option>
                <option>Fully Furnished</option>
                <option>Partially Furnished</option>
                <option>Unfurnished</option>
            </select>
            <br />
            <label htmlFor="lift">Lift</label>
            <br />
            <select id="lift">
                <option>Select Lift</option>
                <option>Available</option>
                <option>Not Available</option>
            </select>
            <br />
            <label htmlFor="facing">Facing</label>
            <br />
            <select id="facing">
                <option>Select Facing</option>
                <option>East</option>
                <option>West</option>
                <option>North</option>
                <option>South</option>
            </select>
            <br />
        </div>
        <div className="form_second">
            <label htmlFor="width">Breath(in feet)</label>
            <br />
            <input type="number" id="width" placeholder="Example 700" />
            <br />
            <label htmlFor="unit">Area Unit</label>
            <br />
            <select id="unit">
                <option>Area Unit</option>
                <option>Sq. Feet</option>
                <option>Sq. Inch</option>
                <option>Sq. Meter</option>
            </select>
            <br />
            <label htmlFor="floor">No. of floor</label>
            <br />
            <select id="floor">
                <option>Select No. of Floor</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <br />
            <label htmlFor="toilet">Western Toilet</label>
            <br />
            <select id="toilet">
                <option>Select Western Toilet</option>
                <option>Avaialbe</option>
                <option>Not Available</option>
            </select>
            <br />
            <label htmlFor="parking">Car Parking</label>
            <br />
            <select id="parking">
                <option>Select Car Parking</option>
                <option>Avaialbe</option>
                <option>Not Available</option>
            </select>
            <br />
            <label htmlFor="electric">Electricity</label>
            <br />
            <input type="text" id="electric" placeholder="Example 3 phase" />
        </div>
        </form>
    </div>
}