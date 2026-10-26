// महाराष्ट्र व बोलीभाषा दालन (Maharashtra Divisions & Regional Dialects — Widescreen Layout)

class DialectsModule {
  constructor() {
    this.container = null;
    this.activeDivisionId = 'konkan';
  }

  init(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;
    this.render();
  }

  render() {
    const list = MARATHI_CONTENT.dialects;
    const activeData = list.find(d => d.id === this.activeDivisionId) || list[0];

    this.container.innerHTML = `
      <div class="module-header">
        <div class="module-title-wrap">
          <span class="module-tag">भूगोल व लोकसंस्कृती</span>
          <h2 class="module-heading">प्रादेशिक बोलीभाषा</h2>
        </div>
        <p class="module-desc">
          "दर बारा कोसांवर भाषा बदलते" अशी मराठीची ख्याती आहे. सह्याद्रीच्या डोंगररांगांपासून ते विदर्भाच्या वनांपर्यंत महाराष्ट्राच्या ६ प्रशासकीय विभागांतील समृद्ध बोलीभाषा आणि सविस्तर नकाशा येथे अनुभवा.
        </p>
      </div>

      <!-- Top Section: Interactive Division Selectors & Dialect Spotlight -->
      <div class="dialects-top-stage">
        <!-- Division Cards Grid -->
        <div class="divisions-selector-grid" role="tablist">
          ${list.map(d => `
            <button class="division-card-btn ${d.id === this.activeDivisionId ? 'active' : ''}" data-id="${d.id}" role="tab" aria-selected="${d.id === this.activeDivisionId}">
              <div class="card-btn-top">
                <span class="division-color-badge" style="background-color: ${d.color};"></span>
                <span class="division-card-name">${d.name.split('—')[0].trim()}</span>
              </div>
              <span class="division-card-dialect">${d.name.split('—')[1] ? d.name.split('—')[1].trim() : ''}</span>
              <span class="division-card-tag">${d.tag}</span>
            </button>
          `).join('')}
        </div>

        <!-- Active Dialect Spotlight Card -->
        <div class="dialect-detail-card" id="dialect-detail-pane">
          ${this.renderDialectDetail(activeData)}
        </div>
      </div>

      <!-- Bottom / End Section: Grand Widescreen Map Showcase -->
      <section class="widescreen-map-showcase" aria-label="महाराष्ट्र सविस्तर नकाशा">
        <div class="widescreen-map-header">
          <div class="map-header-left">
            <span class="map-section-badge">प्रादेशिक भूगोल नकाशा</span>
            <h3 class="widescreen-map-title">महाराष्ट्राचा प्रशासकीय व बोलीभाषा नकाशा (Widescreen View)</h3>
            <p class="widescreen-map-sub">
              कोकण, पुणे, नाशिक, छत्रपती संभाजीनगर (मराठवाडा), अमरावती आणि नागपूर (विदर्भ) या ६ विभागांची भौगोलिक व्याप्ती. नकाशावर क्लिक करून पूर्ण आकारात (Pop-up) पहा.
            </p>
          </div>
          <button class="map-popup-btn" id="expand-map-popup-btn" title="नकाशा पूर्ण स्क्रीनवर उघडा">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 3 21 3 21 9"></polyline>
              <polyline points="9 21 3 21 3 15"></polyline>
              <line x1="21" y1="3" x2="14" y2="10"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
            <span>पूर्ण स्क्रीनवर पहा (Pop-up)</span>
          </button>
        </div>

        <!-- Interactive Division Legend Chips -->
        <div class="map-interactive-legend">
          <span class="legend-hint">त्वरित विभाग निवडा:</span>
          ${list.map(d => `
            <button class="legend-chip-btn ${d.id === this.activeDivisionId ? 'active' : ''}" data-id="${d.id}">
              <span class="chip-color-dot" style="background-color: ${d.color};"></span>
              <span>${d.name.split('—')[0].trim()}</span>
            </button>
          `).join('')}
        </div>

        <!-- Big Widescreen Map Container -->
        <div class="widescreen-map-viewport" id="widescreen-map-trigger" title="मोठ्या आकारात पाहण्यासाठी नकाशावर क्लिक करा">
          <div class="map-zoom-hint-overlay">
            <span>⤢ मोठ्या आकारात पाहण्यासाठी क्लिक करा</span>
          </div>
          <img 
            src="assets/Maharashtra_Divisions.svg" 
            alt="महाराष्ट्र प्रशासकीय विभाग आणि जिल्हे सविस्तर नकाशा" 
            class="widescreen-map-img" 
            loading="lazy"
          />
        </div>

        <!-- Map Footnote & Credit -->
        <div class="widescreen-map-footer">
          <span class="map-credit-text">
            स्रोत: महाराष्ट्र शासन प्रशासकीय विभाग व जिल्हा रचना | संपादन: मराठी ज्ञानपीठ
          </span>
        </div>
      </section>

      <!-- Regional Expressions Comparison Card -->
      <section class="dialect-comparison-card" style="margin-top: 2rem; background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 2rem; box-shadow: var(--shadow-subtle);">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 0.75rem;">
          <div>
            <span class="module-tag">संवाद तुलना</span>
            <h3 style="font-size: 1.35rem; margin-top: 0.35rem;">एकाच संवादाची ६ बोलींमधील रूपे</h3>
          </div>
          <span style="font-size: 0.88rem; color: var(--text-muted);">"दर बारा कोसांवर भाषा बदलते — प्रत्येक बोलीचा अनोखा गोडवा"</span>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1rem;">
          ${list.map(d => `
            <div style="background: var(--bg-secondary); border: 1px solid var(--border-subtle); border-left: 3.5px solid ${d.color}; border-radius: var(--radius-md); padding: 1.15rem; display: flex; flex-direction: column; justify-content: space-between; gap: 0.65rem;">
              <div>
                <div style="display: flex; align-items: center; justify-content: space-between;">
                  <strong style="font-size: 0.95rem; color: ${d.color};">${d.name.split('—')[0].trim()}</strong>
                  <span style="font-size: 0.75rem; color: var(--text-muted);">${d.region.split(',')[0]}</span>
                </div>
                <div style="font-size: 1.1rem; color: var(--text-primary); margin-top: 0.4rem; font-family: var(--font-display);">
                  "${d.samplePhrase}"
                </div>
              </div>
              <div style="display: flex; justify-content: flex-end;">
                <button class="compare-phrase-speak-btn" data-phrase="${d.samplePhrase}" style="display: inline-flex; align-items: center; gap: 0.35rem; font-size: 0.8rem; padding: 0.3rem 0.8rem; border-radius: var(--radius-full); background: var(--bg-surface); border: 1px solid var(--border-subtle); color: var(--text-primary); cursor: pointer;">
                  🔊 ऐका
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;

    this.attachEvents();
  }

