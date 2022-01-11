from flask import Flask, request, jsonify, render_template

app = Flask(__name__)


@app.route('/')
def get_root():
  print('serving root')
  return render_template('index.html')

@app.route('/api/docs')
def get_docs():
    print('serving docs')
    return render_template('swaggerui.html')

app.run(use_reloader=True, debug=False)
