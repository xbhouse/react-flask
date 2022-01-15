from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()
host = os.environ.get("mongo_host")
port = os.environ.get("mongo_port")

client = MongoClient(f'mongodb://{host}:{port}')
db = client.test
users = db["users"]
response = users.insert_one({"username":"123"})
print(db.list_collection_names())