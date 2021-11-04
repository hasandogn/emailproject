import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { Button } from "../pages/Button";

import login from "./img/login.png"
import avatar from "./img/avatar.svg"
import bg from "./img/bg.svg"
import play from "./img/play.svg"

import './login.css';

import AuthService from "../../services/Auth/AuthService";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        () => {
          props.history.push("/profile");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

  return (
    // <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20, width: "auto", height: "500px", backgroundColor: "red", display: "grid" }}>
    //   <div style={{ backgroundColor: "green" }}><img class="wave" src={login} /></div>
    //   <div style={{ backgroundColor: "gray" }}></div>
    // </div>


    <div class="body1">
      <div class="containerauth">
        <input type="checkbox" id="flip" />
        <div class="cover">
          <div class="front">
            <img style={{ backgroundColor: "white" }} src={avatar} alt="" />
            {/* <div class="text">
              <span class="text-1">Every new friend is a <br /> new adwenture</span>
              <span class="text-2">Let's get connected</span>
            </div> */}
          </div>
          <div class="back">
            <img class="backImg"  style={{ backgroundColor: "white"}} src={play} alt="" />
            {/* <div class="text">
              <span class="text-1">Complete miles of journey  with <br />one step</span>
              <span class="text-2">Let's get started</span>
            </div> */}
          </div>
        </div>
        <div class="forms">
          <div class="form-content">
            <div class="login-form">
              <div class="title">Login</div>
              <div>
                <div class="input-boxes">
                  <div class="input-box">
                    <i class="fas fa-envelope"></i>
                    <input type="text" placeholder="Enter your email" required />
                  </div>
                  <div class="input-box">
                    <i class="fas fa-lock"></i>
                    <input type="password" placeholder="Enter your password" required />
                  </div>
                  <div class="text"><a href="#">Forgot password?</a></div>
                  <div class="button input-box">
                    <input type="submit" value="Sumbit" />
                  </div>
                  <div class="text sign-up-text">Don't have an account? <label for="flip">Sigup now</label></div>
                </div>
              </div>
            </div>
            <div class="signup-form">
              <div class="title">Signup</div>
              <div>
                <div class="input-boxes">
                  <div class="input-box">
                    <i class="fas fa-user"></i>
                    <input type="text" placeholder="Enter your name" required />
                  </div>
                  <div class="input-box">
                    <i class="fas fa-envelope"></i>
                    <input type="text" placeholder="Enter your email" required />
                  </div>
                  <div class="input-box">
                    <i class="fas fa-lock"></i>
                    <input type="password" placeholder="Enter your password" required />
                  </div>
                  <div class="button input-box">
                    <input type="submit" value="Sumbit" />
                  </div>
                  <div class="text sign-up-text">Already have an account? <label for="flip">Login now</label></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>


    // <div>

    //   {/* <img class="wave" src={login} /> */}
    //   <div class="containerauth">
    //     <div class="img">
    //       <img src={login} />
    //     </div>
    //     <div class="login-content">
    //       <form>
    //         <img src={avatar} />
    //         <h2 class="title">Welcome</h2>
    //         <div class="input-div one">
    //           <div class="i">
    //             <i class="fas fa-user"></i>
    //           </div>
    //           <div class="div">
    //             <h5>Username</h5>
    //             <input type="text" class="input" />
    //           </div>
    //         </div>

    //         <div class="input-div pass">
    //           <div class="i">
    //             <i class="fas fa-lock"></i>
    //           </div>
    //           <div class="div">
    //             <h5>Password</h5>
    //             <input type="password" class="input"/>
    //           </div>

    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>



    // <div className="login">
    //   <div className="">
    //     <img
    //     //   src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
    //     //   alt="profile-img"
    //     //   className="profile-img-card"
    //     />

    //     <Form onSubmit={handleLogin} ref={form}>
    //       <div className="">
    //         <label htmlFor="username">Username</label>
    //         <Input
    //           type="text"
    //           className="form-control"
    //           name="username"
    //           value={username}
    //           onChange={onChangeUsername}
    //           validations={[required]}
    //         />
    //       </div>

    //       <div className="">
    //         <label htmlFor="password">Password</label>
    //         <Input
    //           type="password"
    //           className=""
    //           name="password"
    //           value={password}
    //           onChange={onChangePassword}
    //           validations={[required]}
    //         />
    //       </div>

    //       <div className="">
    //         <button className="" disabled={loading}>
    //           {loading && (
    //             <span className=""></span>
    //           )}
    //           <span>Login</span>
    //         </button>
    //       </div>

    //       {message && (
    //         <div className="">
    //           <div className="" role="alert">
    //             {message}
    //           </div>
    //         </div>
    //       )}
    //       <Button buttonSize='btn--wide' buttonColor='primary'>
    //                 Login
    //       </Button>
    //     </Form>
    //   </div>
    // </div>
  );
};

export default Login;