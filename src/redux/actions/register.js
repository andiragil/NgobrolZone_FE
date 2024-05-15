import axios from "axios";
import { toast } from "react-toastify";
import { logout } from './profile';

export const register =
    (navigate, email, password, name, image, setIsLoading) =>
        async (dispatch) => {
            setIsLoading(true);

            let data = new FormData();
            data.append("email", email);
            data.append("password", password);
            data.append("name", name);
            if (image) {
                data.append("image", image);
            }

            let config = {
                method: "post",
                url: `${import.meta.env.VITE_BACKEND_API}/api/register`,
                data: data,
            };

            try {
                const response = await axios.request(config);

                // get dan save token ke local storage
                const { data } = response.data;
                const { token } = data;
                localStorage.setItem("token", token);

                // redirect ke home
                navigate("/");
            } catch (error) {
                toast.error(error?.response?.data?.message);

                dispatch(logout());
            }

            setIsLoading(false);
        };