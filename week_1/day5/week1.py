# Algorithm 1

for x in range(0, 100):

    x = x + 1

    if (x % 3 == 0 and x % 5 == 0):
        print("FizzBuzz")
    if (x % 3 == 0):
        print("Fizz")
    if (x % 5 == 0):
        print("Buzz")
    elif (x % 3 != 0 and x % 5 != 0):
        print(str(x))


# Algorithm 2

result = 0
for x in range(0, 1000):
    if x % 3 == 0 or x % 5 == 0:
        result += x
print(result)
