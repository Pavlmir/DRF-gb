from rest_framework import generics
from .models import Users
from .serializers import UserModelSerializer


class UserCreateView(generics.CreateAPIView):
    serializer_class = UserModelSerializer


class UserListView(generics.ListAPIView):
    serializer_class = UserModelSerializer
    queryset = Users.objects.all()