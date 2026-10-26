// मुख्य ॲप्लिकेशन बूटस्ट्रॅपर (Main Application Initializer)

document.addEventListener('DOMContentLoaded', () => {
  // Initialize navigation & core UI
  if (window.navigationManager) {
    window.navigationManager.init();
  }

  // Register click sound for all native buttons without custom handlers
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('button, .clickable');
    if (btn && window.audioManager && window.audioManager.isSoundEnabled()) {
      // If the button has no specific data-frequency or custom audio, play a gentle standard tap
      if (!btn.hasAttribute('data-custom-audio')) {
        window.audioManager.playTap(520, 0.025, 0.08);
      }
    }
  }, true);
});
