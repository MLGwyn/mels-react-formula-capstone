import { Link } from "react-router-dom"; 
import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";

const SignUpPage = () => {
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
    {
      label: "confirm password",
      type: "password",
    },
  ]}
  submitButtonLabel="create an account"
/>
<Link to="/" className="text-sm text-emerald-800 underline">sign in</Link>
    </FormContainer>

  );
};

export default SignUpPage;
