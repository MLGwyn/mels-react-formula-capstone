import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import * as userService from "services/user";

const SignInPage = () => {
  const [error, setError] = useState("");
  const location = useLocation();
  return (
    <FormContainer>
      <div className="text-red-800 font-lato">{error}</div>
      {location.state?.accountCreated && (
        <div className="p-4 mb-6 border border-emerald-700 bg-emerald-200 rounded-lg text-emerald-800 font-lato">
          Account created successfully. Please sign in.
        </div>
      )}
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
        onSubmit={async (values) => {
          if (values != values) {
            setError("username or password does not match");
            return;
          }
          const response = await userService.createSession({
            username: values.username,
            password: values.password,
          });
          if (response.status === 201) {
            setError("");
            console.log("log in successful!");
          } else {
            const data = await response.json();
            setError(data.error);
          }
        }}
      />
      <Link to="/sign-up" className="text-sm text-emerald-800 underline">
        create an account
      </Link>
    </FormContainer>
  );
};
export default SignInPage;
