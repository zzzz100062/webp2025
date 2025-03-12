from django.db import models

# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField(blank=True)
    photo = models.ImageField(blank=True)
    location = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    #def __str__(self):
        #return self.title

class Course_table(models.Model):
    Department = models.CharField(max_length=100)
    CourseTitle = models.CharField(max_length=100)
    Instructor = models.CharField(max_length=100)