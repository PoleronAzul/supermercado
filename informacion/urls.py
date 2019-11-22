from django.urls import path
from . import views

#creado por jacob

app_name = 'informacion'

urlpatterns = [
    path('inicio/', views.inicio,name='inicio'),
    path('loginCliente/', views.loginCliente,name='login'),
]