/**
 * Agencia TecnoFuturo - Centro de Mando
 * Single Page Application con jQuery y Bootstrap 5
 */

(function($) {
    'use strict';

    // =================================
    // DATOS DE LAS MISIONES
    // =================================
    const missions = [
        {
            id: 'a1',
            number: 1,
            title: 'Conceptos clave de la tecnología digital',
            bloom: 'Recordar',
            bloomCategory: 'Lingüística',
            type: 'optativa',
            typeClass: 'bg-optativa',
            typeLabel: 'Optativa',
            lore: 'Accedemos al Panel de Datos del Centro de Mando. Aquí se almacenan los conceptos fundamentales de la tecnología digital. Antes de operar cualquier herramienta, debemos dominar el vocabulario técnico para evitar errores críticos.',
            instructions: [
                'Completa el crucigrama interactivo de Educaplay',
                'Identifica al menos 10 conceptos clave sobre tecnología, IA y uso responsable',
                'Registra mentalmente las definiciones para futuras misiones',
                'Esta actividad es optativa pero recomendada como base'
            ],
            embedHtml: '<iframe allow="fullscreen; autoplay; allow-top-navigation-by-user-activation" allowfullscreen width="795" height="690" frameborder="0" src="https://es.educaplay.com/juego/27737256-crucigrama_tecnologia_ia_y_uso_responsable.html"></iframe>',
            primaryAction: null,
            secondaryAction: null,
            image: 'assets/img/a1.png'
        },
        {
            id: 'a2',
            number: 2,
            title: 'La tecnología en acción',
            bloom: 'Comprender',
            bloomCategory: 'Visual-espacial',
            type: 'obligatoria',
            typeClass: 'bg-obligatoria',
            typeLabel: 'Obligatoria',
            lore: 'Activamos el Monitor de Observación. Un reporte audiovisual muestra cómo funciona realmente la inteligencia artificial. Tu misión es analizar el material y responder preguntas clave para demostrar comprensión profunda.',
            instructions: [
                'Visualiza el video interactivo completo en Educaplay',
                'Responde las preguntas de comprensión incrustadas',
                'Identifica componentes, procesos y aplicaciones de la IA',
                'Completa todas las respuestas para validar tu comprensión'
            ],
            embedHtml: '<iframe allow="fullscreen; autoplay; allow-top-navigation-by-user-activation" allowfullscreen width="795" height="690" frameborder="0" src="https://es.educaplay.com/juego/27737474-que_es_y_como_funciona_la_inteligencia_artificial.html"></iframe>',
            primaryAction: null,
            secondaryAction: null,
            image: 'assets/img/a2.png'
        },
        {
            id: 'a3',
            number: 3,
            title: 'Resolviendo un caso con IA',
            bloom: 'Aplicar',
            bloomCategory: 'Lógico-matemática',
            type: 'obligatoria',
            typeClass: 'bg-obligatoria',
            typeLabel: 'Obligatoria',
            lore: 'Encendemos la Consola de IA. Tienes acceso directo a ChatGPT para resolver un caso tecnológico. Recuerda: la IA es una herramienta de apoyo, no sustituye tu pensamiento crítico. Documenta cada paso.',
            instructions: [
                'Haz clic en el botón para acceder a ChatGPT en nueva pestaña',
                'Recibe el caso de estudio de tu docente',
                'Diseña prompts efectivos para obtener información y análisis',
                'Documenta tu proceso: problema, prompts usados, respuestas de la IA',
                'Elabora una solución crítica final (no copies directamente la IA)',
                'Entrega tu informe según indicaciones del docente'
            ],
            embedHtml: null,
            primaryAction: {
                label: 'Abrir ChatGPT',
                url: 'https://chatgpt.com/',
                target: '_blank',
                icon: 'bi-chat-dots-fill'
            },
            secondaryAction: null,
            notes: 'Usa ChatGPT con criterio. Evalúa críticamente sus respuestas y genera tus propias conclusiones.',
            image: 'assets/img/a3.png'
        },
        {
            id: 'a4',
            number: 4,
            title: 'Reflexión personal',
            bloom: 'Analizar',
            bloomCategory: 'Intrapersonal',
            type: 'refuerzo',
            typeClass: 'bg-refuerzo',
            typeLabel: 'Refuerzo',
            lore: 'Abrimos la Bitácora Personal del analista. Es momento de registrar evidencia: ¿cómo usas la tecnología diariamente? ¿Qué patrones identificas? ¿Qué debes mejorar? La honestidad es clave en este autodiagnóstico.',
            instructions: [
                'Accede al Padlet de reflexión personal (embebido abajo)',
                'Analiza tus hábitos tecnológicos con honestidad',
                'Identifica fortalezas y debilidades en tu uso digital',
                'Propón un plan de mejora personal con acciones concretas',
                'Publica tu reflexión en el Padlet'
            ],
            embedHtml: '<iframe src="https://padlet.com/embed/o0r6d91nyi3zbmxd" frameborder="0" allow="camera;microphone;geolocation;display-capture;clipboard-write" style="width:100%;height:608px;display:block;padding:0;margin:0"></iframe>',
            primaryAction: null,
            secondaryAction: null,
            image: 'assets/img/a4.png'
        },
        {
            id: 'a5',
            number: 5,
            title: 'Debate tecnológico',
            bloom: 'Evaluar',
            bloomCategory: 'Interpersonal',
            type: 'optativa',
            typeClass: 'bg-optativa',
            typeLabel: 'Optativa',
            lore: 'Conectamos la Mesa de Comunicaciones. Los analistas debaten posturas sobre dilemas tecnológicos actuales. Tu misión: argumentar con evidencias, escuchar con respeto, contraargumentar y coevaluar el trabajo de tus pares.',
            instructions: [
                'Lee el tema de debate planteado por tu docente',
                'Investiga y fundamenta tu postura con evidencias',
                'Participa en el Padlet con al menos 3 argumentos sólidos',
                'Responde a 2 compañeros con contraargumentos respetuosos',
                'Completa la coevaluación en Google Forms',
                'Mantén siempre la netiqueta y el respeto'
            ],
            embedHtml: '<iframe src="https://padlet.com/embed/f4x3inzh663ko611" frameborder="0" allow="camera;microphone;geolocation;display-capture;clipboard-write" style="width:100%;height:608px;display:block;padding:0;margin:0"></iframe>',
            primaryAction: {
                label: 'Abrir Debate (Padlet)',
                url: 'https://padlet.com/f4x3inzh663ko611',
                target: '_blank',
                icon: 'bi-chat-square-quote-fill'
            },
            secondaryAction: {
                label: 'Coevaluación (Forms)',
                url: 'https://docs.google.com/forms/d/e/1FAIpQLSffcN0HXWtkGFfVmy6v_1KauAZx4qtYE0e_6qT8vQpUMalfXQ/viewform',
                target: '_blank',
                icon: 'bi-clipboard-check-fill'
            },
            image: 'assets/img/a5.png'
        },
        {
            id: 'a6',
            number: 6,
            title: 'Creando un mensaje digital responsable',
            bloom: 'Crear',
            bloomCategory: 'Lingüística-digital',
            type: 'obligatoria',
            typeClass: 'bg-obligatoria',
            typeLabel: 'Obligatoria',
            lore: 'Entramos a la Sala de Difusión. Es momento de emitir tu informe final: un mensaje digital que promueva el uso responsable de la tecnología. Este es el producto culminante de tu recorrido como analista de la Agencia TecnoFuturo.',
            instructions: [
                'Crea un video original (60-90 segundos) sobre ciudadanía digital responsable',
                'Integra aprendizajes de todas las misiones anteriores',
                'Sube tu video a YouTube como "No listado" o "Público"',
                'Copia el enlace de tu video',
                'Completa el formulario de entrega con el enlace',
                'NO subas archivos de video directamente: solo el link de YouTube'
            ],
            embedHtml: null,
            primaryAction: {
                label: 'Entregar Video (Forms)',
                url: 'https://docs.google.com/forms/d/e/1FAIpQLSfTHoxk2LcvA2j7m_7GEw5fUnsWp3AbEWJihF2eSfFEPwoAzQ/viewform',
                target: '_blank',
                icon: 'bi-upload'
            },
            secondaryAction: null,
            notes: 'Recuerda: sube a YouTube primero, luego pega el enlace en el formulario. ¡Este es tu informe final!',
            image: 'assets/img/a6.png'
        }
    ];

    // =================================
    // CONFIGURACIÓN Y ESTADO
    // =================================
    let currentLayout = null;
    let tooltipInstances = [];
    let resizeTimer = null;
    let modalInstance = null;
    let instructionsModalInstance = null;
    let historiaModalInstance = null;
    let checklistModalInstance = null;
    let currentMissionId = null;
    let botPanelOpen = false;
    let navbarCollapse = null;
    
    // Referencias de audio
    let bgMusic = null;
    let audioPrincipal = null;
    let audioHover = null;
    let audioClick = null;
    let audioOpen = null;
    let audioClose = null;
    let isMuted = false;

    // =================================
    // MENSAJES DE AYUDA DEL BOT (COMPLETO)
    // =================================
    // Datos contextuales para cada misión con checklist y links
    const helperMessages = {
        a1: {
            number: 1,
            title: 'Conceptos clave — Panel de Datos',
            toolName: 'Panel de Datos',
            shortLore: 'Has activado el Panel de Datos del Centro de Mando. Antes de operar con IA, necesitas dominar el vocabulario esencial para analizar tecnología con precisión.',
            steps: [
                'Abre el crucigrama/glosario y revisa las definiciones.',
                'Completa la actividad sin adivinar: vuelve a leer las pistas si te equivocas.',
                'Al finalizar, registra 3 conceptos que te parecieron más importantes.'
            ],
            tip: 'Logras la misión si identificas correctamente los conceptos y puedes explicarlos con tus propias palabras.',
            checklist: [
                'Completé el recurso interactivo.',
                'Anoté 3 conceptos clave.',
                'Puedo explicar al menos 2 conceptos sin leer.'
            ],
            links: [
                { label: 'Abrir crucigrama (Educaplay)', url: '#' },
                { label: 'Volver al Centro de Mando', url: '#dashboard' }
            ]
        },
        a2: {
            number: 2,
            title: 'Video interactivo — Pantalla de Análisis',
            toolName: 'Pantalla de Análisis',
            shortLore: 'En la Pantalla de Análisis se revisan evidencias audiovisuales. Observa el informe y responde verificaciones para confirmar comprensión.',
            steps: [
                'Reproduce el video interactivo y responde las preguntas en los tiempos indicados.',
                'Si fallas una pregunta, revisa el fragmento y vuelve a intentarlo (si está permitido).',
                'Anota una idea clave del video y un ejemplo de IA en tu vida cotidiana.'
            ],
            tip: 'Logras la misión si respondes justificando y conectando el contenido con ejemplos reales.',
            checklist: [
                'Respondí todas las preguntas del video.',
                'Anoté 1 idea clave.',
                'Identifiqué 1 ejemplo cotidiano de IA.'
            ],
            links: [
                { label: 'Abrir video interactivo (Educaplay)', url: '#' },
                { label: 'Volver al Centro de Mando', url: '#dashboard' }
            ]
        },
        a3: {
            number: 3,
            title: 'Caso con IA — Consola de Inteligencia Artificial',
            toolName: 'Consola de IA',
            shortLore: 'La Consola de IA permite simular escenarios. Usa IA como apoyo, no como sustituto: analiza el caso, compara riesgos y beneficios, y emite juicio crítico.',
            steps: [
                'Entra a ChatGPT y pega el prompt de análisis del caso.',
                'Lee la respuesta y subraya: 2 beneficios, 2 riesgos y 1 criterio ético.',
                'Escribe tu conclusión personal: ¿qué aceptarías y qué limitarías?'
            ],
            tip: 'Logras la misión si tu conclusión es tuya, basada en argumentos, no una copia de la IA.',
            checklist: [
                'Usé ChatGPT con el prompt indicado.',
                'Identifiqué beneficios, riesgos y criterios éticos.',
                'Redacté mi conclusión personal.'
            ],
            links: [
                { label: 'Abrir ChatGPT', url: 'https://chatgpt.com/' },
                { label: 'Volver al Centro de Mando', url: '#dashboard' }
            ]
        },
        a4: {
            number: 4,
            title: 'Bitácora personal — Registro del Analista',
            toolName: 'Bitácora Digital',
            shortLore: 'En la Bitácora Personal registras tu diagnóstico como analista. Reflexiona sobre tu uso de tecnología y deja evidencia de aprendizaje consciente.',
            steps: [
                'Abre la bitácora y responde las 4 preguntas de reflexión.',
                'Incluye al menos un ejemplo real de tu experiencia digital.',
                'Cierra con un cambio concreto que harás para un uso más responsable.'
            ],
            tip: 'Logras la misión si tu reflexión es específica, honesta y propone un cambio real.',
            checklist: [
                'Respondí las 4 preguntas.',
                'Incluí 1 ejemplo personal.',
                'Propuse 1 cambio concreto.'
            ],
            links: [
                { label: 'Abrir Bitácora (Padlet)', url: '#' },
                { label: 'Volver al Centro de Mando', url: '#dashboard' }
            ]
        },
        a5: {
            number: 5,
            title: 'Debate y coevaluación — Mesa de Comunicaciones',
            toolName: 'Mesa de Comunicaciones',
            shortLore: 'La Mesa de Comunicaciones reúne posturas del equipo. Argumenta tu posición, responde con respeto y coevalúa usando criterios claros.',
            steps: [
                'Publica tu postura (6–8 líneas) respondiendo la pregunta de debate.',
                'Responde a 2 compañeros con argumentos y respeto.',
                'Completa la coevaluación en el formulario usando los criterios.'
            ],
            tip: 'Logras la misión si argumentas, consideras otras posturas y mantienes convivencia digital.',
            checklist: [
                'Publiqué mi postura con argumentos.',
                'Respondí a 2 compañeros respetuosamente.',
                'Completé la coevaluación.'
            ],
            links: [
                { label: 'Entrar al Debate (Padlet)', url: '#' },
                { label: 'Coevaluación (Google Forms)', url: '#' },
                { label: 'Volver al Centro de Mando', url: '#dashboard' }
            ]
        },
        a6: {
            number: 6,
            title: 'Mensaje final — Sala de Difusión',
            toolName: 'Sala de Difusión',
            shortLore: 'La Sala de Difusión transmite mensajes a la comunidad. Crea un video breve para promover uso responsable de tecnología e IA y entrégalo por el canal oficial.',
            steps: [
                'Crea un video de 60–90 segundos con un mensaje claro y responsable.',
                'Súbelo a YouTube como "No listado" o "Público" y copia el enlace.',
                'Entrega el enlace en el formulario oficial.'
            ],
            tip: 'Logras la misión si tu mensaje es claro, respetuoso y basado en lo aprendido (beneficios, riesgos y ética).',
            checklist: [
                'Creé el video (60–90 s).',
                'Lo subí a YouTube y copié el enlace.',
                'Entregué el enlace en el formulario.'
            ],
            links: [
                { label: 'Formulario de entrega (Google Forms)', url: 'https://docs.google.com/forms/d/e/1FAIpQLSfTHoxk2LcvA2j7m_7GEw5fUnsWp3AbEWJihF2eSfFEPwoAzQ/viewform?usp=publish-editor' },
                { label: 'Subir a YouTube', url: 'https://www.youtube.com/' },
                { label: 'Volver al Centro de Mando', url: '#dashboard' }
            ]
        }
    };

    // Posiciones de los utensilios según layout
    const positions = {
        desktop: [
            { id: 'a1', left: '12%', top: '58%' },
            { id: 'a2', left: '30%', top: '28%' },
            { id: 'a3', left: '48%', top: '52%' },
            { id: 'a4', left: '66%', top: '30%' },
            { id: 'a5', left: '78%', top: '56%' },
            { id: 'a6', left: '44%', top: '75%' }
        ],
        mobile: [
            { id: 'a1', left: '20%', top: '16%' },
            { id: 'a2', left: '62%', top: '28%' },
            { id: 'a3', left: '28%', top: '42%' },
            { id: 'a4', left: '62%', top: '56%' },
            { id: 'a5', left: '28%', top: '70%' },
            { id: 'a6', left: '50%', top: '84%' }
        ]
    };

    // =================================
    // FUNCIONES DE NAVEGACIÓN
    // =================================
    
    /**
     * Muestra el dashboard y oculta welcome
     */
    function showDashboard() {
        const $welcome = $('#welcome');
        const $dashboard = $('#dashboard');
        
        $welcome.addClass('fade-out');
        
        setTimeout(() => {
            $welcome.removeClass('active fade-out');
            $dashboard.addClass('active fade-in');
            
            // Renderizar utensilios en el layout correcto
            renderBoard();
            
            // Resaltar la siguiente actividad recomendada
            setTimeout(() => {
                highlightNextMission();
            }, 100);
            
            setTimeout(() => {
                $dashboard.removeClass('fade-in');
            }, 400);
        }, 400);
    }

    /**
     * Muestra welcome y oculta dashboard
     */
    function showWelcome() {
        const $dashboard = $('#dashboard');
        const $welcome = $('#welcome');
        
        // Limpiar tooltips antes de cambiar vista
        destroyTooltips();
        
        $dashboard.addClass('fade-out');
        
        setTimeout(() => {
            $dashboard.removeClass('active fade-out');
            $welcome.addClass('active fade-in');
            
            setTimeout(() => {
                $welcome.removeClass('fade-in');
            }, 400);
        }, 400);
    }

    // =================================
    // FUNCIONES DE RENDERIZADO
    // =================================
    
    /**
     * Determina si debe usar layout desktop o mobile
     */
    function getLayout() {
        return window.innerWidth >= 992 ? 'desktop' : 'mobile';
    }

    /**
     * Renderiza el tablero con los utensilios en las posiciones correctas
     */
    function renderBoard() {
        const layout = getLayout();
        
        // Si el layout no cambió, no renderizar de nuevo
        if (currentLayout === layout) {
            return;
        }
        
        currentLayout = layout;
        const $container = $('#boardContainer');
        
        // Limpiar tooltips existentes
        destroyTooltips();
        
        // Limpiar contenedor
        $container.empty();
        
        // Agregar clase de layout
        $container.removeClass('layout-desktop layout-mobile')
                  .addClass(`layout-${layout}`);
        
        // Obtener posiciones según layout
        const layoutPositions = positions[layout];
        
        // Renderizar cada utensilio
        layoutPositions.forEach(pos => {
            const mission = missions.find(m => m.id === pos.id);
            if (!mission) return;
            
            const $utensilio = createUtensilioButton(mission, pos);
            $container.append($utensilio);
        });
        
        // Inicializar tooltips de Bootstrap
        initializeTooltips();
    }

    /**
     * Crea el botón/hotspot de un utensilio
     */
    function createUtensilioButton(mission, position) {
        // Verificar si es la siguiente actividad recomendada
        const completedMissions = getCompletedMissions();
        const isNext = mission.number === (completedMissions.length + 1);
        const isCompleted = completedMissions.includes(mission.id);
        
        const $button = $('<button>', {
            class: `utensilio ${isNext ? 'tool-next' : ''} ${isCompleted ? 'is-complete' : ''}`,
            'data-mission-id': mission.id,
            'data-bs-toggle': 'tooltip',
            'data-bs-placement': 'top',
            'data-bs-title': `Actividad ${mission.number}: ${mission.title}`,
            'aria-label': `Actividad ${mission.number}: ${mission.title} - ${mission.typeLabel}`,
            css: {
                left: position.left,
                top: position.top
            }
        });
        
        // Número de actividad
        const $number = $('<span>', {
            class: 'tool-number',
            text: mission.number,
            'aria-hidden': 'true'
        });
        
        // Imagen del utensilio
        const $img = $('<img>', {
            src: mission.image,
            alt: mission.title,
            draggable: false
        });
        
        // Badge de tipo
        const $badge = $('<span>', {
            class: `badge utensilio-badge ${mission.typeClass}`,
            text: mission.typeLabel
        });
        
        $button.append($number, $img, $badge);
        
        // Event handler para abrir modal
        $button.on('click', () => openMissionModal(mission.id));
        
        return $button;
    }

    /**
     * Inicializa tooltips de Bootstrap
     */
    function initializeTooltips() {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        tooltipInstances = [...tooltipTriggerList].map(el => new bootstrap.Tooltip(el, {
            trigger: 'hover focus'
        }));
    }

    /**
     * Destruye tooltips existentes
     */
    function destroyTooltips() {
        tooltipInstances.forEach(tooltip => tooltip.dispose());
        tooltipInstances = [];
    }

    // =================================
    // FUNCIONES DE MODAL
    // =================================
    
    /**
     * Abre el modal con la información de una misión
     */
    function openMissionModal(missionId) {
        const mission = missions.find(m => m.id === missionId);
        if (!mission) return;
        
        // Reproducir sonido de apertura
        playSound(audioOpen);
        
        // Actualizar panel del bot con información contextual
        updateBotPanel(missionId);
        
        const $modal = $('#modalActividad');
        const $modalTitle = $('#modalActividadLabel');
        const $modalContent = $('#modalActividadContent');
        const $btnRecurso = $('#btnRecurso');
        
        // Actualizar título con número de actividad
        $modalTitle.text(`Actividad ${mission.number} – ${mission.title}`);
        
        // Generar contenido
        const content = generateMissionContent(mission);
        $modalContent.html(content);
        
        // Ocultar el botón "Ir al recurso" del footer (los botones están en el contenido)
        $btnRecurso.hide();
        
        // Mostrar modal
        if (!modalInstance) {
            modalInstance = new bootstrap.Modal($modal[0]);
        }
        
        modalInstance.show();
        
        // Focus management para accesibilidad
        $modal.one('shown.bs.modal', function() {
            $(this).find('.btn-close').focus();
        });
    }

    /**
     * Genera el HTML del contenido de una misión
     */
    function generateMissionContent(mission) {
        let html = '';
        
        // Badge de tipo
        html += `
            <div class="mb-3">
                <span class="activity-number">Actividad ${mission.number}</span>
                <span class="badge ${mission.typeClass} activity-badge">${mission.typeLabel}</span>
            </div>
        `;
        
        // Lore / Contexto narrativo
        html += `
            <div class="lore-box">
                <i class="bi bi-stars"></i>
                <strong>Contexto:</strong> ${mission.lore}
            </div>
        `;
        
        // Instrucciones
        html += `
            <div class="instructions-box">
                <h4><i class="bi bi-list-check me-2"></i>Instrucciones</h4>
                <ul>
        `;
        
        mission.instructions.forEach(instruction => {
            html += `<li>${instruction}</li>`;
        });
        
        html += `
                </ul>
            </div>
        `;
        
        // Embed (si existe)
        if (mission.embedHtml) {
            html += `
                <div class="action-box">
                    <h4><i class="bi bi-box-arrow-in-down me-2"></i>Acceso a la actividad</h4>
                    <div class="embed-responsive-box">
                        ${mission.embedHtml}
                    </div>
                </div>
            `;
        }
        
        // Acciones primarias y secundarias (botones)
        if (mission.primaryAction || mission.secondaryAction) {
            html += `
                <div class="action-box">
                    <h4><i class="bi bi-box-arrow-up-right me-2"></i>Acceso a la actividad</h4>
            `;
            
            if (mission.primaryAction) {
                html += `
                    <a href="${mission.primaryAction.url}" target="${mission.primaryAction.target}" 
                       rel="noopener noreferrer" class="btn btn-primary btn-lg">
                        <i class="bi ${mission.primaryAction.icon} me-2"></i>${mission.primaryAction.label}
                    </a>
                `;
            }
            
            if (mission.secondaryAction) {
                html += `
                    <div class="action-buttons">
                        <a href="${mission.secondaryAction.url}" target="${mission.secondaryAction.target}" 
                           rel="noopener noreferrer" class="btn btn-outline-primary">
                            <i class="bi ${mission.secondaryAction.icon} me-2"></i>${mission.secondaryAction.label}
                        </a>
                    </div>
                `;
            }
            
            html += `
                </div>
            `;
        }
        
        // Notas adicionales (si existen)
        if (mission.notes) {
            html += `
                <div class="alert alert-info mt-3">
                    <i class="bi bi-info-circle-fill me-2"></i>
                    <strong>Nota importante:</strong> ${mission.notes}
                </div>
            `;
        }
        
        // Información técnica (nivel de Bloom)
        html += `
            <div class="mt-4 pt-3" style="border-top: 1px solid rgba(0, 212, 255, 0.2);">
                <p class="text-muted mb-0">
                    <i class="bi bi-gem me-2"></i>
                    <strong>Nivel de Bloom:</strong> ${mission.bloom} | 
                    <strong>Inteligencia:</strong> ${mission.bloomCategory}
                </p>
            </div>
        `;
        
        return html;
    }

    // =================================
    // FUNCIONES DEL BOT ASISTENTE
    // =================================
    
    /**
     * Obtiene las misiones completadas desde localStorage
     */
    function getCompletedMissions() {
        const completed = localStorage.getItem('completedMissions');
        return completed ? JSON.parse(completed) : [];
    }
    
    /**
     * Marca una misión como completada
     */
    function markMissionCompleted(missionId) {
        const completed = getCompletedMissions();
        if (!completed.includes(missionId)) {
            completed.push(missionId);
            localStorage.setItem('completedMissions', JSON.stringify(completed));
            // Actualizar panel del bot para mostrar badge "Completada"
            updateBotPanel(missionId);
            // Resaltar siguiente misión
            highlightNextMission();
            // Opcional: agregar clase .is-complete al hotspot
            $(`.utensilio[data-mission-id="${missionId}"]`).addClass('is-complete');
        }
    }
    
    /**
     * Obtiene el estado del checklist de una misión desde localStorage
     */
    function getChecklistState(missionId) {
        const key = `checklist_${missionId}`;
        const state = localStorage.getItem(key);
        return state ? JSON.parse(state) : {};
    }
    
    /**
     * Guarda el estado del checklist de una misión en localStorage
     */
    function saveChecklistState(missionId, itemIndex, checked) {
        const key = `checklist_${missionId}`;
        const state = getChecklistState(missionId);
        state[itemIndex] = checked;
        localStorage.setItem(key, JSON.stringify(state));
    }
    
    /**
     * Verifica si todos los items del checklist están marcados
     */
    function isChecklistComplete(missionId) {
        const helper = helperMessages[missionId];
        if (!helper || !helper.checklist) return false;
        
        const state = getChecklistState(missionId);
        const totalItems = helper.checklist.length;
        let checkedCount = 0;
        
        for (let i = 0; i < totalItems; i++) {
            if (state[i] === true) checkedCount++;
        }
        
        return checkedCount === totalItems;
    }
    
    /**
     * Actualiza el panel del bot con información contextual COMPLETA
     * Incluye: título, lore, steps, tip, checklist dinámico, links y badge completada
     */
    function updateBotPanel(missionId) {
        currentMissionId = missionId;
        const helper = helperMessages[missionId];
        const mission = missions.find(m => m.id === missionId);
        
        if (!helper || !mission) return;
        
        const $helpContent = $('#botHelpContent');
        const isCompleted = getCompletedMissions().includes(missionId);
        const checklistState = getChecklistState(missionId);
        const checklistAllDone = isChecklistComplete(missionId);
        
        let html = '';
        
        // Título de la misión con número
        html += `
            <div class="bot-mission-header">
                <h4 class="bot-mission-title">
                    <span class="bot-mission-number">Misión ${helper.number}</span>
                    ${helper.title}
                </h4>
        `;
        
        // Badge "Completada" si aplica
        if (isCompleted) {
            html += `
                <span class="badge bg-success bot-completed-badge">
                    <i class="bi bi-check-circle-fill me-1"></i>Completada
                </span>
            `;
        }
        
        html += `</div>`;
        
        // Contexto (shortLore)
        html += `
            <p class="bot-message">
                <i class="bi bi-stars me-2"></i>
                <strong>Contexto:</strong> ${helper.shortLore}
            </p>
        `;
        
        // Qué hacer ahora (steps)
        html += `
            <div class="bot-tips">
                <p><strong>Qué hacer ahora:</strong></p>
                <ol class="bot-steps">
        `;
        
        helper.steps.forEach(step => {
            html += `<li>${step}</li>`;
        });
        
        html += `
                </ol>
            </div>
        `;
        
        // Consejo de logro (tip)
        html += `
            <div class="bot-tip">
                <p>
                    <i class="bi bi-lightbulb-fill me-2"></i>
                    <strong>Consejo de logro:</strong> ${helper.tip}
                </p>
            </div>
        `;
        
        // Checklist dinámico
        if (helper.checklist && helper.checklist.length > 0) {
            html += `
                <div class="bot-checklist">
                    <p><strong><i class="bi bi-list-check me-2"></i>Checklist de completitud:</strong></p>
            `;
            
            helper.checklist.forEach((item, index) => {
                const isChecked = checklistState[index] === true;
                const checkId = `check_${missionId}_${index}`;
                
                html += `
                    <div class="form-check bot-check-item">
                        <input class="form-check-input" type="checkbox" 
                               id="${checkId}" 
                               data-mission-id="${missionId}" 
                               data-item-index="${index}"
                               ${isChecked ? 'checked' : ''}>
                        <label class="form-check-label" for="${checkId}">
                            ${item}
                        </label>
                    </div>
                `;
            });
            
            html += `</div>`;
            
            // Mensaje si el checklist está completo
            if (checklistAllDone && !isCompleted) {
                html += `
                    <div class="alert alert-success bot-ready-alert">
                        <i class="bi bi-star-fill me-2"></i>
                        ¡Checklist completo! Ahora puedes marcar esta misión como completada.
                    </div>
                `;
            }
        }
        
        // Botón "Marcar misión como completada"
        if (!isCompleted) {
            html += `
                <button id="btnMarkCompleted" class="btn btn-success w-100 mt-3" 
                        data-mission-id="${missionId}"
                        ${!checklistAllDone ? 'disabled' : ''}>
                    <i class="bi bi-check-circle-fill me-2"></i>
                    Marcar misión como completada
                </button>
            `;
        } else {
            html += `
                <div class="alert alert-info mt-3">
                    <i class="bi bi-info-circle-fill me-2"></i>
                    Misión completada. ¡Excelente trabajo!
                </div>
            `;
        }
        
        // Links de acceso rápido
        if (helper.links && helper.links.length > 0) {
            html += `
                <div class="bot-links mt-3">
                    <p><strong><i class="bi bi-link-45deg me-2"></i>Acceso rápido:</strong></p>
            `;
            
            helper.links.forEach(link => {
                const isExternal = link.url.startsWith('http');
                const target = isExternal ? '_blank' : '_self';
                const rel = isExternal ? 'noopener noreferrer' : '';
                const icon = isExternal ? 'bi-box-arrow-up-right' : 'bi-arrow-return-left';
                
                html += `
                    <a href="${link.url}" target="${target}" ${rel ? `rel="${rel}"` : ''} 
                       class="btn btn-sm btn-outline-primary bot-link-btn">
                        <i class="bi ${icon} me-1"></i>${link.label}
                    </a>
                `;
            });
            
            html += `</div>`;
        }
        
        $helpContent.html(html);
        
        // Los event listeners se manejan mediante delegación de eventos
        // Ver sección de inicialización donde se configuran con $(document).on()
    }
    
    /**
     * Alterna la visibilidad del panel del bot
     */
    function toggleBotPanel() {
        const $panel = $('#botPanel');
        botPanelOpen = !botPanelOpen;
        
        if (botPanelOpen) {
            playSound(audioOpen);
            $panel.addClass('active');
            $panel.attr('aria-hidden', 'false');
            // Focus en el primer elemento interactivo
            setTimeout(() => {
                $panel.find('.bot-tab').first().focus();
            }, 100);
        } else {
            playSound(audioClose);
            $panel.removeClass('active');
            $panel.attr('aria-hidden', 'true');
            // Retornar focus al botón del bot
            $('#helperBot').focus();
        }
    }
    
    /**
     * Cambia entre tabs del panel del bot
     */
    function switchBotTab(tabName) {
        // Actualizar tabs
        $('.bot-tab').removeClass('active');
        $(`.bot-tab[data-tab="${tabName}"]`).addClass('active');
        
        // Actualizar contenido
        $('.bot-tab-content').removeClass('active');
        $(`#botTab${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`).addClass('active');
    }
    
    /**
     * Resalta la siguiente actividad recomendada
     */
    function highlightNextMission() {
        const completed = getCompletedMissions();
        const nextNumber = completed.length + 1;
        
        // Remover highlight de todos
        $('.utensilio').removeClass('tool-next');
        
        // Agregar highlight al siguiente
        if (nextNumber <= 6) {
            const nextMission = missions.find(m => m.number === nextNumber);
            if (nextMission) {
                $(`.utensilio[data-mission-id="${nextMission.id}"]`).addClass('tool-next');
            }
        }
    }

    // =================================
    // SISTEMA DE AUDIO
    // =================================
    
    /**
     * Inicializa el sistema de audio
     * Todos los archivos deben estar en assets/audio/
     * Si no existen, el sistema funciona con fallback silencioso
     */
    function initAudioSystem() {
        console.log('🎵 Inicializando sistema de audio...');
        
        // Obtener referencias a los elementos de audio
        bgMusic = document.getElementById('bgMusic');
        audioPrincipal = document.getElementById('audioPrincipal');
        audioHover = document.getElementById('audioHover');
        audioClick = document.getElementById('audioClick');
        audioOpen = document.getElementById('audioOpen');
        audioClose = document.getElementById('audioClose');
        
        console.log('Música de fondo (Dashboard):', bgMusic ? '✅ Cargado' : '❌ No encontrado');
        console.log('Música principal (Welcome):', audioPrincipal ? '✅ Cargado' : '❌ No encontrado');
        console.log('Efecto hover:', audioHover ? '✅ Cargado' : '❌ No encontrado');
        console.log('Efecto click:', audioClick ? '✅ Cargado' : '❌ No encontrado');
        console.log('Efecto open:', audioOpen ? '✅ Cargado' : '❌ No encontrado');
        console.log('Efecto close:', audioClose ? '✅ Cargado' : '❌ No encontrado');
        
        // Cargar preferencia de mute desde localStorage
        const savedMute = localStorage.getItem('audioMuted');
        isMuted = savedMute === 'true';
        
        console.log('Estado inicial de mute:', isMuted ? 'SILENCIADO' : 'ACTIVO');
        
        // Actualizar UI del botón mute
        updateMuteButton();
        
        // Si está muted, pausar música
        if (isMuted) {
            if (bgMusic) bgMusic.pause();
            if (audioPrincipal) audioPrincipal.pause();
        } else {
            // Iniciar música principal en Welcome
            startPrincipalMusic();
        }
        
        console.log('✅ Sistema de audio inicializado');
    }
    
    /**
     * Reproduce un sonido de manera segura (con fallback silencioso)
     */
    function playSound(audioElement) {
        if (!audioElement) {
            console.warn('⚠️ playSound: audioElement es null');
            return;
        }
        
        if (isMuted) {
            console.log('🔇 playSound: Audio silenciado por usuario');
            return;
        }
        
        try {
            // Clonar para permitir múltiples reproducciones simultáneas
            const sound = audioElement.cloneNode();
            sound.volume = 0.7; // Volumen alto para efectos
            
            const playPromise = sound.play();
            
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        console.log('✅ Sonido reproducido correctamente:', audioElement.id);
                    })
                    .catch(err => {
                        console.error('❌ Error reproduciendo sonido:', audioElement.id, err.message);
                        // Intentar reproducir de nuevo después de interacción
                        console.log('🔄 Intentando reproducir de nuevo...');
                    });
            }
        } catch (err) {
            console.error('❌ Excepción en playSound:', err.message, err);
        }
    }
    
    /**
     * Inicia la música principal (Welcome screen)
     */
    function startPrincipalMusic() {
        if (!audioPrincipal || isMuted) return;
        
        try {
            audioPrincipal.volume = 0.25;
            audioPrincipal.play().catch(err => {
                console.debug('Principal music not available:', err.message);
            });
        } catch (err) {
            console.debug('Principal music error:', err);
        }
    }
    
    /**
     * Inicia la música de fondo (Dashboard)
     * Solo se llama cuando el usuario presiona "Entrar" (user interaction)
     */
    function startBackgroundMusic() {
        // Detener música principal si está sonando
        if (audioPrincipal) {
            audioPrincipal.pause();
            audioPrincipal.currentTime = 0;
        }
        
        if (!bgMusic || isMuted) return;
        
        try {
            bgMusic.volume = 0.2; // Volumen bajo para no molestar
            bgMusic.play().catch(err => {
                console.debug('Background music not available:', err.message);
            });
        } catch (err) {
            console.debug('Background music error:', err);
        }
    }
    
    /**
     * Alterna entre mute/unmute
     */
    function toggleMute() {
        isMuted = !isMuted;
        localStorage.setItem('audioMuted', isMuted);
        
        if (isMuted) {
            if (bgMusic) bgMusic.pause();
            if (audioPrincipal) audioPrincipal.pause();
        } else {
            // Reanudar música según la sección activa
            if ($('#dashboard').hasClass('active')) {
                if (bgMusic) bgMusic.play().catch(err => console.debug('Music resume failed:', err));
            } else if ($('#welcome').hasClass('active')) {
                if (audioPrincipal) audioPrincipal.play().catch(err => console.debug('Music resume failed:', err));
            }
        }
        
        updateMuteButton();
    }
    
    /**
     * Actualiza el icono del botón mute
     */
    function updateMuteButton() {
        const $iconSound = $('#iconSound');
        const $btn = $('#btnMuteToggle');
        
        if (isMuted) {
            $iconSound.attr('src', 'assets/img/iconos/sound-off.png');
            $iconSound.attr('alt', 'Sonido desactivado');
            $btn.addClass('muted');
            $btn.attr('aria-label', 'Activar música y efectos');
            $btn.attr('title', 'Activar música y efectos');
        } else {
            $iconSound.attr('src', 'assets/img/iconos/sound-on.png');
            $iconSound.attr('alt', 'Sonido activado');
            $btn.removeClass('muted');
            $btn.attr('aria-label', 'Silenciar música y efectos');
            $btn.attr('title', 'Silenciar música y efectos');
        }
        
        console.log(`🔊 Estado de audio: ${isMuted ? 'MUTED' : 'UNMUTED'}`);
    }
    
    /**
     * Agrega eventos de sonido a elementos interactivos
     */
    function attachSoundEvents() {
        console.log('🎵 Configurando eventos de sonido...');
        
        // Verificar que los elementos de audio existan
        console.log('AudioHover:', audioHover ? '✅' : '❌', audioHover?.src);
        console.log('AudioClick:', audioClick ? '✅' : '❌', audioClick?.src);
        console.log('AudioOpen:', audioOpen ? '✅' : '❌', audioOpen?.src);
        console.log('AudioClose:', audioClose ? '✅' : '❌', audioClose?.src);
        
        // Sonido hover en cualquier elemento interactivo
        $(document).on('mouseenter', 'button, .utensilio, a.btn, .nav-btn, .helper-bot, .checklist-navbar, input, select', function() {
            console.log('👆 Hover detectado en:', this.id || this.className);
            playSound(audioHover);
        });
        
        // Sonido click/tap en cualquier elemento interactivo
        $(document).on('click', 'button, .utensilio, a.btn, .nav-btn, .helper-bot, .checklist-navbar, input[type="submit"], input[type="button"]', function() {
            console.log('👆 Click detectado en:', this.id || this.className);
            playSound(audioClick);
        });
        
        // Evento adicional para focus en navegación por teclado
        $(document).on('focus', 'button, .utensilio, a.btn, .nav-btn, .helper-bot, .checklist-navbar', function(e) {
            // Evitar sonido si viene del mouse (ya se disparó mouseenter)
            if (e.isTrusted && e.originalEvent && e.originalEvent.sourceCapabilities && e.originalEvent.sourceCapabilities.firesTouchEvents === false) {
                // Es del mouse, ya sonó
                return;
            }
            // Sonido para navegación por teclado
            console.log('⌨️ Focus por teclado en:', this.id || this.className);
            playSound(audioHover);
        });
        
        console.log('✅ Eventos de sonido configurados');
    }

    // =================================
    // CHECKLIST GLOBAL
    // =================================
    
    /**
     * Renderiza el modal de checklist global con progreso
     */
    function renderChecklistGlobal() {
        const completedMissions = getCompletedMissions();
        const totalMissions = missions.length;
        const completedCount = completedMissions.length;
        const progressPercent = Math.round((completedCount / totalMissions) * 100);
        
        // Actualizar barra de progreso
        $('#progressBar').css('width', progressPercent + '%')
                         .attr('aria-valuenow', progressPercent)
                         .text(progressPercent + '%');
        $('#progressText').text(`${completedCount} / ${totalMissions} completadas`);
        
        // Renderizar lista de misiones
        const $list = $('#checklistMissionsList');
        $list.empty();
        
        missions.forEach(mission => {
            const isCompleted = completedMissions.includes(mission.id);
            const helper = helperMessages[mission.id];
            const checklistState = getChecklistState(mission.id);
            const checklistComplete = isChecklistComplete(mission.id);
            
            // Determinar estado
            let status = 'pending';
            let statusLabel = 'Pendiente';
            if (isCompleted) {
                status = 'completed';
                statusLabel = 'Completada';
            } else if (checklistComplete) {
                status = 'in-progress';
                statusLabel = 'Lista para completar';
            } else if (Object.keys(checklistState).length > 0) {
                status = 'in-progress';
                statusLabel = 'En progreso';
            }
            
            let html = `
                <div class="checklist-mission-item ${isCompleted ? 'completed' : ''}">
                    <div class="checklist-mission-header">
                        <div class="checklist-mission-title">
                            <span class="checklist-mission-number">${mission.number}</span>
                            <span>${mission.title}</span>
                        </div>
                        <span class="checklist-mission-status status-${status}">${statusLabel}</span>
                    </div>
            `;
            
            // Si hay checklist, mostrar subitems
            if (helper && helper.checklist) {
                const checkedCount = Object.values(checklistState).filter(v => v === true).length;
                const totalItems = helper.checklist.length;
                
                html += `
                    <div class="checklist-mission-subitems">
                        <small class="d-block mb-2"><strong>Items (${checkedCount}/${totalItems}):</strong></small>
                `;
                
                helper.checklist.forEach((item, index) => {
                    const isChecked = checklistState[index] === true;
                    html += `
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" 
                                   id="global_${mission.id}_${index}" 
                                   ${isChecked ? 'checked' : ''} disabled>
                            <label class="form-check-label" for="global_${mission.id}_${index}">
                                ${item}
                            </label>
                        </div>
                    `;
                });
                
                html += `</div>`;
            }
            
            html += `</div>`;
            $list.append(html);
        });
    }
    
    /**
     * Abre el modal de checklist global
     */
    function openChecklistGlobal() {
        renderChecklistGlobal();
        if (checklistModalInstance) {
            checklistModalInstance.show();
        }
    }

    // =================================
    // NAVBAR COLLAPSE AUTOMÁTICO
    // =================================
    
    /**
     * Cierra el navbar collapse si está abierto
     */
    function closeNavbar() {
        if (navbarCollapse && $('#navbarMain').hasClass('show')) {
            navbarCollapse.hide();
        }
    }

    // =================================
    // MANEJO DE RESIZE
    // =================================
    
    /**
     * Maneja el resize de la ventana con debounce
     */
    function handleResize() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if ($('#dashboard').hasClass('active')) {
                renderBoard();
            }
        }, 250);
    }

    // =================================
    // INICIALIZACIÓN
    // =================================
    
    /**
     * Inicializa la aplicación
     */
    function init() {
        console.log('🚀 Agencia TecnoFuturo iniciada');
        
        // Inicializar sistema de audio
        initAudioSystem();
        attachSoundEvents();
        
        // Registrar Service Worker para PWA
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(reg => console.log('✅ Service Worker registrado:', reg.scope))
                .catch(err => console.debug('Service Worker no disponible:', err));
        }
        
        // Inicializar modales
        const $modalActividad = $('#modalActividad');
        const $modalInstrucciones = $('#modalInstrucciones');
        const $modalHistoria = $('#modalHistoria');
        const $modalChecklistGlobal = $('#modalChecklistGlobal');
        
        if ($modalActividad.length) {
            modalInstance = new bootstrap.Modal($modalActividad[0], {
                keyboard: true,
                focus: true
            });
        }
        
        if ($modalInstrucciones.length) {
            instructionsModalInstance = new bootstrap.Modal($modalInstrucciones[0], {
                keyboard: true,
                focus: true
            });
        }
        
        if ($modalHistoria.length) {
            historiaModalInstance = new bootstrap.Modal($modalHistoria[0], {
                keyboard: true,
                focus: true
            });
        }
        
        if ($modalChecklistGlobal.length) {
            checklistModalInstance = new bootstrap.Modal($modalChecklistGlobal[0], {
                keyboard: true,
                focus: true
            });
        }
        
        // Inicializar navbar collapse
        const navbarElement = document.getElementById('navbarMain');
        if (navbarElement) {
            navbarCollapse = new bootstrap.Collapse(navbarElement, {
                toggle: false
            });
        }
        
        // Event listeners - Botón Entrar (inicia música)
        $('#btnEntrar').on('click', function() {
            playSound(audioClick);
            startBackgroundMusic(); // Iniciar música al entrar (user interaction)
            showDashboard();
        });
        
        // Botones del Welcome
        $('#btnHistoriaWelcome').on('click', () => {
            if (historiaModalInstance) {
                playSound(audioClick);
                historiaModalInstance.show();
            }
        });
        
        $('#btnInstruccionesWelcome').on('click', () => {
            if (instructionsModalInstance) {
                playSound(audioClick);
                instructionsModalInstance.show();
            }
        });
        
        // Botones del Navbar (cierran el collapse automáticamente)
        $('#btnInicio').on('click', function() {
            closeNavbar();
            showWelcome();
        });
        
        $('#btnInstrucciones').on('click', () => {
            closeNavbar();
            if (instructionsModalInstance) {
                instructionsModalInstance.show();
            }
        });
        
        $('#btnHistoria').on('click', () => {
            closeNavbar();
            if (historiaModalInstance) {
                historiaModalInstance.show();
            }
        });
        
        $('#btnChecklistNavbar').on('click', () => {
            openChecklistGlobal();
        });
        
        // Botón Mute/Unmute
        $('#btnMuteToggle').on('click', toggleMute);
        
        // Botón "Comenzar Misión 1" desde el modal de Historia
        $('#btnComenzarMision1').on('click', () => {
            if (historiaModalInstance) {
                historiaModalInstance.hide();
            }
            // Pequeño delay para que se cierre el modal antes de abrir el siguiente
            setTimeout(() => {
                openMissionModal('a1');
            }, 300);
        });
        
        // Event listeners del Bot Asistente
        $('#helperBot').on('click', toggleBotPanel);
        $('#closeBotPanel').on('click', toggleBotPanel);
        
        // Tabs del bot
        $('.bot-tab').on('click', function() {
            const tabName = $(this).data('tab');
            switchBotTab(tabName);
        });
        
        // Botón "Abrir historia completa" desde el bot
        $('#btnOpenHistoriaFromBot').on('click', () => {
            if (historiaModalInstance) {
                historiaModalInstance.show();
            }
        });
        
        // Event listeners del bot con delegación de eventos (para contenido dinámico)
        $(document).on('change', '.bot-check-item input[type="checkbox"]', function() {
            const mId = $(this).data('mission-id');
            const itemIndex = $(this).data('item-index');
            const isChecked = $(this).is(':checked');
            
            saveChecklistState(mId, itemIndex, isChecked);
            
            // Re-renderizar para actualizar el botón "Marcar como completada"
            updateBotPanel(mId);
        });
        
        $(document).on('click', '#btnMarkCompleted', function() {
            const mId = $(this).data('mission-id');
            markMissionCompleted(mId);
        });
        
        // Cerrar panel del bot al hacer clic fuera
        $(document).on('click', function(e) {
            if (botPanelOpen && 
                !$(e.target).closest('#botPanel').length && 
                !$(e.target).closest('#helperBot').length) {
                toggleBotPanel();
            }
        });
        
        // Al cerrar el modal de actividad, NO marcar como completada automáticamente
        // El usuario debe hacerlo manualmente con el botón "Marcar como completada"
        $('#modalActividad').on('hidden.bs.modal', function() {
            playSound(audioClose);
            // Solo actualizar el highlight de la siguiente misión
            highlightNextMission();
        });
        
        // Resize listener con debounce
        $(window).on('resize', handleResize);
        
        // Manejo de teclado para accesibilidad
        $(document).on('keydown', function(e) {
            // Escape para cerrar modales y panel del bot
            if (e.key === 'Escape') {
                if (botPanelOpen) {
                    toggleBotPanel();
                    return;
                }
                if (modalInstance && $('#modalActividad').hasClass('show')) {
                    modalInstance.hide();
                }
                if (instructionsModalInstance && $('#modalInstrucciones').hasClass('show')) {
                    instructionsModalInstance.hide();
                }
                if (historiaModalInstance && $('#modalHistoria').hasClass('show')) {
                    historiaModalInstance.hide();
                }
            }
        });
        
        // Focus management para modales
        $('#modalInstrucciones, #modalHistoria, #modalChecklist').on('hidden.bs.modal', function() {
            playSound(audioClose);
            // Retornar focus al último elemento activo
            const $activeElement = $(document.activeElement);
            if ($activeElement.hasClass('utensilio')) {
                $activeElement.focus();
            }
        });
        
        console.log('✅ Eventos inicializados');
        console.log(`📦 ${missions.length} misiones cargadas`);
    }

    // =================================
    // EJECUCIÓN AL CARGAR EL DOM
    // =================================
    
    $(document).ready(function() {
        init();
        console.log('✨ Aplicación lista');
    });

})(jQuery);
