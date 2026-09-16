/* ═══════════════════════════════════════════
   DATOS: PREGUNTAS
═══════════════════════════════════════════ */
const QUESTIONS = [
  {
    text: "01 Cuando tenés tiempo libre, generalmente preferís...",
    options: [
      { text: "Crear algo nuevo", sub: "Dibujar, diseñar, armar o construir cosas originales", scores: { ux: 3, multi: 2 } },
      { text: "Investigar y aprender", sub: "Buscar cómo funciona algo que te genera curiosidad", scores: { ia: 3, back: 1, sec: 1 } },
      { text: "Organizar y planificar", sub: "Hacer listas, ordenar cosas, prepararte para lo que viene", scores: { cloud: 3, back: 2 } },
      { text: "Explorar y descubrir", sub: "Probar cosas nuevas, ver qué pasa, experimentar sin miedo", scores: { sec: 3, ia: 2 } }
    ]
  },
  {
    text: "02 ¿Qué actividad te gustaría realizar más en un proyecto?",
    options: [
      { text: "Diseñar como se vería", sub: "Elegir colores, tipografías, cómo se ve y se siente algo", scores: { ux: 3, multi: 2 } },
      { text: "Hacer que todo funcione correctamente", sub: "Que los datos se guarden y que el sistema responda bien", scores: { back: 3, cloud: 1 } },
      { text: "Analizar la información obtenida", sub: "Entender patrones, sacar conclusiones, visualizar resultados", scores: { ia: 3, back: 1 } },
      { text: "Proteger el proyecto de posibles fallas", sub: "Detectar errores, buscar vulnerabilidades, asegurarlo todo", scores: { sec: 3, cloud: 2 } }
    ]
  },
  {
    text: "03 En un trabajo en equipo, normalmente sos quien...",
    options: [
      { text: "Presenta las ideas de forma visual", sub: "Hacés las diapositivas, el diseño, lo que se ve en la pantalla", scores: { ux: 3, multi: 1 } },
      { text: "Ordena y distribuye las tareas", sub: "Gestionás tiempos, recursos y te asegurás que todo fluya", scores: { cloud: 3, back: 2 } },
      { text: "Trae datos y evidencia", sub: "Investigás, analizás y fundamentás las decisiones del grupo", scores: { ia: 3, back: 1 } },
      { text: "Detecta problemas antes que nadie", sub: "Anticipás errores, buscás los fallos posibles", scores: { sec: 3, cloud: 1 } }
    ]
  },
  {
    text: "04 ¿Qué tipo de desafío te resulta más interesante?",
    options: [
      { text: "Crear vistas que sirvan al usuario", sub: "Diseñar algo tan intuitivo que no necesite instrucciones", scores: { ux: 3, multi: 2 } },
      { text: "Resolver un problema complejo paso a paso", sub: "Descomponer un desafío grande en partes más pequeñas", scores: { back: 3, ia: 1 } },
      { text: "Hacer que una app funcione en varios dispositivos", sub: "Que se vea igual de bien en teléfono, tablet y computadora", scores: { multi: 3, ux: 1 } },
      { text: "Descubrir patrones en mucha información", sub: "Analizar datos para encontrar algo que nadie había notado", scores: { ia: 3, back: 1 } }
    ]
  },
  {
    text: "05 ¿Qué materia o temática disfrutás más?",
    options: [
      { text: "Arte, diseño o comunicación visual", sub: "La estética, la composición, transmitir con imágenes", scores: { ux: 3, multi: 2 } },
      { text: "Matemáticas o lógica", sub: "Resolver ecuaciones, pensar de forma estructurada", scores: { back: 2, ia: 3 } },
      { text: "Ciencias naturales o investigación", sub: "Experimentar, observar, sacar conclusiones propias", scores: { ia: 2, sec: 2, back: 1 } },
      { text: "Tecnología, redes o sistemas", sub: "Cómo funcionan las computadoras, internet, los servidores", scores: { cloud: 3, sec: 2 } }
    ]
  },
  {
    text: "06 Si pudieras hacer cualquier proyecto personal, elegirías...",
    options: [
      { text: "Crear una aplicación con buen diseño", sub: "Algo visualmente impactante que mejore la experiencia de las personas", scores: { ux: 3, multi: 2 } },
      { text: "Construir un sistema que maneje mucha información", sub: "Una plataforma grande que funcione para muchos usuarios a la vez", scores: { back: 3, cloud: 2 } },
      { text: "Crear un modelo de inteligencia artificial que aprenda solo con datos", sub: "Algo que detecte patrones y mejore con el tiempo", scores: { ia: 3, back: 1 } },
      { text: "Hacer una app que funcione en celular y computadora", sub: "Disponible en todos lados, con una sola versión del código", scores: { multi: 3, ux: 1 } }
    ]
  },
  {
    text: "07 ¿Qué te genera más curiosidad en el mundo tecnológico actual?",
    options: [
      { text: "Cómo se diseñan apps que millones de personas usan", sub: "Spotify, Instagram, WhatsApp", scores: { ux: 3, multi: 2 } },
      { text: "Cómo las máquinas pueden aprender y mejorar solas", sub: "ChatGPT, recomendaciones de Netflix, filtros de fotos con IA", scores: { ia: 3, back: 1 } },
      { text: "Cómo se hackea y cómo se defiende un sistema", sub: "Ataques, vulnerabilidades, lo que pasa detrás de escena en seguridad", scores: { sec: 3, back: 1 } },
      { text: "Cómo funciona la infraestructura de internet", sub: "Servidores, nubes, cómo todo el mundo puede acceder al mismo tiempo", scores: { cloud: 3, back: 2 } }
    ]
  },
  {
    text: "08 ¿Cómo preferís resolver un problema difícil?",
    options: [
      { text: "Visualizándolo: diagramas, bocetos, prototipos", sub: "Necesito verlo para entenderlo mejor", scores: { ux: 3, ia: 1 } },
      { text: "Dividiéndolo en partes más pequeñas", sub: "Lo descompongo paso a paso hasta encontrar la solución", scores: { back: 3, cloud: 1 } },
      { text: "Buscando datos e información antes de decidir", sub: "Investigo, comparo opciones y elijo la más fundamentada", scores: { ia: 2, sec: 2, back: 1 } },
      { text: "Probando posibles vulnerabilidades o fallas primero", sub: "Entiendo qué puede salir mal para construir algo sólido", scores: { sec: 3, cloud: 2 } }
    ]
  }
];

