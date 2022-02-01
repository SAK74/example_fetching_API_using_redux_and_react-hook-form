const headers = new Headers({
  "Content-Type": "application/json"
});
const defaultConfig = {
  headers,
  method: "GET"
};
const request = (url, config) => {
  return fetch(url, { ...defaultConfig, ...config }).then((resp) => {
    if (resp.ok && resp.status === 200) return resp.json();
    console.log(resp.status + resp.statusText);
    throw Error(resp.status + resp.statusText);
  });
};
const get = (url) => request(url);

const post = (url, data, config = {}) => {
  config.method = "POST";
  config.body = JSON.stringify(data);
  if (config.headers) {
    for (const [name, value] of config.headers) {
      headers.set(name, value);
    }
    config.headers = headers;
  }
  return request(url, config);
};

export default { get, post };
