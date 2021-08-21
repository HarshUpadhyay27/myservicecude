import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Signin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();

  const formSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      ) &&
      password
    ) {
      const res = await fetch("/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (res.status === 400 || !res) {
        alert("Invalid Details");
      } else {
        alert("user login sucessfully");
        history.push("/");
      }
    } else {
      alert("please fill all the field properly");
    }
  };
  return (
    <div className="signin">
      <form onSubmit={formSubmit}>
        <h1>Sign In</h1>
        <div className="input-tag">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            placeholder="Enter Your Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className="input-tag">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter Your Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <button type="submit">Sign In</button>
        <p>
          <Link to="/signup">Don't have an account ?</Link>
        </p>
      </form>
    </div>
  );
};

export default Signin;
