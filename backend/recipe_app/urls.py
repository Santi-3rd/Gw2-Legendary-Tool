from django.urls import path
from .views import Gw2_Recipes


urlpatterns = [
    path('', Gw2_Recipes.as_view(), name="recipes"),
]