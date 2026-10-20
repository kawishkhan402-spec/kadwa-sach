if ('serviceWorker' in navigator) { navigator.serviceWorker.register('sw.js').catch(() => {}); }
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault(); deferredPrompt = e;
  const bar = document.getElementById('installBar'); if (bar) bar.style.display = 'block';
});
async function doInstall() {
  if (deferredPrompt) { deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt = null; const bar = document.getElementById('installBar'); if (bar) bar.style.display = 'none'; }
  else { alert('App install karne ke liye: Chrome menu (⋮) → "Install app" / "Add to Home screen" chunein. iPhone par: Share → "Add to Home Screen".'); }
}
document.addEventListener('DOMContentLoaded', () => {
  const b1 = document.getElementById('installBtn'); if (b1) b1.addEventListener('click', doInstall);
  const b2 = document.getElementById('installBtn2'); if (b2) b2.addEventListener('click', doInstall);
});
