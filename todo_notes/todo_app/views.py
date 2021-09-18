from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets, status
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response

from .models import Project, ToDo
from .serializers import ProjectModelSerializer, ToDoModelSerializer


class ToDoLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20


class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


# В классе ModelViewSet уже есть методы create, update, list, retrieve, delete методами
class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.get_queryset().order_by('id')
    serializer_class = ProjectModelSerializer
    pagination_class = ProjectLimitOffsetPagination

    def get_queryset(self):
        queryset = Project.objects.all()
        name = self.request.query_params.get('name', '')
        if name:
            queryset = queryset.filter(name__contains=name)
        return queryset


# В классе ModelViewSet уже есть методы create, update, list, retrieve, delete методами
class ToDoViewSet(viewsets.ModelViewSet):
    queryset = ToDo.objects.get_queryset().order_by('id')
    serializer_class = ToDoModelSerializer
    pagination_class = ToDoLimitOffsetPagination
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['project']

    def destroy(self, request, pk=None):
        try:
            instance = self.get_object()
            instance.is_active = False
            instance.save()
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)
        else:
            return Response(status=status.HTTP_204_NO_CONTENT)
