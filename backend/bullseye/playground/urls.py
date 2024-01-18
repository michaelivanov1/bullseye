from django.urls import path
from . import views

# URLConf
urlpatterns = [
    path('hello/', views.say_hello) # passing a reference to func, not calling it. # always end paths with forward slash
]