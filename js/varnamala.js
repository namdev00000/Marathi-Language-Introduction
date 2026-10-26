// वर्णमाला दालन (52 Letters Phonetic Interactive Explorer)

class VarnamalaModule {
  constructor() {
    this.container = null;
    this.activeFilter = 'all';
    this.selectedLetter = null;
  }

  init(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;
    this.render();
  }

  render() {
    const data = MARATHI_CONTENT.varnamala;

    this.container.innerHTML = `
      <div class="module-header">
        <div class="module-title-wrap">
          <span class="module-tag">शास्त्रीय ध्वनीशास्त्र</span>
          <h2 class="module-heading">मराठी वर्णमाला (५२ वर्ण)</h2>
        </div>
        <p class="module-desc">
          मराठी वर्णमालेत एकूण ५२ वर्णांची सुव्यवस्थित शास्त्रीय मांडणी आहे. कोणत्याही अक्षरावर क्लिक करून त्याचे अचूक उच्चार स्थान व ध्वनी ऐका.
        </p>
      </div>

      <!-- Filter Tabs -->
      <div class="varnamala-filters" role="tablist">
        <button class="filter-pill ${this.activeFilter === 'all' ? 'active' : ''}" data-filter="all">सर्व वर्ण (५२)</button>
        <button class="filter-pill ${this.activeFilter === 'swar' ? 'active' : ''}" data-filter="swar">स्वर (१४)</button>
        <button class="filter-pill ${this.activeFilter === 'swaradi' ? 'active' : ''}" data-filter="swaradi">स्वरादी (२)</button>
        <button class="filter-pill ${this.activeFilter === 'vyanjane' ? 'active' : ''}" data-filter="vyanjane">व्यंजने (३४)</button>
        <button class="filter-pill ${this.activeFilter === 'vishesh' ? 'active' : ''}" data-filter="vishesh">विशेष संयुक्त (२)</button>
      </div>

      <!-- Detail Card -->
      <div class="letter-detail-box" id="letter-detail-display">
        <div class="detail-placeholder">
          <span class="detail-icon">✦</span>
          <span>तपशील पाहण्यासाठी आणि उच्चार ऐकण्यासाठी खालील कोणत्याही अक्षरावर क्लिक करा.</span>
        </div>
      </div>

      <!-- Letters Grid Section -->
      <div class="varnamala-board">
        ${this.renderSwarSection(data.swar)}
        ${this.renderSwaradiSection(data.swaradi)}
        ${this.renderVyanjaneSection(data.vyanjane)}
        ${this.renderVisheshSection(data.visheshSanyukta)}
      </div>
    `;

    this.attachEvents();
  }

