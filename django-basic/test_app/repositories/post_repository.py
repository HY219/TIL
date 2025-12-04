from typing import Iterable
from ..models import Post

class PostRepository:
    def get_all_posts(self) -> Iterable[Post]:
        return Post.objects.all().order_by("-created_at")