// Handle Popups
document.querySelectorAll('.surprise-btn').forEach(button => {
    button.addEventListener('click', () => {
      const popupId = button.getAttribute('data-popup');
      document.getElementById(popupId).classList.remove('hidden');
    });
  });
  
  // Close Popups
  document.querySelectorAll('.close-btn').forEach(button => {
    button.addEventListener('click', () => {
      button.parentElement.classList.add('hidden');
    });
  });
  
  // Fireworks Animation
  const canvas = document.getElementById('fireworks-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  let fireworks = [];
  
  function createFirework(x, y) {
    for (let i = 0; i < 100; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 3 + 2;
      fireworks.push({
        x,
        y,
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
        alpha: 1
      });
    }
  }
  
  function renderFireworks() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fireworks.forEach((fw, i) => {
      fw.x += fw.dx;
      fw.y += fw.dy;
      fw.alpha -= 0.02;
      if (fw.alpha <= 0) fireworks.splice(i, 1);
      else {
        ctx.fillStyle = `rgba(255,105,180,${fw.alpha})`;
        ctx.beginPath();
        ctx.arc(fw.x, fw.y, 3, 0, Math.PI * 2);
        ctx.fill();
      }
    });
    requestAnimationFrame(renderFireworks);
  }
  
  document.getElementById('fireworks-btn').addEventListener('click', () => {
    canvas.classList.remove('hidden');
    createFirework(canvas.width / 2, canvas.height / 2);
    renderFireworks();
  });
  