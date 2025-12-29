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
    
    def update_post(self, post_id: int, validated_data: dict):
        """
        게시글 수정. 없으면 None 반환, 있으면 수정된 Post 반환
        """
        post = self.post_repo.get_post_by_id(post_id)
        if post is None:
            return None
        
        updated_post = self.post_repo.update_post(post, validated_data)
        return updated_post
    
    def delete_post(self, post_id: int) -> bool:
        """
        게시글 삭제. 삭제 성공하면 True, 대상이 없으면 False 반환.
        """
        post = self.post_repo.get_post_by_id(post_id)
        if post is None:
            return False
        
        self.post_repo.delete_post(post)
        return True