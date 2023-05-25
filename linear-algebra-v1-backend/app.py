from flask import Flask, send_from_directory
from flask_restful import Api, Resource
from controller import TwolineEquation
from flask_cors import CORS

app = Flask(__name__,static_url_path='/static')
CORS(app)
api = Api(app)


api.add_resource(TwolineEquation.TwolineEquation, "/twolineeqution")

if __name__ == "__main__":
    app.run(debug=True)
