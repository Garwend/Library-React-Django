from django.urls import path
from . import views

urlpatterns = [
    path('list/', views.BooksList.as_view(), name='books-list'),
    path('detail/<int:id>/', views.BookDetail.as_view(), name='book-detail'),
]
