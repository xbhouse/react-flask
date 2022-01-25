# import modules
from flask import Flask, request, jsonify, render_template, make_response
from flask_cors import CORS
import datetime
from uuid import uuid4

app = Flask(__name__)
CORS(app)

# User schema:
# {"<username>": {"username": "<username>", "email": "<email>", "cmpRequests": [], "status": [ "active" || "inactive" ]}}

USERS = {}

# Blueprint schema:
# {"<blueprint_id>": {"blueprint_id": "<blueprint_id>", "template_id": "<template_id>", "name": "<name>", "cluster:" "<cluster>", "user": "<user>", "createDate": "<timestamp>",
#           "exempt": "<true|false>", "region": "<region>", "status": "<status>"}}

BLUEPRINTS = {}

# Blueprint template schema:
# {"<template_id>": {"template_id": "<template_id>", "author": "<author>", "num_likes": "<num_likes>", "liked_by_users": []}}

BLUEPRINT_TEMPLATES = {}


# Swagger UI endpoint
@app.route('/swagger')
def get_docs():
  try:
    response = render_template('swaggerui.html')
    status = 200
  except:
    status = 404
    return jsonify("couldn't display swagger ui"), status
  return response, status


# User endpoints  -- mocked for now

# List all users
@app.route('/api/users', methods=['GET'])
def list_users():
  response = []
  for _, value in USERS.items():
    response.append(value)
  return jsonify(response), 200


# Create a user
@app.route('/api/users', methods=['POST'])
def create_user(): 
  req = request.get_json()
  username = req.get('username', None)
  if not username:
    status = 400
    response = {'message': 'bad request, no username attribute in json payload'}
  elif USERS.get(username):
    status = 200
    response = {'message': 'user exists, setting status to active'}
    USERS[username]['status'] = 'active'
  else: 
    status = 201
    response = None
    USERS[username] = {'username': username,
                       'email': username + '@domain.com',
                       'cmpRequests': [],
                       'status': 'active' }
  return make_response(jsonify(response), status)


# Get a user by username
@app.route('/api/users/<username>', methods=['GET'])
def get_user(username):
  if USERS.get(username, None):
    status = 200
    response = USERS[username]
  else:
    status = 404
    response = {'message': f'{username} does not exist'}
  return make_response(jsonify(response), status)


# Update a user by username
@app.route('/api/users/<username>', methods=['PUT'])
def update_user(username):
  args = request.values
  newUsername = str(args['username']) 
  cmp = str(args['cmp'])
  cmpStatus = str(args['cmpStatus'])
  
  if USERS.get(username, None):
    del USERS[username]
    USERS[newUsername] = {'username': newUsername,
                          'email': newUsername + '@citi.com',
                          'cmpRequests': [cmp, cmpStatus],
                          'status': 'active' }
    status = 200
    response = {'message': f'{username} updated'}
  else:
    status = 404
    response = {'message': f'{username} does not exist'}
  return make_response(jsonify(response), status)


# Delete a user by username
@app.route('/api/users/<username>', methods=['DELETE'])
def delete_user(username):
  if USERS.get(username, None):
    USERS[username]['status'] = 'inactive'
    status = 204
    response = None
  else:
    status = 404
    response = {'message': f'{username} does not exist'}
  return make_response(jsonify(response), status)


# Blueprint endpoints -- mocked for now

# List all blueprints
@app.route('/api/blueprints', methods=['GET'])
def list_blueprints():
  response = []
  for _, value in BLUEPRINTS.items():
    response.append(value)
  return jsonify(response), 200


# Create a blueprint
@app.route('/api/blueprints', methods=['POST'])
def create_blueprint():
  username = request.headers.get('X-Forwarded-User')
  req = request.get_json()
  if req:
    if not username or not req.get('name', None) or not req.get('cluster', None):
      status = 400
      response = {'message': 'bad request, missing blueprint name/cluster/user'}
    else:
      blueprint_name = req.get('name')
      if search_blueprints(blueprint_name, username):
        status = 409
        response = {'message': 'blueprint already active'}
      else:
        status = 201
        response = None
        blueprint_id = f'{uuid4()}'
        BLUEPRINTS[blueprint_id] = {'id': blueprint_id,
                                    'name': blueprint_name,
                                    'cluster': req.get('cluster'),
                                    'user': username,
                                    'createDate': datetime.datetime.now().strftime("%Y/%m/%d %H:%M:%S"),
                                    'exempt': req.get('exempt', False),
                                    'region': req.get('region', 'NAM'),
                                    'status': 'pending'}
  else:
    status = 400
    response = {'message': 'bad request, no json payload'}
  return make_response(jsonify(response), status)


