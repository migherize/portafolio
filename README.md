# 🎨 Portafolio Frontend

Frontend para mostrar portafolios personales a partir de archivos JSON. Construido con React + Vite y Tailwind CSS.

---

## 📌 ¿Qué hace?

- Renderiza un portafolio leyendo un archivo JSON por `username` desde `public/data/`.
- Permite elegir entre distintos layouts mediante `portfolioType` en el JSON (por ejemplo: `classic`, `modern`).
- URL por usuario: `/:username` (ej.: `/DummyUser`).

---

## 🛠 Tecnologías

- React 19 + Vite 6
- Tailwind CSS 4
- React Router 7
- Radix UI + Lucide Icons (para componentes del layout moderno)
- Alias de imports: `@` → `src/` (configurado en `vite.config.js`)

---

## 📂 Estructura del proyecto

```
.
├── public/
│   ├── data/
│   │   ├── DummyUser.json
│   │   └── <TuUsuario>.json
│   ├── images/
│   └── pdf/
├── src/
│   ├── layouts/
│   │   ├── LayoutFactory.tsx
│   │   ├── classic/
│   │   │   └── index.tsx
│   │   └── modern/
│   │       ├── components/
│   │       ├── hooks/
│   │       ├── sections/
│   │       └── index.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   └── UserProfilePage.tsx
│   ├── types/
│   │   └── schema.ts
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── vite.config.js
├── package.json
├── docker-compose.yml
└── dockerfile
```

---

## ⚙️ Requisitos

- Node.js 18+
- npm (o pnpm/yarn)
- Navegador moderno
- Opcional: Docker y Docker Compose

---

## 🚀 Instalación y ejecución

1) Clonar e instalar dependencias

```bash
npm install
```

2) Ejecutar en desarrollo

```bash
npm run dev
# Abre http://localhost:5173
```

3) Rutas disponibles

- Página de inicio: `/` (ingresas el `username` y navega a su perfil)
- Perfil por `username`: `/:username` (ej.: `/DummyUser`)

### Opción Docker

```bash
docker-compose up --build
# Abre http://localhost:5173
```

---

## 🧱 Esquema de datos del usuario

El tipo esperado está en `src/types/schema.ts` (interfaz `UserProfile`). El JSON se guarda en `public/data/<username>.json` y DEBE ser un array con uno o más perfiles. Ejemplo mínimo (ver `public/data/DummyUser.json`):

```json
[
  {
    "username": "DummyUser",
    "portfolioType": "classic",
    "personalInfo": {
      "fullName": "Dummy FullName",
      "headline": "Dummy Headline",
      "shortBio": "Esta es una biografía de ejemplo.",
      "location": "Ciudad Ejemplo",
      "backgroundUrl": "",
      "resumeUrl": "",
      "websiteUrl": "",
      "contact": { "email": "dummy@example.com", "phone": "+0000000000" },
      "socials": { "github": "https://github.com/dummy", "linkedin": "https://linkedin.com/in/dummy" }
    },
    "about": { "description": ["..."], "highlights": [{"label":"Proyectos","value":"5+"}], "image": "" },
    "skills": [],
    "experience": [],
    "projects": [],
    "education": []
  }
]
```

Cómo se usa:
- El componente `UserProfilePage` hace fetch de `/data/<username>.json` y busca dentro del array el objeto cuyo `username` coincida.
- El layout a renderizar se decide con `portfolioType` mediante `src/layouts/LayoutFactory.tsx`.

---

## 🧪 Usar el DummyUser (plantilla)

- Abre `public/data/DummyUser.json`.
- Duplica el archivo y nómbralo con tu usuario, por ejemplo: `public/data/JuanPerez.json`.
- Dentro del JSON, cambia `username` a `"JuanPerez"` y completa tus datos.
- Inicia la app y visita: `http://localhost:5173/JuanPerez`.
- Asegúrate que `portfolioType` sea uno válido (por defecto `classic` o `modern`).

Tip: Si solo quieres ver algo rápido, visita `http://localhost:5173/DummyUser`.

---

## 🧩 Layouts disponibles

- `classic`: layout simple de texto (ver `src/layouts/classic/index.tsx`).
- `modern`: layout completo con secciones (ver `src/layouts/modern/`).

El layout se elige desde el JSON con `portfolioType`.

---

## 🛠️ Crear un layout nuevo

1) Crear carpeta del layout

```
src/layouts/miLayout/
└── index.tsx
```

`index.tsx` debe exportar un componente por defecto que reciba `userData: UserProfile`:

```tsx
import { UserProfile } from "@/types/schema";

interface Props { userData: UserProfile }
export default function MiLayout({ userData }: Props) {
  return (
    <div>
      <h1>{userData.personalInfo.fullName}</h1>
      {/* Renderiza tus secciones aquí */}
    </div>
  );
}
```

2) Registrar el layout en la fábrica

Edita `src/layouts/LayoutFactory.tsx` y agrega tu caso:

```tsx
import ClassicLayout from "@/layouts/classic/index";
import ModernLayout from "@/layouts/modern/index";
import MiLayout from "@/layouts/miLayout/index"; // <— nuevo

export default function LayoutFactory({ userData }) {
  switch (userData.portfolioType) {
    case "classic":
      return <ClassicLayout userData={userData} />;
    case "modern":
      return <ModernLayout userData={userData} />;
    case "miLayout": // <— nuevo
      return <MiLayout userData={userData} />;
    default:
      return <p>Tipo de portafolio desconocido</p>;
  }
}
```

3) Usarlo desde el JSON del usuario

En `public/data/<username>.json` establece:

```json
"portfolioType": "miLayout"
```

Listo: al navegar a `/:username` se renderizará tu layout.

---

## 🔎 Detalles útiles

- Fetch de datos: `src/layouts/modern/hooks/useFetchData.ts`.
- Router: `src/App.jsx` define `/:username`.
- Alias `@`: configurado en `vite.config.js` para importar desde `src`.
- Dark mode: hook en `src/layouts/modern/hooks/useDarkMode.ts`.

---

## 🤝 Contribuciones

- Issues y PRs son bienvenidos.
- Estilo de código con ESLint.

## 📄 Licencia

MIT.
