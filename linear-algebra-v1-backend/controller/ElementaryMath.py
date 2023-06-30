from flask_restful import Resource
from flask import request
from logic import elementarymath as em


class ElementaryMath(Resource):
    def post(self):
        expression = request.json['expression']
        print(expression)
        output = em.solve(expression)
        numbername = em.numberName(output)
        responsedata = {
            "input": expression,
            "output": output,
            "numbername": numbername
        }
        return responsedata