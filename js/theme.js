// थीम व्यवस्थापक (Tri-state Theme Manager: Light, Dark, System)

class ThemeManager {
  constructor() {
    this.themeMode = localStorage.getItem('marathi_theme_mode') || 'system';
    this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.init();
  }

  init() {
    this.applyTheme(this.themeMode);

    // Watch for OS theme changes
    this.mediaQuery.addEventListener('change', () => {
      if (this.themeMode === 'system') {
        this.applyTheme('system');
      }
    });
  }

  getResolvedTheme() {
    if (this.themeMode === 'system') {
      return this.mediaQuery.matches ? 'dark' : 'light';
    }
    return this.themeMode;
  }

  applyTheme(mode) {
    this.themeMode = mode;
    localStorage.setItem('marathi_theme_mode', mode);

    const resolved = this.getResolvedTheme();
    document.documentElement.setAttribute('data-theme', resolved);
    document.documentElement.setAttribute('data-theme-mode', mode);

    this.updateThemeButtonUI();
  }

  cycleTheme() {
    // Cycle order: system -> light -> dark -> system
    if (this.themeMode === 'system') {
      this.applyTheme('light');
    } else if (this.themeMode === 'light') {
      this.applyTheme('dark');
    } else {
      this.applyTheme('system');
    }
    if (window.audioManager) {
      window.audioManager.playTap(680, 0.03);
    }
  }

  updateThemeButtonUI() {
    const btn = document.getElementById('theme-toggle-btn');
    const label = document.getElementById('theme-toggle-label');
    const icon = document.getElementById('theme-toggle-icon');

    if (!btn) return;

    if (this.themeMode === 'system') {
      if (label) label.textContent = 'प्रणाली';
      if (icon) icon.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      `;
    } else if (this.themeMode === 'light') {
      if (label) label.textContent = 'प्रकाशमय';
      if (icon) icon.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      `;
    } else {
      if (label) label.textContent = 'गडद';
      if (icon) icon.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      `;
    }
  }
}

// Global instance
window.themeManager = new ThemeManager();
