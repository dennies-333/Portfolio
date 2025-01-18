const trail = document.getElementById('trail');
let mouseX = 0, mouseY = 0; // Cursor position
let trailX = 0, trailY = 0; // Trail position
const smoothFactor = 0.02; // Slightly adjusted for smoother movement

document.addEventListener('mousemove', (event) => {
    mouseX = event.pageX + 30; // Add small offset from cursor
    mouseY = event.pageY + 30;
});

function animateTrail() {
    // Gradually move the trail towards the cursor position
    trailX += (mouseX - trailX) * smoothFactor;
    trailY += (mouseY - trailY) * smoothFactor;
    trail.style.left = `${trailX}px`;
    trail.style.top = `${trailY}px`;
    requestAnimationFrame(animateTrail);
}

document.querySelector('.moon-icon').addEventListener('click', function() {
    // Toggle dark mode
    document.body.classList.toggle('light-mode');
    // Switch between moon and sun icons
    document.querySelector('.moon-icon').style.display = 'none';  // Hide moon
    document.querySelector('.sun-icon').style.display = 'block';  // Show sun
  });
  
  document.querySelector('.sun-icon').addEventListener('click', function() {
    // Toggle dark mode off (back to light mode)
    document.body.classList.toggle('light-mode');
  
    // Switch between sun and moon icons
    document.querySelector('.moon-icon').style.display = 'block'; // Show moon
    document.querySelector('.sun-icon').style.display = 'none';  // Hide sun
  });

  
  

animateTrail();


