const seleccionandoNumeros = (array) => {
    let [s, e, max] = [0, 1, 0]; // los pointers s = start, e = end, y el valor maximo = 0
    array.sort(); // ordenamos el arreglo

    while (e < array.length) { // abrimos el loop
        const absVal = Math.abs(array[e] - array[s]); // calculamos el valor absoluto

        if (absVal <= 1) { // si el valor absoluto es valido, incrementamos el pointer final (end)
            e += 1;
        } else { // si no es valido...
            if (s === e - 1) { // si los 2 pointers estan contiguos, incrementamos ambos
                s += 1;
                e += 1;
            } else { // si no estan contiguos, incrementamos s hasta uno antes que e
                s = e - 1;
            }

        }

        if (e - s > max) { // comparamos y actualizamos el valor maximo
            max = e - s;
        }
    }

    return max;
}
console.log('deberia ser 3: ' + seleccionandoNumeros([4, 6, 5, 3, 3, 1]))
console.log('deberia ser 5: ' + seleccionandoNumeros([1,1,2,2,4,4,5,5,5]))
console.log('deberia ser 4: ' + seleccionandoNumeros([1,1,2,2]))
console.log('deberia ser 5: ' + seleccionandoNumeros([1, 2, 2, 3, 1, 2]))
console.log('deberia ser 2: ' + seleccionandoNumeros([2, 2]))