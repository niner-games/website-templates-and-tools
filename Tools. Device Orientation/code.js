function handleResize() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const overlay = document.getElementById('overlay');
    
    overlay.style.display = (windowWidth <= windowHeight) ? 'block' : 'none';
}

window.addEventListener('resize', handleResize);

handleResize();