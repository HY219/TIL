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
    
    def post(self, request):
        """
        POST /api/posts/
        {"title": "...", "content": "..."}
        """
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            service = HelloService()
            post = service.create_post(serializer.validated_data)
            return Response(PostSerializer(post).data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.erros, status=status.HTTP_400_BAD_REQUEST)

class PostDetailAPI(APIView):
    def get(self, request, post_id: int):
        """
        GET /api/posts/<post_id>/
        단일 게시글 상세 조회
        """
        service = HelloService()
        post = service.get_post_detail(post_id)

        if post is None:
            return Response(
                {"detail": "해당 게시글을 찾을 수 없습니다."},
                status = status.HTTP_404_NOT_FOUND,
            )
        
        serializer = PostSerializer(post)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def put(self, request, post_id: int):
        """
        Put /api/posts/<post_id>/
        전체 수정: title, content 둘 다 보내는 것을 기대
        """
        service = HelloService()
        post = service.get_post_detail(post_id)

        if post is None:
            return Response(
                {"detail": "해당 게시글을 찾을 수 없습니다."},
                status = status.HTTP_404_NOT_FOUND,
            )
        
        # 기존 post + 새 데이터로 완전 교체(전체 수정)
        serializer = PostSerializer(post, data=request.data)

        if serializer.is_valid():
            updated_post = service.update_post(post_id, serializer.validated_data)
            output_serializer = PostSerializer(updated_post)
            return Response(output_serializer.data, status=status.HTTP_200_OK)
        
        return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)
    
    def patch(self, request, post_id: int):
        service = HelloService()
        post = service.get_post_detail(post_id)

        if post is None:
            return Response(
                {"detail": "해당 게시글을 찾을 수 없습니다."},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # partial=True -> 부분 수정 허용
        serializer = PostSerializer(post, data=request.data, partial=True)

        if serializer.is_valid():
            updated_post = service.update_post(post_id, serializer.validated_data)
            output_serializer = PostSerializer(updated_post)
            return Response(output_serializer.data, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)