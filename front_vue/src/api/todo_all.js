import { HTTP } from './common'

export const TodoApi = {
  create (config) {
    return HTTP.post('/api/v1/todo-all/todo/', config)
      .then(response => response.data)
      .catch(error => console.log(error.response));
  },
  delete (todo) {
    return HTTP.delete(`/api/v1/todo-all/todo/${todo.id}/`)
  },
  list () {
    return HTTP.get('/api/v1/todo-all/todo/')
      .then((response) => (response.data.results))
      .catch((error) => console.log(error));
  }
}