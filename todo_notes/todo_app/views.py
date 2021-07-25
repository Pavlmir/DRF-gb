from rest_framework import viewsets
from .models import Project, ToDo
from .serializers import ProjectModelSerializer, ToDoModelSerializer


# В классе ModelViewSet уже есть методы create, update, list, retrieve, delete методами
class ProjectViewSet(viewsets.ModelViewSet):
    serializer_class = ProjectModelSerializer
    queryset = Project.objects.all()


# В классе ModelViewSet уже есть методы create, update, list, retrieve, delete методами
class ToDoViewSet(viewsets.ModelViewSet):
    serializer_class = ToDoModelSerializer
    queryset = ToDo.objects.all()
