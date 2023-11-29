# KeepCoding Web Bootcamp XV - TDD Con Javascript.
Proyecto del módulo de Frontend PRO del Bootcamp de Web de KeepCoding.

## Requisitos
Para el seguimiento del curso vamos a utilizar las herramientas que ya conocemos:
- Visual Studio Code
- NodeJS
- NPM
- Git

## Proyecto
El proyecto consiste en la creación de diferentes tests sobre una aplicación básica en NodeJS.

# NOTAS

* intalamos dependencias  `npm --init yes`

https://jestjs.io/docs/getting-started

* intalamos jest :`npm install --save-dev jest-extended` con esto `--save-dev` le decimos que no lo queremos en producción.
* Creamos `demos/sum.js`
* Creamos `demos/sum.test.js`
* Cambiamos scripts   `"scripts": { "test": "jest",`

```sh
➜  tdd-javascript git:(main) ✗ npm test                            

> tdd-javascript@1.0.0 test
> jest

 PASS  demos/sum.test.js
  ● Console

    console.log
      TEST FINAL

      at Object.log (demos/sum.test.js:10:17)

    console.log
      TEST INIT

      at Object.log (demos/sum.test.js:6:17)

 PASS  demos/multiplica.test.js
 PASS  demos/avg.test.js
 PASS  demos/sumAge.test.js

Test Suites: 1 passed, 1 total
Tests:       1 skipped, 1 todo,
Snapshots:   0 total
Time:        1.77 s
Ran all test suites.
➜  tdd-javascript git:(main) ✗ 
```

Ejecutará todos los archivos `.test.js`

* instalo `npm install -D @types/jest` y nos istala los tipos en json `"@types/jest": "^29.5.10",`  
Este paquete proporciona definiciones de tipos TypeScript para Jest, que es un marco de pruebas unitarias muy popular utilizado en aplicaciones JavaScript y TypeScript.


**1 Suit de Test global con varios test en la misma función**

```js
// ESTRUCTURRA BÁSICA DE UNA ZONA DE TESTEO 
const sum = require('./sum');

// una suit de test
describe("Fumción suma", () => {

    // test
    it("suma 1 y 1 es 2", () => {
        expect(sum(1,1,)).toBe(2);
    });

    // suit de test dentro de una suit de test global
    describe.only("Suma numeros positivos", () => {
        it('adds 1 + 2 to equal 3', () => {
          expect(sum(1, 2)).toBe(3);
        });
        it('suma 3 y 4 es 7', () => {
            expect(sum(3, 4)).toBe(7);
        });
    })

    // suit de test dentro de una suit de test global
    describe("Suma con negativos", () => {
        it("suma 2 y -3 es -1", () => {
            expect(sum(2, -3)).toBe(-1);
        });
    });

    // suit de test dentro de una suit de test global
    describe("Operaciones con otros tipos", () => {
        test.todo("Sumar numeros con letras");
    })
})
```

Podrías pasar tola la app a modulos y hacer `import sum from './sum';`. Pero si no quieres pasar toda tu aplicacion a módulos y si testear con modulos
* https://jestjs.io/docs/getting-started#using-babel
* instalamos babel `npm install --save-dev babel-jest @babel/core @babel/preset-env`
* creamos `babel.config.js` y añadimos 
* en sum test : `import sum from './sum';`


Podemos ejecutar los test sólo de los cambios que hemos hecho en ese momento. Los que no estén commiteados en ningín sitio, así vas testeando funciones que no estén guardas en commit.
Para verlocreamos varios ficheros `multiplicar.js` con sus test
* ejecuta los test sólo en cambios `npx jest -o` esto solo aplicará para `multiplicar.test.js` es decir sólo para los cambios, no ejecutará para `sum.test.js`

`npx jest --listTests` te dirá la lista de test

```sh
/Users/alex/Desktop/DDT/tdd-javascript/demos/avg.test.js
/Users/alex/Desktop/DDT/tdd-javascript/demos/multiplica.test.js
/Users/alex/Desktop/DDT/tdd-javascript/demos/sumAge.test.js
/Users/alex/Desktop/DDT/tdd-javascript/demos/sum.test.js
```

`npx jest multiplica` te ejecuta solo el archivo multiplica 

