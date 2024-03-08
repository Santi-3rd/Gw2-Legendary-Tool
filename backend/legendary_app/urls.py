from django.urls import path
from .views import All_Legendaries

urlpatterns = [
    path('', All_Legendaries.as_view(), name='all_legendaries')
]