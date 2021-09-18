from django.db import models
from users_app.models import Users


class Project(models.Model):
    name = models.CharField(verbose_name="название", max_length=64, unique=True)
    link = models.CharField(verbose_name="ссылка на репозиторий", max_length=128)
    users = models.ManyToManyField(Users, verbose_name="набор пользователей, которые работают с этим проектом")

    def __str__(self):
        return self.name


class ToDo(models.Model):
    project = models.ForeignKey(Project, on_delete=models.DO_NOTHING)
    user = models.ForeignKey(Users, on_delete=models.DO_NOTHING)
    text = models.TextField(verbose_name="текст заметки", blank=True)
    created = models.DateTimeField(verbose_name="дата создания", auto_now_add=True)
    updated = models.DateTimeField(verbose_name="дата обновления", auto_now=True)
    is_active = models.BooleanField(verbose_name="активен", default=True, db_index=True)

    def __str__(self):
        return self.text
