import num2words
def solve(inputexp):
    try:
        res = eval(inputexp)
        return res
    except:
        return "Not a valid expression"

def numberName(number):
    try:
        return num2words.num2words(number)
    except:
        return "Not a valid number"