import axios from "axios";

export default class AuthService {
  async login(body) {
    const users = axios.get(`https://femaledaily-users.loca.lt/users`, {
      params,
    });
    const user = users.find((user) => user.email === body.email);

    localStorage.setItem("token", user.token);
    return response.data.token;
  }

  async logout(token) {
    localStorage.removeItem("token");
    window.location.replace("/login");
  }
}
