from django.contrib import admin
from .models import Post

# /admin/ 페이지에서 Post 관리
@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display=("id", "title", "created_at")