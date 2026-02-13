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
            lore: 'Ingresas al Panel de Datos del Centro de Mando. El equipo interdisciplinario necesita este vocabulario para analizar desafios reales y avanzar sin errores.',
            instructions: [
                'Activa el crucigrama interactivo de Educaplay',
                'Identifica al menos 10 conceptos clave sobre tecnologia, IA y uso responsable',
                'Registra las definiciones para las misiones siguientes',
                'Esta actividad es optativa, pero es la base del recorrido'
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
            lore: 'El Monitor de Observacion se enciende. El equipo revisa un informe audiovisual para comprender como opera la inteligencia artificial antes de decidir.',
            instructions: [
                'Visualiza el video interactivo completo en Educaplay',
                'Responde las preguntas de comprension incrustadas',
                'Identifica componentes, procesos y aplicaciones de la IA',
                'Completa todas las respuestas para validar tu comprension'
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
            lore: 'La Consola de IA queda activa. El equipo enfrenta un caso real y usa IA como apoyo. La decision final es humana y debe estar documentada.',
            instructions: [
                'Haz clic en el boton para acceder a ChatGPT en nueva pestana',
                'Recibe el caso de estudio de tu docente',
                'Disena prompts efectivos para obtener informacion y analisis',
                'Documenta tu proceso: problema, prompts usados, respuestas de la IA',
                'Elabora una solucion critica final (no copies directamente la IA)',
                'Entrega tu informe segun indicaciones del docente'
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
            lore: 'La Bitacora Personal se abre. Cada integrante registra evidencia de uso digital, identifica patrones y propone mejoras para el bien comun.',
            instructions: [
                'Accede al Padlet de reflexion personal (embebido abajo)',
                'Analiza tus habitos tecnologicos con honestidad',
                'Identifica fortalezas y debilidades en tu uso digital',
                'Propon un plan de mejora personal con acciones concretas',
                'Publica tu reflexion en el Padlet'
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
            lore: 'La Mesa de Comunicaciones conecta al equipo. Se debaten dilemas reales y se evalua el impacto de cada decision con evidencia.',
            instructions: [
                'Lee el tema de debate planteado por tu docente',
                'Investiga y fundamenta tu postura con evidencia',
                'Participa en el Padlet con al menos 3 argumentos solidos',
                'Responde a 2 companeros con contraargumentos respetuosos',
                'Completa la coevaluacion en Google Forms',
                'Manten siempre la netiqueta y el respeto'
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
            lore: 'La Sala de Difusion abre el canal final. Aqui el equipo transforma conocimiento en accion y entrega un mensaje responsable a la comunidad.',
            instructions: [
                'Crea un video original (60-90 segundos) sobre ciudadania digital responsable',
                'Integra aprendizajes de todas las misiones anteriores',
                'Sube tu video a YouTube como "No listado" o "Publico"',
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
    let historiaSummaryModalInstance = null;
    let currentMissionId = null;
    let botPanelOpen = false;
    let navbarCollapse = null;
    let autoStartAfterHistoria = false;
    
    // Referencias de audio
    let bgMusic = null;
    let audioPrincipal = null;
    let audioHover = null;
    let audioClick = null;
    let audioOpen = null;
    let audioClose = null;
    let isMuted = false;
    
    // Control de throttle para sonidos
    let lastHoverTime = 0;
    let lastHoverElement = null;
    let activeSounds = [];
    const HOVER_THROTTLE_MS = 300; // Mínimo 300ms entre sonidos hover
    const MAX_SIMULTANEOUS_SOUNDS = 3; // Máximo 3 sonidos simultáneos

    // =================================
    // MENSAJES DE AYUDA DEL BOT (COMPLETO)
    // =================================
    // Datos contextuales para cada misión con checklist y links
    const helperMessages = {
        a1: {
            number: 1,
            title: 'Panel de Datos — Claves del lenguaje',
            toolName: 'Panel de Datos',
            shortLore: 'Entras al Panel de Datos. Aqui se guardan las palabras que abren todas las misiones. Sin este vocabulario, el sistema no se deja operar.',
            theoryTitle: 'Conceptos basicos para iniciar la mision',
            theoryContent: `
                <details class="theory-section" open>
                    <summary>Tecnologia Digital</summary>
                    <p class="mt-2"><strong>Definicion corta:</strong> Conjunto de herramientas electronicas que permiten crear y comunicar informacion.</p>
                    <p><strong>Definicion ampliada:</strong> La tecnologia digital se refiere al uso de dispositivos electronicos y sistemas computacionales que procesan informacion en formato digital (codigos binarios), como computadores, celulares e internet.</p>
                    <p><strong>Ejemplo:</strong> Enviar un mensaje por WhatsApp o usar una plataforma educativa.</p>
                </details>
                <details class="theory-section">
                    <summary>Inteligencia Artificial (IA)</summary>
                    <p class="mt-2"><strong>Definicion corta:</strong> Tecnologia que imita ciertas capacidades humanas mediante datos y algoritmos.</p>
                    <p><strong>Definicion ampliada:</strong> La inteligencia artificial es una rama de la tecnologia que permite a los sistemas informaticos realizar tareas que normalmente requieren inteligencia humana, como reconocer imagenes, analizar informacion o tomar decisiones.</p>
                    <p><strong>Ejemplo:</strong> Recomendaciones de Netflix o respuestas de ChatGPT.</p>
                </details>
                <details class="theory-section">
                    <summary>Algoritmo</summary>
                    <p class="mt-2"><strong>Definicion corta:</strong> Secuencia ordenada de pasos para resolver un problema.</p>
                    <p><strong>Definicion ampliada:</strong> Un algoritmo es un conjunto de instrucciones organizadas que indican como realizar una tarea o resolver una situacion especifica.</p>
                    <p><strong>Ejemplo:</strong> La receta de cocina o el orden de operaciones en una aplicacion.</p>
                </details>
                <details class="theory-section">
                    <summary>Datos</summary>
                    <p class="mt-2"><strong>Definicion corta:</strong> Informacion que los sistemas utilizan para funcionar o aprender.</p>
                    <p><strong>Definicion ampliada:</strong> Los datos son elementos de informacion (numeros, textos, imagenes, sonidos) que permiten a los sistemas digitales procesar, analizar y generar resultados.</p>
                    <p><strong>Ejemplo:</strong> Las busquedas que realizas en Google.</p>
                </details>
                <details class="theory-section">
                    <summary>Automatizacion</summary>
                    <p class="mt-2"><strong>Definicion corta:</strong> Uso de tecnologia para realizar tareas automaticamente.</p>
                    <p><strong>Definicion ampliada:</strong> La automatizacion consiste en delegar a sistemas tecnologicos la ejecucion de tareas repetitivas o complejas sin intervencion constante de una persona.</p>
                    <p><strong>Ejemplo:</strong> Un semaforo inteligente o un chatbot de atencion al cliente.</p>
                </details>
                <details class="theory-section">
                    <summary>Privacidad Digital</summary>
                    <p class="mt-2"><strong>Definicion corta:</strong> Proteccion de la informacion personal en internet.</p>
                    <p><strong>Definicion ampliada:</strong> La privacidad digital implica resguardar los datos personales y controlar que informacion compartimos en entornos digitales.</p>
                    <p><strong>Ejemplo:</strong> Configurar quien puede ver tus publicaciones en redes sociales.</p>
                </details>
                <details class="theory-section">
                    <summary>Etica Digital</summary>
                    <p class="mt-2"><strong>Definicion corta:</strong> Normas y valores que orientan el uso responsable de la tecnologia.</p>
                    <p><strong>Definicion ampliada:</strong> La etica digital se refiere a los principios que regulan el comportamiento en entornos tecnologicos, promoviendo respeto, responsabilidad y uso consciente.</p>
                    <p><strong>Ejemplo:</strong> No usar IA para copiar tareas sin reflexion.</p>
                </details>
                <details class="theory-section">
                    <summary>Usuario</summary>
                    <p class="mt-2"><strong>Definicion corta:</strong> Persona que utiliza una tecnologia o sistema digital.</p>
                    <p><strong>Definicion ampliada:</strong> El usuario es quien interactua con dispositivos, aplicaciones o plataformas digitales.</p>
                    <p><strong>Ejemplo:</strong> Un estudiante que utiliza una plataforma educativa.</p>
                </details>
                <details class="theory-section">
                    <summary>Internet</summary>
                    <p class="mt-2"><strong>Definicion corta:</strong> Red mundial que conecta dispositivos para compartir informacion.</p>
                    <p><strong>Definicion ampliada:</strong> Internet es una red global de comunicacion que permite el intercambio de informacion entre dispositivos conectados.</p>
                    <p><strong>Ejemplo:</strong> Buscar informacion en linea.</p>
                </details>
                <details class="theory-section">
                    <summary>Aprendizaje Automatico (Machine Learning)</summary>
                    <p class="mt-2"><strong>Definicion corta:</strong> Sistema que mejora su funcionamiento a partir de datos.</p>
                    <p><strong>Definicion ampliada:</strong> Es una tecnica dentro de la inteligencia artificial que permite a los sistemas aprender patrones a partir de grandes cantidades de datos sin ser programados paso a paso.</p>
                    <p><strong>Ejemplo:</strong> El reconocimiento facial en el celular.</p>
                </details>
            `,
            steps: [
                'Abre la guia de conceptos: es la llave para el crucigrama.',
                'Recorre el glosario y reconoce las definiciones clave.',
                'Resuelve el crucigrama sin adivinar; relee pistas si fallas.',
                'Guarda 3 conceptos que sostendran las misiones siguientes.'
            ],
            tip: 'Mision lograda si puedes explicar los conceptos con tus propias palabras. Marca la mision completada para recibir tu medalla.',
            checklist: [
                'Revisé el vocabulario con Atect Bot.',
                'Resolvi el crucigrama sin adivinar.',
                'Anote 3 conceptos clave.',
                'Puedo explicar 2 conceptos sin leer.'
            ],
            links: [
                { label: 'Abrir conceptos clave 🤖', url: '#theory-a1', isTheory: true },
                { label: 'Entrar al crucigrama (Educaplay)', url: '#' },
                { label: 'Volver al Centro de Mando', url: '#dashboard' }
            ]
        },
        a2: {
            number: 2,
            title: 'Pantalla de Analisis — Informe en vivo',
            toolName: 'Pantalla de Analisis',
            shortLore: 'La Pantalla de Analisis se enciende. El informe llega en video y tu tarea es interpretar cada pista para avanzar.',
            steps: [
                'Reproduce el informe y responde las preguntas cuando aparezcan.',
                'Si fallas, vuelve al fragmento y observa de nuevo.',
                'Anota una idea clave y un ejemplo real de IA en tu entorno.'
            ],
            tip: 'Mision lograda si conectas el informe con ejemplos reales y justificas tus respuestas. Marca la mision completada para recibir tu medalla.',
            checklist: [
                'Respondi todas las preguntas del video.',
                'Anote 1 idea clave.',
                'Identifique 1 ejemplo cotidiano de IA.'
            ],
            links: [
                { label: 'Entrar al informe interactivo (Educaplay)', url: '#' },
                { label: 'Volver al Centro de Mando', url: '#dashboard' }
            ]
        },
        a3: {
            number: 3,
            title: 'Consola de IA — Caso en desarrollo',
            toolName: 'Consola de IA',
            shortLore: 'La Consola de IA abre un caso. La inteligencia artificial es tu apoyo, pero el juicio final es tuyo.',
            steps: [
                'Entra a ChatGPT y analiza el caso con el prompt indicado.',
                'Extrae 2 beneficios, 2 riesgos y 1 criterio etico.',
                'Redacta tu conclusion personal: que aceptas y que limitas.'
            ],
            tip: 'Mision lograda si tu conclusion es tuya y esta basada en argumentos. Marca la mision completada para recibir tu medalla.',
            checklist: [
                'Use ChatGPT con el prompt indicado.',
                'Identifique beneficios, riesgos y criterios eticos.',
                'Redacte mi conclusion personal.'
            ],
            links: [
                { label: 'Abrir ChatGPT (Consola)', url: 'https://chatgpt.com/' },
                { label: 'Volver al Centro de Mando', url: '#dashboard' }
            ]
        },
        a4: {
            number: 4,
            title: 'Bitacora personal — Registro del analista',
            toolName: 'Bitácora Digital',
            shortLore: 'La Bitacora abre un espacio de honestidad. Aqui registras tu diagnostico y dejas evidencia de aprendizaje consciente.',
            steps: [
                'Abre la bitacora y responde las 4 preguntas de reflexion.',
                'Incluye un ejemplo real de tu experiencia digital.',
                'Cierra con un cambio concreto para un uso mas responsable.'
            ],
            tip: 'Mision lograda si tu reflexion es especifica, honesta y propone un cambio real. Marca la mision completada para recibir tu medalla.',
            checklist: [
                'Respondi las 4 preguntas.',
                'Inclui 1 ejemplo personal.',
                'Propuse 1 cambio concreto.'
            ],
            links: [
                { label: 'Abrir Bitacora (Padlet)', url: '#' },
                { label: 'Volver al Centro de Mando', url: '#dashboard' }
            ]
        },
        a5: {
            number: 5,
            title: 'Mesa de Comunicaciones — Debate y coevaluacion',
            toolName: 'Mesa de Comunicaciones',
            shortLore: 'La Mesa de Comunicaciones conecta al equipo. Argumenta con evidencia, escucha y responde con respeto.',
            steps: [
                'Publica tu postura y responde la pregunta de debate.',
                'Responde a 2 companeros con argumentos y respeto.',
                'Completa la coevaluacion con criterios claros.'
            ],
            tip: 'Mision lograda si argumentas, consideras otras posturas y cuidas la convivencia digital. Marca la mision completada para recibir tu medalla.',
            checklist: [
                'Publique mi postura con argumentos.',
                'Respondi a 2 companeros con respeto.',
                'Complete la coevaluacion.'
            ],
            links: [
                { label: 'Entrar al Debate (Padlet)', url: '#' },
                { label: 'Coevaluacion (Google Forms)', url: '#' },
                { label: 'Volver al Centro de Mando', url: '#dashboard' }
            ]
        },
        a6: {
            number: 6,
            title: 'Sala de Difusion — Mensaje final',
            toolName: 'Sala de Difusión',
            shortLore: 'La Sala de Difusion transmite a la comunidad. Aqui entregas tu mensaje final sobre uso responsable.',
            steps: [
                'Crea un video de 60 a 90 segundos con un mensaje claro y responsable.',
                'Subelo a YouTube como "No listado" o "Publico" y copia el enlace.',
                'Entrega el enlace en el formulario oficial.'
            ],
            tip: 'Mision lograda si tu mensaje es claro, respetuoso y basado en lo aprendido. Marca la mision completada para recibir tu medalla.',
            checklist: [
                'Cree el video (60 a 90 s).',
                'Lo subi a YouTube y copie el enlace.',
                'Entregue el enlace en el formulario.'
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
            renderMedalRack();
            
            // Resaltar la siguiente actividad recomendada
            setTimeout(() => {
                highlightNextMission();
            }, 100);
            
            setTimeout(() => {
                $dashboard.removeClass('fade-in');
            }, 400);
            
            // Mostrar toast de bienvenida de Atect Bot (solo primera vez)
            setTimeout(() => {
                showWelcomeToast();
            }, 800);
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
        
        // Cambiar automáticamente a la pestaña "Ayuda" del bot para mostrar info específica
        switchBotTab('ayuda');
        
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
        
        // Conceptos clave antes del crucigrama (A1)
        if (mission.id === 'a1') {
            const theoryContent = helperMessages.a1?.theoryContent || '';
            html += `
                <div class="action-box theory-box">
                    <h4><i class="bi bi-book me-2"></i>Conceptos clave antes del crucigrama</h4>
                    <p class="mb-3">Revisa los conceptos basicos para resolver el crucigrama con mayor seguridad.</p>
                    <div class="theory-inline">${theoryContent}</div>
                </div>
            `;
        }

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
            // Actualizar medallas
            renderMedalRack();
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
                // Si es un link de teoría, manejarlo especialmente
                if (link.isTheory) {
                    html += `
                        <button class="btn btn-sm btn-primary bot-link-btn btn-theory w-100 mb-2" 
                                data-mission-id="${missionId}">
                            <i class="bi bi-book-fill me-1"></i>${link.label}
                        </button>
                    `;
                } else {
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
                }
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

    /**
     * Renderiza el rack de medallas en el dashboard
     */
    function renderMedalRack() {
        const $rack = $('#medalRack');
        if (!$rack.length) return;

        const completed = getCompletedMissions();
        $rack.empty();

        missions.forEach(mission => {
            const earned = completed.includes(mission.id);
            const $item = $('<div>', {
                class: `medal-item ${earned ? 'earned' : 'locked'}`,
                'data-mission-id': mission.id,
                'aria-label': `Medalla Mision ${mission.number} ${earned ? 'obtenida' : 'bloqueada'}`
            });
            const $icon = $('<span>', { class: 'medal-icon' });
            const $iconEl = $('<i>', { class: earned ? 'bi bi-award-fill' : 'bi bi-award' });
            const $label = $('<span>', { class: 'medal-label', text: `Mision ${mission.number}` });

            $icon.append($iconEl);
            $item.append($icon, $label);
            $rack.append($item);
        });
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
     * Incluye límite de sonidos simultáneos y limpieza automática
     */
    function playSound(audioElement) {
        if (!audioElement) {
            console.warn('⚠️ playSound: audioElement es null');
            return;
        }
        
        if (isMuted) {
            return;
        }
        
        // Limpiar sonidos terminados
        activeSounds = activeSounds.filter(sound => {
            if (sound.ended || sound.paused) {
                sound.remove();
                return false;
            }
            return true;
        });
        
        // Limitar sonidos simultáneos
        if (activeSounds.length >= MAX_SIMULTANEOUS_SOUNDS) {
            console.log('⚠️ Límite de sonidos simultáneos alcanzado');
            return;
        }
        
        try {
            // Clonar para permitir múltiples reproducciones simultaneas
            const sound = audioElement.cloneNode(true);
            if (!sound.src && audioElement.currentSrc) {
                sound.src = audioElement.currentSrc;
            }
            sound.volume = 0.5; // Volumen moderado para efectos
            
            // Agregar al array de sonidos activos
            activeSounds.push(sound);
            
            // Limpiar cuando termine
            sound.addEventListener('ended', () => {
                sound.remove();
                activeSounds = activeSounds.filter(s => s !== sound);
            });
            
            const playPromise = sound.play();
            
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        console.log('✅ Sonido reproducido:', audioElement.id);
                    })
                    .catch(err => {
                        console.warn('⚠️ Error reproduciendo sonido:', err.message);
                        sound.remove();
                        activeSounds = activeSounds.filter(s => s !== sound);
                    });
            }
        } catch (err) {
            console.error('❌ Excepción en playSound:', err.message);
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
     * Implementa throttle para evitar reproducción excesiva
     */
    function attachSoundEvents() {
        console.log('🎵 Configurando eventos de sonido...');
        
        // Verificar que los elementos de audio existan
        console.log('AudioHover:', audioHover ? '✅' : '❌');
        console.log('AudioClick:', audioClick ? '✅' : '❌');
        console.log('AudioOpen:', audioOpen ? '✅' : '❌');
        console.log('AudioClose:', audioClose ? '✅' : '❌');
        
        // Sonido hover en cualquier elemento interactivo con throttle
        $(document).on('mouseenter', 'button, .utensilio, a.btn, .nav-btn, .helper-bot, .checklist-navbar, input, select', function() {
            const now = Date.now();
            const element = this;
            
            // Verificar si es el mismo elemento y no ha pasado suficiente tiempo
            if (lastHoverElement === element && (now - lastHoverTime) < HOVER_THROTTLE_MS) {
                return; // Ignorar hover repetido en el mismo elemento
            }
            
            // Verificar throttle global
            if ((now - lastHoverTime) < HOVER_THROTTLE_MS) {
                return; // Muy pronto desde el último hover
            }
            
            lastHoverTime = now;
            lastHoverElement = element;
            
            console.log('👆 Hover en:', this.id || this.className);
            playSound(audioHover);
        });
        
        // Resetear el elemento cuando el mouse sale
        $(document).on('mouseleave', 'button, .utensilio, a.btn, .nav-btn, .helper-bot, .checklist-navbar, input, select', function() {
            if (lastHoverElement === this) {
                lastHoverElement = null;
            }
        });
        
        // Sonido click/tap en cualquier elemento interactivo
        $(document).on('click', 'button, .utensilio, a.btn, .nav-btn, .helper-bot, .checklist-navbar, input[type="submit"], input[type="button"]', function() {
            console.log('👆 Click en:', this.id || this.className);
            playSound(audioClick);
        });
        
        // Evento adicional para focus en navegación por teclado
        $(document).on('focus', 'button, .utensilio, a.btn, .nav-btn, .helper-bot, .checklist-navbar', function(e) {
            // Evitar sonido si viene del mouse (ya se disparó mouseenter)
            if (e.isTrusted && e.originalEvent && e.originalEvent.sourceCapabilities && e.originalEvent.sourceCapabilities.firesTouchEvents === false) {
                return; // Es del mouse, ya sonó
            }
            // Sonido para navegación por teclado
            const now = Date.now();
            if ((now - lastHoverTime) < HOVER_THROTTLE_MS) {
                return; // Throttle también para teclado
            }
            lastHoverTime = now;
            console.log('⌨️ Focus por teclado en:', this.id || this.className);
            playSound(audioHover);
        });
        
        console.log('✅ Eventos de sonido configurados con throttle de', HOVER_THROTTLE_MS, 'ms');
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
    // SISTEMA DE ONBOARDING Y TEORÍA
    // =================================
    
    /**
     * Muestra el toast de bienvenida de Atect Bot (solo primera vez)
     */
    function showWelcomeToast() {
        // Verificar si ya se mostró anteriormente
        const hasSeenWelcome = localStorage.getItem('atect_welcome_seen');
        
        if (hasSeenWelcome === 'true') {
            return; // Ya vio el mensaje, no mostrar de nuevo
        }
        
        // Mostrar el toast
        const toastElement = document.getElementById('atectWelcomeToast');
        if (toastElement) {
            const toast = new bootstrap.Toast(toastElement, {
                autohide: true,
                delay: 7000
            });
            
            toast.show();
            
            // Guardar en localStorage que ya se mostró
            localStorage.setItem('atect_welcome_seen', 'true');
            
            console.log('🤖 Toast de bienvenida de Atect Bot mostrado');
        }
    }
    
    /**
     * Abre el modal de teoría para la misión A1
     */
    function openTheoryModal() {
        const theoryModal = document.getElementById('modalTheoryA1');
        if (theoryModal) {
            const modal = new bootstrap.Modal(theoryModal, {
                keyboard: true,
                backdrop: true
            });
            
            modal.show();
            playSound(audioOpen);
            
            // Marcar que el estudiante abrió la teoría (opcional para seguimiento)
            localStorage.setItem('atect_theory_A1_seen', 'true');
            
            console.log('📚 Panel de teoría A1 abierto');
        }
    }

    /**
     * Abre el modal de historia completa con control del boton de inicio
     */
    function openHistoriaModal(options = {}) {
        const { showStartButton = true, markSeen = true } = options;
        const $startButton = $('#btnComenzarMision1');

        if ($startButton.length) {
            $startButton.toggleClass('d-none', !showStartButton);
            $startButton.prop('hidden', !showStartButton);
        }

        if (historiaModalInstance) {
            historiaModalInstance.show();
            if (markSeen) {
                localStorage.setItem('historia_seen', 'true');
            }
        }
    }

    /**
     * Abre el resumen de historia al entrar sin haberla visto
     */
    function openHistoriaSummaryModal() {
        const hasSeenHistoria = localStorage.getItem('historia_seen') === 'true';
        const hasSeenSummaryThisSession = sessionStorage.getItem('historia_summary_seen') === 'true';

        if (hasSeenHistoria || hasSeenSummaryThisSession) {
            return;
        }

        if (historiaSummaryModalInstance) {
            historiaSummaryModalInstance.show();
            sessionStorage.setItem('historia_summary_seen', 'true');
        }
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
        const $modalHistoriaResumen = $('#modalHistoriaResumen');
        
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

        if ($modalHistoriaResumen.length) {
            historiaSummaryModalInstance = new bootstrap.Modal($modalHistoriaResumen[0], {
                keyboard: true,
                focus: true
            });
        }
        
        // Renderizar medallas cuando se abre el modal de medallero
        $('#modalMedallero').on('show.bs.modal', function() {
            renderMedalRack();
        });
        
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
            setTimeout(() => {
                openHistoriaSummaryModal();
            }, 300);
        });
        
        // Botones del Welcome
        $('#btnHistoriaWelcome').on('click', () => {
            playSound(audioClick);
            openHistoriaModal({ showStartButton: false, markSeen: true });
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
            openHistoriaModal({ showStartButton: true, markSeen: true });
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
                autoStartAfterHistoria = false;
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
            openHistoriaModal({ showStartButton: true, markSeen: true });
        });

        // Boton "Saber mas" del resumen de historia
        $('#btnSaberMasHistoria').on('click', () => {
            if (historiaSummaryModalInstance) {
                historiaSummaryModalInstance.hide();
            }
            setTimeout(() => {
                autoStartAfterHistoria = true;
                openHistoriaModal({ showStartButton: true, markSeen: true });
            }, 200);
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
        
        // Botón "Leer conceptos básicos" (teoría A1)
        $(document).on('click', '.btn-theory', function() {
            openTheoryModal();
        });
        
        // Botón "Ir al crucigrama" desde el modal de teoría
        $('#btnGoToCrossword').on('click', function() {
            // Cerrar el modal de teoría
            const theoryModal = bootstrap.Modal.getInstance(document.getElementById('modalTheoryA1'));
            if (theoryModal) {
                theoryModal.hide();
            }
            
            // Abrir el modal de la actividad A1
            setTimeout(() => {
                openMissionModal('a1');
            }, 300);
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
            if (this.id === 'modalHistoria' && autoStartAfterHistoria) {
                autoStartAfterHistoria = false;
                setTimeout(() => {
                    openMissionModal('a1');
                }, 200);
            }
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
