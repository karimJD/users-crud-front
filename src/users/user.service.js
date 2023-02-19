import axios from "axios";

const token = localStorage.getItem("token");

export const getUsers = async () => {
  const result = await axios.get(`http://localhost:5000/api/users`, {
    headers: {
      authorization: token,
    },
  });
  return result;
};

export const getUser = async (id) => {
  const result = await axios.get(`http://localhost:5000/api/users/${id}`, {
    headers: {
      authorization: token,
    },
  });
  return result;
};

export const updateUser = async (id, user) => {
  const result = await axios.put(
    `http://localhost:5000/api/users/${id}`,
    {
      name: user.name,
      username: user.username,
      email: user.email,
      password: user.password,
    },
    {
      headers: {
        authorization: token,
      },
    }
  );
  return result;
};

export const deleteUser = async (id) => {
  const result = await axios.delete(`http://localhost:5000/api/users/${id}`, {
    headers: {
      authorization: token,
    },
  });
  return result;
};
