#creado por jacob nuñez
from django.db import models

# Create your models here.

class Genero(models.Model):
    datalle = models.CharField(max_length=15,null=False,blank=False)

class Ciudad(models.Model):
    nombre = models.CharField(max_length=45,null=False,blank=False)

class Comuna(models.Model):
    nombre = models.CharField(max_length=50, blank=False,null=False)

class Persona(models.Model):
    Run = models.CharField(max_length=15,null=False,blank=False)
    nombre = models.CharField(max_length=25,null=False,blank=False)
    apellido = models.CharField(max_length=25,null=False,blank=False)
    correo = models.CharField(max_length=50,null=False,blank=False)
    direccion = models.CharField(max_length=50,null=False,blank=False)
    telefono = models.CharField(max_length=12,null=False,blank=False)
    tipo = models.CharField(max_length=20,null=False,blank=False)

class Producto(models.Model):
    nombre = models.CharField(max_length=30,null=False,blank=False)
    descripcion = models.TextField(max_length=500,null=False,blank=False)
    stock = models.CharField(max_length=30,null=False,blank=False)
    precio = models.CharField(max_length=30,null=False,blank=False)

class Boleta(models.Model):
    fecha = models.DateTimeField(auto_now=True)

