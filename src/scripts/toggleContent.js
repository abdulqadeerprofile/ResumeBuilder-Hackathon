document.querySelectorAll('.section-heading').forEach(function (heading) {
    heading.addEventListener('click', function () {
        var content = heading.nextElementSibling;
        var icon = heading.querySelector('.toggle-icon');
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
            icon.classList.remove('fa-chevron-right');
            icon.classList.add('fa-chevron-down');
            icon.style.transform = 'rotate(180deg)'; // Rotate icon for better visual effect
        }
        else {
            content.style.display = 'none';
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-right');
            icon.style.transform = 'rotate(0deg)'; // Reset rotation
        }
    });
});
