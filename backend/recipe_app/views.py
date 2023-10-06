from rest_framework.views import APIView
from rest_framework.response import Response
import requests
# Create your views here.

class All_Recipes(APIView):

    def get(self, request):
        recipes_endpoint = "https://api.guildwars2.com/v2/recipes"

        recipes_response = requests.get(recipes_endpoint)
        recipes_data = recipes_response.json()

        response_data = {
            "recipes" : recipes_data
        }

        return Response(response_data, status=recipes_response.status_code)
    
class Recipes_For_Item(APIView): #searches for the recipes that craft an item.

    def get(self, request):
        recipes_endpoint = "https://api.guildwars2.com/v2/recipes/search?output=50065" #needs int variable for output's number

        recipes_response = requests.get(recipes_endpoint)
        recipes_data = recipes_response.json()

        response_data = {
            "recipes" : recipes_data
        }

        return Response(response_data, status=recipes_response.status_code)
    
# class Item_For_Recipe(APIView): #searches for the recipes with item as ingredient.

#     def get(self, request):
#         recipes_endpoint = "https://api.guildwars2.com/v2/recipes/search?input=46731" #needs int variable for input's number

#         recipes_response = requests.get(recipes_endpoint)
#         recipes_data = recipes_response.json()

#         response_data = {
#             "recipes" : recipes_data
#         }

#         return Response(response_data, status=recipes_response.status_code)

