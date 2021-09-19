from django.db import models
from django.contrib.auth.models import AbstractUser
from books.models import Book
# Create your models here.


class User(AbstractUser):
    borrowed_books = models.ManyToManyField(Book)
