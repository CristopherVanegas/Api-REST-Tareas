from django.db import models

# Create your models here.


class Task(models.Model):
  title = models.CharField(max_length=200)
  description = models.TextField(blank=True)
  done = models.BooleanField(default=False)

  # para mostrar el titulo en cada registro
  def __str__(self):
    return self.title
