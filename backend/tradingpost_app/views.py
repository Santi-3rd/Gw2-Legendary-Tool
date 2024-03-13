from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED, HTTP_204_NO_CONTENT, HTTP_200_OK, HTTP_404_NOT_FOUND
import requests

# Create your views here.
class Trading_Post_Prices(APIView):
    def get(self, request, id):
        item_id = id

        trading_post_endpoint = f'https://api.guildwars2.com/v2/commerce/prices/{item_id}'

        response = requests.get(trading_post_endpoint)
        price_data = response.json()
        print(price_data)

        if response.status_code == 404:
            price_data = {
                "buy_price" : 'Untradable',
                "sell_price" : 'Untradable',
            }
            print(price_data)
            return Response(price_data)
        else:
            price_data = response.json()
            price_data = {
                "buy_price" : price_data['buys']['unit_price'],
                "sell_price" : price_data['sells']['unit_price'],
            }
            print(price_data)
            return Response(price_data, status=response.status_code)
