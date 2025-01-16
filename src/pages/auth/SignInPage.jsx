import { useState } from "react";
import { Link } from "react-router-dom";
import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";

const SignInPage = () => {
  const [error, setError]= useState('')
  return ( 
    <FormContainer>
      <div className="text-red-800 font-lato">{error}</div>
    <AuthForm
      fields={[
        {
          label: "username",
          type: "text",
        },
        {
          label: "password",
          type: "password",
        },
      ]}
      submitButtonLabel="sign in"
      onSubmit={(values)=>{
        if (values != values) {
          setError('username or password does not match');
          return;
        }
      }}
    />
    <Link to="/sign-up" className="text-sm text-emerald-800 underline">create an account</Link>
    </FormContainer>
 );
};
export default SignInPage;
