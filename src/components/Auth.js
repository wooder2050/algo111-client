import auth0 from "auth0-js";
import jwtDecode from "jwt-decode";
import { AUTH0_ID, AUTH0_URL, AUTH0_CALLBACK_URL } from "../constants";

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "jaeyoung.auth0.com",
    audience: "https://jaeyoung.auth0.com/userinfo",
    clientID: `${AUTH0_ID}`,
    redirectUri: `${AUTH0_CALLBACK_URL}`,
    responseType: "token id_token",
    scope: "openid profile"
  });
  constructor() {
    this.getProfile = this.getProfile.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  getProfile() {
    if (localStorage.getItem("id_token")) {
      return jwtDecode(localStorage.getItem("id_token"));
    } else {
      return {};
    }
  }

  getIdToken() {
    return this.idToken;
  }

  isAuthenticated() {
    return new Date().getTime() < this.expiresAt;
  }

  signIn() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err) return reject(err);
        if (!authResult || !authResult.idToken) {
          return reject(err);
        }
        this.idToken = authResult.idToken;
        this.profile = authResult.idTokenPayload;
        this.expiresAt = authResult.idTokenPayload.exp * 1000;
        localStorage.setItem("access_token", authResult.accessToken);
        localStorage.setItem("id_token", authResult.idToken);
        localStorage.setItem("expires_at", this.expiresAt);
        resolve();
      });
    });
  }

  signOut() {
    this.idToken = null;
    this.profile = null;
    this.expiresAt = null;
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    this.auth0.logout({
      returnTo: `${AUTH0_URL}`,
      clientID: `${AUTH0_ID}`
    });
  }
}