# Get a blueprint by ID
@app.route('/api/blueprints/<blueprint_id>', methods=['GET'])
def get_blueprint(blueprint_id):
  if BLUEPRINTS.get(blueprint_id, None):
    status = 200
    response = BLUEPRINTS[blueprint_id]
  else:
    status = 404
    response = {'message': f'blueprint {blueprint_id} does not exist'}
  return make_response(jsonify(response), status)


# Update a blueprint by ID
@app.route('/api/blueprints/<blueprint_id>', methods=['PUT'])
def update_blueprint(blueprint_id):
  return 1


# Delete a blueprint by ID
@app.route('/api/blueprints/<blueprint_id>', methods=['DELETE'])
def delete_blueprint(blueprint_id):
  if BLUEPRINTS.get(blueprint_id, None):
    BLUEPRINTS[blueprint_id]['status'] = 'inactive'
    status = 204
    response = None
  else:
    status = 404
    response = {'message': f'blueprint {blueprint_id} does not exist'}
  return make_response(jsonify(response), status)


# Create a blueprint template
@app.route('/api/blueprint-templates', methods=['POST'])
def create_template(): 
  template_id = f'{uuid4()}'
  #author = request.headers.get('X-Forwarded-User') commenting out to test locally pre-OCP
  req = request.get_json()
  author = req.get('author', None)
  if not author:
    status = 400
    response = {'message': 'bad request, missing author'}
  else: 
    status = 201
    response = None
    BLUEPRINT_TEMPLATES[template_id] = {'template_id': template_id,
                                        'author': author,
                                        'num_likes': 0,
                                        'liked_by_users': []}
  return make_response(jsonify(response), status)


  # Get a blueprint template by ID
  @app.route('/api/blueprint-templates/<template_id>', methods=['GET'])
  def get_template(template_id):
    if BLUEPRINT_TEMPLATES.get(template_id, None):
      status = 200
      response = BLUEPRINT_TEMPLATES[template_id]
    else:
      status = 404
      response = {'message': f'blueprint template {template_id} does not exist'}
    return make_response(jsonify(response), status)


# List all blueprint templates
@app.route('/api/blueprint-templates', methods=['GET'])
def list_templates():
  response = []
  for _, value in BLUEPRINT_TEMPLATES.items():
    response.append(value)
  return jsonify(response), 200


# Add a like to a blueprint template by ID
@app.route('/api/blueprint-templates/<template_id>', methods=['PUT'])
def like_template(template_id):
  #author = request.headers.get('X-Forwarded-User') commenting out to test locally pre-OCP
  args = request.values
  user = str(args['user'])
  if BLUEPRINT_TEMPLATES.get(template_id, None):
    if author not in BLUEPRINT_TEMPLATES[template_id]['liked_by_users']:
      BLUEPRINT_TEMPLATES[template_id]['num_likes'] += 1
      BLUEPRINT_TEMPLATES[template_id]['liked_by_users'].append(user)
      status = 200
      response = {'message': f'blueprint template {template_id} liked by user {user}'}
    else:
      status = 404
      response = {'message': f'user {user} already liked template {template_id}'}
  else:
    status = 404
    response = {'message': f'blueprint template {template_id} does not exist'}
  return make_response(jsonify(response), status)


# Helpers

# Find a blueprint
def search_blueprints(name, user):
  found = False
  for _, value in BLUEPRINTS.items():
    if value['name'] == name and value['user'] == user and value['status'] in ['active', 'pending']:
      found = True
      break
  return found


if __name__ == '__main__':
  app.run(host='0.0.0.0', use_reloader=True, debug=False)
