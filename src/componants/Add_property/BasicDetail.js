// This page takes basic detail of property in a form
// This form is divided into two section

export default function BasicDetail() {



    return <div className="form">
        <form action="#">
            <div className="from_first">
                <label htmlFor="property_type">Property Type</label>
                <br />
                <select id="property_type">
                    <option value="select_property">Select Property Type</option>
                    <option value="Home">Home</option>
                    <option value="Plot">Plot</option>
                    <option value="Apartment">Apartment</option>
                </select>
                <br />
                <label htmlFor="price">Price</label>
                <br />
                <input type="number" id="price" />
                <br />
                <label htmlFor="age">Property Age</label>
                <br />
                <select id="age">
                    <option>Select Property Age</option>
                    <option>20</option>
                    <option>35</option>
                    <option>50</option>
                    <option>70</option>
                    <option>80</option>
                </select>
                <br />
                <label htmlFor="description">Property Description</label>
                <br />
                <input type="text" id="description" />
                <br />

            </div>
            <div className="form_Second">
                <label htmlFor="nego">Negotiable</label>
                <br />
                <select id="nego">
                    <option>Negotiable</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                <br />
                <label htmlFor="owner">Ownership</label>
                <br />
                <select id="owner">
                    <option >Select Ownership</option>
                    <option>Indvidual</option>
                    <option>Joint</option>
                </select>
                <br />
                <label htmlFor="approved">Property Approved</label>
                <br />
                <select id="approved">
                    <option>Property Approved</option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
                <br />
                <label htmlFor="loan">Bank Loan</label>
                <br />
                <select id="loan">
                    <option>Available</option>
                    <option>Not Available</option>
                </select>
            </div>

        </form>
    </div>
}