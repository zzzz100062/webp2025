#from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

import logging
logger = logging.getLogger('django')

# Create your views here.
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
