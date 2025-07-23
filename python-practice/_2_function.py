# 함수
def function_one(n):
    for i in range(n):
        print("A")

function_one(3)


# return과 함수 내의 변수 사용
def funtion_two(price):
    one = price * 10
    two = price + one
    return (one, two)

(one, two) = funtion_two(1)
print(one) # 10
print(two) # 11