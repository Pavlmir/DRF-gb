from django.contrib import admin
from django.urls import path, include
from .views import UserModelViewSet

app_name = "user"
urlpatterns = [
    path('user/create/', UserModelViewSet.as_view()),
]
