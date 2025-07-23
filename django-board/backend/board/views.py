from django.shortcuts import render
# from django.shortcuts import get_object_or_404
# from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import BoardSerializer
from .models import Board

# Create your views here.
# class ListBoard(generics.ListCreateAPIView):
    # queryset = Board.objects.all()
    # serializer_class = BoardSerializer

# class DetailBoard(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Board.objects.all()
#     serializer_class = BoardSerializer

class ListBoard(APIView):
    def get(self, request):
        boards = Board.objects.all()
        serializer = BoardSerializer(boards, many=True)
        return Response(serializer.data)

class DetailBoard(APIView):
    def get(self, request, pk): # pk 반드시 작성
        try:
            board = Board.objects.get(pk=pk)
        except Board.DoesNotExist:
            return Response({'error': '해당 게시물이 없습니다.'}, status=404)
        serializer = BoardSerializer(board)
        return Response(serializer.data)
    # def get(self, request, pk):  # pk 반드시 작성
    #     board = get_object_or_404(Board, pk=pk)  # 하나만 가져옴
    #     serializer = BoardSerializer(board)
    #     return Response(serializer.data)

class WriteBoard(APIView):
     def post(self, request):
        serializer = BoardSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class DeleteBoard(APIView):
    def delete(self, request):
        board_id = request.data.get('id')  # 클라이언트에서 보낸 id 추출
        if not board_id:
            return Response({'error': 'id가 제공되지 않았습니다.'}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            board = Board.objects.get(pk=board_id)
        except Board.DoesNotExist:
            return Response({'error': '해당 게시물이 없습니다.'}, status=status.HTTP_404_NOT_FOUND)
        
        board.delete()
        return Response({'message': '게시물이 삭제되었습니다.'}, status=status.HTTP_204_NO_CONTENT)
    
class UpdateBoard(APIView):
    def put(self, request):
        board_id = request.data.get('id')  # 클라이언트에서 보낸 id 추출
        if not board_id:
            return Response({'error': 'id가 제공되지 않았습니다.'}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            board = Board.objects.get(pk=board_id)
        except Board.DoesNotExist:
            return Response({'error': '해당 게시물이 없습니다.'}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = BoardSerializer(board, data=request.data, partial=True)  # 부분 수정 허용
        if serializer.is_valid():
            serializer.save()
            return Response({'message': '게시물이 수정되었습니다.', 'data': serializer.data}, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)