# 🐍 Guía de Python desde cero — CODE LAB

> **Objetivo:** aprender los fundamentos de Python paso a paso y terminar creando un pequeño proyecto propio.  
> **Nivel:** principiante absoluto.

---

## 1. ¿Qué es Python?

Python es un lenguaje de programación conocido por tener una sintaxis legible. Se utiliza para automatizar tareas, trabajar con datos, crear herramientas, desarrollar aplicaciones y programar bots, incluidos bots de Discord mediante bibliotecas como `discord.py`.

### ¿Qué necesitás para empezar?

Podés practicar en un editor en línea o instalar Python en una computadora. En la página oficial encontrás descargas y documentación:

- [Sitio oficial de Python](https://www.python.org/)
- [Guía oficial para principiantes](https://www.python.org/about/gettingstarted/)

En Android también existen entornos de aprendizaje, aunque la configuración depende de la aplicación que uses.

## 2. Tu primer programa

Escribí este código:

```python
print("¡Hola, mundo!")
```

`print()` muestra información en la consola. El texto se escribe entre comillas.

Probá cambiar el mensaje:

```python
print("Estoy aprendiendo Python en CODE LAB")
```

## 3. Variables y tipos de datos

Una variable permite guardar un valor para usarlo más adelante.

```python
nombre = "Alex"       # str: texto
edad = 16             # int: número entero
altura = 1.70         # float: número decimal
esta_aprendiendo = True  # bool: verdadero o falso

print(nombre)
print(edad)
print(esta_aprendiendo)
```

Tipos comunes:

- `str`: texto, por ejemplo `"Hola"`.
- `int`: números enteros, por ejemplo `25`.
- `float`: números con decimales, por ejemplo `3.14`.
- `bool`: `True` o `False`.

Los nombres de las variables distinguen mayúsculas de minúsculas. Por convención, usá nombres descriptivos y `snake_case`, como `nombre_usuario`.

## 4. Recibir información

`input()` permite pedirle datos a la persona que ejecuta el programa. Lo que devuelve es texto; si necesitás un número, convertí el valor.

```python
nombre = input("¿Cómo te llamás? ")
print("¡Bienvenido/a,", nombre, "!")
```

Ejemplo con números:

```python
edad_texto = input("¿Cuántos años tenés? ")
edad = int(edad_texto)
print("El año que viene tendrás", edad + 1)
```

Si la persona escribe algo que no se puede convertir a entero, `int()` produce un error. Más adelante podés aprender a manejarlo con `try` y `except`.

## 5. Operadores básicos

```python
a = 10
b = 3

print(a + b)   # suma: 13
print(a - b)   # resta: 7
print(a * b)   # multiplicación: 30
print(a / b)   # división: 3.333...
print(a // b)  # división entera: 3
print(a % b)   # resto: 1
print(a ** b)  # potencia: 1000
```

Para comparar valores, usá `==`, `!=`, `<`, `>`, `<=` y `>=`. No confundas `=` (asignación) con `==` (comparación).

## 6. Condiciones: `if`, `elif` y `else`

Las condiciones permiten tomar decisiones.

```python
puntos = 75

if puntos >= 90:
    print("Nivel avanzado")
elif puntos >= 60:
    print("Nivel intermedio")
else:
    print("Seguí practicando")
```

**Importante:** Python usa la indentación (espacios al comienzo de las líneas) para definir los bloques. Mantené la indentación consistente, normalmente cuatro espacios.

## 7. Bucles: repetir acciones

### `for`

Se usa para recorrer elementos o repetir algo cierta cantidad de veces.

```python
for numero in range(1, 6):
    print("Número:", numero)
```

Este ejemplo imprime los números del 1 al 5. El límite final de `range()` no se incluye.

### `while`

Repite mientras una condición sea verdadera.

```python
contador = 1

while contador <= 3:
    print("Intento", contador)
    contador += 1
```

Asegurate de que la condición pueda volverse falsa para evitar un bucle infinito.

## 8. Listas y diccionarios

### Listas

Una lista guarda varios elementos en orden.

```python
lenguajes = ["Python", "JavaScript", "HTML"]
print(lenguajes[0])  # Python: los índices empiezan en 0

lenguajes.append("Java")
print(lenguajes)
```

### Diccionarios

Un diccionario guarda datos en pares de clave y valor.

```python
usuario = {
    "nombre": "Alex",
    "nivel": 1
}

print(usuario["nombre"])
print(usuario["nivel"])
```

## 9. Funciones

Las funciones agrupan instrucciones para poder reutilizarlas.

```python
def saludar(nombre):
    return f"¡Hola, {nombre}!"

mensaje = saludar("CODE LAB")
print(mensaje)
```

- `def` declara la función.
- `nombre` es un parámetro.
- `return` devuelve un resultado.
- La `f` permite insertar valores dentro del texto usando `{}`.

## 10. Manejo básico de errores

Podés manejar algunos errores previsibles con `try` y `except`.

```python
try:
    numero = int(input("Escribí un número entero: "))
    print("El doble es", numero * 2)
except ValueError:
    print("Eso no era un número entero válido.")
```

No uses `except:` sin especificar el error salvo que tengas una razón concreta; capturar errores demasiado ampliamente puede ocultar problemas.

## 11. Módulos y bibliotecas

Un módulo permite reutilizar código. Python incluye módulos estándar y también permite instalar paquetes de terceros.

```python
import random

numero = random.randint(1, 10)
print("Número aleatorio:", numero)
```

Para instalar paquetes con `pip`, seguí las instrucciones oficiales de Python para tu sistema. Por ejemplo, en un entorno donde `python` y `pip` estén configurados:

```bash
python -m pip install nombre-del-paquete
```

No copies comandos de instalación sin comprobar qué paquete estás instalando y de dónde viene.

## 12. Proyecto de práctica: adiviná el número

Este programa combina variables, entrada, condiciones y un módulo estándar. Guardalo como `adivina.py` y ejecutalo con Python.

```python
import random

secreto = random.randint(1, 10)
intento = input("Adiviná el número del 1 al 10: ")

try:
    intento = int(intento)

    if intento == secreto:
        print("¡Correcto! Lo adivinaste.")
    else:
        print(f"No era ese. El número era {secreto}.")
except ValueError:
    print("Ingresá un número entero válido.")
```

### Mejoras para intentar por tu cuenta

1. Permití tres intentos.
2. Indicá si el número secreto es mayor o menor.
3. Al final, preguntá si quiere jugar otra vez.
4. Separá la lógica en una función.

Intentá resolver las mejoras antes de mirar soluciones ajenas.

## 13. Python para bots de Discord

Cuando domines variables, condiciones, bucles, funciones, listas y módulos, podés comenzar con bots.

Ruta sugerida:

1. Aprendé a instalar una biblioteca y leer su documentación.
2. Creá una aplicación en el [Portal de desarrolladores de Discord](https://discord.com/developers/applications).
3. Estudiá los comandos de aplicación y los comandos slash.
4. Empezá con un comando simple, por ejemplo `/hola`.
5. Probá en un servidor privado antes de añadir moderación o automatizaciones.

Documentación: [discord.py](https://discordpy.readthedocs.io/en/stable/).

### Seguridad del bot

- No publiques el token en GitHub, capturas o chats.
- Guardá el token en una variable de entorno.
- Si se filtra, restablecelo desde el portal de Discord.
- Concedé solo los permisos que realmente necesita el bot.
- No ejecutes código de desconocidos sin revisarlo.

## 14. Ejercicios para comprobar lo aprendido

1. Mostrá tu nombre con `print()`.
2. Guardá dos números en variables e imprimí su suma.
3. Pedí un nombre con `input()` y saludá a esa persona.
4. Pedí un número e indicá si es positivo, negativo o cero.
5. Imprimí los números del 1 al 10 con un bucle.
6. Creá una lista con tres lenguajes y recorré sus elementos.
7. Escribí una función que reciba dos números y devuelva el mayor.
8. Modificá el juego de adivinar el número para permitir varios intentos.

## 15. Consejos para estudiar

- Practicá de forma constante, aunque sean sesiones cortas.
- Escribí los ejemplos en lugar de limitarte a copiarlos.
- Cambiá valores y observá cómo se comporta el programa.
- Cuando haya un error, leé el mensaje y revisá la línea indicada.
- Terminá proyectos pequeños antes de empezar uno enorme.
- Usá documentación confiable y guardá tus avances con Git.
- Pedí ayuda compartiendo el error y el fragmento relevante, pero nunca contraseñas ni tokens.

### Ruta recomendada

**Fundamentos → condiciones y bucles → listas y funciones → proyectos pequeños → bibliotecas → bots de Discord.**

No hace falta aprender todo de memoria: lo importante es entender los conceptos, practicar y saber consultar la documentación.

---

**CODE LAB //** `Aprendé. Practicá. Construí.`
