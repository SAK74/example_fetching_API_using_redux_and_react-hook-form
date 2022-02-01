import api from "./api";

export default function sendForm(data) {
  // console.log(
  //   process.env.REACT_APP_API_KEY,
  //   process.env.NODE_ENV,
  //   process.env.REACT_APP_API_URL
  // );
  const headers = new Headers({ Authorization: process.env.REACT_APP_API_KEY });
  return api.post(process.env.REACT_APP_API_URL, data, {
    headers
  });
}