  renderSwarSection(swarData) {
    if (this.activeFilter !== 'all' && this.activeFilter !== 'swar') return '';

    return `
      <section class="varna-section" data-group="swar">
        <div class="varna-section-header">
          <h3 class="varna-section-title">${swarData.title}</h3>
          <span class="varna-section-desc">${swarData.desc}</span>
        </div>
        <div class="varna-subgroups">
          ${swarData.categories.map(cat => `
            <div class="varna-subgroup">
              <span class="subgroup-name">${cat.name}</span>
              <div class="letters-row">
                ${cat.letters.map(letter => `
                  <button class="letter-card" data-letter="${letter}" data-type="स्वर" data-category="${cat.name}" data-desc="${cat.desc}">
                    <span class="letter-char">${letter}</span>
                    <span class="letter-hint">ऐका</span>
                  </button>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  renderSwaradiSection(swaradiData) {
    if (this.activeFilter !== 'all' && this.activeFilter !== 'swaradi') return '';

    return `
      <section class="varna-section" data-group="swaradi">
        <div class="varna-section-header">
          <h3 class="varna-section-title">${swaradiData.title}</h3>
          <span class="varna-section-desc">${swaradiData.desc}</span>
        </div>
        <div class="letters-row">
          ${swaradiData.items.map(item => `
            <button class="letter-card letter-card-wide" data-letter="${item.letter}" data-type="स्वरादी" data-category="${item.name}" data-desc="उदा. ${item.example}">
              <span class="letter-char">${item.letter}</span>
              <span class="letter-sub">${item.name}</span>
            </button>
          `).join('')}
        </div>
      </section>
    `;
  }

  renderVyanjaneSection(vyanjaneData) {
    if (this.activeFilter !== 'all' && this.activeFilter !== 'vyanjane') return '';

    return `
      <section class="varna-section" data-group="vyanjane">
        <div class="varna-section-header">
          <h3 class="varna-section-title">${vyanjaneData.title}</h3>
          <span class="varna-section-desc">${vyanjaneData.desc}</span>
        </div>

        <!-- 25 Sparsh Vyanjane Table -->
        <div class="sparsh-table-wrap">
          <div class="table-caption">स्पर्श व्यंजने (२५) — उच्चार स्थानानुसार शास्त्रीय वर्ग</div>
          <div class="sparsh-grid">
            <div class="sparsh-header-cell">स्थान (वर्ग)</div>
            <div class="sparsh-header-cell">कठोर वर्ण (२)</div>
            <div class="sparsh-header-cell">मृदू वर्ण (२)</div>
            <div class="sparsh-header-cell">अनुनासिक (१)</div>

            ${vyanjaneData.sparshTable.map(row => `
              <div class="sparsh-cell sthan-cell">
                <span class="sthan-name">${row.varga}</span>
                <span class="sthan-hint">${row.sthan}</span>
              </div>
              <div class="sparsh-cell">
                ${row.kathor.map(l => `
                  <button class="letter-card mini" data-letter="${l}" data-type="व्यंजन (कठोर)" data-category="${row.varga}" data-desc="उच्चार स्थान: ${row.sthan}">
                    ${l}
                  </button>
                `).join('')}
              </div>
              <div class="sparsh-cell">
                ${row.mridu.map(l => `
                  <button class="letter-card mini" data-letter="${l}" data-type="व्यंजन (मृदू)" data-category="${row.varga}" data-desc="उच्चार स्थान: ${row.sthan}">
                    ${l}
                  </button>
                `).join('')}
              </div>
              <div class="sparsh-cell">
                <button class="letter-card mini anunasik" data-letter="${row.anunasik}" data-type="व्यंजन (अनुनासिक)" data-category="${row.varga}" data-desc="उच्चार स्थान: ${row.sthan}">
                  ${row.anunasik}
                </button>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Other Consonants -->
        <div class="varna-subgroups other-vyanjane">
          ${vyanjaneData.otherGroups.map(grp => `
            <div class="varna-subgroup">
              <span class="subgroup-name">${grp.name}</span>
              <div class="letters-row">
                ${grp.letters.map(letter => `
                  <button class="letter-card" data-letter="${letter}" data-type="${grp.name}" data-category="विशेष उच्चार" data-desc="${grp.note}">
                    <span class="letter-char">${letter}</span>
                  </button>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  renderVisheshSection(visheshData) {
    if (this.activeFilter !== 'all' && this.activeFilter !== 'vishesh') return '';

    return `
      <section class="varna-section" data-group="vishesh">
        <div class="varna-section-header">
          <h3 class="varna-section-title">${visheshData.title}</h3>
          <span class="varna-section-desc">${visheshData.desc}</span>
        </div>
        <div class="letters-row">
          ${visheshData.items.map(item => `
            <button class="letter-card letter-card-wide" data-letter="${item.letter}" data-type="विशेष संयुक्त व्यंजन" data-category="${item.formula}" data-desc="उदा. ${item.example}">
              <span class="letter-char">${item.letter}</span>
              <span class="letter-sub">${item.formula}</span>
            </button>
          `).join('')}
        </div>
      </section>
    `;
  }

  attachEvents() {
    // Filter click
    const filterBtns = this.container.querySelectorAll('.filter-pill');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const filter = e.currentTarget.getAttribute('data-filter');
        this.activeFilter = filter;
        if (window.audioManager) window.audioManager.playTap(480, 0.03);
        this.render();
      });
    });

    // Letter click
    const letterBtns = this.container.querySelectorAll('.letter-card');
    letterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const letter = btn.getAttribute('data-letter');
        const type = btn.getAttribute('data-type');
        const cat = btn.getAttribute('data-category');
        const desc = btn.getAttribute('data-desc');

        if (window.audioManager) {
          window.audioManager.playTap(620, 0.04);
          window.audioManager.speak(letter);
        }

        this.showLetterDetail(letter, type, cat, desc);

        letterBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
      });
    });
  }

  showLetterDetail(letter, type, cat, desc) {
    const box = document.getElementById('letter-detail-display');
    if (!box) return;

    box.innerHTML = `
      <div class="detail-active-view">
        <div class="detail-letter-glyph" style="font-family: var(--font-display, 'Noto Serif Devanagari'); font-weight: 500; min-width: 70px; text-align: center;">${letter}</div>
        <div class="detail-info-pane">
          <div class="detail-tags">
            <span class="detail-tag-pill">${type}</span>
            <span class="detail-tag-pill accent">${cat}</span>
          </div>
          <div class="detail-description">${desc}</div>
        </div>
        <button class="detail-speak-btn" id="pronounce-detail-btn" title="पुन्हा उच्चार ऐका">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
          <span>उच्चार ऐका</span>
        </button>
      </div>
    `;

    // Smooth highlight effect
    box.style.borderColor = 'var(--accent-border)';
    box.style.boxShadow = '0 0 0 3px var(--accent-light)';
    setTimeout(() => {
      box.style.borderColor = '';
      box.style.boxShadow = '';
    }, 800);

    const speakBtn = document.getElementById('pronounce-detail-btn');
    if (speakBtn) {
      speakBtn.addEventListener('click', () => {
        if (window.audioManager) {
          window.audioManager.playTap(580, 0.03);
          window.audioManager.speak(letter);
        }
      });
    }
  }
}

window.varnamalaModule = new VarnamalaModule();
