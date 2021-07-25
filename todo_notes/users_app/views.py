from rest_framework import viewsets
from .models import Users
from .serializers import UserModelSerializer


# В классе ModelViewSet уже есть методы create, update, list, retrieve, delete методами
class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserModelSerializer
    queryset = Users.objects.all()

