from django.urls import path
from . import views

urlpatterns = [
    path('list/', views.BooksList.as_view(), name='books-list'),
    path('create/', views.CreateBook.as_view(), name='create-book'),
    path('detail/<int:id>/', views.BookDetail.as_view(), name='book-detail'),
]
