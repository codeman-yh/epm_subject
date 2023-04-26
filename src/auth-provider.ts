import { User } from "./screen/project-list";
const localStoreKey = "__auth_provier__token";
const baseApi = process.env.REACT_APP_API_URL;
export const getToken = () => window.localStorage.getItem(localStoreKey);

const handleUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStoreKey, user.token);
  return user;
};

export const Login = (data: { username: string; password: string }) => {
  return fetch(`${baseApi}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (res) => {
    if (res.status == 200) {
      return handleUserResponse(await res.json());
    } else {
      return Promise.reject(data);
    }
  });
};

export const Register = (data: { username: string; password: string }) => {
  return fetch(`${baseApi}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (res) => {
    if (res.status == 200) {
      return handleUserResponse(await res.json());
    } else {
      return Promise.reject(data);
    }
  });
};

export const LogOut = async () => {
  return await window.localStorage.removeItem(localStoreKey);
};
