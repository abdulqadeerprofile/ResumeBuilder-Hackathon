// Ensure html2pdf is available
declare const html2pdf: any; // Use declare to avoid TypeScript errors if html2pdf isn't properly typed

// Toggle sections
const headings = document.querySelectorAll<HTMLElement>('.section-heading');
headings.forEach((heading) => {
  heading.addEventListener('click', () => {
    const content = heading.nextElementSibling as HTMLElement | null;
    if (content) {
      content.style.display = content.style.display === 'none' ? 'block' : 'none';
      const icon = heading.querySelector<HTMLElement>('.toggle-icon');
      if (icon) {
        icon.style.transform = icon.style.transform === 'rotate(90deg)' ? 'rotate(0deg)' : 'rotate(90deg)';
      }
    }
  });
});

// Modal logic
const modal = document.getElementById('profileModal') as HTMLElement | null;
const editIcon = document.querySelector<HTMLElement>('.edit-icon');
const closeModal = document.querySelector<HTMLElement>('.close');
const fileInput = document.getElementById('fileInput') as HTMLInputElement | null;
const uploadButton = document.getElementById('uploadButton') as HTMLButtonElement | null;
const profileImage = document.getElementById('profileImage') as HTMLImageElement | null;

if (modal) {
  if (editIcon) {
    editIcon.onclick = () => {
      modal.style.display = 'block';
    };
  }

  if (closeModal) {
    closeModal.onclick = () => {
      modal.style.display = 'none';
    };
  }

  window.onclick = (event: MouseEvent) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
}

if (uploadButton && fileInput && profileImage) {
  uploadButton.onclick = () => {
    const file = fileInput.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (profileImage) {
          profileImage.src = reader.result as string;
          if (modal) {
            modal.style.display = 'none';
          }
        }
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please select an image file.');
    }
  };
}

function downloadPDF(): void {
  const resumeContent = document.body;
  html2pdf().from(resumeContent).save('resume.pdf');
}

function shareResume(): void {
  const url = window.location.href;
  if (navigator.share) {
    navigator.share({
      title: 'My Resume',
      url: url
    }).catch(console.error);
  } else {
    alert('Sharing is not supported on this browser.');
  }
}
