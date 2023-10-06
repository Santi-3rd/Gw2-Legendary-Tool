from django.urls import path
from .views import All_Recipes, Recipes_For_Item


urlpatterns = [
    path('', All_Recipes.as_view(), name="recipes"),
    path('search/', Recipes_For_Item.as_view(), name="recipes_for_item"),
    # path('search/', Item_For_Recipe.as_view(), name="item_for_recipe"),
]