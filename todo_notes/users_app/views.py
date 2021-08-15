from rest_framework import viewsets
from .models import Users
from .serializers import UserModelSerializer, UserModelSerializerIsStaffIsSuper
from rest_framework import mixins


class UserViewSet(mixins.UpdateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    '''
    UpdateModelMixin - обновление
    ListModelMixin - просмотр списка всех объектов
    RetrieveModelMixin - возвращает один объект
    '''
    serializer_class = UserModelSerializer
    queryset = Users.objects.get_queryset().order_by('id')

    def get_serializer_class(self):
        if self.request.version == '0.2':
            return UserModelSerializerIsStaffIsSuper

        return UserModelSerializer



