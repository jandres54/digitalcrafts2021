nameOfUser = input("What is ypur name?")
lenghtOfUserName = len(nameOfUser)
while(lenghtOfUserName < 0):
    nameOfUser = input("What is your name ?")
    lenghtOfUserName = len(nameOfUser)
print("The user name is %s " % (nameOfUser))
