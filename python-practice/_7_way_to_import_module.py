print(dir())

# os 모듈로부터 listdir을 import해라.
from os import listdir
print(dir())
print(listdir())
# print(os.listdir()) # error

# os 모듈 내의 모든 것을 import해라.
from os import * 

# os 모듈을 import해라.
import os
print(dir())

# os 모듈을 winos로 import해라.
import os as winos
print(winos.getcwd())
# print(os.getcwd()) # error (현재는 os모듈이 import되어있기 때문에 error 발생 x)