# CRUD de Usaurios
Este servicio maneja un control de datos de usuarios CRUD.

## Especificaciones
- Node: 18.12.0
- npm: 9.2.0
### Opcional
- Docker: 20.10.19 
## Instalación

```cmd
git clone git@github.com:AetherFabian/users_crud_express.git
cd users_crud_express
git remote add origin git@github.com:AetherFabian/users_crud_express.git
npm install
```

## Uso
Una vez instalada las dependencias, puedes hacer debug de la aplicación de 2 formas:

Para iniciar el modo de desarrollo en un entorno local,deberás de utilizar el comando:
```cmd
npm run start:dev
```
Y para hacerlo con Doker, será con el siguiente:
```cmd
docker compose up
```
## Endpoint de CRUD de Usuarios
Los siguientes endpoints, hacen uso del servicio de Retiro Parcial de Reservas de Portal de información de Polizas de MetLife:

path: /api/v1/users:
- GET / : Obtiene todos los usuarios registrados en la base de datos.
- GET /:id : Obtiene un usuario en específico de la base de datos.
- POST / : Crea un nuevo usuario en la base de datos.
  - Body:
    - first_name: string
    - last_name: string
    - age: number
    - birth_date: string
    - civil_status: una de estos [single, married, divorced, widowed]
    - phone: string
    - country: string
    - state: string
    - city: string
    - zip_code: string
    - idiom: uno de estos [es, en, fr]
    - hobbies: array de strings
    - preferences: array de strings
- PUT /:id : Actualiza un usuario en la base de datos.
  - Body:
    - first_name: string
    - last_name: string
    - age: number
    - birth_date: string
    - civil_status: una de estos [single, married, divorced, widowed]
    - phone: string
    - country: string
    - state: string
    - city: string
    - zip_code: string
    - idiom: uno de estos [es, en, fr]
    - hobbies: array de strings
    - preferences: array de strings
- DELETE /:id : Elimina un usuario en la base de datos.