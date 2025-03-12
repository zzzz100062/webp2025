#from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.core.serializers.json import DjangoJSONEncoder
from django.http import JsonResponse
import json


from .models import Post
from .models import Course_table


import logging
logger = logging.getLogger('django')

# Create your views here.
"""
@api_view(['GET'])
def myhello_api( request, ):
    my_name = request.GET.get('name', None)
    if  my_name:
        retValue = {}
        retValue['data'] = "Hello" + my_name
        return Response(retValue, status=status.HTTP_200_OK)
    else:
        return Response(
            {"res": "parameter name is None"},
                status=status.HTTP_400_BAD_REQUEST
            )
"""

@api_view(['GET'])
def add_post (request):
    title = request.GET.get('title', '')
    content = request.GET.get('content', '')
    photo = request.GET.get('photo', '')
    location = request.GET.get('location', '')

    new_post = Post()
    new_post.title = title
    new_post.content = content
    new_post.photo = photo
    new_post.location = location
    new_post.save()
    logger.debug("************ myhello_api" + title)
    if title:
        return JsonResponse({"data": title + "insert"}, status=status.HTTP_200_OK)
    else:
        return JsonResponse({"res": "parameter name is None"}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def list_post (request):
    post = Post.objects.all().values()
    return JsonResponse(list(post), safe=False)
    '''
    return Response({"data":
                     json.dumps(list(post),sort_keys=True, indent=1, cls=DjangoJSONEncoder)
                     }, status=status.HTTP_200_OK)'
    '''

@api_view(['GET'])
def add_course (request):
    Department = request.GET.get('Department', '')
    CourseTitle = request.GET.get('CourseTitle', '')
    Instructor = request.GET.get('Instructor', '')

    new_course = Course_table()
    new_course.Department = Department
    new_course.CourseTitle = CourseTitle
    new_course.Instructor = Instructor
    new_course.save()
    logger.debug("************ myhello_api" + Department)
    if Department:
        return JsonResponse({"data": Department + "insert"}, status=status.HTTP_200_OK)
    else:
        return JsonResponse({"res": "parameter name is None"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def course_list (request):
    course = Course_table.objects.all().values()
    return JsonResponse(list(course), safe=False)
