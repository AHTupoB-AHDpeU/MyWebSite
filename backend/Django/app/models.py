"""
Definition of models.
"""

from django.db import models
from django.contrib.auth.models import User


class Service(models.Model):
    name = models.CharField(max_length=200)
    picture = models.ImageField(upload_to='services/', blank=True, null=True) # Изображение будет сохраняться в папку media/services/
    price = models.IntegerField()
    description = models.TextField()


    def __str__(self):
        return self.name

class Rating(models.Model):
    name = models.CharField(max_length=100)
    value = models.FloatField(choices=[(i * 0.5, f"{i * 0.5}") for i in range(2, 11)])

    def __str__(self):
        return f"{self.name}: {self.value}"

class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    service = models.ForeignKey(Service, on_delete=models.CASCADE)
    rating = models.ForeignKey(Rating, on_delete=models.CASCADE)
    date = models.DateField()
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.user.username} - {self.service.name} - {self.rating.value}"

