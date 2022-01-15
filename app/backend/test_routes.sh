#!/bin/bash

echo "POST user"
# POST user
curl -X POST -H \
  "Content-Type: application/json" -d \
  '{"username": "bh123", "email": "guess@who.com", "cmpRequests": [], "status": "inactive"}' \
  http://localhost:5000/api/users
echo "-----------------------------------------"
echo "GET all users"
curl -X GET http://localhost:5000/api/users
echo "-----------------------------------------"
echo "GET user by username "
curl -X GET http://localhost:5000/api/users/bh123
echo "-----------------------------------------"
echo "PUT user by username "
curl -X PUT \
  -d username=hb789 \
  -d cmp=1 \
  -d cmpStatus=pending \
  http://localhost:5000/api/users/bh123