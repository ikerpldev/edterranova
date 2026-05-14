# Especialidades Dentales Terranova — Sitio Web

Sitio web de demostración para **Especialidades Dentales Terranova S.C.**, Guadalajara, Jalisco.

**Stack:** Next.js 16 · Tailwind CSS v4 · TypeScript · Framer Motion  
**Demo:** https://edterranova.vercel.app (noindex activo)

---

## Desarrollo local

```bash
npm install
npm run dev
# → http://localhost:3000
```

---

## Variables de entorno

Crea `.env.local` (nunca commitear):

```env
NEXT_PUBLIC_SITE_URL=https://tudominio.com
NEXT_PUBLIC_WEB3FORMS_KEY=tu_access_key_de_web3forms
```

---

## Placeholders a reemplazar antes de activar

Busca estos valores en el código y actualízalos con datos reales del cliente:

| Archivo | Placeholder | Reemplazar con |
|---|---|---|
| `lib/schema.ts` | `+52-33-1234-5678` | Teléfono real |
| `lib/schema.ts` | `Av. Terranova 123` | Dirección real |
| `lib/schema.ts` | `44660` | CP real |
| `lib/schema.ts` | `20.6597, -103.3496` | Coordenadas GPS reales |
| `components/layout/Footer.tsx` | `+52 33 1234-5678` | Teléfono real |
| `components/layout/Footer.tsx` | `Av. Terranova 123...` | Dirección real |
| `components/layout/WhatsAppFAB.tsx` | `523312345678` | Número WhatsApp real (con 52) |
| `content/equipo.ts` | Nombres ficticios | Doctores reales + fotos |
| `components/citas/CalEmbed.tsx` | `terranovadental/consulta` | Slug real de Cal.com |

---

## Activación cuando el cliente pague — Checklist completo

### 1. Dominio y DNS (30 min)

- [ ] Comprar dominio (recomendado: `terranovadental.com` o `edterranova.com.mx`)
- [ ] En Vercel → Settings → Domains → agregar dominio
- [ ] Configurar registros DNS en el proveedor del dominio (Vercel da instrucciones exactas)
- [ ] Esperar propagación DNS (5–30 min con Vercel)

### 2. Quitar noindex — CRÍTICO (5 min)

En dos lugares:

**`app/layout.tsx`** — cambiar:
```ts
robots: { index: false, follow: false }
```
por:
```ts
robots: { index: true, follow: true }
```

**`app/robots.ts`** — cambiar:
```ts
disallow: "/"
```
por:
```ts
allow: "/"
```

Commitear y deployar. Verificar con: `curl -I https://tudominio.com | grep -i x-robots`

### 3. Variables de entorno en Vercel (5 min)

- [ ] Vercel → Project → Settings → Environment Variables
- [ ] Agregar `NEXT_PUBLIC_SITE_URL` = `https://tudominio.com`
- [ ] Agregar `NEXT_PUBLIC_WEB3FORMS_KEY` = key real de web3forms.com (cuenta gratis)
- [ ] Re-deploy para que tome las variables

### 4. Web3Forms — formulario de contacto (10 min)

- [ ] Crear cuenta en https://web3forms.com (gratis, 250 envíos/mes)
- [ ] Crear nuevo form → copiar `access_key`
- [ ] Agregar como `NEXT_PUBLIC_WEB3FORMS_KEY` en Vercel
- [ ] Configurar email de destino en el dashboard de Web3Forms
- [ ] Probar el formulario en producción

### 5. Cal.com — sistema de citas (20 min)

- [ ] Crear cuenta en https://cal.com (gratis)
- [ ] Crear event type "Consulta Dental" — 30 min
- [ ] Conectar Google Calendar del doctor
- [ ] Configurar disponibilidad real
- [ ] Copiar el slug del event (ej: `dra-perez/consulta`)
- [ ] Actualizar `components/citas/CalEmbed.tsx`: `data-cal-link="tu-slug/consulta"`
- [ ] Commitear y deployar

### 6. Google Search Console (15 min)

- [ ] Ir a https://search.google.com/search-console
- [ ] Agregar propiedad → URL prefix → `https://tudominio.com`
- [ ] Verificar ownership (opción recomendada: HTML tag en `app/layout.tsx`)
- [ ] Submit sitemap: `https://tudominio.com/sitemap.xml`
- [ ] Solicitar indexación de la página principal

### 7. Google Business Profile (30 min)

- [ ] Ir a https://business.google.com
- [ ] Buscar "Especialidades Dentales Terranova" → Reclamar o crear perfil
- [ ] Verificar via postcard / video / llamada
- [ ] Agregar sitio web: `https://tudominio.com`
- [ ] Completar: horarios, fotos reales, servicios, descripción
- [ ] **CRÍTICO:** el NAP (nombre, dirección, teléfono) debe ser **idéntico** al del sitio web y al schema JSON-LD

### 8. Google Analytics 4 (10 min)

- [ ] Crear cuenta GA4 en https://analytics.google.com
- [ ] Crear propiedad → obtener Measurement ID (`G-XXXXXXXXXX`)
- [ ] Agregar `NEXT_PUBLIC_GA_ID` a variables de entorno en Vercel
- [ ] En `app/layout.tsx`, agregar dentro del `<body>`:

```tsx
import Script from "next/script";

<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `}
</Script>
```

### 9. Fotos y contenido real

- [ ] Reemplazar fotos del equipo en `content/equipo.ts`
- [ ] Actualizar nombres, especialidades y cédulas reales
- [ ] Agregar fotos reales de la clínica en la galería
- [ ] Actualizar dirección, teléfono y coordenadas GPS reales
- [ ] Actualizar número de WhatsApp real en `components/layout/WhatsAppFAB.tsx`

### 10. Verificación final post-activación

- [ ] `npm run build` pasa sin errores
- [ ] `curl https://tudominio.com/robots.txt` → muestra `Allow: /`
- [ ] https://validator.schema.org → Dentist + LocalBusiness + FAQPage sin errores
- [ ] https://search.google.com/test/rich-results → FAQ aparece como rich snippet
- [ ] Lighthouse en producción → SEO ≥95, Performance ≥90, Accessibility ≥95
- [ ] Formulario de contacto → envía email real ✅
- [ ] Cal.com → cita de prueba completa ✅
- [ ] WhatsApp FAB → deeplink abre WhatsApp con mensaje ✅
- [ ] Sitemap enviado en Search Console ✅

---

## Estructura del proyecto

```
app/                    # Páginas Next.js 16 App Router
  page.tsx              # Inicio
  servicios/            # Listado + páginas por especialidad
  nosotros/             # Equipo y filosofía
  galeria/              # Galería de casos
  contacto/             # Formulario + Cal.com
  layout.tsx            # Layout global con JSON-LD
  robots.ts             # robots.txt (Disallow:/ en demo)
  sitemap.ts            # Sitemap dinámico
  opengraph-image.tsx   # OG image auto-generada

components/
  layout/               # Header, Footer, WhatsAppFAB
  home/                 # Secciones de la home
  citas/                # CalEmbed
  ui/                   # Button, SectionWrapper

content/
  servicios.ts          # 8 especialidades con FAQ y metadata
  equipo.ts             # Doctores
  testimonios.ts        # Testimonios de pacientes

lib/
  schema.ts             # Generadores JSON-LD para SEO estructurado
  seo.ts                # Helper generateMetadata
```

---

*Desarrollado por ikerpldev · perlox2112@gmail.com*
