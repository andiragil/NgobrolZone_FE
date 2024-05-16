import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../redux/actions/profile";

const Protected = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    //Get Profile If Have Token
    dispatch(getProfile(navigate, null, "/login"));
  }, [dispatch, navigate]);

  return children;
};

export default Protected;
