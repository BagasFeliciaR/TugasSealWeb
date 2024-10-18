// Mendapatkan elemen popup dan tombol close
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popupImg');
const closePopup = document.getElementById('closePopup');

// Menambahkan event listener ke gambar dengan class 'popup-trigger'
document.querySelectorAll('.popup-trigger').forEach(img => {
    img.addEventListener('click', () => {
        const imgSrc = img.src;
        popupImg.src = imgSrc; // Set gambar di popup
        popup.style.display = 'block'; // Tampilkan popup
        document.body.classList.add('popup-active'); // Nonaktifkan scroll
    });
});

// Menutup popup saat tombol close diklik
closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
    document.body.classList.remove('popup-active');
});

// Menutup popup jika klik di luar gambar
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
        document.body.classList.remove('popup-active');
    }
});
