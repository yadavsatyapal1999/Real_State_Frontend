import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

export default function SignUp() {
    const navigate = useNavigate();

    const imgurl ="data:image/png;base64,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"
    const [email, Setemail] = useState();
    const [password, SetPassword] = useState();
    const [confirm, SetConfirm] = useState();

    const handleSignUp = async (event) => {
        try {
            if (password === confirm) {
                console.log("pass match")
                let data = {
                    email:email,
                    password:password
                }
                const resp = await axios.post("http://localhost:8080/user/v1/register", data)
                    .then(res => {
                        if(res.status == 200){
                            // localStorage.setItem("unique_id", res.data.data.unique_id);
                            window.alert("data Saved Sucessfully");
                            
                        }else{
                           window.alert("failed");
                        }
                    })
                    .catch(err => { 

                        window.alert("email Id already exist");
                    })
            }else{
                alert("Password and Confirm Password Doesn't Match");
                console.log("pass Mismatch")
                SetConfirm();
                SetPassword();
            }
        }
        catch (err) {
            alert(err);
        }
    }

    return <div className="SignUp">
        <form action="#" onSubmit={(event) => {
            handleSignUp(event);
        }} >
            <img src={imgurl} alt="logo" />
            <br />
            <p>Create New Account</p>
            <input id="email" type="email" placeholder="Mail Id" required
            value={email}
                onChange={(e) => {
                    Setemail(e.target.value)
                }} />
            <br />
            <input id="password" type="password" placeholder="Password" required minLength="8"
            value={password}
                onChange={(e) => {
                    SetPassword(e.target.value)
                }} />
            <br />
            <input id="confirm_password" type="password" placeholder="Confirm Password" required
            value={confirm}
                onChange={(e) => {
                    SetConfirm(e.target.value)
                }} />
            <br />
            <button className="btn_signup"  type="submit"> SignUp</button>
        </form>

        <button className="btn" onClick={() => {
            navigate('/')
        }}>SignIn</button>
    </div>
}