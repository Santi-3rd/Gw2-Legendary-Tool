from django.urls import path
from .views import Trading_Post_Prices

urlpatterns = [
    path('prices/<int:id>/', Trading_Post_Prices.as_view(), name='trading_post_prices'),
]