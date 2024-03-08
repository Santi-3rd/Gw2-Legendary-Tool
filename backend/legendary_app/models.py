from django.db import models

# Create your models here.
class Legendary_Equipment(models.Model):
    name = models.CharField(unique=True)
    item_id = models.IntegerField(unique=True)
    type = models.CharField()
    generation = models.IntegerField()