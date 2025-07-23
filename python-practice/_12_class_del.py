class Account:
    num_accounts = 0

    def __init__(self, name):
        self.name = name
        Account.num_accounts += 1
        print(f"[생성] {self.name} / 전체 계좌 수: {Account.num_accounts}")

    def __del__(self):
        Account.num_accounts -= 1
        print(f"[삭제] {self.name} / 전체 계좌 수: {Account.num_accounts}")

# 객체 생성
acc1 = Account("영희")
acc2 = Account("철수")

# 객체 삭제
del acc1  # __del__() 자동 호출됨

# [생성] 혜연 / 전체 계좌 수: 1 # acc1 = Account("영희")
# [생성] 철수 / 전체 계좌 수: 2 # acc2 = Account("철수")
# [삭제] 혜연 / 전체 계좌 수: 1 # del acc1
# [삭제] 철수 / 전체 계좌 수: 0 # acc2는 직접 del하지 않았지만, -> 스크립트 마지막 줄까지 실행이 끝나면, -> Python이 종료되면서 자동으로 acc2도 삭제 -> 그래서 __del__()이 호출됨