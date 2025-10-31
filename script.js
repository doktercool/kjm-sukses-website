// KJM Sukses — small helpers
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Smooth click for placeholder links (prevent jump if '#')
document.querySelectorAll('a[href="#"]').forEach(a=>{
  a.addEventListener('click', e => e.preventDefault());
});
