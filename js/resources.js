// मराठी भाषा अभ्यास संसाधने व संदर्भ दालन (Resources & Reference Hub)

class ResourcesModule {
  constructor() {
    this.container = null;
    this.activeFilter = 'all';
    this.searchQuery = '';
  }

  init(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;
    this.render();
  }

  render() {
    const allResources = MARATHI_CONTENT.resources || [];
    const categories = [
      { id: 'all', label: 'सर्व संसाधने', icon: '✨' },
      { id: 'dictionaries', label: 'शब्दकोश व ज्ञानकोश', icon: '📖' },
      { id: 'grammar_books', label: 'व्याकरण व ई-पुस्तके (PDF)', icon: '📑' },
      { id: 'govt_portals', label: 'शासकीय संस्था व पोर्टल्स', icon: '🏛️' },
      { id: 'digital_tools', label: 'डिजिटल साधने व फॉन्ट्स', icon: '💻' },
      { id: 'classical_dossier', label: 'अभिजात भाषा अहवाल', icon: '🏆' }
    ];

    this.container.innerHTML = `
      <div class="module-header widescreen-header">
        <div class="module-title-wrap">
          <span class="module-tag">ज्ञान आणि संदर्भ भांडार</span>
          <h2 class="module-heading">मराठी भाषा अभ्यास संसाधने व संदर्भ दालन</h2>
        </div>
        <p class="module-desc">
          मराठी भाषेचे अधिकृत ज्ञानकोश, मोल्सवर्थ व दाते-कर्वे शब्दकोश, मोरो केशव दामल्यांचे व्याकरण (PDFs), ई-बालभारती पाठ्यपुस्तके, सी-डॅक फॉन्ट्स आणि प्रा. रंगनाथ पठारे समितीचा ५००+ पानी अभिजात अहवाल — मराठीच्या सर्वांगीण अभ्यासासाठी सर्वात उपयुक्त, अस्सल आणि मोफत उपलब्ध असलेले संदर्भ एकाच दालनात.
        </p>
      </div>

      <!-- Resource Search & Category Filter Controls -->
      <div class="resources-controls-bar">
        <!-- Live Search Input -->
        <div class="resources-search-box">
          <span class="search-input-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
          <input 
            type="search" 
            id="resources-search-input" 
            class="resources-search-input" 
            placeholder="संसाधन, शब्दकोश, ग्रंथ, लेखक किंवा संस्था शोधा..." 
            value="${this.searchQuery}"
            aria-label="संसाधने शोधा"
          />
          <button class="search-clear-btn" id="resources-search-clear" title="शोध हटवा" style="${this.searchQuery ? 'display:flex;' : 'display:none;'}">✕</button>
        </div>

        <!-- Category Filter Tabs -->
        <div class="resources-filter-chips" role="tablist">
          ${categories.map(cat => {
            const count = cat.id === 'all' 
              ? allResources.length 
              : allResources.filter(r => r.category === cat.id).length;

            return `
              <button 
                class="resource-filter-btn ${this.activeFilter === cat.id ? 'active' : ''}" 
                data-filter="${cat.id}"
                role="tab"
                aria-selected="${this.activeFilter === cat.id}"
              >
                <span class="filter-icon">${cat.icon}</span>
                <span class="filter-name">${cat.label}</span>
                <span class="filter-count">(${count})</span>
              </button>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Results Count Status -->
      <div class="resources-status-row">
        <span class="results-counter-pill" id="resources-count-label">
          लोड करत आहे...
        </span>
      </div>

      <!-- Resources Grid Container -->
      <div class="resources-cards-grid" id="resources-grid-root"></div>
    `;

    this.attachEvents();
    this.updateResults();
  }

  attachEvents() {
    // Filter chip buttons
    const filterBtns = this.container.querySelectorAll('.resource-filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-filter');
        if (target !== this.activeFilter) {
          this.activeFilter = target;
          filterBtns.forEach(b => b.classList.toggle('active', b.getAttribute('data-filter') === target));
          if (window.audioManager) window.audioManager.playTap(520, 0.03);
          this.updateResults();
        }
      });
    });

    // Search input with instant filtering
    const searchInput = document.getElementById('resources-search-input');
    const clearBtn = document.getElementById('resources-search-clear');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.trim().toLowerCase();
        if (clearBtn) clearBtn.style.display = this.searchQuery ? 'flex' : 'none';
        this.updateResults();
      });
    }

    if (clearBtn && searchInput) {
      clearBtn.addEventListener('click', () => {
        this.searchQuery = '';
        searchInput.value = '';
        clearBtn.style.display = 'none';
        if (window.audioManager) window.audioManager.playTap(440, 0.03);
        this.updateResults();
      });
    }
  }

  getFilteredList() {
    const all = MARATHI_CONTENT.resources || [];
    return all.filter(item => {
      // Category filter
      const matchesCategory = this.activeFilter === 'all' || item.category === this.activeFilter;
      if (!matchesCategory) return false;

      // Search query filter
      if (!this.searchQuery) return true;
      const q = this.searchQuery;
      const title = (item.title || '').toLowerCase();
      const tag = (item.tag || '').toLowerCase();
      const provider = (item.provider || '').toLowerCase();
      const desc = (item.description || '').toLowerCase();
      const badge = (item.badge || '').toLowerCase();

      return title.includes(q) || tag.includes(q) || provider.includes(q) || desc.includes(q) || badge.includes(q);
    });
  }

  updateResults() {
    const list = this.getFilteredList();
    const countLabel = document.getElementById('resources-count-label');
    const gridRoot = document.getElementById('resources-grid-root');

    if (countLabel) {
      const marathiDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
      const marathiCount = String(list.length).split('').map(d => marathiDigits[parseInt(d)] || d).join('');
      countLabel.textContent = `एकूण ${marathiCount} अधिकृत व मोफत संसाधने उपलब्ध`;
    }

    if (!gridRoot) return;

    if (list.length === 0) {
      gridRoot.innerHTML = `
        <div class="resources-empty-state">
          <div class="empty-icon">🔍</div>
          <h3 class="empty-title">कोणतेही संदर्भ सापडले नाहीत</h3>
          <p class="empty-desc">आपण प्रविष्ट केलेल्या संज्ञेशी जुळणारे साधन आढळले नाही. कृपया इतर शब्द किंवा श्रेणी निवडून पुन्हा शोधा.</p>
        </div>
      `;
      return;
    }

    gridRoot.innerHTML = list.map(item => `
      <div class="resource-item-card">
        <!-- Card Top Header -->
        <div class="res-card-head">
          <div class="res-icon-wrap" aria-hidden="true">${item.icon}</div>
          <div class="res-meta-col">
            <span class="res-tag-pill">${item.tag}</span>
            <span class="res-badge">${item.badge}</span>
          </div>
        </div>

        <!-- Resource Main Title -->
        <h3 class="res-title">${item.title}</h3>

        <!-- Provider Attribution -->
        <div class="res-provider-row">
          <span class="provider-label">स्रोत / संस्था:</span>
          <span class="provider-name">${item.provider}</span>
        </div>

        <!-- Description Paragraph -->
        <p class="res-description">${item.description}</p>

        <!-- Card Footer Action Button -->
        <div class="res-card-footer">
          <a 
            href="${item.url}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="resource-cta-link"
            title="${item.title} — अधिकृत संकेतस्थळ उघडा"
          >
            <span>${item.actionText || 'भेट द्या ↗'}</span>
          </a>
        </div>
      </div>
    `).join('');

    // Attach click audio on link clicks
    const links = gridRoot.querySelectorAll('.resource-cta-link');
    links.forEach(l => {
      l.addEventListener('click', () => {
        if (window.audioManager) window.audioManager.playTap(640, 0.03);
      });
    });
  }
}

window.resourcesModule = new ResourcesModule();
