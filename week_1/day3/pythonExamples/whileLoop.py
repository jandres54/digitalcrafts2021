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
lengthOfFriendsFirstName = len(friendsFirstName)
while(lengthOfFriendsFirstName < 1):
    friendsFirstName = input("What is your friends first name?")
    lengthOfFriendsFirstName = len(friendsFirstName)
friendsLastName = input("What is your friends last name?")
lengthOfFriendsLastName = len(friendsLastName)
while(lengthOfFriendsLastName < 1):
    friendsLastName = input("What is your friends last name?")
    lengthOfFriendsLastName = len(friendsLastName)
print("The friends name is %s %s" % (friendsFirstName, friendsLastName))
print("")
