import matplotlib.pyplot as plt

data = [
    {"x": 1.5, "y": -0.5},
    {"x": 0, "y": 1},
    {"x": -1, "y": 2},
    {"x": -2, "y": 3},
    {"x": -3, "y": 4},
]

datasetequation2 = [
    {"x": 1.5, "y": -0.5},
    {"x": 3, "y": 1},
    {"x": 4, "y": 2},
    {"x": 5, "y": 4},
]

fig, ax = plt.subplots()
plt.plot([x["x"] for x in data], [x["y"] for x in data])

plt.plot([x["x"] for x in datasetequation2], [x["y"]
         for x in datasetequation2])


ax.spines['bottom'].set_position('zero')
ax.spines['left'].set_position('zero')
ax.spines['right'].set_color('none')
ax.spines['top'].set_color('none')
plt.show()
