import React, { useState } from "react";
import axios from "axios";

const Login = () => {
    const [profile, setProfile] = useState({});

    const handleChange = ({ target }) => {
        const {name, value} = target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
          .post("https://mitramas-test.herokuapp.com/auth/login", {
            profile},{
                headers: {
                  'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9taXRyYW1hcy10ZXN0Lmhlcm9rdWFwcC5jb21cL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjU3OTQ5Njk4LCJleHAiOjE2NTc5NTMyOTgsIm5iZiI6MTY1Nzk0OTY5OCwianRpIjoieW1sam10TGp0ZnRpN0UwTCIsInN1YiI6MTU4LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.407rwfv14ZrTNnelo17W4g2B_TUy3S7n_7qMZ1JDISY'
                }
          })
          .then((response) => {
            window.location.href = "https://localhost:3000";
          })
          .catch((error) => {
            console.log(error.message);
          });
    };


    return (
    <div className="flex justify-center items-center h-screen">
        <form onSubmit={handleSubmit} className="flex flex-col bg-gradient-to-r from-light-blue to-light-green drop-shadow-xl rounded-2xl m-6 p-8 text-lg" >
          <div className="flex flex-col items-center my-2">
            <label htmlFor="email" className="font-medium">Email</label>
            <input className="p-2 my-2 rounded-2xl shadow-inner caret-green-600" onChange={handleChange}
                value={profile.email || ''}
                name="email"
                type="email"
                pattern="([A-Za-z0-9])+@mig.id"
                placeholder="Enter your email..."
                required
            />
          </div>
          <div className="flex flex-col items-center my-2">
            <label htmlFor="password" className="font-medium">Password</label>
            <input className="p-2 my-2 rounded-2xl shadow-inner caret-green-600" onChange={handleChange}
                value={profile.password || ''}
                name="password"
                type="password"
                placeholder="Enter your password..."
                required
            />
          </div>
          <button type="submit" className="bg-teal drop-shadow-lg rounded-2xl my-4 p-3 font-medium text-white hover:bg-pale-blue hover:text-gray transform transition ease-in-out duration-500 hover:scale-90">Login</button>
        </form>
    </div>
    );
};

export default Login;