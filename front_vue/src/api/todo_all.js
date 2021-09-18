import { HTTP } from './common'

let headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Token ' + localStorage.getItem('token')
}

export const TodoApi = {
  create (config) {
    return HTTP.post('/api/v1/todo-all/todo/', config, {headers})
      .then(response => response.data)
      .catch(error => console.log(error.response));
  },
  delete (id) {
    return HTTP.delete(`/api/v1/todo-all/todo/${id}`, {headers})
  },
  list () {
    return HTTP.get('/api/v1/todo-all/todo/')
      .then((response) => (response.data.results))
      .catch((error) => console.log(error));
  }
}