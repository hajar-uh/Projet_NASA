from django.http import HttpResponse
from django.shortcuts import render


def home_view(request):
    #return HttpResponse("Hello World"),
    return render(request, 'index.html')

def asteroids_view(request):
    #return HttpResponse("Hello Asteroids")
    return render(request, 'asteroids.html')

def earth_view(request):
    #return HttpResponse("Hello Earth")
    return render(request, 'earth.html')

def mars_view(request):
    #return HttpResponse("Hello Mars")
    return render(request, 'mars.html')