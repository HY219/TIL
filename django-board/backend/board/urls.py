from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListBoard.as_view()), # GET /api/board/
    path('<int:pk>',  views.DetailBoard.as_view()), # GET /api/board/1
    path('write/',  views.WriteBoard.as_view()), # 끝에 슬레쉬 반드시 입력 # 요청 url과 일치시킬 것
    path('delete/',  views.DeleteBoard.as_view()),
    path('update/',  views.UpdateBoard.as_view()),
]

# Board내부의 urls.py를 정의