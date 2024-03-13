from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED, HTTP_204_NO_CONTENT, HTTP_200_OK, HTTP_404_NOT_FOUND
import requests

# Create your views here.
class Trading_Post_Buy_Price(APIView):
    def get(self, request, id):
        item_id = id

        trading_post_endpoint = f'https://api.guildwars2.com/v2/commerce/prices/{item_id}'

        response = requests.get(trading_post_endpoint)
        
        if response.json().get('text'): 
            return Response('Untradable')
        else:
            buy_price_data = response.json()['buys']['unit_price']
            buy_price_data = {
                "id" : item_id,
                "price" : buy_price_data
            }
            
            return Response(buy_price_data, status=response.status_code)

class Trading_Post_Sell_Price(APIView):
    def get(self, request, id):
        item_id = id
        
        trading_post_endpoint = f'https://api.guildwars2.com/v2/commerce/prices/{item_id}'

        response = requests.get(trading_post_endpoint)
        print(response.json())
        sell_price_data = response.json()

        sell_price_data = {
                "id" : item_id,
                "price" : sell_price_data
            }

        return Response(sell_price_data, status=response.status_code)
