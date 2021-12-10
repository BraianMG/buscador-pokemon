# __Buscador Pokémon__

- [__Buscador Pokémon__](#buscador-pokémon)
  - [__Version Vanila__](#version-vanila)
  - [__Versión React__](#versión-react)
  - [__Comentarios Generales__](#comentarios-generales)

---

## __Version Vanila__
- Para __iniciar__ la aplicación:
  - Ve a la carpeta __vanila__ y corre el comando __npm install__ para instalar sus dependencias
  - Inicia la __Versión Vanila__ con __npm run dev__

- Para __probar__ la aplicación:
  - Para iniciar los __tests con Jest__ corre el comando __npm run test__ 
    - En este caso tuve varios inconvenientes para configurar los test, __no funcionan correctamente__

  - Para iniciar los __tests con Cypress__ corre el comando __npx cypress open__
    - Se abrirá una ventana de Cypres, en el apartado __INTEGRATION TESTS__ tendremos una lista de tests disponibles, hacer clic en el que queramos correr
      - El test __page_load.spec.js__ pasa correctamente
      - El test __validate_form.spec.js__ para que pase correctamente es necesario hacer clic en el botón "BUCAR POKÉMON" antes de que pasen los 4 segundos, ya que creo que estoy cometiendo un error al hacer submit del form

---

## __Versión React__
- Para __iniciar__ la aplicación:
  - Ve a la carpeta __react__ y corre el comando __npm install__ para instalar sus dependencias
  - Inicia la __Versión React__ con __npm run start__
    - En cuanto a esta versión, aún no está terminada, tengo un inconveniente con un estado que no permite que se rendericen los Pokémons luego de cada búsqueda
    - Sin embargo, funciona cuando luego de realizar una búsqueda, modificamos el texto, provocando que se genere un renderizado y recién ahí muestra el resultado de la búsqueda, si tienen algún consejo lo agradecería

---

## __Comentarios Generales__
- Fue un lindo Test, me encontré con dificultades que no creí encontrar y me tomaron un tiempito superarlas.
- Inicié el test pensando en la __Versión Vanila__ ya que consideraba que utilizar __React__ era muy pesado para lo pequeño del proyecto, de todas formas quise sumarlo como una alternativa más pero bueno por tiempo no alcancé a terminarlo de una mejor manera o al menos de la manera en que me gustaría.
