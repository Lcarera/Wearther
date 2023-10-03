import random
import string
class Clothes:
    def __init__(self, name, image, is_cold, is_warm, type):
        self.id = ''.join(random.choices(string.ascii_uppercase + string.digits, k=8))
        self.name = name
        self.image = image
        self.is_cold = is_cold
        self.is_warm = is_warm
        self.type = type