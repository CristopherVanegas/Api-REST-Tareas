from django.urls import path, include
from drf_spectacular.views import (
    SpectacularAPIView,
    SpectacularSwaggerView,
    SpectacularRedocView,
)
from rest_framework import routers
from tasks import views


# api versioning
router = routers.DefaultRouter()
router.register(r'tasks', views.TaskView, 'tasks')


# esto ya me permite consultar peticiones GET, POST, PUT, PATCH, DELETE, ETC
urlpatterns = [
  path('api/v1/', include(router.urls)),
  path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
  path('api/docs/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
  path('api/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),
]

