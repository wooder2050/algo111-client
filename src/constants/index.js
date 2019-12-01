const localClientDomain = `http://localhost:3000`;
const cloudClientDomain = "https://www.algo111.online";

const localServerDomain = `http://localhost:5000`;
const cloudServerDomain = "https://api.algo111.online";

const SERVER_URL =
  process.env.NODE_ENV === "development"
    ? localServerDomain
    : cloudServerDomain;

const CLIENT_URL =
  process.env.NODE_ENV === "development"
    ? localClientDomain
    : cloudClientDomain;

const localAuth0ID = "5ROq0gGgZdGB3AhDIkzmQA2nHmD6COQo";
const localURLs = "http://localhost:3000";
const localCallbackURLs = "http://localhost:3000/callback";

const domainAuth0ID = "ZyFfnFhkPTAmvjMIoUjtuJrMHNqc10qn";
const domainURLs = "https://www.algo111.online";
const domainCallbackURLs = "https://www.algo111.online/callback";

const AUTH0_ID =
  process.env.NODE_ENV === "development" ? localAuth0ID : domainAuth0ID;

const AUTH0_URL =
  process.env.NODE_ENV === "development" ? localURLs : domainURLs;

const AUTH0_CALLBACK_URL =
  process.env.NODE_ENV === "development"
    ? localCallbackURLs
    : domainCallbackURLs;

module.exports = {
  CLIENT_URL,
  SERVER_URL,
  AUTH0_ID,
  AUTH0_URL,
  AUTH0_CALLBACK_URL
};
