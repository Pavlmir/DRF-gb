from django.urls import path
from .views import UserCreateView, UserListView

app_name = "user"
urlpatterns = [
    path('user/create/', UserCreateView.as_view()),
    path('all/', UserListView.as_view()),
]
