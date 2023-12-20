import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");

  const SignInHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
    fetch("http://localhost:5000/signin", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          alert("Looged in Successfully");
          navigate("/home");
        }
      });
  };

  return (
    <></>
  );
}

export default Signin;
