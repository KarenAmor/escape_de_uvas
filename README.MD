Escape de Uvas.

Es una aplicación para gestionar una bodega de vinos. Permite listar los vinos existentes y crear nuevos vinos. 
La aplicación ha sido desarrollada en TypeScript y utiliza Node.js y JSON como base de datos.

Funciones
La aplicación tiene las siguientes funciones:

Listar vinos: Muestra todos los vinos existentes en la base de datos.
Crear vino: Permite crear un nuevo vino, especificando su nombre, variedad, añada y precio.

Instalación
Clona el repositorio en tu máquina local: git clone https://github.com/tu-usuario/escape-de-uvas.git
Entra en la carpeta del proyecto: cd escape-de-uvas
Instala las dependencias: npm install

Configuración
Para utilizar este proyecto, es necesario contar con ciertas herramientas y tener configurado el entorno de desarrollo correctamente.
A continuación, se detallan los requisitos y pasos necesarios para la configuración del proyecto:
Requisitos
Node.js v14.17.6 o superior: para la ejecución de JavaScript en el entorno del servidor.
Git: para la gestión de versiones del proyecto.

Variables de entorno
El proyecto utiliza las siguientes variables de entorno, que deberán ser configuradas según el entorno donde se vaya a ejecutar:

PORT: número de puerto en el que se ejecutará el servidor. Por defecto, se utiliza el puerto '30003000.
Ejecución
Para ejecutar el proyecto, se utiliza el siguiente comando:
npm start.

La estructura es la siguiente 
escape_de_uva/
├── src/
│   ├── data/
│   │   └── vinos.json
│   ├── models/
│   │   └── Vino.ts
│   └── services/
│       └── VinosService.ts
├── tsconfig.json
└── index.ts
