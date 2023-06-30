import numpy.linalg as linealg
import matplotlib
import matplotlib.pyplot as plt
import sympy

######## --------*****---Two Line Equation ---****--------#######

matplotlib.use('Agg')

data = [
    {"a": 1, "b": 1, "c": 2},
    {"a": 1, "b": -1, "c": 2}
]


def extractdata(dataset):
    A = []
    B = []
    for data in dataset:
        a = []
        b = []
        coeff = list(data.values())
        for i in range(0, len(coeff)):
            if i == len(coeff) - 1:
                b.append(coeff[i])
            else:
                a.append(coeff[i])
        A.append(a)
        B.append(b)
    newB = []
    for b in B:
        newB.append(b[0])
    B = newB
    return A, B


def solveEquation(dataset):
    A, B = extractdata(dataset)
    try:
        solution = linealg.solve(A, B)
        res = []
        for i in solution:
            res.append(i)
        return res
    except linealg.LinAlgError:
        return ['No Soln', 'No Soln']


def checkSolutiontype(dataset):
    A, B = extractdata(dataset)
    a1 = A[0][0]
    a2 = A[1][0]
    b1 = A[0][1]
    b2 = A[1][1]
    c1 = B[0]
    c2 = B[1]
    if (a1/a2 != b1/b2):
        return {"type": "unique solution",
                "reason": "As a1/a2 ≠ b1/b2 so unique solution"}
    elif (a1/a2 == b1/b2 == c1/c2):
        return {"type": "infinite solution",
                "reason": "As a1/a2 = b1/b2 = c1/c2 so infinte solution"}
    else:
        return {"type": "no solution",
                "reason": "As a1/a2 = b1/b2 ≠ c1/c2 so no solution"}


def getDatasetforEquation(dataset):
    A, B = extractdata(dataset)
    A[0].append(B[0])
    A[1].append(B[1])
    typeofsoln = checkSolutiontype(dataset)
    if (typeofsoln['type'] == 'unique solution'):
        soln = list(solveEquation(dataset))
        resulteddataset = []
        for a in A:
            equation = {"x": [], "y": []}
            for x in range(int(soln[0])-20, int(soln[0])+21):
                try:
                    equation["y"].append(y(a[0], a[1], a[2], x))
                    equation["x"].append(x)
                except ZeroDivisionError:
                    continue
            resulteddataset.append(equation)
        return resulteddataset, soln
    else:
        resulteddataset = []
        for a in A:
            equation = {"x": [], "y": []}
            for x in range(-20, 21):
                try:
                    equation["y"].append(y(a[0], a[1], a[2], x))
                    equation["x"].append(x)
                except ZeroDivisionError:
                    continue
            resulteddataset.append(equation)
        return resulteddataset, None


def y(a, b, c, x):
    return (c - a*x)/b


def generateGraph(dataset):
    cordinates, soln = getDatasetforEquation(dataset)
    _, ax = plt.subplots()
    plt.plot(cordinates[0]["x"], cordinates[0]["y"],
             label=generateEquation(dataset[0]))
    plt.plot(cordinates[1]["x"], cordinates[1]["y"],
             label=generateEquation(dataset[1]))
    typeofsoln = checkSolutiontype(dataset)
    if (typeofsoln['type'] == 'unique solution'):
        plt.annotate(
            f"({round(soln[0],3)},{round(soln[1],3)})", xy=(soln[0], soln[1]))
    ax.spines['bottom'].set_position('zero')
    ax.spines['left'].set_position('zero')
    ax.spines['right'].set_color('none')
    ax.spines['top'].set_color('none')
    plt.legend()
    plt.savefig('static/' + 'output.jpeg')


def generateEquation(data):
    a = data['a']
    b = data['b']
    c = data['c']
    res = ''
    if b < 0:
        res = f'{a}x - {-1*b}y = {c}'
    else:
        res = f'{a}x + {b}y = {c}'
    return res

####################### ----------------------------------------------------------######################


######## -----------Multiple line equation--------#######

def solve(data):
    data = {
        "equation1": "x+y+z=1",
        "equation2": "x-y-z=1",
        "equation3": "x+y-z=1",
    }
    equations = []
    symbols = set()
    for i in data:
        equation_data = data[i].split("=")
        expression = sympy.parse_expr(equation_data[0])
        equation = sympy.Eq(expression, float(equation_data[1]))
        equations.append(equation)
        for i in equation.free_symbols:
            symbols.add(i)
            
    return list(sympy.linsolve(equations,tuple(symbols)))[0]

