import React, { useState } from "react";
import { LoginUserFn } from "./api/index";
import { useRouter } from "next/router";

const Login = () => {
  const Router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const details = {
      email,
      password,
    };

    const valid = await LoginUserFn(details);

    if (valid.data.success) {
      localStorage.setItem("Token", valid.data.authToken);
      Router.push("/HomePage");
    } else {
      alert("Enter valid data");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <a href="/">
        <img src="/logo-3.png" alt="Roomie logo" className="h-[4.5em]" />
      </a>
      <h1 className="text-[2em] font-semibold mt-[0.5em] mb-[1em]">
        Login to your account
      </h1>
      <form className="bg-[#FEF3D3] p-6 mb-[2em] rounded-lg shadow-md w-[25vw]">
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full border border-gray-400 p-2"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-full border border-gray-400 p-2"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="btn-wrapper flex justify-between">
          <button
            className="bg-green-700 hover:bg-[#f7ca48] text-white font-medium py-2 px-4 my-4 rounded w-full"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </form>
      <p>
        New user?{" "}
        <a className="text-blue-700" href="/">
          Register
        </a>
      </p>
    </div>
  );
};

export default Login;
