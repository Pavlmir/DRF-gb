import { HTTP } from './common'
import { headers } from './common'


export const ProjectApi = {
  create (config) {
    return HTTP.post('/api/v1/projects/project/', config, {headers})
      .then(response => response.data)
      .catch(error => console.log(error.response));
  },
  delete (id) {
    return HTTP.delete(`/api/v1/projects/project/${id}/`, {headers})
  },
  list () {
    return HTTP.get('/api/v1/projects/project/')
      .then((response) => (response.data.results))
      .catch((error) => console.log(error));
  }
}