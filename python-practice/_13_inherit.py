# 클래스 상속

class Parent:
    def can_sing(self):
        print("Sing a song")

father = Parent()
father.can_sing()

# 클래스를 정의할 때 다른 클래스로부터 상속받고자 한다면,
# 새로 정의할 클래스 이름 다음에 괄호를 사용해 상속받고자 하는 클래스의 이름을 지정하면 된다.
class LuckyChild(Parent):
    pass

child1 = LuckyChild()
child1.can_sing()

class LuckyChild2(Parent):
    def can_dance(self):
        print("Shuffle Dance")

child2 = LuckyChild2()
child2.can_sing()
child2.can_dance()