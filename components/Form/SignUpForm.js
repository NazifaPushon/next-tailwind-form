import Link from "next/link";
import React, { useEffect, useState } from "react";
import useValidation from "../../hooks/useValication";
import TextField from "../TextField/TextField";

const SignUpForm = () => {
  const { validateUserName, validateEmail ,validatePassword} = useValidation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPass,setConfirmPass] = useState('')
  const [isValidate, setIsValidate] = useState(false);
  const [error, setError] = useState({
    name: "",
    email: "",
    password:"",
    confirmPass:"",
  });
  useEffect(() => {
      if (name && email && password === confirmPass) {
        for (const i in error) {
          if (error[i]) {
            console.log("validation failed");
            setIsValidate(false);
            return;
          } else {
            setIsValidate(true);
            console.log("validation successful");
          }
        }
      } else {
        setIsValidate(false);
        console.log("validation failed");
      }
  }, [error,email,password,confirmPass,name]);

  const handleValidation = (error, validate, feild) => {
    setError((prevstate) =>
      !validate
        ? { ...prevstate, [feild]: error }
        : { ...prevstate, [feild]: "" }
    );
  };

  
  const handleFormSubmit = e => {
      e.preventDefault()
  }
  return (
    <div className="dark:bg-gray-900 bg-white text-gray-700 border-2 dark:border-gray-700 dark:text-gray-300 rounded-md w-full lg:w-1/3 md:w-3/5 sm:w-4/5 mx-auto p-7 shadow-lg dark:shadow-gray-900">
      <h1 className="text-center text-3xl font-semibold text-blue-700 dark:text-gray-100">Sign Up</h1>
      <form onSubmit={handleFormSubmit}>
        <TextField
          title="User Name"
          placeholder="example123"
          error={error.name ? error.name : ""}
          type="text"
          onChange={(e) => {
            setName(e.target.value);
            const { validate, error } = validateUserName(e.target.value);
            handleValidation(error, validate, "name");
          }}
        />
        <TextField
          title="Email"
          placeholder="example@gmail.com"
          error={error.email ? error.email : ""}
          type="email"
          onChange={(e) => {
            const { validate, error } = validateEmail(e.target.value);
            handleValidation(error, validate, "email");
            setEmail(e.target.value);
          }}
        />
        <TextField
          title="Password"
          placeholder="23"
          error={error.password ? error.password : ""}
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
            const { validate, error } = validatePassword(e.target.value);
            handleValidation(error, validate, "password");
          }}
        />
        <TextField
          title="Confirm Password"
          placeholder="23"
          error={error.confirmPass ? error.confirmPass : ""}
          type="password"
          onChange={(e) => {
            const { validate, error } = validatePassword(e.target.value);
            handleValidation(error, validate, "confirmPass");
            setConfirmPass(e.target.value);
          }}
        />
        
        <div className="text-center py-5">
        {isValidate ? <button type="submit" className="py-3 hover:bg-blue-800 px-5 bg-blue-700 dark:bg-slate-700 rounded-md hover:dark:bg-slate-900 text-white ">Submit</button> :<button type="submit" className="py-3 px-5 bg-blue-700 text-gray-400 dark:bg-slate-700 rounded-md dark:text-gray-600 cursor-not-allowed" disabled={true}>Submit</button> }
        </div>
      </form>
      <div className="text-center underline dark:text-gray-300 text-blue-600"><Link href="/signIn">Already have an account ? login</Link></div>
    </div>
  );
};

export default SignUpForm;