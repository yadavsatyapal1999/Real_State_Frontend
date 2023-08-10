


export default function General_info(){

    return <div className="form">
        <form>
            <div className="form_first">
                <label htmlFor="name">Name</label>
                <br/>
                <input type="text" id="name" placeholder="Owner Name"/>
                <br/>
                <label htmlFor="posted">Posted By</label>
                <br/>
                <select id="posted">
                    <option>Posted By</option>
                    <option>?</option>
                    <option>?</option>
                </select>
                <br/>
                <label htmlFor="featuerd">Featured Package</label>
                <br/>
                <select id="feature">
                    <option>Please Select</option>
                    <option>?</option>
                    <option>?</option>
                    <option>?</option>
                </select>
                <br/>
                <input type="file" id="photo"/>
                <label htmlFor="photo">Add Photo</label>
                <br/>
            </div>
            <div className="form_second">
                <label htmlFor="number">Mobile</label>
                <br/>
                <input type="number" id="number" placeholder="Enter Mobile Number"/>
                <br/>
                <label htmlFor="sale">Sale Type</label>
                <br/>
                <select id="Sale">
                <option>Please Select</option>
                <option>?</option>
                <option>?</option>
                </select>
                <br/>
                <label htmlFor="ppd">PPD Package</label>
                <br/>
                <select id="ppd">
                <option>Please Select</option>
                <option>?</option>
                <option>?</option>
                </select>
            </div>
        </form>
    </div>
}