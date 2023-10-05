from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="home"),
    path("tima", views.tima, name="tima")
]