/* ═══════════════════════════════════════════
   DATOS: PERFILES
═══════════════════════════════════════════ */
const PROFILES = {
  ux: {
    id: "frontend",
    emoji: "🎨",
    title: "UX/UI y Desarrollo Frontend",
    desc: "Sos una persona creativa con gran sensibilidad visual y una enorme capacidad para ponerse en el lugar de los demás. Pensás en cómo las personas sienten y viven las experiencias digitales.",
    role: "Diseñás y construís las interfaces que los usuarios ven y usan todos los días. Tomás decisiones sobre colores, tipografías, flujos de navegación y animaciones.",
    why: "Sin diseñadores, las aplicaciones serían difíciles de usar y nadie querría usarlas. El diseño es lo que convierte una herramienta en una experiencia.",
    workplaces: ["Empresas de tecnología", "Agencias digitales", "Startups", "E-commerce", "Medios de comunicación", "Educación digital"],
    skills: ["Creatividad", "Empatía con el usuario", "Atención al detalle", "Comunicación visual", "Pensamiento crítico"],
    projects: ["Spotify", "Instagram", "Duolingo", "Mercado Libre", "Notion", "Netflix"],
    future: "Podés especializarte en investigación de usuarios (UX Research), diseño de sistemas, animación digital o liderazgo creativo en equipos de producto.",
    personal: "Tus respuestas muestran una fuerte inclinación hacia la creatividad visual y la empatía. Tomás decisiones pensando en cómo se sentirá la otra persona, y eso es exactamente lo que distingue a un gran diseñador."
  },
  back: {
    id: "backend",
    emoji: "👨‍💻",
    title: "Desarrollo Backend",
    desc: "Sos una persona analítica, lógica y estructurada. Te gusta construir cosas sólidas, entender cómo funcionan los sistemas por dentro y resolver problemas complejos paso a paso.",
    role: "Desarrollás la 'parte invisible' de las aplicaciones: servidores, bases de datos, lógica de negocio y las conexiones entre distintos sistemas.",
    why: "El backend es el motor de todo. Sin él, no podrías iniciar sesión en ninguna app, hacer compras online ni guardar tu progreso en un videojuego.",
    workplaces: ["Bancos", "Fintech", "E-commerce", "Salud digital", "Logística", "Gobierno digital", "Startups"],
    skills: ["Pensamiento lógico", "Resolución de problemas", "Organización", "Atención al detalle", "Trabajo bajo presión"],
    projects: ["Mercado Pago", "Instagram (backend)", "Twitter", "LinkedIn", "Spotify (servidores)"],
    future: "Podés avanzar hacia arquitectura de software, liderazgo técnico, microservicios o especializarte en rendimiento y escalabilidad.",
    personal: "Tus respuestas revelan una mente lógica y estructurada que disfruta de resolver desafíos complejos de forma metódica. Ese perfil es exactamente el que construye los sistemas que hacen funcionar al mundo digital."
  },
  multi: {
    id: "multiplataforma",
    emoji: "📱",
    title: "Desarrollo Multiplataforma",
    desc: "Sos alguien versátil y orientado a resultados. Te atrae la idea de crear productos que lleguen a la mayor cantidad de personas posible, sin importar el dispositivo que usen.",
    role: "Creás aplicaciones que funcionan en celulares, tablets y computadoras con un mismo código base. Combinás habilidades de diseño y programación.",
    why: "El mundo está en el celular. Las apps móviles son la forma más directa de llegar a millones de personas con herramientas que mejoran su vida cotidiana.",
    workplaces: ["Startups de app móvil", "Salud digital", "Educación", "Retail", "Transporte", "Redes sociales"],
    skills: ["Versatilidad", "Pensamiento centrado en el usuario", "Adaptabilidad", "Resolución práctica de problemas", "Comunicación"],
    projects: ["Uber", "WhatsApp", "TikTok", "Mercado Libre (app)", "Duolingo", "Airbnb"],
    future: "Podés especializarte en performance de apps, experiencia nativa en iOS o Android, realidad aumentada o liderazgo de producto digital.",
    personal: "Tus respuestas muestran que valorás el impacto real y la practicidad. Querés que lo que creás llegue a las personas de forma directa y funcional. Eso es el corazón del desarrollo móvil."
  },
  ia: {
    id: "ia",
    emoji: "🤖",
    title: "Inteligencia Artificial y Datos",
    desc: "Sos una persona curiosa, analítica y amante de los datos. Disfrutás descubrir patrones, entender fenómenos complejos y hacer predicciones basadas en evidencia.",
    role: "Entrenás modelos que aprenden solos, analizás grandes volúmenes de datos y construís sistemas que toman decisiones inteligentes de forma automática.",
    why: "La IA está transformando absolutamente todos los sectores: salud, educación, entretenimiento, finanzas, clima. Quienes la construyen tienen un impacto enorme en el futuro.",
    workplaces: ["Centros de investigación", "Salud", "Finanzas", "Entretenimiento", "Agroindustria", "Gobierno", "Startups de IA"],
    skills: ["Curiosidad intelectual", "Pensamiento estadístico", "Resolución creativa de problemas", "Análisis crítico", "Perseverancia"],
    projects: ["ChatGPT", "Netflix (recomendaciones)", "Waze", "Google Fotos", "Mercado Libre (fraude)", "Tesla Autopilot"],
    future: "Podés especializarte en visión por computadora, procesamiento de lenguaje natural, ética de la IA o investigación en machine learning.",
    personal: "Tus respuestas revelan una mente que busca el 'por qué' detrás de todo. Disfrutás encontrar lo que otros no ven en los datos, y eso es exactamente lo que hace a alguien brillante en IA."
  },
  sec: {
    id: "ciberseguridad",
    emoji: "🛡️",
    title: "Ciberseguridad",
    desc: "Sos alguien con mente investigadora, pensamiento lateral y una necesidad de entender cómo funcionan los sistemas para encontrar sus puntos débiles. El mundo digital te necesita.",
    role: "Protegés sistemas, aplicaciones y datos de ataques. Buscás vulnerabilidades antes de que los atacantes las encuentren, y diseñás defensas para mantener todo seguro.",
    why: "Cada día ocurren miles de ataques digitales en el mundo. Los especialistas en seguridad son la primera línea de defensa de empresas, gobiernos y personas.",
    workplaces: ["Bancos", "Gobierno", "Defensa nacional", "Empresas tech", "Hospitales", "Telecomunicaciones", "Consultoras"],
    skills: ["Pensamiento lateral", "Curiosidad extrema", "Atención al detalle", "Resolución de problemas bajo presión", "Ética profesional"],
    projects: ["Sistemas bancarios (defensa)", "Infraestructura del gobierno", "Apps con datos sensibles", "Redes corporativas"],
    future: "Podés especializarte en ethical hacking, análisis forense digital, seguridad en la nube, criptografía o gestión de riesgos digitales.",
    personal: "Tus respuestas muestran que tenés una mente que no da por sentado nada. Buscás el error antes de que sea un problema, y esa mentalidad es exactamente la que hace a los mejores expertos en seguridad."
  },
  cloud: {
    id: "cloud",
    emoji: "☁️",
    title: "Cloud y DevOps",
    desc: "Sos una persona organizada, sistemática y con visión de conjunto. Te atrae la idea de que todo funcione de manera eficiente, escalable y sin interrupciones.",
    role: "Gestionás la infraestructura tecnológica: servidores en la nube, automatización de procesos, despliegue de aplicaciones y monitoreo continuo de sistemas.",
    why: "Cada vez que usás Netflix, YouTube o cualquier app sin interrupciones, hay un equipo de cloud garantizando que funcione para millones de personas al mismo tiempo.",
    workplaces: ["Empresas tech", "Telecomunicaciones", "Medios de comunicación", "Fintech", "Salud", "Retail", "Startups de escala"],
    skills: ["Organización sistemática", "Pensamiento a gran escala", "Resolución bajo presión", "Liderazgo técnico", "Eficiencia"],
    projects: ["Netflix (streaming global)", "Spotify (millones de usuarios)", "Amazon", "Zoom", "Mercado Libre (alta disponibilidad)"],
    future: "Podés especializarte en arquitectura cloud, seguridad en infraestructura, automatización avanzada o liderazgo de plataformas tecnológicas.",
    personal: "Tus respuestas muestran que valorás el orden, la eficiencia y el funcionamiento correcto de los sistemas. Pensás en grande y eso es exactamente lo que se necesita para mantener el mundo digital en marcha."
  }
};

