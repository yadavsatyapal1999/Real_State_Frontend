import { useState } from "react"





export default function GeneralEdit({ SetPage, newData, SetnewData }) {


    const [file, SetFile] = useState();


    return <div className="router">

        <form className="outer_form" >
            <div className="form">

                <div className="form_first">
                    <label htmlFor="owner_name">Name</label>
                    <br />
                    <input type="text" id="owner_name" placeholder="Owner Name" onChange={(e) => {
                        SetnewData({
                            ...newData,
                            owner_name: e.target.value
                        })
                    }}
                        required
                        value={newData.owner_name}
                    />
                    <br />
                    <label htmlFor="postedby">Posted By</label>
                    <br />
                    <select id="postedby" onChange={(e) => {
                        SetnewData({
                            ...newData,
                            postedby: e.target.value
                        })
                    }}
                        value={newData.postedby}  >
                        <option value="" disabled >Posted By</option>
                        <option>Owner</option>
                        <option>Sales Agent</option>
                        <option>Dealer</option>
                    </select>
                    <br />
                    <label htmlFor="featured">Featured Package</label>
                    <br />
                    <select id="featured" onChange={(e) => {
                        SetnewData({
                            ...newData,
                            featured: e.target.value
                        })
                    }}
                        value={newData.featured} >
                        <option value="" disabled >Please Select</option>
                        <option>Available</option>
                        <option>Not Available</option>

                    </select>
                    <br />


                    <input type="file" name="propertyimage" onChange={(e) => {
                        SetFile(e.target.files[0]);
                    }} />
                    <label htmlFor="image"  >Add Photo</label>
                    <br />
                </div>
                <div className="form_second" >
                    <label htmlFor="mobile">Mobile</label>
                    <br />
                    <input type="number" id="mobile"
                        placeholder="Enter Mobile Number"
                        onChange={(e) => {
                            SetnewData({
                                ...newData,
                                mobile: e.target.value
                            })
                        }}
                        required minLength={10} maxLength={10}
                        value={newData.mobile} />
                    <br />
                    <label htmlFor="saletype">Sale Type</label>
                    <br />
                    <select id="saletype" onChange={(e) => {
                        SetnewData({
                            ...newData,
                            saletype: e.target.value
                        })
                    }}
                        value={newData.saletype} >
                        <option value="" disabled >Please Select</option>
                        <option>Offer</option>
                        <option>General</option>
                    </select>
                    <br />
                    <label htmlFor="ppdpackage">PPD Package</label>
                    <br />
                    <select id="ppdpackage" onChange={(e) => {
                        SetnewData({
                            ...newData,
                            ppdpackage: e.target.value
                        })
                    }}
                        value={newData.ppdpackage}  >
                        <option value="" disabled>Please Select</option>
                        <option>Available</option>
                        <option>Not Available</option>
                    </select>
                </div>
            </div>
            <button className="btn1" onClick={() => {
                SetPage(2)
            }}>Previous</button>
            <button className="btn2" onClick={() => {
                SetPage(4);
                if (file != null || file != undefined) {
                    SetnewData({
                        ...newData,
                        propertyimage: file
                    })
                }
            }} >Save & Next</button>
        </form>
    </div>
}