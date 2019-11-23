#creado por Jacob
from django.shortcuts import render
from django.http import HttpResponse
from django.contrib import messages

# Create your views here.

def inicio(request):
    return render(request,'informacion/index.html') 

def loginCliente(request): 
    return render(request,'informacion/loginCliente.html') 