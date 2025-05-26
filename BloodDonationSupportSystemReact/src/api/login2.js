import axios from "axios";

const login = async ({account, password}) => {
  try {
    const res = await axios.get("http://localhost:3001/data");
    console.log(res.data)
    localStorage.setItem("token",res.data && true);
    return res.data;
  } catch (err) {
    throw err.response?.data?.message || "Login failed";
  }
};

export default login;