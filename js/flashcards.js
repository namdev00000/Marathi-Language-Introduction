// १००० शब्दसंग्रह फ्लॅशकार्ड्स दालन (1,000 Flashcard Interactive Deck)

class FlashcardsModule {
  constructor() {
    this.container = null;
    this.words = typeof MARATHI_VOCABULARY !== 'undefined' ? MARATHI_VOCABULARY : [];
    this.currentPart = 1; // 1 to 10, or 'all'
    this.searchQuery = '';
    this.activePosFilter = 'all';
    this.currentIndex = 0;
    this.viewMode = 'single'; // 'single' (focused card), 'grid' (browse deck), or 'quiz' (interactive game)
    this.isFlipped = false;
    this.showEnglishHint = false;
    this.bookmarks = JSON.parse(localStorage.getItem('marathi_vocab_bookmarks') || '[]');
    this.quizScore = 0;
    this.quizQuestion = null;
    this.quizAnswered = false;
    this.quizLastCorrect = false;
  }

  init(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;
    this.render();
  }

  getDailyWord() {
    // Deterministic daily word based on date
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const seed = today.getFullYear() * 1000 + dayOfYear;
    const index = seed % this.words.length;
    return this.words[index] || this.words[0];
  }

  getFilteredWords() {
    return this.words.filter(item => {
      // Filter by Part
      if (this.currentPart !== 'all' && this.currentPart !== 'bookmarks') {
        if (item.part !== this.currentPart) return false;
      }

      // Filter by Bookmarks
      if (this.currentPart === 'bookmarks') {
        if (!this.bookmarks.includes(item.id)) return false;
      }

      // Filter by POS
      if (this.activePosFilter !== 'all') {
        if (!item.pos.includes(this.activePosFilter)) return false;
      }

      // Search query
      if (this.searchQuery) {
        const q = this.searchQuery.toLowerCase().trim();
        const inWord = item.word.toLowerCase().includes(q);
        const inMeaning = item.meaning.toLowerCase().includes(q);
        const inEng = item.english.toLowerCase().includes(q);
        const inPos = item.pos.toLowerCase().includes(q);
        if (!inWord && !inMeaning && !inEng && !inPos) return false;
      }

      return true;
    });
  }

