# Proyecto de Biblioteca
Este es un proyecto de una API de biblioteca que permite gestionar libros y autores. Está construido con Node.js, Express y MongoDB.

## Requisitos

- Node.js (versión 14 o superior)
- MongoDB
- npm (gestor de paquetes de Node.js)

## Instalación

1. Clona el repositorio:
    ```sh
    git clone https://github.com/yeckdemies/proyecto-6.git
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd proyecto-6
    ```
3. Instala las dependencias:
    ```sh
    npm install
    ```

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables de entorno:
    ```env
    DB_URL=mongodb+srv://yolanda:<password>@cluster0.a9d0gcc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    ```

## Ejecución en Desarrollo

1. Inicia el servidor en modo desarrollo:
    ```sh
    npm run dev
    ```
2. Abre tu navegador y navega a `http://localhost:3000`.

## Ejecución en Producción

1. Inicia el servidor:
    ```sh
    npm start
    ```
2. Abre tu navegador y navega a `http://localhost:3000`.

## Rutas de la API
1. Autores
- `GET http://localhost:3000/api/v1/autores` - Obtener todos los Autores
- `GET http://localhost:3000/api/v1/autores/<id>` - Obtener autor por su ID
- `GET http://localhost:3000/api/v1/autores/nombre/<nombre>` - Obtener autor por nombre
- `GET http://localhost:3000/api/v1/autores/nacionalidad/<nacionalidad>` - Obtener autor por su nacionalidad
- `PUT http://localhost:3000/api/v1/autores/<id>`- Modificar un autor
- `POST http://localhost:3000/api/v1/autores/`- Añadir un autor
- `DELETE http://localhost:3000/api/v1/autores/<id>`- Eliminar un autor

2. Libros
- `GET http://localhost:3000/api/v1/libros` - Obtener todos los libros
- `GET http://localhost:3000/api/v1/libros/<id>` - Obtener libro por su ID
- `GET http://localhost:3000/api/v1/libros/titulo/<titulo>` - Obtener libro por su título
- `GET http://localhost:3000/api/v1/libros/Genero/<genero>` - Obtener libro por su género
- `GET http://localhost:3000/api/v1/libros/autor/<nombreAutor>` - Obtener libro por autor
- `PUT hhttp://localhost:3000/api/v1/libros/<id>`- Modificar un libro
- `POST http://localhost:3000/api/v1/libros`- Añadir un libro
- `DELETE http://localhost:3000/api/v1/libros/<id>`- Eliminar un autor

## Validación

Para validar que todo funciona correctamente, puedes usar herramientas como Postman o cURL para hacer peticiones a las rutas de la API mencionadas anteriormente.

## Paquetes Necesarios

- `express`: Framework para construir aplicaciones web y APIs.
- `mongoose`: ODM (Object Data Modeling) para MongoDB y Node.js.
- `dotenv`: Cargar variables de entorno desde un archivo `.env`.

Instala estos paquetes con el siguiente comando:
```sh
npm install express mongoose dotenv
```

## Juego de datos para pruebas

- Ccarga de juego de datos en MongoDB, solo si es necesario.
```sh
npm insertSeeds
```
