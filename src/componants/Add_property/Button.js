import { useNavigate } from "react-router-dom";
import {useHistory } from "react-router-dom";

// Button function as save&next and previous button 
// which is required in all add property age 

export default function Button({ backWardPath, forWardPath, children1, children2, forward_action, backward_action }) {



    const navigate = useNavigate();
    return <div className="btn">
        <button className="btn1" onClick={() => { navigate(backWardPath) }}>{children1}</button>
        {children2 != "Add Property" ?
            <button className="btn2" onClick={() => {
                if (forward_action) {
                    forward_action();
                    navigate(forWardPath);
                }
                else {
                    navigate(forWardPath);
                }
            }}>{children2}</button>
            : <button className="btn2" type="submit"  >{children2}</button>}

    </div>
}