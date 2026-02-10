# Guía Rápida de Git - Agencia TecnoFuturo

## 🚀 Setup Inicial (Una sola vez)

### 1. Configurar Git globalmente
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

### 2. Inicializar y conectar repositorio
```bash
# En el directorio del proyecto
cd "c:\Users\marga\Desktop\NeekWorld\master\curso 1\actividad_2\Actividad_2\actividad2"

# Inicializar Git
git init

# Conectar con GitHub
git remote add origin https://github.com/margandona/actividad2.git
```

### 3. Primer commit y push
```bash
# Ver archivos
git status

# Agregar todos los archivos
git add .

# Crear commit
git commit -m "🚀 Initial commit - Agencia TecnoFuturo v2.0.0"

# Crear rama main
git branch -M main

# Subir por primera vez
git push -u origin main
```

---

## 📝 Uso Diario

### Flujo básico (cada vez que hagas cambios)
```bash
# 1. Ver qué archivos cambiaron
git status

# 2. Agregar archivos modificados
git add .

# 3. Crear commit
git commit -m "✨ Descripción del cambio"

# 4. Subir a GitHub
git push
```

### Usando el Script Helper (PowerShell)
```powershell
# Ver estado
.\git-helper.ps1 status

# Hacer commit (te pedirá el mensaje)
.\git-helper.ps1 commit

# Subir cambios
.\git-helper.ps1 push

# Todo en uno (commit + push)
.\git-helper.ps1 sync
```

---

## 📌 Prefijos Recomendados para Commits

| Emoji | Prefijo | Uso |
|-------|---------|-----|
| ✨ | Feat | Nueva funcionalidad |
| 🐛 | Fix | Corrección de bug |
| 🎨 | Style | Cambios visuales/CSS |
| 📝 | Docs | Documentación |
| ♻️ | Refactor | Refactorización |
| ⚡ | Perf | Mejora rendimiento |
| 🔧 | Chore | Mantenimiento |
| 🚀 | Release | Nueva versión |

### Ejemplos
```bash
git commit -m "✨ Feat: Agregar botón de checklist en navbar"
git commit -m "🐛 Fix: Corregir audio de efectos"
git commit -m "🎨 Style: Mejorar brillo de botones"
git commit -m "📝 Docs: Actualizar README con Git"
```

---

## 🔄 Comandos Útiles

```bash
# Ver historial bonito
git log --oneline --graph --decorate

# Ver diferencias antes de commit
git diff

# Deshacer cambios de un archivo
git checkout -- archivo.js

# Ver último commit
git show HEAD

# Actualizar desde GitHub
git pull

# Ver ramas
git branch -a
```

---

## 🏷️ Versiones (Tags)

```bash
# Crear tag
git tag -a v2.0.0 -m "Versión 2.0.0 estable"

# Subir tags
git push --tags

# Ver tags
git tag -l
```

---

## 🆘 Solución de Problemas

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/margandona/actividad2.git
```

### Error: "nothing to commit"
Significa que no hay cambios. Modifica algún archivo primero.

### Error: "rejected (non-fast-forward)"
```bash
# Bajar cambios primero
git pull origin main

# Luego subir
git push origin main
```

### Olvidé el mensaje de commit
```bash
# Ver último commit
git log -1

# Cambiar último mensaje
git commit --amend -m "Nuevo mensaje"
```

---

## 📦 Desplegar en GitHub Pages

1. Ve a: https://github.com/margandona/actividad2
2. Settings → Pages
3. Source: Deploy from branch
4. Branch: `main` → folder: `/ (root)` → Save
5. Espera 2-3 minutos
6. Visita: https://margandona.github.io/actividad2/

---

## ✅ Checklist Primera Vez

- [ ] Configurar `user.name` y `user.email`
- [ ] Inicializar repositorio (`git init`)
- [ ] Agregar remote origin
- [ ] Crear primer commit
- [ ] Subir a GitHub (`git push -u origin main`)
- [ ] Verificar en https://github.com/margandona/actividad2
- [ ] Activar GitHub Pages (opcional)

---

## 🎯 Atajos Rápidos

```bash
# Estado corto
git status -s

# Agregar y commit en un comando
git commit -am "mensaje"

# Ver cambios de último commit
git show

# Buscar en commits
git log --grep="audio"

# Ver archivos en un commit
git show --name-only <hash>
```

---

**Última actualización**: Febrero 2026  
**Versión**: 2.0.0
