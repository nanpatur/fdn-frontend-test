import axios from "axios";

export default class AuthService {
  async login(body) {
    const response = await axios.post(`/login`, body);
    return response.data.token;
  }

  async logout(token) {}
}
