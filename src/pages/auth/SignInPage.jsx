import { Link } from "react-router-dom";
import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";

const SignInPage = () => {
  return ( 
    <FormContainer>
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
    />
    <Link to="/sign-up" className="text-sm text-emerald-800 underline">create an account</Link>
    </FormContainer>
 );
};
export default SignInPage;
