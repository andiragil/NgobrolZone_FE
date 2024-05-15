import { useGoogleLogin } from "@react-oauth/google";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = ({ text }) => {
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => console.log(codeResponse),
  });

  return (
    <Button
      className="w-100 rounded-pill mt-3"
      variant="light"
      onClick={() => login()}
    >
      <FcGoogle style={{ marginRight: "8px" }} />
      {text}
    </Button>
  );
};

GoogleLogin.propTypes = {
  text: PropTypes.string,
};

export default GoogleLogin;
