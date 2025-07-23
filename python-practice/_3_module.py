def cal_upper(price):
    increment = price * 0.3
    upper_price = price + increment
    return upper_price

def cal_lower(price):
    decrement = price * 0.3
    lower_price = price - decrement
    return lower_price

author = "pystock"

print(__name__) # __main__ # stock모듈을 import 하고 있는 파일에서는 `stock`가 출력됨.
# __name__
# 파이썬 자체에서 사용하는 변수
# 특정 파이썬 파일이 직접 실행된 것인지 or 다른 파이썬 파일에서 import 된 것인지를 확인하는 용도

# __main__ -> 파이썬 파일이 독립적으로 실행 시 `__main__`이라는 문자열을 바인딩
# stock -> 다른 파일에 import 된 경우, 자신의 파일명을 바인딩

# stock 모듈을 import한 곳에서 실행되는 코드
# print(author)
# print(cal_upper(1000))
# print(cal_lower(1000))

# stock 모듈을 import한 곳에서는 실행되지 않는 코드
# stock 모듈이 직접 실행된 경우에만 실행
if __name__ == "__main__": 
    print(author)
    print(cal_upper(1000))
    print(cal_lower(1000))