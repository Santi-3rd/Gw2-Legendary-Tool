from rest_framework.views import APIView
from rest_framework.response import Response
import requests
# Create your views here.

class Gw2_Recipes(APIView):

    def get(self, request):
        recipes_endpoint = "https://api.guildwars2.com/v2/recipes"

        recipes_response = requests.get(recipes_endpoint)
        recipes_data = recipes_response.json()

        response_data = {
            "recipes" : recipes_data
        }

        return Response(response_data, status=recipes_response.status_code)

