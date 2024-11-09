"use strict";
const headings = document.querySelectorAll('.section-heading');
headings.forEach((heading) => {
    heading.addEventListener('click', () => {
        const content = heading.nextElementSibling;
        if (content) {
            content.style.display = content.style.display === 'none' ? 'block' : 'none';
            const icon = heading.querySelector('.toggle-icon');
            if (icon) {
                icon.style.transform = icon.style.transform === 'rotate(90deg)' ? 'rotate(0deg)' : 'rotate(90deg)';
            }
        }
    });
});
const modal = document.getElementById('profileModal');
const editIcon = document.querySelector('.edit-icon');
const closeModal = document.querySelector('.close');
const fileInput = document.getElementById('fileInput');
const uploadButton = document.getElementById('uploadButton');
const profileImage = document.getElementById('profileImage');
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
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}
if (uploadButton && fileInput && profileImage) {
    uploadButton.onclick = () => {
        var _a;
        const file = (_a = fileInput.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                if (profileImage) {
                    profileImage.src = reader.result;
                    if (modal) {
                        modal.style.display = 'none';
                    }
                }
            };
            reader.readAsDataURL(file);
        }
        else {
            alert('Please select an image file.');
        }
    };
}
function downloadPDF() {
    const resumeContent = document.body;
    html2pdf().from(resumeContent).save('resume.pdf');
}
function shareResume() {
    const url = window.location.href;
    if (navigator.share) {
        navigator.share({
            title: 'My Resume',
            url: url
        }).catch(console.error);
    }
    else {
        alert('Sharing is not supported on this browser.');
    }
}
