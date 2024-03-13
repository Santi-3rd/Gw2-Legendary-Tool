from django.urls import path
from .views import Trading_Post_Buy_Price, Trading_Post_Sell_Price

urlpatterns = [
    path('buy_price/<int:id>/', Trading_Post_Buy_Price.as_view(), name='trading_post_buy_price'),
    path('sell_price/<int:id>/', Trading_Post_Sell_Price.as_view(), name='trading_post_sell_price')
]