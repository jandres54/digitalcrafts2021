def userInput():
    userName = input("What would you like your name to be?")
    userAge = input("How old are you?")
    userChoice = input("Are you Temporary or Regular?")


class OrigUser:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def printUser(self):
        print(self.name)
        print(self.age)


userInput()

# user = OrigUser("Carlo", 25)
# user.printUser()


class TempUser:
    def __init__(self, name):
        self.name = name

    def printTemp(self):
        print(self.name)


# user2 = TempUser("Jimmy")
# user2.printTemp()
