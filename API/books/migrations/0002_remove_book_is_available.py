# Generated by Django 3.2.7 on 2021-09-21 12:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='book',
            name='is_available',
        ),
    ]