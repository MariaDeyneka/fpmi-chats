import React from "react";
import dynamic from 'next/dynamic'

const LoginWindow = dynamic(() => import("./components/Login/LoginComponent"), {
  ssr: true,
});

const Login = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoginWindow></LoginWindow>
    </div>
  );
};

export default Login;
