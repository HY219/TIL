# __init__
class BusinessCard4:
    def __init__(self, name, email, addr):
        self.name = name
        self.email = email
        self.addr = addr
    def print_info(self):
        print('------------------------')
        print("Name: ", self.name)
        print("E-mail: ", self.email)
        print("Address: ", self.addr)
        print('------------------------')

# member4 = BusinessCard4() # 초기값을 설정해 주지 않고 인스턴스를 생성하면, error 발생
member4 = BusinessCard4("KimKim4", "KimKim4@email.com", "jeju") # 초기값을 설정(=인자를 전달)해야, 정상적으로 인스턴스 생성 
member4.print_info()

print('------------------------')

# self

# class Foo:
#     def __init__():
#             print("function 1")
#     def func2(self):
#             print("function 2")
            
# f = Foo()

class Foo2:
    def func1():
            print("function 1")
    def func2(self):
            print(id(self))
            print("function 2")

f2 = Foo2()
f2.func2() # function 2 # 인스턴스명.메서드() # 1518800630992 function2
# f2.func1() # error # 인스턴스명.메서드()
Foo2.func1() # function 1 # 클래스명.메서드() # function1
# Foo2.func2() # error # 클래스명.메서드() # self위치에 인자를 전달하지 않아서, error

# self로 전달되는 것은 인스턴스 자체
f3 = Foo2()
print(id(f3)) # 1518802815888

Foo2.func2(f3) # 1518802815888 # function2


