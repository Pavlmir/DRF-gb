from rest_framework.routers import DefaultRouter
from django.urls import path, include

from .views import UserViewSet

app_name = 'users_app'

router = DefaultRouter()
router.register(r'user', UserViewSet, basename='user')

urlpatterns = [
    path('', include(router.urls)),
]
