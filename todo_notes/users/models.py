from django.db import models
from django.contrib.auth.models import AbstractUser


class Users(AbstractUser):
    username = models.CharField(verbose_name='Логин', max_length=64, unique=True)
    firstname = models.CharField(verbose_name='Имя', max_length=64)
    lastname = models.CharField(verbose_name='Фамилия', max_length=64)
    email = models.EmailField(max_length=70, blank=False, unique=True)
    date_creation = models.DateTimeField(verbose_name='Дата создания записи', auto_now=True)
    birthday_year = models.DateField(verbose_name='Дата рождения', blank=True, null=True)
    GENDER_TYPE = (
        (1, "Мужской"),
        (2, "Женский"),
        (3, "Не определен"),
    )
    gender = models.IntegerField(verbose_name='Пол', choices=GENDER_TYPE, default=3)

    def __str__(self):
        return self.username
