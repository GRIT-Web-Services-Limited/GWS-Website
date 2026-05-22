// Central site-wide theme toggle for GRIT Web Services

function setTheme(mode) {
    document.body.classList.toggle('dark', mode === 'dark');
    document.body.classList.toggle('light', mode === 'light');
    localStorage.setItem('theme', mode);
    updateThemeBtnIcon();
}

function toggleTheme() {
    const mode = document.body.classList.contains('dark') ? 'light' : 'dark';
    setTheme(mode);
}

function updateThemeBtnIcon() {
    const btn = document.getElementById('theme-btn');
    if (!btn) return;
    if (document.body.classList.contains('dark')) {
        btn.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="17.657" y1="6.343" x2="19.071" y2="4.929"/><line x1="4.929" y1="19.071" x2="6.343" y2="17.657"/><line x1="17.657" y1="17.657" x2="19.071" y2="19.071"/><line x1="4.929" y1="4.929" x2="6.343" y2="6.343"/></svg>`;
        btn.title = "Switch to light mode";
        btn.setAttribute('aria-label', 'Switch to light mode');
    } else {
        btn.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
        btn.title = "Switch to dark mode";
        btn.setAttribute('aria-label', 'Switch to dark mode');
    }
}

// On page load, set theme
(function() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') {
        setTheme(saved);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
    } else {
        setTheme('light');
    }
    // If loaded after DOM, ensure icon is right
    document.addEventListener('DOMContentLoaded', updateThemeBtnIcon);
})();
