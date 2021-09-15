from django.urls import path
from . import views

urlpatterns = [
    path('list/', views.BooksList.as_view(), name='books-list'),
    path('detail/<int:id>/', views.books_detail, name='book-detail'),
]
