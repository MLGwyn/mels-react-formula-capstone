import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SessionContext from "contexts/SessionContext";

const RedirectToSignInIfSignedOut = (props) => {
  const navigate = useNavigate();
  const { username } = useContext(SessionContext);
  useEffect(() => {
    if (username === null) {
      navigate("/");
    }
  }, [username, navigate]);
  return props.children;
};

export default RedirectToSignInIfSignedOut;
