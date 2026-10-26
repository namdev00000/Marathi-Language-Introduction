// नेव्हिगेशन व विभाग व्यवस्थापक (Navigation, Welcome Screen, S-Curvy Timeline & Lightbox Modal)

class NavigationManager {
  constructor() {
    this.activeSection = 'intro';
    this.isSidebarCollapsed = localStorage.getItem('marathi_sidebar_collapsed') === 'true';
    this.isAppStarted = false;
    this.lightboxOpen = false;
  }

  init() {
    this.setupWelcomeScreen();
    this.setupSidebar();
    this.setupHeaderControls();
    this.setupSectionSwitching();
    this.setupKeyboardNav();
    this.setupLightboxModal();

    // Check if user previously bypassed welcome screen
    const visited = sessionStorage.getItem('marathi_explored');
    if (visited === 'true') {
      this.enterApp(false);
    }
  }

  setupWelcomeScreen() {
    const exploreBtn = document.getElementById('explore-btn');
    if (exploreBtn) {
      exploreBtn.addEventListener('click', () => {
        if (window.audioManager) {
          window.audioManager.playExplore();
        }
        this.enterApp(true);
      });
    }

    // Secondary CTA: Go directly to 1000 words vocabulary
    const vocabBtn = document.getElementById('explore-vocab-btn');
    if (vocabBtn) {
      vocabBtn.addEventListener('click', () => {
        if (window.audioManager) {
          window.audioManager.playExplore();
        }
        this.enterApp(true, 'flashcards');
      });
    }

    // Direct section shortcuts on the welcome card
    const shortcuts = document.querySelectorAll('.shortcut-pill');
    shortcuts.forEach(pill => {
      pill.addEventListener('click', () => {
        const target = pill.getAttribute('data-jump');
        if (window.audioManager) window.audioManager.playExplore();
        this.enterApp(true, target || 'intro');
      });
    });

    // Preview letter tiles speech on welcome screen
    const previewTiles = document.querySelectorAll('.preview-letter-tile');
    previewTiles.forEach(tile => {
      tile.addEventListener('click', (e) => {
        e.stopPropagation();
        const letter = tile.textContent.trim();
        if (window.audioManager) {
          window.audioManager.playTap(620, 0.04);
          window.audioManager.speak(letter);
        }
      });
    });

    // Preview word chips speech on welcome screen
    const previewWords = document.querySelectorAll('.preview-word-chip');
    previewWords.forEach(chip => {
      chip.addEventListener('click', (e) => {
        e.stopPropagation();
        const word = chip.textContent.trim();
        if (window.audioManager) {
          window.audioManager.playTap(580, 0.04);
          window.audioManager.speak(word);
        }
      });
    });
  }

  enterApp(animate = true, initialSection = 'intro') {
    this.isAppStarted = true;
    sessionStorage.setItem('marathi_explored', 'true');

    const welcomeScreen = document.getElementById('welcome-hero-screen');
    const appContainer = document.getElementById('app-main-workspace');

    if (animate && welcomeScreen) {
      welcomeScreen.classList.add('fade-out-up');
      setTimeout(() => {
        welcomeScreen.style.display = 'none';
        if (appContainer) {
          appContainer.style.display = 'flex';
          appContainer.classList.add('fade-in');
        }
        this.switchSection(initialSection);
      }, 500);
    } else {
      if (welcomeScreen) welcomeScreen.style.display = 'none';
      if (appContainer) {
        appContainer.style.display = 'flex';
      }
      this.switchSection(initialSection);
    }
  }

