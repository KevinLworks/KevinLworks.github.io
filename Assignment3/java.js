// Developed with GitHub Copilot assistance, code from line 37 to line 156 creates interactive audio players with animated voice waveform visualizations

document.addEventListener('DOMContentLoaded', function() {

  const introScreen = document.getElementById('startpage');
  const mainContent = document.getElementById('content');
  const startupSound = document.getElementById('startupSound');

  if (!introScreen || !mainContent) return;

  
  introScreen.addEventListener("click", () => {
    
    if (startupSound) {
      startupSound.volume = 0.3; 
      startupSound.currentTime = 0; 
      startupSound.play().catch(() => {
        console.log('Startup sound could not be played - user interaction may be required');
      });
    }
    
    introScreen.classList.add("fadeout");
    setTimeout(() => {
      introScreen.classList.add("hidden");
      mainContent.classList.remove("hidden");
    }, 1000);
  });

  const audioPlayer = document.getElementById('audioPlayer');
  const playButton = document.getElementById('playButton');
  const visualizer = document.getElementById('visualizer');
  
  let isPlaying = false;
  let animationId;


  function createVisualizer() {
    for (let i = 0; i < 50; i++) {
      const bar = document.createElement('div');
      bar.className = 'bar';
      bar.style.height = '10px';
      visualizer.appendChild(bar);
    }
  }


  function togglePlay() {
    if (isPlaying) {
      audioPlayer.pause();
      playButton.textContent = '▶';
      isPlaying = false;
      stopAnimation();
    } else {
      audioPlayer.play().catch(() => {});
      playButton.textContent = '⏸';
      isPlaying = true;
      startAnimation();
    }
  }

  function animate() {
    if (!isPlaying) return;
    
    const bars = visualizer.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
      const height = Math.random() * 60 + 20;
      bar.style.height = height + 'px';
    });
    
    animationId = requestAnimationFrame(animate);
  }

  function startAnimation() {
    animate();
  }

  function stopAnimation() {
    cancelAnimationFrame(animationId);
    visualizer.querySelectorAll('.bar').forEach(bar => {
      bar.style.height = '10px';
    });
  }

  
  audioPlayer.addEventListener('ended', () => {
    playButton.textContent = '▶';
    isPlaying = false;
    stopAnimation();
  });

  createVisualizer();
  playButton.addEventListener('click', togglePlay);
  
  const audioPlayer2 = document.getElementById('audioPlayer2');
  const playButton2 = document.getElementById('playButton2');
  const visualizer2 = document.getElementById('visualizer2');
  
  let isPlaying2 = false;
  let animationId2;

  function createVisualizer2() {
    for (let i = 0; i < 50; i++) {
      const bar = document.createElement('div');
      bar.className = 'bar';
      bar.style.height = '10px';
      visualizer2.appendChild(bar);
    }
  }

  function togglePlay2() {
    if (isPlaying2) {
      audioPlayer2.pause();
      playButton2.textContent = '▶';
      isPlaying2 = false;
      stopAnimation2();
    } else {
      audioPlayer2.play().catch(() => {});
      playButton2.textContent = '⏸';
      isPlaying2 = true;
      startAnimation2();
    }
  }

  function animate2() {
    if (!isPlaying2) return;
    
    const bars = visualizer2.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
      const height = Math.random() * 60 + 20;
      bar.style.height = height + 'px';
    });
    
    animationId2 = requestAnimationFrame(animate2);
  }

  function startAnimation2() {
    animate2();
  }

  function stopAnimation2() {
    cancelAnimationFrame(animationId2);
    visualizer2.querySelectorAll('.bar').forEach(bar => {
      bar.style.height = '10px';
    });
  }

  
  audioPlayer2.addEventListener('ended', () => {
    playButton2.textContent = '▶';
    isPlaying2 = false;
    stopAnimation2();
  });

  createVisualizer2();
  playButton2.addEventListener('click', togglePlay2);
});


function toggleContent(contentId) {
  const content = document.getElementById(contentId);
  const icon = content.previousElementSibling.querySelector('.toggleicon');
  
  if (content.classList.contains('expanded')) {
    content.classList.remove('expanded');
    icon.classList.remove('rotated');
  } else {
    content.classList.add('expanded');
    icon.classList.add('rotated');
  }
}


function goToSection(sectionId) {
  
  const startPage = document.getElementById('startpage');
  const content = document.getElementById('content');
  const startupSound = document.getElementById('startupSound');
  
  if (startPage && !startPage.classList.contains('hidden')) {
    
    if (startupSound) {
      startupSound.volume = 0.3; 
      startupSound.currentTime = 0;
      startupSound.play().catch(() => {
        console.log('Startup sound could not be played - user interaction may be required');
      });
    }

    startPage.classList.add("fadeout");
    setTimeout(() => {
      startPage.classList.add("hidden");
      content.classList.remove("hidden");
      setTimeout(() => {
        document.getElementById(sectionId).scrollIntoView({
          behavior: 'smooth'
        });
      }, 100);
    }, 1000);
  } else {
    
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
  }
  return false; 
}


document.addEventListener('DOMContentLoaded', function() {
  const video = document.querySelector('.roundedvideo');
  const overlay = document.getElementById('videoOverlay');
  
  if (!video || !overlay) return;

  
  video.addEventListener('play', function() {
    overlay.classList.add('active');
    video.classList.add('playing');
  });

  
  video.addEventListener('pause', function() {
    overlay.classList.remove('active');
    video.classList.remove('playing');
  });

  video.addEventListener('ended', function() {
    overlay.classList.remove('active');
    video.classList.remove('playing');
  });

  
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) {
      video.pause();
    }
  });

  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      video.pause();
    }
  });
});
