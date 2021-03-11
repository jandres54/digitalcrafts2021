firstName = input("What is your first name?")
lengthOfFirstName = len(firstName)
while(lengthOfFirstName < 1):
    firstName = input("What is your first name?")
    lengthOfFirstName = len(firstName)
lastName = input("What is your last name?")
lengthOfLastName = len(lastName)
while(lengthOfLastName < 1):
    lastName = input("What is your last name?")
    lengthOfLastName = len(lastName)
print("The user name is %s %s" % (firstName, lastName))
friendsFirstName = input("What is your friends first name?")
lenOfFriendsFirstName = len(friendsFirstName)
while(lenOfFriendsFirstName < 1):
    friendsFirstName = input("What is your friends first name?")
    lenOfFriendsFirstName = len(friendsFirstName)
friendsLastName = input("What is your friends last name?")
lenOfFriendsLastName = len(friendsLastName)
while(lenOfFriendsLastName < 1):
    friendsLastName = input("What is your friends last name?")
    lenfFriendsLastName = len(friendsLastName)
print("The friends name is %s %s" % (friendsFirstName, friendsLastName))
print("")
