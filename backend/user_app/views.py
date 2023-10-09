from django.shortcuts import render
from .models import App_user
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.status import (
    HTTP_200_OK,
    HTTP_201_CREATED,
    HTTP_204_NO_CONTENT,
    HTTP_400_BAD_REQUEST,
)
from django.http import HttpResponse

# Create your views here.

class Log_in(APIView):
    def post(self, request):
        request.data["username"] = request.data["username"]
        user = authenticate(**request.data)
        if user:
            token, created = Token.objects.get_or_create(user=user)
            return Response({"user": {"email": user.email}, "token": token.key})
        else:
            return Response("Something went wrong", status=HTTP_400_BAD_REQUEST)
        
class Register(APIView):
    def post(self, request):
        request.data["email"] = request.data["email"]
        request.data["username"] = request.data["username"]
        user = App_user.objects.create_user(**request.data)
        token = Token.objects.create(user=user)
        return Response(
            {"user": {"email": user.email, "username": user.username}, "token": token.key}, status=HTTP_201_CREATED
        )
    
class Info(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({"email": request.user.email, "username":request.user.user_name})


class Log_out(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        request.user.auth_token.delete()
        return Response(status=HTTP_204_NO_CONTENT)
    
class UserName(APIView):
    def get(self, request, user_id=None):

        if user_id is not None:
            try:
                user = App_user.objects.get(id=user_id)
                username = user.username
                return Response({"username": username}, status=HTTP_200_OK)
            except App_user.DoesNotExist:
                return Response("User not found", status=HTTP_400_BAD_REQUEST)
        else:
            return Response("User ID not provided", status=HTTP_400_BAD_REQUEST)