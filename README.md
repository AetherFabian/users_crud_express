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

Para iniciar el modo de desarrollo en un entorno local sin base de datos, deberás de utilizar el comando:
```cmd
npm run start:dev
```
Y para hacerlo con contenedores de la aplicación y base de datos. Deberás editar el entrypoint.sh cambiando el script de npm a :
```
npm run start:dev
```
Y luego ejecutar el siguiente comando, para iniciar los contenedores:
```cmd
docker compose up
```

## Pruebas
Para correr las pruebas, deberás de utilizar el siguiente comando:
```cmd
npm run test
```
## Despliegue
Los requerimientos de despliegue son los siguientes:
  - Node: 18.12.0
  - npm: 9.2.0
  - Docker (Optional): 20.10.19

### Despliegue sin Docker

Si el despligue va a ser manual, sólo deberás de instalar los paquetes de npm y configurar para ejecutar el comando:
```
npm run start
```
### Despliegue con Docker
Para desplejar la plicación con contenedores, deberás de configurar la variable de entorno como en el archivo.env.example, para que el los servicios funcionen correctamente.
Y se debe modificar el archivo entrypoint.sh, cambiando el script de npm a:
```
npm run start
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