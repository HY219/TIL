class Stock:
    market = "kospi"

print(Stock.__dict__) # {'market': 'kospi', '__module__': '__main__', '__firstlineno__': 1, '__static_attributes__': (), '__dict__': <attribute '__dict__' of 'Stock' objects>, '__weakref__': <attribute '__weakref__' of 'Stock' objects>, '__doc__': None

s1 = Stock()
print(id(s1)) # 2268159962688
print(s1.market) # kospi
print(s1.__dict__) # {}

s1.market = 'kosdaq'
print(s1.market) # kosdaq # 인스턴스의 네임스페이스에 해당 이름(=market)이 있으므로, 해당 값(=kosdaq) 출력
print(s1.__dict__) # {'market': 'kosdaq'} 

s2 = Stock()
print(s2.market) # kospi # 인스턴스의 네임스페이스에 해당 이름(=maket)이 없으면, 클래스의 네임스페이스로 이동class Account:
