export default class UserService {
  getUser() {
    return axios.get(`https://femaledaily-users.loca.lt/users`, {
      params,
    });
  }
}
