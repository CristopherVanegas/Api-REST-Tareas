from django.urls import path, include
from rest_framework import routers
from tasks import views


# api versioning
router = routers.DefaultRouter()
router.register(r'tasks', views.TaskView, 'tasks')


# esto ya me permite consultar peticiones GET, POST, PUT, PATCH, DELETE, ETC
urlpatterns = [
  path('api/v1/', include(router.urls))
]