const PROFILE_ORDER = ['ux', 'back', 'multi', 'ia', 'sec', 'cloud'];
const PROFILE_COLORS = ['bar-color-0','bar-color-1','bar-color-2','bar-color-3','bar-color-4','bar-color-5'];

/* ═══════════════════════════════════════════
   STATE
═══════════════════════════════════════════ */
let currentQuestion = 0;
let answers = [];          // answers[i] = option index selected
let scores = { ux:0, back:0, multi:0, ia:0, sec:0, cloud:0 };
let direction = 'forward'; // 'forward' | 'back'

/* ═══════════════════════════════════════════
   DOM REFS
═══════════════════════════════════════════ */
const screenWelcome   = document.getElementById('screen-welcome');
const screenQuestions = document.getElementById('screen-questions');
const screenResult    = document.getElementById('screen-result');
const btnStart        = document.getElementById('btn-start');
const btnBack         = document.getElementById('btn-back');
const qCounter        = document.getElementById('q-counter');
const qPercent        = document.getElementById('q-percent');
const progressFill    = document.getElementById('progress-fill');
const questionCard    = document.getElementById('question-card');
const qNumberLabel    = document.getElementById('q-number-label');
const qText           = document.getElementById('q-text');
const optionsGrid     = document.getElementById('options-grid');

