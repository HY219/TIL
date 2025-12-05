from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from ..services.hello_service import HelloService
from .post_serializer import PostSerializer

# View 클래스 (APIView를 상속 받음 -> Django/DRF가 View 클래스로 인식)
class PostListAPI(APIView):
    def get(self, request):
        service = HelloService()
        posts = service.get_all_posts_for_api()

        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)