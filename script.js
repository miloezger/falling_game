const cursor = document.getElementById('customCursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

const images = [
  '/assets/images/yellow.png',
  '/assets/images/red.png',
  '/assets/images/brown.png',
  '/assets/images/orange.png',
  '/assets/images/green.png'
];

let points = 0;

function createElement() {
  const el = document.createElement('div');
  const isPenalty = Math.random() < 0.35; // 35% chance for penalty item

  if (isPenalty) {
    el.style.backgroundImage = 'url(/assets/images/fail.png)';
    el.className = 'falling penalty';
  } else {
    el.style.backgroundImage = `url(${images[Math.floor(Math.random() * images.length)]})`;
    el.className = 'falling';
  }
  
  el.style.left = Math.random() * 100 + 'vw';
  const duration = 5 + Math.random() * 10;
  el.style.animationDuration = `${duration}s`;
  el.style.transform = `rotate(${Math.random() * 360}deg)`;

  let rotation = 0;
  const rotateSpeed = (Math.random() - 0.5) * 2;
  const interval = setInterval(() => {
    rotation += rotateSpeed;
    el.style.transform = `rotate(${rotation}deg)`;
  }, 20);

  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(2)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
  });

  el.onclick = () => {
    clearInterval(interval);
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    const rect = el.getBoundingClientRect();
    showClickEffect(rect.left + rect.width / 2, rect.top + rect.height / 2);
    el.remove();
    
    if (isPenalty) {
      points--;
      showPenalty();
    } else {
      points++;
      if (points % 10 === 0) showAchievement();
    }
    
    document.getElementById('counter').textContent = `Points: ${points}`;
  };

  document.body.appendChild(el);
  setTimeout(() => el.remove(), duration * 1000);
}

function showClickEffect(x, y) {
  const effect = document.createElement('div');
  effect.className = 'click-effect';
  effect.style.left = `${x - 30}px`;
  effect.style.top = `${y - 30}px`;
  document.body.appendChild(effect);
  setTimeout(() => effect.remove(), 600);
}

function showAchievement() {
  const msg = document.createElement('div');
  msg.className = 'achievement';
  msg.textContent = '🎉 Achievement Unlocked! 🎉';
  document.body.appendChild(msg);
  setTimeout(() => msg.remove(), 2000);
}

function showPenalty() {
  const msg = document.createElement('div');
  msg.className = 'penalty-message';
  msg.textContent = '❌ Oops! -1 Point! ❌';
  document.body.appendChild(msg);
  setTimeout(() => msg.remove(), 2000);
}

document.addEventListener('DOMContentLoaded', () => {
  setInterval(createElement, 1000);
});