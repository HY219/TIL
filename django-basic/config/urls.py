"""
URL configuration for config project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from test_app.views import index
from test_app.apis.post_api import PostListAPI, PostDetailAPI

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index), # 루트 URL -> index view
    path('api/posts/', PostListAPI.as_view()), # GET /api/posts/ API # 클래스 기반 자체는 view로 사용 불가
    path('api/posts/<int:post_id>/', PostDetailAPI.as_view())
]
