"""
Imprimir números del 1 a N
Si el núero es divisible entre 3 imprime Fizz
Si el npumero es divisible entre 5 imprime Buzz
Si el número es divisle entre 3 y 5 imprime FizzBuzz
"""

def fizzBuzz(number):
    for i in range(1, number+1):
        if i%3==0 and i%5 ==0:
            print("FizzBuzz")
        elif i %3==0:
            print(f"Fizz")
        elif i%5==0:
            print(f"Buzz")
        else: 
            print(i)


#forma más eficiente

def fizzBuzz2(number):
    for i in range(1, number+1):
        fizz = 'Fizz' if i % 3 == 0 else ''
        buzz = 'Buzz' if i % 5 == 0 else ''
        print(f'{fizz}{buzz}' or i) #interpolar



fizzBuzz2(30)