import { useGoogleLogin } from "@react-oauth/google";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { loginWithGoogle } from "../redux/actions/login";
import { useNavigate } from "react-router-dom";

const GoogleLogin = ({ text }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) =>
      dispatch(loginWithGoogle(navigate, codeResponse?.access_token)),
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
