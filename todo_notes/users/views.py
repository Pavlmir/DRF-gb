from rest_framework import generics
from .models import Users
from .serializers import UserModelSerializer


class UserModelViewSet(generics.CreateAPIView):
    queryset = Users.objects.all()
    serializer_class = UserModelSerializer
