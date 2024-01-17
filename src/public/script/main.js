document.addEventListener('DOMContentLoaded', () => {
  const editPopup = document.getElementById('editPopup');
  const editBtn = document.getElementById('editBtn');

  editBtn.addEventListener('click', () => {
    editPopup.style.display = 'block'; // Menampilkan pop-up edit saat tombol di klik
    // Di sini, Anda dapat memuat data yang ingin di-edit ke dalam form pop-up edit menggunakan JavaScript
    // Contohnya, dengan menggunakan AJAX untuk memperoleh data dari server dan mengisi formulir.
  });
});

const movingText = document.getElementById('moving-text');
let x = 0;
let y = 0;
let isIncreasing = true;

function moveText() {
  if (isIncreasing) {
    x++;
    y++;
  } else {
    x--;
    y--;
  }

  if (x >= 100) {
    isIncreasing = false;
  } else if (x <= 0) {
    isIncreasing = true;
  }

  movingText.style.transform = `translate(${x}px, ${y}px)`;
  requestAnimationFrame(moveText);
}

moveText();

