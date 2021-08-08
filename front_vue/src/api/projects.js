import { HTTP } from './common'

export const ProjectApi = {
  create (config) {
    return HTTP.post('/api/v1/projects/project/', config)
      .then(response => response.data)
      .catch(error => console.log(error.response));
  },
  delete (project) {
    return HTTP.delete(`/api/v1/projects/project/${project.id}/`)
  },
  list () {
    return HTTP.get('/api/v1/projects/project/')
      .then((response) => (response.data.results))
      .catch((error) => console.log(error));
  }
}