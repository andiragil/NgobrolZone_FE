import axios from "axios";
import { toast } from "react-toastify";
import { setToken, setUser } from "../reducers/auth";

export const login =
  (navigate, email, password, setIsLoading) => async (dispatch) => {
    // make loading
    setIsLoading(true);

    let data = JSON.stringify({
      email,
      password,
    });

    let config = {
      method: "post",
      url: `${import.meta.env.VITE_BACKEND_API}/api//login`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    try {
      const response = await axios.request(config);

      // get and save the token to local storage
      const { data } = response.data;
      const { token, user } = data;

      // Change the token value in the reducer
      dispatch(setToken(token));
      dispatch(setUser(user));

      // redirect to home
      navigate("/"); // it will be not consistent, so alternative we use window until we used the state management
    } catch (error) {
      toast.error(error?.response?.data?.message);

      dispatch(logout());
    }

    setIsLoading(false);
  };
