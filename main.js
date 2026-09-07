// =========================================================
// GENERADOR DEL MENÚ LATERAL DINÁMICO + BOTÓN DARK MODE
// =========================================================
function cargarMenu(rutaBase) {
    const aside = document.querySelector('aside');
    if (!aside) return;

    aside.innerHTML = `
        <div class="sidebar-header">
            <h2>Programming for multi-user and social environments</h2>
            <button id="theme-toggle" class="theme-toggle-btn" aria-label="Cambiar tema" title="Alternar Modo Claro / Oscuro">
                <i class="fa-solid fa-moon" id="theme-icon"></i>
            </button>
        </div>
        <h2>Content</h2>
        <nav>
            <ul>
                <li><a href="${rutaBase}index.html"><i class="fa-solid fa-bookmark"></i> Chapter 0: Introduction and Workspace</a></li>
                <li><a href="${rutaBase}contenido/tema-1.html"><i class="fa-solid fa-bookmark"></i> Chapter 1: Introduction to Data Networks</a></li>
                <li><a href="${rutaBase}contenido/tema-2.html"><i class="fa-solid fa-bookmark"></i> Chapter 2: Netcode for GameObjects</a></li>
                <li><a href="${rutaBase}contenido/tema-3.html"><i class="fa-solid fa-bookmark"></i> Chapter 3: </a></li>
                <li><a href="${rutaBase}contenido/tema-4.html"><i class="fa-solid fa-bookmark"></i> Chapter 4: </a></li>
                <li><a href="${rutaBase}contenido/tema-5.html"><i class="fa-solid fa-bookmark"></i> Chapter 5: </a></li>
            </ul>
        <h2>Exercises</h2>
            <ul>
                <li><a href="${rutaBase}ejercicios/ejercicio-0.html"><i class="fa-solid fa-bookmark"></i> Exercise 0: Setting up the project</a></li>
            </ul>
        </nav>
    `;

    // Inicializamos la lógica del tema una vez inyectado el HTML del menú
    inicializarTema();
}

// =========================================================
// GESTOR DE ESTADO DEL MODO OSCURO
// =========================================================
function inicializarTema() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (!themeToggleBtn) return;

    const themeIcon = document.getElementById('theme-icon');

    // Función auxiliar para cambiar el icono de FontAwesome
    const actualizarIcono = (isDark) => {
        if (isDark) {
            themeIcon.className = 'fa-solid fa-sun'; // Sol para volver al modo claro
        } else {
            themeIcon.className = 'fa-solid fa-moon'; // Luna para activar el modo oscuro
        }
    };

    // Comprobamos el estado inicial ya aplicado en el script del head
    const isDarkInitial = document.documentElement.classList.contains('dark-mode');
    actualizarIcono(isDarkInitial);

    // Escuchador de clics
    themeToggleBtn.addEventListener('click', () => {
        const isDarkNow = document.documentElement.classList.toggle('dark-mode');
        actualizarIcono(isDarkNow);
        
        // Almacenamos la preferencia del usuario permanentemente
        localStorage.setItem('theme', isDarkNow ? 'dark' : 'light');
    });
}