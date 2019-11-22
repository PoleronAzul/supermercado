#creado por Jacob
from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def inicio(request):
    return render(request, 'informacion/index.htlm')

def loginCliente(request):
    return render(request,'')