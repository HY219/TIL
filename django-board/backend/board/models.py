from django.db import models

# Create your models here.
class Board(models.Model):
    title = models.CharField(max_length=200, default="제목 없음") # title 컬럼
    content = models.TextField() # content 컬럼

    def __str__(self):
        """A string representation of the model."""
        return self.title