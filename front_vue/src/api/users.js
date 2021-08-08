import { HTTP } from './common'

export const UserApi = {
  create (config) {
    return HTTP.post('/api/v1/users/user/', config)
      .then(response => response.data)
      .catch(error => console.log(error.response));
  },
  delete (user) {
    return HTTP.delete(`/api/v1/users/user/${user.id}/`)
  },
  list () {
    return HTTP.get('/api/v1/users/user/')
      .then((response) => (response.data.results))
      .catch((error) => console.log(error));
  }
}