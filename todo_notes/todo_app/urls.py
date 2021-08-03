from rest_framework.routers import DefaultRouter

from .views import ProjectViewSet, ToDoViewSet


router = DefaultRouter()
router.register(r'projects/project', ProjectViewSet)
router.register(r'todo-all/todo', ToDoViewSet)

urlpatterns = router.urls
