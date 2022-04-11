<div align="center">

<img src="https://www.cloudanalogy.co.uk/wp-content/uploads/2019/06/react.png" style="width:150px; height:150px"> </img>

<!-- Encabezado -->
## React Hooks & MERN
### Abril 2022
### Autor 

| Nombre | Numero De Cuenta | Correo |
|:-------------:| :-----:|:-----:|
| Edgar Josué Benedetto Godoy | `20171033802` | [Gmail](mailto:ejbg597@gmail.com) |

</div>

____
____
### Roadmap para aprender React

![Roadmap](https://roadmap.sh/roadmaps/react.png)

_____

## Instalaciones recomendadas

### Instalaciones Necesarias
* [Google Chrome](https://www.google.com/chrome/)

* [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es&authuser=1)

* [Redux Devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=es)

* [Visual Studio Code](https://code.visualstudio.com/)

* [Postman](https://www.postman.com/downloads/)

* [Mongo Compass](https://www.mongodb.com/try/download/compass)

* [Git](https://git-scm.com/)

* [Node](https://nodejs.org/es/)


## Extensiones de VSCode
[Activitus Bar](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.activitusbar)

### Configuración del Bracket Pair Colorizer 2

[Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)
```
"bracket-pair-colorizer-2.colors": [
    "#fafafa",
    "#9F51B6",
    "#F7C244",
    "#F07850",
    "#9CDD29",
    "#C497D4"
],
```
### Tema que estoy usando en VSCode:

* [Monokai Night](https://marketplace.visualstudio.com/items?itemName=fabiospampinato.vscode-monokai-night)

* [Iconos](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

### Instalaciones recomendadas sobre React
* [ES7 React/Redux](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

* [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)

* [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)

____

### Conceptos básicos de React
1. ¿ Qué es un componente?
    * Pequeña pieza de código encapsulada re-utilizable que puede tener estado o no
2. ¿ Qué es un estado?
   * Es una variable que se actualiza en tiempo real, en otras palabras, el estado es como se encuentra la información del componente en un momento determinado del tiempo
3. ¿ Qué es un router?
   * Es un componente que permite navegar entre distintas páginas sin refrescar la página entera, dentro de un router se pueden tener páginas
4. ¿ Qué es una propiedad?
   * Es una variable que se pasa como parámetro a un componente, sirve para comunicarse entre componentes. Los componentetes tienen padres, los cuales son los llamados a esos componentes
      ```jsx
      ReactDOM.render(
         <App />
         document.getElementById('root')
      )
      ```
5. ¿ Qué es un Hook?
    * Es una funcion con una estructura especifica, para la cual se necesita importar un use{Algo} por ejemplo useState (useState es un hook)
    ```jsx
    const useState = () => {
        const [state, setState] = React.useState(0)
        return [state, setState]
    }
    ```
6. ¿ Qué son las pruebas unitarias?
    * Enfocadas en pequeñas funcionalidades
7. ¿ Qué es una prueba de integración?
   * Enfocadas en una aplicación completa, es decir, enfocadas en como reaccionan varias funcionalidades en conjunto
8. Características de las pruebas
    1. Fácil de escribir
    2. Fácil de leer
    3. Confiables
    4. Rápidas
    5. Principalmente unitarias
9. ¿ Qué es AAA?
   * Arrange, Act, Assert o Arreglar, Actuar y Afirmar.
        1. Arrange | Arreglar: Inicializar variables, importaciones necesarias, preparar el entorno para la prueba
        2. Act | Actuar: Llamar métodos, simular clicks, realizar acciones sobre el paso anterior
        3. Assert | Afirmar: Observar los resultados 
### Snipets útiles en React 
* [React Snippets](https://marketplace.visualstudio.com/items?itemName=formulahendry.react-snippets)

1. rafcp --> Crea un componente con la validación de tipos de los props y exportación por defecto
______
### Comandos utiles ```npm```

* Resolver problemas de dependencias

```js
npm install --legacy-peer-deps
npm install
npm run start:dev
```

### Comandos utiles ```nest```

* Generador de CRUD completo

```js
nest g resource <nombreEntidad>
```
_____
### Resolución de errores Postman

* Evitar el error al crear evento --> "message": "Invalid param id. Number expected"

```js
@Crud({
    model: {
        type: Event 
  }, 
  params: {
      id: {
          field: 'id',
        type: 'number',
        primary: true,
        disabled: true, // <= DESHABILITAR EL ID
    }
  }
})
```
______
______
### Bibliografía

#### Modern JS Documentation

[Fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
[Promises](https://developer.mozilla.org/es/docs/web/javascript/reference/global_objects/promise)
[Array find](https://developer.mozilla.org/es/docs/web/javascript/reference/global_objects/array/find)
[Array filter](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
[Array map](https://developer.mozilla.org/es/docs/web/javascript/reference/global_objects/array/map)
[Destructuracion](https://developer.mozilla.org/es/docs/web/javascript/reference/operators/destructuring_assignment)



#### NEST JS

[Documentation](https://docs.nestjs.com/)

[Class-Validator](https://github.com/typestack/class-validator#passing-options)

[Controllers Documentation](https://github.com/nestjsx/crud/wiki/Controllers#params)

[Ejemplo Práctico](https://github.com/lujakob/nestjs-realworld-example-app)


#### Type ORM

[Entities Documentation](https://typeorm.io/#/entities)

#### React JS
[React Roadmap](https://roadmap.sh/react)

[React Documentation](https://es.reactjs.org/docs/events.html)

[Create React App Documentation](https://create-react-app.dev/docs/getting-started/)

[Jest Documentation](https://jestjs.io/)

[Enzyme Adapter React 17](https://github.com/wojtekmaj/enzyme-adapter-react-17)

[Ezyme Documentation](https://enzymejs.github.io/enzyme/)

[Enzyme To JSON](https://www.npmjs.com/package/enzyme-to-json)