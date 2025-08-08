# 📌 Ejercicio 1: Flattening (Aplanar arrays)

## Enunciado

Escribe una función que tome un array de arrays y devuelva un nuevo array con todos los elementos en un solo nivel.  
**Requisito:** Usa el método `reduce` y `concat`.

### Método `reduce()`

El método `reduce()` ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

### Método `concat()`

El método `concat()` se usa para unir dos o más arrays. Este método no modifica los arrays existentes, sino que devuelve un nuevo array.

# 📌 Ejercicio 2: Your Own Loop (Tu propio bucle)

## Enunciado

Implementa un bucle `loop` que tome:

- Un valor inicial
- Una función de prueba (`test`)
- Una función de actualización (`update`)
- Una función de cuerpo (`body`)

El bucle debe:

- Verificar si test(valor_actual) es verdadero.
- Si es verdadero, ejecutar body(valor_actual) y luego actualizar el valor con update(valor_actual).
- Repetir el proceso hasta que test(valor_actual) sea falso.

### Método `loop()`

El método `concat()` se usa para unir dos o más arrays. Este método no modifica los arrays existentes, sino que devuelve un nuevo array.

# 📌 Ejercicio 3: Everything (Todo)

## Enunciado

Implementa una función `every` que:

- Tome un array y una función de prueba (`test`)
- Devuelva `true` si todos los elementos del array pasan la prueba
- Usa el método `some` para implementarla

# 📌 Ejercicio 4: Dominant Writing Direction (Dirección de escritura dominante)

## Enunciado

Escribe una función que determine la dirección de escritura dominante (`ltr`, `rtl`, o `ttb`) en un texto, usando los datos de `SCRIPTS`.

**Requisitos:**

- Usa las funciones `countBy` y `characterScript`
- Debe analizar los caracteres del texto y determinar qué dirección de escritura predomina

Este ejercicio funciona como un detector que analiza cada carácter de un texto, determina a qué sistema de escritura pertenece y cuenta cuál dirección de escritura es la más usada.

---

### 1️⃣ Datos base: `SCRIPTS`

- Es un array de objetos que describe distintos sistemas de escritura.
- Cada uno tiene:
  - `name`: nombre del script (Latin, Arabic, Mongolian…)
  - `ranges`: rangos numéricos de Unicode que corresponden a sus caracteres.
  - `direction`: dirección de escritura (`ltr` = izquierda a derecha, `rtl` = derecha a izquierda, `ttb` = arriba a abajo).

Ejemplo: el **Latin** está en los rangos `[65, 91]` y `[97, 123]`, que son las letras A-Z y a-z en Unicode.

---

### 2️⃣ Función `characterScript(code)`

- Recibe un número de código Unicode (`code`).
- Busca en `SCRIPTS` si ese código está dentro de alguno de los rangos.
- Devuelve el objeto del script correspondiente o `undefined` si no existe.

---

### 3️⃣ Función `countBy(items, groupFn)`

- Cuenta cuántos elementos pertenecen a cada categoría.
- **Parámetros:**
  - `items`: Lista de elementos a analizar (por ejemplo, caracteres del texto).
  - `groupFn`: Función que indica la categoría a la que pertenece cada elemento.
- Devuelve un array de objetos `{ name, count }` donde:
  - `name` es el nombre de la categoría.
  - `count` es el número de veces que aparece.

---

### 4️⃣ Función `dominantDirection(text)`

Determina cuál es la **dirección de escritura predominante** en un texto.

**Proceso:**

- Divide el texto en un array de caracteres con `[...text]`.
- Analiza\*cada carácter para:
- Obtener su sistema de escritura con `characterScript`.
- Determinar la dirección (`ltr`, `rtl`, `ttb`) usando `script?.direction`.
- Agrupa y cuenta las direcciones encontradas usando `countBy`.
- Ignora caracteres que no tengan dirección definida.
- Compara los conteos y devuelve la dirección con mayor frecuencia.
- Si no se detecta ninguna dirección válida, devuelve `"ltr"` como valor por defecto.
