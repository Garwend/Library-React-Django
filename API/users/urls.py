from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from . import views

urlpatterns = [
    path('register/', views.register_user, name='register-user'),
    path('details/', views.UserDetails.as_view(), name='user-details'),
    path('borrow-book/', views.BorrowBook.as_view(), name='borrow-book'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
