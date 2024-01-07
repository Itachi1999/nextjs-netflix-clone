"use client";
import Input from "@/components/input";
import { useCallback, useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login");
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-center bg-fixed bg-no-repeat bg-cover">
      <div className="bg-black md:bg-opacity-60 h-full w-full">
        <nav className="py-5 px-12">
          <img src="images/logo.png" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 py-16 px-16 mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl font-semibold mb-2">Sign In</h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  id="username"
                  value={username}
                  label="Username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                ></Input>
              )}
              <Input
                id="email"
                value={email}
                type="email"
                label="Email Address"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></Input>
              <Input
                id="password"
                value={password}
                type="password"
                label="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></Input>
            </div>
            <button className="bg-red-600 py-3 text-white rounded-md w-full hover:bg-red-700 mt-10 transition">
              {variant === "login" ? "Sign in" : "Create an Account"}
            </button>
            <p className="text-neutral-500 mt-12">
              {variant === "login"
                ? "First time using Netflix?"
                : "Already have an account?"}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {variant === "login" ? "Create an Account" : "Sign In"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
