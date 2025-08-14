document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.project-btn');
    const preview = document.getElementById('project-preview');

    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            preview.textContent = btn.getAttribute('data-preview');
            preview.classList.add('active');
        });
        btn.addEventListener('mouseleave', () => {
            preview.textContent = '';
            preview.classList.remove('active');
        });
    });
});