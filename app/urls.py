from django.urls import path
from app import views

urlpatterns = [
    path("", views.home, name="home"),
    path("books/", views.book_list, name="book_list"),
    path("book_create/", views.book_create, name="book_create"),
    path("app-calc-res/", views.app_calc_res, name="app_calc_res"),
    path("app-calc-form", views.app_calc_form, name="app_calc_form"),
]
