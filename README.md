# Sistema de Alerta Temprana (SAT) - IP Crecer Más

## 📋 Descripción

El **Sistema de Alerta Temprana (SAT)** es una aplicación web desarrollada para el Instituto Profesional Crecer Más que permite identificar y gestionar estudiantes en riesgo de deserción académica. El sistema utiliza inteligencia artificial y análisis de datos para calcular la probabilidad de deserción de cada estudiante basándose en múltiples indicadores académicos.

## 🛠️ ¿Cómo instalar el proyecto en tu computadora?

### Requisitos previos
Antes de comenzar, asegúrate de tener instalado:
- **Node.js** versión 18 o superior ([Descargar](https://nodejs.org/))
- **npm** (incluido con Node.js) o **yarn** como gestor de paquetes
- **Git** para clonar el repositorio ([Descargar](https://git-scm.com/))

### Pasos de instalación

#### 1. Clonar el repositorio
```bash
git clone https://github.com/AlvaroAjg/IP_Crecer_Mas.git
cd IP_Crecer_Mas
```

#### 2. Instalar dependencias
```bash
npm install
# O si usas yarn
yarn install
```

#### 3. Ejecutar en modo desarrollo
```bash
npm run dev
# O si usas yarn
yarn dev
```

La aplicación se abrirá automáticamente en `http://localhost:3000`

#### 4. Compilar para producción
```bash
npm run build
npm start
# O si usas yarn
yarn build
yarn start
```

### Requisitos del sistema
- **RAM mínima**: 2 GB
- **Espacio en disco**: 500 MB
- **Navegador compatible**: Chrome, Firefox, Safari o Edge (versiones recientes)

---

## 🔧 ¿Cómo funciona técnicamente?

### Tecnología utilizada
Este proyecto está construido con tecnologías modernas:

| Tecnología | Versión | Uso |
|-----------|---------|-----|
| **Next.js** | 16.0.3 | Framework React para aplicaciones web |
| **React** | 19.2.0 | Librería para interfaz de usuario |
| **TypeScript** | 5.x | Tipado estático en JavaScript |
| **Tailwind CSS** | 3.4.17 | Estilos CSS predefinidos |
| **Recharts** | 3.4.1 | Gráficos interactivos |
| **Lucide React** | 0.554.0 | Iconos vectoriales |

### Estructura de la aplicación

**Frontend (Cliente):**
- La aplicación es una SPA (Single Page Application) que se ejecuta en el navegador
- Está desarrollada con React y Next.js usando componentes funcionales
- Utiliza estado local (`useState`) para gestionar la interactividad
- Los datos se cargan desde un archivo simulado en `app/page.tsx`

**Estilos:**
- Diseño responsivo con Tailwind CSS
- Componentes modulares reutilizables
- Paleta de colores personalizada para identificar niveles de riesgo

### Flujo de funcionamiento

1. **Carga inicial**: El usuario accede a `http://localhost:3000`
2. **Dashboard**: Se muestra la página principal con métricas clave
3. **Navegación**: El usuario puede navegar entre diferentes secciones:
   - Dashboard Principal
   - Gestión de Alertas
   - Fichas de estudiantes individuales
   - Centro de Campañas
   - Reportes Académicos
   - Configuración
4. **Interactividad**: Los filtros, búsquedas y visualizaciones se actualizan en tiempo real

### Datos y Lógica

- **Datos simulados**: Actualmente utiliza datos de ejemplo para demostración
- **Indicadores de riesgo**: Se calcula basándose en:
  - Porcentaje de asistencia
  - Promedio de notas
  - Historial de comportamiento
  - Sentimiento en comentarios de foros

---

## 🎯 ¿Qué es este proyecto?

Este es un dashboard interactivo diseñado para tutores y coordinadores académicos que permite:

- **Monitoreo en tiempo real** del estado académico de los estudiantes
- **Identificación temprana** de estudiantes en riesgo de deserción
- **Gestión de alertas** priorizadas según niveles de riesgo (Crítico, Alto, Medio, Bajo)
- **Análisis de sentimiento** de comentarios y actividad en foros
- **Campañas de comunicación masiva** para contactar estudiantes
- **Reportes y visualizaciones** de retención y deserción
- **Simulador de riesgo** para proyectar escenarios académicos
- **Configuración personalizada** de umbrales de alerta

## 🚀 Características Principales

### 1. Dashboard Principal
- Vista general con métricas clave (Total alumnos, Riesgo Crítico, Riesgo Alto, Retención)
- Tabla interactiva de estudiantes con filtros de búsqueda
- Indicadores visuales de riesgo con código de colores

### 2. Gestión de Alertas
- Listado de estudiantes con riesgo Alto o Crítico
- Priorización automática según umbrales configurados
- Acceso rápido a fichas detalladas de cada estudiante

### 3. Ficha del Estudiante
- Información completa del estudiante (carrera, semestre, contacto)
- Análisis de sentimiento de comentarios en foros
- Bitácora de intervenciones y gestiones realizadas
- Gráfico de proyección de riesgo histórico
- Simulador interactivo para proyectar cambios en asistencia y notas
- Recursos sugeridos basados en IA

### 4. Centro de Campañas
- Plantillas predefinidas de correos electrónicos
- Segmentación de audiencia por nivel de riesgo
- Vista previa de mensajes antes de enviar
- Envío masivo de comunicaciones

### 5. Reportes Académicos
- Gráficos de retención vs deserción semestral
- Visualización de tendencias temporales

### 6. Configuración
- Ajuste de umbrales de riesgo (Crítico, Alto, Medio)
- Validaciones de seguridad para mantener consistencia
- Guardado de parámetros personalizados

## 🛠️ Tecnologías Utilizadas

- **Next.js 16.0.3** - Framework de React para aplicaciones web
- **React 19.2.0** - Biblioteca de JavaScript para interfaces de usuario
- **TypeScript** - Superset de JavaScript con tipado estático
- **Tailwind CSS** - Framework de CSS utility-first
- **Recharts** - Biblioteca de gráficos para React
- **Lucide React** - Iconos modernos y ligeros

## 📦 Instalación

### Requisitos Previos

Asegúrate de tener instalado en tu sistema:
- **Node.js** (versión 18 o superior)
- **npm** o **yarn** o **pnpm** (gestor de paquetes)

### Pasos de Instalación

1. **Clonar el repositorio** (si aplica) o navegar a la carpeta del proyecto:
   ```bash
   cd IP_Crecer_Mas-master
   ```

2. **Instalar las dependencias**:
   ```bash
   npm install
   ```
   O si prefieres usar otro gestor de paquetes:
   ```bash
   yarn install
   # o
   pnpm install
   ```

3. **Ejecutar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   O con otro gestor:
   ```bash
   yarn dev
   # o
   pnpm dev
   ```

4. **Abrir en el navegador**:
   Abre [http://localhost:3000](http://localhost:3000) para ver la aplicación.

## 🏃 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo en modo desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción (requiere build previo)
- `npm run lint` - Ejecuta el linter para verificar el código

## 📁 Estructura del Proyecto

```
IP_Crecer_Mas-master/
├── app/
│   ├── layout.tsx      # Layout principal de la aplicación
│   ├── page.tsx        # Página principal con todo el dashboard
│   ├── globals.css     # Estilos globales
│   └── favicon.ico     # Icono de la aplicación
├── public/             # Archivos estáticos
├── package.json        # Dependencias y scripts del proyecto
├── tailwind.config.ts  # Configuración de Tailwind CSS
├── tsconfig.json       # Configuración de TypeScript
└── README.md           # Este archivo
```

## 🎨 Funcionamiento del Sistema

### Cálculo de Riesgo

El sistema calcula el riesgo de deserción de cada estudiante basándose en:
- **Asistencia**: Porcentaje de clases asistidas
- **Rendimiento académico**: Promedio de notas
- **Análisis de sentimiento**: Comentarios en foros y plataformas
- **Historial académico**: Tendencias a lo largo del tiempo

### Niveles de Riesgo

- **Crítico** (≥ 85%): Deserción inminente, requiere intervención inmediata
- **Alto** (≥ 65%): Alto riesgo, necesita seguimiento de tutor
- **Medio** (≥ 40%): Seguimiento preventivo
- **Bajo** (< 40%): Estado normal, sin alertas

Los umbrales son configurables desde el panel de Configuración, con validaciones que aseguran valores mínimos y consistencia lógica.

### Flujo de Trabajo

1. El sistema monitorea continuamente los indicadores académicos
2. Calcula el riesgo de deserción para cada estudiante
3. Genera alertas automáticas para estudiantes en riesgo
4. Los tutores pueden revisar detalles y registrar intervenciones
5. Se pueden enviar campañas de comunicación masiva
6. El sistema genera reportes para análisis institucional

## 🔧 Configuración

### Personalizar Umbrales de Riesgo

1. Navega a la sección **Configuración** en el menú lateral
2. Ajusta los valores de:
   - Nivel Crítico (mínimo 85%)
   - Nivel Alto (mínimo 65%)
   - Nivel Medio (mínimo 40%)
3. Haz clic en **Guardar Configuración**

**Nota**: El sistema valida que los umbrales mantengan la lógica: Crítico > Alto > Medio

## 📊 Datos de Ejemplo

El sistema incluye datos simulados de 10 estudiantes de ejemplo con diferentes carreras y niveles de riesgo para demostrar todas las funcionalidades.

## 🚀 Despliegue en Producción

Para desplegar la aplicación en producción:

1. **Construir la aplicación**:
   ```bash
   npm run build
   ```

2. **Iniciar el servidor de producción**:
   ```bash
   npm run start
   ```

### Despliegue en Vercel (Recomendado)

La forma más fácil de desplegar es usando [Vercel](https://vercel.com):

1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente que es un proyecto Next.js
3. El despliegue se realizará automáticamente

## 📝 Notas Importantes

- Este es un sistema de demostración con datos simulados
- En producción, deberías conectar el sistema a una base de datos real
- Las funcionalidades de envío de correos requieren configuración de servicios de email
- El análisis de sentimiento puede integrarse con servicios de IA externos

## 👥 Soporte

Para más información sobre Next.js, consulta:
- [Documentación de Next.js](https://nextjs.org/docs)
- [Aprende Next.js](https://nextjs.org/learn)

## 📄 Licencia

Este proyecto es privado y está destinado para uso del Instituto Profesional Crecer Más.

---

**Desarrollado para IP Crecer Más** 🎓
