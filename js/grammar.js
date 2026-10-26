// परस्परसंवादी व्याकरण प्रयोगशाळा (Interactive Grammar Lab)

class GrammarModule {
  constructor() {
    this.container = null;
    this.selectedSubjectIndex = 0;
    this.selectedObjectIndex = 0;
    this.selectedVerbIndex = 0;
  }

  init(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;
    this.render();
  }

  render() {
    const data = MARATHI_CONTENT.grammar;

    this.container.innerHTML = `
      <div class="module-header">
        <div class="module-title-wrap">
          <span class="module-tag">व्याकरण शास्त्र</span>
          <h2 class="module-heading">मराठी वाक्यरचना आणि व्याकरण</h2>
        </div>
        <p class="module-desc">
          मराठी व्याकरणाची रचना अत्यंत तर्कशुद्ध आणि नियमबद्ध आहे. मूलभूत वाक्यरचना सूत्रापासून शब्दांच्या जाती आणि प्रयोगांचे परस्परसंवादी प्रात्यक्षिक येथे अनुभवा.
        </p>
      </div>

      <!-- SOV Structure Card -->
      <section class="grammar-card sov-card">
        <div class="card-title-row">
          <span class="card-badge">मूलभूत नियम</span>
          <h3 class="card-heading">मराठी वाक्यरचना: SOV पद्धत</h3>
        </div>
        <div class="sov-formula-box">
          <div class="sov-tag subject-tag">
            <span class="tag-label">कर्ता</span>
            <span class="tag-en">Subject</span>
          </div>
          <span class="sov-plus">+</span>
          <div class="sov-tag object-tag">
            <span class="tag-label">कर्म</span>
            <span class="tag-en">Object</span>
          </div>
          <span class="sov-plus">+</span>
          <div class="sov-tag verb-tag">
            <span class="tag-label">क्रियापद</span>
            <span class="tag-en">Verb</span>
          </div>
        </div>
        <p class="card-caption">
          ${data.sovExplanation}
        </p>

        <!-- Interactive Sentence Builder -->
        <div class="sentence-builder-widget">
          <div class="builder-header">
            <span class="builder-badge">परस्परसंवादी प्रात्यक्षिक</span>
            <span class="builder-subtitle">खालील घटक निवडून योग्य मराठी वाक्य तयार करा:</span>
          </div>

          <div class="builder-selectors">
            <!-- Subject Selector -->
            <div class="selector-group">
              <label class="selector-label">१. कर्ता (Subject) निवडा:</label>
              <div class="option-chips" id="subject-chips">
                ${data.sentenceBuilder.subjects.map((s, idx) => `
                  <button class="chip ${idx === this.selectedSubjectIndex ? 'active' : ''}" data-idx="${idx}">
                    ${s.label}
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- Object Selector -->
            <div class="selector-group">
              <label class="selector-label">२. कर्म (Object) निवडा:</label>
              <div class="option-chips" id="object-chips">
                ${data.sentenceBuilder.objects.map((o, idx) => `
                  <button class="chip ${idx === this.selectedObjectIndex ? 'active' : ''}" data-idx="${idx}">
                    ${o.label}
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- Verb Selector -->
            <div class="selector-group">
              <label class="selector-label">३. मूळ क्रियापद निवडा:</label>
              <div class="option-chips" id="verb-chips">
                ${data.sentenceBuilder.verbs.map((v, idx) => `
                  <button class="chip ${idx === this.selectedVerbIndex ? 'active' : ''}" data-idx="${idx}">
                    ${v.label}
                  </button>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Sentence Output Box -->
          <div class="sentence-output-area" id="sentence-output-box">
            <!-- Rendered by updateSentence() -->
          </div>
        </div>
      </section>

      <!-- Parts of Speech Grid -->
      <section class="grammar-card">
        <div class="card-title-row">
          <span class="card-badge">शब्दसंपदा</span>
          <h3 class="card-heading">शब्दांच्या ८ जाती (Parts of Speech)</h3>
        </div>
        <p class="card-caption">
          मराठीत शब्दांचे वर्गीकरण दोन मुख्य गटांत होते: <strong>विकारी</strong> (लिंग, वचन, पुरुषानुसार बदलणारे) आणि <strong>अविकारी</strong> (कोणताही बदल न होणारी अव्यये).
        </p>

        <div class="pos-dual-grid">
          ${data.partsOfSpeech.map(group => `
            <div class="pos-column">
              <div class="pos-col-header">
                <span class="pos-col-title">${group.type}</span>
              </div>
              <div class="pos-cards-list">
                ${group.items.map(item => `
                  <div class="pos-mini-card">
                    <div class="pos-mini-head">
                      <span class="pos-name">${item.name}</span>
                    </div>
                    <p class="pos-desc">${item.desc}</p>
                    <div class="pos-example">
                      <span class="ex-label">उदा.</span>
                      <span class="ex-val">${item.example}</span>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Samanyaroop Interactive Demo -->
      <section class="grammar-card">
        <div class="card-title-row">
          <span class="card-badge">खास वैशिष्ट्य</span>
          <h3 class="card-heading">${data.samanyaroop.title}</h3>
        </div>
        <p class="card-caption">
          ${data.samanyaroop.desc}
        </p>

        <div class="samanyaroop-table-wrap">
          <table class="minimal-table">
            <thead>
              <tr>
                <th>मूळ नाम</th>
                <th>जोडलेला प्रत्यय</th>
                <th>सामान्यरूप</th>
                <th>अंतिम तयार रूप</th>
              </tr>
            </thead>
            <tbody>
              ${data.samanyaroop.examples.map(ex => `
                <tr>
                  <td><span class="table-text-primary">${ex.original}</span></td>
                  <td><span class="table-text-accent">${ex.suffix}</span></td>
                  <td><span class="table-pill-base">${ex.base}</span></td>
                  <td><span class="table-text-bold">${ex.final}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </section>

      <!-- Prayoga Interactive Overview -->
      <section class="grammar-card">
        <div class="card-title-row">
          <span class="card-badge">प्रयोग विचार</span>
          <h3 class="card-heading">मराठीतील ३ मुख्य प्रयोग</h3>
        </div>
        <p class="card-caption">
          वाक्यात क्रियापदाचे रूप कर्त्याच्या किंवा कर्माच्या लिंग-वचनानुसार कसे बदलते यावरून प्रयोगाचे ३ प्रकार ठरतात:
        </p>

        <div class="prayoga-cards-grid">
          ${data.prayoga.map(p => `
            <div class="prayoga-card">
              <div class="prayoga-badge">${p.badge}</div>
              <h4 class="prayoga-title">${p.name}</h4>
              <p class="prayoga-rule">${p.rule}</p>
              <div class="prayoga-example">
                <span class="ex-tag">उदा.</span>
                <span>${p.example}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;

    this.attachEvents();
    this.updateSentence();
  }

  attachEvents() {
    // Subject chips
    const subjChips = this.container.querySelectorAll('#subject-chips .chip');
    subjChips.forEach(chip => {
      chip.addEventListener('click', (e) => {
        subjChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.selectedSubjectIndex = parseInt(chip.getAttribute('data-idx'));
        if (window.audioManager) window.audioManager.playTap(520, 0.03);
        this.updateSentence();
      });
    });

    // Object chips
    const objChips = this.container.querySelectorAll('#object-chips .chip');
    objChips.forEach(chip => {
      chip.addEventListener('click', (e) => {
        objChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.selectedObjectIndex = parseInt(chip.getAttribute('data-idx'));
        if (window.audioManager) window.audioManager.playTap(520, 0.03);
        this.updateSentence();
      });
    });

    // Verb chips
    const verbChips = this.container.querySelectorAll('#verb-chips .chip');
    verbChips.forEach(chip => {
      chip.addEventListener('click', (e) => {
        verbChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.selectedVerbIndex = parseInt(chip.getAttribute('data-idx'));
        if (window.audioManager) window.audioManager.playTap(520, 0.03);
        this.updateSentence();
      });
    });
  }

  updateSentence() {
    const data = MARATHI_CONTENT.grammar.sentenceBuilder;
    const subject = data.subjects[this.selectedSubjectIndex];
    const object = data.objects[this.selectedObjectIndex];
    const verbObj = data.verbs[this.selectedVerbIndex];

    // Determine correct verb form based on subject gender and number
    let verbForm = verbObj.textMasc;
    if (subject.number === 'plur') {
      verbForm = verbObj.textPlur;
    } else if (subject.gender === 'fem') {
      verbForm = verbObj.textFem;
    }

    const fullSentence = `${subject.text} ${object.text} ${verbForm}.`;
    const box = document.getElementById('sentence-output-box');
    if (!box) return;

    box.innerHTML = `
      <div class="result-sentence-display">
        <span class="hl-subject" title="कर्ता (Subject)">${subject.text}</span>
        <span class="hl-object" title="कर्म (Object)">${object.text}</span>
        <span class="hl-verb" title="क्रियापद (Verb)">${verbForm}.</span>
      </div>
      <div class="result-actions">
        <button class="speak-sentence-btn" id="speak-sentence-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
          <span>वाक्य ऐका</span>
        </button>
        <span class="analysis-hint">रचना: कर्ता (${subject.text}) + कर्म (${object.text}) + क्रियापद (${verbForm})</span>
      </div>
    `;

    const speakBtn = document.getElementById('speak-sentence-btn');
    if (speakBtn) {
      speakBtn.addEventListener('click', () => {
        if (window.audioManager) {
          window.audioManager.playTap(580, 0.03);
          window.audioManager.speak(fullSentence);
        }
      });
    }
  }
}

window.grammarModule = new GrammarModule();
