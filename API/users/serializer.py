from rest_framework import serializers
from .models import User
from books.serializer import BookSerializer


class UserSerializer(serializers.ModelSerializer):
    borrowed_books = BookSerializer(read_only=True, many=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'is_staff', 'borrowed_books']
