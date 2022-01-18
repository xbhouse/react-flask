#!/bin/bash

python3 -m pip install -r requirements.txt
export FLASK_APP=routes.py
flask run -h 0.0.0.0