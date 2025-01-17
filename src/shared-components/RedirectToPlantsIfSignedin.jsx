import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SessionContext from "contexts/SessionContext";

const RedirectToPlantsIfSignedIn = (props) => {
  const navigate = useNavigate();
  const { username } = useContext(SessionContext);
  useEffect(() => {
    if (username != null) {
      navigate("/plants");
    }
  }, [username, navigate]);
  return props.children;
};

export default RedirectToPlantsIfSignedIn;
