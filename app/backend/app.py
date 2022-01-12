import time
from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

user = [
  {"username": "ab12345"}
]

@app.route('/')
@app.route('/api/docs')
def get_docs():
  print('serving docs')
  return render_template('swaggerui.html')

@app.route('/api/users', methods=['GET'])
def get_users():
  return jsonify(user)

@app.route('/api/users', methods=['POST'])
def create_user():
  user.append(request.get_json())
  return '', 204


if __name__ == '__main__':
  app.run(host='0.0.0.0', use_reloader=True, debug=False)
