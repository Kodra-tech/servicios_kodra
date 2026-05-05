# Kodra Soluciones - Portafolio y Landing Page Corporativa

Este repositorio contiene el código fuente del portafolio digital y *landing page* de **Kodra Soluciones**. Se trata de una aplicación web moderna, rápida y adaptable, diseñada para presentar los servicios de desarrollo web de la agencia, exhibir casos de éxito y captar clientes potenciales de manera automatizada.

## 🚀 Características Principales

1. **Diseño Web Adaptable (Responsive Design)**
   - Interfaz fluida que se adapta automáticamente a dispositivos móviles, tablets y monitores de escritorio.
   - Navegación optimizada mediante un menú interactivo ("hamburguesa") para pantallas pequeñas, garantizando la mejor experiencia de usuario (UX).

2. **Rendimiento y Optimización (SEO Técnico)**
   - Construida para velocidad extrema utilizando **Vanilla CSS** (sin frameworks pesados), logrando tiempos de carga mínimos.
   - Implementación de tipografías optimizadas (`Syne` y `DM Sans`) cargadas del lado del servidor para evitar saltos visuales en la página.
   - Uso de animaciones sutiles (mediante `IntersectionObserver`) que consumen muy pocos recursos del navegador.

3. **Captura de Leads y Sistema de Contacto**
   - Integración nativa de un formulario de contacto seguro.
   - **Procesamiento Serverless**: Las peticiones de contacto se procesan del lado del servidor ocultando cualquier lógica interna.
   - **Registro en Base de Datos**: Los prospectos se guardan en una base de datos relacional (PostgreSQL) usando rutas API protegidas y conexiones encriptadas.
   - **Flujo omnicanal**: Una vez validado y asegurado el registro, el sistema enruta automáticamente al cliente hacia canales de comunicación directa (WhatsApp y Correo Electrónico).

## 🛠 Arquitectura y Stack Tecnológico

El proyecto utiliza un enfoque Fullstack moderno, garantizando un ecosistema seguro, escalable y mantenible:

- **Frontend**: Next.js (App Router), React.js, HTML5 semántico, CSS3.
- **Backend / API**: Next.js Serverless Functions (Rutas API).
- **Base de Datos**: PostgreSQL (Conexión gestionada mediante variables de entorno encriptadas y driver `pg`).
- **Despliegue**: Optimizado para integrarse de forma continua (CI/CD) a plataformas en la nube (ej. Vercel).

## 🔒 Seguridad
- **Ocultación de Credenciales**: Toda la infraestructura de conexión, tokens y accesos a bases de datos está delegada a variables de entorno inyectadas en tiempo de despliegue (`.env`). Nunca se exponen detalles sensibles en el cliente ni en el código fuente.
- **Protección de Rutas**: La ruta de captura de leads sanitiza y verifica la información antes de conectarse a la base de datos externa.

## 💻 Desarrollo Local

Para correr este proyecto en un entorno local, sigue los siguientes pasos:

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Configurar el entorno**:
   Crea un archivo `.env.local` en la raíz del proyecto. Deberás solicitar a los administradores las credenciales para la variable de conexión segura de la base de datos:
   ```env
   DATABASE_URL="postgresql://<usuario>:<password>@<host>/<database>?sslmode=require"
   ```

3. **Levantar el servidor**:
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en el navegador para ver el resultado.

---
*Desarrollado y mantenido por el equipo de ingeniería de **Kodra Soluciones**.*
