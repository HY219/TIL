from rest_framework import serializers
from ..models import Post

class PostSerializer(serializers.ModelSerializer): # serializers.ModelSerializer : Model을 읽어서 자동으로 필드를 생성해주는 클래스
    class Meta: # 내부 클래스 (설정 값을 담아두는 설명서 역할)
        model = Post # 연결할 모델
        fields = ["id", "title", "content", "created_at"] # JSON으로 변환할 필드

    ### 아래 코드와 동일
    # class PostSerializer(serializers.Serializer):
    #     id = serializers.IntegerField()
    #     title = serializers.CharField()
    #     content = serializers.CharField()
    #     created_at = serializers.DateTimeField()
    