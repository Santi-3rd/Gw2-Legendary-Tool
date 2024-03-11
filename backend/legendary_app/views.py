from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
import requests

# Create your views here.
class All_Legendaries(APIView): #searches for the recipes that craft an item.

    def get(self, request):
        legendaries_endpoint = "https://api.guildwars2.com/v2/legendaryarmory"

        legendaries_response = requests.get(legendaries_endpoint)
        legendaries_data = legendaries_response.json()

        legendaries_data = {
            "id" : legendaries_data
        }
        print(legendaries_data)

        return Response(legendaries_data, status=legendaries_response.status_code)
    