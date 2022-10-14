from django.urls import path
from . import views


urlpatterns = [
	path('register/', views.registerPage, name="register"),
	path('login/', views.loginPage, name="login"),  
	path('logout/', views.logout, name="logout"),

    path('', views.home, name="home"),
	path('todo/', views.todo, name="todo"),
	path('pomodoro/', views.pomodoro, name="pomodoro"),


]