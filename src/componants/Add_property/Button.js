import { useNavigate } from "react-router-dom";

// Button function as save&next and previous button 
// which is required in all add property age 

export default function Button({backWardPath,forWardPath,children1,children2}){
const navigate = useNavigate();
    return <div>
        <button  onClick={()=>{navigate(backWardPath)}}>{children1}</button>
        {children2 != null || children2 != undefined ? <button onClick={()=>{navigate(forWardPath)}}>{children2}</button> :<></>}
        
    </div>
}