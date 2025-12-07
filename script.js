// Minimal script for subtle visual polish
document.addEventListener('DOMContentLoaded', function () {
  // small parallax effect on mouse move for hero visual
  const visual = document.querySelector('.hero-visual');
  if (!visual) return;

  visual.addEventListener('mousemove', (e) => {
    const rect = visual.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const blob = document.querySelector('#blob');
    if (blob) {
      const tx = x * 10;
      const ty = y * 10;
      blob.style.transform = `translate(${tx}px, ${ty}px)`;
    }
  });

  visual.addEventListener('mouseleave', () => {
    const blob = document.querySelector('#blob');
    if (blob) blob.style.transform = '';
  });
});
