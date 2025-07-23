import time

print(time.time()) # 1753161099.4401705
print(time.ctime()) # Tue Jul 22 14:11:39 2025

# print(type(_))
# NameError 발생 -> 스크립트 파일(.py) 안에서는 자동으로 정의 x
# Python 셸(대화형 인터프리터)에서는 -> 이전에 계산된 결과값을 의미
print(type(time.ctime())) # <class 'str'>
print(time.ctime().split(' ')[-1]) # 2025 (연도 출력)

# 1초 간격으로 0~3값이 출력되는 함수
for i in range(4):
    print(i)
    time.sleep(1) # n초 동안 코드의 실행을 멈추는 역할

# 해당 모듈의 위치 확인
# (tiem은 내장 모듈이기 때문에, 해당 모듈의 위치가 따로 출력되지는 않는다.)
print(time) # <module 'time' (built-in)> 
import random
print(random) # <module 'random' from 'C:\\Users\\PLAYCON-GT\\AppData\\Local\\Programs\\Python\\Python313\\Lib\\random.py'>

# 내장 함수 확인
print(dir(time)) # ['_STRUCT_TM_ITEMS', '__doc__', '__loader__', '__name__', '__package__', '__spec__', 'altzone', 'asctime', 'ctime', 'daylight', 'get_clock_info', 'gmtime', 'localtime', 'mktime', 'monotonic', 'monotonic_ns', 'perf_counter', 'perf_counter_ns', 'process_time', 'process_time_ns', 'sleep', 'strftime', 'strptime', 'struct_time', 'thread_time', 'thread_time_ns', 'time', 'time_ns', 'timezone', 'tzname']