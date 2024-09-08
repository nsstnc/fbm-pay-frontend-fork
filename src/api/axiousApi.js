import axios from "axios";

export const $host = axios.create({
  baseURL: import.meta.env.REACT_APP_URL,
})

export const $authHost = axios.create({
  baseURL: import.meta.env.REACT_APP_URL,
})

const authInterceptor = config => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`
  return config
}

$authHost.interceptors.request.use(authInterceptor)