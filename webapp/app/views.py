from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def return_something_view(request):
    return HttpResponse('Hello!')
