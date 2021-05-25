from django.urls import path
from . import views

urlpatterns = [
    path('logout', views.logout, name='logout'),
    path('dashboard', views.dashboard, name='dashboard'),
    path('register', views.register, name='register'),
    path('login', views.login, name='login'),
    # path('transactions', views.transactions, name='transactions'),
    # path('price', views.price, name='price'),
    # path('delivery', views.delivery, name='delivery'),
    # path('ship', views.ship, name='ship'),
]
