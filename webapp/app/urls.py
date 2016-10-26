from django.conf.urls import url, include
from django.contrib import admin
from views import return_something_view

urlpatterns = [
    url(r'^', return_something_view),
]
