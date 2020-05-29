import axios from "axios";

const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        baseURL: "https://water-my-plants-bwpt12.herokuapp.com/",
        headers: {
            Authorization: token
        }
    });
};


export default axiosWithAuth;