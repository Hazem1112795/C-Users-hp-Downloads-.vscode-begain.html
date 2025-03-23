document.addEventListener('DOMContentLoaded', () => {
    const cube = document.getElementById('cube');

    cube.addEventListener('mouseenter', () => {
        cube.style.transform = 'rotateY(180deg)';
    });

    cube.addEventListener('mouseleave', () => {
        cube.style.transform = 'rotateY(0deg)';
    });
});
