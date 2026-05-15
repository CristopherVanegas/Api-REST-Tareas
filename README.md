# CONFIGURACION PROYECTO DJANGO
Para instalar django

`pip install django para instalar`

Una vez instalado tenemos disponible

`django-admin startproject django_crud_api .`

Para correr el proyecto, en la raiz ejecuta
`python manage.py runserver`

para iniciar una app tareas (tasks)
`python manage.py startapp tasks`


para hacer migracioens asi como en laravel
`python manage.py migrate`


---

# DJANGO REST FRAMEWORK

docs: [https://www.django-rest-framework.org/]

Habran dos servidores, tendremos que autorizar que servidores se comunicaran.
El modulo es el siguiente
`pip install django-cors-headers`


---

# Modelo de tareas

A travez de una clase, django utiliza su ORM e interactua con la base de datos.

para crear las migraciones de todos los modulos
`python manage.py makemigrations`

para un solo modulo
`python manage.py makemigrations [modulo]`

y para ejecutarlas
`python manage.py migrate`
o `python manage.py migrate [modulo]`

panel administrador
http://127.0.0.1:8000/admin

`python manage.py createsuperuser` para crear un usuario por primera vez.


Para agregar el proyecto dentro del panel se hace agregando las respectivas lineas en admin.py del modulo que se desea agregar.

```
from django.contrib import admin
from .models import Task
# Register your models here.


admin.site.register(Task)
```

