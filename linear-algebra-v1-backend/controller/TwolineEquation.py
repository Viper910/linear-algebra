from flask_restful import Resource
from flask import request, url_for
from logic import lineequationsolver as eqnsolver


class TwolineEquation(Resource):

    def get(self):
        graph = "http://127.0.0.1:5000" + \
            url_for('static', filename='output.jpeg')
        return {"graph": graph}

    def post(self):
        data = request.json
        for obj in data:
            obj['a'] = float(obj['a'])
            obj['b'] = float(obj['b'])
            obj['c'] = float(obj['c'])
        typeofsoln = eqnsolver.checkSolutiontype(data)
        
        if (typeofsoln['type'] == 'unique solution'):
            [x, y] = eqnsolver.solveEquation(data)
            equation1 = eqnsolver.generateEquation(data[0])
            equation2 = eqnsolver.generateEquation(data[1])
            eqnsolver.generateGraph(data)
            graph = "http://127.0.0.1:5000" + url_for('static', filename='output.jpeg')
            responsedata = {
                "equation1": equation1,
                "equation2": equation2,
                "typeofsoln": typeofsoln,
                "solution": {
                    "x": round(x, 3),
                    'y': round(y, 3),
                },
                "graph": graph
            }
            return responsedata
        
        else:
            equation1 = eqnsolver.generateEquation(data[0])
            equation2 = eqnsolver.generateEquation(data[1])
            eqnsolver.generateGraph(data)
            graph = "http://127.0.0.1:5000" + url_for('static', filename='output.jpeg')
            responsedata = {
                "equation1": equation1,
                "equation2": equation2,
                "typeofsoln": typeofsoln,
                "solution": {
                    "x": typeofsoln['type'],
                    'y': typeofsoln['type'],
                },
                "graph": graph
            }
            return responsedata