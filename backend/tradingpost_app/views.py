from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
import requests

# Create your views here.
class Trading_Post_Prices(APIView):
    def get(self, request):
        item_id = request.query_params.get('id')
        
        trading_post_endpoint = f'https://api.guildwars2.com/v2/commerce/prices/{item_id}'