  render() {
    const filtered = this.getFilteredWords();
    const totalCount = filtered.length;
    const currentWord = filtered[this.currentIndex] || null;

    this.container.innerHTML = `
      <div class="module-header">
        <div class="module-title-wrap">
          <span class="module-tag">शब्दसंपदा भांडार</span>
          <h2 class="module-heading">१००० सर्वाधिक वापरले जाणारे मराठी शब्द</h2>
        </div>
        <p class="module-desc">
          दहा समृद्ध विभागांमध्ये विभागलेला हा शब्दसंग्रह मराठी भाषेतील दैनंदिन, व्यावहारिक, साहित्यिक आणि शास्त्रीय शब्दांचा महासागर आहे. फ्लॅशकार्डवर क्लिक करून त्याचा सोपा अर्थ पहा.
        </p>
      </div>

      <!-- Controls: Part Selector & Search Bar -->
      <div class="flashcards-toolbar">
        <!-- Part Tabs Carousel / Bar -->
        <div class="parts-nav-scroll" role="tablist">
          <button class="part-tab-btn ${this.currentPart === 'all' ? 'active' : ''}" data-part="all">सर्व शब्द (१०००)</button>
          ${MARATHI_CONTENT.partsCatalog.map(p => `
            <button class="part-tab-btn ${this.currentPart === p.part ? 'active' : ''}" data-part="${p.part}">
              भाग ${p.part} (${p.range})
            </button>
          `).join('')}
          <button class="part-tab-btn bookmark-tab ${this.currentPart === 'bookmarks' ? 'active' : ''}" data-part="bookmarks">
            ★ जतन केलेले (${this.bookmarks.length})
          </button>
        </div>

        <!-- Filter Row -->
        <div class="deck-filters-row">
          <div class="deck-search-box">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" id="vocab-search-input" placeholder="शब्द, अर्थ किंवा भाषांतर शोधा..." value="${this.searchQuery}" />
            ${this.searchQuery ? `<button class="clear-search-btn" id="clear-search-btn">✕</button>` : ''}
          </div>

          <div class="deck-options-group">
            <!-- POS Dropdown Filter -->
            <select class="minimal-select" id="pos-filter-select">
              <option value="all" ${this.activePosFilter === 'all' ? 'selected' : ''}>सर्व जाती (All)</option>
              <option value="नाम" ${this.activePosFilter === 'नाम' ? 'selected' : ''}>नाम (Noun)</option>
              <option value="सर्वनाम" ${this.activePosFilter === 'सर्वनाम' ? 'selected' : ''}>सर्वनाम (Pronoun)</option>
              <option value="विशेषण" ${this.activePosFilter === 'विशेषण' ? 'selected' : ''}>विशेषण (Adjective)</option>
              <option value="क्रियापद" ${this.activePosFilter === 'क्रियापद' ? 'selected' : ''}>क्रियापद (Verb)</option>
              <option value="क्रियाविशेषण" ${this.activePosFilter === 'क्रियाविशेषण' ? 'selected' : ''}>क्रियाविशेषण (Adverb)</option>
            </select>

            <!-- View Toggle: Single Focus vs Grid Deck vs Interactive Quiz -->
            <div class="view-toggle-btns">
              <button class="view-btn ${this.viewMode === 'single' ? 'active' : ''}" id="view-single-btn" title="एकाग्र फ्लॅशकार्ड मोड">
                कार्ड
              </button>
              <button class="view-btn ${this.viewMode === 'grid' ? 'active' : ''}" id="view-grid-btn" title="ग्रिड मोड">
                ग्रिड
              </button>
              <button class="view-btn ${this.viewMode === 'quiz' ? 'active' : ''}" id="view-quiz-btn" title="मराठी शब्दखेळ व चाचणी">
                🎮 शब्दखेळ
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Daily Featured Word -->
      ${this.currentPart === 1 || this.currentPart === 'all' ? (() => {
        const daily = this.getDailyWord();
        if (daily) {
          const isBookmarked = this.bookmarks.includes(daily.id);
          return `
            <div class="daily-word-card">
              <div style="flex-shrink: 0;">
                <span class="daily-word-badge">आजचा मराठी शब्द</span>
                <div class="daily-word-text">${daily.word}</div>
                <div class="daily-word-pos">${daily.pos}</div>
              </div>
              <div style="flex: 1; min-width: 0;">
                <div class="daily-word-meaning">${daily.meaning}</div>
                <div style="font-size: 0.86rem; color: var(--text-muted); margin-top: 0.35rem;">English: <em>${daily.english}</em></div>
              </div>
              <div class="daily-word-actions">
                <button class="daily-speak-btn" data-word="${daily.word}" title="शब्द उच्चार ऐका">
                  🔊 ऐका
                </button>
                <button class="daily-bookmark-btn ${isBookmarked ? 'bookmarked' : ''}" data-id="${daily.id}" title="${isBookmarked ? 'जतन केलेला काढा' : 'माझ्या संग्रहात जतन करा'}">
                  ★
                </button>
              </div>
            </div>
          `;
        }
        return '';
      })() : ''}

      <!-- Main Flashcard Workspace -->
      ${totalCount === 0 ? this.renderEmptyState() : (this.viewMode === 'single' ? this.renderSingleView(currentWord, totalCount) : (this.viewMode === 'grid' ? this.renderGridView(filtered) : this.renderQuizView(filtered)))}
    `;

    this.attachEvents();
  }

  renderEmptyState() {
    return `
      <div class="empty-results-box">
        <span class="empty-icon">🔍</span>
        <h4 class="empty-title">कोणताही शब्द सापडला नाही</h4>
        <p class="empty-desc">कृपया शोध शब्द बदला किंवा फिल्टर पुन्हा सेट करा.</p>
        <button class="reset-deck-btn" id="reset-deck-btn">फिल्टर पूर्ववत करा</button>
      </div>
    `;
  }

