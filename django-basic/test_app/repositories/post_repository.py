from typing import Iterable, Optional
from ..models import Post

class PostRepository:
    def get_all_posts(self) -> Iterable[Post]:
        return Post.objects.all().order_by("-created_at")
    
    def create_post(self, data: dict) -> Post:
        """
        data = {"title": "...", "content": "..."}
        """
        return Post.objects.create(**data) # data dict를 풀어서 create 함수에 전달 # Django ORM으로 INSERT하는 코드
    
    def get_post_by_id(self, post_id: int) -> Optional[Post]:
        """
        단일 게시글 조회, 없으면 None 반환
        """
        return Post.objects.filter(id=post_id).first()
    
    def update_post(self, post: Post, data: dict) -> Post:
        """
        기존 POST 객체(post)의 data에 들어있는 값만 덮어씌우고 저장
        data 예: {"title": "...", "content": "..."}
        """
        for field, value in data.items():
            setattr(post, field, value) # post.title = ..., post.content = ... 이런 식
        post.save() # DB에 적용 # UPDATE 쿼리
        return post
