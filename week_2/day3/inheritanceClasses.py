class Currency:
    def __init__(self, name, homeNationCurrency, price):
        self.name = name,
        self.homeNationCurrency = homeNationCurrency,
        self.price = price


yen = Currency("Yen", "Japan", 20)
print("The value of this currency is ", yen.price)
# print out actual name price and nation of this currency
# this currency is a Yen , it is from Japan
print(f"This currency is {Curency.}")
