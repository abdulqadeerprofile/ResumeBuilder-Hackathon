document.querySelectorAll('.section-heading').forEach(heading => {
  heading.addEventListener('click', () => {
    const content = heading.nextElementSibling as HTMLElement;
    const icon = heading.querySelector('.toggle-icon') as HTMLElement;

    if (content.style.display === 'none' || content.style.display === '') {
      content.style.display = 'block';
      icon.classList.remove('fa-chevron-right');
      icon.classList.add('fa-chevron-down');
      icon.style.transform = 'rotate(180deg)'; 
    } else {
      content.style.display = 'none';
      icon.classList.remove('fa-chevron-down');
      icon.classList.add('fa-chevron-right');
      icon.style.transform = 'rotate(0deg)'; 
    }
  });
});
