from rest_framework import serializers
from .models import Users


class UserModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'


class UserModelSerializerIsStaffIsSuper(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ['is_superuser', 'is_staff']
