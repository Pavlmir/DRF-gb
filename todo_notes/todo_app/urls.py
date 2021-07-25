from rest_framework.routers import DefaultRouter

from .views import ProjectViewSet, ToDoViewSet


router = DefaultRouter()
router.register(r'project', ProjectViewSet)
router.register(r'todo', ToDoViewSet)

urlpatterns = router.urls
