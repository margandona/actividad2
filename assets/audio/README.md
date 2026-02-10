# Archivos de Audio para Agencia TecnoFuturo

Coloca aquí los siguientes archivos de audio:

## Sonidos UI
- **hover.mp3** - Sonido sutil al pasar el mouse sobre botones/hotspots
- **click.mp3** - Sonido al hacer clic en botones/hotspots
- **open.mp3** - Sonido al abrir modales de actividad

## Música de Fondo
- **bg.mp3** - Música de fondo en loop
  - **Opción recomendada**: https://www.youtube.com/watch?v=qYaKzpMdBaM
  - Formato recomendado: MP3 o OGG
  - Volumen moderado (se configura a 20% en el código)

### Cómo descargar audio de YouTube:
1. **Método 1 - Online**:
   - Ve a https://y2mate.com/ o https://ytmp3.cc/
   - Pega el link: https://www.youtube.com/watch?v=qYaKzpMdBaM
   - Selecciona formato MP3
   - Descarga y guarda como `bg.mp3` en esta carpeta

2. **Método 2 - youtube-dl (avanzado)**:
   ```bash
   youtube-dl -x --audio-format mp3 https://www.youtube.com/watch?v=qYaKzpMdBaM
   mv *.mp3 bg.mp3
   ```

3. **Método 3 - yt-dlp (recomendado)**:
   ```bash
   yt-dlp -x --audio-format mp3 -o bg.mp3 https://www.youtube.com/watch?v=qYaKzpMdBaM
   ```

## Notas
- Los archivos deben tener exactamente estos nombres
- Si faltan archivos, la app funciona sin sonido (fallback silencioso)
- La música inicia solo cuando el usuario presiona "Entrar" (autoplay policy)
- El botón de mute pausa/reanuda la música
- La preferencia de mute se guarda en localStorage

## Fuentes alternativas para sonidos UI
- **Freesound**: https://freesound.org/
- **Zapsplat**: https://www.zapsplat.com/
- **Pixabay**: https://pixabay.com/music/
- **Mixkit**: https://mixkit.co/free-sound-effects/

## Licencias
- Para YouTube: Asegúrate de que el video permite su uso o que tienes permiso del creador
- Para sonidos UI: Usa recursos con licencia Creative Commons o libres de derechos
- Este proyecto es educativo/académico
