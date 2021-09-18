import json

from django.test import TestCase
from rest_framework import status
from rest_framework.test import (APIClient, APIRequestFactory,
                                 APISimpleTestCase, APITestCase,
                                 force_authenticate)
from mixer.backend.django import mixer

from users_app.models import Users
from todo_app.models import Project, ToDo
from todo_app.views import ProjectViewSet


class TestProjectModelViewSet(TestCase):
    def test_get(self):
        factory = APIRequestFactory()
        request = factory.get('/api/v1/projects/project')
        view = ProjectViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_post(self):
        client = APIClient()
        response = client.post('/api/v1/projects/project/',
                               data={'name': 'ProjectName', 'link': 'www.test_link.com', 'users': [1, ]},
                               format='json')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_post_admin(self):
        client = APIClient()
        admin = Users.objects.create_superuser('admin', 'admin@admin.com', 'admin1234567')
        client.login(username='admin', password='admin1234567')
        response = client.post('/api/v1/projects/project/',
                               data={'name': 'ProjectName', 'link': 'www.test_link.com', 'users': [1, ]},
                               format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        client.logout()

    def test_edit_mixer(self):
        todo = mixer.blend(ToDo)
        admin = Users.objects.create_superuser('admin', 'admin@admin.com', 'admin123456')
        self.client.login(username='admin', password='admin123456')
        response = self.client.put(f'/api/v1/todo-all/todo/{todo.id}/', {'project': todo.project.id,
                                                                         'user': todo.user.id},
                                   content_type='application/json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
