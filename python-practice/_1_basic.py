print('Hello World!')

mynumber=1000
print(mynumber)

print('------------------------')

# 문자열 인덱싱
mystring = 'hello wolrd'
print(mystring[0:5]) # index 0~4까지 출력 # hello
print(mystring[:5]) # index 0~4까지 출력 # hello
print(mystring[6:]) # index 6~끝까지 출력 # wolrd
print(mystring[6:-1]) # index 6~(끝-1)까지 출력 # wolr

print('------------------------')

# 리스트
# []
# 인덱싱 가능
# 데이터 삭제 가능
mylist = ['a', 'b', 1, 2]
print(mylist)
mylist.append(3) # 마지막 인덱스에 요소 추가
print(mylist)
mylist.append('c')
print(mylist)
print(mylist[-1]) # 마지막 요소 찾기
del mylist[0] # 해당 인덱스(0) 요소 제거
print(mylist)

print('------------------------')

# 튜플
# ()
# 인덱싱 가능
# 데이터 삭제 불가능
# 튜플은 리스트와 달리 원소를 수정할 수 없다.
# 수정하려 할 경우, 에러 발생
mytuple = ('a', 'b', 1, 2)
print(mytuple)
print(mytuple[0])

print('------------------------')

# 딕셔너리
# {}
# 인덱싱 불가능
# 데이터 삭제 가능
# 키(key)와 값(value)로 쌍으로 저장
mydict = {}
# 요소 추가
mydict['a'] = 10 
mydict['c'] = 30
print(mydict) # {'a': 10, 'c': 20}
print(mydict['a']) # 10
mydict['b'] = 20
print(mydict) # {'a': 10, 'c': 30, 'b': 20}
# 딕셔너리 초기화
mydict = {'ABC': 1, 'cd': 2} # {'ABC': 1, 'cd': 2}
print(mydict)
# 해당 key-value 삭제
del mydict['cd'] 
print(mydict) # {'ABC': 1 }
# 딕셔너리 key 구하기
print(mydict.keys()) # dict_keys(['ABC'])
print(list(mydict.keys())) # ['ABC']
# 딕셔너리 value 구하기
print(mydict.values()) # dict_values([1])
print(list(mydict.values())) # [1]
# print(mydict[0]) # 에러 #인덱싱 불가능

print('------------------------')

# Boolean
print(3 == 3)
print(3 != 3)
print(3 < 3)
print(3 > 3)
print(3 <= 3)
print(3 >= 3)
mystock = "ABC"
print(mystock == "ABC")

print('------------------------')

# 논리연산자
# and
# or
price = 50
print(price > 0 and price > 100)
print(price > 0 or price > 100)

print('------------------------')

# if문
myprice = 50
if myprice > 100:
    print("Buy 100")
elif myprice == 50:
    print("Buy 50")
else:
    print("Buy 10")

print('------------------------')

# for문
for i in [0, 1, 2, 4, 5]:
    print(i)
    print(i)

print(list(range(1, 6))) # [1, 2, 3, 4, 5]

for i in range(1, 6):
    print(i)

# while 문