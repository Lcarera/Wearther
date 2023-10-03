from flask import Flask, jsonify, request
from data.clothes import Clothes
app = Flask(__name__)

clothes_list = []

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/addClothes', methods=['POST'])
def add_clothes():
    data = request.get_json()
    name = data['name']
    image = data['image']
    is_cold = data['isCold']
    is_warm = data['isWarm']
    type = data['type']
    new_clothes = Clothes(name, image, is_cold, is_warm, type)
    clothes_list.append(new_clothes)
    return jsonify({'message': 'Clothes added successfully!'})

if __name__ == '__main__':
    app.run(port=3000)