```sh
➜  tdd-javascript git:(main) ✗ npx jest multiplica
 PASS  demos/multiplica.test.js
  Función multiplica
    ✓ 2 * 2 es 4 (3 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.719 s, estimated 2 s
Ran all test suites matching /multiplica/i.
```

Si defines en package.json `"test:watch": "jest --watch",` y ejecutas `npm run test:watch` # escuchar los cambios de nuetra aplicacion

```sh
➜  tdd-javascript git:(main) ✗ npm run test:watch
  console.log
    TEST FINAL

      at Object.log (demos/sum.test.js:10:17)

  console.log
    TEST INIT

      at Object.log (demos/sum.test.js:6:17)

 PASS  demos/sum.test.js
  Fumción suma
    ○ skipped suma 1 y 1 es 2
    Suma numeros positivos
      ✓ adds 1 + 2 to equal 3 (5 ms)
      ✓ suma 3 y 4 es 7 (5 ms)
    Suma con negativos
      ○ skipped suma 2 y -3 es -1
    Operaciones con otros tipos
      ✎ todo Sumar numeros con letras

Test Suites: 1 passed, 1 total
Tests:       2 skipped, 1 todo, 2 passed, 5 total
Snapshots:   0 total
Time:        1.851 s
Ran all test suites related to changed files.

Watch Usage
 › Press a to run all tests.
 › Press f to run only failed tests.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.
```
fíjate que puedes filtrar presionado los archivos que quieres que escuche `Watch Usage`.

Puedes definir el nivel de verbosidad de salida `npx jest --silent` y ya no es tan verboso en la salida de la consola. Aplica a los ficheros que si que falla; no te pinta todo el output del archivo test, sólo la funcoin que falla. Pero puedes decir lo contrario `npx jest --verbose`
* `npx jest --silent`
* `npx jest --verbose`

Queremos tratar la salida con json, quieres hacer un break y buscar los que tengasn un faalo trazar trazar para enviar un hooks a discord o slack o la herramienta de colaboracion.
* `npx jest --json`
  
```sh
# te lo envías a un archivo
npx jest --json -> test.json
```
se ha creado un archivo, le puedes decir a un compañero "el proyecto ..., la función que se llama `Función sum` no ha pasad `"pass": false`

```json
      "assertionResults": [
        {
          "ancestorTitles": ["Fumción suma"],
    
    ...

          "failureDetails": [
            {
              "matcherResult": {
                "actual": null,
                "expected": 3,
                "message": "expect(received).toBe(expected) // Object.is equality\n\nExpected: 3\nReceived: NaN",
                "name": "toBe",
                "pass": false
              }
            }
          ],
```

Puedes pasar toda la **configuracion** que quiereas a **jest** https://jestjs.io/docs/cli
Incluso puedes crear un fichero de configuracion. En local de una forma y en produccion otra:

`npx jest --init` te hace las preguntas y te crear el fichero `jest.config.js` (despues incluso puede modificar este fichero directamente dede dentro) y le dices en package.json:
* para local `"test:local": "jest --config=jest.config.js",`
* para automatizarlo `"test:json": "jest --json"` y este test.json es el que utilizarías en tu entorno

```json
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:local": "jest --config=jest.config.js",
    "test:json": "jest --json"
  },
```


### metodos globales

https://jestjs.io/docs/using-matchers

lo metodos globales que nos permite ejecutar jest en sus test para ejecutar de la manera que queramos


Son todos aquellos cmportamientos esperados que le podemos definir a jest. 
* `toBe` es el más común

definimos funcion para trabajar con objetos `demo/sumAge.js`

```js
// {age: 1} -> {age: 1+n}

function sumAge(user, qt) {
    user.age = user.age + qt;
    return user;
}
```

```js
import sumAge from './sumAge';

describe("Suma age a objeto", () => {

    it("sumamos 1 a la edad de un objeto con age 2", () => {
        expect(sumAge({age:2}, 1)).toEqual({age:3});
    });
});
```
¿qué pasa si en vez de pasarle un numero le pasamos una letra?

