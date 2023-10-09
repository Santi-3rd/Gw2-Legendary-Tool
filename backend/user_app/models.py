from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class App_user(AbstractUser):
    USERNAME_FIELD ='username'
    EMAIL_FIELD ='email'
    REQUIRED_FIELDS=[]

class APIKey(models.Model):
    user = models.ForeignKey(App_user, on_delete=models.CASCADE)
    key = models.CharField(max_length=256, unique=True)