/* ═══════════════════════════════════════════
   NAVIGATION
═══════════════════════════════════════════ */
function showScreen(id) {
  [screenWelcome, screenQuestions, screenResult].forEach(s => {
    s.classList.remove('active');
    s.style.display = '';
  });
  const target = document.getElementById(id);
  target.classList.add('active');
}

/* ═══════════════════════════════════════════
   SCORES
═══════════════════════════════════════════ */
function recalcScores() {
  scores = { ux:0, back:0, multi:0, ia:0, sec:0, cloud:0 };
  answers.forEach((optIdx, qIdx) => {
    if (optIdx === null || optIdx === undefined) return;
    const s = QUESTIONS[qIdx].options[optIdx].scores;
    Object.entries(s).forEach(([k,v]) => { scores[k] += v; });
  });
}

/* ═══════════════════════════════════════════
   RENDER QUESTION
═══════════════════════════════════════════ */
function renderQuestion(idx, dir = 'forward') {
  const q = QUESTIONS[idx];
  const total = QUESTIONS.length;
  const pct = Math.round((idx / total) * 100);

  qCounter.textContent = `Pregunta ${idx + 1} de ${total}`;
  qPercent.textContent = `${pct}% completado`;
  progressFill.style.width = `${pct}%`;
  progressFill.parentElement.setAttribute('aria-valuenow', pct);

  qNumberLabel.textContent = String(idx + 1).padStart(2, '0');
  qText.textContent = q.text;

  // Animate card
  const animClass = dir === 'back' ? 'slide-back' : 'slide-in';
  questionCard.classList.remove('slide-in', 'slide-back', 'slide-out');
  void questionCard.offsetWidth; // reflow
  questionCard.classList.add(animClass);

  // Render options
  optionsGrid.innerHTML = '';
  q.options.forEach((opt, oi) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.setAttribute('role', 'radio');
    btn.setAttribute('aria-checked', answers[idx] === oi ? 'true' : 'false');
    btn.setAttribute('tabindex', '0');
    if (answers[idx] === oi) btn.classList.add('selected');

    btn.innerHTML = `
      <span class="opt-icon" aria-hidden="true">${String.fromCharCode(65 + oi)}</span>
      <span class="opt-text">
        <strong>${opt.text}</strong>
        <span>${opt.sub}</span>
      </span>
    `;

    btn.addEventListener('click', () => selectOption(idx, oi));
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectOption(idx, oi);
      }
    });

    optionsGrid.appendChild(btn);
  });

  // Back btn
  btnBack.disabled = idx === 0;
}

