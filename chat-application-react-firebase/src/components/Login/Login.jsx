import React from "react";
import "./login.css";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Login() {

    const [avatar, setAvatar] = useState({
        file:null,
        url:""
    })
    const handleAvatar = (e) => {
        if(e.target.files[0]){
            setAvatar({
                file:e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            });

        }
    }

    const handleLogin = (e) => {
        e.preventDefault();
        toast.warn("hello")
    }
    

  return (
    <div className="login">
      <div className="item">
        <h2>Welcome back</h2>
        <form onSubmit={handleLogin} >
          <input type="text" placeholder="Email" name="Email" />
          <input type="password" placeholder="Password" name="password" />
          <button>Sign In</button>
        </form>
      </div>

      <div className="separator"></div>

      <div className="item">
        <h2>Create an Account</h2>
        <form action="">
          <label htmlFor="file">
            <img src={avatar.url || "avatar.png"} alt="" />
            upload an image
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
          />
          <input type="text" placeholder="Username" name="username" />
          <input type="text" placeholder="Email" name="Email" />
          <input type="password" placeholder="Password" name="password" />
          <button>Signup</button>
        </form>
      </div>
    </div>
  );
}
