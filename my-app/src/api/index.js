import axios from "axios";

const baseURL = "https://be-bikinnyaman-thrift.herokuapp.com/api/";

const Api = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

export default Api;
