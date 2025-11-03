import { Cookies } from "react-cookie";

export const cookies = new Cookies();
export const getCookie = (key) => cookies.get(key);
export const addCookie = (key, value, options = { path: "/" }) =>
  cookies.set(key, value, options);
export const deleteCookie = (key, options = { path: "/" }) =>
  cookies.remove(key, options);
