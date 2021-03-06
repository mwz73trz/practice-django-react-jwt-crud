from django.db import models
from django.contrib.auth.models import User

class Team(models.Model):
    name = models.CharField(max_length=256)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='teams')

    def __str__(self):
        return f"{self.name}"
