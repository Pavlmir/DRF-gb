import { HTTP } from './common'

export const ProjectApi = {
  create (config) {
    return HTTP.post('/projects/project/', config)
      .then(response => response.data)
      .catch(error => console.log(error.response));
  },
  delete (project) {
    return HTTP.delete(`/projects/project/${project.id}/`)
  },
  list () {
    return HTTP.get('/projects/project/')
      .then((response) => (response.data.results))
      .catch((error) => console.log(error));
  }
}