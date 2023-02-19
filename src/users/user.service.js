import axios from "axios";

export const getUsers = async () => {
  const token = localStorage.getItem("token");
  const result = await axios.get(`http://localhost:5000/api/users`, {
    autorization: token,
  });
  return result;
};
