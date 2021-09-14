from django.urls import path
from . import views

urlpatterns = [
    path('list/', views.books_list, name='books-list'),
    path('detail/<int:id>/', views.books_detail, name='book-detail'),
]