  renderSingleView(word, total) {
    if (!word) return this.renderEmptyState();

    const isBookmarked = this.bookmarks.includes(word.id);

    return `
      <div class="single-card-stage">
        <!-- Deck Navigation Status -->
        <div class="deck-status-bar">
          <span class="card-counter">शब्द ${this.currentIndex + 1} / ${total}</span>
          <span class="deck-part-indicator">भाग ${word.part} (क्र. ${word.id})</span>
          <button class="bookmark-btn ${isBookmarked ? 'bookmarked' : ''}" id="toggle-bookmark-btn" title="${isBookmarked ? 'जतन केलेला काढा' : 'जतन करा'}">
            ★
          </button>
        </div>

        <!-- 3D Flippable Flashcard -->
        <div class="card-flipper-container" id="main-flashcard">
          <div class="flashcard-inner ${this.isFlipped ? 'flipped' : ''}">
            
            <!-- Card Front -->
            <div class="card-face card-front">
              <div class="card-front-top">
                <span class="word-id-pill">#${word.id}</span>
                <span class="pos-badge">${word.pos}</span>
              </div>
              <div class="card-word-title">${word.word}</div>
              <div class="card-front-bottom">
                <button class="speak-card-btn" id="speak-current-word-btn" title="उच्चार ऐका">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                  </svg>
                  <span>उच्चार ऐका</span>
                </button>
                <div class="flip-instruction">
                  <span>अर्थ पाहण्यासाठी कार्डवर क्लिक करा</span>
                  <span class="flip-arrow">↻</span>
                </div>
              </div>
            </div>

            <!-- Card Back -->
            <div class="card-face card-back">
              <div class="card-back-top">
                <span class="back-title-word">${word.word}</span>
                <span class="pos-badge">${word.pos}</span>
              </div>

              <div class="card-meaning-content">
                <span class="meaning-label">मराठीत सोपा अर्थ / संदर्भ:</span>
                <p class="meaning-text">${word.meaning}</p>
              </div>

              <!-- English Translation Subtle Hint -->
              <div class="english-hint-container">
                <button class="english-hint-toggle-btn" id="toggle-english-hint-btn">
                  <span>${this.showEnglishHint ? 'इंग्रजी भाषांतर लपवा' : 'इंग्रजी भाषांतर दाखवा (Hint)'}</span>
                </button>
                ${this.showEnglishHint ? `
                  <div class="english-translation-box">
                    <strong>English:</strong> ${word.english}
                  </div>
                ` : ''}
              </div>

              <div class="card-back-bottom">
                <span class="flip-back-hint">मागे जाण्यासाठी कार्डवर पुन्हा क्लिक करा ↺</span>
              </div>
            </div>

          </div>
        </div>

        <!-- Navigation Action Buttons -->
        <div class="deck-action-buttons">
          <button class="nav-btn prev-btn" id="prev-card-btn" ${this.currentIndex === 0 ? 'disabled' : ''}>
            ← मागील शब्द
          </button>
          <button class="action-btn flip-btn" id="flip-action-btn">
            ${this.isFlipped ? 'मूळ शब्द पहा ↺' : 'अर्थ पहा ↻'}
          </button>
          <button class="action-btn shuffle-btn" id="shuffle-card-btn" title="कोणताही यादृच्छिक शब्द आणा">
            यादृच्छिक (Shuffle)
          </button>
          <button class="nav-btn next-btn" id="next-card-btn" ${this.currentIndex >= total - 1 ? 'disabled' : ''}>
            पुढील शब्द →
          </button>
        </div>
      </div>
    `;
  }

