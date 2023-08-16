import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "../styles/login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import logo from "../images/realstate.png"
import Loader from "../componants/Add_property/Loader"




function SignUp() {
  const [loader, Setloader] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const [signUpDetails, setSignUpDetails] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  async function onSubmit() {
    const { email, password } = signUpDetails;
    Setloader(true)
    axios
      .post(
        "https://real-state-backend-6416.onrender.com/user/v1/register",
        {
          email: email,
          password: password,
        }
      )
      .then((res) => {
        alert("Successfully Account Created");
        navigate("/");
        Setloader(false)
      })
      .catch((err) => {
        alert("Email already exist")
        Setloader(false)
      });
  }
  return (
    <div style={{ backgroundColor: "#e1f9f4" }}>
      {loader ? <Loader /> :
        <div className="formdiv">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="container formtag"
            style={{ width: "500px", maxWidth: "80%", maxHeight: "70%", background: "#FFFFFF", color: "gray" }}
          >
            <h1 style={{ color: "#4C57B6", font: "Open Sans" }}>Real Estate</h1>
            <img
              alt="logo"
              className="logo"
              style={{ maxHeight: "80px", maxWidth: "80px" }}
              src={logo}
            />
            <h6>Create New Account</h6>
            <div className="input-group mb-3">

              <input
                style={{ margin: "0 10px", height: "54px" }}
                type="text"
                className="form-control"
                placeholder="Enter your Email"
                {...register("email", {
                  required: "Please Enter Your Email!",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please Enter a Valid Email!",
                  },
                })}
                onChange={(e) =>
                  setSignUpDetails({ ...signUpDetails, email: e.target.value })
                }
                value={signUpDetails.email}
                aria-label="Email"
                aria-describedby="basic-addon1"
              />
            </div>
            {errors.email && (
              <span className="error">* {errors.email.message}</span>
            )}

            <div className="input-group mb-3">

              <input
                style={{ margin: "0 10px", height: "54px" }}
                type="password"
                id="pass"
                className="form-control"
                {...register("password", {
                  required: "Please Enter Your Password",
                  minLength: {
                    value: 4,
                    message: "Password must be at least 8 characters long!",
                  },
                })}
                onChange={(e) =>
                  setSignUpDetails({ ...signUpDetails, password: e.target.value })
                }
                value={signUpDetails.password}
                placeholder="Enter Password"
                aria-label="Email"
                aria-describedby="basic-addon1"
              />


            </div>
            {errors.password && (
              <span className="error">* {errors.password.message}</span>
            )}
            <div className="input-group mb-3">

              <input
                style={{ margin: "0 10px", height: "54px" }}
                type="password"
                id="confirmpass"
                className="form-control"
                placeholder="Confirm Password"
                aria-label="Email"
                {...register("confirmPassword", {
                  required: "Please Confirm Your Password",
                  validate: (match) => {
                    const password = getValues("password");
                    return match === password || "Passwords should match!";
                  },
                })}
                onChange={(e) =>
                  setSignUpDetails({
                    ...signUpDetails,
                    confirmPassword: e.target.value,
                  })
                }
                value={signUpDetails.confirmPassword}
                aria-describedby="basic-addon1"
              />

            </div>
            {errors.confirmPassword && (
              <span className="error">* {errors.confirmPassword.message}</span>
            )}
            <button type="submit" style={{
              backgroundColor: "#4C57B6",
              width: "95%",
              borderRadius: "10px",
              color: "wheat",
              padding: "5px 0"
            }} id="form-submit">
              Sign up
            </button>
            <span className="linkform">
              <span style={{ color: "gray" }}>Already have an account?</span> <Link to="/">Sign in</Link>
            </span>
          </form>
        </div>}
    </div>
  );
}

export default SignUp;