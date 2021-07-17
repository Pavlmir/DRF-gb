# Generated by Django 3.2.5 on 2021-07-16 09:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='users',
            name='gender',
            field=models.IntegerField(choices=[(1, 'Мужской'), (2, 'Женский'), (3, 'Не определен')], default=3, verbose_name='Пол'),
        ),
    ]