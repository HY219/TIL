from ..repositories.post_repository import PostRepository
# class HelloService:
#     def get_message(self):
#         return "Hello Django from Service!"

class HelloService:
    def __init__(self):
        self.post_repo = PostRepository()

    def get_message(self) -> str:
        posts = self.post_repo.get_all_posts()

        if not posts:
            return "등록된 게시글이 아직 없습니다."
        
        titles = [post.title for post in posts]
        return "게시글 목록: " + ", ".join(titles)

    def get_all_posts_for_api(self):
        return self.post_repo.get_all_posts()
    
    def create_post(self, validated_data):
        """
        validated_data = {"title": "...", "content": "..."}
        """
        return self.post_repo.create_post(validated_data)
    
    def get_post_detail(self, post_id: int):
        """
        단일 게시글 조회, 없으면 None 반환
        """
        return self.post_repo.get_post_by_id(post_id)