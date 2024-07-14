from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Initial data for dishes
dishes = [
    {"dishName": "Jeera Rice", "dishId": "1", "imageUrl": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/jeera-rice.jpg", "isPublished": True},
    {"dishName": "Paneer Tikka", "dishId": "2", "imageUrl": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/paneer-tikka.jpg", "isPublished": True},
    {"dishName": "Rabdi", "dishId": "3", "imageUrl": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/rabdi.jpg", "isPublished": True},
    {"dishName": "Chicken Biryani", "dishId": "4", "imageUrl": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/chicken-biryani.jpg", "isPublished": True},
    {"dishName": "Alfredo Pasta", "dishId": "5", "imageUrl": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/alfredo-pasta.jpg", "isPublished": True}
]

@app.route('/')
def home():
    return "Welcome to the Dish App!"

@app.route('/api/dishes', methods=['GET'])
def get_dishes():
    return jsonify(dishes)

@app.route('/api/dishes/<int:dish_id>/toggle', methods=['POST'])
def toggle_dish(dish_id):
    for dish in dishes:
        if dish["dishId"] == str(dish_id):
            dish["isPublished"] = not dish["isPublished"]
            return jsonify(dish)
    return jsonify({"error": "Dish not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)


