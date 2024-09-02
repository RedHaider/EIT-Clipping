document.querySelectorAll('.slider').forEach(function(container) {
    const handle = container.querySelector('.slider-handle');
    const shadowOverlay = container.querySelector('.shadow-overlay');

    container.addEventListener('mousemove', function(e) {
        const containerRect = container.getBoundingClientRect();
        const offsetX = e.clientX - containerRect.left;

        const percentage = offsetX / containerRect.width * 100;

        handle.style.left = `${percentage}%`;
        shadowOverlay.style.width = `${percentage}%`;
    });

    container.addEventListener('touchmove', function(e) {
        const touch = e.touches[0];
        const containerRect = container.getBoundingClientRect();
        const offsetX = touch.clientX - containerRect.left;

        const percentage = offsetX / containerRect.width * 100;

        handle.style.left = `${percentage}%`;
        shadowOverlay.style.width = `${percentage}%`;
    });
});
