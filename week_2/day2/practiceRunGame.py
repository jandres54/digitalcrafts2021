class Hero:
    def __init__(self, name):
        self.name = name
        self.hp = hp

    def attack(self):
        self.hp -= 5


class Goblin:
    def __init__(self, name):
        self.name = name
        self.hp = hp


class knight:
    def __init__(self, name):
        self.name = name
        self.hp = hp


bob = Goblin("Bob")
philip = Hero("Philip")
whitney = Hero("Whitney")
randi = Goblin("Randi")
randy = Goblin("Randy")
carlo = knight("Carlo")

print("The name of this character ", bob.name, 10)
print("The name of this character ", philip.name, 10)
print("The name of this character ", whitney.name, 10)
print("The name of this character ", randi.name, 10)
print("The name of this character ", randy.name, 10)
print("The name of this character ", carlo.name, 10)
