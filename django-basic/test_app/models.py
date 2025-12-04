from django.db import models

# model = 테이블
class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    # 사람이 읽을 수 있는 문자형태로 변경하는 파이썬 메서드 (__str__)
    def __str__(self):
        return self.title