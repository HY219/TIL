# 파이썬에는 기본적으로 제공되는 다양한 모듈이 있다.

# 그중 os 모듈 (Operating System - 운영체제에서 제공되는 여러 기능을 파이썬에서 수행)
# python을 이용해 파일을 복사하거나, 디렉터리를 생성하고, 특정 디렉터리 내의 파일 목록을 구하고자 할 때 사용

import os

# 현재 경로를 구하려면
print('start')
print(os.getcwd()) # C:\Users\PLAYCON-GT\projects\python-practice
print('end')

# 특정 경로에 존재하는 파일과 디렉터리 목록
print(os.listdir()) # C:\Users\PLAYCON-GT\projects\python-practice에 존재하는 파일과 디렉터리 목록 -> 리스트로 반환

print(os.listdir('C:/Users/PLAYCON-GT/projects/django-board')) # 경로를 지정해서, 해당 경로에 존재하는 파일과 디렉터리 목록을 가져올수도 있다.

for x in os.listdir():
    if x.endswith('py'):
        print(x)

print(len(os.listdir()))