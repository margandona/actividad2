# Changelog - Agencia TecnoFuturo

Todos los cambios importantes del proyecto serán documentados aquí.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

## [2.0.0] - 2026-02-10

### ✨ Agregado
- Sistema de iconos PNG personalizados (sound-on, sound-off, historia, info, home, entrar)
- Sistema de audio completo con 6 archivos (principal, audio, hover, click, open, close)
- Música diferenciada para Welcome (principal.mp3) y Dashboard (audio.mp3)
- Logs detallados en consola para debugging de audio
- Bot asistente con panel contextual por misión
- Checklist global con progreso por tipo de misión
- Sistema de persistencia con localStorage
- Service Worker para PWA (funcionamiento offline)
- README.md completo con documentación

### 🔧 Cambiado
- Botón checklist movido del board-container al navbar (visible en todas las pantallas)
- Navbar rediseñado con gradientes y glassmorphism profesional
- Volumen de efectos aumentado de 0.4 a 0.7 para mejor audibilidad
- Brillo de utensilios intensificado con múltiples capas de glow
- Fondos: Welcome usa principal-*, Dashboard usa horizontal/vertical
- Botón mute ahora usa imágenes PNG en lugar de Bootstrap Icons

### 🐛 Corregido
- Sistema de audio: eventos de hover, click, open y close ahora reproducen correctamente
- Selectores de eventos expandidos para incluir todos los elementos interactivos
- Detección mejorada de interacción por teclado vs mouse
- Actualización correcta del icono de sonido según estado mute/unmute

### 🎨 Estilizado
- Efectos de hover más pronunciados en botones dashboard (scale 1.2)
- Box-shadow multicapa en utensilios (3-4 niveles de glow)
- Animación de pulso optimizada (0.8s en lugar de 1s)
- Resaltado "siguiente misión" en amarillo con glow mejorado

### 📚 Documentación
- README.md con guía completa de instalación y uso
- Troubleshooting para problemas comunes
- Guía de personalización (colores, imágenes, misiones)
- Changelog para tracking de versiones

---

## [1.0.0] - 2026-01-15

### ✨ Primera Versión
- Implementación inicial de la Agencia TecnoFuturo
- 6 misiones basadas en Taxonomía de Bloom
- Integración con Educaplay, ChatGPT, Padlet
- Navbar responsive con Bootstrap 5
- Diseño futurista con temática tecnológica
- Sistema básico de audio de fondo
