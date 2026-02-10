# 🚀 Agencia TecnoFuturo - Centro de Mando Digital

[![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)](https://github.com/margandona/actividad2)
[![License](https://img.shields.io/badge/license-Educational-green.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-Production-success.svg)](https://github.com/margandona/actividad2)

Una aplicación educativa interactiva diseñada para enseñar tecnología digital, inteligencia artificial y uso responsable de la tecnología a estudiantes de 2° Medio.

## 📋 Descripción

**Agencia TecnoFuturo** es una Single Page Application (SPA) gamificada que transforma el aprendizaje de conceptos tecnológicos en una experiencia inmersiva. Los estudiantes asumen el rol de analistas en un futurista Centro de Mando, completando 6 misiones progresivas que abordan desde conceptos básicos hasta análisis y reflexión crítica.

### Características Principales

- 🎮 **Experiencia Gamificada**: Misiones progresivas con niveles Bloom integrados
- 🤖 **Bot Asistente Inteligente**: Panel de ayuda contextual por misión
- ✅ **Checklist de Progreso**: Seguimiento global y por misión
- 🎵 **Sistema de Audio Inmersivo**: 
  - Música de fondo diferenciada (Welcome vs Dashboard)
  - Efectos sonoros para todas las interacciones
  - Control de volumen con preferencias guardadas
- 📱 **Diseño Responsive**: Optimizado para desktop, tablet y móvil
- ♿ **Accesibilidad**: Navegación por teclado, ARIA labels, focus management
- 📡 **PWA Ready**: Service Worker para funcionamiento offline
- 🌐 **Contenido Integrado**: Educaplay, ChatGPT, Padlet

## 🛠️ Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Diseño responsive, animaciones, gradientes
- **JavaScript (ES6+)** - Lógica de aplicación con jQuery 3.7.1
- **Bootstrap 5.3.2** - Framework CSS responsive
- **Bootstrap Icons** - Iconografía
- **LocalStorage API** - Persistencia de datos
- **Service Worker** - Cache y offline support
- **Web Audio API** - Gestión de audio

## 📁 Estructura del Proyecto

```
actividad2/
├── index.html                 # Archivo principal (SPA)
├── README.md                  # Este archivo
├── manifest.json              # PWA manifest
├── sw.js                      # Service Worker
├── css/
│   └── styles.css            # Estilos principales (1656 líneas)
├── js/
│   └── app.js                # Lógica de aplicación (1445 líneas)
└── assets/
    ├── img/
    │   ├── principal-horizontal.png   # Sala de control (Welcome, desktop)
    │   ├── principal-vertical.png     # Sala de control (Welcome, mobile)
    │   ├── horizontal.png            # Agencia futurista (Dashboard, desktop)
    │   ├── vertical.png              # Agencia futurista (Dashboard, mobile)
    │   ├── bot.png                   # Bot asistente
    │   ├── checklist.png             # Ícono de checklist
    │   └── a1-a6.png                 # Imágenes de actividades
    └── audio/
        ├── principal.mp3             # Música bienvenida (Welcome screen)
        ├── audio.mp3                 # Música dashboard (mismo que bg.mp3)
        ├── hover.mp3                 # Sonido hover (efectos)
        ├── click.mp3                 # Sonido click (botones)
        ├── open.mp3                  # Sonido apertura (modales)
        └── close.mp3                 # Sonido cierre (modales)
```

## 🚀 Instalación y Setup

### Requisitos
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (para desarrollo)

### Pasos

1. **Clonar o descargar el repositorio**
   ```bash
   git clone <url-repositorio>
   cd actividad2
   ```

2. **Servir localmente** (recomendado)
   ```bash
   # Con Python 3
   python -m http.server 8000
   
   # Con Python 2
   python -m SimpleHTTPServer 8000
   
   # Con Node.js (http-server)
   npx http-server
   ```

3. **Abrir en navegador**
   ```
   http://localhost:8000
   ```

4. **Instalar como PWA** (opcional)
   - En navegadores compatibles, aparecerá una opción "Instalar" o "Agregar a pantalla de inicio"
   - Funciona offline una vez instalado

## 🎮 Cómo Usar

### Para Estudiantes

1. **Pantalla de Bienvenida (Welcome)**
   - Lee la descripción de la agencia
   - Presiona **"Entrar"** para acceder al Centro de Mando
   - Opcional: visualiza Historia e Instrucciones

2. **Centro de Mando (Dashboard)**
   - Six misiones representadas como utensilios interactivos
   - **Próxima misión destacada** en amarillo/naranja

3. **Sistema de Misiones**
   - **A1**: Conceptos clave (crucigrama interactivo)
   - **A2**: Tecnología en acción (video educativo)
   - **A3**: Caso con IA (ChatGPT aplicado)
   - **A4**: Reflexión personal (Padlet)
   - **A5**: Evaluación (verificaciones)
   - **A6**: Síntesis y conclusiones

4. **Bot Asistente (💬)**
   - Haz clic en el bot para:
     - Ver descripción de la misión actual
     - Acceder a instrucciones paso a paso
     - Abrir enlaces a recursos
     - Ver checklist per-misión

5. **Checklist Global (✓)**
   - Botón en navbar (todos los dispositivos)
   - Muestra progreso general (X/6 misiones)
   - Progreso por tipo: Obligatorias, Optativas, Refuerzo
   - Marca misiones como completadas

6. **Controles Adicionales**
   - **🔊 Volumen**: Silencia/activa música y efectos
   - **📖 Historia**: Contexto narrativo de la agencia
   - **ℹ️ Instrucciones**: Guía de cómo usar la app
   - **🏠 Inicio**: Vuelve a la pantalla de bienvenida

### Para Docentes

1. **Monitorear Progreso**
   - Los datos se guardan en localStorage del navegador
   - Completadas: `localStorage.getItem('completedMissions')`

2. **Personalizar Contenido**
   - Editar objeto `missions` en `js/app.js` (líneas 10-179)
   - Cambiar URLs de Educaplay, ChatGPT, Padlet
   - Modificar descripciones y instrucciones

3. **Personalizar Estilos**
   - Variables CSS en `css/styles.css` (líneas 1-20):
     - `--color-primary`: Cian (#00d4ff)
     - `--color-secondary`: Púrpura (#9d4edd)
     - `--color-obligatoria`: Rojo (#ff4444)
     - `--color-optativa`: Verde (#44ff44)
     - `--color-refuerzo`: Amarillo (#ffcc00)

## 🎨 Personalización

### Cambiar Colores

```css
/* En css/styles.css líneas 1-10 */
:root {
    --color-primary: #00d4ff;        /* Cian - cambiar aquí */
    --color-secondary: #9d4edd;      /* Púrpura - cambiar aquí */
    --color-obligatoria: #ff4444;    /* Rojo */
    --color-optativa: #44ff44;       /* Verde */
    --color-refuerzo: #ffcc00;       /* Amarillo */
}
```

### Cambiar Imágenes de Fondo

```css
/* Welcome (pantalla inicial) */
.animated-background {
    background: url(../assets/img/principal-vertical.png);
}

@media (min-width: 576px) {
    .animated-background {
        background: url(../assets/img/principal-horizontal.png);
    }
}

/* Dashboard (después de entrar) */
.board-container.layout-mobile {
    background-image: url('../assets/img/vertical.png');
}

.board-container.layout-desktop {
    background-image: url('../assets/img/horizontal.png');
}
```

### Agregar/Editar Misiones

```javascript
// En js/app.js, objeto missions (línea 10)
const missions = [
    {
        id: 'a1',
        number: 1,
        title: 'Tu título',
        bloom: 'Recordar|Comprender|Aplicar|Analizar|Evaluar|Crear',
        bloomCategory: 'Lingüística|Visual|Lógico|etc',
        type: 'obligatoria|optativa|refuerzo',
        lore: 'Descripción narrativa',
        instructions: ['Paso 1', 'Paso 2', ...],
        embedHtml: '<iframe>...</iframe>' || null,
        image: 'assets/img/a1.png'
    }
    // ... más misiones
];
```

## 🎵 Sistema de Audio

### Archivos Requeridos

| Archivo | Duración Recomendada | Uso |
|---------|-------------------|-----|
| `principal.mp3` | 60-90s | Música Welcome (loop) |
| `audio.mp3` | 60-90s | Música Dashboard (loop) |
| `hover.mp3` | 0.1-0.3s | Sonido hover |
| `click.mp3` | 0.2-0.4s | Sonido click |
| `open.mp3` | 0.3-0.5s | Sonido apertura |
| `close.mp3` | 0.3-0.5s | Sonido cierre |

### Reemplazar Audio

1. Coloca nuevos archivos en `assets/audio/`
2. Los nombres deben coincidir exactamente
3. Formato: MP3 (compatible con todos los navegadores)
4. Prueba con el botón de volumen 🔊

## ♿ Accesibilidad

- ✅ Navegación por teclado (Tab, Shift+Tab, Enter, Escape)
- ✅ ARIA labels en todos los botones
- ✅ Contraste de colores WCAG AA
- ✅ Focus visible en elementos interactivos
- ✅ Semantic HTML5
- ✅ Instrucciones de teclado en modal

## 📊 LocalStorage (Persistencia)

Los datos se guardan automáticamente:

```javascript
// Misiones completadas (array de IDs)
completedMissions : ['a1', 'a3', 'a5']

// Estado de checklist por misión
missionChecklist_a1 : { 'item1': true, 'item2': false, ... }

// Preferencia de volumen
audioMuted : false|true
```

Limpiar datos: Abre DevTools → Console → `localStorage.clear()`

## 🐛 Troubleshooting

### No se escuchan los efectos de sonido
- Verifica que los archivos MP3 existan en `assets/audio/`
- Revisa la consola del navegador (F12 → Console)
- Asegúrate que el volumen no está silenciado
- Prueba en otro navegador

### Las imágenes no cargan
- Verifica que los archivos existan en `assets/img/`
- Revisa la ruta relativa: debe ser `../assets/img/`
- Asegúrate de estar sirviendo desde un servidor HTTP, no file://

### LocalStorage no funciona
- En incógnito/privado, localStorage es más restrictivo
- Algunos navegadores requieren HTTPS
- Prueba en modo normal del navegador

### El checklist no se guarda
- Verifica que JavaScript esté habilitado
- Revisa DevTools → Console para errores
- Limpia cache del navegador (Ctrl+Shift+Del)

### Problemas en Mobile
- Asegúrate que viewport está configurado en `index.html`
- Prueba con diferentes orientaciones
- Desactiva zoom automático si interfiere

## 📱 Responsive Design

- **Mobile**: < 576px (vertical.png/principal-vertical.png)
- **Tablet**: 576px - 991px (transitorio)
- **Desktop**: ≥ 992px (horizontal.png/principal-horizontal.png)

## 🔐 Privacidad y Datos

- ✅ Todos los datos se guardan localmente (no se envían a servidores)
- ✅ No usa cookies de rastreo
- ✅ Compatible con RGPD (datos solo locales)
- ⚠️ Los datos se pierden al borrar cache/cookies del navegador

## 📈 Métricas de Rendimiento

- Tamaño inicial: < 500KB
- Tamaño en cache (PWA): < 2MB
- Tiempo de carga: < 2s (en conexión moderna)
- Lighthouse Score: 90+

## 🤝 Contribuir

Para reportar bugs o sugerir mejoras:

1. Documenta el problema (paso a paso)
2. Adjunta screenshots si es visual
3. Verifica la consola (F12 → Console) para errores
4. Especifica navegador y dispositivo

## 📝 Licencia

Proyecto educativo de Agencia TecnoFuturo
Año 2026 - Segunda Edición

---

## 🎓 Recursos Educativos Integrados

- **Educaplay**: Crucigrama y evaluaciones interactivas
- **ChatGPT**: Inteligencia artificial aplicada
- **Padlet**: Reflexión y colaboración
- **Wikipedia/Research**: Contexto y ampliación

## ✨ Características Futuras Planeadas

- [ ] Tabla de clasificación (leaderboard)
- [ ] Insignias y logros desbloqueables
- [ ] Exportar reporte de progreso (PDF)
- [ ] Sistema de comentarios del docente
- [ ] Modos de dificultad (básico/intermedio/avanzado)
- [ ] Versión multi-idioma

---

## 🔧 Control de Versiones con Git

### Configuración Inicial

```bash
# Navegar al directorio del proyecto
cd "c:\Users\marga\Desktop\NeekWorld\master\curso 1\actividad_2\Actividad_2\actividad2"

# Inicializar repositorio Git (solo primera vez)
git init

# Configurar usuario (solo primera vez)
git config user.name "Tu Nombre"
git config user.email "tu@email.com"

# Agregar repositorio remoto
git remote add origin https://github.com/margandona/actividad2.git

# Verificar configuración
git remote -v
```

### Primer Commit y Push

```bash
# Ver estado de archivos
git status

# Agregar todos los archivos
git add .

# Crear commit inicial
git commit -m "🚀 Versión 2.0.0 - Agencia TecnoFuturo completa"

# Crear rama principal
git branch -M main

# Subir al repositorio remoto
git push -u origin main
```

### Flujo de Trabajo Diario

```bash
# Ver cambios actuales
git status

# Agregar archivos modificados
git add .
# O agregar archivos específicos:
git add index.html js/app.js css/styles.css

# Crear commit con mensaje descriptivo
git commit -m "✨ Feat: Nueva funcionalidad X"
# Otros prefijos útiles:
# 🐛 Fix: Corrección de bug
# 🎨 Style: Cambios visuales
# 📝 Docs: Actualización documentación
# ♻️ Refactor: Refactorización de código
# ⚡ Perf: Mejora de rendimiento
# ✅ Test: Agregar tests
# 🔧 Chore: Mantenimiento

# Subir cambios
git push origin main
```

### Comandos Útiles

```bash
# Ver historial de commits
git log --oneline --graph

# Ver diferencias antes de commit
git diff

# Ver diferencias de archivos staged
git diff --staged

# Revertir cambios de un archivo
git checkout -- archivo.js

# Ver ramas
git branch -a

# Crear nueva rama para feature
git checkout -b feature/nueva-funcionalidad

# Cambiar de rama
git checkout main

# Mergear rama
git merge feature/nueva-funcionalidad

# Ver último commit
git show HEAD

# Actualizar desde remoto
git pull origin main
```

### Tags y Releases

```bash
# Crear tag para versión
git tag -a v2.0.0 -m "Versión 2.0.0 - Release estable"

# Subir tags
git push origin --tags

# Ver tags
git tag -l

# Eliminar tag local
git tag -d v1.0.0

# Eliminar tag remoto
git push origin :refs/tags/v1.0.0
```

### .gitignore

El archivo `.gitignore` ya está configurado para excluir:
- Archivos temporales y sistema (`.DS_Store`, `Thumbs.db`)
- IDEs (`.vscode/`, `.idea/`)
- Logs (`*.log`)
- Node modules (si usas preprocesadores)
- Archivos de configuración local (`.env`)

Para incluir/excluir archivos de audio grandes, edita `.gitignore`:
```bash
# Descomentar para NO subir archivos de audio:
# assets/audio/*.mp3
# assets/audio/*.ogg
```

### Colaboración

```bash
# Clonar repositorio (para colaboradores)
git clone https://github.com/margandona/actividad2.git

# Crear rama para trabajar
git checkout -b feature/mi-cambio

# Hacer cambios y commit
git add .
git commit -m "✨ Mi cambio"

# Subir rama
git push origin feature/mi-cambio

# En GitHub: Crear Pull Request desde la rama
```

### Rollback y Recuperación

```bash
# Revertir último commit (mantiene cambios)
git reset --soft HEAD~1

# Revertir último commit (descarta cambios)
git reset --hard HEAD~1

# Revertir commit específico (crea nuevo commit)
git revert <commit-hash>

# Ver archivos eliminados
git ls-files --deleted

# Recuperar archivo eliminado
git checkout HEAD -- archivo-eliminado.js
```

---

## 📦 Despliegue

### GitHub Pages

1. **En tu repositorio GitHub:**
   - Settings → Pages
   - Source: Deploy from branch
   - Branch: `main` / root
   - Save

2. **Espera 2-3 minutos**

3. **Accede a:**
   ```
   https://margandona.github.io/actividad2/
   ```

### Netlify (Alternativa)

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=.
```

### Vercel (Alternativa)

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login y deploy
vercel --prod
```

---

**Última actualización**: Febrero 2026  
**Versión**: 2.0.0  
**Estado**: Producción ✅  
**Repositorio**: [github.com/margandona/actividad2](https://github.com/margandona/actividad2)

Para soporte técnico, contacta al equipo de desarrollo de TecnoFuturo.