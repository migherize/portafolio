# 🎨 Portafolio Frontend

Frontend de la plataforma de portafolios para programadores, construida con React y Tailwind CSS.

---

## 🎯 Objetivo

Permitir a desarrolladores crear, personalizar y compartir su portafolio profesional mediante una URL única:

```
[https://portafolio.maria/](https://portafolio.maria/)
[https://portafolio.pedro/](https://portafolio.pedro/)
```

---

## 🛠 Tecnologías

- React (con Vite)
- JavaScript
- Tailwind CSS
- React Router (opcional)
- Despliegue en AWS (Free Tier) con dominio y subdominios personalizados

---

## 🚀 Características Principales

- Interfaz responsive y moderna.
- Secciones personalizables:
  - Sobre mí
  - Tecnologías
  - Proyectos
  - Certificados
  - Retos (Challenges)
  - Contacto
- Compatible con integración al backend (API REST)
- Subdominios únicos para cada portafolio

---

## 📂 Estructura del Proyecto

```
portafolio-frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── vite.config.js
````
---

## ⚙️ Requisitos

- Node.js 18+
- npm (o yarn)
- Navegador moderno (Chrome, Firefox, etc.)

---

## 🚀 Ejecución Local y con Docker

### Opción 1: Ejecutar localmente

Ya está detallado en la sección anterior, pero para resumir:

```bash
# Clona el repositorio
git clone https://github.com/tu_usuario/portafolio-frontend.git
cd portafolio-frontend

# Instala dependencias
npm install

# Ejecuta servidor de desarrollo (Vite)
npm run dev

# Abre en el navegador
http://localhost:5173/
```

---

### Opción 2: Ejecutar con Docker

Si prefieres usar Docker para no instalar dependencias directamente en tu máquina:

1. Asegúrate de tener Docker y Docker Compose instalados.

2. Construye y levanta el contenedor:

```bash
docker-compose up --build
```

3. El frontend estará disponible en:

```
http://localhost:5173/
```

4. Para detenerlo:

```bash
docker-compose down
```

---

## 🧰 React + Vite

* Este proyecto usa React con Vite para un entorno de desarrollo rápido y moderno.
* Utiliza **Hot Module Replacement (HMR)** para recargar los cambios sin perder el estado.
* Para soporte avanzado de React, puedes usar plugins oficiales:

  * `@vitejs/plugin-react` (Babel)
  * `@vitejs/plugin-react-swc` (SWC, más rápido)
* ESLint está configurado para mantener calidad del código.
* Para proyectos más complejos se recomienda usar TypeScript con reglas de lint específicas.

---

## 📝 Notas

* El proyecto usa Vite para un entorno de desarrollo más rápido y moderno.
* Puedes agregar nuevas secciones como componentes en `src/components/`.
* Estilos personalizados se gestionan con utilidades de Tailwind CSS.

---

## 🤝 Contribuciones

* Usa ramas siguiendo **Gitflow** y pull requests para contribuir.
* Se aceptan mejoras, sugerencias y reporte de bugs a través de issues.

---

## 📄 Licencia

Este proyecto es de código abierto bajo la licencia **MIT**.

---

¡Gracias por colaborar!
