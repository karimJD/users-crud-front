import axios from "axios";

export const userRegistration = async (user) => {
  await axios
    .post(`http://localhost:5000/api/users`, {
      name: user.name,
      username: user.username,
      email: user.email,
      password: user.password,
    })
    .then((res) => {
      console.log(res);
      console.log(res.data);
    });
};

export const login = async (user) => {
  const result = await axios.post(
    `http://localhost:5000/api/users/login`,
    user
  );
  return result;
};