  renderGridView(words) {
    return `
      <div class="grid-cards-stage">
        <div class="grid-count-status">
          एकूण सापडलेले शब्द: <strong>${words.length}</strong>
        </div>
        <div class="vocab-cards-grid">
          ${words.map((item, idx) => `
            <div class="mini-vocab-card" data-idx="${idx}" data-id="${item.id}">
              <div class="mini-card-head">
                <span class="mini-id">#${item.id}</span>
                <span class="mini-pos">${item.pos.split('(')[0].trim()}</span>
              </div>
              <div class="mini-word">${item.word}</div>
              <div class="mini-meaning">${item.meaning}</div>
              <div class="mini-card-footer">
                <button class="mini-speak-btn" data-word="${item.word}">उच्चार</button>
                <button class="mini-focus-btn" data-idx="${idx}">विस्तारित कार्ड →</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  attachEvents() {
    // Part Tabs
    const partBtns = this.container.querySelectorAll('.part-tab-btn');
    partBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const p = btn.getAttribute('data-part');
        this.currentPart = p === 'all' || p === 'bookmarks' ? p : parseInt(p);
        this.currentIndex = 0;
        this.isFlipped = false;
        if (window.audioManager) window.audioManager.playTap(500, 0.03);
        this.render();
      });
    });

    // Search Input
    const searchInput = document.getElementById('vocab-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value;
        this.currentIndex = 0;
        this.isFlipped = false;
        this.render();
        const reInput = document.getElementById('vocab-search-input');
        if (reInput) {
          reInput.focus();
          reInput.selectionStart = reInput.selectionEnd = reInput.value.length;
        }
      });
    }

    const clearSearch = document.getElementById('clear-search-btn');
    if (clearSearch) {
      clearSearch.addEventListener('click', () => {
        this.searchQuery = '';
        this.currentIndex = 0;
        if (window.audioManager) window.audioManager.playTap(440, 0.02);
        this.render();
      });
    }

    // POS Filter
    const posSelect = document.getElementById('pos-filter-select');
    if (posSelect) {
      posSelect.addEventListener('change', (e) => {
        this.activePosFilter = e.target.value;
        this.currentIndex = 0;
        this.isFlipped = false;
        if (window.audioManager) window.audioManager.playTap(520, 0.03);
        this.render();
      });
    }

    // View buttons
    const singleBtn = document.getElementById('view-single-btn');
    const gridBtn = document.getElementById('view-grid-btn');
    const quizBtn = document.getElementById('view-quiz-btn');
    if (singleBtn) {
      singleBtn.addEventListener('click', () => {
        this.viewMode = 'single';
        if (window.audioManager) window.audioManager.playTap(520, 0.03);
        this.render();
      });
    }
    if (gridBtn) {
      gridBtn.addEventListener('click', () => {
        this.viewMode = 'grid';
        if (window.audioManager) window.audioManager.playTap(520, 0.03);
        this.render();
      });
    }
    if (quizBtn) {
      quizBtn.addEventListener('click', () => {
        this.viewMode = 'quiz';
        this.quizAnswered = false;
        this.generateNewQuizQuestion(this.getFilteredWords());
        if (window.audioManager) window.audioManager.playTap(580, 0.03);
        this.render();
      });
    }

    // Reset button
    const resetBtn = document.getElementById('reset-deck-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        this.currentPart = 'all';
        this.searchQuery = '';
        this.activePosFilter = 'all';
        this.currentIndex = 0;
        this.isFlipped = false;
        if (window.audioManager) window.audioManager.playTap(520, 0.03);
        this.render();
      });
    }

    if (this.viewMode === 'single') {
      this.attachSingleViewEvents();
    } else if (this.viewMode === 'grid') {
      this.attachGridViewEvents();
    } else if (this.viewMode === 'quiz') {
      this.attachQuizViewEvents();
    }

    // Daily word speak button
    const dailySpeakBtn = this.container.querySelector('.daily-speak-btn');
    if (dailySpeakBtn) {
      dailySpeakBtn.addEventListener('click', () => {
        const word = dailySpeakBtn.getAttribute('data-word');
        if (window.audioManager && word) {
          window.audioManager.playTap(600, 0.03);
          window.audioManager.speak(word);
        }
      });
    }

    // Daily word bookmark button
    const dailyBookmarkBtn = this.container.querySelector('.daily-bookmark-btn');
    if (dailyBookmarkBtn) {
      dailyBookmarkBtn.addEventListener('click', () => {
        const id = parseInt(dailyBookmarkBtn.getAttribute('data-id'));
        if (this.bookmarks.includes(id)) {
          this.bookmarks = this.bookmarks.filter(b => b !== id);
        } else {
          this.bookmarks.push(id);
        }
        localStorage.setItem('marathi_vocab_bookmarks', JSON.stringify(this.bookmarks));
        if (window.audioManager) window.audioManager.playTap(680, 0.04);
        this.render();
      });
    }
  }

  attachSingleViewEvents() {
    const filtered = this.getFilteredWords();
    const currentWord = filtered[this.currentIndex];
    if (!currentWord) return;

    // Flip card on card click
    const cardEl = document.getElementById('main-flashcard');
    if (cardEl) {
      cardEl.addEventListener('click', (e) => {
        // Prevent flipping when clicking speak button or english hint button
        if (e.target.closest('#speak-current-word-btn') || e.target.closest('#toggle-english-hint-btn')) {
          return;
        }
        this.isFlipped = !this.isFlipped;
        if (window.audioManager) window.audioManager.playFlip();
        const inner = cardEl.querySelector('.flashcard-inner');
        if (inner) inner.classList.toggle('flipped', this.isFlipped);
        const flipBtn = document.getElementById('flip-action-btn');
        if (flipBtn) flipBtn.textContent = this.isFlipped ? 'मूळ शब्द पहा ↺' : 'अर्थ पहा ↻';
      });
    }

    // Flip button
    const flipBtn = document.getElementById('flip-action-btn');
    if (flipBtn) {
      flipBtn.addEventListener('click', () => {
        this.isFlipped = !this.isFlipped;
        if (window.audioManager) window.audioManager.playFlip();
        const inner = document.querySelector('.flashcard-inner');
        if (inner) inner.classList.toggle('flipped', this.isFlipped);
        flipBtn.textContent = this.isFlipped ? 'मूळ शब्द पहा ↺' : 'अर्थ पहा ↻';
      });
    }

    // English hint toggle
    const hintBtn = document.getElementById('toggle-english-hint-btn');
    if (hintBtn) {
      hintBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.showEnglishHint = !this.showEnglishHint;
        if (window.audioManager) window.audioManager.playTap(480, 0.02);
        this.render();
      });
    }

    // Prev / Next buttons
    const prevBtn = document.getElementById('prev-card-btn');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (this.currentIndex > 0) {
          this.currentIndex--;
          this.isFlipped = false;
          if (window.audioManager) window.audioManager.playTap(490, 0.03);
          this.render();
        }
      });
    }

    const nextBtn = document.getElementById('next-card-btn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (this.currentIndex < filtered.length - 1) {
          this.currentIndex++;
          this.isFlipped = false;
          if (window.audioManager) window.audioManager.playTap(520, 0.03);
          this.render();
        }
      });
    }

    // Shuffle
    const shuffleBtn = document.getElementById('shuffle-card-btn');
    if (shuffleBtn) {
      shuffleBtn.addEventListener('click', () => {
        const randIdx = Math.floor(Math.random() * filtered.length);
        this.currentIndex = randIdx;
        this.isFlipped = false;
        if (window.audioManager) window.audioManager.playTap(640, 0.04);
        this.render();
      });
    }

    // Speak button
    const speakBtn = document.getElementById('speak-current-word-btn');
    if (speakBtn) {
      speakBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (window.audioManager) {
          window.audioManager.playTap(600, 0.03);
          window.audioManager.speak(currentWord.word);
        }
      });
    }

    // Bookmark toggle
    const bookmarkBtn = document.getElementById('toggle-bookmark-btn');
    if (bookmarkBtn) {
      bookmarkBtn.addEventListener('click', () => {
        const id = currentWord.id;
        if (this.bookmarks.includes(id)) {
          this.bookmarks = this.bookmarks.filter(b => b !== id);
        } else {
          this.bookmarks.push(id);
        }
        localStorage.setItem('marathi_vocab_bookmarks', JSON.stringify(this.bookmarks));
        if (window.audioManager) window.audioManager.playTap(680, 0.04);
        this.render();
      });
    }
  }

  attachGridViewEvents() {
    const filtered = this.getFilteredWords();

    const focusBtns = this.container.querySelectorAll('.mini-focus-btn');
    focusBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-idx'));
        this.currentIndex = idx;
        this.viewMode = 'single';
        this.isFlipped = false;
        if (window.audioManager) window.audioManager.playTap(520, 0.03);
        this.render();
      });
    });

    const speakBtns = this.container.querySelectorAll('.mini-speak-btn');
    speakBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const word = btn.getAttribute('data-word');
        if (window.audioManager) {
          window.audioManager.playTap(600, 0.03);
          window.audioManager.speak(word);
        }
      });
    });
  }

  generateNewQuizQuestion(pool) {
    const list = pool && pool.length >= 4 ? pool : this.words;
    if (!list || list.length < 4) return;

    // Pick random target word
    const targetIdx = Math.floor(Math.random() * list.length);
    const target = list[targetIdx];

    // Pick 3 distractors
    const distractors = [];
    while (distractors.length < 3) {
      const r = Math.floor(Math.random() * list.length);
      if (r !== targetIdx && !distractors.includes(r)) {
        distractors.push(r);
      }
    }

    const options = [
      { meaning: target.meaning, isCorrect: true },
      { meaning: list[distractors[0]].meaning, isCorrect: false },
      { meaning: list[distractors[1]].meaning, isCorrect: false },
      { meaning: list[distractors[2]].meaning, isCorrect: false }
    ];

    // Shuffle options
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }

    this.quizQuestion = { target, options };
    this.quizAnswered = false;
  }

  renderQuizView(filtered) {
    const list = filtered.length >= 4 ? filtered : this.words;
    if (!this.quizQuestion || !list.find(w => w.id === this.quizQuestion.target.id)) {
      this.generateNewQuizQuestion(list);
    }

    const q = this.quizQuestion;
    if (!q) return this.renderEmptyState();

    return `
      <div class="quiz-modal-container">
        <div class="quiz-modal-header">
          <div>
            <span class="daily-word-badge" style="background-color: var(--gold-light); color: var(--gold); border-color: var(--gold-border);">मराठी शब्दखेळ व चाचणी</span>
            <h3 style="margin-top: 0.35rem; font-size: 1.35rem;">खालील शब्दाचा योग्य अर्थ ओळखा:</h3>
          </div>
          <div style="font-size: 0.95rem; background: var(--bg-secondary); padding: 0.4rem 1.1rem; border-radius: var(--radius-full); border: 1px solid var(--border-subtle);">
            गुण: <strong>${this.quizScore}</strong>
          </div>
        </div>

        <div style="text-align: center; margin: 1.75rem 0 2rem;">
          <div class="quiz-question-word">${q.target.word}</div>
          <button class="daily-speak-btn" id="quiz-speak-target-btn" data-word="${q.target.word}" style="margin: 0.5rem auto 0;">
            🔊 शब्द उच्चार ऐका
          </button>
        </div>

        <div class="quiz-options-grid">
          ${q.options.map((opt, i) => `
            <button class="quiz-option-btn ${this.quizAnswered ? (opt.isCorrect ? 'correct' : (opt.selected ? 'wrong' : '')) : ''}" data-idx="${i}" ${this.quizAnswered ? 'disabled' : ''}>
              <span style="color: var(--accent-primary); font-weight: 500; margin-right: 0.5rem;">${['अ', 'ब', 'क', 'ड'][i]}.</span>
              <span>${opt.meaning}</span>
            </button>
          `).join('')}
        </div>

        ${this.quizAnswered ? `
          <div class="quiz-feedback-box" style="background-color: ${this.quizLastCorrect ? 'rgba(21, 128, 61, 0.08)' : 'rgba(185, 28, 28, 0.08)'}; border: 1px solid ${this.quizLastCorrect ? 'rgba(21, 128, 61, 0.25)' : 'rgba(185, 28, 28, 0.25)'};">
            <div style="font-weight: 500; font-size: 1.15rem; color: ${this.quizLastCorrect ? '#15803d' : '#b91c1c'}; margin-bottom: 0.4rem;">
              ${this.quizLastCorrect ? '🎉 शाब्बास! अचूक उत्तर!' : 'चुकीचे उत्तर. योग्य अर्थ: ' + q.target.meaning}
            </div>
            <div style="font-size: 0.92rem; color: var(--text-secondary);">
              इंग्रजी अर्थ: <strong>${q.target.english}</strong> (${q.target.pos})
            </div>
            <button class="intro-explore-next-btn" id="quiz-next-question-btn" style="margin-top: 1.25rem;">
              पुढील प्रश्न खेळा →
            </button>
          </div>
        ` : ''}
      </div>
    `;
  }

  attachQuizViewEvents() {
    const speakBtn = document.getElementById('quiz-speak-target-btn');
    if (speakBtn) {
      speakBtn.addEventListener('click', () => {
        const word = speakBtn.getAttribute('data-word');
        if (window.audioManager && word) {
          window.audioManager.playTap(600, 0.03);
          window.audioManager.speak(word);
        }
      });
    }

    const optBtns = this.container.querySelectorAll('.quiz-option-btn');
    optBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.quizAnswered) return;
        const idx = parseInt(btn.getAttribute('data-idx'));
        const opt = this.quizQuestion.options[idx];
        opt.selected = true;
        this.quizAnswered = true;
        this.quizLastCorrect = opt.isCorrect;

        if (opt.isCorrect) {
          this.quizScore += 10;
          if (window.audioManager) window.audioManager.playExplore();
        } else {
          if (window.audioManager) window.audioManager.playTap(320, 0.06);
        }

        this.render();
      });
    });

    const nextBtn = document.getElementById('quiz-next-question-btn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        this.generateNewQuizQuestion(this.getFilteredWords());
        if (window.audioManager) window.audioManager.playTap(520, 0.03);
        this.render();
      });
    }
  }
}

window.flashcardsModule = new FlashcardsModule();
