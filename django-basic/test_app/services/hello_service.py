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