from pymongo import MongoClient, errors
from dotenv import load_dotenv
import os

load_dotenv()
host = os.environ.get('mongo_host')
port = os.environ.get('mongo_port')


# utility class for mongodb
class DbOps:
  def __init__(self, host, port):
    self.mongo_host = host
    self.mongo_port = port

  # connect to mongo with PyMongo client (creates and uses database 'test')
  def open_connection(self):
    try:
      client = MongoClient(f'mongodb://{self.mongo_host}:{self.mongo_port}')
    except errors.ServerSelectionTimeoutError as error:
      print("error connecting to db:", error)
      client = None
      return client
    return client

  # add a table/collection to the database
  # note: mongo does not add a table until an entry is added
  def add_table(self, table_name):
    db = self.open_connection()
    if db is not None:
      test = db['test']
      users = test[table_name]
    else:
      print("error connecting to db")
    return users

  # add an entry to a table
  def insert_into_table(self, table, data):
    db = self.open_connection()
    if db is not None:
      response = table.insert_one(data)
      print(db.table.list_collection_names())
    else: 
      print("error connecting to db")
    return response

  # show contents of table
  def display_contents(self, table):
    db = self.open_connection()
    if db is not None:
      for entry in table.find():
        print(entry)
    else:
      print("error connecting to db")
    return 0




# testing 
if __name__ == '__main__':
  db = DbOps(host, port)
  users = db.add_table('users')
  db.insert_into_table(users, {'key': 'data'})
  db.display_contents(users)
  
