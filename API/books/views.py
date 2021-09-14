from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializer import BookSerializer
from.models import Book
# Create your views here.


@api_view(['GET'])
def books_list(request):
    if request.method == 'GET':
        books = Book.objects.all()
        serializer = BookSerializer(books, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def books_detail(request, id):
    if request.method == 'GET':
        books = Book.objects.get(id=id)
        serializer = BookSerializer(books, many=False)
        return Response(serializer.data)
