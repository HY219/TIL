from rest_framework import serializers
from .models import Board

class BoardSerializer(serializers.ModelSerializer):
    class Meta:
        # fields = '__all__'
        fields = (
            'id',
            'title',
            'content',
        )
        model = Board