#!/bin/bash

# User endpoint testing
echo "-----------------------------------------"
echo "POST user"
curl -X POST -H \
  "Content-Type: application/json" -d \
  '{"username": "test", "cmpRequests": [], "status": "inactive"}' \
  http://localhost:5000/api/users
echo "-----------------------------------------"
echo "GET all users"
curl -X GET http://localhost:5000/api/users
echo "-----------------------------------------"
echo "GET user by username "
curl -X GET http://localhost:5000/api/users/test
echo "-----------------------------------------"
echo "PUT user by username "
curl -X PUT \
  -d username=anotherTest \
  -d cmp=1 \
  -d cmpStatus=pending \
  http://localhost:5000/api/users/test

# Blueprint endpoint testing  
echo "-----------------------------------------"
echo "POST blueprint"
curl -X POST \
  -H "Content-Type: application/json" \
  -H "X-Forwarded-User: 123456" \
  -d '{"name": "app1", "cluster": "elab-0", "user": "test"}' \
  http://localhost:5000/api/blueprints

# Blueprint template endpoint testing
echo "-----------------------------------------"
echo "POST blueprint template"
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"author": "test"}' \
  http://localhost:5000/api/blueprint-templates
echo "-----------------------------------------"
echo "GET all blueprint templates"
curl -X GET http://localhost:5000/api/blueprint-templates
#echo "-----------------------------------------"
#echo "PUT blueprint template by template ID"
#curl -X PUT -d user=test http://localhost:5000/api/blueprint-templates/<template_id>