function openModal(imageSrc) {
    document.getElementById("imageModal").style.display = "block";
    document.getElementById("modalImage").src = imageSrc;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Add this to each image
document.querySelectorAll('.gallery-item img').forEach(img => {
      img.addEventListener('click', () => openModal(img.src));
});