```js
import sumAge from './sumAge';

describe("Suma age a objeto", () => {

    const demoUser = { age: 2 };

    it("sumamos 1 a la edad de un objeto con age 2", () => {
        expect(sumAge(demoUser, 1)).toEqual({age:3});
    });

    // Restamos un año
    it("restamos un año a un objeto con age 2", () => {
        expect(sumAge(demoUser, -1)).toEqual({age: 1});
    })

    // Sumamos 0
    it("sumamos 0 a un objeto con age 2", () => {
        expect(sumAge(demoUser, 0)).toEqual({age: 2});
    })

    // Sumamos una letra a age
    it("sumamos 'a' a un objeto con age 2", () => {
        expect(sumAge(demoUser, 'a')).toEqual({age: 2});
    });
});
```

Tenemos una funcion de sumar numero y cuando le pasamos letras JS lo que hace es concatenar y no da error en el test. Queremos que pase que numeros no letras, entonces vamos a la funcion y se lo decimos desde allí.

```js
function sumAge(user, qt) {
    if (isNaN(qt)) return user;
```
queremos definir aquellos casos de uso que sabemos que nuestra aplicacion se confromará, podrías ahcerun `if (isNaN(qt)) thrwo new Exception;` y reventará la aplicación si eres drástico.

* `describe.only("Suma numeros positivos", () => {` sólo ejecutará esta suit, el resto se los saltará
* `describe.skip("Suma numeros negativos", () => {`se saltará esta suit `Tests:       2 skipped, 1 todo, 8 passed, 11 total`

Imaginate definir test que no estan definidos, has hecho tu app has de desplegar pero te queda pendiente el test. Puedes despluegar eso diciendole que de esta suit ` describe("Suma con negativos", () => {` me falta esta test `describe.todo("Sumar numeros con letras");`

```js
    describe("Suma con negativos", () => {
        it("suma 2 y -3 es -1", () => {
            expect(sum(2, -3)).toBe(-1);
        });

        describe.todo("Sumar numeros con letras");`
```

o de esta manera cuando pase a produccion tiene que estar todos los test hechos

```js
    describe("Operaciones con otros tipos", () => {
        test.todo("Sumar numeros con letras");
    })
```

si así lo pasas a joson file `npx jest --json -> test.json` puedes ir a `"status": "todo",` y **github actions** podría rechazar un commit con un test con `todo`porque con politica de equipo no queremos que estén pendiente de hacer.

```sh
        {
          "ancestorTitles": ["Fumción suma", "Operaciones con otros tipos"],
          "duration": null,
          "failureDetails": [],
          "failureMessages": [],
          "fullName": "Fumción suma Operaciones con otros tipos Sumar numeros con letras",
          "invocations": 1,
          "location": null,
          "numPassingAsserts": 0,
          "retryReasons": [],
          "status": "todo",
          "title": "Sumar numeros con letras"
        }
```

**afterAll - beforeAll**

queremos que antes de hacer cualquier cosa haga algo aqui `afterAll(() => {}` esto es para controlar el workflow y es importante porque quizás antes quieras inicializar una base de datos, o crear variables y limpiarlas luego, escribir un archivo y borrar luego el archivo. Estos howks permiten controlar el test de la appp para acciones ante y despues de ejeecutar los test.

```js
    afterAll(() => {
        console.log("TEST INIT");
    })

    beforeAll(() => {
        console.log("TEST FINAL");
    })
```

**Aproximaciones**

podemos decirle que esperamos que el valor medio de un array sea mayor que cero o lo que sea

```js
// se han de cumplir todos a la vez
describe("Media de valores positivos", () => {
    it("Valor medio de 1,2,2,1 es 1.5", () => {
        expect(avg([1,2,2,1])).toBe(1.5);
        expect(avg([1,2,2,4])).toBeGreaterThan(0);
        expect(avg([1,2,2,4])).toBeGreaterThanOrEqual(0);
        expect(avg([1,2,2,4])).toBeLessThan(4);
        expect(avg([1,2,2,4])).toBeCloseTo(2, 0);
        expect(avg([1,2,2,4])).not.toBeCloseTo(2, 1);
    });
```


---

Referencias:

* https://martinfowler.com/articles/practical-test-pyramid.html
* https://www.selenium.dev/
* https://jestjs.io/docs/getting-started
* https://mochajs.org/
* https://www.chaijs.com/
* https://jestjs.io/docs/cli
* https://jestjs.io/docs/using-matchers
* https://jestjs.io/docs/api
  


