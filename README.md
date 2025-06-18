# Insert Coin Web

Sitio web para **Insert Coin**, tienda y alquiler de consolas y máquinas arcade retro.

## Características

- Página principal con diseño retro y secciones informativas
- Tienda con productos destacados, imágenes, precios y botón de compra por WhatsApp
- Página de detalle de producto
- Blog con artículos
- Formulario de contacto integrado con EmailJS
- Header y Footer consistentes en todas las páginas
- Navegación con React Router
- Diseño responsive
- Despliegue listo para GitHub Pages

## Tecnologías

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [EmailJS](https://www.emailjs.com/)

## Instalación y desarrollo

```bash
npm install
npm run dev
```

## Build y despliegue en GitHub Pages

1. Edita `vite.config.ts` y asegúrate que tenga:
   ```js
   base: '/insertcoinweb/',
   build: { outDir: 'docs' },
   ```
2. Ejecuta:
   ```bash
   npm run build
   ```
3. Haz commit y push de los cambios a GitHub.
4. En GitHub, ve a Settings > Pages y selecciona la carpeta `/docs` como fuente.

El sitio estará disponible en: https://facugon85.github.io/insertcoinweb/

---

Desarrollado por facugon85 para Insert Coin 🕹️
