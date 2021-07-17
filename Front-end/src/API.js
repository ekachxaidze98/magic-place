import axios from "axios";

const Api = (query) => {
  const SERVER_ADDRESS = "http://localhost:3002";

  const instance = axios.create({
    baseURL: `${SERVER_ADDRESS}/${query}`,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      console.log(error.response.status === 401);

      if (error.response.status === 401) {
        localStorage.removeItem("token");
        window.location = "/register";
        console.log("ait");
      }
    }
  );

  return instance;
};

export default Api;
