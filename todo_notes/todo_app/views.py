from rest_framework import viewsets
from rest_framework.pagination import LimitOffsetPagination

from .models import Project, ToDo
from .serializers import ProjectModelSerializer, ToDoModelSerializer


class ToDoLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20


# В классе ModelViewSet уже есть методы create, update, list, retrieve, delete методами
class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer


# В классе ModelViewSet уже есть методы create, update, list, retrieve, delete методами
class ToDoViewSet(viewsets.ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoModelSerializer
    pagination_class = ToDoLimitOffsetPagination