  renderDialectDetail(data) {
    return `
      <div class="dialect-spotlight">
        <div class="spotlight-top">
          <div class="spotlight-badge" style="border-color: ${data.color}; color: ${data.color};">
            ${data.tag}
          </div>
          <h3 class="spotlight-title">${data.name}</h3>
          <span class="spotlight-region"><strong>जिल्हे व परिसर:</strong> ${data.region}</span>
        </div>

        <div class="spotlight-body">
          <div class="feature-block">
            <h4 class="feature-title">बोलीची खास वैशिष्ट्ये:</h4>
            <p class="feature-desc">${data.features}</p>
          </div>

          <div class="sample-phrase-box">
            <div class="phrase-head">
              <span class="phrase-tag">नमुना संवाद / वाक्य:</span>
              <button class="phrase-speak-btn" id="speak-dialect-phrase-btn" title="संवाद ऐका">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                </svg>
                <span>उच्चार ऐका</span>
              </button>
            </div>
            <div class="phrase-content">
              "${data.samplePhrase}"
            </div>
          </div>
        </div>
      </div>
    `;
  }

  attachEvents() {
    // Top division card clicks
    const btns = this.container.querySelectorAll('.division-card-btn, .legend-chip-btn');
    btns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = btn.getAttribute('data-id');
        this.selectDivision(id);
      });
    });

    // Map Click & Popup button
    const mapTrigger = document.getElementById('widescreen-map-trigger');
    const popupBtn = document.getElementById('expand-map-popup-btn');

    const openMapLightbox = () => {
      if (window.navigationManager && window.navigationManager.openLightbox) {
        window.navigationManager.openLightbox({
          image: 'assets/Maharashtra_Divisions.svg',
          title: 'महाराष्ट्राचे ६ प्रशासकीय विभाग व जिल्हे सविस्तर नकाशा',
          caption: 'कोकण, पुणे, नाशिक, छत्रपती संभाजीनगर (मराठवाडा), अमरावती आणि नागपूर (विदर्भ) या ६ विभागांचा अधिकृत प्रशासकीय नकाशा.',
          credit: 'महाराष्ट्र शासन प्रशासकीय रचना / Wikimedia Commons',
          license: 'Public Domain / CC BY-SA',
          sourceUrl: 'assets/Maharashtra_Divisions.svg'
        });
      }
    };

    if (mapTrigger) mapTrigger.addEventListener('click', openMapLightbox);
    if (popupBtn) popupBtn.addEventListener('click', openMapLightbox);

    // Comparative phrase speak buttons
    const compareBtns = this.container.querySelectorAll('.compare-phrase-speak-btn');
    compareBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const phrase = btn.getAttribute('data-phrase');
        if (window.audioManager && phrase) {
          window.audioManager.playTap(600, 0.03);
          const clean = phrase.split('(')[0].replace(/["']/g, '').trim();
          window.audioManager.speak(clean);
        }
      });
    });

    const initial = MARATHI_CONTENT.dialects.find(d => d.id === this.activeDivisionId);
    if (initial) {
      this.attachSpeechEvent(initial.samplePhrase);
    }
  }

  selectDivision(id) {
    this.activeDivisionId = id;

    // Update active classes on cards and legend chips
    const allBtns = this.container.querySelectorAll('.division-card-btn, .legend-chip-btn');
    allBtns.forEach(b => {
      const isMatch = b.getAttribute('data-id') === id;
      b.classList.toggle('active', isMatch);
      if (b.classList.contains('division-card-btn')) {
        b.setAttribute('aria-selected', isMatch);
      }
    });

    if (window.audioManager) window.audioManager.playTap(540, 0.03);

    const activeData = MARATHI_CONTENT.dialects.find(d => d.id === id);
    const pane = document.getElementById('dialect-detail-pane');
    if (pane && activeData) {
      pane.innerHTML = this.renderDialectDetail(activeData);
      this.attachSpeechEvent(activeData.samplePhrase);
    }
  }

  attachSpeechEvent(phrase) {
    const speakBtn = document.getElementById('speak-dialect-phrase-btn');
    if (speakBtn) {
      speakBtn.addEventListener('click', () => {
        if (window.audioManager) {
          window.audioManager.playTap(600, 0.03);
          const cleanPhrase = phrase.split('(')[0].replace(/["']/g, '').trim();
          window.audioManager.speak(cleanPhrase);
        }
      });
    }
  }
}

window.dialectsModule = new DialectsModule();