function selectOption(qIdx, optIdx) {
  // Update scores: remove old answer if exists
  if (answers[qIdx] !== undefined && answers[qIdx] !== null) {
    const oldS = QUESTIONS[qIdx].options[answers[qIdx]].scores;
    Object.entries(oldS).forEach(([k,v]) => { scores[k] -= v; });
  }

  answers[qIdx] = optIdx;

  const newS = QUESTIONS[qIdx].options[optIdx].scores;
  Object.entries(newS).forEach(([k,v]) => { scores[k] += v; });

  // Highlight selected
  optionsGrid.querySelectorAll('.option-btn').forEach((btn, i) => {
    btn.classList.toggle('selected', i === optIdx);
    btn.setAttribute('aria-checked', i === optIdx ? 'true' : 'false');
  });

  // Auto-advance after short delay
  setTimeout(() => {
    if (qIdx < QUESTIONS.length - 1) {
      currentQuestion = qIdx + 1;
      renderQuestion(currentQuestion, 'forward');
    } else {
      showResult();
    }
  }, 420);
}

/* ═══════════════════════════════════════════
   RESULT
═══════════════════════════════════════════ */
function showResult() {
  recalcScores();

  // Find winner
  const sorted = PROFILE_ORDER.slice().sort((a,b) => scores[b] - scores[a]);
  const winnerId = sorted[0];
  const profile = PROFILES[winnerId];

  // Render hero
  document.getElementById('result-emoji').textContent = profile.emoji;
  document.getElementById('result-title').textContent = profile.title;
  document.getElementById('result-desc').textContent  = profile.desc;

  // Render detail
  document.getElementById('detail-role').innerHTML = `
    <h4>🎯 ¿A qué se dedica?</h4>
    <p>${profile.role}</p>
  `;
  document.getElementById('detail-why').innerHTML = `
    <h4>💡 ¿Por qué es importante?</h4>
    <p>${profile.why}</p>
  `;
  document.getElementById('detail-workplaces').innerHTML = `
    <h4>🏢 Dónde podría trabajar</h4>
    <ul>${profile.workplaces.map(w=>`<li>${w}</li>`).join('')}</ul>
  `;
  document.getElementById('detail-skills').innerHTML = `
    <h4>🧠 Habilidades que desarrollaría</h4>
    <div class="detail-tag-list">${profile.skills.map(s=>`<span class="detail-tag">${s}</span>`).join('')}</div>
  `;
  document.getElementById('detail-projects').innerHTML = `
    <h4>🚀 Proyectos reales de este perfil</h4>
    <div class="detail-tag-list">${profile.projects.map(p=>`<span class="detail-tag">${p}</span>`).join('')}</div>
  `;
  document.getElementById('detail-future').innerHTML = `
    <h4>🛤️ Caminos futuros</h4>
    <p>${profile.future}</p>
  `;
  document.getElementById('detail-personal').innerHTML = `
    <h4>✨ Por qué obtuviste este perfil</h4>
    <p>${profile.personal}</p>
  `;

  // Render affinities
  const totalScore = Object.values(scores).reduce((a,b)=>a+b,0) || 1;
  const affinitiesEl = document.getElementById('affinities-list');
  affinitiesEl.innerHTML = '';

  sorted.forEach((pid, rank) => {
    const p = PROFILES[pid];
    const pct = Math.round((scores[pid] / totalScore) * 100);
    const colorClass = PROFILE_COLORS[rank];

    const item = document.createElement('div');
    item.className = 'affinity-item';
    item.innerHTML = `
      <div class="affinity-header">
        <span class="affinity-name">${p.emoji} ${p.title}</span>
        <span class="affinity-pct">${pct}%</span>
      </div>
      <div class="affinity-bar-track">
        <div class="affinity-bar-fill ${colorClass}" style="width:0%" data-target="${pct}"></div>
      </div>
    `;
    affinitiesEl.appendChild(item);
  });

  // Animate bars
  setTimeout(() => {
    affinitiesEl.querySelectorAll('.affinity-bar-fill').forEach(bar => {
      bar.style.width = bar.dataset.target + '%';
    });
  }, 400);

  // Accordion
  buildAccordion(winnerId);

  showScreen('screen-result');

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ═══════════════════════════════════════════
   QR CODE (built-in, no external lib)
═══════════════════════════════════════════ */
function generateQR(profileId) {
  const qrBox = document.getElementById('qr-box');
  const url = `${window.location.origin}${window.location.pathname}#perfil/${profileId}`;

  // Use QR Server API (open, no key needed, generates PNG)
  const size = 140;
  const img = document.createElement('img');
  img.alt = `QR del perfil ${profileId}`;
  img.style.cssText = 'width:100%;height:100%;object-fit:contain;';

  // Try to use a URL-based QR that renders inline
  // We'll generate a simple SVG QR-like placeholder with a real URL embedded
  // and use the public QR API
  const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(url)}&size=${size}x${size}&color=014D4F&bgcolor=ffffff&margin=8`;
  img.src = apiUrl;
  img.onerror = () => {
    // Fallback: draw a simple placeholder
    qrBox.innerHTML = `
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;padding:12px;text-align:center;gap:6px">
        <span style="font-size:1.8rem">📲</span>
        <span style="font-size:0.7rem;font-weight:700;color:#014D4F;word-break:break-all;line-height:1.3">/perfil/${profileId}</span>
      </div>
    `;
  };

  qrBox.innerHTML = '';
  qrBox.appendChild(img);
}

/* ═══════════════════════════════════════════
   ACCORDION
═══════════════════════════════════════════ */
function buildAccordion(currentWinnerId) {
  const list = document.getElementById('accordion-list');
  list.innerHTML = '';

  PROFILE_ORDER.forEach(pid => {
    const p = PROFILES[pid];
    const isWinner = pid === currentWinnerId;

    const item = document.createElement('div');
    item.className = 'accordion-item';
    item.setAttribute('role', 'listitem');

    item.innerHTML = `
      <button class="accordion-trigger" aria-expanded="false" aria-controls="acc-body-${pid}">
        <span class="accordion-trigger-left">
          <span class="acc-emoji">${p.emoji}</span>
          <span>${p.title}${isWinner ? ' <span style="background:rgba(1,77,79,0.1);color:#014D4F;font-size:0.7rem;font-weight:700;padding:2px 8px;border-radius:100px;margin-left:4px">Tu perfil</span>' : ''}</span>
        </span>
        <svg class="accordion-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
      <div class="accordion-body" id="acc-body-${pid}" role="region">
        <div class="accordion-content">
          <p class="acc-desc">${p.desc}</p>
          <div>
            <p class="acc-tags-title">Habilidades clave</p>
            <div class="acc-tags">${p.skills.map(s=>`<span class="acc-tag">${s}</span>`).join('')}</div>
          </div>
          <div>
            <p class="acc-tags-title">Proyectos conocidos</p>
            <div class="acc-tags">${p.projects.map(s=>`<span class="acc-tag">${s}</span>`).join('')}</div>
          </div>
          <p class="acc-desc" style="font-style:italic;color:#5a8082">${p.future}</p>
        </div>
      </div>
    `;

    const trigger = item.querySelector('.accordion-trigger');
    trigger.addEventListener('click', () => toggleAccordion(item, trigger));
    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleAccordion(item, trigger);
      }
    });

    list.appendChild(item);
  });
}

function toggleAccordion(item, trigger) {
  const isOpen = item.classList.contains('open');
  item.classList.toggle('open', !isOpen);
  trigger.setAttribute('aria-expanded', !isOpen);
}

/* ═══════════════════════════════════════════
   PDF DOWNLOAD
═══════════════════════════════════════════ */
function downloadPDF() {
  // Simple print-based PDF generation
  const sorted = PROFILE_ORDER.slice().sort((a,b) => scores[b] - scores[a]);
  const profile = PROFILES[sorted[0]];
  const totalScore = Object.values(scores).reduce((a,b)=>a+b,0) || 1;

  const affinitiesHTML = sorted.map(pid => {
    const p = PROFILES[pid];
    const pct = Math.round((scores[pid] / totalScore) * 100);
    return `<div style="display:flex;justify-content:space-between;margin:6px 0;font-size:13px">
      <span>${p.emoji} ${p.title}</span><span style="font-weight:700;color:#014D4F">${pct}%</span>
    </div>
    <div style="height:6px;background:#e4f2f2;border-radius:100px;margin-bottom:8px">
      <div style="height:6px;width:${pct}%;background:linear-gradient(90deg,#014D4F,#00C9A7);border-radius:100px"></div>
    </div>`;
  }).join('');

  const win = window.open('', '_blank');
  win.document.write(`<!DOCTYPE html><html lang="es"><head>
    <meta charset="UTF-8">
    <title>Mi perfil tecnológico - ${profile.title}</title>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800;900&display=swap" rel="stylesheet">
    <style>
      body { font-family: 'Manrope', sans-serif; color: #0d2b2c; padding: 40px; max-width: 720px; margin: 0 auto; }
      h1 { font-size: 2rem; font-weight: 900; color: #014D4F; margin-bottom: 4px; }
      h2 { font-size: 1rem; font-weight: 700; color: #014D4F; text-transform: uppercase; letter-spacing: 0.06em; margin: 24px 0 8px; }
      p { font-size: 0.95rem; line-height: 1.7; color: #2d5557; }
      .header { border-bottom: 3px solid #014D4F; padding-bottom: 20px; margin-bottom: 28px; }
      .badge { display: inline-block; background: #e4f2f2; color: #014D4F; font-size: 0.78rem; font-weight: 700; padding: 4px 12px; border-radius: 100px; margin-bottom: 12px; }
      .skill-list { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 6px; }
      .skill { background: #e4f2f2; color: #014D4F; padding: 4px 12px; border-radius: 100px; font-size: 0.82rem; font-weight: 600; }
      .footer { margin-top: 40px; font-size: 0.78rem; color: #5a8082; border-top: 1px solid #ddd; padding-top: 16px; }
    </style>
  </head><body>
    <div class="header">
      <span class="badge">Descubrí tu perfil tecnológico</span>
      <h1>${profile.emoji} ${profile.title}</h1>
      <p>${profile.desc}</p>
    </div>
    <h2>¿A qué se dedica?</h2><p>${profile.role}</p>
    <h2>¿Por qué es importante?</h2><p>${profile.why}</p>
    <h2>Habilidades clave</h2>
    <div class="skill-list">${profile.skills.map(s=>`<span class="skill">${s}</span>`).join('')}</div>
    <h2>Proyectos de referencia</h2>
    <div class="skill-list">${profile.projects.map(s=>`<span class="skill">${s}</span>`).join('')}</div>
    <h2>Caminos futuros</h2><p>${profile.future}</p>
    <h2>¿Por qué obtuviste este perfil?</h2><p>${profile.personal}</p>
    <h2>Tus afinidades</h2>${affinitiesHTML}
    <div class="footer">Actividad vocacional · Descubrí tu perfil tecnológico · ${new Date().getFullYear()}</div>
    <script>window.onload = () => { window.print(); }<\/script>
  </body></html>`);
  win.document.close();
}

/* ═══════════════════════════════════════════
   RESTART
═══════════════════════════════════════════ */
function restart() {
  currentQuestion = 0;
  answers = [];
  scores  = { ux:0, back:0, multi:0, ia:0, sec:0, cloud:0 };
  showScreen('screen-welcome');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ═══════════════════════════════════════════
   EVENT LISTENERS
═══════════════════════════════════════════ */
btnStart.addEventListener('click', () => {
  showScreen('screen-questions');
  renderQuestion(0, 'forward');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

btnBack.addEventListener('click', () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion(currentQuestion, 'back');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

document.getElementById('btn-pdf').addEventListener('click', downloadPDF);
document.getElementById('btn-restart').addEventListener('click', restart);
document.getElementById('btn-restart-2').addEventListener('click', restart);