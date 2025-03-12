from django.urls import path
from . import views

urlpatterns = [
    #path('', views.myhello_api, name='index'),
    path('add', views.add_post, name='add_post'),
    path('list', views.list_post, name='list_post'),
    path('courselist', views.course_list, name='courselist'),
    path('addcourse', views.add_course, name='addcourse'),
]