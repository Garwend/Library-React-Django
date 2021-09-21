from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.tokens import RefreshToken
from .serializer import UserSerializer
from .models import User
from books.models import Book
# Create your views here.


@api_view(['POST'])
def register_user(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            User.objects.create_user(
                serializer.initial_data['username'],
                serializer.initial_data['email'],
                serializer.initial_data['password']
            )
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def logout_user(request):
    if request.method == 'POST':
        try:
            refresh_token = request.data['refreshToken']
            token = RefreshToken(refresh_token)
            token.blacklist()
            return (Response(status=status.HTTP_204_NO_CONTENT))
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class UserDetails(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        serializer = UserSerializer(user)
        return Response(serializer.data)


class BorrowBook(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        id = request.data['id']
        user = request.user
        book = get_object_or_404(Book, id=id)
        user.borrowed_books.add(book)
        serializer = UserSerializer(user)
        return Response(serializer.data)

    def delete(self, request):
        id = request.data['id']
        user = request.user
        book = get_object_or_404(Book, id=id)
        user.borrowed_books.remove(book)
        serializer = UserSerializer(user)
        return Response(serializer.data)
