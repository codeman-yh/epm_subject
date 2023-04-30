import { useAuthContext } from "context/AuthContext";
import qs from "qs";
import * as auth from "auth-provider";
const baseApi = process.env.REACT_APP_API_URL;
interface Config extends RequestInit {
  data?: object;
  token?: string;
}

export const http = (
  api: string,
  { data, token, ...customConfig }: Config = {}
) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application/json" : "",
    },
    ...customConfig,
  };
  if (config.method.toLocaleUpperCase() === "POST") {
    config.body = JSON.stringify(data || {});
  } else {
    api += `?${qs.stringify(data)}`;
  }
  return fetch(`${baseApi}/${api}`, config).then(async (res) => {
    if (res.status == 401) {
      window.location.reload();
      auth.LogOut();
      return Promise.reject("请重新登录");
    }
    let reuslt = await res.json();
    if (res.ok) {
      return reuslt;
    } else {
      return Promise.reject(data);
    }
  });
};

export const useHttp = () => {
  const { user } = useAuthContext();
  const token = user ? user.token : "";
  return (...[api, customConfig]: Parameters<typeof http>) =>
    http(api, { ...customConfig, token });
};
