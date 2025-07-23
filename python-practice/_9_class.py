nameA = "KimLee"
emailA = "KimLee@email.com"
addrA = "jeju"

def print_business_card(name, email, addr):
    print('------------------------')
    print("Name: %s" % name)
    print("E-mail: %s" % email)
    print("Office Address: %s" % addr)
    print('------------------------')

print_business_card(nameA, emailA, addrA)

print('------------------------')


# 정수, 실수, 문자열, 리스트, 튜플과 같은 기본 자료형과 기본 자료구조도 모두 클래스를 통해 만들어진 타입
# >>> type(3)
# <class 'int'>
# >>> type(3.1)
# <class 'float'>
# >>> type('3')
# <class 'str'>
# >>> type([])
# <class 'list'>
# >>> type(())
# <class 'tuple'>
# >>>

# 파이썬에서는 함수도 객체
# >>> def foo():
#         pass

# >>> type(foo)
# <class 'function'>

print('------------------------')

class BusinessCard:
    pass

card1 = BusinessCard()

print(type(BusinessCard())) # <class '__main__.BusinessCard'>
print(type(card1)) # <class '__main__.BusinessCard'>
print(BusinessCard()) # <__main__.BusinessCard object at 0x000002CD68BFCB90> # BusinessCard()를 호출할 때마다 새로운 인스턴스(객체)가 생성되어, 새 메모리 공간에 객체가 만들어짐(즉, 메모리 주소가 변경됨)
print(card1) # <__main__.BusinessCard object at 0x000002CD689E6F90> # 마찬가지 # 41번째줄과 42번째 줄은 서로 다른 메모리 주소 공간을 가짐

print('------------------------')

class BusinessCard2:
    # 클래스 내 함수 = 메서드
    def set_info(self, name, email, addr):
        self.name = name
        self.email = email
        self.addr = addr
        # self
            # 클래스 내부에 정의도니 함수인 메서드의 첫 번재 인자는 반드시 self여야 한다. (사실은 x)
            # 클래스를 정의하는 순간에는, 생성할 인스턴스의 이름이 무엇일지(ex. memeber2) 모르기 때문에 self라는 단어를 대신 사용하는 것이다.


member2 = BusinessCard2() # member1이라는 인스턴스 생성 후,
member2.set_info("KimKim2", "KimKim2@email.com", "jeju") # set_info 메서드를 호출하면,
# 메서드의 인자로 전달된 값을 인스턴스 내부 변수인 self.name, self.email, self.addr이 바인딩하는 것이다.

print('------------------------')

class BusinessCard3:
    def set_info(self, name, email, addr):
        self.name = name
        self.email = email
        self.addr = addr
    def print_info(self):
        print('------------------------')
        print("Name: ", self.name)
        print("E-mail: ", self.email)
        print("Address: ", self.addr)
        print('------------------------')

member3 = BusinessCard3()
member3.set_info("KimKim3", "KimKim3@email.com", "jeju")
member3.print_info()