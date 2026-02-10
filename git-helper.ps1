# =========================================
# Script de Git Helper - Agencia TecnoFuturo
# =========================================
# Uso: .\git-helper.ps1 [comando]
# Comandos disponibles: init, commit, push, status, log, sync

param(
    [Parameter(Position=0)]
    [string]$comando = "help"
)

# Colores para output
function Write-Success { param([string]$msg) Write-Host "✅ $msg" -ForegroundColor Green }
function Write-Info { param([string]$msg) Write-Host "ℹ️  $msg" -ForegroundColor Cyan }
function Write-Warning { param([string]$msg) Write-Host "⚠️  $msg" -ForegroundColor Yellow }
function Write-Error { param([string]$msg) Write-Host "❌ $msg" -ForegroundColor Red }

# Función para inicializar repositorio
function Initialize-Repo {
    Write-Info "Inicializando repositorio Git..."
    
    if (Test-Path ".git") {
        Write-Warning "El repositorio ya está inicializado"
        return
    }
    
    git init
    Write-Success "Repositorio inicializado"
    
    Write-Info "Agregando remote origin..."
    git remote add origin https://github.com/margandona/actividad2.git
    
    Write-Success "Configuración completa"
    Write-Info "Para configurar tu nombre: git config user.name 'Tu Nombre'"
    Write-Info "Para configurar tu email: git config user.email 'tu@email.com'"
}

# Función para hacer commit
function Do-Commit {
    Write-Info "Estado actual:"
    git status --short
    
    $mensaje = Read-Host "`n📝 Ingresa el mensaje del commit"
    
    if ([string]::IsNullOrWhiteSpace($mensaje)) {
        Write-Error "Mensaje de commit vacío. Operación cancelada."
        return
    }
    
    Write-Info "Agregando archivos..."
    git add .
    
    Write-Info "Creando commit..."
    git commit -m $mensaje
    
    if ($LASTEXITCODE -eq 0) {
        Write-Success "Commit creado exitosamente"
    } else {
        Write-Error "Error al crear commit"
    }
}

# Función para hacer push
function Do-Push {
    Write-Info "Subiendo cambios al repositorio remoto..."
    
    $branch = git rev-parse --abbrev-ref HEAD
    
    git push origin $branch
    
    if ($LASTEXITCODE -eq 0) {
        Write-Success "Cambios subidos correctamente a la rama: $branch"
    } else {
        Write-Error "Error al subir cambios"
        Write-Info "Tip: Si es la primera vez, prueba: git push -u origin $branch"
    }
}

# Función para mostrar estado
function Show-Status {
    Write-Info "Estado del repositorio:"
    git status
    
    Write-Info "`nÚltimos 5 commits:"
    git log --oneline --graph -5
}

# Función para mostrar log
function Show-Log {
    Write-Info "Historial de commits:"
    git log --oneline --graph --all --decorate -20
}

# Función para sincronizar (pull + push)
function Sync-Repo {
    Write-Info "Sincronizando con repositorio remoto..."
    
    $branch = git rev-parse --abbrev-ref HEAD
    
    Write-Info "Descargando cambios..."
    git pull origin $branch
    
    if ($LASTEXITCODE -ne 0) {
        Write-Error "Error al descargar cambios"
        return
    }
    
    Write-Info "Subiendo cambios locales..."
    git push origin $branch
    
    if ($LASTEXITCODE -eq 0) {
        Write-Success "Repositorio sincronizado"
    } else {
        Write-Error "Error al subir cambios"
    }
}

# Función para crear tag de versión
function Create-Tag {
    $version = Read-Host "📌 Ingresa la versión (ej: v2.0.0)"
    $descripcion = Read-Host "📝 Descripción breve"
    
    if ([string]::IsNullOrWhiteSpace($version)) {
        Write-Error "Versión vacía. Operación cancelada."
        return
    }
    
    git tag -a $version -m $descripcion
    git push origin --tags
    
    Write-Success "Tag $version creado y subido"
}

# Función para mostrar ayuda
function Show-Help {
    Write-Host "`n🚀 Git Helper - Agencia TecnoFuturo`n" -ForegroundColor Magenta
    Write-Host "Comandos disponibles:" -ForegroundColor Yellow
    Write-Host "  init     - Inicializar repositorio Git"
    Write-Host "  commit   - Crear commit con cambios actuales"
    Write-Host "  push     - Subir cambios al repositorio remoto"
    Write-Host "  status   - Ver estado y últimos commits"
    Write-Host "  log      - Ver historial completo"
    Write-Host "  sync     - Sincronizar (pull + push)"
    Write-Host "  tag      - Crear tag de versión"
    Write-Host "  help     - Mostrar esta ayuda"
    Write-Host "`nEjemplos:" -ForegroundColor Cyan
    Write-Host "  .\git-helper.ps1 commit"
    Write-Host "  .\git-helper.ps1 push"
    Write-Host "  .\git-helper.ps1 sync`n"
}

# Ejecutar comando
switch ($comando.ToLower()) {
    "init" { Initialize-Repo }
    "commit" { Do-Commit }
    "push" { Do-Push }
    "status" { Show-Status }
    "log" { Show-Log }
    "sync" { Sync-Repo }
    "tag" { Create-Tag }
    "help" { Show-Help }
    default { 
        Write-Warning "Comando desconocido: $comando"
        Show-Help 
    }
}
