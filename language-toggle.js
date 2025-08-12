// Language toggle functionality
function initLanguageToggle(targetPage) {
  const languageToggle = document.getElementById('languageToggle');
  
  if (!languageToggle) {
    console.warn('Language toggle element not found');
    return;
  }

  // Handle language toggle click
  languageToggle.addEventListener('click', function(e) {
    e.preventDefault();
    // Send message to parent frame
    window.parent.postMessage({ action: 'navigate', page: targetPage }, '*');
  });

  // Fade out language toggle on scroll
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      languageToggle.style.opacity = '0';
      languageToggle.style.pointerEvents = 'none';
    } else {
      languageToggle.style.opacity = '1';
      languageToggle.style.pointerEvents = 'auto';
    }
  });
}

// Auto-initialize when script loads
document.addEventListener('DOMContentLoaded', function() {
  // Determine target page based on current page
  const isEnglish = document.documentElement.lang === 'en';
  const targetPage = isEnglish ? 'cv' : 'resume';
  initLanguageToggle(targetPage);
});