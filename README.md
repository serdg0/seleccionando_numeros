# Solución
Para resolver el problema primero ordenamos el arreglo, luego definimos 2 pointers, e iteramos sobre el arreglo.
Calculamos el valor absoluto y si es válido, es decir, menor o igual a 1,
movemos el pointer final, y asi hasta que la condición no se cumpla.
Cuando la condición no se cumple, determinamos si los pointers estan contiguos o no.
Si estan contiguos, aumentamos ambos, si no, aumentamos unicamente el menor (start)
hasta antes del  mayor (end) y volvemos a evaluar. Al final de evalua si hay un valor
maximo alcanzado.

Sergio Diaz Gonzalez
Full-Stack Web Developer