  setupSidebar() {
    const sidebar = document.getElementById('vertical-tool-nav');
    const toggleBtn = document.getElementById('toggle-sidebar-btn');

    if (this.isSidebarCollapsed && sidebar) {
      sidebar.classList.add('collapsed');
    }

    if (toggleBtn && sidebar) {
      toggleBtn.addEventListener('click', () => {
        this.isSidebarCollapsed = !this.isSidebarCollapsed;
        sidebar.classList.toggle('collapsed', this.isSidebarCollapsed);
        localStorage.setItem('marathi_sidebar_collapsed', this.isSidebarCollapsed);

        if (window.audioManager) {
          window.audioManager.playTap(520, 0.03);
        }
      });
    }

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn && sidebar) {
      mobileMenuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('mobile-open');
        if (window.audioManager) window.audioManager.playTap(500, 0.03);
      });
    }
  }

  setupHeaderControls() {
    // Theme toggle
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        if (window.themeManager) {
          window.themeManager.cycleTheme();
        }
      });
    }

    // Sound toggle
    const soundBtn = document.getElementById('sound-toggle-btn');
    const soundLabel = document.getElementById('sound-toggle-label');
    const soundIcon = document.getElementById('sound-toggle-icon');

    const updateSoundUI = () => {
      const isEnabled = window.audioManager ? window.audioManager.isSoundEnabled() : true;
      if (soundLabel) soundLabel.textContent = isEnabled ? 'ध्वनी: चालू' : 'ध्वनी: बंद';
      if (soundIcon) {
        soundIcon.innerHTML = isEnabled ? `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
        ` : `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <line x1="23" y1="9" x2="17" y2="15"></line>
            <line x1="17" y1="9" x2="23" y2="15"></line>
          </svg>
        `;
      }
      if (soundBtn) {
        soundBtn.classList.toggle('sound-muted', !isEnabled);
      }
    };

    updateSoundUI();

    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        if (window.audioManager) {
          window.audioManager.toggleSound();
          updateSoundUI();
        }
      });
    }
  }

  setupSectionSwitching() {
    const navItems = document.querySelectorAll('.nav-tool-item');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        const target = item.getAttribute('data-section');
        if (target && target !== this.activeSection) {
          if (window.audioManager) window.audioManager.playSectionSwitch();
          this.switchSection(target);

          // Close mobile menu if open
          const sidebar = document.getElementById('vertical-tool-nav');
          if (sidebar) sidebar.classList.remove('mobile-open');
        }
      });
    });
  }

  switchSection(sectionId) {
    this.activeSection = sectionId;

    // Update nav active states
    const navItems = document.querySelectorAll('.nav-tool-item');
    navItems.forEach(item => {
      const isTarget = item.getAttribute('data-section') === sectionId;
      item.classList.toggle('active', isTarget);
    });

    // Update section visibility
    const panels = document.querySelectorAll('.content-panel-section');
    panels.forEach(panel => {
      const isTarget = panel.id === `section-${sectionId}`;
      panel.classList.toggle('active', isTarget);
    });

    // Initialize or refresh target module
    if (sectionId === 'intro') {
      this.renderIntroSection();
    } else if (sectionId === 'history') {
      this.renderHistorySection();
    } else if (sectionId === 'varnamala') {
      if (window.varnamalaModule) window.varnamalaModule.init('varnamala-root');
    } else if (sectionId === 'grammar') {
      if (window.grammarModule) window.grammarModule.init('grammar-root');
    } else if (sectionId === 'dialects') {
      if (window.dialectsModule) window.dialectsModule.init('dialects-root');
    } else if (sectionId === 'flashcards') {
      if (window.flashcardsModule) window.flashcardsModule.init('flashcards-root');
    } else if (sectionId === 'resources') {
      if (window.resourcesModule) window.resourcesModule.init('resources-root');
    }

    // Scroll to top of stage
    const stage = document.getElementById('content-stage-scroll');
    if (stage) stage.scrollTop = 0;
  }

  renderIntroSection() {
    const root = document.getElementById('intro-root');
    if (!root) return;

    const intro = MARATHI_CONTENT.intro;

    const sectionJourney = [
      { id: 'intro', icon: '📖', label: '१. परिचय' },
      { id: 'history', icon: '🏛️', label: '२. इतिहास' },
      { id: 'varnamala', icon: '🔤', label: '३. वर्णमाला' },
      { id: 'grammar', icon: '📝', label: '४. व्याकरण' },
      { id: 'dialects', icon: '🗺️', label: '५. बोलीभाषा' },
      { id: 'flashcards', icon: '📚', label: '६. १००० शब्द' },
      { id: 'resources', icon: '🎓', label: '७. संसाधने' }
    ];

    const highlightIcons = ['🌍', '👥', '🏆', '📜'];

    root.innerHTML = `
      <div class="module-header">
        <div class="module-title-wrap">
          <span class="module-tag">भाषा परिचय</span>
          <h2 class="module-heading">${intro.title}</h2>
        </div>
        <p class="module-desc">${intro.subtitle}</p>
      </div>

      <!-- Horizontal Explore Marathi Journey Bar -->
      <div class="journey-bar" role="navigation" aria-label="विभाग मार्गक्रमण">
        ${sectionJourney.map(s => `
          <button class="journey-step ${s.id === 'intro' ? 'active' : ''}" data-target="${s.id}" title="${s.label} विभागात जा">
            <span class="journey-step-icon">${s.icon}</span>
            <span class="journey-step-label">${s.label}</span>
          </button>
        `).join('')}
      </div>

      <!-- Hero Quote Banner -->
      <div class="intro-quote-card">
        <blockquote class="intro-quote-text">
          "${intro.quote}"
        </blockquote>
        <cite class="intro-quote-author">${intro.quoteAuthor}</cite>
      </div>

      <!-- Highlights Grid with Distinct Accent Colors and Icons -->
      <div class="intro-highlights-grid">
        ${intro.highlights.map((h, i) => `
          <div class="highlight-tile">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.4rem;">
              <span style="font-size: 1.4rem;">${highlightIcons[i] || '✦'}</span>
              <span class="highlight-badge">${h.badge}</span>
            </div>
            <div class="highlight-number">${h.value}</div>
            <p class="highlight-desc">${h.description}</p>
          </div>
        `).join('')}
      </div>

      <!-- Detailed Overview Section with Cultural Artwork -->
      <div class="intro-prose-card">
        <div style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;">
          <div style="flex: 1; min-width: 280px;">
            <h3 class="prose-card-heading">मराठीचे भाषिक वैभव व समृद्ध वारसा</h3>
            <div class="gold-divider"></div>
            <p class="prose-text">${intro.overview}</p>
          </div>
          <div style="flex-shrink: 0; width: 220px; text-align: center;">
            <img src="assets/marathi_manuscript.png" alt="मराठी हस्तलिखित व वाङ्मय" style="width: 100%; max-height: 180px; object-fit: contain; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.06));" />
            <span style="display: block; font-size: 0.78rem; color: var(--text-muted); margin-top: 0.4rem;">प्राकृत-संस्कृत ते आधुनिक वाङ्मय</span>
          </div>
        </div>
        
        <div class="intro-cta-banner">
          <div class="cta-text">
            <strong>पुढील टप्पा:</strong> मराठीची ५२ वर्णांची वर्णमाला, अडीच हजार वर्षांचा इतिहास व १००० शब्द जाणून घ्या.
          </div>
          <div style="display: flex; gap: 0.65rem; flex-wrap: wrap;">
            <button class="intro-explore-next-btn" id="intro-to-varnamala-btn">
              वर्णमाला पहा →
            </button>
            <button class="intro-explore-next-btn" id="intro-to-vocab-btn" style="background-color: var(--bg-surface); color: var(--accent-primary); border: 1.5px solid var(--accent-border);">
              १००० शब्द शोधा 📚
            </button>
          </div>
        </div>
      </div>
    `;

    // Journey bar step clicks
    const journeyBtns = root.querySelectorAll('.journey-step');
    journeyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');
        if (target && target !== this.activeSection) {
          if (window.audioManager) window.audioManager.playSectionSwitch();
          this.switchSection(target);
        }
      });
    });

    const nextBtn = document.getElementById('intro-to-varnamala-btn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (window.audioManager) window.audioManager.playSectionSwitch();
        this.switchSection('varnamala');
      });
    }

    const vocabNextBtn = document.getElementById('intro-to-vocab-btn');
    if (vocabNextBtn) {
      vocabNextBtn.addEventListener('click', () => {
        if (window.audioManager) window.audioManager.playSectionSwitch();
        this.switchSection('flashcards');
      });
    }
  }

  renderHistorySection() {
    const root = document.getElementById('history-root');
    if (!root) return;

    const timeline = MARATHI_CONTENT.historyTimeline;
    const marathiNumbers = ['१', '२', '३', '४', '५', '६'];

    root.innerHTML = `
      <div class="module-header widescreen-header">
        <div class="module-title-wrap">
          <span class="module-tag">अडीच हजार वर्षांची गाथा</span>
          <h2 class="module-heading">मराठी भाषेचा उगम आणि ऐतिहासिक प्रवास</h2>
        </div>
        <p class="module-desc">
          वैदिक प्राकृत, सातवाहनांची महाराष्ट्री, चक्रधर स्वामींचे लीळाचरित्र, ज्ञानेश्वरांची अमृतवाणी, छत्रपती शिवरायांचा राज्यव्यवहार कोश आणि २०२४ चा अभिजात दर्जा — खालील सरळ मध्यवर्ती कालरेषेवर (Straight Center Timeline) मराठीच्या समृद्ध इतिहासाचा अनुभव घ्या. छायाचित्रावर क्लिक करून मोठ्या आकारात (Pop-up) पहा.
        </p>
      </div>

      <!-- Widescreen Straight Center Timeline Container -->
      <div class="straight-center-timeline-container" id="history-timeline-container">
        
        <!-- Timeline Top Start Crest -->
        <div class="timeline-start-crest">
          <div class="start-crest-badge" title="मराठी भाषेचा उगम">
            <span class="start-crest-icon">🪶</span>
          </div>
          <span class="start-crest-label">मराठी भाषा उगम व प्रारंभ</span>
        </div>

        <!-- Continuous Straight Center Spine Line -->
        <div class="timeline-center-spine" aria-hidden="true"></div>

        <!-- Alternating Story Chapters List (Increased Width Aligned with Center Spine) -->
        <div class="story-chapters-list">
          ${timeline.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            const num = marathiNumbers[idx];

            return `
            <article class="story-chapter-node ${isLeft ? 'node-left' : 'node-right'}" data-index="${idx}">
              
              <!-- Milestone Crest Badge sitting directly on the Center Spine -->
              <div class="center-spine-badge" title="टप्पा ${num}">
                <span>${num}</span>
              </div>

              <!-- Horizontal stem connecting center badge directly to the card -->
              <div class="spine-to-card-connector" aria-hidden="true"></div>

              <!-- Main Story Card (Wide & Aligned with Center Line) -->
              <div class="story-card">
                <!-- Card Header -->
                <div class="story-card-top">
                  <div class="story-meta-tags">
                    <span class="chapter-badge">${item.chapter}</span>
                    <span class="era-pill">${item.era}</span>
                  </div>
                  <h3 class="story-title">${item.title}</h3>
                </div>

                <!-- Wikimedia Image Section (Clickable to Pop-up) -->
                <figure class="story-figure">
                  <div class="story-image-wrap clickable-img-popup" 
                       data-img="${item.image}" 
                       data-title="${item.title}" 
                       data-caption="${item.imageCaption}" 
                       data-credit="${item.credit}" 
                       data-lic="${item.license}" 
                       data-src="${item.sourceUrl}"
                       title="प्रतिमा मोठ्या आकारात (Pop-up) पाहण्यासाठी क्लिक करा">
                    <img src="${item.image}" alt="${item.imageAlt}" class="story-image" loading="lazy" />
                    <div class="img-zoom-tag">
                      <span>⤢ मोठ्या आकारात पहा</span>
                    </div>
                  </div>
                  <figcaption class="story-caption">
                    <p class="caption-text">${item.imageCaption}</p>
                    <div class="image-credit-badge">
                      <span class="credit-label">छायाचित्र:</span>
                      <span class="credit-val">${item.credit}</span>
                      <span class="credit-sep">•</span>
                      <span class="credit-lic">${item.license}</span>
                      <a href="${item.sourceUrl}" target="_blank" rel="noopener noreferrer" class="credit-link" title="विकिमीडिया कॉमन्सवरील मूळ दस्तऐवज उघडा">
                        Wikimedia Commons ↗
                      </a>
                    </div>
                  </figcaption>
                </figure>

                <!-- Story Narrative Body -->
                <div class="story-prose">
                  ${item.story.split('\n\n').map(p => `<p class="prose-p">${p}</p>`).join('')}
                </div>

                <!-- Key Milestone & Famous Quote Box -->
                <div class="story-milestone-box">
                  <div class="milestone-ref">
                    <span class="ref-icon">📜</span>
                    <span class="ref-text">${item.milestone}</span>
                  </div>
                  <div class="milestone-quote-line">
                    <span class="quote-label">अमर साहित्योद्धरण:</span>
                    <blockquote class="quote-content">${item.milestoneQuote}</blockquote>
                  </div>
                </div>

                <!-- Listen to Chapter Story Summary Button -->
                <div class="story-actions-footer">
                  <button class="chapter-listen-btn" data-idx="${idx}" title="या प्रकरणाचा सारांश ऐका">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                    </svg>
                    <span>प्रकरणाचा गोषवारा ऐका</span>
                  </button>
                </div>
              </div>

            </article>
          `;
          }).join('')}
        </div>

        <!-- Timeline Finale (3 October 2024 Classical Language Status) -->
        <div class="timeline-finale-wrap">
          <div class="finale-badge-halo">
            <span class="finale-star-icon">🏆</span>
          </div>
          <div class="finale-card">
            <span class="finale-tag">ऐतिहासिक सुवर्णक्षण — ३ ऑक्टोबर २०२४</span>
            <h3 class="finale-title">मराठी — भारताची अधिकृत अभिजात भाषा (Classical Language)</h3>
            <p class="finale-desc">
              अडीच हजार वर्षांचा अखंड साहित्यिक, सांस्कृतिक व ऐतिहासिक वारसा सिद्ध झाल्यानंतर भारत सरकारच्या केंद्रीय मंत्रिमंडळाने मराठी भाषेला अभिजात भाषेचा सर्वोच्च राष्ट्रीय सन्मान प्रदान केला.
            </p>
          </div>
        </div>

      </div>
    `;

    // Attach TTS audio to chapter summary buttons
    const listenBtns = root.querySelectorAll('.chapter-listen-btn');
    listenBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-idx'));
        const chapterData = timeline[idx];
        if (chapterData && window.audioManager) {
          window.audioManager.playTap(580, 0.03);
          const summaryText = `${chapterData.chapter}. ${chapterData.title}. ${chapterData.milestone}`;
          window.audioManager.speak(summaryText);
        }
      });
    });

    // Attach Pop-up Click to all story image wrappers
    const imgWraps = root.querySelectorAll('.clickable-img-popup');
    imgWraps.forEach(wrap => {
      wrap.addEventListener('click', () => {
        const image = wrap.getAttribute('data-img');
        const title = wrap.getAttribute('data-title');
        const caption = wrap.getAttribute('data-caption');
        const credit = wrap.getAttribute('data-credit');
        const license = wrap.getAttribute('data-lic');
        const sourceUrl = wrap.getAttribute('data-src');

        this.openLightbox({
          image,
          title,
          caption,
          credit,
          license,
          sourceUrl
        });
      });
    });
  }

  setupLightboxModal() {
    const modal = document.getElementById('image-lightbox-modal');
    const closeBtn = document.getElementById('lightbox-close-btn');
    const backdrop = document.getElementById('lightbox-backdrop');

    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeLightbox());
    }
    if (backdrop) {
      backdrop.addEventListener('click', () => this.closeLightbox());
    }
  }

  openLightbox(data) {
    const modal = document.getElementById('image-lightbox-modal');
    const img = document.getElementById('lightbox-img');
    const titleEl = document.getElementById('lightbox-title');
    const captionEl = document.getElementById('lightbox-caption');
    const creditsEl = document.getElementById('lightbox-credits');

    if (!modal || !img) return;

    img.src = data.image || '';
    img.alt = data.title || '';
    if (titleEl) titleEl.textContent = data.title || '';
    if (captionEl) captionEl.textContent = data.caption || '';
    
    if (creditsEl) {
      creditsEl.innerHTML = `
        <span class="lb-credit-item"><strong>छायाचित्र सौजन्य:</strong> ${data.credit || 'Wikimedia Commons'}</span>
        <span class="lb-credit-sep">•</span>
        <span class="lb-credit-badge">${data.license || 'Public Domain'}</span>
        ${data.sourceUrl ? `
          <a href="${data.sourceUrl}" target="_blank" rel="noopener noreferrer" class="lb-source-link">
            मूळ स्त्रोत उघडा ↗
          </a>
        ` : ''}
      `;
    }

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    this.lightboxOpen = true;

    if (window.audioManager) {
      window.audioManager.playTap(640, 0.04);
    }
  }

  closeLightbox() {
    const modal = document.getElementById('image-lightbox-modal');
    if (!modal) return;

    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    this.lightboxOpen = false;

    if (window.audioManager) {
      window.audioManager.playTap(440, 0.03);
    }
  }

  setupKeyboardNav() {
    window.addEventListener('keydown', (e) => {
      // Lightbox Escape key
      if (e.key === 'Escape' && this.lightboxOpen) {
        this.closeLightbox();
        return;
      }

      // If flashcards section is active and in single view
      if (this.activeSection === 'flashcards' && window.flashcardsModule && window.flashcardsModule.viewMode === 'single') {
        if (e.key === 'ArrowRight') {
          const nextBtn = document.getElementById('next-card-btn');
          if (nextBtn && !nextBtn.disabled) nextBtn.click();
        } else if (e.key === 'ArrowLeft') {
          const prevBtn = document.getElementById('prev-card-btn');
          if (prevBtn && !prevBtn.disabled) prevBtn.click();
        } else if (e.key === ' ' || e.key === 'Enter') {
          if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'SELECT') {
            e.preventDefault();
            const flipBtn = document.getElementById('flip-action-btn');
            if (flipBtn) flipBtn.click();
          }
        }
      }
    });
  }
}

window.navigationManager = new NavigationManager();
