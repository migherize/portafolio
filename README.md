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

## 🚧 Configuración Inicial

1. **Clona el repositorio**:

```bash
git clone https://github.com/tu_usuario/portafolio-frontend.git
cd portafolio-frontend
````

2. **Instala las dependencias**:

```bash
npm install
```

3. **Configura Tailwind CSS** (si aún no está):

```bash
# Si no se generaron, crea los archivos manualmente:
touch tailwind.config.js postcss.config.js
# Copia la configuración recomendada en la documentación oficial.
```

4. **Ejecuta el servidor de desarrollo**:

```bash
npm run dev
```

5. **Accede a la aplicación en**:

```
http://localhost:5173/
```

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

---
