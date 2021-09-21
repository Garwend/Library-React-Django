from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializer import BookSerializer
from.models import Book
# Create your views here.


class BooksList(ListAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

    def get_queryset(self):
        book_title = self.request.GET.get('q', '')
        if len(book_title) == 0:
            return Book.objects.all()
        else:
            print(book_title)
            return Book.objects.filter(title__icontains=book_title)


class CreateBook(APIView):
    permission_classes = [IsAdminUser]

    def post(self, request):
        serializer = BookSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BookDetail(APIView):
    permission_classes = [IsAdminUser]

    def delete(self, request, id):
        book = get_object_or_404(Book, id=id)
        book.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
